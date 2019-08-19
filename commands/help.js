const Discord = require("discord.js");

module.exports.run = async (blaki, message, args) => {
    
    let HOST = message.guild.roles.find("name", "Host Customy");
    message.delete().catch(O_o=>{});
    if(!message.member.roles.has(HOST.id)) return message.reply("Ooops, nie posiadasz uprawnień!");
    
    let TrioEmbed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .addField("__**KOMENDY:**__", "-solo" + `\n` + "-duo" + `\n` + "-trio" + `\n` + "-msg, -msgr, -msgb, -msgo")
    .setTimestamp(message.createdAt)
    .setFooter("Dostępne Komendy", "https://i.imgur.com/3Q7TQyy.png");

    message.channel.send(TrioEmbed);
}

module.exports.help = {
  name:"trio"
}
