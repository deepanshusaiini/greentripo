import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { FaCalendar } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-phone-input-2/lib/bootstrap.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

export default function EnquiryForm() {
    const [isOpen, setIsSopen] = useState(true);
    const [selectedCal, setSelectedCal] = useState("calendar");
    const [dateState, setDateState] = useState(new Date());
    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);
    const people = ["1", "2", "3", "4", "5", "6+", "1", "2", "3", "4", "5", "6+"];
    const [openCal, setOpenCal] = useState(false);

    const toggleDropdown = () => {
        setIsSopen(!isOpen);
    };

    const [enquiryFormData, setEnquiryFormData] = useState({
        name: "",
        email: "",
        phone: "",
        people: "",
        calendar: "",
        enquiry: "",
    });
    const changeDate = (e) => {
        const formatDate = moment(e).format("YYYY/MM/DD");
        setEnquiryFormData((prevData) => ({
            ...prevData,
            calendar: formatDate,
        }));

        console.log({ formatDate, selectedCal });
        // manageCalenderVisibility();
        setOpenCal(false);
    };

    const handleChange = (e) => {
        setEnquiryFormData({ ...enquiryFormData, [e.target.name]: e.target.value });
    };

    const manageCalenderVisibility = () => {
        setOpenCal(!openCal);
        // setSelectedCal(type);
    };

    return (
        <form className="right-form">
            <div
                className={`enquiry-header ${isOpen ? "open" : ""}`}
                onClick={toggleDropdown}
            >
                <h3>ENQUIRY FORM</h3>
            </div>

            {isOpen && (
                <div
                    className={isOpen ? "enquiry-container" : "enquiry-container-height"}
                >
                    {/* <div className="enquiry-container"> */}
                    <>
                        <div>
                            <input
                                className="input1"
                                type="text"
                                placeholder="Full Name*"
                                name="name"
                                value={enquiryFormData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <input
                                className="input1st"
                                type="email"
                                placeholder="Your Email*"
                                name="email"
                                value={enquiryFormData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <PhoneInput
                                className="input-with-line"
                                placeholder="Your Phone*"
                                country={"unitedStates"}
                                enableSearch={true}
                                dropdownStyle={{ outline: "none" }}
                                inputStyle={{
                                    value: "enquiryFormData.phone",
                                    onChange: "handleChange",
                                    type: "text",
                                    position: "relative",
                                    className: "input-with-line input",
                                    display: "flex",
                                    paddingLeft: "140px",
                                    width: "292px",
                                    height: "40px",
                                    marginRight: "70px",
                                    fontSize: "16px",
                                    backgroundColor: "rgb(246, 246, 246)",
                                    borderRadius: "10px",
                                    border: "none",
                                    fontWeight: "400",
                                    color: "gray",
                                }}
                            />
                        </div>

                        <div className="inputpeople">
                            <div
                                className={`dropdown-placehoder ${selected ? "selected" : ""}`}
                                onClick={() => setOpen(!open)}
                            >
                                {selected || "Select Number of People*"}
                            </div>

                            {open && (
                                <div
                                    className="dropdown-list"
                                >
                                    {people.map((num) => (
                                        <div
                                            key={num}
                                            className="dropdown-item"
                                            onClick={() => {
                                                setSelected(num);
                                                setOpen(false);
                                            }}
                                        >
                                            {num}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            dateFormat='yyyy-MM-dd'
                            className="date-input"
                        /> */}

                        {openCal && (
                            <Calendar
                                onChange={changeDate}
                                value={enquiryFormData.calendar}
                                className="enquirycalendar"
                            // className={selectedCal == "enquirycalendar" ? "enquirycalendar" : "return"}
                            />
                        )}

                        <div>
                            <div className="input-wrapper">
                                <input
                                    type="text"
                                    name="calendar"
                                    onClick={() => manageCalenderVisibility("enquirycalendar")}
                                    value={enquiryFormData.calendar}
                                    onChange={handleChange}
                                    className="date-input"
                                // readOnly
                                />
                                <FaCalendar className="calendar-icon" />
                            </div>
                        </div>

                        <div>
                            <textarea
                                className="inputtextarea"
                                type="textarea"
                                placeholder="Your Enquiry..."
                                name="enquiry"
                                value={enquiryFormData.enquiry}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <button className="msg-btn">SEND MESSAGE</button>
                        </div>
                    </>
                    {/* </div> */}
                </div>
            )}
        </form>
    );
}
