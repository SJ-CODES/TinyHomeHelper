const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const postRoutes = require('./routes/route.posts');

const app = express();


app.use(cors());

app.use(express.json())
app.use('/posts' , postRoutes);



const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 8080;

mongoose
	.connect(
		"mongodb+srv://capstone:capstone@cluster0.jlwry.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() =>
		app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
	)
	.catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
