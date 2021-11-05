const express = require('express')
const HLTV = require('hltv-api/dist/index.js').default
const makeEndpoints = require('endpoints.js')

const app = express()

makeEndpoints(app, HLTV)

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Listening with-commonjs on port http://localhost:${PORT} ...`)
})