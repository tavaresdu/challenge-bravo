import express from 'express';
import routes from './routes';

var port = process.env.PORT || '3000';

const app = express();
app.use('/api/v1', routes);

app.listen(port, () => {
    console.log('API listening on port ' + port);
});