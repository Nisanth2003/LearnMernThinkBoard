import express from "express";
import { getStatus, getStatus1 } from "../../controllers/StatusController";


const router = express.router();

router.get("/", (req, res) => {
    res.status(200).json({message:"Hello World"});
});


router.get('/status_code',getStatus);

router.post('/status_code1',getStatus1);

//we cannot update randomly so userrole will send it.
//https://localhost:5001/api/notes/1234
router.put("/:id", (req, res) => {
    res.status(200).json({message:"Post updated successfully!"});
});

router.delete("/api/notes/:id",(req,res)=>{
    res.status(200).json({message:"post is deleted sucussfully"});

});

export default router;