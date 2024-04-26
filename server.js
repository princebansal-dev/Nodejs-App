import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hey... I'm Prince Bansal</h1>");
});

app.post("/register", (req, res) => {
    res.sendStatus(201);
});

app.put("/user/prince", (req, res) => {
    res.sendStatus(200);
});

app.patch("/user/prince", (req, res) => {
    res.sendStatus(200);
});

app.delete("/user/prince", (req, res) => {
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`listening on PORT=${PORT}`);
});
// test
