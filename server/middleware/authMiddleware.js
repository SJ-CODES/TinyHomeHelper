import jwt from "jsonwebtoken";
// import AsyncHandler from "express-async-handler"
// import User from "../models/model.user"

const auth = async (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		const isCustomAuth = token.length < 500;
		let decodedData;
		if (token && isCustomAuth) {
			decodedData = jwt.verify(token, "abc123");
			req.userId = decodedData?.id;
		} else {
			decodedData = jwt.decode(token);
			rew.userId = decodedData?.sub;
		}
		next();
	} catch (error) {
		console.log(error);
	}
};

export { auth };
