const asyncHandler = require('express-async-handler')

module.exports.getExchange = asyncHandler(async (req, res) => {
    res.json({"message":"Hello World"})
})