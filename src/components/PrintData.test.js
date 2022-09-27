import { render, screen } from "@testing-library/react";
import PrintData from "./PrintData";

describe("PrintData component", () => {
  let idElement;
  beforeEach(() => {
    render(<PrintData />);
    idElement = screen.findByRole("table");
  });
  test("Get Data Table", () => {
    expect(idElement).toBeVisible;
  });
});
