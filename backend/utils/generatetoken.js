import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie =(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET_KEY,{
        expiresIn:'15d'
    })
    // console.log("Setting JWT cookie:", token);
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true, 
        sameSite: "Strict", 
        secure: false, 
        path: '/',
    });

   

}

export default generateTokenAndSetCookie