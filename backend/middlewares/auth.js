const protect = (req,res,next) => {
    const {user} = req.session 
    if (!user) {
        return res.status(403).send({err:"UNAUTHORIZED"})
    }
    req.user = user
    next()
}
module.exports = protect