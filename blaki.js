const CustomConfig = require("./blakiprefix.json");
const Fortnite = require("fortnite-publicapi");
const Discord = require('discord.js');
const custom = new Discord.Client({disableEveryone: false});
require('dotenv-flow').config();

const fs = require("fs");
custom.commands = new Discord.Collection();

const config = {
    token: process.env.TOKEN
};

const aktywnosc = [
    "SCRIMS BOT 💛", 
    "CREATED BY BLAKI 🍁", 
    "PREFIX (-) HELP 💚",
    "CREATED BY BLAKI 💙",
    "CREATED BY BLAKI 🖤"
];

let date = require('date-and-time');

custom.on('ready', async () => 
{
  console.log(`${custom.user.username} jest online!`);
  setInterval(function() {
        var actID = Math.floor(Math.random() * Math.floor(aktywnosc.length));
        custom.user.setActivity(aktywnosc[actID]);
    }, 10000);
    const guild = custom.guilds.get('436177140942241792');
  setInterval(function() 
  {
    let now = new Date();
    const DateChannel = custom.channels.get("625001308033777694");
    const HumansChannel = custom.channels.get("624275581919559710");
    const OnlineChannel = custom.channels.get("624275633412898836");
    var HumansCount = guild.memberCount;
    var OnlineCount = guild.members.filter(member => member.presence.status == 'online' || member.presence.status == 'idle' || member.presence.status == 'dnd').size
    DateChannel.setName("📅 " + date.format(now, 'DD.MM.YYYY'));
    OnlineChannel.setName("💚 Aktywni: " + OnlineCount);
    HumansChannel.setName("🦉 Jest Nas: " + HumansCount);
  }, 20000)
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
    custom.commands.set(props.help.name, props);
  });

});

custom.on("message", async message => {
    
    if(message.author.custom) return;
    if(message.channel.type === "dm") return;
    
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: CustomConfig.prefix
      };
    }

    let prefix = prefixes[message.guild.id].prefixes;
    if(!message.content.startsWith(prefix)) return;

    //let prefix = CustomConfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    let commandfile = custom.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(custom,message,args);
});

custom.login(config.token);
