const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
bot.user.setPresence({ activity: { name: "Git Gud", type: "PLAYING" }, status: "online" })
});
/*
bot.on('guildMemberAdd', member => {
        
        const welcomeEmbed = new Discord.MessageEmbed()
        welcomeEmbed.setColor('RANDOM')
        welcomeEmbed.setDescription("<@" + member.user + "> has joined the server of Lacedaemon.")
        member.guild.channels.cache.find(i => i.name === 'formal').send(welcomeEmbed)
        
});

bot.on('guildMemberRemove', member => {
        
        const leaveEmbed = new Discord.MessageEmbed()
        leaveEmbed.setColor('RANDOM')
        leaveEmbed.setDescription(member.user.tag + " has left the server.")
        member.guild.channels.cache.find(i => i.name === 'formal').send(leaveEmbed)
});
*/
bot.on('message', (message) => {
        
        const msg = message.content.toLowerCase();
	
        const args = message.content.trim().split(/ +/g);
        const command = args.shift().toLowerCase();
	
        const argus = message.content.trim().split(',');
        const commando = argus.shift().toLowerCase();
        
        if (commando === "a^r") {
	    if (message.channel.type != 'dm') {
            let nick = argus[0];
            let title = argus[1];
            let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
            let titlerole = message.guild.roles.cache.find(i => i.name === title);
	    let memberlist = ',' + message.guild.members.cache.map(m=>m.displayName).join(',') + ',';
	    let rolelist = ',' + message.guild.roles.cache.map(m=>m.name).join(',') + ',';
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (memberlist.includes(',' + nick + ',')) {
	    if (rolelist.includes(',' + title + ',')) {
	    nickmember.roles.add(titlerole);
            message.channel.send(`${nickmember} has received the title of ${titlerole}.`);
	    } else {
	    message.channel.send(`${title} is not a valid role in this server.`);
	    }
	    } else {
	    message.channel.send(`${nick} is not a valid nickname of a user in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        if (commando === "r^r") {
	    if (message.channel.type != 'dm') {
            let nick = argus[0];
            let title = argus[1];
            let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
            let titlerole = message.guild.roles.cache.find(i => i.name === title);
	    let memberlist = ',' + message.guild.members.cache.map(m=>m.displayName).join(',') + ',';
	    let rolelist = ',' + message.guild.roles.cache.map(m=>m.name).join(',') + ',';
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (memberlist.includes(',' + nick + ',')) {
	    if (rolelist.includes(',' + title + ',')) {
	    nickmember.roles.remove(titlerole);
            message.channel.send(`${nickmember} no longer has the title of ${titlerole}.`);
	    } else {
	    message.channel.send(`${title} is not a valid role in this server.`);
	    }
	    } else {
	    message.channel.send(`${nick} is not a valid nickname of a user in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        if (commando === "c^n") {
	    if (message.channel.type != 'dm') {
            let nick = argus[0];
            let newnick = argus[1];
	    let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
	    let memberlist = ',' + message.guild.members.cache.map(m=>m.displayName).join(',') + ',';
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (memberlist.includes(',' + nick + ',')) {
	    nickmember.setNickname(newnick);
	    message.channel.send(`${nickmember} now has the nickname of ${newnick}.`);
	    } else {
	    message.channel.send(`${nick} is not a valid nickname of a user in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        if (commando === "c^c") {
	    if (message.channel.type != 'dm') {
            let channelname = argus[0];
            let channelid = message.guild.channels.cache.find(i => i.name === channelname);
	    let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (chanlist.includes('^' + channelname + '^')) {
	    async function clear() {
                    const fetched = await channelid.messages.fetch({limit: 99});
                    channelid.bulkDelete(fetched);
            }
            clear();
            message.channel.send(`Messages in ${channelid} have been cleared.`);
	    } else {
	    message.channel.send(`${channelname} is not a valid channel in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        if (commando === "k^k") {
	    if (message.channel.type != 'dm') {
            let nick = argus[0];
            let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
	    let memberlist = ',' + message.guild.members.cache.map(m=>m.displayName).join(',') + ',';
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (memberlist.includes(',' + nick + ',')) {
	    message.guild.channels.cache.find(i => i.name === 'formal').send(`${nick} has been kicked from the server.`);
            nickmember.kick();
            message.channel.send(`${nick} has been kicked.`);
	    } else {
	    message.channel.send(`${nick} is not a valid nickname of a user in this server. Message of departure has been sent.`);
	    message.guild.channels.cache.find(i => i.name === 'formal').send(`${nick} has left the server and has been purged from my database.\nBE GONE!`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        if (commando === "d^c") {
	    if (message.channel.type != 'dm') {
            let channelname = argus[0];
            let num = argus[1];
            let channelid = message.guild.channels.cache.find(i => i.name === channelname);
	    let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (chanlist.includes('^' + channelname + '^')) {
	    async function clear() {
                    const fetched = await channelid.messages.fetch({limit: num});
                    channelid.bulkDelete(fetched);
            }
            clear();
            message.channel.send(`The last ${num} messages in ${channelid} have been cleared.`);
	    } else {
	    message.channel.send(`${channelname} is not a valid channel in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        const arguss = message.content.trim().split('^');
        const commandos = arguss.shift().toLowerCase();
        
        if (commandos === "d$m") {
	    if (message.channel.type != 'dm') {
            let nick = arguss[0];
            let dm = arguss[1];
            let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
	    let memberlist = '^' + message.guild.members.cache.map(m=>m.displayName).join('^') + '^';
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (memberlist.includes('^' + nick + '^')) {
	    message.channel.send(`DM has been sent to ${nickmember}.`);
            nickmember.send(dm);
	    } else {
	    message.channel.send(`${nick} is not a valid nickname of a user in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        if (commandos === "s$m$") {
	    if (message.channel.type != 'dm') {
            let b = arguss[0];
            let channelname = arguss[1];
	    let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
            
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (chanlist.includes('^' + channelname + '^')) {
	    message.guild.channels.cache.find(i => i.name === channelname).send(`${b}`);
            message.channel.send(`Custom message has been sent.`);
	    } else {
	    message.channel.send(`${channelname} is not a valid channel in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        if (commandos === "s$e$") {
	    if (message.channel.type != 'dm') {
            let title = arguss[0];
            let description = arguss[1];
            let author = arguss[2];
	    let authorpic = arguss[3];
	    let image = arguss[4];
            let footer = arguss[5];
            let channelname = arguss[6];
            
            const exampleEmbed = new Discord.MessageEmbed()
	        .setColor('RANDOM')
	        .setTitle(title)
	        //.setURL('https://discord.js.org/')
	        .setAuthor(author, authorpic, authorpic)
	        .setDescription(description)
	        .setThumbnail('https://cdn.discordapp.com/icons/391183651649486848/a_a2fc07c28a76c4aae91d4fa38ff567c8.png?size=512')
	        //.addFields(
		//        { name: 'Regular field title', value: 'Some value here' },
		//        { name: '\u200B', value: '\u200B' },
		//        { name: 'Inline field title', value: 'Some value here', inline: true },
		//        { name: 'Inline field title', value: 'Some value here', inline: true },
	        //)
	        //.addField('Inline field title', 'Some value here', true)
	        .setImage(image)
	        .setTimestamp()
	        .setFooter(footer, 'https://cdn.discordapp.com/emojis/417837304036589568.png?v=1');
	    let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (chanlist.includes('^' + channelname + '^')) {
	    message.guild.channels.cache.find(i => i.name === channelname).send(exampleEmbed);
	    message.channel.send(`Custom embed has been sent.`);
	    } else {
	    message.channel.send(`${channelname} is not a valid channel in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
	if (commandos === "e$e$") {
	    if (message.channel.type != 'dm') {
            let otitle = arguss[0];
            let odescription = arguss[1];
	    let ntitle = arguss[2];
            let ndescription = arguss[3];
            let nauthor = arguss[4];
	    let nauthorpic = arguss[5];
	    let nimage = arguss[6];
            let nfooter = arguss[7];
            let channelname = arguss[8];
            let channelid = message.guild.channels.cache.find(i => i.name === channelname);
	    let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (chanlist.includes('^' + channelname + '^')) {
	    const exampleEmbed = new Discord.MessageEmbed()
	        .setColor('RANDOM')
	        .setTitle(ntitle)
	        //.setURL('https://discord.js.org/')
	        .setAuthor(nauthor, nauthorpic, nauthorpic)
	        .setDescription(ndescription)
	        .setThumbnail('https://cdn.discordapp.com/icons/391183651649486848/a_a2fc07c28a76c4aae91d4fa38ff567c8.png?size=512')
	        //.addFields(
		//        { name: 'Regular field title', value: 'Some value here' },
		//        { name: '\u200B', value: '\u200B' },
		//        { name: 'Inline field title', value: 'Some value here', inline: true },
		//        { name: 'Inline field title', value: 'Some value here', inline: true },
	        //)
	        //.addField('Inline field title', 'Some value here', true)
	        .setImage(nimage)
	        .setTimestamp()
	        .setFooter(nfooter, 'https://cdn.discordapp.com/emojis/417837304036589568.png?v=1');
	    channelid.messages.fetch({limit: 99}).then(msg => {
            const ospecMessage = msg.filter(msg => msg.embeds[0].description.includes(odescription));
	    const specMessage = ospecMessage.filter(msg => msg.embeds[0].title.includes(otitle)).map(m=>m.id).join('\n');
            async function edit() {
            const message = await channelid.messages.fetch(specMessage);
            await message.edit(exampleEmbed);
            }
            edit();
            });
            message.channel.send(`Embed has been edited.`);
	    } else {
	    message.channel.send(`${channelname} is not a valid channel in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
	
	if (commandos === "d$e$") {
	    if (message.channel.type != 'dm') {
            let otitle = arguss[0];
            let odescription = arguss[1];
            let channelname = arguss[2];
            let channelid = message.guild.channels.cache.find(i => i.name === channelname);
	    let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
            
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (chanlist.includes('^' + channelname + '^')) {
	    channelid.messages.fetch({limit: 99}).then(msg => {
	    const ospecMessage = msg.filter(msg => msg.embeds[0].description.includes(odescription));
	    const specMessage = ospecMessage.filter(msg => msg.embeds[0].title.includes(otitle)).map(m=>m.id).join('\n');
	    async function del() {
            const message = await channelid.messages.fetch(specMessage);
            await message.delete();
            }
            del();
            });
            message.channel.send(`Embed has been deleted.`);
	    } else {
	    message.channel.send(`${channelname} is not a valid channel in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
	
        if (commandos === "d$m$") {
	    if (message.channel.type != 'dm') {
            let b = arguss[0];
            let channelname = arguss[1];
            let channelid = message.guild.channels.cache.find(i => i.name === channelname);
	    let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
            
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (chanlist.includes('^' + channelname + '^')) {
	    channelid.messages.fetch({limit: 99}).then(msg => {
            const specMessage = msg.filter(msg => msg.content.includes(b));
            channelid.bulkDelete(specMessage);
            });
            message.channel.send(`Message has been deleted.`);
	    } else {
	    message.channel.send(`${channelname} is not a valid channel in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        if (commandos === "e$m$") {
	    if (message.channel.type != 'dm') {
            let b = arguss[0];
            let c = arguss[1];
            let channelname = arguss[2];
            let channelid = message.guild.channels.cache.find(i => i.name === channelname);
	    let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (chanlist.includes('^' + channelname + '^')) {
	    channelid.messages.fetch({limit: 99}).then(msg => {
            const specMessage = msg.filter(msg => msg.content.includes(b)).map(m=>m.id).join('\n');
            async function edit() {
            const message = await channelid.messages.fetch(specMessage);
            await message.edit(c);
            }
            edit();
            });
            message.channel.send(`Message has been edited.`);
	    } else {
	    message.channel.send(`${channelname} is not a valid channel in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }

});

bot.login(process.env.BOT_TOKEN);
