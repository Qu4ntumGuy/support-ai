function createChatController() {
try {
    
} catch (error) {
    res.status(500).json({ message: "Internal Server Error " + error.message });
}

module.exports = { createChatController };
