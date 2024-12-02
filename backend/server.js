import { express } from "express";

const app = express();

app.listen(3000, () => {
    console.log("servidor escutando...")
})

app.get("/", (req, res) => {
    res.status(200).json("hello");
})