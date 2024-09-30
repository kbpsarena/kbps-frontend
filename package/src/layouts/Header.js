import React from "react";
import { Link } from "react-router-dom";
import Language from "../../src/assets/images/logos/Language.png";
import { getUserMoney } from "../Utils";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import { ReactComponent as LogoWhite } from "../assets/images/logos/xtremelogowhite.svg";
import user1 from "../assets/images/users/user1.jpg";
import './Header.css'
const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  return (
    <div color="unset" className="bg-gradient" dark expand="md" >
    
    <div class="row no-margin col no-padding top_bar fixedElement">
            <div class="col  balance">
                <div class="balance_div">
                    Balance : <span
                        id="user_balance"
                        class="plus  tooltipped"
                        data-position="bottom"
                        data-tooltip="<table>
                        <tr>
                        <td>Free Chip</td>
                        <td>: 0</td>
                        </tr>
                        <tr>
                        <td>PL</td>
                        <td>: 0.95</td>
                        </tr>
                        <tr>
                        <td>Total</td>
                        <td>: 0.95</td>
                        </tr>
                        <tr>
                        <td>Expose</td>
                        <td>: 0.00</td>
                        </tr>
                        <tr>
                        <td>Available Bal.</td>
                        <td>: 0.95</td>
                        </tr>
                        </table>"
                    >{getUserMoney()}</span> PTI
                </div>
                </div>
            
            <div class="col  expose"
                 onclick="document.location.href = 'https://tigerexch.club/client/expose'">
                <div class="expose_div">
                    Exp
                    : <span
                        id="user_expose"
                        class="plus"> 0.00</span>
                </div>
            </div>
        </div>
    
    <Navbar className="FlexBana">
      <div className="global align-items-center">
        <Button
          color="primary"
          className="d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
        <NavbarBrand href="/" className="cdn d-lg-none">
          <LogoWhite />
        </NavbarBrand>
      </div>
      {/* <div className= "LanguageTab">
        Language : 
      </div>
      <div>
      
      <img
                        src={Language}
                        className="LanguageSelect"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
      </div> */}
    </Navbar>
    </div>
    
  );
};

export default Header;
