import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./input";

it("should render a button with the id of submitBtn", () => {
  render(<Input />);
  const primaryButton = screen.getByRole("button", { id: /submitBtn/i });
});
