const blakiconfig = require("./blakiprefix.json");
const Fortnite = require("fortnite-publicapi");
const Discord = require('discord.js');
const blaki = new Discord.Client({disableEveryone: false});
require('dotenv-flow').config();

const fs = require("fs");
blaki.commands = new Discord.Collection();

const config = {
    token: process.env.TOKEN
};

let date = require('date-and-time');

blaki.on('ready', async () => 
{
  console.log(`${blaki.user.username} jest online!`);
  switch (blaki.user.setActivity) {
    case '1':
        ('CUSTOMY ❤', { type: 'PLAYING'});
        break;
    case '2':
        ('CUSTOMY 💙', { type: 'PLAYING'});
        break;
    case '3':
        ('CUSTOMY 💚', { type: 'PLAYING'})
        break;
    case '4':
        ('CUSTOMY 💖', { type: 'PLAYING'});
        break;
    }
});

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`Poprawnie załadowano ${f}!`);
    blaki.commands.set(props.help.name, props);
  });

});

blaki.on("message", async message => {
    
    if(message.author.blaki) return;
    if(message.channel.type === "dm") return;
  
    let prefix = blakiconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    let commandfile = blaki.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(blaki,message,args);
});

blaki.login(config.token);
