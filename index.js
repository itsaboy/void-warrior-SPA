const express =  require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(() => {
    res.status(404);
    res.send('<h1>404 Error: Resource Not Found</h1>')
});

app.listen(443, () => console.log('API listening on port 5001'));

app.get('/', (req, res) => res.json('API running'));