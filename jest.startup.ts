import * as jestCli from "jest-cli";
import { Server } from "./server/server";
import { environment } from "./common/environment";
import { usersRouter } from "./src/users/users.router";
import { User } from "./src/users/users.model";
import { transactionRouter } from "./src/transactions/transactions.router";
import { categoriesRouter } from "./src/categories/categories.router";

let server: Server;

const beforeAllTests = () => {
  environment.db.url =
    process.env.DB_TEST_URL || "mongodb://localhost/financas-test";
  environment.server.port = process.env.SERVER_PORT_TEST || 4001;
  environment.secutiry.jwtSecret = "test-secret-financas";
  server = new Server();

  return server
    .bootstrap([usersRouter, transactionRouter, categoriesRouter])
    .then(server => User.deleteMany({}))
    .then(() => {
      let admin = new User();
      admin.name = "Admin";
      admin.fone = "16993187409";
      admin.email = "admin@email.com";
      admin.password = "123456789";
      admin.profiles = ["admin", "user"];
      return admin.save();
    })
    .catch(console.error);
};

const afterAllTests = () => {
  return server.shutDown();
};

beforeAllTests()
  .then(() => jestCli.run())
  .then(() => afterAllTests())
  .catch(err => {
    console.error;
    process.exit(1);
  });
