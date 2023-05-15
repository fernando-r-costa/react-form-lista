import Tecnologia from '../Tecnologia'
import './Area.css'

const Area = (props) => {
    return (
        (props.tecnologias.length > 0) && <section className='area' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='tecnologias'>
                {props.tecnologias.map(tecnologia => <Tecnologia corDeFundo={props.corPrimaria} key={tecnologia.nome} nome={tecnologia.nome} cargo={tecnologia.cargo} imagem={tecnologia.imagem} />)}
            </div>
        </section>
    )
}

export default Area