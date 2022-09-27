import { render, screen } from "@testing-library/react";
import PrintDetailedData from "./PrintDetailedData";

describe("PrintDetailedData component", () => {
  let DataElement;
  beforeEach(() => {
    render(<PrintDetailedData show={true} />);
    DataElement = screen.findByRole("table");
  });
  test("Get Data Table", () => {
    expect(DataElement).toBeVisible;
  });
});
