const AddToCart=(product,quantity=1) =>({
    type:'Add-To-Cart',
    payload:{product:{...product,quantity}}
})

const UpdateCart=(pid,quantity) =>({
    
    type:"UpdateCart",
    payload:{pid,quantity}
})

const RemoveCart=(pid)=>({
    type:'RemoveCart',
    payload:pid
})

const Incriment=(pid,quantity)=>({
    type:'Incriment',
    payload:{pid,quantity}
})
const Decriment=(pid,quantity)=>({
    type:'Decriment',
    payload:{pid,quantity}
})
export {AddToCart,UpdateCart,RemoveCart,Incriment,Decriment}