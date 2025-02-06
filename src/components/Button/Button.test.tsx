import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
    test("renders with correct text", () => {
        const label = "Hello world"
        render(<Button label={label} />);
        const buttonElement = screen.getByText(label);
        expect(buttonElement).toBeDefined();
    });
});
