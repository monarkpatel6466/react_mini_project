import { useState } from "react";
import {useFormStatus} from "react-dom";

export default function Contact(){

    const [name,setName] = useState("");
    const [nameErr,setNameErr] = useState('');

    const [email,setEmail] = useState("");
    const [emailErr,setEmailErr] = useState('');

    const [successMsg, setSuccessMsg] = useState();
    const [pending,setPending] = useState(false);

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleName = (e) => {
        if(!e.target.value.length){
            setNameErr("Please enter name");
        }else{
            setNameErr();
            setName(e.target.value);
        }
    }

    const handleEmail = (e) => {
        
        if(!emailRegex.test(e.target.value)){
            setEmailErr("Please enter Valid email address");
        }else{
            setEmailErr();
            setEmail(e.target.value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        let hasError = false;

        if (!name.trim()) {
            setNameErr("Please enter name");
            hasError = true;
        }

        if (!email.trim() || !emailRegex.test(email)) {
            setEmailErr("Please enter Valid email address");
            hasError = true;
        }

        if (hasError) return;

        setPending(true);

        await new Promise((resolve) =>
          setTimeout(() => {

            if (!nameErr && !emailErr) {
              setSuccessMsg("Thank You, We will get back to you soon.");
            } else {
              setSuccessMsg("");
            }

            setPending(false);

            resolve();

          }, 2000)
        );
    };
      

    return(
        <div className="contact-page">
            <div className="container">
                <div className="contact-content-wrapper">
                    <h1>Contact us</h1>
                    <br/><br/>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="field-wrapper">
                            <input className={nameErr?'error':''} type="text" onChange={handleName} name="name" placeholder="Enter name" />
                            <span className="error-message">{nameErr && nameErr}</span>
                        </div>
                        <div className="field-wrapper">
                            <input className={emailErr?'error':''} type="text" onChange={handleEmail} name="email" placeholder="Enter email address" />
                            <span className="error-message">{emailErr && emailErr}</span>
                        </div>
                        <div className="field-wrapper">
                            <textarea name="message" placeholder="Enter message..."></textarea>
                        </div>
                        <div className="field-wrapper">
                            <button className="primary-btn" disabled={pending}>{pending?'Submitting...':'Submit'}</button>
                            <span className="success-message">{successMsg && successMsg}</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}