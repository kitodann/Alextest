const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", require("./routes/index.js"));

app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(PORT, async () => {
    console.log('Server started on port:' + PORT);
});
