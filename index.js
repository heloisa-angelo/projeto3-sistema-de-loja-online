const Usuario = require('./class/Usuario')
const Administrador = require('./class/Administrador')
const Cliente = require('./class/Cliente')
const Pedido = require('./class/Pedido')
const Produto = require('./class/Produto')



console.log(usuarioGenerico.acessoPainel())

console.log("=================================");

const admin = new Administrador("João", 30)
const camisa = new Produto("Camisa", 50, 10)
const tenis = new Produto("Tênis", 200, 5)
admin.adicionarProduto(camisa)
admin.adicionarProduto(tenis)

console.log(admin.acessoPainel())
console.log("Produtos cadastrados pelo admin:", admin.produtos)

console.log("=================================")

const cliente = new Cliente("Maria", 20)
cliente.adicionarProduto(camisa)
cliente.adicionarProduto(tenis)

console.log(cliente.acessoPainel())
console.log("Carrinho da cliente:", cliente.carrinho)

const pedido = new Pedido(cliente, cliente.carrinho)

console.log("Valor total do pedido:", pedido.calcularTotal())
