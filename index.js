const {Client,Intents,MessageButton,MessageActionRow, Message} = require('discord.js')
const {getAllCommands,getAllInteractions} = require('./utils/generate')
const fs = require('fs')

const dotenv = require('dotenv')
dotenv.config()

const PREFIX = "-"
const Command = getAllCommands()
const Interaction = getAllInteractions()

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.GUILD_VOICE_STATES,
    ]
})

client.on('ready',async (test)=>{
    console.log("Going Live...")
})
client.login(process.env.TOKEN)

//TODO--- User Command ---

client.on('messageCreate',(message)=>{
    var arg = message.content.split(' ')
    if(arg[0].slice(0,PREFIX.length) == PREFIX){
        var command = arg[0].slice(PREFIX.length)
        var result = -1
        var executable = false
        for(var i in Command){
            if(Command[i].name == command || Command[i].alias.includes(command)){

                if(Command[i].roleRequirement.length == 0){
                    executable = true
                }
                else{
                    for(var j in Command[i].roleRequirement){
                        if(message.member.roles.cache.some(role => role.id == Command[i].roleRequirement[j])){
                            executable = true
                            break
                        }
                    }
                }

                if(executable){
                    result = Command[i].execute(message,arg)
                }
                else{
                    result = 2
                }
                break
            }
        }

        /* Command Result / Special Execute
           -1 - No Command Found
            0 - Success
            1 - Error(Bad Input)
            2 - Permission Required
        */
        if(result == -1 || result == 0) {}
        else if(result == 1){message.channel.send("Something went Wrong! Please try again")}
        else if(result == 2){message.channel.send("You need Permission!")}
    }
})

// Active Interaction(Button)
client.on('interactionCreate',async (interact)=>{
    if(interact.isButton()){
        var arg = interact.customId.split('-')
        switch(arg[0]){
            case "classselector":
                await Interaction.classselector.execute(interact,arg)
                break
        }
    }
})