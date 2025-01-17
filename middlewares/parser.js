function errorParser(err) {
    if ( err.name == 'ValidationError') {
        return Object.values(err.errors).map(e => e.message).join('\n')
    } else {
        return err.message
    }
}

module.exports = {
    errorParser
}