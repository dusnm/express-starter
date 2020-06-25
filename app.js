/**
 * @author Dusan Mitrovic <dusan@dusanmitrovic.xyz>
 * @license GPL-3.0-only https://opensource.org/licenses/GPL-3.0
 *
 * Application entry point
 */

// Load environment variables
require('dotenv').config();

// Environment
const HOST = process.env.HOST || 'http://localhost';
const PORT = process.env.PORT || 3000;

// Imports
const express = require('express');
const express_handlebars = require('express-handlebars');
const { dirname } = require('path');

// Defined routes
const home = require('./routes/home');

const app = express();

parseInt(process.env.SERVE_STATIC_FILES_WITH_NGINX) ?
    null : 
    app.use('/static', express.static(dirname(require.main.filename) + '/static/'));

app.engine('hbs', express_handlebars({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: dirname(require.main.filename) + '/views/layouts/'
}));

app.set('view engine', 'hbs');
app.set('views', dirname(require.main.filename) + '/views/');

// Routing
app.use('/', home);

app.listen(PORT, () => console.log(`Server listening on ${HOST}:${PORT}/`));
