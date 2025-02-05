import conf from './config.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    database;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId)
        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, content, feauturedImage, slug, status, userId}){
        try {
            const response = await this.database.createDocument(
                conf.appwriteCollectionId,
                conf.appwriteDatabaseId,
                slug,
                {
                    title,
                    content,
                    feauturedImage,
                    status,
                    userId,
                }
            )
            return response;      
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    async updatePost(slug, {title, content, feauturedImage, status}){
        try {
            const response = await this.database.updateDocument(
                conf.appwriteCollectionId,
                conf.appwriteDatabaseId,
                slug,
                {
                    title,
                    content,
                    feauturedImage,
                    status,
                }
            )
            return response;                        
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            const response = await this.database.deleteDocument(
                conf.appwriteCollectionId,
                conf.appwriteDatabaseId,
                slug
            )
            return true;                        
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug){
        try {
            const response = await this.database.getDocument(
                conf.appwriteCollectionId,
                conf.appwriteDatabaseId,
                slug
            )
            return response;                        
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')]){
        try {
            const response = await this.database.listDocuments(
                conf.appwriteCollectionId,
                conf.appwriteDatabaseId,
                queries
            )
            return response;
                       
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false;
        }
    }

    // file upload service
    async uploadFile(file){
        try {
            const response = await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
            return response;
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }

    // delete file service
    async deleteFile(fileId){
        try {
            const response = await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    // file preview service
    async getFilePreview(fileId){
        try {
            const response = this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            );
            return response;
        } catch (error) {
            console.log("Appwrite service :: getFilePreview :: error", error);
            return false;
        }
    }

}

const service = new Service();

export default service;