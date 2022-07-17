const {MessageButton,MessageActionRow} = require('discord.js')
const { showProblem } = require("../modules/ProgrammingProblem")

module.exports = {
    name: "postproblems",
    alias : ["postproblems","ppb"],
    clearCommand: true,
    roleRequirement: ["985887344504746006","586508284660285450"],
    channelRequirement: [],
    execute: async function(message,arg){
        
        if(!arg[1]) return 1
        
        const result = await showProblem(Number(arg[1]))
        message.channel.send({content: result,components: [new MessageActionRow().addComponents(
            new MessageButton().setLabel("Refresh").setStyle("PRIMARY").setCustomId(`postproblems-${arg[1]}`)
        )]})

        return 0
    }
}