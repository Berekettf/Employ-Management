import express from 'express'
import con from '../utils/db.js'
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/login', (req, res)=>{
   const  sql = "SELECT * FROM admin where email=? and password=?"
   con.query(sql, [req.body.email, req.body.password], (err, result)=>{
    if (err) return res.json({loginStatus: false, error: 'query error'})
    if(result.length > 0){
        const email = result[0].email;
        const token = jwt.sign({role: 'admin', email: email}, 
        "jwt-secret-key", 
        {expiresIn: 'Id'})
        res.cookie('token', token)
        return res.json({loginStatus: true})
    }else{
        return res.json({loginStatus: false, error: "Wrong Email or Password"});
    }
    
   })
})

router.post('/add_category', (req, res) => {
    const sql = "INSERT INTO category (`name`) VALUES (?)"
    con.query(sql, [req.body.category], (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true})
    })
})


router.get('/category', (req, res) => {
    const sql = "SELECT * FROM category";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})
export {router as adminRouter}