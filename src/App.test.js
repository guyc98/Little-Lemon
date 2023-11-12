import { fireEvent, getByLabelText, getByRole, getByText, render, screen } from "@testing-library/react";
import BookingForm from "./componets/BookingForm";
import { MemoryRouter } from "react-router-dom";
import { BookingProvider } from "./BookingFormContext";
import { BookingContext } from "./BookingFormContext";
import { useContext } from "react";


describe("BookingForm", () => {
  it('renders the date label to the screen', () => {
    render(
      <MemoryRouter>
        <BookingProvider>
          <BookingForm />
        </BookingProvider>
      </MemoryRouter>);

    const staticText = screen.getByText("Time")
    expect(staticText).toBeInTheDocument()
})

  it('it changes the time selection to closed', () => {
    render (
      <MemoryRouter>
        <BookingProvider>
          <BookingForm />
        </BookingProvider>
      </MemoryRouter>);

    const dateInput = screen.getByLabelText(/Date/);
    fireEvent.click(dateInput);
    fireEvent.change(dateInput, {target: {value: '2023-11-18'}});
    expect(dateInput.value).toBe('2023-11-18');
    const timeInput = screen.getByTestId("Closed");
    expect(timeInput.value).toBe('Closed');
  })
})
