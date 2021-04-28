// hell of an import
import React, { useState, useparams } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import Bids from './Bids'
import Dealer from './CarDealerShip'
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import {items} from './Resources'
import ShowRoom from './ShowRoom'
import MediaCard from './cards'
import {Form} from './form'
import Home from './homeIcon'
import Badge from './cartLogo'
import Search from './search'
import IndividualCar from './IndividualCar'
import LatestBids from './LatestBids'
// end of hell of an import

//Main Ridiculous function which is rendered

const Example = () => {
//Here are some globally thug variables
const [cart , setCart]= useState(0);
const [activeIndex, setActiveIndex] = useState(0);
const [animating, setAnimating] = useState(false);
const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [item, setItem]= useState([]);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const ferrari = items.map((item) => {
    return (
      <CarouselItem 
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      > 
        <h5>{item.caption}</h5>
        <h6>initial-bid: {item.altText}</h6>
        <img src={item.src} alt={item.altText} style={{height:'450px', width:'730px', marginBottom:'2rem', borderRadius:'.5rem'}}/>
        <CarouselCaption/>
      </CarouselItem>
    );
  });
  return (
  <Router>
      <header>
      <div> 

<Navbar color="mixed" light expand="md">
        {/* <Home/> */}
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar >
          <NavItem  style={{backgroundColor:'transparent', padding:'1rem', borderRadius:'.1rem', marginLeft:'0rem',marginTop:'1rem'}}>
            <Link to='/'> <NavLink> <h5>Home</h5> </NavLink></Link>
            </NavItem>
            <NavItem  style={{backgroundColor:'transparent', padding:'1rem', borderRadius:'.1rem', marginLeft:'0rem',marginTop:'1rem'}}>
            <Link to='/latestbids'> <NavLink><h5>Bids Corner</h5></NavLink></Link>
            </NavItem>
            <NavItem  style={{backgroundColor:'transparent', padding:'1rem', borderRadius:'.1rem', marginLeft:'0rem',marginTop:'1rem'}}>
            <Link to='#'><NavLink ><h5>Tuning Garages</h5></NavLink></Link>
            </NavItem>
            <NavItem style={{backgroundColor:'transparent', padding:'1rem', borderRadius:'.1rem', marginLeft:'0rem',marginTop:'1rem'}}>
            <Link to='/cardealership'> <NavLink ><h5>Car Dealership</h5></NavLink></Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar style={{backgroundColor:'transparent', padding:'1rem', borderRadius:'.3rem', marginLeft:'0rem',marginTop:'1rem'}}>
              <DropdownToggle nav caret >
              <h6>Vehicles Tier</h6>
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
        <Badge cart={cart}/>
        <Link to="/Form"><button className='btn' style={{textAlign:'right',marginTop:'1.3rem', backgroundColor:'var(--clr-grey-8)'}}>Sign Up</button></Link>
      </Navbar>

      

    </div>
    </header>

{/* End of NavBar */}
  
    <br></br>
    <Route exact path='/'>
    <h1 style={{fontSize:'60px', color:'naviBlue'}}>Car auction festival</h1><br></br>
    
    <div className='users'>
    {
      ShowRoom.map(car=>{
        return(<MediaCard {...car} setCart={setCart} setItem={setItem} ShowRoom={ShowRoom} item={item}/>)
      })
    }
    </div>
    <Carousel 
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    ><CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex}/>
      {ferrari}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    <footer style={{backgroundColor: "hsl(205, 90%, 76%)", marginBottom:'-1rem', justifyContent:'end'}}>
      <div >
        <h4 style={{color:'black'}}>
          Thanks for your time
        </h4>
        <p>contact us</p>
        <p>fahimismail75.scc@gmail.com</p>
      </div>
    </footer>

   
    

    </Route>
{/* Routes To Navigate */}
    {/*Cart */}
    <Route path='/Cart'>
    <div className='users'>
      
            {
            item.length===0 ? <><h3>cart is empty</h3></>: item.map(car=>{
                return (
                    <MediaCard {...car} />
                )
            })}
        </div>
        {/*form */}
    </Route>
    <Route path='/Form'>
    <Form/>
    </Route>
    {/*Preview page */}
    <Route path='/preview/:id'>
      <IndividualCar />
      </Route>

      <Route path='/latestbids'>
    <LatestBids/>
    </Route>

    {/* Car dealerships */}
    <Route path='/cardealership'>
    <Dealer isOpen={isOpen} cart={cart} setCart={setCart}/>
    </Route>
    </Router>
  );
}

export default Example;