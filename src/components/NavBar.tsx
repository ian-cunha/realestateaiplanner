import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import Logo from "../assets/logo.svg"

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b z-50 py-3">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={Logo} alt="Real Estate AI Planner" className="h-7" />
          </a>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="https://www.reaisystems.com.br/" aria-label="Real Estate AI Systems" target="_blank" className="px-4 py-2 hover:underline">
                  RE.AI.s
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="https://deixacommarta.com.br/" aria-label="Marta Inteligência Imobiliária" target="_blank" className="px-4 py-2 hover:underline">
                  Marta Int.
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="https://reaislisting.com.br/" aria-label="Reais Listing" target="_blank" className="px-4 py-2 hover:underline">
                  Listing
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  )
}

export default NavBar