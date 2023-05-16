import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [tecnologia, setTecnologia] = useState('')
    const [status, setStatus] = useState('')
    const [imagem, setImagem] = useState('')
    const [area, setArea] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aTecnologiaCadastrada({
            tecnologia,
            status,
            imagem,
            area
        })
        setTecnologia('')
        setStatus('')
        setImagem('')
        setArea('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card da tecnologia.</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite a tecnologia"
                    valor={tecnologia}
                    aoAlterado={valor => setTecnologia(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Status"
                    placeholder="Digite se já estudou ou não"
                    valor={status}
                    aoAlterado={valor => setStatus(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Área"
                    itens={props.areas}
                    valor={area}
                    aoAlterado={valor => setArea(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario