# FunDice


## Compile
compile the contract

```shell
eosio-cpp -o fundice.wasm fundicegame.cpp --abigen
```

## Deploy

```shell
cleos set contract default fundice -p default@active
```

## Invoke action
Great! Now the contract is set, push an action to it.

### initcontract
```
cleos push action eosdice initcontract ["EOS8k5NoVdWQWDH7k7QTHiQDtqYAuYQ5Ptqgba5Puw88jfahWhqWp"] -p eosdice@active
```

### transfer
```
cleos push action eosdice transfer '["bob", "eosdice", "1.0000 SYS", "60-bob-ew312-jhhf7"]' -p eosdice@active
```

### reveal
```
cleos push action eosdice reveal '["13995901628746183616"]' -p eosdice@active
```

### get table
```
cleos get table eosdice eosdice activebets
```

### Jungle 测试网调用示例

1. 部署合约到测试网
```
cleos -u http://jungle.cryptolions.io:38888 set contract dicefunofeos ../dice -p dicefunofeos@active
```
2. 下注，调用transfer action，实际上是用户直接转账到合约账户即可
```
cleos -u http://jungle.cryptolions.io:38888 push action dicefunofeos transfer '["dicefuntest1", "dicefunofeos", "0.1000 EOS", "50-3232skk3w3f-baidudice111"]' -p dicefunofeos@active
```
3. 查询下注信息表内容
```
cleos -u http://jungle.cryptolions.io:38888 get table dicefunofeos dicefunofeos activebets
```

## Other command

### create wallet
```
cleos wallet create --to-console
```

open wallet
```
cleos wallet open
```

unlock wallet
```
cleos wallet unlock
```

list wallet
```
cleos wallet list
```

### Generate private key

```
cleos wallet create_key
```
or import the key
```
cleos wallet 
```

### Create account
Create two accounts: bob and alice.
```
cleos create account eosio bob YOUR_PUBLIC_KEY
cleos create account eosio alice YOUR_PUBLIC_KEY
```


