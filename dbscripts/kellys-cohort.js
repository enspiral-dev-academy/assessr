const { DynamoDBClient, QueryCommand } = require("@aws-sdk/client-dynamodb");

const dbclient = new DynamoDBClient({
  region: 'ap-southeast-2',
  endpoint: "http://localhost:8000"
});

const params = {
  TableName: "Assessr",
  KeyConditionExpression: "PK = :s",
  ExpressionAttributeValues: {
    ":s": { S: "cohort_31" }
  },
  ProjectionExpression: "PK, student_name, student_email",
};

const run = async () => {
  try {
    const results = await dbclient.send(new QueryCommand(params));
    results.Items.forEach(({PK, student_name, student_email}) => {
      console.log(`${PK.S}: ${student_name.S} (${student_email.S})`);
    });
  } catch (err) {
    console.error(err);
  }
};

run();
