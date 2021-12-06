const fs = require("fs");
const uuid = require("uuid");

// Lay tat ca cac posts
//Tra ve mot promises k co reject
const getAllPosts = async () => {
  try {
    //Doc file posts.json
    const jsonPosts = await fs.promises.readFile("./posts.json", {
      encoding: "utf8",
    });

    // parse file json sang object => gan cho bien posts
    const posts = JSON.parse(jsonPosts);

    // tra ve bien posts
    return posts;
  } catch (err) {
    console.log(err);
    return [];
  }
};

//Lay ra post co id cu the
const getPost = async (id) => {
  try {
    //Doc file json
    const jsonPosts = await fs.promises.readFile("./posts.json", {
      encoding: "utf8",
    });

    // parse file json sang object => gan cho bien posts
    const posts = JSON.parse(jsonPosts);

    //loc ra post can tim theo id
    let post = posts.find((post) => post.id === id);

    //tra ve post can tim
    return post;
  } catch (err) {
    console.log(err);
    return [];
  }
};

//Tao post moi
const createPost = async (dataPost) => {
  try {
    //Doc file json
    const jsonPosts = await fs.promises.readFile("./posts.json", {
      encoding: "utf8",
    });

    // parse file json sang object => gan cho bien posts
    const posts = JSON.parse(jsonPosts);

    const newPost = {
      id: uuid.v1(),
      ...dataPost,
    };

    //tao mang moi k chua bai post co id === id
    let newPosts = [...posts, newPost];

    //Ghi vao file goc
    await fs.promises.writeFile("./posts.json", JSON.stringify(newPosts));

    //tra ve danh sach post moi
    return newPost;
  } catch (err) {
    console.log(err);
    return false;
  }
};

//Update post co id cu the
const updatePost = async (id, dataUpdate) => {
  try {
    //Doc file json
    const jsonPosts = await fs.promises.readFile("./posts.json", {
      encoding: "utf8",
    });

    // parse file json sang object => gan cho bien posts
    const posts = JSON.parse(jsonPosts);

    //Tim vi tri post can update
    let foundIndex = posts.findIndex((post) => post.id === id);

    //update post
    if (foundIndex !== -1) {
      posts[foundIndex] = {
        ...posts[foundIndex],
        ...dataUpdate,
      };

      //Ghi vao file goc
      await fs.promises.writeFile("./posts.json", JSON.stringify(posts));
    }

    //tra ve null
    return null;
  } catch (err) {
    console.log(err);
    return null;
  }
};

//Xoa post co id cu the
const deletePost = async (id) => {
  try {
    //Doc file json
    const jsonPosts = await fs.promises.readFile("./posts.json", {
      encoding: "utf8",
    });

    // parse file json sang object => gan cho bien posts
    const posts = JSON.parse(jsonPosts);

    //tao mang moi k chua bai post co id === id
    let newPosts = posts.filter((post) => post.id !== id);

    //Ghi vao file goc
    await fs.promises.writeFile("./posts.json", JSON.stringify(newPosts));

    //tra ve true
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

//Export modules
module.exports = {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
