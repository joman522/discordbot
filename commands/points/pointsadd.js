const commando = require('discord.js-commando');
const fs = require('fs')
var points = JSON.parse(fs.readFileSync('./points.json', 'utf8'));


class pointsAdd extends commando.Command{
    constructor(client){
        super(client, {
            name: 'pointsadd',
            group: 'points',
            memberName: 'pointcommand',
            description: 'Vergebe Punkte oder erhalte Infos über den Punktestand',
            args:[
                {
                    key:'user',
                    prompt:'Wem möchtest du die Punkte geben?',
                    type:'user'
                },
                {
                    key:'amount',
                    prompt:'Um wie viel möchtest du den Punktestand erhöhen?'
                }
            ]
        });
    }

    async run(message, {user, amount}){       

        if(!points[user]) {
            points[user] = {
                points: 0
            }
        }
        let old_points = points[user].points;

        points[user].points = old_points + amount
        fs.writeFile('./points.json', JSON.stringify(points. null, 4), err=>{
            if(err) throw err;
            message.channel.send(user + ' hat nun ' + points[user].points)
        })

    }
}

module.exports = pointsAdd;