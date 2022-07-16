import { UserController } from "./../../controllers/users";
import { IResolvers } from "@graphql-tools/utils";

const user = new UserController();

const queryUserResolvers: IResolvers = {
  Query: {
    users: async (_: void, __: unknown) => {
      try {
        
        return await user.getUsers();

      } catch (error) {
        console.log({ error });
      }
    },
    user: async (_: void, args: { id: string }) => {
      try {

        const response = await user.getUser(+args.id);
        return response.length === 0 ? null : response[0];

      } catch (error) {
        console.log({ error });
      }
    },
  },
};

export default queryUserResolvers;
