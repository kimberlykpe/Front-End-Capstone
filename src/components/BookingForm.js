<<<<<<< HEAD
import * as React from "react";
import {useState} from "react"; 
import {validateEmail} from "../utils"; 
 
const PasswordErrorMessage = () => { 
 return ( 
   <p className="FieldError">Password should have at least 8 characters</p> 
 ); 
}; 
 
function BookingForm() { 
 const [firstName, setFirstName] = useState(""); 
 const [lastName, setLastName] = useState(""); 
 const [email, setEmail] = useState(""); 
 const [password, setPassword] = useState({ 
   value: "", 
   isTouched: false, 
 }); 
 const [role, setRole] = useState("role"); 

 const getIsFormValid = () => { 
   return ( 
     firstName && 
     validateEmail(email) && 
     password.value.length >= 8 && 
     role !== "role" 
   ); 
 }; 
 
 const clearForm = () => { 
   setFirstName(""); 
   setLastName(""); 
   setEmail(""); 
   setPassword({ 
     value: "", 
     isTouched: false, 
   }); 
   setRole("role"); 
 }; 
 
 const handleSubmit = (e) => { 
   e.preventDefault(); 
   alert("Thanks for making a reservation!"); 
   clearForm(); 
 }; 
 
 return ( 
   <div className="App"> 
     <form onSubmit={handleSubmit}> 
       <fieldset> 
         <h2>Sign Up</h2> 
         <div className="Field"> 
           <label> 
             First name <sup>*</sup> 
           </label> 
           <input 
             value={firstName} 
             onChange={(e) => { 
               setFirstName(e.target.value); 
             }} 
             placeholder="First name" 
           /> 
         </div> 
         <div className="Field"> 
           <label>Last name</label> 
           <input 
             value={lastName} 
             onChange={(e) => { 
               setLastName(e.target.value); 
             }} 
             placeholder="Last name" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Email address <sup>*</sup> 
           </label> 
           <input 
             value={email} 
             onChange={(e) => { 
               setEmail(e.target.value); 
             }} 
             placeholder="Email address" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Password <sup>*</sup> 
           </label> 
           <input 
             value={password.value} 
             type="password" 
             onChange={(e) => { 
               setPassword({ ...password, value: e.target.value }); 
             }} 
             onBlur={() => { 
               setPassword({ ...password, isTouched: true }); 
             }} 
             placeholder="Password" 
           /> 
           {password.isTouched && password.value.length < 8 ? ( 
             <PasswordErrorMessage /> 
           ) : null} 
         </div> 
         <div className="Field">
         <label for="res-date">Choose date</label>
        <input type="date" id="res-date"></input>
         </div>
         <div className="Field">
         <label for="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests"></input>
        </div>
         <div className="Field"> 
           <label> 
             Occassion <sup>*</sup> 
           </label> 
           <select value={role} onChange={(e) => setRole(e.target.value)}> 
             <option value="bday">Birthday</option> 
             <option value="anni">Anniversary</option> 
           </select> 
         </div> 
         <div className="Field"> 
           <label> 
             Time <sup>*</sup> 
           </label> 
           <select value={role} onChange={(e) => setRole(e.target.value)}> 
             <option value="four_pm">16:00</option> 
             <option value="five_pm">17:00</option> 
             <option value="six_pm">18:00</option> 
           </select> 
         </div> 
         <button type="submit" disabled={!getIsFormValid()}> 
           Reservation 
         </button> 
       </fieldset> 
     </form> 
   </div> 
 ); 
} 

export default BookingForm; 
=======
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/booking.css";

const BookingForm = ({
  bookingData,
  setBookingData,
  availableTimes,
  setAvailableTimes,
  submitForm,
}) => {
  const [error, setError] = useState({
    date: null,
    time: null,
    guests: null,
    occasion: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    validateForm();
    console.log(bookingData);
  }, [bookingData, error]);

  const validateForm = () => {
    const { date, guests, occasion, time } = bookingData;
    const updatedError = { ...error };

    if (date === "") {
      updatedError.date = "Must select a date";
    } else if (!isValidDate(date)) {
      updatedError.date = `Sorry! Reservations not available for this date!`;
    } else {
      updatedError.date = null;
    }

    if (guests < 1) {
      updatedError.guests = "Has to be at least 1 guest";
    } else if (guests > 10) {
      updatedError.guests = "Cannot seat more then 10";
    } else {
      updatedError.guests = null;
    }

    if (time === null) {
      updatedError.time = "Must select a time";
    } else {
      updatedError.time = null;
    }

    if (occasion === null) {
      updatedError.occasion = "Must select an occasion";
    } else {
      updatedError.occasion = null;
    }

    setError(updatedError);
  };

  const isValidDate = (dateString) => {
    const yyyymmdd = dateString.split("-");
    const dateObj = new Date(
      parseInt(yyyymmdd[0]),
      parseInt(yyyymmdd[1]) - 1,
      parseInt(yyyymmdd[2])
    );

    if (dateObj <= new Date()) return false;
    return true;
  };
  const handleBlur = () => {
    validateForm();
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setBookingData((prevState) => ({ ...prevState, [id]: value }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitForm() === true) {
      console.log("success");
      navigate("/confirmation");
    } else {
      alert("Error");
    }
  };

  const [items, setItems] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const AvailableTimes = () => {
    const items = JSON.parse(localStorage.getItem("bookings"));

    if (items.date !== bookingData.date) {
      return availableTimes.times.map((time) => {
        return <option key={time}>{time}</option>;
      });
    } else {
      const bookedTimes = items
        .filter((item) => item.date === bookingData.date)
        .map((item) => item.time);
      return availableTimes.times
        .filter((time) => !bookedTimes.includes(time))
        .map((time) => {
          return <option key={time}>{time}</option>;
        });
    }
  };

  return (
    <>
      <h1>Book Table Now</h1>
      <div className="booking-wrapper">
        <form
          data-testid="booking-form"
          className="booking"
          onSubmit={handleSubmit}
        >
          <label htmlFor="res-date">Choose date</label>
          <input
            data-testid="date"
            id="date"
            required
            value={bookingData.date}
            onBlur={handleBlur}
            onChange={handleChange}
            type="date"
          />
          <span className="error">{error.date}</span>
          <label htmlFor="res-time">Choose time</label>
          <div data-testid="res-time">
            <select
              data-testid="time"
              id="time"
              required
              value={bookingData.time}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option></option>
              <AvailableTimes />
            </select>
          </div>
          <span className="error">{error.time}</span>
          <label htmlFor="guests">Guests</label>
          <input
            data-testid="guests"
            required
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={bookingData.guests}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <span className="error">{error.guests}</span>

          <label htmlFor="occasion">Occasion</label>
          <div data-testid="res-occasion">
            <select
              data-testid="occasion"
              id="occasion"
              required
              value={bookingData.occasion}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option></option>
              <option>None</option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>
          <span className="error">{error.occasion}</span>
          <button
            onclick={validateForm}
            data-testid="submit"
            id="submitButton"
            type="submit"
          >
            "Make Your Reservation"
          </button>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
>>>>>>> 8f901badcd18d28308b733e153db9b23dcec8482
