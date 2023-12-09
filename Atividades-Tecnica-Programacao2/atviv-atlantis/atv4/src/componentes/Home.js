import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Menu Principal</h2>
      <div>
        <p>Por favor, selecione uma opção...</p>
        <hr />
        <p>Opções para cliente:</p>
        <Link to="/cadastrar-cliente"><button>Cadastrar cliente</button></Link>
        <Link to="/editar-cliente"><button>Editar cliente</button></Link>
        <Link to="/listar-clientes"><button>Listar cliente(s)</button></Link>
        <Link to="/excluir-cliente"><button>Excluir cliente</button></Link>
        <hr />
        <p>Opções para gestão:</p>
        <Link to="/listar-acomodacoes"><button>Listar acomodações</button></Link>
        <Link to="/acomodar-clientes"><button>Acomodar clientes aos quartos</button></Link>
        <hr />
      </div>
    </div>
  );
}

export default Home;