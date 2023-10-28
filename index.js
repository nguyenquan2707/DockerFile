const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json([{
    name: 'Quan',
    email: 'q@gmail.com'
},
{
  name: 'Tra',
  email: 'tra@gmail.com'
},
{
  name: 'Ngan',
  email: 'Ngan@gmail.com'
},
{
  name: 'Muoi',
  email: 'Muoi@gmail.com'
}
]))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})