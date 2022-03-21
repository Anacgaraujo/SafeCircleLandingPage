import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from "reactstrap";
  import { useTranslation } from 'react-i18next';

  import LanguageSwitcher from './LanguageSwitcher/index';
  import logo from '../images/newLogo.png';




  const Topbar = props => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    
    const { t } = useTranslation();
  
    return (
      <div>
        <Navbar color="none" light expand="md">
          <NavbarBrand className="navbar-brand" href="#">
          <img src={logo} height={30} width={130} style={{borderRadius: "40%"}} alt="Safe Circle logo"/>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
             <Nav className="justify-content-center" style={{ flex: 1}}>
              {/* <NavItem > 
                <NavLink href="/components/" className='text-muted'>{t('description.nav1')}</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="/components/" className='text-muted'>{t('description.nav2')}</NavLink>
              </NavItem> */}
            </Nav> 
            
            <div className="btn-group pull-right" role="group" >
              <LanguageSwitcher />
            </div>
          </Collapse>
        </Navbar>
      </div>
    );
  };
  
  export default Topbar;

