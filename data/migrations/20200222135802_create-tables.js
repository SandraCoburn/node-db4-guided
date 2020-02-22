exports.up = function(knex) {
  return knex.schema
    .createTable("zoos", tbl => {
      tbl.increments();
      tbl.string("zoo_name").notNullable();
      tbl
        .string("zoo_address")
        .notNullable()
        .unique();
    })
    .createTable("species", tbl => {
      tbl.increments();
      tbl.string("species_name", 128).notNullable();
    })
    .createTable("animals", tbl => {
      tbl.increments();
      tbl.string("animal_name").notNullable();
      tbl
        .integer("species_id")
        .notNullable()
        .unsigned()
        .references("species.id");
    })
    .createTable("zoo_animals", tbl => {
      tbl
        .integer("zoo_id")
        .unsigned()
        .notNullable()
        .references("zoos_id");
      tbl
        .integer("animal_id")
        .unsigned()
        .notNullable()
        .references("animals.id");
      tbl.primary(["zoo_id", "animal_id"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("zoo_animals")
    .dropTableIfExists("animals")
    .dropTableIfExists("species")
    .dropTableIfExists("zoos");
};
