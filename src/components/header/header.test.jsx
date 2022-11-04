import { render, screen } from "@testing-library/react";
import Header from "./header";

test("expect title to be rendered ", () => {
  render(<Header />);
  const header = screen.getByText(/proofpoint/i);
  expect(header).toBeInTheDocument();
});
