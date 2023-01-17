import express from 'express';
import {v4 as uuiddv4} from 'uuid';


const app = express();
app.use(express.json())

//Mock
let counter = [
  {id: 'ac3ebf68-e0ad-4c1d-9822-ff1b849589a8',
  order: 'X-Salada, 2 batatas grandes, 1 coca-cola',
  clientName: 'José',
  price: 44.5,
  status: 'Em preparação'
  }
]

//Middlewares
const checkId = (req, res, next) => {
  let { id } = req.params
 
  let index = counter.findIndex(client => client.id === id)
 
  if(index < 0){
    return res.status(404).json({error: 'User not found'})
  }

  req.userIndex = index

  next()

}


//Rota para listar os pedidos 
app.get('/order', (req, res) => {
  return res.json(counter)
});

//Rota que recupera um pedido por ID
app.get('/order/:id', checkId, (req, res) => {
  const index = req.userIndex
  return res.json(counter[index])

});

//Rota que registra os pedidos dos clientes
app.post('/order', (req, res) => {

  let { order, clientName, price, status } = req.body
  let orders = { id: uuiddv4(), order, clientName, price, status }

  counter.push(orders)

  return res.status(201).json(orders)
});

//Rota que altera o pedido já feito pelo ID
app.put('/order/:id', checkId, (req, res) => {
  
  const { order, clientName, price, status } = req.body
  const index = req.userIndex 
  const updateCounter = { id: uuiddv4(), order, clientName, price, status }

  counter[index] = updateCounter

  return res.json(updateCounter)

});

app.patch('/order/:id', checkId, (req, res) => {
  const index = req.userIndex
  counter[index].status = req.body.status
  res.json(counter)
})

app.delete('/order/:id', checkId, (req, res) => {
  const index = req.userIndex 
  counter.splice(index, 1)
  res.send(`Pedido com o ID: ${index} excluído com sucesso!`)
})


export default app