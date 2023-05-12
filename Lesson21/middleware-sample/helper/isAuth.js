const isAuth = (req, res, next) => {
    const isAuthorized = false
    if (isAuthorized) {
        next()
    } else {
        res.send('Unauthorized. Please login first')
    }
}

module.exports = isAuth