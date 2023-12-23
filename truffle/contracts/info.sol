//program coding
//// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;

// import "./documents.sol";

contract info{
    mapping (address => bool) public whitelist;
    mapping (address => User) private users;

    event userRegistered(address _userAddress, string _name);
    event userUpdated(address _userAddress, string _name);

    // event DocumentUploaded(bytes32 indexed documentId, string name, string documentHash, address indexed uploader);

    struct User{
        string name;
        string contact_num;
        string[] documents;
        string dob;
        string temp_addr;
        string perm_addr;
        uint lastUpdated;
    }

    modifier onlyWhitelisted() {
        require(whitelist[msg.sender], "you dont have access to this role");
        _;
    }

    // Constructor whitelists two specific users
    constructor(address _governmentAddr) {
        whitelist[msg.sender] = true;
        whitelist[_governmentAddr] = true;
    }


    function isUserRegistered(address userAddress) internal view returns (bool) {
        // return bytes(users[userAddress].name).length > 0;
        return users[userAddress].lastUpdated != 0;
    }

    function registerUser(User memory _user) public {
        require(!isUserRegistered(msg.sender));
        users[msg.sender] = User({
            name: _user.name,
            contact_num: _user.contact_num,
            documents: _user.documents,
            dob: _user.dob,
            temp_addr: _user.temp_addr,
            perm_addr: _user.perm_addr,
            lastUpdated: block.timestamp
        });
        emit userRegistered(msg.sender, _user.name);
    }

    function updateUser(User memory _user) public {
        require(isUserRegistered(msg.sender));
        require(block.timestamp - users[msg.sender].lastUpdated >= 1 days, "User can only update once per day");
        users[msg.sender].name = _user.name;
        users[msg.sender].contact_num = _user.contact_num;
        users[msg.sender].documents = _user.documents;
        users[msg.sender].dob = _user.dob;
        users[msg.sender].temp_addr = _user.temp_addr;
        users[msg.sender].perm_addr = _user.perm_addr;
        users[msg.sender].lastUpdated = block.timestamp;
        emit userUpdated(msg.sender, _user.name);
    }

    function addDocument(address _address, string memory _newFileHash) public {
        users[_address].documents.push(_newFileHash);

        // emit DocumentUploaded(documentId, _fileName, _documentHash, msg.sender);
    }

    function getUser (address _address) public view onlyWhitelisted returns (User memory) {
        return users[_address];
    }
    
}