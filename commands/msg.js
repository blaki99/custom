const Discord = require("discord.js");
const config = require("../blakiconfig.json");

module.exports.run = async (custom, message, args) => {

    let host = message.guild.roles.get("572848425112961045");

    let msg = (args[0]);
    let msg2 = args.slice(1).join(' ')
    const ramka = "```"
    const ramka2 = "```"
    const ramka3 = "``"

    if(!message.member.roles.has(host.id)) return message.reply(`Ooops, musisz posiadać role ${ramka3}HOST${ramka3}!`);
    if(!args[0]) return message.channel.send("❌ _Wprowadź prawidłowe wartości, **//msg <wiadomość>**_ ❌")
    message.delete();
    let msgEmbed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .addField("__**INFORMACJA:**__", `${ramka}
${msg} ${msg2}${ramka2}`)
    .addField("__**OD:**__", `${message.author}`)
    .setTimestamp(message.createdAt)
    .setFooter("Nowa Informacja", `${config.avatar}`);
    message.channel.send(msgEmbed);
}

module.exports.help = {
    name: "msg"
}
