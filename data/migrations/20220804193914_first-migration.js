exports.up = async function(knex) {
    await knex.schema
    .createTable('users', users => {
        users.increments('user_id');
        users.string('username', 255).notNullable().unique();
        users.string('password', 255).notNullable();
        users.timestamps(false, true)
    })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('users')
};