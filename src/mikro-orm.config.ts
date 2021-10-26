import { __prod__ } from "./constants";
import { Options } from "@mikro-orm/core";
import path from 'path'
import { Post } from './entities/Post'

console.log(__dirname)

const config: Options = {
    migrations: {
        path: path.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Post],
    dbName: "lireddit",
    type: "postgresql",
    debug: !__prod__,
};


export default config;