const { DynamoDBClient, CreateTableCommand } = require("@aws-sdk/client-dynamodb");

const dynamodb = new DynamoDBClient({
  region: "ap-southeast-2",
  endpoint: "http://localhost:8000"
});

const command = new CreateTableCommand({
  TableName : "Assessr",
  KeySchema: [
    { AttributeName: "PK", KeyType: "HASH"},  //Partition key
    { AttributeName: "SK", KeyType: "RANGE" } //Sort key
  ],
  AttributeDefinitions: [
    { AttributeName: "PK", AttributeType: "S" },
    { AttributeName: "SK", AttributeType: "S" }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
});

dynamodb.send(command)
  .then(output => {
    console.log("Created table. Table description JSON:", stringify(output));
  })
  .catch(err => {
    console.error("Unable to create table. Error JSON:", stringify(err));
  });

function stringify (obj) {
  return JSON.stringify(obj, null, 2)
}
