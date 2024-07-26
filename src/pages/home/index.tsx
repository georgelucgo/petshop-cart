import { useEffect, useState, useRef } from "react";
import { api } from "../../services/axios";
import { Link } from "react-router-dom";

export interface ProductProps {
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
}

export function Home(){
    const [products, setProducts] = useState<ProductProps[]>([]);
    const productSectionRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        async function getProducts(){
            const response = await api.get('https://api-petshop-theta.vercel.app/products')
            console.log('Api response: ', response.data);
            
            setProducts(response.data)
        }
        getProducts();
    },[])
    

    const handleScrollToProducts = () => {
        if (productSectionRef.current) {
            productSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <div>
            <main className="w-full  mx-auto">

            <div className="mb-36 hidden md:flex">
                
            <div className="flex-1 my-auto text-center">
            <h1 className="md:text-5xl lg:text-6xl xl:text-7xl p-3 font-semibold">Pets Paradise</h1>
            <p className="font-semibold mb-6 text-sm lg:text-lg xl:text-2xl ">O Paraíso dos Seus Melhores Amigos</p>
            <button className="bg-[#FFCA41] text-white p-2 px-7 rounded-full font-semibold text-sm xl:text-xl xl:px-9 lg:text-lg lg:px-8" onClick={handleScrollToProducts}>Ver Produtos</button>
            </div>

            <div className="flex flex-1 min-[1620px]:flex-none">
            <img className="w-full object-contain "  src="https://i.im.ge/2024/06/22/KvzDHf.onda-4.png" alt="" />
            </div>

            </div>

            <div className="md:hidden text-center">
                <img src="https://i.im.ge/2024/06/19/KkY73c.banner.png" alt="" />
                <h1 className="text-7xl p-3 font-semibold">Pets Paradise</h1>
            <p className="font-semibold mb-10 text-lg">O Paraíso dos Seus Melhores Amigos</p>
            <button className="bg-[#FFCA41] text-white p-2 px-9 rounded-full font-semibold text-lg mb-10">Ver Produtos</button>
            </div>

            <div className="md:mx-10">
            <div className="bg-[#ffca41] max-w-7xl p-5 max-h-40 flex  mx-auto mb-32 justify-around  my-auto xl:max-h-52 lg:max-h-48 min-[850px]:max-h-44 md:rounded-lg">
                <img className="h-24 object-contain xl:h-40 lg:h-36 min-[850px]:h-32 md:h-28 hidden md:flex"  src="https://i.im.ge/2024/06/18/KkiZB4.cachorro-racao.png" alt="" />
                <div className="text-center text-white my-auto">
                <h2 className="text-2xl font-bold mb-3 xl:text-4xl lg:text-3xl min-[850px]:text-2xl">Seu amigo Merece o Melhor!</h2>
                <p className="text-[12px] font-medium xl:text-[17px] lg:text-[15px] min-[850px]:text-[13px]">Nutrição completa com nossa ração royal  e diversão <br /> garantida com nossos brinquedos.</p>
                </div>
                <img className="h-32 object-contain xl:h-48 lg:h-44 min-[850px]:h-40 md:h-36 hidden md:flex"  src="https://i.im.ge/2024/06/18/KkifAq.cachorro-brinquedo.png" alt="" />
            </div>
          
            <div className="w-full max-w-7xl mx-auto mb-20" ref={productSectionRef}>
                <h1 className="text-2xl font-semibold my-4">Rações</h1>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

     
                {products.slice(0, 4).map((product)=>(
                    <Link to={`detail/${product.id}`}>
                   <section key={product.id} className="flex flex-col gap-1 bg-white p-4 border border-gray-300 rounded h-[22rem]">
                   <img className="max-h-60 object-contain"  src={product.cover} alt={product.title} />
                   <p className="font-medium">{product.title}</p>
                   <p className="font-semibold text-[#FFBC10]">{product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                   })}</p>
                   </section>
                   </Link>
         ))}
            
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto mb-20" id="produtos">
                <h1 className="text-2xl font-semibold my-4">Brinquedos</h1>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {products.slice(4, 8).map((product)=>(
                   <Link to={`detail/${product.id}`}>
                   <section key={product.id} className="flex flex-col gap-1 bg-white p-4 border border-gray-300 rounded h-[22rem]">
                   <img className="max-h-60 object-contain"  src={product.cover} alt={product.title} />
                   <p className="font-medium">{product.title}</p>
                   <p className="font-semibold text-[#FFBC10]">{product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                   })}</p>

                   </section>
                   </Link>
         ))}
                </div>
            </div>

            </div>

            </main>

            
           
        </div>
    )
}