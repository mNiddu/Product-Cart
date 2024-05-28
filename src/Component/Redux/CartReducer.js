const CartReducer=(state=[],action)=>{
    switch(action.type){
        case 'Add-To-Cart':
            return [...state,action.payload.product]
            
            case "UpdateCart":
                return state.map((items)=>{
                    
                    if(items.id==action.payload.pid){
                        return{
                            ...items,quantity: action.payload.quantity
                        }
                    }
                    return items
                })

                case 'RemoveCart':
                    return state.filter((i)=>i.id != action.payload)
            
                    case 'Incriment':
                        console.log(action.payload.pid,'ooooooooooooo')
                        return state.map((i)=>{
                            if(i.id == action.payload.pid){
                                return {
                                    ...i,quantity:action.payload.quantity
                                }
                            }
                            return i
                        })
                    case 'Decriment':
                        console.log(action.payload.pid,'ooooooooooooo')
                        return state.map((i)=>{
                            if(i.id == action.payload.pid){
                                return {
                                    ...i,quantity:action.payload.quantity
                                }
                            }
                            return i
                        })
            default: return state
    }

    
}

export default CartReducer