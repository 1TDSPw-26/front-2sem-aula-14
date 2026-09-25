import { useEffect, useState } from "react"
import type { TipoProduto } from "../../types/types";
import { Link } from "react-router/internal/react-server-client";

export default function Produtos(){

    //Recipiciente onde irei guardar a lista de produtos
    const[produtos,setProdutos] = useState<TipoProduto[]>([]);

    useEffect(() => {
        
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
            <table border={1} style={{width: "100%", borderCollapse: "collapse"}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>PREÇO</th>
                            <th>ESTOQUE</th>
                            <th>AÇÕES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map( (p)=> (
                            <tr key={p.id}>
                                <td>{p.nome}</td>
                                <td>{p.preco}</td>
                                <td>{p.estoque}</td>
                                <td> 
                                    <Link to={`/editar-produtos/${p.id}`}>EDITAR</Link>| EXCLUIR
                                    </td>
                            </tr>

                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={5}>Quantidade de Produtos: {produtos.length}</td>
                        </tr>
                    </tfoot>
                    
            </table>
        </div>
    )
}
