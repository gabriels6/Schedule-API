const DailyReviewModel = require('../Models/DailyReviewModel');
const {ObjectID} = require('mongodb');

module.exports = {
    async GetReview(request,response){
        const params = request.query;

        if(typeof params.TOKEN === undefined || params.TOKEN !== process.env.TOKEN) return response.json({error:'Token inválido'});

        const DaiyReviews = await DailyReviewModel.find({Author_Id:params.id}).sort({Date:-1});

        return response.json(DaiyReviews);
    },

    async AddReview(request,response){
        const {Author_Id,Review,Date} = request.body;

        const DaiyReview = await DailyReviewModel.create({
            Author_Id,
            Date,
            Review,
        });

        return response.json(DaiyReview);
    },

    async RemoveReview(request,response){
        const params = request.query;

        if(typeof params.TOKEN === undefined || params.TOKEN !== process.env.TOKEN) return response.json({error:'Token inválido'});

        const DaiyReview = await DailyReviewModel.deleteOne(
            {
                _id:ObjectID(params._id)
            });

        return response.json(DaiyReview);

    }
}