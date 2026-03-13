import { Client, Account, Databases } from "node-appwrite";

const client = new Client()
    .setEndpoint('https://sgp.cloud.appwrite.io/v1')
    .setProject('69b43c580036858c9a43')
    .setKey('standard_f8a1287038cde4347abf84141e086c12253ff9ab3dee371de5e0588f333e98dd3f27e470eb5223bdead4b408fd5fe0dd5aa8c17068c34d0327e981dcb0816b2be479653f858c2d2568d2fe85363b2fb9fa50750e2a9f2b01ac3309ab156ad8ea148e1f68eea1ff77a589905043dd9455e129a8b130a9813f69819134f0df48e8');

const account = new Account(client);
const databases = new Databases(client);

export { client, account, databases };
