import app from './src/index.js'

let PORT = 3000

app.get('/', (req, res) => {
  res.send('Server rodando')
})

app.listen(PORT, () => {
  console.log(`Server disponível em: http://localhost:${PORT} `)
})