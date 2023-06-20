import express from 'express'
import mongoose from 'mongoose'
import gameRouter from './routes/game-routes.js'

const app = express()
const port = 9001
const uri = 'mongodb+srv://britoedso:VZIPmUE6mCJlWuyW@cluster0.6xzcfx8.mongodb.net/'

app.use(express.json())

await mongoose.connect(uri)

app.use(gameRouter)

app.listen(port, () => {
    console.log("i be listening on port:", port)
})