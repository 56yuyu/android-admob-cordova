import {createConnection, Repository, getRepository} from "typeorm";
import {Author} from "./entity/Author";
import {Post} from "./entity/Post";
import {Category} from "./entity/Category";

createConnection({
    type: "cordova",
    database: "test",
    location: "default",
    entities: [
        Author,
        Post,
        Category
    ],
    logging: true,
    synchronize: true
}).then(async connection => {

    const category1 = new Category();
    category1.name = "TypeScript";

    const category2 = new Category();
    category2.name = "Programming";

    const author = new Author();
    author.name = "Person";

    const post = new Post();
    post.title = "Control flow based type analysis";
    post.text = `TypeScript 2.0 implements a control flow-based type analysis for local variables and parameters.`;
    post.categories = [category1, category2];
    post.author = author;

    const postRepository = getRepository('Post') as Repository<Post>;
    await postRepository.save(post);


    console.log("Post has been saved");
    document.writeln("Post has been saved");
    
    const savedPost = await postRepository.findOne(post.id);
    
    console.log("Post has been loaded: ", savedPost);
    document.writeln("Post has been loaded: " + JSON.stringify(savedPost));

}).catch(error => {
    console.log("Error: ", error);
    document.writeln("Error: " + JSON.stringify(error));
});