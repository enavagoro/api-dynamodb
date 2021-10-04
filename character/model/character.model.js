const dynamoClient = require('../../common/services/dynamo');
const TABLE_NAME = "character";

const getCharacters = async ()=>{
    const params = {
        TableName: TABLE_NAME
    }
    return await dynamoClient.scan(params).promise();
    
}

const addOrUpdateCharacter = async (character) =>{
    const params = {
        TableName: TABLE_NAME,
        Item: character
    }
    return await dynamoClient.put(params).promise()
}

const deleteCharacter = async (id) =>{
    const params = {
        TableName: TABLE_NAME,
        Key:{
            id,
        }
    }
    return await dynamoClient.delete(params).promise()
}

module.exports = {
    getCharacters,
    addOrUpdateCharacter,
    deleteCharacter
}