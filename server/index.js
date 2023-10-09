const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)

// Connect to MongoDB
mongoose.connect('mongodb+srv://coreaiorg:XQzrZr6DBpFmDYdM@coreailearning.n8s1irk.mongodb.net/coreailearning', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "coreailearning" });

app.listen(3000, () => console.log('Server running on port 3000'));