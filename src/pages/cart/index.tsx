import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { Link } from "react-router-dom"

export function Cart(){
    const {cart, total, addItemCart, removeItemCart} = useContext(CartContext)
    return(
        <div className="w-full max-w-7xl mx-auto h-screen mb-20">
        <h1 className="font-medium text-2xl text-center my-4 mt-10">Meu carrinho</h1>

         {cart.length === 0 && (
            <div className="flex flex-col items-center justify-center">
                <p className="font-medium">Ops seu carrinho está vazio...</p>
                <Link to='/' className="bg-slate-600 my-3  p-1 px-3 text-white font-medium rounded">
                Página inicial
                </Link>
            </div>
           )}

        {cart.map ((item) => (
        <section key={item.id} className="flex items-center justify-between border-[1px] rounded  border-gray-300 p-4 bg-white">
         <img src={item.cover} alt={item.title} className="w-28 rounded-lg">
        </img>

        <strong className="text-[12px] md:text-base">Preço: {item.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })} </strong>
        <div className="flex items-center justify-between bg-[#9F9F9F] rounded px-3 gap-3 mx-5">
        <button className="flex flex-1 items-center justify-center text-white font-bold " onClick={()=> removeItemCart(item)}>-</button>
        <p className="border-[1px] px-3 border-[#9F9F9F] bg-white ">{item.amount}</p>
        <button className="flex flex-1 items-center justify-center text-white font-bold" onClick={()=> addItemCart(item)}>+</button>
        </div>

        <strong className="float-right text-[12px] md:text-base">
            SubTotal:  {item.total.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                 })}
        </strong>
 </section> 
        ))}
         {cart.length !== 0 && <p className="font-bold text-[12px] md:text-base border-b-[1px] rounded  border-x-[1px] p-2 border-gray-300 bg-white flex justify-end">Total: {total}</p> }


    </div>
    )
}