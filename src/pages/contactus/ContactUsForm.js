import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useAlert } from '../../contexts/AlertContext';

const ContactUsForm = () => {
    const form = useRef();
    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const { name, email, message } = contactData;
    const history = useHistory();
    const { addAlert } = useAlert();

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        emailjs.sendForm(
            'service_65z4yud',
            'template_j0kubvk',
            form.current,
            { publicKey: '3qxQqx2weyS11vjrP' }
        ).then(
            () => {
                console.log('Email sent successfully');
            },
            (error) => {
                console.log('Failed to send email:', error.text);
            }
        );

        try {
            const formData = new FormData(form.current);
            await axios.post("/contact/", formData);
            history.push('/');
            addAlert("Thanks for sending us a message! A member of staff will be in touch as soon as possible.", "success");
        } catch (error) {
            console.error('Error submitting form:', error);
            addAlert("Failed to send message. Please check that all boxes have been filled in properly.", "danger");
            if (error.response?.status !== 401) {
                console.error(error.response?.data);
            }
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setContactData({ ...contactData, [name]: value });
    };

    return (
        <div className={appStyles.Content}>
            <h2 className="text-center my-4">Need to contact us? Fill out the details below:</h2>
            <form ref={form} onSubmit={handleFormSubmit}>
                <label>Name </label>
                <input className="col" type="text" name="name" value={name} onChange={handleInputChange} required />
                <label>Email </label>
                <input className="col" type="email" name="email" value={email} onChange={handleInputChange} required />
                <label>Message </label>
                <textarea className="col" name="message" value={message} onChange={handleInputChange} required />
                <input className={`${btnStyles.Button} ${btnStyles.Blue} btn col`} type="submit" value="Send"/>
            </form>
        </div>
    );
};

export default ContactUsForm;