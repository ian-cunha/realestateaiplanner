import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Marta from "./assets/marta.svg"
import Reais from "./assets/reais.svg"
import Listing from "./assets/listing.svg"

function App() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-20 py-32 space-y-24">
      <div className="space-y-6 text-center flex flex-col items-center">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight">
          Produtos úteis da <br className="hidden lg:block" /><b>Real Estate AI Planner</b>
        </h1>
        <h2 className="text-lg md:text-xl text-muted-foreground max-w-3xl">
          Nós criamos inteligência sobre o mercado imobiliário, utilizando dados de um ecossistema cada vez maior e mais conectado, para auxiliar na tomada de decisões mais acertadas pelas melhores incorporadoras e construtoras.
        </h2>
        <div className="pt-4">
          <Button
            variant="default"
            className="text-lg px-8 py-6 transition-transform duration-300 hover:scale-105"
            asChild
          >
            <a href="#produtos">Conheça nossos produtos</a>
          </Button>
        </div>
      </div>

      <div id="produtos" className="grid gap-8 grid-cols-1 md:grid-cols-3">
        <Card>
          <CardContent>
            <img src={Reais} alt="Reais" className="w-full object-cover" />
            <div className="space-y-4 text-center">
              <h3 className="text-xl font-semibold mt-2">Sistema imobiliário completo</h3>
              <p className="text-muted-foreground text-sm flex-grow">
                Gestão inteligente de seus negócios, app para corretores e imobiliárias. Anuncie seus imóveis e aumente a visibilidade de seu negócio!
              </p>
            </div>
            <div className="mt-auto pt-4">
              <Button
                variant="default"
                className="transition-transform duration-300 hover:scale-105"
                asChild
              >
                <a rel="noopener" aria-label="Ir para o RE.AI.s" href="https://www.reaisystems.com.br/" target="_blank">Ir para o RE.AI.s</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <img src={Marta} alt="Marta Inteligência Imobiliária" className="w-full object-cover" />
            <div className="space-y-4 text-center">
              <h3 className="text-xl font-semibold mt-2">Inteligência para o mercado</h3>
              <p className="text-muted-foreground text-sm flex-grow">
                Marta coleta e analisa dados de um ecossistema com mais de 20 anos de experiência, monitorando milhões de atividades de clientes.
              </p>
            </div>
            <div className="mt-auto pt-4">
              <Button
                variant="default"
                className="transition-transform duration-300 hover:scale-105"
                asChild
              >
                <a rel="noopener" aria-label="Ir para a Marta" href="https://deixacommarta.com.br/" target="_blank">Ir para a Marta</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <img src={Listing} alt="Reais Listing" className="w-full object-cover" />
            <div className="space-y-4 text-center">
              <h3 className="text-xl font-semibold mt-2">Encontre seu Imóvel Ideal</h3>
              <p className="text-muted-foreground text-sm flex-grow">
                Explore imóveis em um mapa interativo e busca inteligente para conectar você ao seu próximo lar ou investimento.
              </p>
            </div>
            <div className="mt-auto pt-4">
              <Button
                variant="default"
                className="transition-transform duration-300 hover:scale-105"
                asChild
              >
                <a rel="noopener" aria-label="Ir para o Listing" href="https://reaislisting.com.br" target="_blank">Ir para o Listing</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App