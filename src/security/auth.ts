import * as express from 'express'
import { User } from '../users/users.model';
import * as jwt from 'jsonwebtoken'
import { environment } from '../../common/environment'
import { UnauthorizedError } from '../../common/error';

export const authenticate: express.RequestHandler = (req: express.Request, resp: express.Response, next: express.NextFunction) => {
    const { fone, email, password } = req.body
    User.findByEmailOrFone(fone, email, '+password')
        .then(user => {
            if (user && user.matchesPassword(password)) {
                const token = jwt.sign({ sub: user.email, iss: 'financas' }, environment.secutiry.jwtSecret)
                resp.json({
                    name: user.name,
                    email: user.email,
                    accessToken: token
                })
                return next(false)
            } else
                return next(new UnauthorizedError('Usuário ou senha incorreto'))

        })
        .catch(next)
}