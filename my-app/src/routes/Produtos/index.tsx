import { useEffect, useState } from "react";
import type { TipoProduto } from "../../types/types";
import { Link } from "react-router";
import { FaRegEdit as Editar } from "react-icons/fa";
import { MdOutlineDelete as Excluir } from "react-icons/md";

export default function Produtos() {
  const [produtos, setProduto] = useState<TipoProduto[]>([]);

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        const resposta = await fetch("http://localhost:3001/produtos");

        if (!resposta.ok) {
          throw new Error(
            `Erro no fetch de resposta dos produtos: ${resposta.status} - ${resposta.statusText}`,
          );
        }

        const data: TipoProduto[] = await resposta.json();
        console.log(data);
        setProduto(data);
      } catch (error) {
        console.error(error);
      }
    };

    carregarProdutos();
  }, []);

  return (
    <main>
      <h2>Produtos</h2>
      <table border={1} style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Estoque</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {produtos.map((objeto) => (
            <tr key={objeto.id}>
              <td>{objeto.id}</td>
              <td>{objeto.nome}</td>
              <td>{objeto.preco}</td>
              <td>{objeto.estoque}</td>
              <td>
                <Link to={`/editar-produtos/${objeto.id}`}>
                  {" "}
                  <Editar></Editar>
                </Link>{" "}
                |
                <Link to="#" onClick={() => confirm("Deseja excluir?")}>
                  <Excluir></Excluir>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5}>Quantidade de produtos: {produtos.length}</td>
          </tr>
        </tfoot>
      </table>
    </main>
  );
}
