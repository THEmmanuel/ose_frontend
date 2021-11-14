import React from 'react'
import { ethers } from 'ethers';
import vault from '../artifacts/contracts/vault/vault.sol/vault.json';
import vaultFactory from '../artifacts/contracts/vault/vaultfactory.sol/vaultfactory.json';


const CreateVault = props => {
    const createVault = () => {
        console.log("Vault: ", vault)
        console.log("Vault factory: ", vaultFactory)
    }

    return (
        <div>
            <input type="text" />
            <button onClick = {
                () => createVault()
            }>Create Vault</button>
        </div>
    )
}

export default CreateVault;