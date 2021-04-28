const Reducer=(state, action)=> {
    switch(action.type){
        case "ADD_ITEM":
            return {
            ...state, 
            people:   [...state.people, action.payload],
            isOpen:true,
            modal:"Item added fool"
        }
        case "NO_VALUE":
            return{
          ...state, isOpen:true, modal:'enter something bithes'
        }
        case "CLOSE_MODAL":
            return{
            ...state, isOpen:false}
        case "REMOVE":
            return {...state, people:action.payload, modal:'removed fool', isOpen: true}
        
        default : return state;
    }

}

export default Reducer
