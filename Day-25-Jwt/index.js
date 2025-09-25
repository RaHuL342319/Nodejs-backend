const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "random_jwt_secret_key"; // In production, use a more secure way to manage secrets

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const users = []; // In-memory user storage

// Serve static files from the "public" directory
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
};

// auth middleware
const auth = (req, res, next) => {
  const token = req.headers.authorization;
  console.log("Token:", token);
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.username = decoded.username;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

app.post("/signup", logger, (req, res) => {
  //   res.send("Signup endpoint");
  const { username, password } = req.body;
  users.push({ username, password });

  res.json({
    message: "You are signed up successfully",
  });
});

app.post("/signin", logger, (req, res) => {
  //   res.send("Signin endpoint");
  const { username, password } = req.body;

  let foundUser = null;
  const user = users.find((u) => {
    if (u.username === username && u.password === password) {
      foundUser = u;
    }
  });
  console.log(foundUser);

  if (foundUser) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });
    res.json({
      message: "You are signed in successfully",
      token: token,
    });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// Protected route or authenticated route endpoint
app.get("/me", logger, auth, (req, res) => {
  const username = req.username;

  users.find((u) => {
    if (u.username === username) {
      return res.json({ username: u.username, password: u.password });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
