//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
    

contract vault is Ownable {
    
    address public immutable creator;
    
    string private vaultname;
    
    uint256 public james;
    
    address[] public users;

    
    constructor (address creator_, string memory name_) 
             {
                creator = creator_;
                vaultname = name_;     
    }
    
    function nameofvault() public view returns (string memory) {
        return vaultname;
    }
    
    function testupdate() public onlyOwner {
        james = 5;
    }
    

    
    
}