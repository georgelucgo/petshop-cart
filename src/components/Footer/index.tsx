import { BsFacebook, BsTwitter, BsGithub } from "react-icons/bs";

export function Footer(){
    return (
        <div>
           <div className="bg-[#FFCA41] text-white ">
            <div className="flex justify-between mx-auto max-w-7xl">
            <div className="my-10 mx-5">
            <div className="mb-20 w-full">
            <h1 className="font-semibold text-xs md:text-base ">Endereço:</h1>
            <p className="text-xs md:text-base">Rua dos Animais, 123, Centro, Cidade</p>
            </div>

            <div>
            <h1 className="font-semibold text-xs md:text-base ">E-mail:</h1>
            <p className="text-xs md:text-base">contato@petsparadise.com</p>
            </div>
            </div>
          

            <div className="my-10 mx-5">
            <div className="mb-20">
            <h1 className="font-semibold text-xs md:text-base">Telefone:</h1>
            <p className="text-xs md:text-base">(11) 1234-5678</p>
            </div>

            <div>
            <h1 className="font-semibold text-xs md:text-base">Redes Sociais:</h1>
            <div className="flex">
            <a href="https://x.com/?lang=pt-br" target="_blank" rel="noopener noreferrer"><BsTwitter size={20} /></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><BsFacebook size={20} /></a>
            <a href="https://github.com/georgelucgo" target="_blank" rel="noopener noreferrer"><BsGithub size={20} /></a>
            </div>
            </div>
            </div>
            </div>
            
            <h1 className="max-w-7xl mx-auto text-center text-xs md:text-base">© 2024 Pets Paradise. Todos os direitos reservados.</h1>

            </div>
        </div>
    )
}