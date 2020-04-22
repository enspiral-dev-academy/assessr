
const modules = [
    { id: 1, title: 'Foundations: Technical', course: 'Foundations', assessments: [
        {
            code: 'FT01', module_id: 1, title: 'Use Git and terminal commands to manage a code base',
            elements: [
                
            ]
        },
        {
            code: 'FT02', module_id: 1, title: 'Deploy a static website with GitHub Pages',
            elements: [
                
            ]
        },
        {
            code: 'FT03', module_id: 1, title: 'Create a website using well structured HTML and CSS, using a CSS framework',
            elements: [
                
            ]
        },
        {
            code: 'FT04', module_id: 1, title: 'Create and debug simple programs using JavaScript variables, functions, loops, iterators and conditionals',
            elements: [
                
            ]
        },
        {
            code: 'FT05', module_id: 1, title: 'Create interactive client side websites using JavaScript event handling and DOM manipulation',
            elements: [

            ]
        }
    ]},
    { id: 2, title: 'Foundations: Core', course: 'Foundations', assessments: [
        {
            code: 'FC01', module_id: 2, title: 'Reflect meaningfully on personal learning experiences to create and follow a self directed learning plan',
            elements: [

            ]
        },
        {
            code: 'FC02', module_id: 2, title: 'Describe the role of values, empathy and self awareness in learning and programming',
            elements: [

            ]
        },
        {
            code: 'FC03', module_id: 2, title: 'Read and comply with the EDA Code of Conduct during Foundations',
            elements: [

            ]
        },
        {
            code: 'FC04', module_id: 2, title: 'Communicate technical concepts to a non-technical audience',
            elements: [

            ]
        },
        {
            code: 'FC05', module_id: 2, title: 'Overcome technical problems using online resources and asking direct well-framed technical questions',
            elements: [

            ]
        }
    ]},
    { id: 3, title: 'Core Programming', course: 'Bootcamp', assessments: [
        {
            code: 'CP01', module_id: 3, title: 'Git: Use Git and terminal commands to manage a code base',
            elements: [

            ]
        },
        {
            code: 'CP02', module_id: 3, title: 'Package Management: Use npm to manage library dependencies',
            elements: [

            ]
        },
        {
            code: 'CP03', module_id: 3, title: 'Algorithms: Use JavaScript to model and solve a problem',
            elements: [

            ]
        },
        {
            code: 'CP04', module_id: 3, title: 'Testing: Use a modern testing library to build a unit test suite for a JavaScript application',
            elements: [

            ]
        },
        {
            code: 'CP05', module_id: 3, title: 'Data Persistence Design (DB): Design a relational database based on user requirements',
            elements: [

            ]
        },
        {
            code: 'CP06', module_id: 3, title: 'Data Persistence (DB): Build and use a relational database based on user requirements',
            elements: [
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
            elements: [

            ]
        },
        {
            code: 'CP08', module_id: 3, title: 'Command Line: Build an interactive command line tool based on user requirements',
            elements: [

            ]
        }
    ]},
    { id: 4, title: 'Web development', course: 'Bootcamp', assessments: [
        {
            code: 'WD01', module_id: 4, title: 'Backend: Build an HTTP server with a restful JSON API',
            elements: [

            ]
        },
        {
            code: 'WD02', module_id: 4, title: 'Backend: Build a Javascript application that consumes a restful JSON API',
            elements: [

            ]
        },
        {
            code: 'WD03', module_id: 4, title: 'Frontend: Create a rich client application using a modern frontend JavaScript framework',
            elements: [

            ]
        },
        {
            code: 'WD04', module_id: 4, title: 'Frontend: Create a responsive website using HTML and CSS',
            elements: [

            ]
        },
        {
            code: 'WD05', module_id: 4, title: 'Frontend: Use a front end routing technique to conditionally display content',
            elements: [

            ]
        },
        {
            code: 'WD06', module_id: 4, title: 'Authentication: Secure a web application using Authentication libraries',
            elements: [

            ]
        },
        {
            code: 'WD07', module_id: 4, title: 'Ops: Deploy a web application',
            elements: [

            ]
        },
        {
            code: 'WD08', module_id: 4, title: 'Backend: Build a modular website using server-side templates',
            elements: [

            ]
        },
        {
            code: 'WD09', module_id: 4, title: 'Frontend: Build a static website using Javascript, HTML and CSS',
            elements: [

            ]
        }
    ]},
    { id: 5, title: 'Teamwork & Leadership', course: 'Bootcamp', assessments: [
        {
            code: 'TL01', module_id: 5, title: 'Teams: Actively engage in a group software project using agile project management techniques',
            elements: [

            ]
        },
        {
            code: 'TL02', module_id: 5, title: 'Feedback: Give and receive constructive feedback to/from team mates',
            elements: [

            ]
        },
        {
            code: 'TL03', module_id: 5, title: 'Present: Present a technical project to a non-technical audience',
            elements: [

            ]
        },
        {
            code: 'TL04', module_id: 5, title: 'Present: Research a novel topic and give a presentation about it to others',
            elements: [

            ]
        },
        {
            code: 'TL05', module_id: 5, title: 'Teams: Hold a variety of project roles in an agile team',
            elements: [

            ]
        },
        {
            code: 'TL06', module_id: 5, title: 'Feedback: Review a presentation and provide meaningful feedback',
            elements: [

            ]
        }
    ]},
    { id: 6, title: 'Human Skills', course: 'Bootcamp', assessments: [
        {
            code: 'HS01', module_id: 6, title: 'Discuss your strategies for self directed learning at EDA',
            elements: [

            ]
        },
        {
            code: 'HS02', module_id: 6, title: 'Practice attentive listening and intentional clarifying questions',
            elements: [

            ]
        },
        {
            code: 'HS03', module_id: 6, title: 'Display inclusive and supportive behaviour towards all team mates',
            elements: [

            ]
        },
        {
            code: 'HS04', module_id: 6, title: 'Display the characteristics of empathy',
            elements: [

            ]
        },
        {
            code: 'HS05', module_id: 6, title: 'Hold a courageous conversation',
            elements: [

            ]
        },
        {
            code: 'HS06', module_id: 6, title: 'Participate in full group project preparation including team code of conduct, conflict resolution plan',
            elements: [

            ]
        },
        {
            code: 'HS07', module_id: 6, title: 'Read and comply with the EDA Code of Conduct',
            elements: [

            ]
        },
        {
            code: 'HS08', module_id: 6, title: 'Actively engage in the Human Skills Deep Dives',
            elements: [

            ]
        }
    ]}
]

export default modules