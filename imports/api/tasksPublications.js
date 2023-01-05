import { Meteor } from 'meteor/meteor';
import { RoomsCollection } from './Rooms';

Meteor.publish('rooms.public', function publishRooms(){
    return RoomsCollection.find(
        // {userId: this.userId}
        )
})