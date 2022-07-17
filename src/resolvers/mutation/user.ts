import { IUser } from './../../interface/IUser';
import { IResolvers } from '@graphql-tools/utils';
import { UserController } from './../../controllers/users';

const user = new UserController();

const mutationUserResolvers : IResolvers= {

    Mutation : {

        addUser: async(_:void, args) =>  {
            try {

                const { name, twitter, web, instructor } = args.user as IUser;
                const { affectedRows } = await user.addUser(name,instructor,twitter,web);
                return affectedRows === 0 ? "No se pudo agregar el usuario": "Se ha agregado el usuario";

            } catch (error) {
                console.log({error});
                return "Ocurrió un error al agregar el usuario"
            }
        },
        updateUser: async (_:void, args) => {

            try {

                const { id,name, instructor, twitter,web } = args.user as IUser;
                const { affectedRows  } = await user.updateUser(id as number,name, instructor, twitter,web);

                return affectedRows === 0 ? "No se pudo actualizar el usuario": "Se actualizó el usuario"

            } catch (error) {
                console.log({error});

                return "Hubo un error al actualizar el usuario";
            }
        },
        deleteUser: async (_ : void, args ) => {

            try {

                const { id } = args;
                const { affectedRows } = await user.deleteUser(+id);

                return affectedRows === 0 ? "No se pudo eliminar el usuario": "Se eliminó el usuario";

            } catch (error) {
                console.log({error});

                return "Hubo un error al eliminar el usuario";
            }
        }
    }
} 

export default mutationUserResolvers;