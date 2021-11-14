// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
   
import "./governancetoken.sol";


contract governancetokenfactory {
    

    
    function creategovernancetoken(
                    string memory namegovernancetkn,
                    string memory symbolgovernancetkn,
                    uint maxsupply
                   ) public {
         new governancetoken(namegovernancetkn, symbolgovernancetkn,maxsupply);
    }
    
}