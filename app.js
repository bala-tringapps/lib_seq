const express = require("express")
const {sequelize,Book} = require("./models");


var app = express();

app.use(express.json());

app.get('/bookdetail',async (req,res) => {

    const bookinfo = await Book.findAll();
    return res.status(200).json(bookinfo);
})

app.post('/bookdetail', (req,res) => {
    const {title,author,edition,publisher,summary,ISBN,genre,url} = req.body;
    try{
        const bookinfo =  Book.create({title,author,edition,publisher,summary,ISBN,genre,url});
        return res.status(200).json(bookinfo);
    }
    catch(e){
        return res.status(500).json({"message":e});
    }
})



const PORT = 5000;

app.listen(PORT,async() => {
    console.log(`Server running on port ${PORT}`);
    try{
        await sequelize.sync()
    }
    catch(e){
        console.log(e);
    }
})