import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUsForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_65z4yud',
                'template_j0kubvk',
                form.current,
                {publicKey: '3qxQqx2weyS11vjrP'},
            )
            .then(
                () => {
                console.log('Success');
                },
                (error) => {
                console.log('Failed...', error.text);
                },
            );
    };

    return (
        <div>
        <h2>Contact Us</h2>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default ContactUsForm;