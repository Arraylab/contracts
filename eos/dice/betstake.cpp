
#include <string>

#include <eosiolib/eosio.hpp>
#include <eosiolib/asset.hpp>
#include <eosiolib/eosio.hpp>
#include <eosiolib/multi_index.hpp>

using eosio::asset;

using namespace eosio;

#define STAKEER N(starrystarry)  // account name of stake

class betstake : public eosio::contract {

    static constexpr uint32_t refund_delay_sec = 24 * 3600;


    private:

        /// @abi table unstaking
        struct unstaking {
            account_name    owner;
            asset           amount;
            time_point_sec  request_time;

            uint64_t primary_key()const { return owner; }

            EOSLIB_SERIALIZE( unstaking, (owner)(amount)(request_time) )
        };


        /// @abi table account i64
        struct account {
            account_name owner;
            asset        balance;

            bool is_empty() const { return !(balance.amount); }
            uint64_t primary_key() const { return owner; }

            EOSLIB_SERIALIZE( account, (owner)(balance) )
        };

        typedef eosio::multi_index< N(unstaking), unstaking> unstaking_index;
        typedef eosio::multi_index< N(account), account> account_index;

        account_index   accounts;
        unstaking_index unstakes;



    public:

        void stake(const account_name from, const asset& quantity) {

            require_auth(from);

            eosio_assert( quantity.is_valid(), "Invalid asset");
            eosio_assert( quantity.amount > 0, "must stake positive quantity");

            auto itr = accounts.find(from);
            if( itr == accounts.end() ) {
                itr = accounts.emplace(_self, [&](auto& acnt){
                    acnt.owner = from;
                })
            }

            std::string memo = "Input ad message!";

            action(
                permission_level{_self, N(active)},
                // TODO 填写代币合约
                N(eosio.token), 
                N(transfer),
                std::make_tuple(
                    from,
                    STAKEER,
                    quantity,
                    memo
                )
            ).send();

            accounts.modify( itr, 0, [&]( auto& acnt ) {
                acnt.balance += quantity;
            });
        }

        void unstake(const account_name to, const asset& quantity) {
            require_auth(to);

            eosio_assert( quantity.is_valid(), "Invalid asset");
            eosio_assert( quantity.amount > 0, "must stake positive quantity");

            auto itr = accounts.find(to);
            eosio_assert(itr != accounts.end(), "unknown account");

            accounts.modify(itr, 0, [&](auto& acnt) {
                eosio_assert(acnt.balance >= quantity, "insufficient balance");
                acnt.balance -= quantity;
            });

            auto req_itr = unstakes.find(to);
            if(req_itr == unstakes.end()) {
                req_itr = unstakes.emplace(_self, [&](auto& acnt){
                    acnt.owner = to;
                })
            }

            unstakes.modify(req_itr, 0, [&](auto& acnt){
                acnt.amount += quantity;
            });

            eosio::transaction txn{};
            txn.actions.emplace_back(
                eosio::permission_level(_self, N(active)),
                _self,
                N(refund),
                std::make_tuple(to)
            );
            txn.delay_sec = refund_delay_sec;
            txn.send(to.value, to);

            if(itr->is_empty()) {
                accounts.erase(itr);
            }           
        }

        void refund(const account_name owner) {
            require_auth(owner);

            auto req = unstakes.find(owner);
            eosio_assert(req != unstakes.end(), "refund request not found");
            eosio_assert(req->request_time + refund_delay_sec <= time_point_sec(now()), "refund is not available yet");

            action(
                permission_level{_self, N(active)},
                N(eosio.token),
                N(transfer),
                std::make_tuple(
                    _self,
                    to,
                    quantity,
                    memo
                )
            ).send();

            unstakes.erase(req);
        }

}
