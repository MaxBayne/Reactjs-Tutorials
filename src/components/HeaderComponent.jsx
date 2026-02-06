import logo from '@/assets/react.svg';
import '@/styles/HeaderComponent.css';


export default function HeaderComponent() 
{
    return (
       <header className={"Header"}>
        
        <img src={logo} className={"Header-logo"} alt="logo" />
        
        <h1 className={"Header-Title"}>React App</h1>
        
       </header>
    );
}