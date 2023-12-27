//// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;

contract UserAuth {
    // Mapping to store user data
    mapping(address => UserData) public users;

    struct UserData {
        string username;
        bytes32 passwordHash; // Store securely, don't save plain text passwords!
        bool authorized; // Flag for authorization status
    }

    // Event for successful login
    event LoggedIn(address userAddress);

    // Event for successful signup
    event SignedUp(address userAddress);

    // Function to signup a new user
    function signup(string memory _username, string memory _password) public {
        require(!users[msg.sender].authorized, "User already exists");
        users[msg.sender].username = _username;
        users[msg.sender].passwordHash = keccak256(abi.encodePacked(_password));
        users[msg.sender].authorized = false; // New users start as unauthorized
        emit SignedUp(msg.sender);
    }

    // Function to login an existing user
    function login(string memory _password) public {
        require(users[msg.sender].authorized, "User not found or unauthorized");
        require(
            users[msg.sender].passwordHash ==
                keccak256(abi.encodePacked(_password)),
            "Incorrect password"
        );
        emit LoggedIn(msg.sender);
    }
}
