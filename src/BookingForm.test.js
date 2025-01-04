import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../src/components/BookingForm.js";


test("renders all form elements with correct HTML5 attributes", () => {
    const mockAvailableTimes = { availableTimes: ["12:00 PM", "1:00 PM", "2:00 PM"] };
  
    render(<BookingForm availableTimes={mockAvailableTimes} />);
  
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toBeInTheDocument(); // Ensures the element is in the DOM
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("required");

    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute("required");

    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toBeInTheDocument();
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("required");

    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute("required");
  });

  
  test('form submission triggers submit handler with correct data', () => {
    const mockSubmitHandler = jest.fn();
  
    // Mock dispatch function
    const mockDispatch = jest.fn();
  
    // Render the Booking form component with mock data
    render(<BookingForm 
      availableTimes={{ availableTimes: ['12:00 PM', '12:30 PM'] }} 
      submitForm={mockSubmitHandler} 
      dispatch={mockDispatch} 
    />);
  
    // Simulate filling out the form
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2025-01-02' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '12:00 PM' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });
  
    // Simulate form submission
    const submitButton = screen.getByRole("button", {
      name: /on click/i, // Matches the aria-label of the input
    });
    fireEvent.click(submitButton);
  
    // Check if the submit handler was called with the correct data
    expect(mockSubmitHandler).toHaveBeenCalledWith({
      date: '2025-01-02',
      guests: '4',
      occasion: 'Birthday',
      time: '12:00 PM',
    });
  
    // Check if dispatch was called
    expect(mockDispatch).toHaveBeenCalled();
  });


