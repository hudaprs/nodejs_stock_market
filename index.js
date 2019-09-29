const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const path = require('path')
const stockRoutes = require('./routes/stock')
const bodyParser = require('body-parser')

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Static Folder
app.use(express.static(path.join(__dirname, 'public')))

// Template Engine / Handlebar
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use('/', stockRoutes)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server Started At Port ${port}`))