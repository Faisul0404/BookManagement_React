module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Faisul1998",
    DB: "book_management",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };