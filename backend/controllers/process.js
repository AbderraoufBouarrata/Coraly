const process = require('../data/processes');
// Get all processes
exports.getProcesses = async (req, res, next) => {

    let data = process

    if (!data) {
        return res.status(404).json({
            success: false,
            message: 'Processes not found'
        })
    }

    res.status(200).json({
        succress: true,
        data: data
    })
}

// Get single process
exports.getProcess = async (req, res, next) => {
    let data = process
    console.log(req.params)

    if (!data) {
        return res.status(404).json({
            success: false,
            message: 'Process not found'
        })
    }
    res.status(200).json({
        succress: true,
        data: data
    })
}