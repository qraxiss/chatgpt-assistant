class BaseError extends Error {
    constructor(status, name, message) {
        super(message)
        this.status = status
        this.name = name
    }
}

module.exports.BadRequestError = (message) => {
    return new BaseError(400, 'Bad Request', message)
}

module.exports.FileCorruptedError = () => {
    return new BaseError(400, 'File Corrupted', 'File is corrupted, please try with something else.')
}

module.exports.FileExtentionError = () => {
    return new BaseError(400, 'Wrong File Extention', 'This file extention is not valid, please try again with something else.')
}

module.exports.CastError = () => {
    return new BaseError(400, 'Wrong Parameters', 'Cast Error')
}

module.exports.SessionError = () => {
    return new BaseError(400, 'Session Error', "We can't find your session, please be sure everything is okay.")
}

module.exports.ForbiddenError = () => {
    return new BaseError(403, 'Forbidden Error', 'You cant access here.')
}

module.exports.ValidationError = (message) => {
    return new BaseError(400, 'Validation Error', message)
}

module.exports.NotFoundError = () => {
    return new BaseError(404, 'Not Found Error', 'We cant find something, please be sure everythings is okay.')
}

module.exports.TokenInvalidError = () => {
    return new BaseError(404, 'Token Invalid Error', 'We cant decode your token, are you trying to hack us :D ? Dont push it so much.')
}

module.exports.TokenExpiredError = () => {
    return new BaseError(404, 'Token Expired Error', 'Your token is expired, please login again.')
}

module.exports.ForbiddenError = () => {
    return new BaseError(403, 'Forbidden Error', 'You cant access here.')
}

module.exports.FileCorruptedError = () => {
    return new BaseError(400, 'File Corrupted', 'File is corrupted or not available for use, please try with something else.')
}

module.exports.FileNotFoundError = () => {
    return new BaseError(400, 'File Not Found', "File is doesn't exist or not available for use, please try later.")
}
