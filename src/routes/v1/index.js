const express =require("express");
const {handleInfo}=require("../../controllers")
const router =express.Router();

router.get("/info",handleInfo);
module.exports=router;