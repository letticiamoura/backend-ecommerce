import Product from '../models/Product.js';

class ProductRepository {

  //Função auxiliar p/ simplificar o tratamento de erros
  async handleRequest(promise, errorMsg) {
    try {
      return await promise;
    } catch (err) {
      console.error("Erro na manipulação da solicitação", err);
      throw new Error(errorMsg);
    }
  }

  //Listando todos os produtos
  async findAll() {
    return this.handleRequest(Product.findAll(), "Não foi possível localizar os Produtos!");
  }

  //Listando produtos por ID
  async findById(id) {
    const product = await this.handleRequest(Product.findByPk(id), `Não foi possível localizar o produto ${id}`);
    if (!product) throw new Error(`Produto ${id} não encontrado`);
    return product;
  }

  //Criando um novo produto
  async create(productData) {
    return this.handleRequest(Product.create(productData), "Não foi possível cadastrar o produto");
  }

  //Atualizando produto por id
  async update(productData, id) {
    const [updatedRows] = await this.handleRequest(
      Product.update(productData, { where: { id } }),
      "Não foi possível atualizar o produto"
    );
    if (updatedRows === 0) throw new Error("Produto não encontrado");
    return updatedRows;
  }

  //Apagando produto por id
  async delete(id) {
    const deletedRows = await this.handleRequest(
      Product.destroy({ where: { id } }),
      `Não foi possível apagar o produto ${id}`
    );
    if (deletedRows === 0) throw new Error(`Produto ${id} não encontrado`);
    return deletedRows;
  }
}

export default new ProductRepository();
