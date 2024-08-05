import Marta from './assets/marta.svg'
import Smart from './assets/smart.svg'

function App() {

  return (
    <div className="home">
      <h1 className="title">Produtos úteis da <br />Real Estate Ai Planner</h1>
      <h2 className="subtitle">Nós criamos inteligência sobre o mercado imobiliário, utilizando dados de um ecossistema cada vez maior e mais conectado, para auxiliar na tomada de decisões mais acertadas pelas melhores incorporadoras e construtoras.</h2>
      <div className="text-center mt-5">
        <a className="btn btn-primary" href="#blocs" role="button">Ver todos os produtos <i className="bi bi-arrow-down-left-circle"></i></a>
      </div>

      <div id="blocs" />
      <div className="blocs">
        <div className="card">
          <div className="card-body">
          <img className='img-block' src={Marta} alt="Logo Marta" width="200" height="60" />
            <h5 className="card-title">Marta Inteligência Imobiliária</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Informação e inteligência para o mercado imobiliário acessível e em tempo real.</h6>
            <p className="card-text">Marta coleta e analisa dados de um ecossistema que tem mais de 20 anos de experiência construindo soluções para o mercado imobiliário. Durante todo esse tempo, monitoramos milhões de atividades de clientes interessados em imóveis, e informações detalhadas de centenas de milhares de empreendimentos e imóveis do mercado.</p>
            <a target='_blank' href="https://deixacommarta.com.br/" className="btn btn-primary">Visitar produto <i className="bi bi-arrow-right-circle"></i></a>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
          <img className='img-block' src={Smart} alt="Logo Smart" width="250" height="60" />
            <h5 className="card-title">Smart Imobiliário</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Sistema imobiliário completo com site de imóveis</h6>
            <p className="card-text">Criado para ajudar você a priorizar negócios, acompanhar seu desempenho e não perder oportunidades, Gestão inteligente de seus negócios, Aplicativo para Corretores e Imobiliárias, Anuncie seus imóveis e aumente a visibilidade de seu negócio!</p>
            <a target='_blank' href="https://www.smartimobiliario.com.br/" className="btn btn btn-primary">Visitar produto <i className="bi bi-arrow-right-circle"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
