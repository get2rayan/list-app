const db = require('../persistence');

module.exports = async (req, res) => {
    const items = await db.getItems().catch((error) => {
        res.status(500).send({ error: error.message });
    });
    res.send(items);
};
