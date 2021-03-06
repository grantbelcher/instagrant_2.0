const pool = require("./index");

const createTables = () => {
  const userTable = `CREATE TABLE IF NOT EXISTS
      users(
        user_id SERIAL PRIMARY KEY,
        username VARCHAR(40) NOT NULL,
        name VARCHAR(40) NOT NULL,
        email VARCHAR(40) NOT NULL,
        password VARCHAR(50) NOT NULL,
        title VARCHAR(40),
        location VARCHAR(50),
        bio VARCHAR(255),
        photo VARCHAR(255)
      )`;
  const postTable = `CREATE TABLE IF NOT EXISTS
    posts(
      post_id SERIAL PRIMARY KEY,
      author_id INT REFERENCES users (user_id),
      username VARCHAR(40) NOT NULL,
      profilePic VARCHAR(255),
      image VARCHAR(255) NOT NULL,
      location VARCHAR(50),
      caption VARCHAR(300),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )`;
  const commentTable = `CREATE TABLE IF NOT EXISTS
      comments(
        comment_id SERIAL PRIMARY KEY,
        post_id INT REFERENCES posts (post_id),
        author_id INT REFERENCES users (user_id),
        author_avatar VARCHAR(128),
        text VARCHAR(255),
        reply_id INT REFERENCES comments (comment_id)
      )`;

  const relationshipTable = `CREATE TABLE IF NOT EXISTS
      relationships(
        follow_id SERIAL PRIMARY KEY,
        follower_id INT REFERENCES users(user_id),
        following_id INT REFERENCES users(user_id)
      )`;
  const postLikes = `CREATE TABLE IF NOT EXISTS
      post_likes(
        like_id SERIAL PRIMARY KEY,
        user_id INT REFERENCES users(user_id),
        post_id INT REFERENCES posts (post_id)
      )`;
  const commentLikesTable = `CREATE TABLE IF NOT EXISTS
      comment_likes(
        like_id SERIAL PRIMARY KEY,
        user_id INT REFERENCES users(user_id),
        comment_id INT REFERENCES comments(comment_id)
      )`;
  console.log("wtf");
  return pool
    .query(userTable)
    .then((res) => {
      console.log(res, "response FROM USER TABLE");
      return pool.query(postTable);
    })
    .then((res) => {
      console.log(res, "response from POST TABLE");
      return pool.query(commentTable);
    })
    .then((res) => {
      console.log(res, "response from COMMENT TABLE");
      return pool.query(relationshipTable);
    })
    .then((res) => {
      console.log(res, "response from RELATIONSHIP TABLE");
      return pool.query(postLikes);
    })
    .then((res) => {
      console.log(res, "response from POST-LIKES TABLE");
      return pool.query(commentLikesTable);
    })
    .then((res) => {
      console.log(res, "RESPONSE FROM COMMENT-LIKES TABLE");
      pool.end();
    })
    .catch((err) => {
      console.log(err, "ERROR!!!!!!");
      // pool.end();
    });
};

module.exports = {
  createTables,
};

require("make-runnable");
