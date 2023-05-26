import express from 'express'
import router from './controller/routes.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(router)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})
