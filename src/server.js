// eslint-disable-next-line
require('dotenv').config();
const app = require('./app');

const port = 3001;

// eslint-disable-next-line
app.listen(port, () => console.log(`Server up! - Port ${port}`));
