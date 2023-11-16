import { fireEvent, getByLabelText, getByRole, getByText, queryByText, render, screen, waitFor } from "@testing-library/react";
import BookingForm from "./componets/BookingForm";
import { MemoryRouter, createBrowserRouter, createMemoryRouter } from "react-router-dom";
import { BookingProvider } from "./BookingFormContext";
import { BookingContext } from "./BookingFormContext";
import { useContext } from "react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { date } from "yup";
import { wait } from "@testing-library/user-event/dist/utils";
import ConfirmedBooking from "./componets/ConfirmedBooking";


describe("BookingForm", () => {
  it('renders the date label to the screen', () => {
    render(
      <MemoryRouter>
        <BookingForm />
      </MemoryRouter>
    )

    const staticText = screen.getByText("Date *")
    expect(staticText).toBeInTheDocument()
  })

  it('it changes the time selection to show a length of 4', async () => {
    render (
      <MemoryRouter>
        <BookingForm />
      </MemoryRouter>);
    const dateInput = screen.getByTestId("date")
    const timeInput = screen.getByTestId("time")
    await act(() => {
      fireEvent.change(dateInput, {target: {value: "2023-11-14"}})
    });
    await waitFor(() => expect(screen.getByRole('option', {name: "16:00"})),{timeout: 1050})
    expect(timeInput.length).toBe(4)
  })

  it('it shows required on the screen when you click on and off of the time input without choosing a time and then removes it when you choose a time', async() => {
    render (
      <MemoryRouter>
        <BookingForm />
      </MemoryRouter>);

      // different values
      const timeInput = screen.getByTestId("time");
      const timeError = screen.getByTestId("time_error")
      const dateInput = screen.getByTestId("date");
      
      act(() => {
        // chooses a date so we can recieve a new list of times from api
        fireEvent.click(dateInput)
        fireEvent.change(dateInput, {target: {value: "2023-11-14"}});
      })
      // checks default time value is displayed
      expect(timeInput).toHaveDisplayValue("Select A Time");

      await act(() => {
        // focuses and blurs the time selection input without selecting a time to cause an error to show
        timeInput.focus()
        timeInput.blur()
      })
      expect(timeError).toBeVisible()
      await waitFor(() => expect(screen.getByRole('option', {name: "16:00"})),{timeout: 1050})
      act(() => {
        // selects a time
        fireEvent.click(timeInput)
        fireEvent.change(timeInput, {target: {value: "16:00"}})
      })
      expect(timeInput).toHaveDisplayValue("16:00")
      expect(timeError).not.toBeVisible()
  })

  it('it shows required on the screen when you click on and off of the occasion input without choosing an occasion and then removes it when you choose an occasion', async() => {
    render (
      <MemoryRouter>
        <BookingForm />
      </MemoryRouter>);

      // different values
      const occasionInput = screen.getByTestId("occasion");
      const occasionError = screen.getByTestId("occasion_error");

      // checks default occasion value is displayed
      expect(occasionInput).toHaveDisplayValue("Select An Occasion");
      act(() => {
        // focuses and blurs the occasion selection input without selecting an occasion to cause an error to show
        occasionInput.focus()
        occasionInput.blur()
      })
      expect(occasionError).toBeVisible()

      act(() => {
        // selects an occasion
        fireEvent.click(occasionInput)
        fireEvent.change(occasionInput, {target: {value: "birthday"}})
      })
      // checks if the selected time is displayed on the time input section
      expect(occasionInput).toHaveDisplayValue("Birthday")
      // removes the error from the screen
      expect(occasionError).not.toBeVisible()
  })

  it('it see if the button is disabled when not all values are selected and then when all everything is selected it checks if the button is enabled so the button can be pressed to confirm booking', async() => {
    render (
      <MemoryRouter>
        <BookingForm />
      </MemoryRouter>);

      // different values
      const dateInput = screen.getByTestId("date")
      const timeInput = screen.getByTestId("time")
      const guestsInput = screen.getByTestId("guests")
      const occasionInput = screen.getByTestId("occasion");
      const button = screen.getByTestId("button")

      //checks if the button is disabled by default
      expect(button).toBeDisabled()

      await act(() => {
        // chooses a date so we can recieve a new list of times from api
        fireEvent.click(dateInput)
        fireEvent.change(dateInput, {target: {value: "2023-11-14"}});
        dateInput.blur()
      })
      expect(dateInput).toHaveValue("2023-11-14")
      expect(button).toBeDisabled()
      await waitFor(() => expect(screen.getByRole('option', {name: "16:00"})),{timeout: 1050})

      act(() => {
        fireEvent.click(timeInput)
        fireEvent.change(timeInput, {target: {value: "16:00"}})
        timeInput.blur()
      })
      expect(timeInput).toHaveDisplayValue("16:00")
      expect(button).toBeDisabled()

      expect(guestsInput).not.toBeChecked()
      act(() => {
        fireEvent.click(guestsInput);
      })
      expect(guestsInput).toBeChecked()
      expect(guestsInput.value).toBe('2')
      expect(button).toBeDisabled()

      act(() => {
        // selects an occasion
        fireEvent.click(occasionInput)
        fireEvent.change(occasionInput, {target: {value: "birthday"}})
        occasionInput.blur()
      })
      // checks if the selected time is displayed on the time input section
      expect(occasionInput).toHaveDisplayValue("Birthday")
      expect(button).toBeDisabled()

      expect(button).not.toBeDisabled
  })
})
