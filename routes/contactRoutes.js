const express = require('express');
const router = express.Router();
const { getContact, getContacts, createContact, updateContact, deleteContact } = require('../controllers/contactsController')

//example of normal routes without controllers applied to them. -->

// router.route('/').post(async(req, res) => { 
//     console.log("The body request is: ", req.body);
//     const { name, phone, email } = req.body;

//     if ( !name || !phone || !email ) {
//         res.status(400)
//         throw new Error("All fields are required");
//     }

//     const contact = await Contact.create({
//         name,
//         email,
//         phone
//     })

//     res.status(201).json(contact);
// });

router.route('/').get(getContacts);

router.route('/:id').get(getContact);

router.route('/').post(createContact);

router.route('/:id').delete(deleteContact);

router.route('/:id').put(updateContact);

module.exports = router; 