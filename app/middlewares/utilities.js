const {objectId} = require('mongodb');
const validateId = function(req,res,next){
    if(!objectId.isValid(req.params.id)){
        res.send({
            notice:'Invalid objectId'
        });
    }else{
        next();
    }
};

module.exports = {
    validateId
}