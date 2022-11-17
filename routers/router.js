const express = require("express")
const { appendFile } = require("fs")
const router = express.Router()

const controler = require("../controllers/productsControler")

router.get("/", controler.get)
router.get("/:id", controler.getDetails)
router.post("/", controler.post)
router.put("/", controler.putError)
router.put("/:id", controler.put)
router.delete("/", controler.deleteError)
router.delete("/:id", controler.delete)

module.exports = router