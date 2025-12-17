import React, { use, useEffect, useRef, useState } from "react";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCalendar,
  FaPlaneDeparture,
  FaPlaneArrival,
} from "react-icons/fa";

import FormSection from "./FormSection";
import PopUp from "./PopUp";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import { type } from "@testing-library/user-event/dist/type";
import { db } from "./firebase";
import { getFirestore, collection, query, addDoc, getDocs, where, doc } from "firebase/firestore";
import { data } from "react-router-dom";


export default function Form({ items }) {

  const dateInputRef = useRef();
  const handleClick = () => {
    dateInputRef.current.showPicker();
  };

  const [value, setValue] = useState();
  const [dateState, setDateState] = useState(new Date());
  const [submit, setSubmit] = useState(false);
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getAllUsers();
    login()
    fetchDate();

  }, []);

  const loginEmail = "ishisshivam@gmail.com";
  const login = async () => {
    let isUserVerified = false;
    const querySnapShot = await getDocs(collection(db, "users"));
    querySnapShot.forEach((doc) => {
      const allUserEmail = doc.data().email
      if (allUserEmail == loginEmail) {
        isUserVerified = true;
      } else {
        isUserVerified = false;
      }
      console.log('user is able to login or not - -----', isUserVerified)
    });
  };

  const date1st = "2025/10/01"
  const fetchDate = async () => {
    const querySnapShot = await getDocs(collection(db, 'users'))
    console.log('USERS ', querySnapShot)

    const users = []
    querySnapShot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() })
    })
    const newList = users.filter(user => user.return == date1st)
    console.log('NEWLIST IS', newList)
    setUsers(newList)
  }


  const getAllUsers = async () => {
    const querySnapShot = await getDocs(collection(db, "users"));
    querySnapShot.forEach((doc) => {
      console.log(
        "all users- ",
        `${doc.id} => ${JSON.stringify(doc.data().return)}`
      );
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);
    try {
      const docRef = await addDoc(collection(db, "users"), formData);
      setFormData({
        from: "",
        to: "",
        departure: "",
        return: "",
        name: "",
        email: "",
        phone: "",
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const [phone, setPhone] = useState("");
  const [cV1, setCv1] = useState(false);

  const [selectedCal, setSelectedCal] = useState("departure");

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departure: "",
    return: "",
    name: "",
    email: "",
    phone: "",
  });

  const changeDate = (e) => {
    const formatDate = moment(e).format("YYYY/MM/DD");
    setDateState(e); setFormData({
      ...formData, [selectedCal]: formatDate,
    });

    console.log({ formatDate, selectedCal });
    manageCalenderVisibility();
  };

  const manageCalenderVisibility = (type) => {
    setCv1(!cV1);
    setSelectedCal(type);
  };

  const manageCalenderVisibilityOne = (type) => {
    setSelectedCal(type);
    console.log(selectedCal);
    setCv1(!cV1);
  };

  console.log("down", selectedCal);

  const trip = ["ONE WAY", "ROUND TRIP", "ECONOMIC 1A"];
  const [tripType, setTripType] = useState("ONE WAY");

  const handleCheck = () => {
    items(trip[2])
  }

  return (
    <form className="flight-form" onSubmit={handleSubmit}>


      <div className="upper">
        <h2>CALL NOW TO SAVE BIG!</h2>
        <h4>CHECK OUT OUR FARES TO DEALS.</h4>
        <button>+1-805-702-1258 </button>
      </div>
      <div className="trip-options">
        {trip.map((item) => (
          <button
            onClick={() => setTripType(item)}
            className={tripType == item ? "tripSelect" : "tripWithoutSelect"}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="form-row">
        <div className="input-wrapper">
          <input
            className={`input ${submit && !formData.from ? "error" : ""}`}
            type="text"
            placeholder="From"
            name="from"
            value={formData.from}
            onChange={handleChange}
          />
          <FaPlaneDeparture className="icon" />
        </div>

        <div className="input-wrapper">
          <input
            className={`input ${submit && !formData.to ? "error" : ""}`}
            type="text"
            ref={dateInputRef}
            placeholder="To"
            name="to"
            value={formData.to}
            onChange={handleChange}
          />

          <FaPlaneArrival className="icon" />
        </div>
      </div>

      {
        cV1 && (
          <Calendar
            className={selectedCal == "departure" ? "departure" : "return"}
            onChange={changeDate}
            value={formData.departure}
          />
        )
      }

      <div className="form-row">
        <div className="input-wrapper">
          <input
            className={`input ${submit && !formData.departure ? "error" : ""} `}
            type="text"
            placeholder="departure"
            name="departure"
            readOnly
            value={formData.departure}
            onChange={handleChange}
          />
          <FaCalendar
            onClick={() => manageCalenderVisibility("departure")}
            className="icon"
          />
        </div>

        <div className="input-wrapper">
          <input
            //  className={formData?.return===''?"red":'normal'}
            className={`input ${submit && !formData.return ? "error" : ""} `}
            type="text"
            placeholder="returnDate"
            name="returnDate"
            value={formData.return}
            onChange={handleChange}
            readOnly
          />
          <FaCalendar
            className="icon"
            onClick={() => manageCalenderVisibilityOne("return")}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="input-wrapper">
          <input
            //  className={formData?.name===''?"red":'normal'}
            className={`input ${submit && !formData.name ? "error" : ""} `}
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <FaUser className="icon" />
        </div>

        <div className="input-wrapper">
          <input
            className={`input ${submit && !formData.email ? "error" : ""} `}
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FaEnvelope className="icon" />
        </div>
      </div>

      <div className="phone-row">
        <div
          className={`phone-row ${submit && !formData.phone ? "phone-row-error" : ""
            } `}
        >
          <PhoneInput
            placeholder="Your Phone"
            country={"in"}
            enableSearch={true}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            inputStyle={{
              position: "relative",
              display: "flex",
              width: "100%",
              height: '40',
              borderRadius: "3px",
            }}
            //  className={`input ${ submit && !formData.phone ? 'phone-row-error' : 'phone-row' } `}
            dropdownStyle={{
              background: "blue",
              color: "pink",
              fontFamily: "monospace",
              fontSize: "18px",
            }}
            buttonStyle={{ background: "white" }}
            containerStyle={{ border: "1px solid #ddd" }}
            searchStyle={{ font: "inherit", fontFamily: "cursive" }}
            inputProps={{ name: "phone", required: true }}
            disableDropdown={false}
            disableCountryCode={false}
            containerClass=""
            buttonClass=""
            inputClass=""
            searchClass=""
            dropdownClass=""
            // masks={{us:'(...)...-....',in:'.....-.....'}}
            enableAreaCodes={true}
            // excludeCountries={["in", "pk"]}
            localization={{ us: "ukrane", in: "Bharat" }}
          //imagePath='/flags'
          />
          <FaPhone className="iconphone" />
        </div>
      </div>

      <button onClick={() => handleCheck()} onSubmit={handleSubmit} type="submit" className="orange-btn">
        GET FREE QUOTE
      </button>

    </form >
  );
}
