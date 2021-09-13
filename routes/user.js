var express = require('express');
const router = express.Router();

const UserService = require('../service/user');
const service = new UserService();

router.get('/homepage', (req, res) => {
    console.log({ "successfully": "Welcome on the home page" });
    res.send({ "successfully": "Welcome on the home page! " })
})
router.post('/signup', async (req, res) => {
    service.create(req.body).then((data) => {
        console.log({ "successfully": "signed  up  " });
        res.send(data)
    }).catch((err) => {
        res.send(err)
    })
})



router.put('/update/:id', async (req, res) => {
    const userId = req.params.id
    service.update(req.body, userId).then((data) => {
        console.log(data);
        console.log({ "successfully": "successfully updated" });
        res.json({MESSAGE:"UPDATED SUCCESSFULLY"})
    }).catch((err) => {
        res.send(err)
    })
})


router.delete('/delete/:id',async(req, res)=>{
    // const delid=req.params.id
    // console.log(delid);
    service.deleteById(req.params.id).then((data)=>{
        console.log(data);
        console.log({"successfully":"successfully deleted"})
        res.json({MESSAGE:"DELETED SUCCESSFULLY"})
    }).catch((err)=>{
        res.send(err)
    })
})



module.exports = router