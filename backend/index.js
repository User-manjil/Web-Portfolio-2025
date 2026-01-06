const express = require('express')
const app = express()

const PORT = 8000;
app.get('/',(req,res)=>{
    res.end('HEllo this is on port 8000')
})
app.listen(PORT,()=>{console.log('Running at PORT',PORT);
});