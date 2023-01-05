import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { RoomsCollection } from './Rooms';

Meteor.methods({
    'rooms.insert'(room){
        check(room, String);

        if(!this.userId){
            throw new Meteor.Error('Not authorized.');
        }
        RoomsCollection.insert({
            room: room.trim(),
            createdAt: new Date(),
            userId: this.userId,
            host: Meteor.user().username,
            players: [Meteor.user().username, null],
            playerXisAlive: false,
            playerOisAlive: false,
            currentPlayer: Meteor.user().username,
            moves: [
                {id:0, value:"X"},
                {id:1, value:"O"},
                {id:2, value:"X"},
                {id:3, value:"O"},
                {id:4, value:"X"},
                {id:5, value:"O"},
                {id:6, value:"X"},
                {id:7, value:"O"},
                {id:8, value:"X"}
                ],        
            arrInputX:[],
            arrInputO:[],
            msgWinner: null,
        })
    },
    
    'rooms.close'(_id){
        check(_id, String);

        if(!this.userId){
            throw new Meteor.Error('Not authorized.');
        }
 
        RoomsCollection.remove(_id);
    },

    'rooms.join'(_id){
        check(_id, String);

        if(!this.userId){
            throw new Meteor.Error('Not authorized.');
        }

        RoomsCollection.update(_id,{
            $set: {
                "players.1": Meteor.user().username
            }
        });    
    },

    'rooms.leave'(_id){
        check(_id, String);

        if(!this.userId){
            throw new Meteor.Error('Not autthorized.');
        }
        
        RoomsCollection.update(_id,{
            $set: {
                "players.1": null
            }
        });    
    },

    'rooms.reset'(roomId, playerX){   
        check(roomId, String);

        if(!this.userId){
            throw new Meteor.Error('Not autthorized.');
        }
        RoomsCollection.update(
            roomId,
            {
                $set:
                    {moves:[
                        {id:0, value:""},
                        {id:1, value:""},
                        {id:2, value:""},
                        {id:3, value:""},
                        {id:4, value:""},
                        {id:5, value:""},
                        {id:6, value:""},
                        {id:7, value:""},
                        {id:8, value:""}
                    ],
                    arrInputX: [],
                    arrInputO: [],
                    currentPlayer: playerX,
                    playerXisAlive: true,
                    playerOisAlive: true,           
                    msgWinner: null, 
                },
            }
            
        )
    },

    'rooms.handleClick'(cellId, roomId, currentPlayer, playerX, playerO){
        check(cellId, Number);

        if(!this.userId){
            throw new Meteor.Error('Not autthorized.');
        }

        RoomsCollection.update(
            roomId,
        {
            $set: {           
            [`moves.${cellId}.value`]: currentPlayer === playerX ? 'X' : 'O', 
            currentPlayer: currentPlayer === playerX ? playerO : playerX           
            },
            $push: {
                [currentPlayer === playerX ? 'arrInputX' : 'arrInputO']: cellId                
            }
        }
        )
    },

    'rooms.start'(roomId){
        check(roomId, String);

        if(!this.userId){
            throw new Meteor.Error('Not autthorized.');
        }

        RoomsCollection.update(
            roomId,
            {$set:{playerXisAlive: true}}
        )
    },

    'rooms.chkCombi'(roomId, currentPlayer){
        check(roomId, String);

        if(!this.userId){
            throw new Meteor.Error('Not autthorized.');
        }

        RoomsCollection.update(
            roomId,
            {
                $set:{                        
                    playerXisAlive: false,
                    playerOisAlive: false,    
                    msgWinner: `${currentPlayer} wins`        
                },
            }
            
        )
    }
})