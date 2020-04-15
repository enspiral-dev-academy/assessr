
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('elements').del()
    .then(function () {
      // Inserts seed entries
      return knex('elements').insert([
        {assessment_id: 9011, text: ''},
        {assessment_id: 9012, text: ''},
        {assessment_id: 9013, text: ''},
        {assessment_id: 9014, text: ''},
        {assessment_id: 9015, text: ''},

        {assessment_id: 9016, text: 'where'},
        {assessment_id: 9016, text: 'first'},
        {assessment_id: 9016, text: 'join'},
        {assessment_id: 9016, text: 'select'},
        {assessment_id: 9016, text: 'insert'},
        {assessment_id: 9016, text: 'update'},
        {assessment_id: 9016, text: 'delete'},

        {assessment_id: 9017, text: 'fs.readFile'},
        {assessment_id: 9017, text: 'fs.writeFile'},

        {assessment_id: 9018, text: ''},
        {assessment_id: 9019, text: ''},
        {assessment_id: 9020, text: ''},
        {assessment_id: 9021, text: ''},
        {assessment_id: 9022, text: ''},
        {assessment_id: 9023, text: ''},
        {assessment_id: 9024, text: ''},
        {assessment_id: 9025, text: ''},
        {assessment_id: 9026, text: ''},
        {assessment_id: 9027, text: ''},
        {assessment_id: 9028, text: ''},
        {assessment_id: 9029, text: ''},
        {assessment_id: 9030, text: ''},
        {assessment_id: 9031, text: ''},
        {assessment_id: 9032, text: ''},
        {assessment_id: 9033, text: ''}
      ]);
    });
};
