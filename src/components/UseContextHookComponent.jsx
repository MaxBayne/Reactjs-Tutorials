import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { ThemeContext } from "../Contexts/ThemeContext";

export default function UseContextHookComponent()
{
    const userContext = useContext(UserContext);
    const themeContext = useContext(ThemeContext);




    return(
        <>

        <u>UserName:</u> {userContext.userName}
        <br/>
        <u>Email:</u> {userContext.email}
        <br/>
        <u>Address:</u> {userContext.address}
        <br/>
        <u>Active Theme</u> {themeContext.theme}
        <br/>
        <button onClick={themeContext.toggleTheme}>Toggle Theme</button>
        
        </>
    );
}