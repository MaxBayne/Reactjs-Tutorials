import '@/styles/SideMenusComponent.css'
import SideMenuItemComponent from './SideMenuItemComponent.jsx'

export default function SideMenusComponent() 
{    return (
        <div className="SideMenus">
            <SideMenuItemComponent title="Home" url="/" >
                <span className="side-menu__item-icon">Home</span>
            </SideMenuItemComponent>

            <SideMenuItemComponent title="Css" url="/css" >
                <span className="side-menu__item-icon">Css</span>
            </SideMenuItemComponent>
            
            <SideMenuItemComponent title="Javascript" url="/javascript" >
                <span className="side-menu__item-icon">Javascript</span>
            </SideMenuItemComponent>
            
            <SideMenuItemComponent title="Products" url="/products" >
                <span className="side-menu__item-icon">Products</span>
            </SideMenuItemComponent>

            <SideMenuItemComponent title="useState" url="/useState" >
                <span className="side-menu__item-icon">UseState</span>
            </SideMenuItemComponent>

            <SideMenuItemComponent title="useStateWithArrays" url="/useStateWithArrays" >
                <span className="side-menu__item-icon">UseState With Arrays</span>
            </SideMenuItemComponent>

            <SideMenuItemComponent title="useStateWithForms" url="/useStateWithForms" >
                <span className="side-menu__item-icon">UseState With Forms</span>
            </SideMenuItemComponent>

            <SideMenuItemComponent title="useStateWithFormsExampleLoanForm" url="/useStateWithFormsLoanForm" >
                <span className="side-menu__item-icon">UseState With Forms (Loan)</span>
            </SideMenuItemComponent>

            <SideMenuItemComponent title="useContext" url="/useContext" >
                <span className="side-menu__item-icon">UseContext</span>
            </SideMenuItemComponent>
        </div>
    );
}