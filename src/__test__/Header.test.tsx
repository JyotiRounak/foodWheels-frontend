
import { render, screen } from "@testing-library/react";
import Header  from "@components/Header";
import { MemoryRouter } from "react-router";
import { ThemeProvider } from "@utils/ThemeContext";
import { Provider } from "react-redux";
import store from "store/store";

describe("Header Component", ()=>{
    it("should render the header component", ()=> {
        render(
    <Provider store={store}>
    <MemoryRouter>
    <ThemeProvider>
    <Header/>
    </ThemeProvider>
    </MemoryRouter>
    </Provider>
     );

   const heading = screen.getByText(/FoodWheels/i);
   expect(heading).toBeInTheDocument();
});
 it("should have navigation links", ()=>{
     render(
    <Provider store={store}>
    <MemoryRouter>
    <ThemeProvider>
    <Header/>
    </ThemeProvider>
    </MemoryRouter>
    </Provider>
     );
    expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Products")).toBeInTheDocument();
  expect(screen.getByText("Contact")).toBeInTheDocument();
  expect(screen.getByText("User")).toBeInTheDocument();
  expect(screen.getByText("Grocery")).toBeInTheDocument();
  expect(screen.getByText("Login")).toBeInTheDocument();
    });
});
