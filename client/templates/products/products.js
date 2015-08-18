/**
 * Created by rana on 8/15/15.
 */


Template.products.helpers({
   MongoData : function (){
       return Posts.find().fetch();
   }
       
});

Template.products.events({
 'submit #new-person': function(event) {
     var title = event.target.title.value;
     var author = event.target.author.value;

    Posts.insert({
       title: title,
        author: author,
        url: ''
    });

     return false;
 }
});

Template.products.events({
   "click .btn": function(){
    Posts.remove(this._id);
   }
});