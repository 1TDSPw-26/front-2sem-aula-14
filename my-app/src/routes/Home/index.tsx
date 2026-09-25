import { useState } from "react";
import type { TipoUsuarioGit } from "../../types/types";

export default function Home() {
    document.title = "Home";

    const[usuarios,setUsuarios] = useState<TipoUsuarioGit[]>([]);
    return (
        <main>
            <h2>Home</h2>        
        </main>
    )
} 






//Exemplo de destructuring
// const estojo = {
<<<<<<< HEAD
    //     nome: "Estojo",
    //     cor: "Azul",
    //     tamanho: 10
    // }
    // //Acessando os dados do objeto de forma direta
    // console.log(estojo.nome);
    // console.log(estojo.cor);
    // console.log(estojo.tamanho);
    
    // //Desestrurando o objeto DESTRCUTURING
    // const { nome, cor, tamanho } = estojo;
    // console.log(nome);
    // console.log(cor);
    // console.log(tamanho);
    
    // return (
        //     <main>
        //         <h2>Home</h2>
        //         <div>
        //             <h3>Estojo</h3>
        //             <p>Nome: {estojo.nome}</p>
        //             <p>Cor: {cor}</p>
        //             <p>Tamanho: {tamanho}</p>
        //         </div>
        
        
        //     </main>
        // )
        // } 
=======
//     nome: "Estojo",
//     cor: "Azul",
//     tamanho: 10
// }
// //Acessando os dados do objeto de forma direta
// console.log(estojo.nome);
// console.log(estojo.cor);
// console.log(estojo.tamanho);

// //Desestrurando o objeto DESTRCUTURING
// const { nome, cor, tamanho } = estojo;
// console.log(nome);
// console.log(cor);
// console.log(tamanho);

// return (
//     <main>
//         <h2>Home</h2>
//         <div>
//             <h3>Estojo</h3>
//             <p>Nome: {estojo.nome}</p>
//             <p>Cor: {cor}</p>
//             <p>Tamanho: {tamanho}</p>
//         </div>


//     </main>
// )
// } 
>>>>>>> feature/exemplo-pf0670
