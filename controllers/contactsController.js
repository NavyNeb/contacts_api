const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModels')

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) =>{
    const contacts = await Contact.find()
    res.status(200).json(contacts);
});

//@desc Get all contacts
//@route GET /api/contacts:id
//@access public
const getContact = asyncHandler(async (req, res) =>{
    const contact = Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error(`Couldn't find contact at id: ${req.params.id}`)
    }

    res.status(200).json(contact);
});

//@desc Create a contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => { 
    console.log("The body request is: ", req.body);
    const { name, phone, email } = req.body;

    if ( !name || !phone || !email ) {
        res.status(400)
        throw new Error("All fields are required");
    }

    const contact = await Contact.create({
        name,
        email,
        phone
    })

    res.status(201).json(contact);
});

//@desc Update contact
//@route PUT /api/contacts:i
//@access public
const updateContact = asyncHandler(async (req, res) =>{
    const contact = Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error(`Couldn't find contact at id: ${req.params.id}`)
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )

    res.status(200).json(updatedContact);
});

//@desc Delete contact
//@route DELETE /api/contacts/id
//@access public
const deleteContact = asyncHandler(async (req, res) =>{
    const contact = Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error(`Couldn't find contact at id: ${req.params.id}`)
    }

    const deletedContact = await Contact.remove()

    res.status(200).json(deletedContact);
});

module.exports = {
    getContact,
    getContacts,
    createContact,
    updateContact,
    deleteContact
}