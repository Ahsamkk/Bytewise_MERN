import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: 'https://cloud.appwrite.io/v1',
  projectId: '66c0bd84002fb5d1615c',
  databaseId: '66c1eb0d002b50bb2ed9',
  storageId: '66c1eabb0026d9209f4b',
  userCollectionId: '66c1ebf70027a818c7ec',
  postCollectionId: '66c1ebde0033301c21b8',
  savesCollectionId: '66c1ec300016a0d5ccb6',
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);