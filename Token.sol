// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

contract MyToken {
    // Public variables to store the details about the coin
    string public tokenName;
    string public tokenAbbrv;
    uint public totalSupply;

    // Mapping of addresses to balances
    mapping(address => uint) public balances;

    // Constructor to initialize the token details
    constructor(string memory _name, string memory _abbrv, uint _initialSupply) {
        tokenName = _name;
        tokenAbbrv = _abbrv;
        totalSupply = _initialSupply;
        // Assign initial supply to the contract deployer
        balances[msg.sender] = _initialSupply;
    }

    // Mint function to create new tokens
    function mint(address _to, uint _amount) public {
        totalSupply += _amount;
        balances[_to] += _amount;
    }

    // Burn function to destroy tokens
function burn(address _from, uint _amount) public {
        require(balances[_from] >= _amount, "Balance is less than the amount to burn");
        totalSupply -= _amount;
        balances[_from] -= _amount;
    }
}
