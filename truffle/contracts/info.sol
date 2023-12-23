//program coding
//// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;

contract info{
    mapping (address => bool) public whitelist;
    mapping (address => User) private users;

    event userRegistered(address _userAddress, string _name);
    event userUpdated(address _userAddress, string _name);

    struct User{
        string name;
        string contact_num;
        string[] documents;
        uint lastUpdated;
    }

    modifier onlyWhitelisted() {
        require(whitelist[msg.sender], "you dont have access to this role");
        _;
    }

    //tasks only government and user can accomplish
    function uploadData(address new_document)public onlyWhitelisted{
        //

    }

    function isUserRegistered(address userAddress) internal view returns (bool) {
        // return bytes(users[userAddress].name).length > 0;
        return users[userAddress].lastUpdated != 0;
    }

    function registerUser(string memory _name, string memory _contactNum, string[] memory _docs) public {
        require(!isUserRegistered(msg.sender));
        users[msg.sender] = User({
            name: _name,
            contact_num: _contactNum,
            documents: _docs,
            lastUpdated: block.timestamp
        });
        emit userRegistered(msg.sender, _name);
    }

    function updateUser(string memory _name, string memory _contactNum, string[] memory _docs) public {
        require(isUserRegistered(msg.sender));
        require(block.timestamp - users[msg.sender].lastUpdated >= 1 days, "User can only update once per day");
        users[msg.sender].name = _name;
        users[msg.sender].documents = _docs;
        users[msg.sender].contact_num = _contactNum;
        users[msg.sender].lastUpdated = block.timestamp;
        emit userUpdated(msg.sender, _name);
    }
    
}