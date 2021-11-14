//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./vault.sol";
import "hardhat/console.sol";


contract vaultfactory {
   
    // to get your vault put in vaultname
    mapping(string => address) public getvault;
    
    address[] public allvaults;
    
          
    function allvaultslength() 
        external 
        view
        returns (uint noofvaultscreated) {
        noofvaultscreated = allvaults.length;
    }
    
    event vaultcreated(address cdv, address from, uint nocreated);
    
    // vaults cost 0.009 eth to be created and would 
    // be up for maintenance after nine months anon
    function createvault(string memory name) 
        public 
        payable
        {
        require(msg.value == 0.009 ether, 'Need to pay fee 0.009 ETH');
        vault newvault = new vault(msg.sender, name);
        getvault[name] = address(newvault);
        allvaults.push(address(newvault));
        console.log("hdhhhd: ", address(newvault));
        emit vaultcreated(address(newvault), address(this), allvaults.length);
    }
    
    // function creategovernance() {
        
    // }
    
}