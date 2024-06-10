const express = require ("express");
const app = express();
const cors = require("cors");
const advice = require('./routes/advice');
const quiz = require('./routes/quiz');


require("dotenv").config();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());


app.use('/api/info', advice);
app.use('/api/quiz', quiz);

app.get ('/api', (req, res) => {
    res.send('This is the data')
})

app.listen(PORT, () => {
  console.log("Listening on Port " + PORT);
});