const express = require('express')
const app = express()
const port = 3000
var proxy = require('http-proxy-middleware');

app.use('/Billing', express.static('../frontend-billing'))

app.use('/BillingBackend', proxy({ target: 'http://240ab1b8.ngrok.io', changeOrigin: true, logLevel: 'debug' }) );
// app.use('/BillingBackend', proxy({ target: 'https://test.novisign.com', changeOrigin: true, logLevel: 'debug' }) );

app.listen(port, () => console.log(`Example app listening on port ${port}!`));