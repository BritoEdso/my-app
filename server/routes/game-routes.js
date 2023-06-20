import express from "express";
import gameModel from "../models/game.js";
const app = express()

app.get("/games", async (request, response) => {
    const games = await gameModel.find({})
    
    try {
        response.send(games)
    } catch(error) {
        response.status(500).send(error)
    }
})

app.post("/game", async (request, response) => {
    const game = new gameModel(request.body)

    try{
        await game.save()
        response.send(game)
    } catch (error) {
        response.status(500).send(error)
    }
})

export default app
