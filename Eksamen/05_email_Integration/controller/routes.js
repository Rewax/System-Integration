import { Router } from "express";
import sendMail from '../services/mailService.js'


const router = Router()

router.post('/send-email', async (req, res) => {
    try {
      const emailBody = req.body; // Assuming the email data is sent in the request body
      const result = await sendMail(emailBody);
      res.status(result.status).json(result);
    } catch (error) {
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });

  export default router;