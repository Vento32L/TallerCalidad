const app = require('./app/app');

//database
require('./config/connection')

app.listen(app.get('port'), () => {
    console.log('Server running on port:', 3000);
})
