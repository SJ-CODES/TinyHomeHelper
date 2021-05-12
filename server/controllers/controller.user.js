const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserModel = require("../models/model.user.js");

const secret = "test";

exports.signin = async (req, res) => {
	const { email, password } = req.body;

	try {
		const oldUser = await UserModel.findOne({ email });

		if (!oldUser)
			return res.status(404).json({ message: "User doesn't exist" });

		const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

		if (!isPasswordCorrect)
			return res.status(400).json({ message: "Invalid credentials" });

		const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
			expiresIn: "1h",
		});

		res.status(200).json({ result: oldUser, token });
	} catch (err) {
		res.status(500).json({ message: "Something went wrong" });
	}
};

// export const getPosts = async (req, res) => {
//     const { page } = req.query;
//     console.log('here')
//     try {
//         const LIMIT = 8;
//         const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page

//         const total = await PostMessage.countDocuments({});
//         const posts = await PostMessage.find().limit(LIMIT).skip(startIndex);

//         res.json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }
