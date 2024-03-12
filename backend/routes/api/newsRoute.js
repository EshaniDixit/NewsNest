const router = require('express').Router();

const {scrapNews, fetchVideoId} = require('../../controllers/newsController');

router.get('/getNews', scrapNews);
router.post('/fetchVideoId', fetchVideoId)

module.exports = router;