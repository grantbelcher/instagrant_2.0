const pool = require("./index");

const createUserQuery = ({
  username,
  name,
  email,
  password,
  title,
  location,
  bio,
  photo,
}) => {
  const values = `'${username}', '${name}', '${email}', '${password}', '${title}', '${location}', '${bio}', '${photo}'`;
  return `INSERT INTO users (username, name, email, password, title, location, bio, photo) VALUES (${values});`;
};

const createPostQuery = ({
  authorId,
  username,
  profilePic,
  location,
  caption,
  image,
}) => {
  const values = `${authorId}, '${username}', '${profilePic}', '${location}', '${image}', '${caption}'`;
  return `INSERT INTO posts (author_id, username, profilepic, location, image, caption) VALUES (${values});`;
};

const createPostLikeQuery = ({ userId, postId }) => {
  const values = `${userId}, ${postId}`;
  return `INSERT INTO post_likes (user_id, post_id) VALUES (${values})`;
};

const createRelationshipQuery = ({ followerId, followingId }) => {
  const values = `${followerId}, ${followingId}`;
  return `INSERT INTO relationships (follower_id, following_id) VALUES (${values})`;
};

const createCommentQuery = ({ userId, postId, authorAvatar, text }) => {
  const values = `${postId}, ${userId}, '${authorAvatar}', '${text}'`;
  return `INSERT INTO comments (post_id, author_id, author_avatar, text) VALUES (${values})`;
};

const initialUsers = [
  {
    username: "PresTrump",
    fullname: "Donald J Trump",
    password: "111111",
    bio: "a huge piece of shit",
    photo:
      "https://i2.wp.com/www.wizmnews.com/wp-content/uploads/2020/04/Donald-Trump-Ap-13-presser-face-AP.jpeg?resize=80%2C80&ssl=1",
  },
  {
    username: "BillyOcean",
    fullname: "Billy Ocean",
    password: "111111",
    bio: "Get out of my dreams and into my car!",
    photo:
      "https://jilliebushell.com/wp-content/uploads/2017/01/billyochds.jpg",
  },
  {
    username: "BillyIdol",
    fullname: "BillyIdol",
    password: "111111",
    bio: "Its a nice day for a White Wedding",
    photo:
      "https://www.whosampled.com/static/track_images/r9591_201069_21950898901.jpg",
  },
  {
    username: "TrillMurray420",
    fullname: "Bill Murray",
    password: "111111",
    bio: "The best way to teach your kids about taxes is by eating 30 percent of their ice cream.",
    photo:
      "https://d1ynl4hb5mx7r8.cloudfront.net/wp-content/uploads/2014/09/bill-murray-100.jpg",
  },
  {
    username: "KimK",
    fullname: "Kim Kardashian",
    password: "111111",
    bio: "a waste of a human being",
    photo:
      "https://thehill.com/sites/default/files/styles/thumb_100/public/kardashiankourtney_04232018getty_0.jpg?itok=J6S55Obi",
  },
  {
    username: "SexySaxMan",
    fullname: "Bill Clinton",
    password: "111111",
    bio: "when I was in England I experimented with marijuana a time or two, and I didn???t like it. I didn???t inhale it, and never tried it again",
    photo:
      "https://pbs.twimg.com/profile_images/1016163015723552769/ZsrVkp3e_400x400.jpg",
  },
];

const fullnames = [
  "Noreen Castelli",
  "Jaimie Wager",
  "Temika Keebler",
  "Nubia Pedrick",
  "Jack Zeitz",
  "Warner Ensey",
  "Pat Mook",
  "Geneva Levert",
  "Marcel Errico",
  "Wesley Robb",
  "Nelson Gleason",
  "Dakota Jin",
  "Rita Smith",
  "Armando Mcmann",
  "Kirk Lazarus",
  "Levi Bose",
  "Tobi Genova",
  "Jenae Jen",
  "Antony Ericksen",
  "Lorean Smith",
  "Micah Gudger",
  "Willette Litle",
  "Alyse Jaffee",
  "Iliana Hoops",
  "Ora Wehner",
  "Shaunna Garson",
  "Joyce Linke",
  "Mable Hollander",
  "Clemmie Banerjee",
  "Adelaide Kujawa",
  "Pablo Luth",
  "Leonore Barhorst",
  "Shannan Fling",
  "Jeannine Barnes",
  "Haywood Woodham",
  "Judie Chambers",
  "Georgetta Wilmeth",
  "Glenn Denicola",
  "Tessie Atwood",
  "Dewitt Spoon",
  "Daisy Bazaldua",
  "Eldridge Ducker",
  "Kanisha Tubbs",
  "Erasmo Pillow",
  "Ermelinda Alan",
  "Lon Ruppel",
  "Mabelle Thiem",
  "Maire Ricardo",
  "Coleman Speth",
  "Fumiko Whichard",
  "Adalberto Heasley",
  "Dwight Sommerfeld",
  "Ada Broadwater",
  "Libby Hinze",
  "Kent Major",
  "Chantay Hurless",
  "Zenaida Broeckel",
  "Jacquelyne Raimondi",
  "Serena Matousek",
  "Georgine Hine",
  "Ivette Mccuiston",
  "Lizbeth Conatser",
  "Florance Mcpeek",
  "Michele Kammer",
  "Shaina Guptill",
  "Rachele Cassinelli",
  "Elayne Munroe",
  "Jenee Brook",
  "Kenia Snover",
  "Pei Metzinger",
];

const usernames = [
  "@rainbowsalt",
  "@idreamofunicorns",
  "@fuckyoumakeart",
  "@lesparisiennes",
  "@comefeelme",
  "@coyoteflowers",
  "@watts.on",
  "@loversland",
  "@motelvibes",
  "@fogwoodandfig",
  "@vintageparis",
  "@darksun",
  "@psychosocialclub",
  "@purrienne_",
  "@latenightsinthecity",
  "@dirtydisco",
  "@sugarhighlovestoned",
  "@dontfeedtheunicorn",
  "@publicbutter",
  "@032c",
  "@ihateblonde",
  "@loveseeker",
  "@ssense",
  "@placesplusfaces",
  "@manicpixiememegurl",
  "@_woldandmoon",
  "@scarymommy",
  "@basementfox",
  "@4thandbleeker",
  "@thedriftersclub",
  "@lackofcolouraus",
  "@weekendlust",
  "@zippyseve",
  "@magicalworld",
  "@iblamejordan",
  "@petiue",
  "@bagatiba",
  "@openair",
  "@fragmentation",
  "@witchoria",
  "@_sightunseen_",
  "@snarkitecture",
  "@digitalf33ls",
  "@bloomingalchemy",
  "@natureangel",
  "@clash.studio",
  "@jimsandkittys",
  "@sundaze",
  "@chillwildlife",
  "@the_wylde",
  "@weworewhat",
  "@chillhouse",
  "@iamwellandgood",
  "@loversland",
  "@nitch",
  "@whereareavocados",
  "@sincerelyjules",
  "@babynative",
  "@thedad",
  "@betches",
  "@wearelivingart",
  "@gaybestfriend",
  "@diet_prada",
  "@yourgirlmax",
  "@drunkbetch",
  "@collectiveworld",
  "@biancachandon",
  "@americanfailure",
  "@havelesstravelmore",
  "@poemsporn",
];

const images = [
  "https://res.cloudinary.com/instagrant/image/upload/v1593366424/Screen_Shot_2020-06-28_at_10.40.28_AM_qfghzs.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366424/Screen_Shot_2020-06-28_at_10.40.28_AM_qfghzs.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366424/Screen_Shot_2020-06-28_at_10.40.28_AM_qfghzs.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366424/Screen_Shot_2020-06-28_at_10.38.46_AM_g3hxnq.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366424/Screen_Shot_2020-06-28_at_10.38.46_AM_g3hxnq.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366423/Screen_Shot_2020-06-28_at_10.38.33_AM_gsszbb.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366423/Screen_Shot_2020-06-28_at_10.38.33_AM_gsszbb.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366423/Screen_Shot_2020-06-28_at_10.38.33_AM_gsszbb.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366423/Screen_Shot_2020-06-28_at_10.38.33_AM_gsszbb.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366423/Screen_Shot_2020-06-28_at_10.38.33_AM_gsszbb.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366422/Screen_Shot_2020-06-28_at_10.43.44_AM_ldfpka.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366422/Screen_Shot_2020-06-28_at_10.43.44_AM_ldfpka.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366421/Screen_Shot_2020-06-28_at_10.35.35_AM_z0hbny.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366421/Screen_Shot_2020-06-28_at_10.35.35_AM_z0hbny.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366421/Screen_Shot_2020-06-28_at_10.38.12_AM_pjikl5.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366421/Screen_Shot_2020-06-28_at_10.38.12_AM_pjikl5.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366335/Screen_Shot_2020-06-28_at_10.34.44_AM_vrqzkb.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366335/Screen_Shot_2020-06-28_at_10.34.44_AM_vrqzkb.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1592929293/samples/food/spices.jpg",
  "https://res.cloudinary.com/instagrant/image/upload/v1592929291/samples/ecommerce/car-interior-design.jpg",
  "https://res.cloudinary.com/instagrant/image/upload/c_scale,w_849/v1592929287/samples/people/smiling-man.jpg",
  "https://res.cloudinary.com/instagrant/image/upload/v1593364446/instagrant/Screen_Shot_2020-06-28_at_10.13.48_AM_pdhpny.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593365061/instagrant/Screen_Shot_2020-06-28_at_10.23.23_AM_g4gkv2.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593365065/instagrant/Screen_Shot_2020-06-28_at_10.16.46_AM_dmaoi7.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593365068/instagrant/Screen_Shot_2020-06-28_at_10.17.52_AM_bgwshm.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593365069/instagrant/Screen_Shot_2020-06-28_at_10.18.58_AM_cm7ras.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593365071/instagrant/Screen_Shot_2020-06-28_at_10.17.01_AM_hcissx.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593365073/instagrant/Screen_Shot_2020-06-28_at_10.17.20_AM_ldvbzh.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593365075/instagrant/Screen_Shot_2020-06-28_at_10.19.53_AM_rbz5yn.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593365077/instagrant/Screen_Shot_2020-06-28_at_10.18.08_AM_bkftzc.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593365079/instagrant/Screen_Shot_2020-06-28_at_10.18.38_AM_numviz.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366427/Screen_Shot_2020-06-28_at_10.43.30_AM_zeu2ge.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366425/Screen_Shot_2020-06-28_at_10.32.21_AM_qq6c5n.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366424/Screen_Shot_2020-06-28_at_10.40.28_AM_qfghzs.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366424/Screen_Shot_2020-06-28_at_10.38.46_AM_g3hxnq.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366423/Screen_Shot_2020-06-28_at_10.36.55_AM_meqbii.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366423/Screen_Shot_2020-06-28_at_10.38.33_AM_gsszbb.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366423/Screen_Shot_2020-06-28_at_10.37.21_AM_oeabzm.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366422/Screen_Shot_2020-06-28_at_10.43.44_AM_ldfpka.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366422/Screen_Shot_2020-06-28_at_10.34.17_AM_gbstvz.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366422/Screen_Shot_2020-06-28_at_10.39.21_AM_fiqvqf.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366422/Screen_Shot_2020-06-28_at_10.33.28_AM_kpovaj.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366421/Screen_Shot_2020-06-28_at_10.35.35_AM_z0hbny.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366421/Screen_Shot_2020-06-28_at_10.36.10_AM_plwg0k.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366421/Screen_Shot_2020-06-28_at_10.43.53_AM_r7oi0f.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366421/Screen_Shot_2020-06-28_at_10.44.30_AM_wzxiwr.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366421/Screen_Shot_2020-06-28_at_10.44.30_AM_wzxiwr.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366421/Screen_Shot_2020-06-28_at_10.38.12_AM_pjikl5.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366421/Screen_Shot_2020-06-28_at_10.38.03_AM_dfovxb.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366420/Screen_Shot_2020-06-28_at_10.36.37_AM_wg0vdb.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593366335/Screen_Shot_2020-06-28_at_10.34.44_AM_vrqzkb.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593367163/instagrant/Screen_Shot_2020-06-28_at_10.58.04_AM_qvtnwl.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593367163/instagrant/Screen_Shot_2020-06-28_at_10.57.26_AM_yeosgt.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593367163/instagrant/Screen_Shot_2020-06-28_at_10.58.18_AM_yhnawb.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593367163/instagrant/Screen_Shot_2020-06-28_at_10.56.57_AM_et3bgv.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593367163/instagrant/Screen_Shot_2020-06-28_at_10.56.28_AM_piwo87.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593367163/instagrant/Screen_Shot_2020-06-28_at_10.57.10_AM_ppalcm.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593367163/instagrant/Screen_Shot_2020-06-28_at_10.56.12_AM_qqk1zj.png",
  "https://res.cloudinary.com/instagrant/image/upload/v1593367163/instagrant/Screen_Shot_2020-06-28_at_10.56.28_AM_piwo87.png",
];

// console.log(Math.floor(Math.random() * images.length))

const bios = [
  "I am so random!!!",
  "So many of my smiles are because of you.",
  "So grateful to be sharing my world with you.",
  "All your dreams can come true and Ill make sure of it.",
  "Live in the sunshine where you belong.",
  "My life is better than my daydreams.",
  "Sprinkling kindness everywhere I go.",
  "I love my followers more than life itself.",
  "Live, laugh, love",
  "its  5 oclock somewhere",
];

const titles = [
  "Air Marshal",
  "Assistant Professor",
  "Duke of Earl",
  "Party Captain",
  "Commissioner of Partying",
  "Dalai Lama",
  "Grand Master Wizard",
  "High Priest",
  "President of Communications",
  "VP of Marketing",
];

const locations = [
  "Antarctica",
  "USA",
  "Oakland, CA",
  "San Diego",
  "Ecuador",
  "Mt. Everest",
  "Denali",
  "Seattle",
  "Nashville",
  "Washington",
  "Colombia",
  "Cartegena",
  "Eureka, CA",
  "Medellin",
  "Lima, Peru",
  "Washington D.C.",
  "New York, New York",
  "Planet Earth",
  "London, England",
  "Beijing, China",
  "Mount Everest",
  "Mount Shasta",
  "San Francisco, CA",
  "Oakland, CA",
];

const firstUsers = [];

usernames.forEach((name, i) => {
  const newUser = {};
  newUser.username = name;
  newUser.name = fullnames[i];
  newUser.email = "email@email.com";
  newUser.bio = bios[Math.floor(Math.random() * bios.length)];
  newUser.password = "secret123";
  newUser.title = titles[Math.floor(Math.random() * titles.length)];
  newUser.photo = images[Math.floor(Math.random() * images.length)];
  newUser.location = locations[Math.floor(Math.random() * locations.length)];
  firstUsers.push(newUser);
});

const captions = [
  "Check this out!",
  "Look at this",
  "watch this",
  "me and the boys",
];

const firstPosts = [];
firstUsers.forEach((user, i) => {
  for (let x = 0; x < 8; x += 1) {
    const newPost = {};
    newPost.authorId = i + 1;
    newPost.username = user.username;
    newPost.profilePic = user.photo;
    newPost.location = locations[Math.floor(Math.random() * locations.length)];
    newPost.caption = captions[Math.floor(Math.random() * captions.length)];
    newPost.image = images[Math.floor(Math.random() * images.length)];
    firstPosts.push(newPost);
  }
});

const firstFollows = [];
firstUsers.forEach((user, i) => {
  // generate random number to represent # of accounts this user follows
  const numberFollowing = Math.floor(Math.random() * 39) + 30;
  // generate an array of users already followed, include this users id;
  const following = [i + 1];
  // iterate from 1 to that random number
  let j;
  for (j = 1; j < numberFollowing; j++) {
    // generate random number for the userId
    const userId = Math.floor(Math.random() * 69) + 1;
    // check if it is in array of users followed
    const alreadyFollowing = following.includes(userId);
    if (!alreadyFollowing) {
      // create new Follow object
      const newFollow = {};
      newFollow.followerId = i + 1;
      newFollow.followingId = userId;
      firstFollows.push(newFollow);
      following.push(userId);
    } else {
      j -= 1;
    }
  }
});

const firstLikes = [];
firstPosts.forEach((post, i) => {
  // generate random number to represent # of likes this post has
  const numberOfLikes = Math.floor(Math.random() * 39) + 5;
  // generate an array to store likes for this post;
  const likes = [];
  // iterate from 1 to that random number
  let j;
  for (j = 1; j < numberOfLikes; j++) {
    // generate random number for the userId
    const userId = Math.floor(Math.random() * 69) + 1;
    // check if it is in array of users followed
    const alreadyLiked = likes.includes(userId);
    if (!alreadyLiked) {
      // create new Follow object
      const newLike = {};
      newLike.postId = i + 1;
      newLike.userId = userId;
      firstLikes.push(newLike);
      likes.push(userId);
    } else {
      j -= 1;
    }
  }
});

const firstCommentsText = [
  "In nature, light creates the color. In the picture, color creates the light.",
  "The beauty has no boundaries in this picture.",
  "Your beauty is irresistible.",
  "Such a charming picture.",
  "Elegant picture.",
  "My words are less to describe this picture.",
  "Beauty lies within for those who choose to see.",
  "The power of beauty lies within the soul.",
  "This picture is worth a thousand words.",
  "Beauty is power; a smile is its sword",
  "This place looks exotic",
  "I love how vibrant colors are in the picture",
  "Such a scenic view,looks great",
  "Impressive picture",
  "Adorable picture and Your smile makes me Happy.",
  "Looking Gorgeous and This picture made my day.",
  "Amazing, i have never seen Photo like this",
  "Oh! Very beautiful Im falling in love with this Image",
  "This picture is better than better",
  "Perfect Click without any doubt",
  "Im going to die for this pic",
  "This picture is eloquent like words",
];

const firstComments = [];
firstPosts.forEach((post, i) => {
  // generate random number to represent # of accounts this user follows
  const numberOfComments = Math.floor(Math.random() * 10);
  // generate an array of users already followed, include this users id;
  const comments = [i + 1];
  // iterate from 1 to that random number
  let j;
  for (j = 1; j < numberOfComments; j++) {
    // generate random number for the userId
    const userId = Math.floor(Math.random() * 69) + 1;
    // check if it is in array of users followed
    const alreadyCommented = comments.includes(userId);
    if (!alreadyCommented) {
      // create new Follow object
      const newComment = {};
      newComment.postId = i + 1;
      newComment.userId = userId;
      newComment.authorAvatar = firstUsers[userId].photo;
      newComment.text =
        firstCommentsText[Math.floor(Math.random() * firstCommentsText.length)];
      firstComments.push(newComment);
      comments.push(userId);
    } else {
      j -= 1;
    }
  }
});

const seedDatabase = () => {
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
  return (
    pool
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
        let x = 0;
        while (x < 70) {
          const insertQuery = createUserQuery(firstUsers[x]);
          pool
            .query(insertQuery)
            .then((res) => {})
            .catch((err, err2) => {
              console.log(err, insertQuery);
            });
          x++;
        }
        return "users seeded?";
      })
      .then((message) => {
        console.log(message, "message");
        firstPosts.forEach((post) => {
          const insertQuery = createPostQuery(post);
          pool
            .query(insertQuery)
            .then((res) => {
              console.log("post created");
            })
            .catch((err) => console.log(err, insertQuery));
        });
      })
      .then(() => {
        firstFollows.forEach((follow) => {
          const insertQuery = createRelationshipQuery(follow);
          pool
            .query(insertQuery)
            .then((res) => {
              console.log("follow created");
            })
            .catch((err) => console.log(err, insertQuery));
        });
      })
      .then(() => {
        firstLikes.forEach((like) => {
          const insertQuery = createPostLikeQuery(like);
          pool
            .query(insertQuery)
            .then((res) => {
              console.log("like created");
            })
            .catch((err) => console.log(err, insertQuery));
        });
      })
      .then(() => {
        firstComments.forEach((comment) => {
          const insertQuery = createCommentQuery(comment);
          pool
            .query(insertQuery)
            .then((res) => {
              console.log("comment created");
            })
            .catch((err) => console.log(err, insertQuery));
        });
      })
      // })
      .catch((err) => {
        console.log(err, "ERROR!!!!!!");
        // pool.end();
      })
  );
};

seedDatabase();
