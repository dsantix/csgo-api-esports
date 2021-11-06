const express = require('express')
const HLTV = require('../node_modules/hltv-api/dist/index.js').default
const makeEndpoints = require('endpoints.js')

const app = express()

makeEndpoints(app, HLTV)

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening csgo-api on port http://localhost:${PORT} ...`)
})