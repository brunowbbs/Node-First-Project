module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  synchronize: true,
  logging: false,

  entities: ["dist/models/*.js"],
  migrations: ["dist/migrations/*.js"],
  cli: {
    entitiesDir: "src/models",
    migrationsDir: "src/migrations",
  },
};
