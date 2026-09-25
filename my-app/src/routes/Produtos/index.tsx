import { useEffect, useState } from "react";
import type { TipoProduto } from "../../types/types";

export default function Produtos() {

    //Recipiente onde irei guardar a lista de produtos
    const[produtos,setProduto] = useState<TipoProduto[]>([]);

    useEffect( ()=>{

        const carregarProdutos = async ()=>{
            try {
                const resposta = await fetch("http://localhost:3001/produtos");

                if(!resposta.ok){
                    throw new Error(`Erro no fetch da resposta dos produtos: ${resposta.status} - ${resposta.statusText}`);
                }

                const data:TipoProduto[] = await resposta.json();
                console.log(data);
                setProduto(data);

            } catch (error) {
                console.error(error);
            }

        }

        carregarProdutos();

    },[]);

    return (
        <main>
            <h2>Produtos</h2>
            
        </main>
    )
}
