import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

const main = async () => {
    const orm = MikroORM.init({
        entities: [Post],
        dbName: 'lireddit',
        user: 'postgres',
        password: 'rishi1969',
        debug: !__prod__,
        type: 'postgresql'
    });
}

main();