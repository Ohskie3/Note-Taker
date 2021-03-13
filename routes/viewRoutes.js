const router = require('express').Router()
const { join } = require('path')

router.get('/notes', (req, res) => {
  res.sendFile(join(__dirname, '..', 'Develop', 'public', 'notes.html'))
})

router.get('/*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'Develop', 'public', 'index.html'))
})

module.exports = router
