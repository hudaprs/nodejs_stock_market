const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

// API KEY from iexCloud
const stockMarketAPI = (keyword) => {
	return fetch(`https://cloud.iexapis.com/stable/stock/${keyword}/quote?token=apiPublic/Private`)
		.then(results => results.json())
			.then(results => {
				return results
			}).catch(err => console.log(err))
}

router.get('/', async (req, res) => {
	const stocksResults = await stockMarketAPI('fb')
  res.render('home', {
    title: 'Stock Market Web App',
    stock: stocksResults
  })
})

router.get('/q', async (req, res) => {
	const { keyword } = req.query
	const stocksResults = await stockMarketAPI(keyword)
  res.render('home', {
    title: 'Stock Market Web App',
    stock: stocksResults
  })
})


router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    date: new Date().getFullYear()
  })
})

module.exports = router