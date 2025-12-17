import { useEffect, useState } from "react";
import { MdMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useLocation } from "react-router-dom";
import PhoneInput from "react-phone-input-2";

export default function ContactForm({ call }) {
    const handleChange = (e) => {
        // setInput(e)
        setContactFormData({ ...contactFormData, [e.target.name]: e.target.value });
    };

    const [contactFormData, setContactFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const doc = await addDoc(collection(db, "messages"), contactFormData);
            setContactFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
            console.log(" ID: ", doc.id);
        } catch (error) {
            console.error("Error: ", error);
        }
    };

    useEffect(() => {
        const getMessages = async () => {
            const getShot = await getDocs(collection(db, "messages"));
            getShot.forEach((doc) => {
                // console.log(
                // "all messages- ",
                // (doc.data().email)
                // );
            });
        };
        getMessages();
        allData();
    }, []);

    const email = "ronysaini207@gmail.com";
    const allData = async () => {
        const allMessages = await getDocs(collection(db, "messages"));
        allMessages.forEach((doc) => {
            const allEmail = doc.data().email;
            if (allEmail == email) {
                // console.log('ALL DATA ', doc.data());
            }
        });
    };

    const onSendMessage = () => {
        call(contactFormData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="contact-section">
                <div className="contact-info">
                    <h2 className="contact-title">CONTACT US</h2>
                    <h1 className="contact-heading">Get In Touch With Us</h1>
                    <p className="address">
                        <strong>ADDRESS : </strong>Almar International Limited
                        <br />
                        Unit-S, 1/F Mau Lam Commercial Building, 16-18 Mau Lam Street,
                        Jordan, Kowloon, Hong Kong (Zip Code: 999077)
                    </p>

                    <div className="query">
                        <FaPhone className="phone" />
                        <div className="parent">
                            <strong className="phone-i">PHONE:</strong>
                            <br />
                            <p className="phone-p">+1-805-702-1258 (U.S.A.)</p>
                            <br />
                        </div>
                    </div>

                    <div className="query-one">
                        <MdMailOutline className="email" />
                        <div className="parent-one">
                            <strong className="email-i">EMAIL:</strong>
                            <br />
                            <p className="email-p">customercare@Greentripo.com</p>
                            {/* </div> */}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="contact-right">
                        <div className="contact-form">
                            <div className="input-group">
                                <input
                                    className="input-one"
                                    type="text"
                                    placeholder="Full Name*"
                                    name="name"
                                    value={contactFormData.name}
                                    onChange={(e) =>
                                        setContactFormData({
                                            ...contactFormData,
                                            name: e.target.value,
                                        })
                                    }
                                ></input>
                            </div>

                            <div className="input-group">
                                <input
                                    className="input-two"
                                    type="email"
                                    placeholder="Your Email*"
                                    name="email"
                                    value={contactFormData.email}
                                    onChange={(e) =>
                                        setContactFormData({
                                            ...contactFormData,
                                            email: e.target.value,
                                        })
                                    }
                                ></input>
                            </div>
                            <div className="input-group">
                                <input
                                    className="input-three"
                                    type="tel"
                                    placeholder="Your Phone*"
                                    name="phone"
                                    value={contactFormData.phone}
                                    onChange={(e) =>
                                        setContactFormData({
                                            ...contactFormData,
                                            phone: e.target.value,
                                        })
                                    }
                                ></input>
                            </div>

                            {/* <div>
                                <PhoneInput
                                    className='input-with-line'
                                    placeholder="Your Phone*"
                                    country={"unitedStates"}
                                    enableSearch={true}
                                    dropdownStyle={{ outline: 'none' }}
                                    inputStyle={{

                                        value: 'enquiryFormData.phone',
                                        onChange: 'handleChange',
                                        type: 'text',
                                        position: "relative",
                                        className: 'input-three',
                                        display: "flex",
                                        paddingLeft: '140px',
                                        width: "312px",
                                        height: '45px',
                                        marginRight: '70px',
                                        borderRadius: "3px",
                                        fontSize: '16px',
                                        backgroundColor: 'rgb(246, 246, 246)',
                                        borderRadius: '15px',
                                        border: 'none',
                                        fontWeight: '800',
                                        color: 'gray'
                                    }}
                                />
                            </div> */}

                            <div className="input-group">
                                <input
                                    className="input-four"
                                    type="text"
                                    placeholder="Subject*"
                                    name="subject"
                                    // value={contactFormData.subject}
                                    onChange={(e) =>
                                        setContactFormData({
                                            ...contactFormData,
                                            subject: e.target.value,
                                        })
                                    }
                                ></input>
                            </div>
                        </div>
                        <div className="textarea-group">
                            <textarea
                                placeholder="Your Message..."
                                className="text"
                                name="message"
                                value={contactFormData.message}
                                onChange={(e) =>
                                    setContactFormData({
                                        ...contactFormData,
                                        message: e.target.value,
                                    })
                                }
                            ></textarea>
                            <div>
                                <button onClick={onSendMessage} className="send-btn">
                                    SEND MESSAGE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form >
    );
}
