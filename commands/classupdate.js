const { ClassRole } = require("../constants/roles.constant")

module.exports = {
    name: "classupdate",
    alias : ["cu"],
    clearCommand: false,
    roleRequirement: [],
    channelRequirement: [],
    execute: async function(message,arg){
        const { memberCount } = message.guild
        const members = await message.guild.members.list({limit: memberCount})

        const roleIds = Object.values(ClassRole)
        let nextClassTable = {}

        for(let i=0;i<roleIds.length-1;i++){
            nextClassTable[roleIds[i]] = roleIds[i+1]
        }
        console.log(nextClassTable)

        let nextClass,totalUpdate = 0;
        await members.forEach(async (member) => {
            // console.log('USERNAME',member.user.username)
            for(var role in nextClassTable){
                // console.log("Loop")
                if (member._roles.includes(role)){
                    // console.log("Found")
                    nextClass = nextClassTable[role]
                    member.roles.remove(member.guild.roles.cache.get(role))
                    member.roles.add(member.guild.roles.cache.get(nextClass))
                    totalUpdate++
                    // console.log(`${member.user.username} from ${role} => ${nextClass}`)
                }
            }
        })

        message.channel.send(`Successfully update ${totalUpdate} accounts.`)
        return 0
    }
}