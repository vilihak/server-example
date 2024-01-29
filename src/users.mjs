const users = [
  {
    id: 1,
    username: "johndoe",
    password: "password1",
    email: "johndoe@example.com"
  },
  {
    id: 2,
    username: "janedoe",
    password: "password2",
    email: "janedoe@example.com"
  },
  {
    id: 3,
    username: "bobsmith",
    password: "password3",
    email: "bobsmith@example.com"
  }
];

// TODO: implement route handlers below for users

const getUsers = (req, res) => {
  res.json(users);
};

const getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const userFound = users.find(user => user.id === userId);

  if (userFound) {
    res.json(userFound);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};

const postUser = (req, res) => {
  const newUser = req.body;

  // validate if required fields are present
  if (!newUser.username || !newUser.password || !newUser.email) {
    return res.status(400).json({ error: 'Incomplete user information' });
  }

  // checks if username is already taken
  const usernameTaken = users.some(user => user.username === newUser.username);
  if (usernameTaken) {
    return res.status(400).json({ error: 'Username already taken' });
  }

  // generate a new unique ID
  const newUserId = users.length + 1;

  // create the new user object
  const user = {
    id: newUserId,
    username: newUser.username,
    password: newUser.password,
    email: newUser.email
  };

  // add the new user to the array
  users.push(user);

  res.status(201).json({ message: 'User created successfully', user });
};

const putUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const userToUpdate = users.find(user => user.id === userId);

  if (!userToUpdate) {
    return res.status(404).json({ error: 'User not found' });
  }

  const updatedUser = req.body;

  if (updatedUser.username) {
    userToUpdate.username = updatedUser.username;
  }

  if (updatedUser.password) {
    userToUpdate.password = updatedUser.password;
  }

  if (updatedUser.email) {
    userToUpdate.email = updatedUser.email;
  }

  res.json({ message: 'User updated successfully', user: userToUpdate });
};

// Dummy login, returns user object if username & password match
const postLogin = (req, res) => {
  const userCreds = req.body;
  if (!userCreds.username || !userCreds.password) {
    return res.sendStatus(400);
  }
  const userFound = users.find(user => user.username == userCreds.username);
  // user not found
  if (!userFound) {
    return res.status(403).json({error: 'username/password invalid'});
  }
  // check if posted password matches to user found password
  if (userFound.password === userCreds.password) {
    res.json({message: 'logged in successfully', user: userFound});
  } else {
    return res.status(403).json({error: 'username/password invalid'});
  }
};

export {getUsers, getUserById, postUser, putUser, postLogin};
