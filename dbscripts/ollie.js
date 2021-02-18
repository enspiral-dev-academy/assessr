const { DynamoDBClient, QueryCommand } = require("@aws-sdk/client-dynamodb");

const dbclient = new DynamoDBClient({
  region: 'ap-southeast-2',
  endpoint: "http://localhost:8000"
});

const params = {
  TableName: "Assessr",
  KeyConditionExpression: "PK = :c and SK = :s",
  ExpressionAttributeValues: {
    ":c": { S: "cohort_44" },
    ":s": { S: "student_1202" }
  },
  ProjectionExpression: "PK, SK, student_name, student_email, assessments",
};

const run = async () => {
  try {
    const results = await dbclient.send(new QueryCommand(params));
    const { PK, SK, student_name, student_email, assessments } = results.Items[0]
    console.log(PK.S, SK.S);
    console.log(student_name.S, `(${student_email.S})`);
    const ollieAssessments = JSON.parse(assessments.S)
    console.log("First assessment:", ollieAssessments[0])
  } catch (err) {
    console.error(err);
  }
};

run();
