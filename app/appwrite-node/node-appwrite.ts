import {Client,Databases} from 'node-appwrite'
const nodeAppwriteClient = new Client().setEndpoint(process.env.APPWRITE_ENDPOINT as string).setProject(process.env.APPWRITE_PROJECTID as string).setKey(process.env.APPWRITE_NEXT_KEY as string)
export const appwriteServerDb = new Databases(nodeAppwriteClient)
