
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('assessments').del()
    .then(function () {
      // Inserts seed entries
      return knex('assessments').insert([
        {id: 9001, code: 'FT01', module_id: 1, title: 'Use Git and terminal commands to manage a code base' },
        {id: 9002, code: 'FT02', module_id: 1, title: 'Deploy a static website with GitHub Pages' },
        {id: 9003, code: 'FT03', module_id: 1, title: 'Create a website using well structured HTML and CSS, using a CSS framework' },
        {id: 9004, code: 'FT04', module_id: 1, title: 'Create and debug simple programs using JavaScript variables, functions, loops, iterators and conditionals' },
        {id: 9005, code: 'FT05', module_id: 1, title: 'Create interactive client side websites using JavaScript event handling and DOM manipulation' },
        {id: 9006, code: 'FC01', module_id: 2, title: 'Reflect meaningfully on personal learning experiences to create and follow a self directed learning plan'},
        {id: 9007, code: 'FC02', module_id: 2, title: 'Describe the role of values, empathy and self awareness in learning and programming'},
        {id: 9008, code: 'FC03', module_id: 2, title: 'Read and comply with the EDA Code of Conduct during Foundations'},
        {id: 9009, code: 'FC04', module_id: 2, title: 'Communicate technical concepts to a non-technical audience'},
        {id: 9010, code: 'FC05', module_id: 2, title: 'Overcome technical problems using online resources and asking direct well-framed technical questions'},
        {id: 9011, code: 'CP01', module_id: 3, title: 'Git: Use Git and terminal commands to manage a code base'},
        {id: 9012, code: 'CP02', module_id: 3, title: 'Package Management: Use npm to manage library dependencies'},
        {id: 9013, code: 'CP03', module_id: 3, title: 'Algorithms: Use JavaScript to model and solve a problem'},
        {id: 9014, code: 'CP04', module_id: 3, title: 'Testing: Use a modern testing library to build a unit test suite for a JavaScript application'},
        {id: 9015, code: 'CP05', module_id: 3, title: 'Data Persistence Design (DB): Design a relational database based on user requirements'},
        {id: 9016, code: 'CP06', module_id: 3, title: 'Data Persistence (DB): Build and use a relational database based on user requirements'},
        {id: 9017, code: 'CP07', module_id: 3, title: 'Data Persistence (File): Load, update, save and reload data from a file'},
        {id: 9018, code: 'CP08', module_id: 3, title: 'Command Line: Build an interactive command line tool based on user requirements'},
        {id: 9019, code: 'WD01', module_id: 4, title: 'Backend: Build an HTTP server with a restful JSON API'},
        {id: 9020, code: 'WD02', module_id: 4, title: 'Backend: Build a Javascript application that consumes a restful JSON API'},
        {id: 9021, code: 'WD03', module_id: 4, title: 'Frontend: Create a rich client application using a modern frontend JavaScript framework'},
        {id: 9022, code: 'WD04', module_id: 4, title: 'Frontend: Create a responsive website using HTML and CSS'},
        {id: 9023, code: 'WD05', module_id: 4, title: 'Frontend: Use a front end routing technique to conditionally display content'},
        {id: 9024, code: 'WD06', module_id: 4, title: 'Authentication: Secure a web application using Authentication libraries'},
        {id: 9025, code: 'WD07', module_id: 4, title: 'Ops: Deploy a web application'},
        {id: 9026, code: 'WD08', module_id: 4, title: 'Backend: Build a modular website using server-side templates'},
        {id: 9027, code: 'WD09', module_id: 4, title: 'Frontend: Build a static website using Javascript, HTML and CSS'},
        {id: 9028, code: 'TL01', module_id: 5, title: 'Teams: Actively engage in a group software project using agile project management techniques'},
        {id: 9029, code: 'TL02', module_id: 5, title: 'Feedback: Give and receive constructive feedback to/from team mates'},
        {id: 9030, code: 'TL03', module_id: 5, title: 'Present: Present a technical project to a non-technical audience'},
        {id: 9031, code: 'TL04', module_id: 5, title: 'Present: Research a novel topic and give a presentation about it to others'},
        {id: 9032, code: 'TL05', module_id: 5, title: 'Teams: Hold a variety of project roles in an agile team'},
        {id: 9033, code: 'TL06', module_id: 5, title: 'Feedback: Review a presentation and provide meaningful feedback'},
        {id: 9034, code: 'HS01', module_id: 6, title: 'Discuss your strategies for self directed learning at EDA'},
        {id: 9035, code: 'HS02', module_id: 6, title: 'Practice attentive listening and intentional clarifying questions'},
        {id: 9036, code: 'HS03', module_id: 6, title: 'Display inclusive and supportive behaviour towards all team mates'},
        {id: 9037, code: 'HS04', module_id: 6, title: 'Display the characteristics of empathy'},
        {id: 9038, code: 'HS05', module_id: 6, title: 'Hold a courageous conversation'},
        {id: 9039, code: 'HS06', module_id: 6, title: 'Participate in full group project preparation including team code of conduct, conflict resolution plan'},
        {id: 9040, code: 'HS07', module_id: 6, title: 'Read and comply with the EDA Code of Conduct'},
        {id: 9041, code: 'HS08', module_id: 6, title: 'Actively engage in the Human Skills Deep Dives'}
     ]);
    });
};
