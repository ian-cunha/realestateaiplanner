import Logo from '../assets/logo.svg'

function Footer() {

    return (
        <div className="footer">
            <div className='footer-div'>
                <a className='icon-footer' href="https://www.instagram.com/realestateaiplanner/" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-instagram fs-1"></i>
                </a>
                <a className='icon-footer' href="https://www.linkedin.com/company/real-estate-ai-planner" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin fs-1"></i>
                </a>
            </div>
            <img src={Logo} alt="Real Estate Ai Planner" width="150" />
            <p className="footer-text text-center">@ 2024 Real Estate Ai Planner - Av. Barbosa Lima, 149 - Sala 416 - Recife, PE, 50030-330</p>
        </div>
    )
}

export default Footer
