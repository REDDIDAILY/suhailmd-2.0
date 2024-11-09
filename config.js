const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349049959702";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_54_11_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTA3LFxuICAgICAgICA5NixcbiAgICAgICAgMjE5LFxuICAgICAgICA5OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAzNSxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDU2LFxuICAgICAgICA0MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA0MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzLFxuICAgICAgICA2OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDg3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzAsXG4gICAgICAgIDgyLFxuICAgICAgICA1NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDksXG4gICAgICAgIDczLFxuICAgICAgICAzOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQwLFxuICAgICAgICA4OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDk0LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NixcbiAgICAgICAgMjE0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTksXG4gICAgICAgIDExLFxuICAgICAgICAxMzEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIyLFxuICAgICAgICA3MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJISFBvSUFuN0FiTk9Gd2hBSDQwR3FWTFRWRkhQc1k2RHM3L01pRTBJbWFrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOckc0UDlOOFFnYUJvTzdFRG5yaS1RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA0ODdjOWVkLTBhOTEtNGNiNS1iNDlhLTJmZDIxZmM1OGU0ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjIsXG4gICAgICAxNyxcbiAgICAgIDE2NCxcbiAgICAgIDIsXG4gICAgICAxMjksXG4gICAgICAxOCxcbiAgICAgIDY3LFxuICAgICAgNzgsXG4gICAgICAyNDIsXG4gICAgICAxNzIsXG4gICAgICAxNDIsXG4gICAgICAzNCxcbiAgICAgIDc2LFxuICAgICAgMTQyLFxuICAgICAgMTk4LFxuICAgICAgMjI4LFxuICAgICAgMTY1LFxuICAgICAgMTA1LFxuICAgICAgNzUsXG4gICAgICAxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDIsXG4gICAgICAxMzgsXG4gICAgICAxODIsXG4gICAgICAyMTcsXG4gICAgICAxMTIsXG4gICAgICAxNTEsXG4gICAgICAyMzcsXG4gICAgICAxMjMsXG4gICAgICAxOTAsXG4gICAgICAxMDgsXG4gICAgICAxMixcbiAgICAgIDE0MyxcbiAgICAgIDIzNCxcbiAgICAgIDk5LFxuICAgICAgMjUzLFxuICAgICAgMTQ4LFxuICAgICAgMTQ0LFxuICAgICAgNjYsXG4gICAgICAyNDgsXG4gICAgICAxMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM0IyUUMyV1FcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNDk5NTk3MDI6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5NTI0NTM3MTMxODQ4NToxNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOZi9pdDBDRUlydnZia0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkVLQk82dCsxMWFtaUltVDdhSWxxTzhLcExWemkrdnkwZElXazZOMmRzU3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT21vUmYwdk40dnFZS1pESUFpaU5qcG1qNzJUOEVWZjBXTEZmYTM2UGRucS9vYURRbFpTZ1lMeGtLMkFyaUs1OHBtU1VRTkZBQkNiZDRWWG9nMVJCQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZEpsZ215RC9iMTFVcGE4MjJwc0lhaEZ1NUg3YzU2VE9uSmJGVURtZmk3ZW0waUhNbHQxNytHTkc5N2pzVFJMYnlpQjVYYmNhYmJhUUJaYVcyRFIzZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA0OTk1OTcwMjoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMTY0MDQ4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQnlPXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCeU8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1SlJoNklET2xxamRweG1QKzVHNzZhR0poWGlCN0UrN2xtUnpGK0pmZndJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjczMjA4NjIyOSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
