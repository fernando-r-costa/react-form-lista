import './Rodape.css'

const Rodape = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="https://github.com/fernando-r-costa" target="_blank">
                            <img src="/imagens/github-mark-white.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/fernando-r-costa/" target="_blank">
                            <img src="/imagens/LI-In-Bug.png" alt="" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <p>
                    Desenvolvido por <img src="/imagens/FRC.gif" alt=""/>
                </p>
            </section>
        </footer>
    )
}

export default Rodape