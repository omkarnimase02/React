
// import conf file
import conf from '../conf/conf.js';
import {Client,Account,ID} from "appwrite"

// create the class & export ot
// create the constructor  to access the client & account]

export class AuthService{
    client = new Client();
    account;

    // create the constructor
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client)    
    }

    // create the service based upon interface

    // using the promises / async

     // for sign in
    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.
            create(ID.unique(),email,password,name);

            // check the acc is created or not
            // call another method 
            if (userAccount) { // if created then jump to login
                return this.login({email,password});
                
            } else {
                return userAccount;
            }
            
        } catch (error) {
            throw error;
        }
    }

    // 2 -> for direct login 
    async login({email,password}){
        try {
            return await this.account.createEmailSession(email,password);
            
        } catch (error) {
            throw error;
        }
    }

    // 3-> check the login or not
    async getCurrentUser(){
        try {
            return await this.account.get();
            
        } catch (error) {
            console.log("Appwrite Service:: getCurrentUser::error",error);
        }

        return null;
    };

    // 4-> logout
    async logout(){
        try {
            await this.account.deleteSessions();// delete all
                        
        } catch (error) {
            console.log("Appwrite Service:: logout::error",error);
     
        }
    }
}



// create the obj to create new instance of class every time


const authService = new AuthService();
export default authService