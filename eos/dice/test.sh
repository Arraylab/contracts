#!/bin/bash

cleos  -u http://jungle.cryptolions.io:38888 push action eosio.token transfer '["dicefuntest1", "fuckdice1234", "0.1000 EOS", "50-56ae3b008ab6d98d7aa30f9e1b29dfed206dbf9f2dea0ad5126942d6500294b4-56ae3b008ab6d98d7aa30f9e1b29dfed206dbf9f2dea0ad5126942d6500294b4-baidudice111"]' -p dicefuntest1@active

cleos -u http://jungle.cryptolions.io:38888 get table fuckdice1234 fuckdice1234 activebets



