const UserModel = require('../Models/UserModel');

module.exports = {
    async GetUsers(request,response){

        const params = request.query;

        if(typeof params.TOKEN === null || params.TOKEN !== process.env.TOKEN) return response.json({error:'Token inválido'});

        const User = await UserModel.find();


        return response.json(User);
    },
    async GetUserByName(request,response){
        const {Username,Password} = request.body;


        const User = await UserModel.findOne({Username:Username});

        if(User.Password === Password)
        return response.json(User);
        else
        return response.json({Error:'Usuario ou senha inválidos'});
    },
    async AddUser(request,response){
        const { Username, Password } = request.body;

        const User = await UserModel.create({
            Username,
            Password
        });

        return response.json(User);
    }
}