import React, { useEffect, useRef, useState } from "react";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCalendar,
  FaPlaneDeparture,
  FaPlaneArrival,
} from "react-icons/fa";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import "react-dropdown/style.css";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

interface FormProps {
  allData: (data: UserData) => void;
}

interface UserData {
  id?: string;
  from: string;
  to: string;
  departure: string;
  return: string;
  name: string;
  email: string;
  phone: string;
}

const FormTypeScript: React.FC<FormProps> = ({ allData }) => {
  const dateInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    dateInputRef.current?.showPicker?.();
  };

  const [submit, setSubmit] = useState<boolean>(false);
  const [users, setUsers] = useState<any[]>([]);
  const [phone, setPhone] = useState<string>("");

  const [cV1, setCv1] = useState(false);
  const [selectedCal, setSelectedCal] = useState<"departure" | "return">(
    "departure"
  );

  const data = {};
  const handleCheck = () => {
    allData(formData); // calling parent callback
  };

  const [formData, setFormData] = useState<UserData>({
    from: "",
    to: "",
    departure: "",
    return: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const changeDate = (e: Date) => {
    const formatted = moment(e).format("YYYY/MM/DD");
    setFormData({ ...formData, [selectedCal]: formatted });
    setCv1(false);
  };

  const manageCalenderVisibility = (type: "departure" | "return") => {
    setSelectedCal(type);
    setCv1(!cV1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmit(true);

    try {
      const docRef = await addDoc(collection(db, "users"), formData);
      console.log("Document written with ID:", docRef.id);

      // reset
      setFormData({
        from: "",
        to: "",
        departure: "",
        return: "",
        name: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  const getAllUsers = async () => {
    const snap = await getDocs(collection(db, "users"));

    snap.forEach((doc) => {
      console.log("user: ", doc.id, doc.data());
    });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  // ---------- TRIP ----------
  const trip = ["ONE WAY", "ROUND TRIP", "ECONOMIC 1A"];
  const [tripType, setTripType] = useState(trip[0]);

  return (
    <form className="flight-form" onSubmit={handleSubmit}>
      <div className="upper">
        <h2>CALL NOW TO SAVE BIG!</h2>
        <h4>CHECK OUT OUR FARES TO DEALS.</h4>
        <button type="button">+1-805-702-1258</button>
      </div>

      <div className="trip-options">
        {trip.map((item) => (
          <button
            type="button"
            key={item}
            onClick={() => setTripType(item)}
            className={tripType === item ? "tripSelect" : "tripWithoutSelect"}
          >
            {item}
          </button>
        ))}
      </div>

      {/* FROM & TO */}
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
            placeholder="To"
            name="to"
            ref={dateInputRef}
            value={formData.to}
            onChange={handleChange}
          />
          <FaPlaneArrival className="icon" />
        </div>
      </div>

      {/* CALENDAR */}
      {cV1 && (
        <Calendar
          className={selectedCal === "departure" ? "departure" : "return"}
          onChange={(val) => changeDate(val as Date)}
          value={new Date()}
        />
      )}

      {/* DATE ROW */}
      <div className="form-row">
        <div className="input-wrapper">
          <input
            className={`input ${submit && !formData.departure ? "error" : ""}`}
            type="text"
            placeholder="Departure"
            name="departure"
            readOnly
            value={formData.departure}
          />
          <FaCalendar
            onClick={() => manageCalenderVisibility("departure")}
            className="icon"
          />
        </div>

        <div className="input-wrapper">
          <input
            className={`input ${submit && !formData.return ? "error" : ""}`}
            type="text"
            placeholder="Return"
            name="return"
            readOnly
            value={formData.return}
          />
          <FaCalendar
            className="icon"
            onClick={() => manageCalenderVisibility("return")}
          />
        </div>
      </div>

      {/* NAME + EMAIL */}
      <div className="form-row">
        <div className="input-wrapper">
          <input
            className={`input ${submit && !formData.name ? "error" : ""}`}
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
            className={`input ${submit && !formData.email ? "error" : ""}`}
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FaEnvelope className="icon" />
        </div>
      </div>

      {/* PHONE INPUT */}
      <div className="phone-row">
        <PhoneInput
          placeholder="Your Phone"
          country={"in"}
          enableSearch={true}
          value={phone}
          onChange={(val) => {
            setPhone(val);
            setFormData({ ...formData, phone: val });
          }}
          inputStyle={{
            position: "relative",
            display: "flex",
            width: "100%",
            height: "40",
            borderRadius: "3px",
          }}
        />
        <FaPhone className="iconphone" />
      </div>

      <button type="submit" className="orange-btn" onClick={handleCheck}>
        GET FREE QUOTE
      </button>
    </form>
  );
};

export default FormTypeScript;
