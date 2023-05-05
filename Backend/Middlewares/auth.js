var jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authentication;
  // console.log(token);
  if (token) {
    // const decoded=jwt.verify(token,'shhhhh')
    jwt.verify(token, "masai", (error, decoded) => {
      // console.log(decoded);

      if (decoded) {
        req.body.userID = decoded.userID;
        next();
      } else {
        res.status(400).send({ error: "Please Login First!" });
      }
    });
  } else {
    res.status(400).send({ msg: "Please Login First!" });
  }
};

module.exports = { auth };
