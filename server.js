const express= require('express');
const app=express();

const users= require('./routes/user')

app.use(express.json());
app.use('/u',users);

app.use('/up',users);


app.use('/de',users);

const PORT= 3000

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
});
