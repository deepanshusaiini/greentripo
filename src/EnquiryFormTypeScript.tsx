import { useState, ChangeEvent } from "react";
import PhoneInput from "react-phone-input-2";
import { FaCalendar } from "react-icons/fa";
import Calendar from "react-calendar";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";
import "react-phone-input-2/lib/bootstrap.css";
import "react-calendar/dist/Calendar.css";

interface EnquiryFormType {
  name: string;
  email: string;
  phone: string;
  people: string;
  calendar: string;
  enquiry: string;
}

const EnquiryFormTypeScript = () => {
  const [isOpen, setIsSopen] = useState<boolean>(true);
  const [selectedCal, setSelectedCal] = useState<string>("calendar");
  const [dateState, setDateState] = useState<Date>(new Date());
  const [selected, setSelected] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [openCal, setOpenCal] = useState<boolean>(false);

  const people: string[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6+",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6+",
  ];

  const [enquiryFormData, setEnquiryFormData] = useState<EnquiryFormType>({
    name: "",
    email: "",
    phone: "",
    people: "",
    calendar: "",
    enquiry: "",
  });

  // handle normal input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEnquiryFormData({ ...enquiryFormData, [e.target.name]: e.target.value });
  };

  // handle calendar change
  const changeDate = (value: Date) => {
    const formatted = moment(value).format("YYYY/MM/DD");
    setEnquiryFormData((prev) => ({ ...prev, calendar: formatted }));
    setOpenCal(false);
  };

  const toggleDropdown = () => {
    setIsSopen((prev) => !prev);
  };

  const manageCalenderVisibility = () => {
    setOpenCal((prev) => !prev);
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
          <>
            {/* Name */}
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

            {/* Email */}
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

            {/* Phone */}
            <div>
              <PhoneInput
                // className="input-with-line"
                country={"us"}
                enableSearch={true}
                value={enquiryFormData.phone}
                onChange={(value) =>
                  setEnquiryFormData({ ...enquiryFormData, phone: value })
                }
                inputStyle={{
                  position: "relative",
                  paddingLeft: "140px",
                  width: "292px",
                  height: "40px",
                  fontSize: "16px",
                  backgroundColor: "rgb(246, 246, 246)",
                  borderRadius: "10px",
                  border: "none",
                  fontWeight: "400",
                  color: "gray",
                }}
              />
            </div>

            {/* People Dropdown */}
            <div className="inputpeople">
              <div
                className={`dropdown-placehoder ${selected ? "selected" : ""}`}
                onClick={() => setOpen(!open)}
              >
                {selected || "Select Number of People*"}
              </div>

              {open && (
                <div className="dropdown-list">
                  {people.map((num) => (
                    <div
                      key={num}
                      className="dropdown-item"
                      onClick={() => {
                        setSelected(num);
                        setEnquiryFormData({ ...enquiryFormData, people: num });
                        setOpen(false);
                      }}
                    >
                      {num}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Calendar Component */}
            {openCal && (
              <Calendar
                onChange={(value) => changeDate(value as Date)}
                value={new Date()}
                className="enquirycalendar"
              />
            )}

            {/* Date input */}
            <div>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="calendar"
                  value={enquiryFormData.calendar}
                  onChange={handleChange}
                  onClick={manageCalenderVisibility}
                  className="date-input"
                  readOnly
                />
                <FaCalendar className="calendar-icon" />
              </div>
            </div>

            {/* Enquiry message */}
            <div>
              <textarea
                className="inputtextarea"
                placeholder="Your Enquiry..."
                name="enquiry"
                value={enquiryFormData.enquiry}
                onChange={handleChange}
              />
            </div>

            {/* Submit button */}
            <div>
              <button className="msg-btn">SEND MESSAGE</button>
            </div>
          </>
        </div>
      )}
    </form>
  );
};

export default EnquiryFormTypeScript;
