// Import User Schema

var db_user = require('../models/user');

// Read User

exports.get_user = (req,res)=>{
    var user_id = req.params.user_id;
    db_user.find({_id: user_id},function (err, data) {
    if (data === null) {
        res.send("user does not exist");
    } else {
       res.send(data);
    }
  });
}

// Delete User

exports.delete_user = (req,res)=>{
    var user_id = req.params.user_id;
    db_user.deleteOne({_id: user_id},function (err, data) {
           if (data.deletedCount === 0) {
        res.send("User does not exist");
    } else {
       res.send("User deleted");
    }
});
}

// Update User

exports.update_user = (req,res)=>{
    var user_id = req.params.user_id;
    var content = req.body;
    db_user.findOneAndUpdate({_id: user_id},content,{new: true},function (err, data) {
           if (data === null) {
        res.send("User does not exist");
    } else {
       res.send("User updated");
    }
      });
   }

// See All Users
   exports.show_all_users = (req, res) => {   
   
      db_user.find({}, function (err, data) {
          res.send(data);
      });
 
}
