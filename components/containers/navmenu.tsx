import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"




import { TwitterLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, HamburgerMenuIcon } from "@radix-ui/react-icons"
import Navselect from "./navselect"
export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="" variant="ghost">
          <span className="sr-only">Menu</span>
          <HamburgerMenuIcon stroke="#000" strokeWidth={"0.5px"}></HamburgerMenuIcon>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="lg:w-[500px] lg:mt-1">


       

        <div className="flex flex-col lg:flex-row justify-between lg:px-6">

        <div className="flex lg:flex-row lg:w-[62%] justify-between">

        <ul className="text-slate-500 text-sm space-y-3 mt-2">
        <h1 className="font-semibold text-black">Photop</h1>


        <li>Lorem</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>


        <div className="flex lg:mt-1 gap-2">
        <TwitterLogoIcon></TwitterLogoIcon>
        <InstagramLogoIcon></InstagramLogoIcon>
        <LinkedInLogoIcon></LinkedInLogoIcon>

        </div>

        </ul>

        <ul className="text-slate-500 text-sm space-y-3 mt-2">

        <h1 className="font-semibold text-black">Product</h1>
       

        <li>Lorem</li>
        <li>Developers / API</li>
        <li>Photop+</li>
        <li>Shop</li>

        </ul>

        </div>


        <ul className="text-slate-500  text-sm space-y-3 mt-5 mb-4 lg:mb-0 lg:mt-2">

        <h1 className="font-semibold text-black">Community</h1>
      
        <li>Lorem</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>


        </ul>



        </div>

        <div className="border-t-[1px] w-full pt-4 lg:mt-6">

        <ul className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center text-slate-500 text-sm">
        
        <div className="flex gap-2 mt-2 lg:mt-0 lg:gap-4">
        <li>License</li>
        <li>Privacy</li>
        <li>Terms</li>
        <li>Security</li>
        </div>

        {/* popeover goes here */}

        <Navselect></Navselect>



        </ul>


        </div>

        
      </PopoverContent>
    </Popover>
  )
}
