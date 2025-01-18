module.exports = () => (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, PUT, DELETE, HEADERS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-type, P-Authorization')

    next()
}