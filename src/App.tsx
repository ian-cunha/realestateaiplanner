import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Marta from "./assets/marta.svg"
import Reais from "./assets/reais.svg"

function App() {
  return (
    <div className="px-6 md:px-20 py-24 space-y-16">
      <h1 className="text-4xl md:text-6xl font-bold text-center leading-tight">
        Produtos úteis da <br /> Real Estate AI Planner
      </h1>

      <h2 className="text-lg md:text-xl text-muted-foreground text-center max-w-4xl mx-auto">
        Nós criamos inteligência sobre o mercado imobiliário, utilizando dados de um ecossistema cada vez maior e mais conectado, para auxiliar na tomada de decisões mais acertadas pelas melhores incorporadoras e construtoras.
      </h2>

      <div className="text-center">
        <Button variant="default" className="text-lg px-8 py-6" asChild>
          <a href="#blocs">Conheça nossos produtos</a>
        </Button>
      </div>

      <div id="blocs" className="grid gap-6 md:grid-cols-2 mt-16">
        <Card>
          <CardContent className="p-6 space-y-4 text-center">
            <img src={Reais} alt="Logo Smart" className="w-full max-w-xs mx-auto rounded-md" />
            <h3 className="text-lg font-semibold">Sistema imobiliário completo com site de imóveis</h3>
            <p className="text-muted-foreground text-justify">
              Criado para ajudar você a priorizar negócios, acompanhar seu desempenho e não perder oportunidades. Gestão inteligente de seus negócios, aplicativo para corretores e imobiliárias. Anuncie seus imóveis e aumente a visibilidade de seu negócio!
            </p>
            <Button variant="default" asChild>
              <a rel="noopener" href="https://www.reaisystems.com.br/" target="_blank">Visitar</a>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-4 text-center">
            <img src={Marta} alt="Logo Marta" className="w-full max-w-xs mx-auto rounded-md" />
            <h3 className="text-lg font-semibold">Informação e inteligência para o mercado imobiliário</h3>
            <p className="text-muted-foreground text-justify">
              Marta coleta e analisa dados de um ecossistema que tem mais de 20 anos de experiência construindo soluções para o mercado imobiliário, monitorando milhões de atividades de clientes e informações detalhadas de milhares de empreendimentos.
            </p>
            <Button variant="default" asChild>
              <a rel="noopener" href="https://deixacommarta.com.br/" target="_blank">Visitar</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App
