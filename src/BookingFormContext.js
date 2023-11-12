import { Children, createContext, useReducer } from "react";

export const BookingContext = createContext(undefined)

export const BookingProvider = ({ children }) => {
    const reducer = (state, action) => {
        let times = []
        switch (action.type) {
          case 0:
            times = ["5:00pm", "5:30pm", "6:00pm", "6:30pm", "7:00pm", "7:30pm", "8:00pm", "8:30pm", "9:00pm" , "9:30pm" , "10:00pm"];
            return times;
          case 1:
            times = ["5:00pm", "5:30pm", "6:00pm", "6:30pm", "7:00pm", "7:30pm", "8:00pm", "8:30pm", "9:00pm" , "9:30pm" , "10:00pm"];
            return times;
          case 2:
            times = ["5:00pm", "5:30pm", "6:00pm", "6:30pm", "7:00pm", "7:30pm", "8:00pm", "8:30pm", "9:00pm" , "9:30pm" , "10:00pm"];
            return times;
          case 3:
            times = ["5:00pm", "5:30pm", "6:00pm", "6:30pm", "7:00pm", "7:30pm", "8:00pm", "8:30pm", "9:00pm" , "9:30pm" , "10:00pm"];
            return times;
          case 4:
            times = ["5:00pm", "5:30pm", "6:00pm", "6:30pm", "7:00pm", "7:30pm", "8:00pm", "8:30pm", "9:00pm" , "9:30pm" , "10:00pm", "10:30pm", "11:00pm"];
            return times;
          case 5:
            times = ["Closed"]
            return times;
          case 6:
            times = ["Closed"]
            return times;
          default:
            return state
        }
        }

    const initialstate = ["5:00pm", "5:30pm", "6:00pm", "6:30pm", "7:00pm", "7:30pm", "8:00pm", "8:30pm", "9:00pm" , "9:30pm" , "10:00pm"];
    const [state, dispatch] = useReducer(reducer, initialstate);

    return (
        <BookingContext.Provider value={{state, dispatch}}>
          {children}
        </BookingContext.Provider>
    )
}