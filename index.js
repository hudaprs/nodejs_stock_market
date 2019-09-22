const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
	res.render('home')
})

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server Started At Port ${port}`))