const {
  DynamoDBClient,
  BatchWriteItemCommand
} = require("@aws-sdk/client-dynamodb");

const assessmentTemplate = require('../assessmentTemplate')

const dbclient = new DynamoDBClient({
  region: "ap-southeast-2",
  endpoint: "http://localhost:8000"
});

const params = {
  RequestItems: {
    Assessr: [
      {
        PutRequest: {
          Item: {
            PK: { S: "cohort_31" },
            SK: { S: "student_453" },
            student_name: { S: "Kelly Keating" },
            student_email: { S: "kelly@email.com" },
            assessments: { S: JSON.stringify(assessmentTemplate) }
          }
        }
      },
      {
        PutRequest: {
          Item: {
            PK: { S: "cohort_31" },
            SK: { S: "student_454" },
            student_name: { S: "Test Student" },
            student_email: { S: "test@email.com" },
            assessments: { S: JSON.stringify(assessmentTemplate) }
          }
        }
      },
      {
        PutRequest: {
          Item: {
            PK: { S: "cohort_44" },
            SK: { S: "student_1202" },
            student_name: { S: "Oliver Harcourt" },
            student_email: { S: "ollie@email.com" },
            assessments: { S: JSON.stringify(assessmentTemplate) }
          }
        }
      }
    ]
  }
};

const run = async () => {
  try {
    const data = await dbclient.send(new BatchWriteItemCommand(params));
    console.log("Success, items inserted", data);
  } catch (err) {
    console.log("Error", err);
  }
};

run();
