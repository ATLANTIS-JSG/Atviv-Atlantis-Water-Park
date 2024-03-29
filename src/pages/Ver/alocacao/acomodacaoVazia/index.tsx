import { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import NavBar_ from '../../../../component/barraNavegacao';
import '../../Listagem/styles.css';
import { LuCheck } from "react-icons/lu";

interface Acomodacao {
    id: string;
    cama_casal: number;
    cama_solteiro: number;
    climatizacao: boolean;
    disponivel: boolean;
    garagem: number;
    nome: string;
    suite: number;
  }

function AcomodacaoVazia() {
    const [acomodacoes] = useState<Acomodacao[]>([]);

  useEffect(() => {
  }, []);

  const id_cliente = localStorage.getItem("id_cliente");

  const handleAclocar = (id: string) => {
    const data = {
      clienteId: id_cliente,
      acomodacaoId: id
    };

      window.location.href = '/alocar'
  };

  return (
    <section>
      <header>
        <NavBar_ />
      </header>
      <main>
        <div className='text'>
          <h1 className="titles"> <strong> Acomodações disponíveis </strong> </h1>
        </div>
        <div className="tables">
          <Table striped bordered hover variant="light">
            <thead className="titles-table">
              <tr>
                <th>Nome</th>
                <th>Cama de Solteiro</th>
                <th>Cama de Casal</th>
                <th>Número Suítes</th>
                <th>Climatização</th>
                <th>Garagem Vagas</th>
                <th>Hospedar</th>
              </tr>
            </thead>
            <tbody>
              {acomodacoes.map((acomodacao: any) => (
                <tr key={acomodacao.id}>
                  <td>{acomodacao.nome}</td>
                  <td>{acomodacao.cama_solteiro}</td>
                  <td>{acomodacao.cama_casal}</td>
                  <td>{acomodacao.suite}</td>
                  <td>{acomodacao.climatizacao ? 'Sim' : 'Não'}</td>
                  <td>{acomodacao.garagem}</td>
                  
                  <td>
                    <Button
                      className="cps"
                      id="transparente"
                      onClick={() => handleAclocar(acomodacao.id)}
                    >
                      <LuCheck color='black' size={23}/>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </main>
    </section>
  );
}

export default AcomodacaoVazia;
