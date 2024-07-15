async function createChatController(req, res) {
  try {
    const { email, createdAt } = req.body;
    if (!email || !createdAt) {
      return res.status(400).json({ message: "Please fill all fields" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error " + error.message });
  }
}

module.exports = { createChatController };
