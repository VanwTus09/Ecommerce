
// middleware kiểm tra token trước
const authenToken = (req, res, next) =>{
    const token = req.cookies.token
    if(!token) {
        return res.status(401).json({error : "Missing token"})
    }
}
// kiểm tra và giải mã token  
