import JWT from 'jsonwebtoken'

export const createToken = (userId) => {
    try {
       const token = JWT.sign({userId}, process.env.SECRET_ID, {expiresIn : "7d"})  
       return token
    } catch (error) {
        console.log("Error in Token Creation" , error);
    }
}