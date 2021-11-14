// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
       
import "./governancecontract.sol";


contract governancecontractfactory {
    

    
    function creategovernancecontract(
                   ERC20Votes _token,
                   TimelockController _timelock
                   ) public returns (governancecontract newgovernancecontract) {
         return new governancecontract( _token, _timelock);
    }
    
}