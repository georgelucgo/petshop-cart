import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom";

export function Header(){
    const { cartAmount } = useContext(CartContext)

    return (
        <div className="w-full bg-white">
            <div className="flex items-center justify-between mx-6 "> 
            
            <Link to='/'>
            <div className="flex items-center flex-col">
            <img src='https://static.vecteezy.com/ti/vetor-gratis/p2/6720668-cara-de-cachorro-logo-gratis-vetor.jpg' alt="Logo do Petshop" className="w-14 h-15 " />
            <h1 className="font-bold -my-4 mb-0.5">Pets Paradise</h1>
            </div>
            </Link>
            <Link className="relative" to='/cart'>
            <FaShoppingCart size={30}/>
            {cartAmount > 0 && (
                        <span className="absolute -right-3 -top-3 px-2.5 bg-[#FFCA41] rounded-full w-6 h-6 flex items-center justify-center text-white text-xs ">
                        {cartAmount}
                    </span>
                    )}
            </Link>

            </div>
        </div>
    )
}