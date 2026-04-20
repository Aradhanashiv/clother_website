export const validateRole = (allowedRole) => {
     return (req,res,next) => {
     if(!allowedRole.includes(req.body.role)){
        return res.status(400).json({success: false, message: 'Invalid user Role'})
    }
     next(); 
     }
}