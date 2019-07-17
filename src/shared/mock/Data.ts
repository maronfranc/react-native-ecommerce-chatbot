import { Product } from "../../models/product";

// Valor de teste adicionado enquando a conexão com o banco ainda não for feita
export const mockData: Array<Product> = [
  {
    id: 0,
    title: "Kit para Arduino",
    description: "Kit Iniciante V8 para Arduino",
    price: 59,
  }, {
    id: 1,
    title: "Kit Iniciante V8 para Arduino",
    description: "Kits Didáticos",
    price: 199.99,
  }, {
    id: 2,
    title: "Kit Avançado V4 para Arduino",
    description: "Kits Didáticos",
    price: 250,
  }, {
    id: 3,
    title: "Master Kit: Kit Iniciante V8 + Kit Avançado V4",
    description: "Kits Didáticos",
    price: 389.99,
  }
]