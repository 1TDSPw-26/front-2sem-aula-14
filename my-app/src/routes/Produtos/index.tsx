import { useState } from "react"
import type { TipoProduto } from "../../types/types";

export default function Produtos(){

    //Recipiciente onde irei guardar a lista de produtos
    const[produtos,setProdutos] = useState<TipoProduto[]>([]);

    userEffect(() => {
        
        const carregarProdutos = async () => {
            try {
            
                const resposta = await fetch("http://localhost:3001/produtos");

                if(!resposta.ok){
                    throw new Error("Erro no fetch da resposta dos produtos");
                }    

                const data: TipoProduto[] = await resposta.json();
                console.log(data);
                setProdutos(data);

            } catch (error) {
                console.error(error);

            }
        }

        carregarProdutos();

    },[]);

    return(
        <div>
            <h2>Produtos</h2>
        </div>
    )
}