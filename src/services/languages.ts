import { ILanguage } from "./../interface/ILanguage";
import executeQuery from "../helper/query";
import { ResultSetHeader, RowDataPacket } from "mysql2";

export class Language {

    constructor() { }

    private sql: string = "";

    async getLanguages(): Promise<ILanguage[]> {
        this.sql = "SELECT id,name from languages;";
        return (await executeQuery(this.sql)) as RowDataPacket as Promise<ILanguage[]>;
    }
    async getLanguage(id: number) {
        this.sql = "Select id,name from languages where id = ?";
        return (await executeQuery(this.sql, [id])) as RowDataPacket as Promise<ILanguage[]>;
    }

    async getLanguagesByUser(iduser: number): Promise<ILanguage[]> {

        this.sql = `                 
            SELECT l.id,l.name from languages l
            inner join users_languages ul on ul.language_id = l.id
            where ul.user_id = ?
        `;
        return (await executeQuery(this.sql, [iduser])) as RowDataPacket as Promise<ILanguage[]>;
    }

    async addLanguage(name: string): Promise<ResultSetHeader> {

        this.sql = "INSERT INTO languages(name) VALUES(?)";
        return (await executeQuery(this.sql,[name])) as Promise<ResultSetHeader>;
    }

    async updateLanguage(id: number, name: string) : Promise<ResultSetHeader> {

        this.sql = "UPDATE languages SET name = ? WHERE id = ?";
        return (await executeQuery(this.sql,[name,id])) as Promise<ResultSetHeader>;
    }

    async deleteLanguage(id: number): Promise<ResultSetHeader> {

        this.sql = ` 
            delete l.* from languages l
            left join users_languages ul on ul.language_id = l.id 
            where l.id = ?
        `;
        return (await executeQuery(this.sql,[id])) as Promise<ResultSetHeader>;
    }
}
