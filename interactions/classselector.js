const {Client,Intents,MessageButton,MessageActionRow, Message} = require('discord.js')

module.exports = {
    name: "classselector",
    alias: ['classselector'],
    execute: async function(interact,arg){
        const ClassRole = {
            "m6" : interact.role.cache.get('985885547807526982')
        }
        await interact.member.roles.add(ClassRole[arg[1]])
    }
}