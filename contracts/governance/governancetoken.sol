//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
   
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

contract governancetoken is ERC20Votes {
    
    constructor (string memory namegovernancetkn, string memory symbolgovernancetkn, uint maxsupply) 
        ERC20(namegovernancetkn, symbolgovernancetkn) 
        ERC20Permit(namegovernancetkn) {
            _mint(msg.sender, maxsupply);
    }

    
        // The functions below are overrides required by Solidity.

    function _afterTokenTransfer(address from, address to, uint256 amount)
        internal
        override(ERC20Votes)
    {
        super._afterTokenTransfer(from, to, amount);
    }

    function _mint(address to, uint256 amount)
        internal
        override(ERC20Votes)
    {
        super._mint(to, amount);
    }

    function _burn(address account, uint256 amount)
        internal
        override(ERC20Votes)
    {
        super._burn(account, amount);
    }
}
