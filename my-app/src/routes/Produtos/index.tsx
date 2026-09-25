import { useEffect, useState } from "react"
import type { TipoProduto } from "../../types/types";
import { Link } from "react-router";
import { FaEdit as Editar } from "react-icons/fa";
import { MdDeleteForever as Delete} from "react-icons/md";

export default function Produtos() {

    //Recipiente onde irei guardar a lista de produtos que virão da API
    const[produtos, setProdutos] = useState<TipoProduto[]>([]);

    useEffect(() => {


        const carregarProdutos = async () => {
            try {
                const resposta = await fetch("http://localhost:3001/produtos");
                if(!resposta.ok){
                    throw new Error(`Erro no fetch e resposta dos produtos: ${resposta.status} - ${resposta.statusText}`);
                }
                
                const data:TipoProduto[] = await resposta.json();
                console.log(data);
                setProdutos(data);
                
            } catch (error) {
                console.error(error);
            }
        }

        carregarProdutos();
    
    }, []);

    return (
        <main>
            <h2>Produtos</h2>
            <table border={1} style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>PRECO</th>
                    <th>ESTOQUE</th>
                    <th>ACOES</th>

                </thead>
                <tbody>
                    {produtos.map( (p)=>(

                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.nome}</td>
                            <td>{p.preco}</td>
                            <td>{p.estoque}</td>
                            <td>
                                <Link to={`/editar-produtos/${p.id}`}><Editar /></Link>  | 
                                <Link to={`/excluir-produtos/${p.id}`}><Delete /></Link> |
                            </td>

                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <td colSpan={5}>Quantidade de produtos: {produtos.length}</td>
                </tfoot>
            </table>
        </main>
    )
}
