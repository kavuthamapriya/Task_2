module.exports = {
    HOST: "localhost",
    DB: "testdb",
    USER: "postgres",
    PASSWORD:"password",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  