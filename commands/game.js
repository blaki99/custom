const Discord = require("discord.js");
const config = require("../blakiconfig.json");

module.exports.run = async (blaki, message, args) => {
 
    let HOST = message.guild.roles.find("name", "HOST 💜");
 
    let pass = (args[0]);
    let mode = args.slice(1).join(' ')
    let everyone = message.guild.defaultRole;
    const zasady0 = "> **» NIE** UŻYWAJ ROBOTÓW PODCZAS GRY !"
    const zasady1 = "> **» NIE** UDOSTĘPNIAJ NIKOMU HASŁA DO GRY !"
    const zasady2 = "> **» NIE** STREAMSNIPUJ INNYCH GRACZY !"
    const zasady3 = "> **» NIE** UŻYWAJ TRYBU ANONIMOWEGO PODCZAS GRY !"
    const zasady4 = "> **» NIE** BIJEMY SIĘ NA PIERWSZYCH MIEJSCÓWKACH !"
    const zasady5 = "> **» NIE** WALCZ DOPÓKI NIE ZAMKNIE SIĘ 2 STREFA!"
    const zasady6 = "**NIESTOSOWANIE SIĘ DO POWYŻSZYCH ZASAD BĘDZIE KARANE !**"
    const react = '✅'
    const ramka3 = "``"
  
    if(!message.member.roles.has(HOST.id)) return message.reply(`Ooops, musisz posiadać role ${ramka3}HOST${ramka3}!`);
    if(!args[0]) return message.channel.send("❌ _Wprowadź prawidłowe wartości, **//game <hasło> <tryb gry>**_ ❌").then(() =>
    {
        message.channel.send("❌ _**Utwórz hasło, które nie będzie za krótkie!**_ ❌");
    })
    message.delete();
    let customEmbed = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setThumbnail('https://i.imgur.com/rmxBcdK.png')
    .setTitle(`**${mode} CUSTOM**`)
    .setURL('https://discord.gg/u9W8euF')
    .addField("**HASŁO:**", `**${pass}**`, true)
    .addField("**HOST:**", `${message.author}`, true)
    .addField("**ZASADY:**", zasady0 + `\n` +zasady1 + `\n`+ zasady2 + `\n`+ zasady3 + `\n`+ zasady4 + `\n`+ zasady5 + `\n`+ `\n`+ zasady6)
    .setTimestamp(message.createdAt)
    .setFooter("Kliknij reakcje jeśli grasz", `${config.avatar}`);
    message.channel.send('<@&612971761318887444>');
    message.channel.send(customEmbed).then(function (message) {
        message.react(react)
    })
}
 
module.exports.help = {
    name: "game"
}
