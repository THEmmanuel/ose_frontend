//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
  
import "@openzeppelin/contracts/governance/TimelockController.sol";

contract governancetimelock is TimelockController {
    
    constructor(
        uint256 mindelay,
        address[] memory proposers,
        address[] memory executors
        ) TimelockController(mindelay, proposers, executors) {
        
    }
}