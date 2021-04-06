//not required
//const Discord = require('discord.js');

module.exports = {
    name: "rng",
    description: "Generates a random number.",
    execute(message, args) {

        let max = parseInt(args[1]);

        //let check = Number.isInteger(max);
        //
        //if(check === false){
        //    message.channel.send("Please specify a valid number!");
        //    return;
        //};
        
        if(Number.isInteger(max)){
            message.channel.send("Please specify a valid number!");
            return;
        };

        if(max > 1000000){
            message.channel.send("Please specify a number smaller than 1000000!");
            return;
        }

        //i cannot understand why this was done this way
        //let choices = Array.from(Array(max).keys());
        //let response = choices[Math.floor(Math.random() * choices.length)];
        
        //let response = Math.ceil(Math.random() * --max);

        //if(response == "0"){
        //    message.channel.send("1");
        //    return;
        //};

        //message.channel.send(response);

        message.channel.send(Math.ceil(Math.random() * --max));
    }
}
