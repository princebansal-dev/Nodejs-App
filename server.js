import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hey... I'm Prince Bansal</h1>");
});
app.get("/about", (req, res) => {
    res.send("<h1>About Me!</h1>");
});
app.get("/contact", (req, res) => {
    res.send("<h1>https://github.com/princebansal7</h1>");
});

app.listen(PORT, () => {
    console.log(`listening on PORT=${PORT}`);
});
