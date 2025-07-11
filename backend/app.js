import express from 'express'
import db from "./db.js"
import cors from 'cors'

const app = express()
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.get("/", (req , res)=>{
    res.send("CUCABELUDO") 
})


app.get("/produtos", (req, res) => {
    const sql = `SELECT id, nome, valor, img , value_anterior,description FROM produtos`
    db.all(sql, (error, rows) => {
        if (error) {
            console.log(error)
            return res.status(500).send("Erro ao buscar produtos")
        }
        res.status(200).json(rows)
    })
})

app.listen(3000, ()=>{
    console.log("IS running")
})