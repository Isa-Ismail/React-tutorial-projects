import React, {useState} from 'react'
import Nav from './Navbar'
import {ShowRoom, items} from './Resources'
import Cards from './cards'
function CarDealerShip({setCart}) {
    return (<>
           <h2>
               So Here we are talking about some international car dealerships
           </h2>
           {/* <div className='users'>
           {ShowRoom.map(car=>{
               return(
                    <Cards {...car} setCart={setCart} />
               )
           })}
           </div> */}
           <div className='users' >
               <div >
               <a href='#'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7osUJuYXPgL_67sjtUP2wYhiK4Sl1oBEajg&usqp=CAU' alt='' style={{height:'120px', width:'150px', marginBottom:'2rem', borderRadius:'.5rem'}}/></a>
               </div>
               <div >
               <a href='#'><img src='https://wallpapercave.com/wp/wp1847283.jpg' alt='' style={{height:'120px', width:'150px', marginBottom:'2rem', borderRadius:'.5rem'}}/></a>
               </div>
               <div >
               <a href='#'><img src='https://i.pinimg.com/originals/9c/e6/ba/9ce6ba0912763a007c4cd61e87275c08.jpg' alt='' style={{height:'120px', width:'150px', marginBottom:'2rem', borderRadius:'.5rem'}}/></a>
               </div>
               <div >
               <a href='#'><img src='https://i.pinimg.com/originals/9c/e6/ba/9ce6ba0912763a007c4cd61e87275c08.jpg' alt='' style={{height:'120px', width:'150px', marginBottom:'2rem', borderRadius:'.5rem'}}/></a>
               </div>
               <div >
               <a href='#'><img src='https://i.pinimg.com/originals/9c/e6/ba/9ce6ba0912763a007c4cd61e87275c08.jpg' alt='' style={{height:'120px', width:'150px', marginBottom:'2rem', borderRadius:'.5rem'}}/></a>
               </div>
               <div >
               <a href='#'><img src='https://i.pinimg.com/originals/9c/e6/ba/9ce6ba0912763a007c4cd61e87275c08.jpg' alt='' style={{height:'120px', width:'150px', marginBottom:'2rem', borderRadius:'.5rem'}}/></a>
               </div>
               <div >
               <a href='#'><img src='https://i.pinimg.com/originals/9c/e6/ba/9ce6ba0912763a007c4cd61e87275c08.jpg' alt='' style={{height:'120px', width:'150px', marginBottom:'2rem', borderRadius:'.5rem'}}/></a>
               </div>
               <div >
               <a href='#'><img src='https://i.pinimg.com/originals/9c/e6/ba/9ce6ba0912763a007c4cd61e87275c08.jpg' alt='' style={{height:'120px', width:'150px', marginBottom:'2rem', borderRadius:'.5rem'}}/></a>
               </div>
               <div >
               <a href='#'><img src='https://i.pinimg.com/originals/9c/e6/ba/9ce6ba0912763a007c4cd61e87275c08.jpg' alt='' style={{height:'120px', width:'150px', marginBottom:'2rem', borderRadius:'.5rem'}}/></a>
               </div>
               <div >
               <a href='#'><img src='https://i.pinimg.com/originals/9c/e6/ba/9ce6ba0912763a007c4cd61e87275c08.jpg' alt='' style={{height:'120px', width:'150px', marginBottom:'2rem', borderRadius:'.5rem'}}/></a>
               </div>
               <div >
               <a href='#'><img src='https://i.pinimg.com/originals/9c/e6/ba/9ce6ba0912763a007c4cd61e87275c08.jpg' alt='' style={{height:'120px', width:'150px', marginBottom:'2rem', borderRadius:'.5rem'}}/></a>
               </div>
               <div >
               <a href='#'><img src='https://i.pinimg.com/originals/9c/e6/ba/9ce6ba0912763a007c4cd61e87275c08.jpg' alt='' style={{height:'120px', width:'150px', marginBottom:'2rem', borderRadius:'.5rem'}}/></a>
               </div>
           </div>
        </>
    )
}
export default CarDealerShip;