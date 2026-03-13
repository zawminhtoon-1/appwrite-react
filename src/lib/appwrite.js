import { Client, Account, Databases } from "node-appwrite";

const client = new Client()
    .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
    .setKey(req.headers['x-appwrite-key'] ?? '');

const account = new Account(client);
const databases = new Databases(client);

export { client, account, databases };
