import Logo from '../assets/logo.svg'

function Footer() {

    return (
        <div className="footer">
            <img src={Logo} alt="Real Estate Ai Planner" width="150" />
            <p className="footer-text text-center">@ 2024 Real Estate Ai Planner - Av. Barbosa Lima, 149 - Sala 416 - Recife, PE, 50030-330</p>
        </div>
    )
}

export default Footer
