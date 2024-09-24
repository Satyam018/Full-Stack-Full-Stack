import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie =(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET_KEY,{
        expiresIn:'15d'
    })
    console.log("Setting JWT cookie:", token);
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true, // prevent XSS attack
        sameSite: "Lax", // Change as needed
        secure: false, // Set to true if using HTTPS
        path: '/', // Ensure the cookie is available site-wide
    });

   

}

export default generateTokenAndSetCookie