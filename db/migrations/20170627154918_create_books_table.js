exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(table) {
      table.increments();
      table.string('title').notNullable();
      table.string('genre');
      table.string('description');
      table.string('cover_url');
      table.string('author1_fname');
      table.string('author1_lname');
      table.string('author1_bio');
      table.string('author1_photo_url');
      table.string('author2_fname');
      table.string('author2_lname');
      table.string('author2_bio');
      table.string('author2_photo_url');
      table.string('author3_fname');
      table.string('author3_lname');
      table.string('author3_bio');
      table.string('author3_photo_url');
      table.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {

};
