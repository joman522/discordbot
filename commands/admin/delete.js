const commando = require('discord.js-commando');

class deleteCommand extends commando.Command{
    constructor(client){
        super(client, {
            name: 'purge',
            group: 'admin',
            memberName: 'purge',
            description: 'Lösche die letzten 100 Nachrichten',
            guildOnly: true
        });
    }

    async run(message, args){
        message.channel.bulkDelete(100);
    }
}

module.exports = deleteCommand;