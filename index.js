const Discord = require('discord.js')
const bot = new Discord.Client()
const Google = require('./commands/google')
const Play = require('./commands/play')



bot.on('ready', function(){
    bot.user.setGame('.help pour la liste des commandes').catch(console.error)
})

bot.on('guildMemberAdd', function(member){
    member.createDM().then(function (channel){
        return channel.send('Bienvenue sur Honuty ! Passe un bon moment !')
    }).catch(console.error)
})

bot.on('message', function (message){
   let commandUsed = Google.parse(message) || Play.parse(message)
    
    //Commandes
    if (message.content === '.ping'){
        message.reply('Cette commande est en maintenance !')
    }
    if (message.content === '.site'){
        message.reply('https://www.honuty.fr (Le site est en maintenance !)')
    }
    if (message.content === 'HonutyBot'){
            message.channel.send('Vous m\'avez appelez ? ;)')
        }
    //|| 'Honutybot' || 'honutybot' || 'honutyBot' || 'Honuty Bot' || 'Honuty bot' || 'honuty Bot'
    //.help liste des commandes
    if (message.content === '.help'){
        message.channel.send('Liste des commandes :')
        message.channel.send('.site : Notre site internet (En maintenance)')
        message.channel.send('.ping : Savoir sa latence de connexion')
    }

})



bot.login(process.env.TOKEN)
