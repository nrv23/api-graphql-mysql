import { Language } from './../services/languages';

export class LanguageController {

    private language: Language = new Language();

    constructor() {

    }

    async getLanguages() {
        return this.language.getLanguages();
    }

    async getLanguage(id: number) {
        return this.language.getLanguage(id);
    }

    async addLanguage(name: string) {
        return this.language.addLanguage(name);
    }

    async updateLanguages(id: number, name: string) {
        return this.language.updateLanguage(id,name);
    }

    async deleteLanguage(id: number) {
        return this.language.deleteLanguage(id);
    }
}