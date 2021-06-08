var fs = require('fs');
var Nightmare = require('nightmare');

fs.readFile("details.json", "utf8", function(err, data){
    if (err){
        return console.log(err);
    }

    var details = JSON.parse(data);
    console.log("Flooding...");

    for(var i=1; i<=details.details.amount; i++){
        console.log(i);
        new Nightmare()
        .useragent('Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36')
        .goto('https://meet.google.com/')
        .click('a[event-action="sign in"]')
        .type('input[type="email"]', details.details.email)
        .click('div[class="VfPpkd-RLmnJb"')
        .wait(1500)
        .type('input[type="password"', details.details.password)
        .click('div[class="VfPpkd-RLmnJb"')
        .wait(2000)
        .goto(details.details.link)
        //.wait(3000)
        .click('div[class="uArJ5e UQuaGc Y5sE8d uyXBBb xKiqt"]')
        .then();
    }
    console.log('Done! (It takes a while to add all the bots into the meeting)')
    console.log('Close this window to remove all the bots');
});

function onExit(){
    console.log('Exiting and cleaning up...');
    process.exit(0);
};

process.on('exit', onExit.bind());
process.on('SIGUSR1', onExit.bind());
process.on('SIGUSR2', onExit.bind());
process.on('uncaughtException', onExit.bind());