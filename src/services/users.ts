import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IUser } from './../interface/IUser';
import executeQuery from "../helper/query";

export class User {

    constructor() {

    }

    private sql: string = '';

    async getUsers() : Promise<Array<IUser>> {

        this.sql = "Select id, name, instructor, twitter, web from users;";
        return (await executeQuery(this.sql)) as RowDataPacket as Array<IUser>;
    } 

    async getUser(id: number): Promise<Array<IUser>> {

        this.sql = `Select id, name, instructor, twitter, web from users where id = ?`;
        return (await executeQuery(this.sql,[id])) as RowDataPacket as Array<IUser>;
    }

    async getUsersByLanguage(idlang: number): Promise<Array<IUser>> {

        this.sql = `
            SELECT u.id, u.name,  u.instructor, u.twitter, u.web 
                from users u
                inner join users_languages ul on ul.user_id = u.id 
            where ul.language_id = ?
        `;
        return (await executeQuery(this.sql,[idlang])) as RowDataPacket as Promise<IUser[]>
    }

    async addUser(name: string,instructor: boolean,twitter: string = "",web: string = ""): Promise<ResultSetHeader> {
    
        this.sql = `INSERT INTO users(name,instructor,twitter,web)
                    VALUES(?,?,?,?);
        `;
        return (await executeQuery(this.sql,[name,instructor,twitter,web])) as Promise<ResultSetHeader>
    }

    async updateUser(id: number,name: string,instructor: boolean,twitter: string = "",web: string = ""): Promise<ResultSetHeader> {

        this.sql = "UPDATE users SET name= ?, instructor=?,twitter=?, web=? where id = ?";
        return (await executeQuery(this.sql,[name,instructor,twitter,web,id])) as Promise<ResultSetHeader>;
    }

    async deleteUser(id: number) : Promise<ResultSetHeader> {

        this.sql = `
            delete u.* from users u 
                left join users_languages ul on ul.user_id = u.id 
            where u.id = ?
        `;

        return (await executeQuery(this.sql,[id])) as Promise<ResultSetHeader>;
    }
}