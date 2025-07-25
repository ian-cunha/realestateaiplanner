import Logo from "../assets/logo.svg"

function Footer() {
  return (
    <footer className="w-full border-t bg-white py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="flex justify-center gap-6 mb-4">
          <a title="Instagram" href="https://www.instagram.com/realestateaiplanner/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram text-2xl hover:text-purple-600"></i>
          </a>
          <a title="Linkedin" href="https://www.linkedin.com/company/real-estate-ai-planner" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin text-2xl hover:text-purple-600"></i>
          </a>
        </div>
        <div className="text-center mb-4">
          <img src={Logo} alt="Real Estate AI Planner LTDA" className="h-5 mx-auto" />
        </div>
        <p className="text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Real Estate Ai Planner - Av. Barbosa Lima, 149 - Sala 416 - Recife, PE, 50030-330
        </p>
      </div>
    </footer>
  )
}

export default Footer