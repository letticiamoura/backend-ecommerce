import ProductRepository from "../repositories/ProductRepository.js";


class ProductController {

  //Método p/ listar todos os produtos
  async index(req, res) {


    const limitParam = parseInt(req.query.limit, 10) || 12;
    const pageParam = parseInt(req.query.page, 10) || 1;
    const fieldsParamString = req.query.fields; // Isso será uma string como 'electronics,home-appliances,books'
    const matchParam = req.query.match;

    // Converte a string em um array de strings
    const fieldsParam = fieldsParamString ? fieldsParamString.split(',') : [];
    
    try {
      //Chamando o repositório p/ listar todos os produtos
      const products = await ProductRepository.findAll({limitParam, pageParam, fieldsParam, matchParam});
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  //Método p/ obter um produto específico pelo ID
  async show(req, res) {
    try {
      //Chama o repositório p/ listar um produto pelo ID
      const product = await ProductRepository.findById(req.params.id);
      //Se o produto não for encontrado, responde com status 404
      if (!product) {
        return res.status(404).json({ error: "Produto não encontrado!" });
      }
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  //Método p/ criar um novo produto
  async store(req, res) {
    try {
      //Chama o repositório p/ criar um novo produto
      const newProduct = await ProductRepository.create(req.body);
      res.status(201).json(newProduct);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  //Método p/ atualizar um produto existente
  async update(req, res) {
    try {
      //Chama o repositório p/ atualizar o produto
      const updated = await ProductRepository.update(req.body, req.params.id);
      //Se nenhum produto for encontrado ou nenhuma alteração for realizada, responde com status 404
      if (!updated) {
        return res.status(404).json({ error: "Produto não encontrado ou nenhuma alteração realizada" });
      }
      res.status(200).json({ message: "Produto atualizado com sucesso" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  //Método p/ deletar um produto
  async delete(req, res) {
    try {
      //Chama o repositório p/ deletar o produto pelo ID
      const deleted = await ProductRepository.delete(req.params.id);
      //Se o produto não for encontrado, responde com status 404
      if (!deleted) {
        return res.status(404).json({ error: "Produto não encontrado" });
      }
      res.status(200).json({ message: "Produto deletado com sucesso" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default new ProductController();