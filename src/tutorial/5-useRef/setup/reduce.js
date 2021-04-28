import React, {useState, useReducer} from  'react';
import Reducer from './Reducer';
import Modal from './Modal';
 const Reduce=()=> {
    const init={
        people:[],
        isOpen:false,
        modal:''
    }
    const [name, setName]= useState('')
    const [state, dispatch]= useReducer(Reducer, init)
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(name){
            const newPeople= {id: new Date().getTime().toString(), name:name}
            dispatch({type:"ADD_ITEM", payload:newPeople})
            setName('')
        }
        else{
            dispatch({type:"NO_VALUE"})
        }
    }
    const closeModal=()=>{
        dispatch({type:"CLOSE_MODAL"})
    }
    console.log(state)
    return (
        <div>{ state.isOpen && <Modal closeModal={closeModal} modalContent={state.modal} />}
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">name :</label>
                    <input type='text'
                    id='name'
                    name="name"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                    />    
                </div>
                <button className="btn">submit bitches</button>
                <button></button>
            </form>
            {state.people.map((person)=>{
                const {name, id}=person
                return(<div key={id} className="item" >
                    <h3>{name}</h3>
                    <button style={{backgroundColor: 'blue', borderRadius:'.4rem', padding:'.5rem .5rem'}} onClick={()=>{
                        const news= state.people.filter(person=>person.id!==id)
                        dispatch({type:"REMOVE", payload:news})}}> remove this shit </button>
                    </div>
                )
            })}
        </div>
    )
}
export default Reduce