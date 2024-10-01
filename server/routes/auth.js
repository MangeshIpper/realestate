import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        data: "Hello from nodejs api welcome  routes"
    });
});

export default router;