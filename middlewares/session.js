const { verifyToken } = require("../services/userService")

module.exports = () => {
    return (req, res, next) => {
        const token = req.headers['p-authorization'];
        
        if (token) {
            try {
                const userData = verifyToken(token);
                req.user = userData;
                req.token = token;
            } catch (err) {
                return res.status(401).json('Invalid access token');
            }
        }

        next();
    }
}