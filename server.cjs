const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    const { namaDepan, namaBelakang, email, subject, phone, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'willyamlouise4@gmail.com', // Ganti
            pass: 'shwexkxbbhonardx',   // Ganti dengan App Password dari Gmail
        },
        });

        const mailOptions = {
        from: email,
        to: 'willyamlouise4l@gmail.com',
        subject: subject || 'Pesan baru dari kontak form',
        html: `
            <h3>Detail Pesan</h3>
            <p><strong>Nama:</strong> ${namaDepan} ${namaBelakang}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Pesan:</strong><br>${message}</p>
        `,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).send({ success: true, message: 'Email terkirim!' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ success: false, message: 'Gagal mengirim email.' });
    }
    });

    const PORT = 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
