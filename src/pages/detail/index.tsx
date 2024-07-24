import { useContext, useEffect, useState} from "react"
import { api } from "../../services/axios"
import { useParams, useNavigate } from "react-router-dom"
import { ProductProps } from "../home"
import { CartContext } from "../../contexts/CartContext"
import { Link } from "react-router-dom"
import toast from "react-hot-toast"

export function Detail(){
    const {id} = useParams<{id:string}>();
    const [detail, setDetail] = useState<ProductProps>();
    const [relacionados, setRelacionados] = useState<ProductProps[]>([])
    const {cart, addItemCart} = useContext(CartContext);
    const navigate = useNavigate();


    useEffect(()=> {
        async function getProdutos(){
            try {
                const response = await api.get('http://localhost:3000/products');
                const allProducts = response.data;
                const productDetail = allProducts.find((product: ProductProps) => product.id === Number(id));
                setDetail(productDetail);

                const produtosRe = allProducts.filter((product: ProductProps) => product.id !== Number(id));
                setRelacionados(produtosRe);
            }catch(error){
                console.log("Erro ao buscar detalhes do produto:", error);
                
            }
        }
         getProdutos();
    }, [id])
    
    function handleAddCartItem (product: ProductProps){
        toast.success('Produto adicionado ao carrinho')
        addItemCart(product);
        navigate('/cart')
    }

    return(

        <div className="max-w-7xl mx-auto mb-20">
         
            {detail && (
            <section className="w-full max-w-7xl bg border-2 border-slate-100  p-4 rounded-lg flex flex-col lg:flex-row mt-32 mb-40 bg-white mx-auto">
            <img className="object-contain max-h-[200px]" src={detail.cover} alt={detail.title} />
            <div className="ml-4 mt-5 flex flex-col">
            <h1 className="font-semibold text-xl lg:text-3xl mb-4">{detail.title}</h1>
            <p className="mb-8 md:mb-12 lg:mb-15 text-base">{detail.description}</p>

            <div className="flex justify-between items-center">
            <h2 className="text-[#FFCA41] font-bold text-lg">{detail.price.toLocaleString('pt-BR',{
             style: 'currency',
             currency: 'BRL'
            })}</h2>

            <button className="text-base lg:text-lg mx-10 bg-[#FFCA41] px-3 lg:px-5 py-1 text-white rounded" onClick={ () => handleAddCartItem(detail)}>Comprar</button>
            </div>

            </div>
            </section>
            )}
            
            <div>
            <h1 className="text-2xl mb-5">Produtos relacionados a este item</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
                {relacionados.slice(0,5).map((item)=>(
                <Link to={`/detail/${item.id}`}>
                <section key={item.id} className="flex flex-col gap-1 bg-white p-4 border border-gray-300 rounded h-[22rem]">
                <img className="max-h-60 object-contain"  src={item.cover} alt="" />
                <p className="font-medium">{item.title}</p>
                <p className="font-semibold text-[#FFBC10]">{item.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })}</p>
                </section>
                </Link>
                ))}


            </div>
            </div>

        </div>
    )
}