import dotenv, { DotenvConfigOutput } from "dotenv";

const result : DotenvConfigOutput = dotenv.config({path: "./src/.env"});
if (process.env.NODE_ENV !== "production") {

    if(result.error) {
        throw result.error;
    }
}


export default result;