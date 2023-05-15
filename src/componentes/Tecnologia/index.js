import './Tecnologia.css'

const Tecnologia = ({ tecnologia, imagem, status, corDeFundo}) => {
    return (<div className='tecnologia'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }} >
            <img src={imagem} alt={tecnologia}/>
        </div>
        <div className='rodape'>
            <h4>{tecnologia}</h4>
            <h5>{status}</h5>
        </div>
    </div>

    )
}

export default Tecnologia