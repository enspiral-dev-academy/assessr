# Assessr

## Sick as project

Making a site where students can view their progress towards assessments, submit assessments, and where teachers can view the progress of the cohort and review work.


## Setup

Run the following commands in your terminal:

```sh
npm install
npx knex migrate:latest
npx knex seed:run
npm run dev
```

## User Stories

### MVP

As a student user:
  * I want to view a list of all assessments
  * I want to see which assessments I have completed
  * I want to be able to sort assessments by complete vs incomplete
  * I want to be able to see when this assessment should be completed
  * I want to be able to submit a link to a repo I believe completes an assessment
  * I want to see a list of recommended repos for a given assessment

As a teacher user:
  * I want to see a list of submitted links
  * I want to be able to tick a given assessment off for a student
  * I want to be able to see a specific student's assessment progress
  * I want to be able to sort a student's completed work by completed vs incompleted
  * I want to be able to see assessment progress for the entire cohort

### Stretch

As a student user:
  * I want to be able to see what assessments I have completed vs in progress or incomplete
  * I want to be able to see what pieces are necessary to complete a given assessment
  * I want to be able to see what pieces of an assessment I have completed
  * I want to see which pieces are still necessary for this assessment when submitting

As a teacher user:
  * I want to be able to tick a student off for specific parts of an assessment
  * I want to be able to download a transcript of the cohorts results

  ---

## Views
  | name | user | purpose |
  | --- | --- | --- |
  | Login | * | View for user to enter their login credentials |
  | Register | * | View for user to sign up for the App |
  | Assessments | Student | View all my assessments and submit links for them |
  | Student | Teacher | See completion of a student |
  | Cohort | Teacher | See stats on individual cohorts |
  | Submissions | Teacher | Page containing list of all submissions |
  | Marking | Teacher | Place to review link and tick off completion |


## Reducers

  | name | purpose |
  | --- | --- |
  | auth | Store information regarding user logins, auth status and auth errors |


## API 

All these routes should be protected

| Method | Endpoint | User | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /api/auth/login | Log In a User | The Users JWT Token |
| Post | /api/auth/register | Register a User | The Users JWT Token |
| TBC |


## Data
  Users, cohorts, assessments, and modules are all part of MVP. Elements are stretch.

### DATAFILE

```js
const modules = [
  {
    id: 1,
    title: 'Foundations: Tech',
    course: 'Foundations',
    assessments: [
      {
        code: 'FT01',
        module_id: 1,
        title: 'Use Git and terminal commands to manage a code base',
        elements: [
          {
            id: 'FT01-1',
            assessment_code: 'FT01',
            text: 'Clone a repo'
          },
          ...
        ]
      },
      ...
    ]
  },
  ...
]
```

### DB - users
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | int | Unique identifier |
  | user_type | string |
  | user_name | string |
  | hash | text | 
  
### DB - students
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | user_id | int |
  | actual_name | string | Name of student matching EDA records |
  | cohort_ id | int |

### DB - cohorts
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | int | Unique identifier |
  | name | string |
  | campus | string |

### DB - submissions
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | student_assessment_id | int |
  | evidence | string |

### DB - users_assessments
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | int |
  | student_id | int |
  | assessment_id | int |
  | status | string |
  
### DB - users_elements (Stretch)
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | int |
  | student_assmt_id | int |
  | element_id | int |
