import express from 'express'

const router = express.Router();

const url = "https://fiotext.com/"

router.get('/', req, res) =>{
    res.send(' Welcome to the SMS email Auth Tutorial!');
}

router.post('/send-sms', (req, res) =>{
    
})