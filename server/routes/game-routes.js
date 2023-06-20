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

app.patch('/game/:id', async (req, res) => {
    try {
        await gameModel.findByIdAndUpdate(req.params.id, req.body)
        await gameModel.save()
        res.send(game)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.delete('/game/:id', async (req, res) => {
    try {
        const game = await gameModel.findByIdAndDelete(req.params.id)

        if(!game) res.status(404).send("No game found")
    } catch (error) {
        res.status(500).send(error)
    }
})

export default app
