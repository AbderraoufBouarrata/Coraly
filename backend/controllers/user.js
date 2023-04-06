const users = require('../data/users.json')
// Get all users
exports.getUsers = async (req, res, next) => {

    let data = users
    console.log(data)
    if (!data) {
        return res.status(404).json({
            success: false,
            message: 'Users not found'
        })
    }

    res.status(200).json({
        succress: true,
        data: data
    })
}

// Get single user
exports.getUser = async (req, res, next) => {
    let user = await fetch('../data/users.json').then(res => res.json())
    user = user[req.params.id]

    if (!user) {
        return res.status(404).json({
            success: false,
            message: 'User not found'
        })
    }
    res.status(200).json({
        succress: true,
        data: user
    })
}