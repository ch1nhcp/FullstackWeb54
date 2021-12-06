const fs = require("fs");
const uuid = require("uuid");

// Lay tat ca cac Comments
//Tra ve mot promises k co reject
const getAllComments = async () => {
  try {
    //Doc file Comments.json
    const jsonComments = await fs.promises.readFile("./Comments.json", {
      encoding: "utf8",
    });

    // parse file json sang object => gan cho bien Comments
    const Comments = JSON.parse(jsonComments);

    // tra ve bien Comments
    return Comments;
  } catch (err) {
    console.log(err);
    return [];
  }
};

//Lay ra Comment co id cu the
const getComment = async (id) => {
  try {
    //Doc file json
    const jsonComments = await fs.promises.readFile("./Comments.json", {
      encoding: "utf8",
    });

    // parse file json sang object => gan cho bien Comments
    const Comments = JSON.parse(jsonComments);

    //loc ra Comment can tim theo id
    let Comment = Comments.find((Comment) => Comment.id === id);

    //tra ve Comment can tim
    return Comment;
  } catch (err) {
    console.log(err);
    return [];
  }
};

//Tao Comment moi
const createComment = async (dataComment) => {
  try {
    //Doc file json
    const jsonComments = await fs.promises.readFile("./Comments.json", {
      encoding: "utf8",
    });

    // parse file json sang object => gan cho bien Comments
    const Comments = JSON.parse(jsonComments);

    const newComment = {
      id: uuid.v1(),
      ...dataComment,
    };

    //tao mang moi k chua bai Comment co id === id
    let newComments = [...Comments, newComment];

    //Ghi vao file goc
    await fs.promises.writeFile("./Comments.json", JSON.stringify(newComments));

    //tra ve danh sach Comment moi
    return newComment;
  } catch (err) {
    console.log(err);
    return false;
  }
};

//Update Comment co id cu the
const updateComment = async (id, dataUpdate) => {
  try {
    //Doc file json
    const jsonComments = await fs.promises.readFile("./Comments.json", {
      encoding: "utf8",
    });

    // parse file json sang object => gan cho bien Comments
    const Comments = JSON.parse(jsonComments);

    //Tim vi tri Comment can update
    let foundIndex = Comments.findIndex((Comment) => Comment.id === id);

    //update Comment
    if (foundIndex !== -1) {
      Comments[foundIndex] = {
        ...Comments[foundIndex],
        ...dataUpdate,
      };

      //Ghi vao file goc
      await fs.promises.writeFile("./Comments.json", JSON.stringify(Comments));
    }

    //tra ve null
    return null;
  } catch (err) {
    console.log(err);
    return null;
  }
};

//Xoa Comment co id cu the
const deleteComment = async (id) => {
  try {
    //Doc file json
    const jsonComments = await fs.promises.readFile("./Comments.json", {
      encoding: "utf8",
    });

    // parse file json sang object => gan cho bien Comments
    const Comments = JSON.parse(jsonComments);

    //tao mang moi k chua bai Comment co id === id
    let newComments = Comments.filter((Comment) => Comment.id !== id);

    //Ghi vao file goc
    await fs.promises.writeFile("./Comments.json", JSON.stringify(newComments));

    //tra ve true
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

//Export modules
module.exports = {
  getAllComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
};
