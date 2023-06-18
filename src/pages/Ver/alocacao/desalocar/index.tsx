import { Button, Table } from 'react-bootstrap';
import NavBar_ from '../../../../component/barraNavegacao'
import { IoMdRemoveCircle} from "react-icons/io";

interface Cliente {
    id: string;
    cpf: string;
    nascimento: string;
    nome: string;
    nome_social: string;
    passaporte: string;
    titular: boolean;
}

function Desalocar() {

    function handleSubmit(clienteId: string) {
    }

    return (
        <section>
            <header>
                <NavBar_ />
            </header>
            <main>
                <div className='text'>
                    <h1 className="titles"> <strong> Desalocar cliente </strong> </h1>
                </div>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead className="titles-table">
                            <tr>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Desalocar</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td>Ana Silva</td>
                                    <td>484.828.968-81</td>
                                    <td>
                                        <Button
                                            className="cps"
                                            id="transparente"
                                            onClick={() => handleSubmit("1")}
                                        >
                                           
                                            <IoMdRemoveCircle color='red' size={28} />
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Flávia Roberta</td>
                                    <td>134.741.471-03</td>
                                    <td>
                                        <Button
                                            className="cps"
                                            id="transparente"
                                            onClick={() => handleSubmit("1")}
                                        >
                                            <IoMdRemoveCircle color='red' size={28} />
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>John Rodrigues</td>
                                    <td>912.572.351-34</td>
                                    <td>
                                        <Button
                                            className="cps"
                                            id="transparente"
                                            onClick={() => handleSubmit("1")}
                                        >
                                            <IoMdRemoveCircle color='red' size={28} />
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Vitória Pereira</td>
                                    <td>561.253.341-16</td>
                                    <td>
                                        <Button
                                            className="cps"
                                            id="transparente"
                                            onClick={() => handleSubmit("1")}
                                        >
                                            <IoMdRemoveCircle color='red' size={28} />
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Silvia Lima</td>
                                    <td>574.256.378-11</td>
                                    <td>
                                        <Button
                                            className="cps"
                                            id="transparente"
                                            onClick={() => handleSubmit("1")}
                                        >
                                            <IoMdRemoveCircle color='red' size={28} />
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

export default Desalocar;
