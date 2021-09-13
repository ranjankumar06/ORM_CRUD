// Update with your config settings.
require("dotenv").config({part:`${__dirname}/.env`})

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database:process.env.D_B_name,
      user:process.env.D_B_user,
      password:process.env.D_B_pass,
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {

      tableName: 'knex_migrations',
      directory:"./migrations"
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory:"./migrations"
    }
  }

};

