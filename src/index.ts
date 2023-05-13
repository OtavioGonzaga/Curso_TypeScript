import express from 'express'
import * as dotenv from 'dotenv'
import {User, Adm, Post} from './helpers/constructor'
console.log(new Adm('otavio luiz gonzaga', 16, 'otaviolgonzaga', 'junior'))
dotenv.config()
const app = express()
app.get('/', (req, res) => res.send('Hello World!'))
const port = process.env.PORT
app.listen(port, () => console.log(`Example app listening on port ${port}!`))