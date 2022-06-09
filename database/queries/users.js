const createUserQuery = ({
  username,
  name = "",
  email,
  password,
  title = "",
  location = "",
  bio = "",
  photo = "",
}) => {
  const values = `'${username}', '${name}', '${email}', '${password}', '${title}', '${location}', '${bio}', '${photo}'`;
  return `INSERT INTO users (username, name, email, password, title, location, bio, photo) VALUES (${values});`;
};

module.exports = {
  createUserQuery,
};
