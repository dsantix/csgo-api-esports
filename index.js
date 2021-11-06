const express = require('express')
const HLTV = require('hltv-api/dist/index.js').default
const makeEndpoints = require('endpoints.js')

const app = express()

makeEndpoints(app, HLTV)

const PORT = process.env.PORT

app.listen(PORT || 5000, () => {
  console.log(`Listening csgo-api on port http://localhost:${PORT} ...`)
})
