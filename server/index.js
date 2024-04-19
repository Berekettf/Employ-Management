import express from 'express'
import cors from 'cors'
import { adminRouter } from './Routes/AdminRoutes.js'

const app = express()
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ['GET', 'POST', 'PUT'],
    credentials: true
}))
app.use(express.json())
<<<<<<< HEAD


app.use('/auth', adminRouter);

=======
>>>>>>> 031d062ebfcf9d5ae633c6853ae78870d81bf98f


app.use('/auth', adminRouter);

app.listen(8000, ()=>{
    console.log('server is running')
})
