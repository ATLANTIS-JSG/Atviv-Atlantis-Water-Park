import { Button } from 'react-bootstrap';
import NavBar_ from '../../../component/barraNavegacao'
import '../styles.css'
import React, { useState } from "react";
import { toast } from 'react-toastify';

function CadastrarAcomodacoes() {
    const [nome, setNome] = useState('');
    const [suite, setSuite] = useState('');
    const [solteiro, setSolteiro] = useState('');
    const [casal, setCasal] = useState('');
    const [Climatização,setClimatizacao] = useState('');
    const [garagem,setGaragem] = useState('');
  
    let clearAreas = () => {
      setNome('')
      setSuite('')
      setSolteiro('')
      setCasal('')
      setGaragem('')
      setClimatizacao('')
    }

    function handleSubmit() {
      const data = {
        nome: nome,
        cama_solteiro: solteiro,
        cama_casal: casal,
        suite: suite,
        climatizacao: Climatização,
        garagem: garagem
      };
    }
    

  return (
    <section>
      <header>
        <NavBar_ />
      </header>
      <main>
        <div className='text'>
          <h1 className='margin-titulo'><strong>Cadastrar Acomodação </strong></h1>
        </div>
        <div className="forms">
          <form>
              <div className="field">
                <label>Nome:</label>
                <input placeholder='Preencha nome da acomodação' type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
              </div>
              <div className="field">
                <label>Camas de solteiro:</label>
                <input placeholder='Total de camas solteiro' type="number" onChange={(e) => setSolteiro(e.target.value)} />
              </div>
              <div className="field">
                <label>Camas de casal:</label>
                <input placeholder='Total de camas casal' type="number" onChange={(e) => setCasal(e.target.value)} />
              </div>
              <div className="field">
                <label>Número de Suítes:</label>
                <input placeholder='Preencha o número de suítes' type="text" value={suite} onChange={(e) => setSuite(e.target.value)} />
              </div>
              <div className="field">
                  <label>Climatização:</label>
                  <input placeholder='Preencha com true/false' type="boolean" onChange={(e) => setClimatizacao(e.target.value)} />
              </div>
              <div className="field">
                  <label>Garagem:</label>
                  <input placeholder='Preencha o número de vagas' type="number" onChange={(e) => setGaragem(e.target.value)} />
              </div>
              <div className="btns btn-d">
                <Button className="add add-yellow" variant="outline-dark" type='submit' onClick={() => handleSubmit()}>Cadastrar</Button>{' '}
              </div>
          </form>
        </div>
      </main>
    </section>
  );
}

export default CadastrarAcomodacoes;
