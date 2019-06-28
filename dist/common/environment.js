"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    server: {
        port: process.env.SERVER_PORT || 5000,
        pageSize: process.env.PAGE_SIZE || 5
    },
    db: {
        url: process.env.DB_URL || 'mongodb://localhost/financas'
    },
    secutiry: {
        saltRounds: process.env.SALT_ROUNDS || 10,
        jwtSecret: process.env.JWT_SECRET || 'secret-financas'
    },
    log: {
        name: 'financas',
        level: process.env.LOG_LEVEL || 'debug'
    }
};
//# sourceMappingURL=environment.js.map