const db = require('../persistence');

module.exports = async (req, res) => {
    await db.removeItem(req.params.id).catch((error) => {
        res.status(500).send({ error: error.message });
    });
    res.sendStatus(200);
};
