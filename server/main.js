import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import { RoomsCollection } from '../imports/api/Rooms';
import { GamesCollection } from '../imports/api/Games';

const SEED_USERNAME = 'meteorite'
const SEED_PASSWORD = 'password'
const insertRoom = (room, user) => 
  RoomsCollection.insert({
    room: room,
    userId: user._id,
    createdAt: new Date(),
  });
  
const newGame = (game, user) => 
  GamesCollection.insert({
    game: game,
    userId: user._id,
    createdAt: new Date(),
  });


Meteor.startup(() => {
// Create User
    if (!Accounts.findUserByUsername(SEED_USERNAME)){
      Accounts.createUser({
        username: SEED_USERNAME,
        password: SEED_PASSWORD,
      })
    }

// Insert Room

const user = Accounts.findUserByUsername(SEED_USERNAME);

    if (RoomsCollection.find().count()===0){
      [
        'Room1',
        'Room2'       
      ].forEach(room => insertRoom(room, user))
    }

if (GamesCollection.find().count()===0){
  [
    'Game1',
    'Game2'       
  ].forEach(game => newGame(game, user))
}
})

























// import { LinksCollection } from '/imports/api/links';

// async function insertLink({ title, url }) {
//   await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
// }

// Meteor.startup(async () => {
//   // If the Links collection is empty, add some data.
//   if (await LinksCollection.find().countAsync() === 0) {
//     await insertLink({
//       title: 'Do the Tutorial',
//       url: 'https://www.meteor.com/tutorials/react/creating-an-app',
//     });

//     await insertLink({
//       title: 'Follow the Guide',
//       url: 'https://guide.meteor.com',
//     });

//     await insertLink({
//       title: 'Read the Docs',
//       url: 'https://docs.meteor.com',
//     });

//     await insertLink({
//       title: 'Discussions',
//       url: 'https://forums.meteor.com',
//     });
//   }
// });