const connection = require("./connection")
const data = require("./schema")
const express = require("express")
const multer = require("multer")
const cors = require("cors")


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static("public"))
const storage = multer.diskStorage
    ({
        destination: (req, file, cb) => {
            cb(null, "public/uploads/")
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname)
        }
    })
const upload = multer({ storage: storage }).single("pimg")
app.post("/", (req, resp) => {
    upload(req, resp, (err) => {
        if (err) {
            resp.send(err)
        }
        else {
            const data1 = new data({
                pid: req.body.pid,
                pname: req.body.pname,
                pprice: req.body.pprice,
                pdesc: req.body.pdesc,
                pcat: req.body.pcat,
                pimg: "http://localhost:4000/uploads/" + req.file.filename
            })
            data1.save()
            resp.send("Data save successfully")
        }
    })
})
app.get("/",async(req,resp)=>
{
    const data2=await data.find()
    resp.send(data2)

})
app.get("/product/:id", async (req, resp) => {
    try {
        const product = await data.findById(req.params.id);
        if (!product) {
            return resp.status(404).send("Product not found");
        }
        resp.send(product);
    } catch (err) {
        resp.status(500).send("Error fetching product data");
    }
});

app.get("/categories", async (req, resp) => {
    try {
        const categories = await data.distinct('pcat');
        resp.send(categories);
    } catch (err) {
        resp.status(500).send("Error fetching categories");
    }
});


app.listen(4000)    