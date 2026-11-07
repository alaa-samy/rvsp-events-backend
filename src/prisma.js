const { PrismaClient } = require("./path/to/generated/prisma");
const { PrismaMariaDb } = require("@prisma/adapter-mariadb");

const adapter = new PrismaMariaDb({
  connectionString: process.env?.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

module.exports = prisma;
