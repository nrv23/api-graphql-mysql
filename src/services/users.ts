import { IUser } from './../interface/IUser';
import executeQuery from "../helper/query";

export class User {

    constructor() {

    }

    private sql: string = '';

    async getUsers() : Promise<Array<IUser>> {

        this.sql = "Select id, name, instructor, twitter, web from users;";
        return (await executeQuery(this.sql)) as unknown as Array<IUser>;
    } 

    async getUser(id: number): Promise<Array<IUser>> {

        this.sql = `Select id, name, instructor, twitter, web from users where id = ?`;
        return (await executeQuery(this.sql,[id])) as unknown as Array<IUser>;
    }
}