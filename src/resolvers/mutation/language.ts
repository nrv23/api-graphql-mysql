import { ILanguage } from './../../interface/ILanguage';
import { IResolvers } from '@graphql-tools/utils';
import { LanguageController } from './../../controllers/languages';

const language = new LanguageController();

const mutationLanguageResolvers : IResolvers = {

    Mutation: {

        addLanguage: async(_ :void, args) => {

            try {   

                const { name } = args.language as ILanguage;
                const {  affectedRows } = await language.addLanguage(name);
                return affectedRows === 0 ? "No se pudo agregar el lenguaje": "Se ha agregado el lenguaje";
            } catch (error) {
                console.log({error});
                return "Hubo un error al agregar el lenguaje";
            }
        },

        updateLanguage: async (_:void, args ) => {
            try {

                const { id,name } = args.language as ILanguage;
                const { affectedRows } = await language.updateLanguages(id as number,name);

                return affectedRows === 0 ? "No se pudo actualizar el lenguaje": "Se ha actualizado el lenguaje";
                
            } catch (error) {
                
                console.log({error});

                return "Hubo un error al actualizar el lenguaje";
            }
        },
        deleteLanguage: async (_ :void, args) => {
            try {
                
                const { id } = args;
                const { affectedRows } = await language.deleteLanguage(id as number);

                return affectedRows === 0 ? "No se pudo eliminar el lenguaje": "Se ha eliminado el lenguaje";

            } catch (error) {
                console.log({error});

                return "Hubo un error al eliminar el lenguaje de programación"
            }
        }
    }
}

export default mutationLanguageResolvers;