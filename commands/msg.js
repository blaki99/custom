const Discord = require("discord.js");

module.exports.run = async (custom, message, args) => {

    let host = message.guild.roles.find("name", "HOST");

    let msg = (args[0]);
    let msg2 = args.slice(1).join(' ')
    const ramka = "```"
    const ramka2 = "```"

    if(!message.member.roles.has(host.id)) return message.reply("Ooops, nie posiadasz uprawnień!");
    if(!args[0]) return message.channel.send("❌ _Wprowadź prawidłowe wartości, **!msg <wiadomość>**_ ❌")
    message.delete();
    let msgEmbed = new Discord.RichEmbed()
    .setColor("#6B7074")
    .addField("__**INFORMACJA:**__", `${ramka}
${msg} ${msg2}${ramka2}`)
    .addField("__**OD:**__", `${message.author}`)
    .setTimestamp(message.createdAt)
    .setFooter("Nowa Informacja", "https://i.imgur.com/VRM530o.jpg");
    message.channel.send(msgEmbed)
}

module.exports.help = {
    name: "msg"
}
