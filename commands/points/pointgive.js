const commando = require('discord.js-commando');
let points = require('C:/Users/Jojo/Documents/discordbot/points.json');

class deleteCommand extends commando.Command{
    constructor(client){
        super(client, {
            name: 'punkte',
            group: 'admin',
            memberName: 'points',
            description: 'Verteile Punkte an andere Spieler',
            args: [
            {
                key:'user',
                prompt:'Wem möchtest du die Punkte geben?',
                type:'user'
            }, 
            {
                key:'amount',
                prompt:'Wie viele Punkte möchtest du vergeben?',
                type: 'float'
            }]
        });
    }

    async run(message,{user, amount}){
        if(!points[user]){
            points[user] = {
                points:0
            };
        }
        if(message.author.id == user){
            message.channel.sendMessage('Du kannst dir selbst nicht Punkte geben');
        }
        else{
            points[user] = {
                points: points + amount
            };
            message.channel.sendMessage(user + ' hat nun ' + points[user] + " Punkte");
        }
    }

}

module.exports = deleteCommand;