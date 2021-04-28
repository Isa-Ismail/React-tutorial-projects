import React from 'react';
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import Home from './homeIcon'
import Badge from './cartLogo'
import Search from './search'


function Nava({isOpen, cart}) {
    return (
<Navbar color="mix" light expand="md">
        <Home/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem  style={{backgroundColor:'wheat', padding:'1rem', borderRadius:'.3rem', marginLeft:'1rem',marginTop:'1rem'}}>
              <NavLink href="/latestbids">Latest bids</NavLink>
            </NavItem>
            <NavItem  style={{backgroundColor:'wheat', padding:'1rem', borderRadius:'.3rem', marginLeft:'1rem',marginTop:'1rem'}}>
              <NavLink href="/components/">Tuning Garages available</NavLink>
            </NavItem>
            <NavItem style={{backgroundColor:'wheat', padding:'1rem', borderRadius:'.3rem', marginLeft:'1rem',marginTop:'1rem'}}>
              <NavLink href="/cardealership" >Car Dealership</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar style={{backgroundColor:'wheat', padding:'1rem', borderRadius:'.3rem', marginLeft:'1rem',marginTop:'1rem'}}>
              <DropdownToggle nav caret >
                Vehicles Tier
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="https://github.com/reactstrap/reactstrap" onClick={()=>0}>
                  Classic
                </DropdownItem>
                <DropdownItem>
                  Offroad
                </DropdownItem>
                <DropdownItem>
                  SUV
                </DropdownItem>
                <DropdownItem>
                  4X4
                </DropdownItem>
                <DropdownItem>
                  Truck
                </DropdownItem>
                <DropdownItem>
                Convertibles
                </DropdownItem>
                <DropdownItem>
                Muscle car
                </DropdownItem>
                <DropdownItem>
                  HyperCar
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </Nav>
        </Collapse>
        <button className='btn' style={{textAlign:'right', backgroundColor:'green'}}>Sign Up</button>
        <Badge cart={cart}/>
      </Navbar>
    )
}

export default Nava;
