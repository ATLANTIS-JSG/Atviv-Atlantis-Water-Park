import { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import NavBar_ from '../../../../../component/barraNavegacao';
import '../../../Listagem/styles.css';
import { MdDeleteForever } from "react-icons/md";

function Acomodacoes() {
  const [setAcomodacoes] = useState([]);

  useEffect(() => {
  }, []);

  const handleDelete = (id: string) => {
  };

  return (
    <section>
      <header>
        <NavBar_ />
      </header>
      <main>
        <div className='text'>
          <h1 className="titles"> <strong> Acomodações </strong> </h1>
        </div>
        <br></br>
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
                <th>Apagar</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>Casal Simples</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td>Sim</td>
                <td>1</td>
                <td>
                  <Button
                    className="cps"
                    id="transparente"
                    onClick={() => handleDelete("1")}
                  >
                   <MdDeleteForever color='red' size={28}/>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Família Simples</td>
                <td>2</td>
                <td>1</td>
                <td>1</td>
                <td>Sim</td>
                <td>1</td>
                <td>
                  <Button
                    className="cps"
                    id="transparente"
                    onClick={() => handleDelete("3")}
                  >
                    <MdDeleteForever color='red' size={28}/>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Família Mais</td>
                <td>5</td>
                <td>1</td>
                <td>2</td>
                <td>Sim</td>
                <td>2</td>
                <td>
                  <Button
                    className="cps"
                    id="transparente"
                    onClick={() => handleDelete("3")}
                  >
                    <MdDeleteForever color='red' size={28}/>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Família Super</td>
                <td>6</td>
                <td>2</td>
                <td>3</td>
                <td>Sim</td>
                <td>0</td>
                <td>
                  <Button
                    className="cps"
                    id="transparente"
                    onClick={() => handleDelete("3")}
                  >
                    <MdDeleteForever color='red' size={28}/>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Solteiro Simples</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>Sim</td>
                <td>0</td>
                <td>
                  <Button
                    className="cps"
                    id="transparente"
                    onClick={() => handleDelete("1")}
                  >
                   <MdDeleteForever color='red' size={28}/>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Solteiro Mais</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td>Sim</td>
                <td>1</td>
                <td>
                  <Button
                    className="cps"
                    id="transparente"
                    onClick={() => handleDelete("1")}
                  >
                   <MdDeleteForever color='red' size={28}/>
                  </Button>
                </td>
              </tr>
              
            </tbody>
          </Table>
        </div>
      </main>
    </section>
  );
}

export default Acomodacoes;
