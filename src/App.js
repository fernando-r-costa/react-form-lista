import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Area from './componentes/Area';
import Rodape from './componentes/Rodape';

function App() {

  const areas = [
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Back-End',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Banco de Dados',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    }
  ]

  const [tecnologias, setTecnologia] = useState([])

  const aoNovoTecnologiaAdicionado = (tecnologia) => {
    setTecnologia([...tecnologias, tecnologia])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario areas={areas.map(area => area.nome)} aoTecnologiaCadastrado={tecnologia => aoNovoTecnologiaAdicionado(tecnologia)} />

      {areas.map(area => <Area
        key={area.nome}
        nome={area.nome}
        corPrimaria={area.corPrimaria}
        corSecundaria={area.corSecundaria}
        tecnologias={tecnologias.filter(tecnologia => tecnologia.area === area.nome)}
      />)}

      <Rodape />

    </div>
  );
}

export default App;
