const { Client, Intents } = require('discord.js');
const { MessageEmbed } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING],
	partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"]
});

client.on('ready', () => 
	client.user.setPresence({ activities: [{ name: "Git Gud", type: "PLAYING" }], status: "online" })
});

client.on('guildMemberAdd', member => {
	var setnick = 'Helot1';
        const welcomeEmbed = new MessageEmbed();
        welcomeEmbed.setColor('#EB6305');
        welcomeEmbed.setDescription("<@" + member.user + "> has joined the server of Lacedaemon.");
        member.guild.channels.cache.find(i => i.name === 'formal').send({ embeds: [welcomeEmbed] });
        for (var x = 1; x<101; x++) {
		if (memberlist.includes(',' + 'Helot' + x + ',')) {
		}
		else {
			var setnick = 'Helot' + x;
			var x = 101;
		}
	}
	member.setNickname(setnick);
	member.roles.add(member.guild.roles.cache.find(role => role.name === "Helot"));
});

client.on('guildMemberRemove', member => {
        const leaveEmbed = new MessageEmbed();
        leaveEmbed.setColor('#EB6305');
        leaveEmbed.setDescription(member.user.tag + " has left the server.");
        member.guild.channels.cache.find(i => i.name === 'formal').send({ embeds: [leaveEmbed] });
});

client.on('messageCreate', (message) => {
        
        const msg = message.content.toLowerCase();
	
        const args = message.content.trim().split(/ +/g);
        const command = args.shift().toLowerCase();
	
	if (msg.toString().indexOf("cheese")!=-1) {
		message.channel.send({files: ["https://c.tenor.com/hN89U2X0PC4AAAAC/cheese-wallace-and-gromit.gif"]});
        }
	
	if (msg.toString().indexOf("seven")!=-1) {
		message.channel.send({files: ["https://c.tenor.com/867r5xBn3ogAAAAC/monica-friends.gif"]});
        }
	
	if (msg.toString().indexOf("scribe is gay")!=-1) {
		message.channel.send({files: ["https://c.tenor.com/bCn4WFSUrtUAAAAC/no-you-working.gif"]});
        }
	
	if (msg.toString().indexOf("who is scribe")!=-1) {
		message.channel.send({files: ["https://c.tenor.com/-BVQhBulOmAAAAAC/bruce-almighty-morgan-freeman.gif"]});
        }
	
	if (msg.toString().indexOf("tree")!=-1) {
		message.channel.send({files: ["https://c.tenor.com/q2mE8ylO3FAAAAAS/jean-baptiste-show-ibonek.gif"]});
        }
	
	if (msg.toString().indexOf("bomb")!=-1) {
		message.channel.send({files: ["https://c.tenor.com/u8jwYAiT_DgAAAAC/boom-bomb.gif"]});
        }
	
	if (msg.toString().indexOf("chicken")!=-1) {
		message.channel.send({files: ["https://c.tenor.com/lNJB-9zZ9roAAAAS/chicken-shoes.gif"]});
        }
	
        const argus = message.content.trim().split(',');
        const commando = argus.shift().toLowerCase();
        
        if (commando === "a^r") {
	    if (message.channel.type != 'DM') {
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
					    message.channel.send(`${nickmember} has received the role of ${titlerole}.`);
				    } 
				    else {
					    message.channel.send(`${title} is not a valid role in this server.`);
				    }
			    }
			    else {
				    message.channel.send(`${nick} is not a valid nickname of a user in this server.`);
			    }
		    }
		    else {
			    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
		    }
	    }
		else {
			message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
		}
	}
        
        if (commando === "r^r") {
		if (message.channel.type != 'DM') {
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
						message.channel.send(`${nickmember} no longer has the role of ${titlerole}.`);
					}
					else {
						message.channel.send(`${title} is not a valid role in this server.`);
					}
				}
				else {
					message.channel.send(`${nick} is not a valid nickname of a user in this server.`);
				}
			} 
			else {
				message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
			}
		}
		else {
			message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
		}
	}
        
        if (commando === "c^n") {
		if (message.channel.type != 'DM') {
			let nick = argus[0];
			let newnick = argus[1];
			let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
			let memberlist = ',' + message.guild.members.cache.map(m=>m.displayName).join(',') + ',';
			let chan = message.channel.name;
			if (chan == 'audit-log') {
				if (memberlist.includes(',' + nick + ',')) {
					nickmember.setNickname(newnick);
					message.channel.send(`${nickmember} now has the nickname of ${newnick}.`);
				}
				else {
					message.channel.send(`${nick} is not a valid nickname of a user in this server.`);
				}
			}
			else {
				message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
			}
		} 
		else {
			message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
		}
	}
        
        if (commando === "c^c") {
		if (message.channel.type != 'DM') {
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
				} 
				else {
					message.channel.send(`${channelname} is not a valid channel in this server.`);
				}
			} 
			else {
				message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
			}
		} 
		else {
			message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
		}
	}
        
        if (commando === "k^k") {
		if (message.channel.type != 'DM') {
			let nick = argus[0];
			let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
			let memberlist = ',' + message.guild.members.cache.map(m=>m.displayName).join(',') + ',';
			let chan = message.channel.name;
			if (chan == 'audit-log') {
				if (memberlist.includes(',' + nick + ',')) {
					message.guild.channels.cache.find(i => i.name === 'formal').send(`${nick} has been kicked from the server.`);
					nickmember.kick();
					message.channel.send(`${nick} has been kicked.`);
				} 
				else {
					message.channel.send(`${nick} is not a valid nickname of a user in this server. Message of departure has been sent.`);
					message.guild.channels.cache.find(i => i.name === 'formal').send(`${nick} has left the server and has been purged from my database.`);
				}
			} 
			else {
				message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
			}
		} 
		else {
			message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
		}
	}
        
        if (commando === "d^c") {
		if (message.channel.type != 'DM') {
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
				} 
				else {
					message.channel.send(`${channelname} is not a valid channel in this server.`);
				}
			} 
			else {
				message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
			}
		} 
		else {
			message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
		}
	}
        
        const arguss = message.content.trim().split('^');
        const commandos = arguss.shift().toLowerCase();
        
        if (commandos === "d$m") {
		if (message.channel.type != 'DM') {
			let nick = arguss[0];
			let dm = arguss[1];
			let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
			let memberlist = '^' + message.guild.members.cache.map(m=>m.displayName).join('^') + '^';
			let chan = message.channel.name;
			if (chan == 'audit-log') {
				if (memberlist.includes('^' + nick + '^')) {
					message.channel.send(`DM has been sent to ${nickmember}.`);
					nickmember.send(dm);
				} 
				else {
					message.channel.send(`${nick} is not a valid nickname of a user in this server.`);
				}
			} 
			else {
				message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
			}
		} 
		else {
			message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
		}
	}
        
        if (commandos === "s$m$") {
		if (message.channel.type != 'DM') {
			let b = arguss[0];
			let channelname = arguss[1];
			let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
            
			let chan = message.channel.name;
			if (chan == 'audit-log') {
				if (chanlist.includes('^' + channelname + '^')) {
					message.guild.channels.cache.find(i => i.name === channelname).send(`${b}`);
					message.channel.send(`Custom message has been sent.`);
				} 
				else {
					message.channel.send(`${channelname} is not a valid channel in this server.`);
				}
			} 
			else {
				message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
			}
		} 
		else {
			message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
		}
	}
        
	if (commandos === "s$e$") {
		if (message.channel.type != 'DM') {
			let title = arguss[0];
			let description = arguss[1];
			let author = arguss[2];
			let authorpic = arguss[3];
			let image = arguss[4];
			let footer = arguss[5];
			let channelname = arguss[6]
			
			const exampleEmbed = new MessageEmbed()
			.setColor('#EB6305')
			.setTitle(title)
			//.setURL('https://discord.js.org/')
			.setAuthor(author, authorpic, authorpic)
			.setDescription(description)
			//.setThumbnail('https://cdn.discordapp.com/icons/391183651649486848/a_a2fc07c28a76c4aae91d4fa38ff567c8.png?size=512')
			//.addFields(
			//        { name: 'Regular field title', value: 'Some value here' },
			//        { name: '\u200B', value: '\u200B' },
			//        { name: 'Inline field title', value: 'Some value here', inline: true },
			//        { name: 'Inline field title', value: 'Some value here', inline: true },
			//)
			//.addField('Inline field title', 'Some value here', true)
			.setImage(image)
			.setTimestamp()
			.setFooter(footer, '');
			let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
			let chan = message.channel.name;
			if (chan == 'audit-log') {
				if (chanlist.includes('^' + channelname + '^')) {
					message.guild.channels.cache.find(i => i.name === channelname).send({ embeds: [exampleEmbed] });
					message.channel.send(`Custom embed has been sent.`);
				} 
				else {
					message.channel.send(`${channelname} is not a valid channel in this server.`);
				}
			} 
			else {
				message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
			}
		} 
		else {
			message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
		}
	}
		
	if (commandos === "e$e$") {
		if (message.channel.type != 'DM') {
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
					const exampleEmbed = new MessageEmbed()
					.setColor('#EB6305')
					.setTitle(ntitle)
					//.setURL('https://discord.js.org/')
					.setAuthor(nauthor, nauthorpic, nauthorpic)
					.setDescription(ndescription)
					//.setThumbnail('https://cdn.discordapp.com/icons/391183651649486848/a_a2fc07c28a76c4aae91d4fa38ff567c8.png?size=512')
					//.addFields(
					//        { name: 'Regular field title', value: 'Some value here' },
					//        { name: '\u200B', value: '\u200B' },
					//        { name: 'Inline field title', value: 'Some value here', inline: true },
					//        { name: 'Inline field title', value: 'Some value here', inline: true },
					//)
					//.addField('Inline field title', 'Some value here', true)
					.setImage(nimage)
					.setTimestamp()
					.setFooter(nfooter, '');
					channelid.messages.fetch({limit: 99}).then(msg => {
						const aospecMessage = msg.filter(msg => msg.embeds[0]);
						const ospecMessage = aospecMessage.filter(msg => msg.embeds[0].description.includes(odescription));
						const specMessage = ospecMessage.filter(msg => msg.embeds[0].title.includes(otitle)).map(m=>m.id).join('\n');
						async function edit() {
							const message = await channelid.messages.fetch(specMessage);
							await message.edit({ embeds: [exampleEmbed] });
						}
						edit();
					});
					message.channel.send(`Embed has been edited.`);
				} 
				else {
					message.channel.send(`${channelname} is not a valid channel in this server.`);
				}
			} 
			else {
				message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
			}
		} 
		else {
			message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
		}
	}
		
	if (commandos === "d$e$") {
		if (message.channel.type != 'DM') {
			let otitle = arguss[0];
			let odescription = arguss[1];
			let channelname = arguss[2];
			let channelid = message.guild.channels.cache.find(i => i.name === channelname);
			let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^
			
			let chan = message.channel.name;
			if (chan == 'audit-log') {
				if (chanlist.includes('^' + channelname + '^')) {
					channelid.messages.fetch({limit: 99}).then(msg => {
						const aospecMessage = msg.filter(msg => msg.embeds[0]);
						const ospecMessage = aospecMessage.filter(msg => msg.embeds[0].description.includes(odescription));
						const specMessage = ospecMessage.filter(msg => msg.embeds[0].title.includes(otitle)).map(m=>m.id).join('\n');
						async function del() {
							const message = await channelid.messages.fetch(specMessage);
							await message.delete();
						}
						del();
					});
					message.channel.send(`Embed has been deleted.`);
				} 
				else {
					message.channel.send(`${channelname} is not a valid channel in this server.`);
				}
			} 
			else {
				message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
			}
		} 
		else {
			message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
		}
	}
	
	if (commandos === "d$m$") {
		if (message.channel.type != 'DM') {
			let b = arguss[0];
			let channelname = arguss[1];
			let channelid = message.guild.channels.cache.find(i => i.name === channelname);
			let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^'
			
			let chan = message.channel.name;
			if (chan == 'audit-log') {
				if (chanlist.includes('^' + channelname + '^')) {
					channelid.messages.fetch({limit: 99}).then(msg => {
						const specMessage = msg.filter(msg => msg.content.includes(b));
						channelid.bulkDelete(specMessage);
					});
					message.channel.send(`Message has been deleted.`);
				} 
				else {
					message.channel.send(`${channelname} is not a valid channel in this server.`);
				}
			} 
			else {
				message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
			}
		} 
		else {
			message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
		}
	}
        
	if (commandos === "e$m$") {
		if (message.channel.type != 'DM') {
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
				} 
				else {
					message.channel.send(`${channelname} is not a valid channel in this server.`);
				}
			} 
			else {
				message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
			}
		} 
		else {
			message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
		}
	}

	if (commandos === "dm$e$") {
		if (message.channel.type != 'DM') {
			let nick = arguss[0];
			let title = arguss[1];
			let description = arguss[2];
			let author = arguss[3];
			let authorpic = arguss[4];
			let image = arguss[5];
			let footer = arguss[6];
			let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
			let memberlist = '^' + message.guild.members.cache.map(m=>m.displayName).join('^') + '^';
			let chan = message.channel.name;
			if (chan == 'audit-log') {
				const exampleEmbed = new MessageEmbed()
				.setColor('#EB6305')
				.setTitle(title)
				//.setURL('https://discord.js.org/')
				.setAuthor(author, authorpic, authorpic)
				.setDescription(description)
				//.setThumbnail('https://cdn.discordapp.com/icons/391183651649486848/a_a2fc07c28a76c4aae91d4fa38ff567c8.png?size=512')
				//.addFields(
				//        { name: 'Regular field title', value: 'Some value here' },
				//        { name: '\u200B', value: '\u200B' },
				//        { name: 'Inline field title', value: 'Some value here', inline: true },
				//        { name: 'Inline field title', value: 'Some value here', inline: true },
				//)
				//.addField('Inline field title', 'Some value here', true)
				.setImage(image)
				.setTimestamp()
				.setFooter(footer, '');
				if (memberlist.includes('^' + nick + '^')) {
					message.channel.send(`Embed DM has been sent to ${nickmember}.`);
					nickmember.send({ embeds: [exampleEmbed] });
				} 
				else {
					message.channel.send(`${nick} is not a valid nickname of a user in this server.`);
				}
			} 
			else {
				message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
			}
		} 
		else {
			message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
		}
	}
	

});

client.login(process.env.BOT_TOKEN);

//All credit to Nuqrs
