
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUlwSE1EbXk4NmdKYWJwbXgwckNoS1kxZ1RRUmxENEhXc1g4eDdOeERsWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0s2VWtPaFE2YlBOSS9NRE5ObWxUNVRTN04yWkd1d2QwcENhbzkvZWtXTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTk5XNjFQQUh3OFJmcVJRdVZ3OTBYN2VKdk8wV0JubXdzdDZ1OGxUZFZjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUaGpKa3RUZ3hNTDAxSWw2aHNDbEoxMFl0VzRlVkhBZTJPKzJMNnhjZ2hnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldGSDQzMUlnbnBBUGpnbkJ2RCt4RDlzNVF2S2h1T29kQ054NHNZMUprRjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVuWlVvOHdLdnpSZVBXUlZOSjN3WmxIVkJtOG9HWkZZamU1bitZakwvMjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUdYUWJGWmpXaG1mVmtGcVhHdXN2V1F4QW5TakhEb0NIdVh5OVhNMVUxVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiekdCeGo3cVZuWklDc3p3OCt3djZiZDBqM1hmVXVMVTJoUko4VWtjTS96VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJHS1hBUGV2S3RoNmErVHZpalRXV1lIYlFFTi90NjhuSVRBYXV2L1F4YjJ5OC9tcDJyb1NCZXFwTms5S0RwanMyUEZrN1FOSklmTmJvQzZlVXROcEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDUsImFkdlNlY3JldEtleSI6IlZWZW8yY3FDVjZuOW92azkwL0lySlJrVTZOK3VkL3YrSGphcWdaNHZudkk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU2Nzg5MDQ2ODc3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjA0Rjc1NTcwNDM0RjJGNkFFNzYwMkMxQzNBRkQxRTVDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI2OTk4ODF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1Njc4OTA0Njg3N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzNzg5Mzg3NjAxQjg3Nzg1RkVDQ0Y2MUVFMzE2OEFBRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNjk5ODgxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTY3ODkwNDY4NzdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDg0Njc4RjZEMDI4QzI1MjhENkFFNURGRTVGNkEwQzcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjY5OTg4M30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU2Nzg5MDQ2ODc3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjRGODFCRjY2MzM5QkUyOERBQ0NGNTE3NDkwOTkwQzNDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI2OTk4ODN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjVha3JNcTlvUkRhb0doTUtha0RxOVEiLCJwaG9uZUlkIjoiZGVkMWE5MTQtOTdiOS00NGRiLWE3OTItMTExMjQ2MzhkZDg5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFieUErR25DdEVDSDdyc3p3RkNxcTFCTVVDaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTNzYwdGxPb1JPcGJ5ZFBFOTJyR0lad09hQk09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUkhIRVNSQ0siLCJtZSI6eyJpZCI6IjI1Njc4OTA0Njg3NzoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFscGhh8J+lt/Cfj7/im5PvuI8ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xXUnRad0JFTmlndWJVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imc2NVpDcE92akZDdThIV1llZzRyOC8vZ2MvdXljUlBNQnBzQXNNMUpjRUU9IiwiYWNjb3VudFNpZ25hdHVyZSI6InE0SG1oOHJJUnlMSFNIUFdTaGxSVmFJNGQ5QnNKZ3Z6Qlc2TFpwbHZXQ2ZTeUt2OWx3SHpVVFJRWXVXQ3FtZG9Ia0kzbFJ6WjJZdkZ6Z21SS1BlSEFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJneGtlbmgwVXRMdmw3NG9JclpCa3dyUGl1NUlDTFlnMHFqNDdYNDJ1YnpwajcvZmtQd1p6bDF2T1F1QUE4R3ZMSExnYWt1OEcwdGpoSURxR1UxY2FEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1Njc4OTA0Njg3NzoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllPdVdRcVRyNHhRcnZCMW1Ib09LL1AvNEhQN3NuRVR6QWFiQUxETlNYQkIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI2OTk4NzgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSEtOIn0=" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "TalkDrove",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
