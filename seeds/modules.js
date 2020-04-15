
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('modules').del()
    .then(function () {
      // Inserts seed entries
      return knex('modules').insert([
        {id: 1, title: 'Foundations: Technical', course: 'Foundations'},
        {id: 2, title: 'Foundations: Core', course: 'Foundations'},
        {id: 3, title: 'Core Programming', course: 'Bootcamp'},
        {id: 4, title: 'Web development', course: 'Bootcamp'},
        {id: 5, title: 'Teamwork & Leadership', course: 'Bootcamp'},
        {id: 6, title: 'Human Skills', course: 'Bootcamp'}
      ]);
    });
};


