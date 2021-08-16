const model = require('../models/friends.model')


function getFriend(req, res) {
   const friendId = Number(req.params.friendId);
   const friend = model[friendId];
   if(friend){
      res.status(200).json(friend);
   }else{
      res.status(404).json({
         error: "Friend does not exist"
      });
   }
}

function getFriends (req, res) {
   if (model.length > 0){
      res.status(200).json(model);
   } else{
      res.status(404).json({
        error: "no friends found" 
      });
   }
}

function postFriend(req, res) {
   if (!req.body.name){
      return res.status(400).json({
         error: "Missing friend name" 
       });
   }
   const newFriend = {
      name: req.body.name,
      id: model.length,
   };

   model.push(newFriend);

   res.json(newFriend)
}

module.exports = {
   getFriend,
   getFriends,
   postFriend
}