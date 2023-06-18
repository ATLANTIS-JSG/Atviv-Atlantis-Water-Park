import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import NavBar_ from '../../../../component/barraNavegacao';
import '../../Listagem/styles.css';
import { MdDeleteForever } from "react-icons/md";
import { BiEdit } from "react-icons/bi";


interface Cliente {
  id: string;
  nome: string;
  cpf: string;
}

function Clientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
  }, []);

  function removerCliente(id: string) {
  }

  function verCliente(id: string) {
    localStorage.setItem("id_cliente", id);
    window.location.href = '/ver/cliente'
  }

  return (
    <section>
      <header>
        <NavBar_ />
      </header>
      <main>
        <div className="text">
          <h1 className="titles">
            <strong>Clientes</strong>
          </h1>
        </div>
        <div className="tables">
        <Table striped bordered hover variant="light">
            <thead className="titles-table">
              <tr>
                <th>Nome Cliente</th>
                <th>CPF</th>
                <th>Ver/Editar</th>
                <th>Deletar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ana Silva</td>
                <td>484.828.968-81</td>
                <td>
                  <button className="cps" onClick={() => verCliente('1')}>
                    <BiEdit color='blue' size={23}/>
                  </button>
                </td>
                <td>
                  <button className="cps" onClick={() => removerCliente('1')}>
                    <MdDeleteForever color='red' size={28}/>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Flávia Roberta</td>
                <td>134.741.471-03</td>
                <td>
                  <button className="cps" onClick={() => verCliente('2')}>
                    <BiEdit color='blue' size={23}/>
                  </button>
                </td>
                <td>
                  <button className="cps" onClick={() => removerCliente('2')}>
                    <MdDeleteForever color='red' size={28}/>
                  </button>
                </td>
              </tr>
              <tr>
                <td>John Rodrigues</td>
                <td>912.572.351-34</td>
                <td>
                  <button className="cps" onClick={() => verCliente('3')}>
                    <BiEdit color='blue' size={23}/>
                  </button>
                </td>
                <td>
                  <button className="cps" onClick={() => removerCliente('3')}>
                    <MdDeleteForever color='red' size={28}/>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Carla Noronha</td>
                <td>987.654.321-00</td>
                <td>
                  <button className="cps" onClick={() => verCliente('3')}>
                    <BiEdit color='blue' size={23}/>
                  </button>
                </td>
                <td>
                  <button className="cps" onClick={() => removerCliente('3')}>
                    <MdDeleteForever color='red' size={28}/>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Luiza Teles</td>
                <td>534.726.374-94</td>
                <td>
                  <button className="cps" onClick={() => verCliente('3')}>
                    <BiEdit color='blue' size={23}/>
                  </button>
                </td>
                <td>
                  <button className="cps" onClick={() => removerCliente('3')}>
                    <MdDeleteForever color='red' size={28}/>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Teresinha Antunes</td>
                <td>574.256.378-11</td>
                <td>
                  <button className="cps" onClick={() => verCliente('3')}>
                    <BiEdit color='blue' size={23}/>
                  </button>
                </td>
                <td>
                  <button className="cps" onClick={() => removerCliente('3')}>
                    <MdDeleteForever color='red' size={28}/>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Vitória Pereira</td>
                <td>561.253.341-16</td>
                <td>
                  <button className="cps" onClick={() => verCliente('3')}>
                    <BiEdit color='blue' size={23}/>
                  </button>
                </td>
                <td>
                  <button className="cps" onClick={() => removerCliente('3')}>
                  <MdDeleteForever color='red' size={28}/>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Teresinha Antunes</td>
                <td>574.256.378-11</td>
                <td>
                  <button className="cps" onClick={() => verCliente('3')}>
                  <BiEdit color='blue' size={23}/>
                  </button>
                </td>
                <td>
                  <button className="cps" onClick={() => removerCliente('3')}>
                    <MdDeleteForever color='red' size={28}/>
                  </button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </main>
    </section>
  );
}

export default Clientes;
