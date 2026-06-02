const statusCodes = require('http-status-codes');
const info = (req, res) => {
    res.status(statusCodes.OK).json({success: true, message: 'API is working fine!', data: {}, error: {}});
}

module.exports = {info};