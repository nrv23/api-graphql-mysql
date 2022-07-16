import { User } from "../services/users";

export class UserController {

    private user : User = new User(); 

    constructor() {

    }
    
    async getUsers() {
        return await this.user.getUsers();
    }

    async getUser(id: number) {
        return this.user.getUser(id);
    }
}