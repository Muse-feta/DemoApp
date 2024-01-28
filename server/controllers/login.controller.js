const loginServices = require('../services/login.services')

const login_controller = async (req, res) => {
    //     // Get the user's input from the form.
    const employee = await loginServices.login(req.body)
    if(employee){
        return res.status(200).json({message: 'login succesfully'})
    }else{
        return res.status(500).json({message: 'login error'})
    }
}

module.exports = { login_controller}