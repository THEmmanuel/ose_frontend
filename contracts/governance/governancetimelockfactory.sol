// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


import "./governancetimelock.sol";

contract governancetimelockfactory {
    
    function creategovernancetimelock(
                   uint256 mindelay,  
                   address[] memory proposers,
                   address[] memory executors
                   ) public returns (governancetimelock newgovernancetimelock){
        return new governancetimelock(mindelay, proposers, executors);
    }
    

    
}    