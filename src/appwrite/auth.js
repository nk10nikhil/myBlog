import conf from '../conf/conf.js';

import { Client, Account, ID } from "appwrite";

export class AuthServices {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount =  await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method to login
                return this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            const session = await this.account.createEmailPasswordSession(email, password);
            return session;
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            const user = await this.getCurrentUser();
            return user;
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        return null;
    }

    async logout() {
        try {
            const response = await this.account.deleteSessions();
            return response;
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }

}

const authServices = new AuthServices();

export default authServices;
