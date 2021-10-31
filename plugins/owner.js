const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const OWNER = "it sends details of owner"

const GIT = "it sends links"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*owner SALMAN - http://Wa.me/+919072814956 *\n* *\n🔰instagram:- https://instagram.com/srfx.mp4,https://instagram.com/salman_r.4*\n    *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: SALMAN *"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═Owner SALMAN═💥*\n\n*💘 https://github.com/salman1ramos/v4*\n*     *\n follow on Instagram- https://instagram.com/srfx.mp4,https://instagram.com/salman_r.4 *"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

    

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*owner SALMAN - http://Wa.me/+919072814956 *\n* *\n🔰instagram:- https://instagram.com/srfx.mp4,https://instagram.com/salman_r.4*\n    *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: SALMAN*" 
    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═Owner Althaf Rahman═💥*\n\n*💘 https://github.com/althaf404/v4*\n*     *\n follow on Instagram- https://www.instagram.com/althaf404_*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

