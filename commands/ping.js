module.exports = {
    name: "ping",
    alias : ["ping","p"],
    roleRequirement: [],
    channelRequirement: [],
    execute: function(message,arg){
        message.channel.send("Hello")
        return 0
    }
}