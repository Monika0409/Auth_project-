require('dotenv').config()   

const PORT =  process.env.PORT || 3001;

const app = require('./app')       

app.listen(PORT, () => {
    console.log(`server is listening at http://localhost:${PORT}`);
});
