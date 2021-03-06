const giphy = require('giphy-api')(process.env.GIPHY_API);

module.exports.run = async (client, message) => {
    giphy.random({
        tag: 'dog',
        rating: 'g',
        limit: '1'
    }, function (err, res) { 
        message.channel.send(`**${message.author.tag}** ${res.data.embed_url}`)
    });
}

module.exports.conf = {
    enabled: true,
    aliases: ['puppy']
}

module.exports.help = {
    name: "dog"
}