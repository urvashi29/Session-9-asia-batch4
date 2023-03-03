import GetData from "./GetData";
import { render, waitFor, screen } from "@testing-library/react";

describe("testing api data", () => {
  it("expected data", async () => {
    render(<GetData />);

    await waitFor(() => {
      expect(screen.getByText("Velma")).toBeInTheDocument();
    });
  });
});


