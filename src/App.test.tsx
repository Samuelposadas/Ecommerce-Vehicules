import React from "react";
import { describe, expect, it } from "vitest";
import App from "./App";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("App should be rendered and working", () => {
    render(<App />);
    expect(screen.getByText("hola"));
  });
});
