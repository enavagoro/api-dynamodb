const AWS = require('aws-sdk');

AWS.config.update({
    region: '',
    accessKeyId: '',
    secretAccessKey: ''
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();

module.exports = dynamoClient;