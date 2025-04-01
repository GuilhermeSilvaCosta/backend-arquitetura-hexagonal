import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import UserRegister from './core/user/service/UserRegister';
import UserRepositoryPg from './external/db/UserRepositoryPg';
import PasswordEncrypt from './external/auth/PasswordEncrypt';
import UserRegisterController from './external/api/UserRegisterController';
import UserLogin from './core/user/service/UserLogin';
import UserLoginController from './external/api/UserLoginController';
import GetProductById from './core/product/service/GetProductById';
import GetProductByIdController from './external/api/GetProductByIdController';
import UserMiddleware from './external/api/UserMiddleware';

const app = express();
const port = process.env.API_PORT ?? 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
});

// ----------------------------- Rotas abertas ------------------------- //

const userRegister = new UserRegister(UserRepositoryPg, PasswordEncrypt);
const userLogin = new UserLogin(UserRepositoryPg, PasswordEncrypt);

new UserRegisterController(app, userRegister);
new UserLoginController(app, userLogin);

// ----------------------------- Rotas protegidas ------------------------- //

const userMiddlware = UserMiddleware(UserRepositoryPg);

const getProductById = new GetProductById();
new GetProductByIdController(app, getProductById, userMiddlware);
