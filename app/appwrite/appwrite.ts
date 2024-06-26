import {Client,Account,Storage, Databases} from 'appwrite'
export const client = new Client()
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("6677cb9f0008bce34727")
export const account = new Account(client)
export const storage = new Storage(client);
export const appwriteDB = new Databases(client)
export {ID} from 'appwrite'
