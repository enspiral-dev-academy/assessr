
const modules = [
    { id: 1, title: 'Foundations: Technical', prefix:'FT', course: 'Foundations', assessments: [
        {
            code: 'FT01', module_id: 1, title: 'Use Git and terminal commands to manage a code base',
            criteria: [
                
            ]
        },
        {
            code: 'FT02', module_id: 1, title: 'Deploy a static website with GitHub Pages',
            criteria: [
                
            ]
        },
        {
            code: 'FT03', module_id: 1, title: 'Create a website using well structured HTML and CSS, using a CSS framework',
            criteria: [
                
            ]
        },
        {
            code: 'FT04', module_id: 1, title: 'Create and debug simple programs using JavaScript variables, functions, loops, iterators and conditionals',
            criteria: [
                
            ]
        },
        {
            code: 'FT05', module_id: 1, title: 'Create interactive client side websites using JavaScript event handling and DOM manipulation',
            criteria: [

            ]
        }
    ]},
    { id: 2, title: 'Foundations: Core', prefix:'FC', course: 'Foundations', assessments: [
        {
            code: 'FC01', module_id: 2, title: 'Reflect meaningfully on personal learning experiences to create and follow a self directed learning plan',
            criteria: [

            ]
        },
        {
            code: 'FC02', module_id: 2, title: 'Describe the role of values, empathy and self awareness in learning and programming',
            criteria: [

            ]
        },
        {
            code: 'FC03', module_id: 2, title: 'Read and comply with the EDA Code of Conduct during Foundations',
            criteria: [

            ]
        },
        {
            code: 'FC04', module_id: 2, title: 'Communicate technical concepts to a non-technical audience',
            criteria: [

            ]
        },
        {
            code: 'FC05', module_id: 2, title: 'Overcome technical problems using online resources and asking direct well-framed technical questions',
            criteria: [

            ]
        }
    ]},
    { id: 3, title: 'Core Programming', prefix:'CP', course: 'Bootcamp', assessments: [
        {
            code: 'CP01', module_id: 3, title: 'Git: Use Git and terminal commands to manage a code base',
            criteria: [

            ]
        },
        {
            code: 'CP02', module_id: 3, title: 'Package Management: Use npm to manage library dependencies',
            criteria: [

            ]
        },
        {
            code: 'CP03', module_id: 3, title: 'Algorithms: Use JavaScript to model and solve a problem',
            criteria: [

            ]
        },
        {
            code: 'CP04', module_id: 3, title: 'Testing: Use a modern testing library to build a unit test suite for a JavaScript application',
            criteria: [

            ]
        },
        {
            code: 'CP05', module_id: 3, title: 'Data Persistence Design (DB): Design a relational database based on user requirements',
            criteria: [

            ]
        },
        {
            code: 'CP06', module_id: 3, title: 'Data Persistence (DB): Build and use a relational database based on user requirements',
            criteria: [
                { id: 'CP06-1', assessment_code: 'CP06', text: 'where' },
                { id: 'CP06-2', assessment_code: 'CP06', text: 'first' },
                { id: 'CP06-3', assessment_code: 'CP06', text: 'join' },
                { id: 'CP06-4', assessment_code: 'CP06', text: 'select' },
                { id: 'CP06-5', assessment_code: 'CP06', text: 'insert' },
                { id: 'CP06-6', assessment_code: 'CP06', text: 'update' },
                { id: 'CP06-7', assessment_code: 'CP06', text: 'delete' },
            ]
        },
        {
            code: 'CP07', module_id: 3, title: 'Data Persistence (File): Load, update, save and reload data from a file',
            criteria: [

            ]
        },
        {
            code: 'CP08', module_id: 3, title: 'Command Line: Build an interactive command line tool based on user requirements',
            criteria: [

            ]
        }
    ]},
    { id: 4, title: 'Web Development', prefix:'WD', course: 'Bootcamp', assessments: [
        {
            code: 'WD01', module_id: 4, title: 'Backend: Build an HTTP server with a restful JSON API',
            criteria: [

            ]
        },
        {
            code: 'WD02', module_id: 4, title: 'Backend: Build a Javascript application that consumes a restful JSON API',
            criteria: [

            ]
        },
        {
            code: 'WD03', module_id: 4, title: 'Frontend: Create a rich client application using a modern frontend JavaScript framework',
            criteria: [

            ]
        },
        {
            code: 'WD04', module_id: 4, title: 'Frontend: Create a responsive website using HTML and CSS',
            criteria: [

            ]
        },
        {
            code: 'WD05', module_id: 4, title: 'Frontend: Use a front end routing technique to conditionally display content',
            criteria: [

            ]
        },
        {
            code: 'WD06', module_id: 4, title: 'Authentication: Secure a web application using Authentication libraries',
            criteria: [

            ]
        },
        {
            code: 'WD07', module_id: 4, title: 'Ops: Deploy a web application',
            criteria: [

            ]
        },
        {
            code: 'WD08', module_id: 4, title: 'Backend: Build a modular website using server-side templates',
            criteria: [

            ]
        },
        {
            code: 'WD09', module_id: 4, title: 'Frontend: Build a static website using Javascript, HTML and CSS',
            criteria: [

            ]
        }
    ]},
    { id: 5, title: 'Teamwork & Leadership', prefix:'TL', course: 'Bootcamp', assessments: [
        {
            code: 'TL01', module_id: 5, title: 'Teams: Actively engage in a group software project using agile project management techniques',
            criteria: [

            ]
        },
        {
            code: 'TL02', module_id: 5, title: 'Feedback: Give and receive constructive feedback to/from team mates',
            criteria: [

            ]
        },
        {
            code: 'TL03', module_id: 5, title: 'Present: Present a technical project to a non-technical audience',
            criteria: [

            ]
        },
        {
            code: 'TL04', module_id: 5, title: 'Present: Research a novel topic and give a presentation about it to others',
            criteria: [

            ]
        },
        {
            code: 'TL05', module_id: 5, title: 'Teams: Hold a variety of project roles in an agile team',
            criteria: [

            ]
        },
        {
            code: 'TL06', module_id: 5, title: 'Feedback: Review a presentation and provide meaningful feedback',
            criteria: [

            ]
        }
    ]},
    { id: 6, title: 'Human Skills', prefix:'HS', course: 'Bootcamp', assessments: [
        {
            code: 'HS01', module_id: 6, title: 'Discuss your strategies for self directed learning at EDA',
            criteria: [

            ]
        },
        {
            code: 'HS02', module_id: 6, title: 'Practice attentive listening and intentional clarifying questions',
            criteria: [

            ]
        },
        {
            code: 'HS03', module_id: 6, title: 'Display inclusive and supportive behaviour towards all team mates',
            criteria: [

            ]
        },
        {
            code: 'HS04', module_id: 6, title: 'Display the characteristics of empathy',
            criteria: [

            ]
        },
        {
            code: 'HS05', module_id: 6, title: 'Hold a courageous conversation',
            criteria: [

            ]
        },
        {
            code: 'HS06', module_id: 6, title: 'Participate in full group project preparation including team code of conduct, conflict resolution plan',
            criteria: [

            ]
        },
        {
            code: 'HS07', module_id: 6, title: 'Read and comply with the EDA Code of Conduct',
            criteria: [

            ]
        },
        {
            code: 'HS08', module_id: 6, title: 'Actively engage in the Human Skills Deep Dives',
            criteria: [

            ]
        }
    ]}
]

export default modules