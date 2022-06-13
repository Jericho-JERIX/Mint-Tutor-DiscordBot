module.exports = {
    name: "ping",
    alias : ["ping","p"],
    roleRequirement: [],
    execute: function(message){
        message.channel.send("Hello")
    }
}