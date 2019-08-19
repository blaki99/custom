const Discord = require("discord.js");

module.exports.run = async (blaki, message, args) => {

    let host = message.guild.roles.find("name", "🔌 » HOST");

    let msg = (args[0]);
    let msg2 = args.slice(1).join(' ')
    const ramka = "```diff"
    const ramka2 = "```"
    const check = '601185797097652224'

    if(!message.member.roles.has(host.id)) return message.reply("Ooops, nie posiadasz uprawnień!");
    if(!args[0]) return message.channel.send("❌ _Wprowadź prawidłowe wartości, **!msgr <wiadomość>**_ ❌")
    message.delete();
    let msgEmbed = new Discord.RichEmbed()
    .setColor("#fc0300")
    .addField("__**INFORMACJA:**__", `${ramka}
- ${msg} ${msg2}${ramka2}`)
    .addField("__**OD:**__", `${message.author}`)
    .setTimestamp(message.createdAt)
    .setFooter("Bot stworzony przez BlaKi", "https://i.imgur.com/3Q7TQyy.png");
    message.channel.send(msgEmbed)
}

module.exports.help = {
    name: "msgr"
}
