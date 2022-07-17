import { IUser } from './../interface/IUser';
import { User } from "../services/users";
import { Language } from '../services/languages';

export class UserController {

    private user : User = new User(); 
    private language: Language = new Language();

    constructor() {

    }
    
    async getUsers() {
        
        const users = await this.user.getUsers();
        users.forEach(async user => user.languages = await this.language.getLanguagesByUser( user.id as number ));

        return users;
    }

    async getUser(id: number) {
        const user = await this.user.getUser(id);
        user.forEach(async us => us.languages = await this.language.getLanguagesByUser( us.id as number ) );

        return user;
    }

    async getUsersByLanguage(id:number) {

        return this.user.getUsersByLanguage(id);
    }

    async addUser(name: string,instructor: boolean,twitter: string = "",web: string = "") {

        return this.user.addUser(name,instructor,twitter,web)
    }

    async updateUser(id: number,name: string,instructor: boolean,twitter: string = "",web: string = "") {
        return this.user.updateUser(id,name,instructor,twitter,web);
    }

    async deleteUser(id: number) {

        return this.user.deleteUser(id);
    }
}