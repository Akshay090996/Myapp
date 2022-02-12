//@desc     register a user
//@route    /api/users
//@access   public
const registerUser = (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error("Please add all the fields")
  }
  res.send("Register Route")
}

//@desc     login a user
//@route    /api/users/login
//@access   public
const loginUser = (req, res) => {
  res.send("Login Route")
}

module.exports = {
  registerUser,
  loginUser,
}
