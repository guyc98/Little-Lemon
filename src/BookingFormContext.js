import { createContext, useReducer, useState } from "react";
import { fetchAPI, submitAPI } from "./mockAPI";
import { useNavigate } from "react-router-dom";




// THIS FILE IS NOT BEING USED ANYMORE IN THIS PROJECT




export const BookingContext = createContext(undefined)

export const BookingProvider = ({ children }) => {
    const todaysDate = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate()
    const todaysPhysicalDate = new Date().getDate()
    const [date, setDate] = useState(todaysDate)
    const [physicalDate, setPhysicalDate] = useState(todaysPhysicalDate)
    const [data, setData] = useState()

    const navigate = useNavigate()
    const submitForm = (formData) => {
      submitAPI(formData)
        .then(response => response && navigate("/confirmedbooking"))
    }

    const [valid, setValid] = useState(false)

    return (
        <BookingContext.Provider value={{data, setData, date, setDate, submitForm, physicalDate, setPhysicalDate}}>
          {children}
        </BookingContext.Provider>
    )
}