export default class Categorias {
  constructor() {
    this.categorias = [];
  }

  adicionarCategoria(categoria) {
    this.categorias.push(categoria);
    console.log(this.categorias);
  }
}
