import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import Logo from "../assets/logo.svg"

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b z-50 px-6 md:px-20 py-3">
      <div className="flex justify-between items-center">
        <a href="#">
          <img src={Logo} alt="Logo" className="h-10" />
        </a>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="https://www.reaisystems.com.br/" target="_blank" className="px-4 py-2 hover:underline">
                RE.AI.s
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="https://deixacommarta.com.br/" target="_blank" className="px-4 py-2 hover:underline">
                Marta Inteligência
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}

export default NavBar
