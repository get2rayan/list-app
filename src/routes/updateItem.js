const db = require('../persistence');

module.exports = async (req, res) => {
    await db.updateItem(req.params.id, {
        name: req.body.name,
        completed: req.body.completed,
    });
    const item = await db.getItem(req.params.id).catch((error) => {
        res.status(500).send({ error: error.message });
    });
    res.send(item);
};
