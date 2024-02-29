import express from 'express';
import cors from 'cors';
import connect from './config/db.js'; 
import chalk from 'chalk';

const app = express();

app.use(cors());
app.use(express.json());

connect()
    .then(() => {
        console.log(chalk.red.bold('conexão com o banco de dados bem-sucedida'));
        app.listen(3000, () => {
            console.log(chalk.red.bold('financas-api escutando na porta 3000'));
        });
    })
    .catch((err) => {
        console.error('Falha ao conectar ao banco de dados:', err);
    });

export default app;
