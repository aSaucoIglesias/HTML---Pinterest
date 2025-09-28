const express = require("express");
const { connect } = require("./utils/db");

connect();

const PORT = 3000;
const app = express();

const Character = require("./models/Character");

const router = express.Router();

const getCharacters = async (req, res, next) => {
    try {
        const characters = await Character.find();
        return res.status(200).json(characters);
    } catch (error) {
        return res.status(400).json(error);
    }
};

router.get("/characters", getCharacters);

app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});

