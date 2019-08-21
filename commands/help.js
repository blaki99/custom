const Discord = require("discord.js");

module.exports.run = async (custom, message, args) => {
    
    message.delete().catch(O_o=>{});

    let HelpEmbed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .addField("__**KOMENDY:**__", `>>> solo` + `\n` + `duo` + `\n` + `trio` + `\n` + `msg`)
    .setTimestamp(message.createdAt)
    .setFooter("Dostępne Komendy", message.custom.avatarURL);
    message.channel.send(HelpEmbed);
}

module.exports.help = {
  name:"help"
}
