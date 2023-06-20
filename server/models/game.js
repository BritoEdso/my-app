import mongoose from "mongoose";

const GameSchema = new mongoose.Schema({
    title:  {
        type: String,
        required: true,
        time: true,
        lowercase: true,
    },
    genre: {
        type: String,
        required: true,
        time: true,
        lowercase: true,
    },
    cost: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) throw new Error("Games do not pay you!");
     },
    }
})

const Game = mongoose.model("Game", GameSchema)
export default Game

