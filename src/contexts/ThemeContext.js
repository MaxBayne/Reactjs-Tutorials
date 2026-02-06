
import { createContext } from "react";

//1- Create Context
export const ThemeContext = createContext(
{
  theme: "light",
  toggleTheme: () => {}
}
);

//2- Create Provider
// export function ThemeProvider({ children }) 
// {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => 
//   {
//     setTheme(prev => (prev === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

//3- Wrap Provider With Components that Share Context Data
//<ThemeProvider>
//  <App />
//</ThemeProvider>


//4- Create Consumer inside Component that need to read data from context
 //const { theme, toggleTheme } = useContext(ThemeContext);
 //or
 //const themeContext = useContext(ThemeContext);
 

 //<h1>Current Theme: {theme}</h1>
//<button onClick={toggleTheme}>Toggle Theme</button>

//or

//<h1>Current Theme: {themeContext.theme}</h1>
//<button onClick={themeContext.toggleTheme}>Toggle Theme</button>