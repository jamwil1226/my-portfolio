import "./contact.css";
import Phone from "../../images/icons8-cell-phone-50.png";
import Email from "../../images/icons8-email-open-50.png";
import { useRef } from "react";
import emailjs from 'emailjs-com';;

const Contact = () => {
    const formRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();

    emailjs.sendForm(
        'service_n4wrvg4', 
        'template_q5hsnli', 
        formRef.current, 
        'user_AIkwrL1KHx5F4EnmP2mTO'
        )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    ;}


    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Let's discuss your project
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img 
                                src={Phone}
                                alt=""
                                className="c-icon"
                            />
                            (386) 589-0126
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Email} alt="" />
                            jamie@jamiewilliams.tech
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Contact Me</b> I would love an opportunity to answer any questions you have and tell you how I can help make your visions a reality for your business.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
