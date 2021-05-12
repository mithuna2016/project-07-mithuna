module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Sarasvin23",
    DB: "CONNECT-E-DB",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };