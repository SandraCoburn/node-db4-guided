exports.up = function(knex) {
  return knex.schema
    .createTable("roles", tbl => {
      tbl.increments();
      tbl
        .string("name", 128)
        .notNullable()
        .unique();
    })
    .createTable("employees", tbl => {
      tbl.increments();
      tbl.string("name", 128).notNullable();

      //Foreign Key
      tbl
        .integer("role_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("roles")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("tickets", tbl => {
      tbl.increments();
      tbl.string("description", 255).notNullable();
    })
    .createTable("employee_tickets", tbl => {
      tbl.primary(["ticket_id", "employee_id"]);
      tbl
        .integer("ticket_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("tickets");
      tbl
        .integer("employee_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("employees");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("employee_tickets")
    .dropTableIfExists("tickets")
    .dropTableIfExists("employees")
    .dropTableIfExists("roles");
};
