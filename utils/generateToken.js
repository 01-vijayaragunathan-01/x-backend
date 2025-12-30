import jwt from "jsonwebtoken"

const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "15d"
    });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 1000, //15d 24h 60m 1000ms
        httpOnly: true, //it prevents xxs attacks
        secure: true,       // REQUIRED (Render = HTTPS)
        sameSite: "none",
        secure: process.env.NODE_ENV !== "production"
    })
}

export default generateToken;