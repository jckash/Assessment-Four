const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, addDream } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/dream", addDream);
app.put("/api/dream", updateDream);
app.delete("/api/dream", deleteDream);

app.listen(4000, () => console.log("Server running on 4000"));
