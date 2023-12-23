//program coding
//// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;

contract info{
    mapping(address => bool) public whitelist;
        mapping(bytes32 => individual_info) public documents;

    struct individual_info{
        string name;
        address contact_no;
        address []document;

    }
    modifier onlyWhitelisted() {
        require(whitelist[msg.sender], "you dont have access to this role");
        _;
    }
    //adding address of user and government
    // constructor(address user, address government) {
    //     whitelist[user] = true;
    //     whitelist[government] = true;
    // }
    //tasks only government and user can accomplish
    function uploadData(address new_document)public onlyWhitelisted{
        //
    }
    
}