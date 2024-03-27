// import conf file
import conf from '../conf.js';
import {Client,ID,Databases,Storage,Query} from "appwrite"

// create class & object of the class 

export class Service{
    // variable
    client = new Client();
    databases;
    bucket;  // storage

    // create constructor to initialise the variable

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket =- new Storage(this.client);    
    }

    // create the method  using the asyn / promises

    // 1-> create the post 

    async createPost({title,slug,content,featuredImage,status,userId}){

        try {

            return await  this.databases.createPost(
                conf.appwriteDatabasesId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                
                }
            )
            
        } catch (error) {
            console.log("Appwrite Service :: createPost:: error",error);  
        }
    }

    // 2 -> update the post  -> based upon the id
    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await  this.databases.updateDocument(
                conf.appwriteDatabasesId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
            
        } catch (error) {
            console.log("Appwrite Service:: updatePost:: error",error);
        }
    }

    // delete post  -> based upon the id
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabasesId,
                conf.appwriteCollectionId,
                slug,
            )
            return true;  // delete  successfully
            
        } catch (error) {
            console.log("Appwrite Service:: updatePost:: error",error);
            return false;            
        }

    }

    // 4-> get back the one post

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabasesId,
                conf.appwriteCollectionId,
                slug
            )

            
        } catch (error) {
            console.log("Appwrite Service :: getPost::error",error);
            return false;
        }
    }

      // 5 -> get back the ALL post -> whichOne status => Active
      // using the query filter the value
      async getPosts(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabasesId,
                conf.appwriteCollectionId,
                queries,
                 // or written here also
            // [
            //     //Query.equal("status","active")
            // ]
            )           
            
        } catch (error) {
            console.log("Appwrite Service :: getPost::error",error);
            return false;
        }
      }

      // file upload service -> based upon the bucket

      // 1-> upload the file -> not written the file name -> use file blog
      async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: error",error);
            return false;
        }
      }

      // 2 -> deletefile -> based upon the fileId
      async deleteFile(fileId){
        try {
            await this.deleteFile(
                conf.appwriteBucketId,
                fileId,
            )
            return true;
            
        } catch (error) {
            console.log("Appwrite Service :: deleteFile :: error",error);
            return false;
        }
      }

      // 3-> getFilePreview
      getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        )
      }
       

}

// create the obj of the class -> every time give the new instance
const service = new Service();
export default Service;