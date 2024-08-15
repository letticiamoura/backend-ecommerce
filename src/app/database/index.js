import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from 'sequelize';

//Variáveis de acesso
const database = process.env.DATABASE;
const user = process.env.USER;
const password = process.env.PASSWORD;
const host = process.env.HOST;
const port = 3306;

//Utilizando o Sequelize p/ realizar a conexão com o BD
const sequelize = new Sequelize(database, user, password, {
  host: host,
  port: port,
  dialect: 'mysql'
});

//Testando a conexão
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados foi estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

/**
 * Executa uma query SQL com ou sem valores usando Sequelize
 * @param {string} sql Instrução SQL p/ ser executada
 * @param {Array} values Valores a serem passados p/ o SQL
 * @param {string} msgReject Mensagem a ser exibida em caso de erro
 * @returns Objeto da Promisse
 */
export const consult = async (sql, values = [], msgReject) => {
  try {
    const [results, metadata] = await sequelize.query(sql, {
      replacements: values,
      type: sequelize.QueryTypes.SELECT //ou QueryTypes.UPDATE, QueryTypes.INSERT...
    });
    return results;
  } catch (err) {
    throw new Error(msgReject);
  }
};

export default sequelize;