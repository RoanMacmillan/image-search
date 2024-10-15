import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";

interface PremiumProps {
  variant?: string;
}

const Premium: React.FC<PremiumProps> = ({ variant }) => {
  const [subscription, setSubscription] = useState<any>("yearly");

  const price = subscription === "yearly" ? "6" : "13";

  const onOptionChange = (value: string) => {
    setSubscription(value);
    // console.log(subscription);
  };

  const switchToYearly = () => {
    setSubscription("yearly");
  };

  const test = "bg-red-500";

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          {variant === "navBtn" ? (
            <Button
              className="flex gap-1 px-0  text-sm"
              variant={"none"}
              type="button"
            >
              {/* <span>Upgrade to</span> */}
              <span className="">Photop+</span>
            </Button>
          ) : (
            <Button
              className="flex w-[170px] gap-1 text-sm font-semibold"
              variant={"default"}
              type="button"
            >
              <span>Upgrade to</span>
              <strong className="font-bold">Photop+</strong>
            </Button>
          )}
        </DialogTrigger>

        <DialogContent className="w-[90%] bg-white lg:p-10">
          <DialogHeader>
            <div className="">
              <DialogTitle className="lg:font-semiboldbold text-left lg:text-3xl">
                Premium, ready to use images.
              </DialogTitle>
              <DialogTitle className="lg:font-semiboldbold text-left lg:text-3xl">
                Get unlimited access.
              </DialogTitle>

              <ul className="mt-2 lg:mt-4">
                {features.map((item, index) => (
                  <li className="flex items-center gap-2 lg:gap-4" key={index}>
                    <PlusIcon></PlusIcon>
                    <p className="text-sm lg:text-lg">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <DialogDescription className="hidden"></DialogDescription>

            <div className="">
              <RadioGroup
                onValueChange={onOptionChange}
                className="mt-4 flex items-center lg:mt-8 lg:gap-6"
                defaultValue="yearly"
                value={subscription}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yearly" id="r1" />
                  <Label htmlFor="r1">Yearly</Label>
                  <Badge
                    className="border-none bg-emerald-500 text-white outline-none"
                    variant={"outline"}
                  >
                    62% off
                  </Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="monthly" id="r2" />
                  <Label htmlFor="r2">Monthly</Label>
                </div>
              </RadioGroup>
              <div className="mt-1 flex items-center gap-2 text-2xl lg:mt-3 lg:gap-4 lg:text-5xl lg:font-semibold">
                <p className="text-gray-300 line-through">£16</p>
                <p>£{price}</p>
                <span className="text-xs font-normal lg:w-1/5 lg:text-base lg:font-semibold lg:leading-tight">
                  {subscription === "yearly"
                    ? "GBP per month*"
                    : "GBP per month"}
                </span>
              </div>
              <Button
                className="mt-2 w-full lg:mt-6 lg:w-2/3 lg:py-[20px] lg:text-base"
                variant={"default"}
              >
                Get Photop+
              </Button>

              {subscription === "yearly" ? (
                <p className="mt-2 text-left text-xs text-gray-400 lg:mt-4">
                  * when paid annually
                </p>
              ) : (
                <p className="mt-2 text-left text-xs text-gray-400 lg:mt-4">
                  <Button
                    onClick={switchToYearly}
                    size={"sm"}
                    className="m-0 h-auto p-0 text-xs leading-none underline"
                    // variant={"customLink"}
                    variant={"ghost"}
                  >
                    Switch to yearly
                  </Button>{" "}
                  to get{" "}
                  <span className="font-semibold text-fuchsia-500">
                    62% off
                  </span>
                </p>
              )}

              <p className="text-left text-xs text-gray-400">
                Renews automatically. Cancel anytime.
              </p>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const features = [
  "Members-only content added monthly",
  "Unlimited royalty-free downloads",
  "Illustrations",
  "New",
  "Enhanced legal protections",
];

export default Premium;
