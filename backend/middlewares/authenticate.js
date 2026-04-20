import JWT from 'jsonwebtoken'

export const autheticateUser = async (req,res,next) => {
    try {
      const token = req.cookies.token
      if(!token){
        return res.status(400).json({Success: false, message: "Cookie Not Found"})
      } 
      const decode = JWT.verify(token,process.env.SECRET_ID) 
      if(!decode){
        return res.status(400).json({Success: false, message: "Invalid Cookie"})
      }
      req.user = decode.userId
      next()
    } catch (error) {
        console.log(error);
        return res.status(400).json({success: false, message: 'Authetication Request Failed'})
    }
}