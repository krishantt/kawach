//program coding
//// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;


contract DocumentStorage {
    // Mapping to store whitelisted addresses
    mapping(address => bool) public whitelist;

    // Mapping to store document hashes and metadata
    mapping(bytes32 => Document) public documents;
    mapping (address => bytes32) private hashid;

    // Struct to represent document metadata
    struct Document {
        string name;
        string owner;
    }

    // Modifier to restrict access to whitelisted users
    modifier onlyWhitelisted() {
        require(whitelist[msg.sender], "Caller is not whitelisted");
        _;
    }

    // Constructor whitelists two specific users
    constructor(address user, address government) {
         whitelist[user] = true;
        whitelist[government] = true;
    }

    // Function to upload a new document (restricted to whitelisted users)
    function uploadDocument(string memory _name, string memory _documentHash) public onlyWhitelisted {
        // Validate input

        // Generate unique document identifier
        // bytes32 documentId = keccak256(abi.encodePacked(_name, _documentHash, msg.sender));
        

        hashid[msg.sender]=_documentHash;

        // Ensure document doesn't already exist

        // Store document metadata
        // documents[documentId] = Document({
        //     name: _name,
        //     owner
        // });

        // Emit event for external tracking
        emit DocumentUploaded(_name, _documentHash, msg.sender);
    }
    //adding hash
    function add_hash(address owner,bytes32 ipfshash) private onlyWhitelisted(){
        // map[owner]=ipfshash;
    }
    
    function get_document()private view returns(bytes32 []ipfshash){

    }


    // Event for tracking document uploads
    event DocumentUploaded(bytes32 indexed documentId, string name, string documentHash, address indexed uploader);
}