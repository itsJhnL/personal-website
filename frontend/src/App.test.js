import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders homepage content", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  const sectionTitle = screen.getByText(/Recent Projects/i);
  expect(sectionTitle).toBeInTheDocument();
});
