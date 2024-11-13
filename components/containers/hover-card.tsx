import {
  ArrowDownIcon,
  CalendarIcon,
  CaretDownIcon,
  InstagramLogoIcon,
  Link1Icon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { User } from "@/pages/user/[id]";
import { ImArrowDown, ImPaypal } from "react-icons/im";
import Image from "next/image";
import { link } from "fs";
interface HoverCardProps {
  userData: User;
}

export function HoverCardDemo({ userData }: HoverCardProps) {
  const socials = [
    { id: 1, name: userData.social.twitter_username, icon: TwitterLogoIcon },
    { id: 2, name: userData.social.instagram_username,  icon: InstagramLogoIcon },
    { id: 3, name: userData.social.portfolio_url, icon: Link1Icon   },
    { id: 4, name: userData.social.paypal_email,  icon: ImPaypal },  
  ];

  const shortenUrl = (url: string) => {
    return url.replace(/^(https?:\/\/)?(www\.)?/, '');
  };

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          className="text-md px-0 text-gray-600 hover:text-black"
          variant="link"
        >
          Connect with {userData.username}{" "}
          <CaretDownIcon className="ml-1 h-4 w-4" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="">
        <ul>
          {socials.map((social) => (
            <li className={social.id === 2 ? 'my-3' : ''} key={social.id}>
                <div className="flex gap-2 items-center">
                <social.icon className={`${social.name ? 'block' : 'hidden'}`} />
              {/* <p>{shortenUrl(social.name)}</p> */}

                {social.name ? ( <p>{shortenUrl(social.name)}</p>) : null}

              </div>
            </li>
          ))}

        </ul>
      </HoverCardContent>
    </HoverCard>
  );
}
