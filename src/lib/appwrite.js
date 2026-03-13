import { Client, Account, Databases } from "node-appwrite";

const client = new Client()
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
    .setKey(import.meta.env.VITE_APPWRITE_API_KEY);

const account = new Account(client);
const databases = new Databases(client);

export { client, account, databases };
