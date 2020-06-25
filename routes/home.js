/**
 * @author Dusan Mitrovic <dusan@dusanmitrovic.xyz>
 * @license GPL-3.0-only https://opensource.org/licenses/GPL-3.0
 *
 * HTTP routes for the main pages
 */
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});

module.exports = router;
