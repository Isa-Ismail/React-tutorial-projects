// hell of an import
import React, { useState } from 'react';
import {
Carousel,
CarouselItem,
CarouselControl,
CarouselIndicators,
CarouselCaption
} from 'reactstrap';
import Dealer from './CarDealerShip'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import {items} from './Resources'
import ShowRoom from './ShowRoom'
import MediaCard from './cards'
import {Form} from './form'
import IndividualCar from './IndividualCar'
import LatestBids from './LatestBids'
import Drawer from './dashboard'
import For from './MaterialForm'
import QueryCar from './QueryCar';
// end of hell of an import

//Main Ridiculous function which is rendered

const Example = () => {
//Here are some globally thug variables
const [cart , setCart]= useState(0);
const [activeIndex, setActiveIndex] = useState(0);
const [animating, setAnimating] = useState(false);
const [isOpen, setIsOpen] = useState(false);
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
      <img src={item.src} alt={item.altText} style={{height:'700px', width:'1200px', marginBottom:'2rem', borderRadius:'0rem'}}/>
      <CarouselCaption/>
</CarouselItem>
);
});
return (
<Router>
  <header>
    <div> 
      <Drawer cart={cart} ShowRoom={ShowRoom}/>
    </div>
  </header>

{/* End of NavBar */}

<br></br>
<Route exact path='/'>
      <h1>Car Auction Fest</h1>
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
<div className='users'>
{
ShowRoom.map(car=>{
return(<MediaCard {...car} cart={cart} setCart={setCart} setItem={setItem} ShowRoom={ShowRoom} item={item}/>)
})
}
</div>
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
<div style={{}}>

{
item.length===0 ? <><h3>cart is empty</h3></>: item.map(car=>{
return (
<MediaCard {...car} />
)
})}<br></br>
<For />
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

<Route path='/QueryCar/:name'>
<QueryCar setCart={setCart}  setCart={setCart} setItem={setItem} ShowRoom={ShowRoom} item={item}/>
</Route>

<Route path='/latestbids'>
<LatestBids/>
</Route>

{/* Car dealerships */}
<Route path='/cardealership'>
<Dealer isOpen={isOpen} cart={cart} setCart={setCart}/>
</Route>
</ Router>
);
}

export default Example;