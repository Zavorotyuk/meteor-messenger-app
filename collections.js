Messages = new Mongo.Collection("messages");
   Location = [
       { locName: "Lviv" },
       { locName: "Kyiv" },
       { locName: "Kharkiv" },
       { locName: "Odessa" }
   ];

   if (Meteor.isServer) {
         Meteor.methods({
            removeAllMessages: function() {
            return Messages.remove({});
          }
      });

        Meteor.startup(function() {
           Meteor.call('removeAllMessages');
      })
    }
