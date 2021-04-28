import React, { useState } from 'react';
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
import {items, ShowRoom} from './Resources'
import {MediaCard} from './cards'
import {Form} from './form'
import Home from './homeIcon'
import Badge from './cartLogo'
import Search from './search'
const Example = () => {
  const [cart , setCart]= useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
        <a href='lol'><img src={item.src} alt={item.altText} style={{height:'450px', width:'730px', marginBottom:'2rem', borderRadius:'.5rem'}}/></a>
        <CarouselCaption/>
      </CarouselItem>
    );
  });

  return (<section>
    
      <header>
      <div style={{backgroundColor:'white'}}>
      
<Navbar color="mix" light expand="md">
        <Home/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem  style={{backgroundColor:'wheat', padding:'1rem', borderRadius:'.3rem', marginLeft:'1rem',marginTop:'1rem'}}>
              <NavLink href="/components/">Latest bids</NavLink>
            </NavItem>
            <NavItem  style={{backgroundColor:'wheat', padding:'1rem', borderRadius:'.3rem', marginLeft:'1rem',marginTop:'1rem'}}>
              <NavLink>Tuning Garages available</NavLink>
            </NavItem>
            <NavItem style={{backgroundColor:'wheat', padding:'1rem', borderRadius:'.3rem', marginLeft:'1rem',marginTop:'1rem'}}>
              <NavLink href="https://github.com/reactstrap/reactstrap" >Car Dealership</NavLink>
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
    </div>
    </header>
    <br></br>
    <h1 style={{fontSize:'60px'}}>Car auction festival</h1><br></br>
    <div className='users'>
    {ShowRoom.map(car=>
    {
    return <MediaCard {...car} setCart={setCart}  />
    })
    }
    </div>
    <Carousel 
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex}/>
      {ferrari}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    
    <Form/>
    </section>
  );
}

export default Example;