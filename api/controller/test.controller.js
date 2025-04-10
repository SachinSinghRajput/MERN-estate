import jwt from "jsonwebtoken";
export const shouldBeLoggedIn = async (req, res) => {
  console.log(req.userId);
  res.status(200).json({ message: "You are Authenticated.." });
};
export const shouldBeAdmin = async (req, res) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "Unauthorised Access!!" });

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid Token" });
    if (!decoded.isAdmin) {
      return res.status(403).json({ message: "Invalid Token" });
    }
  });
  res.status(200).json({ message: "You are Authenticated.." });
};
