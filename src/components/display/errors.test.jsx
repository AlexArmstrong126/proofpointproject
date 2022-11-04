import { render, screen } from "@testing-library/react";
import Errors from "./errors";

// Test to see if the screen renders with the correct inital phrase
it("should display a promt to enter a phrase rather than displaying number of errors", () => {
  render(<Errors errorList={[]} />);
  const errorsStart = screen.getByText(/Please Enter a Phrase/i);
  expect(errorsStart).toBeInTheDocument();
});
