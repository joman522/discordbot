const commando = require('discord.js-commando');
const fs = require('fs')
var points = JSON.parse(fs.readFileSync('./points.json', 'utf8'));


class pointsQueryCommand extends commando.Command{
    constructor(client){
        super(client, {
            name: 'pointsquery',
            group: 'points',
            memberName: 'pointquery',
            description: 'Erhalte Infos über den Punktestand von einem Mitglied',
            args:[
                {
                    key:'user',
                    prompt:'Wessen Punktestand möchtest du erfahren?',
                    type:'user'
                }
            ]
        });
    }

    async run(message, {user}){ 
        
        message.channel.sendMessage(user + ' hat ' + points[user].points + ' Punkte!');

    }
}

module.exports = pointsQueryCommand;