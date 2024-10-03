import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarDemoProps {
  img: string;
}

export const AvatarDemo: React.FC<AvatarDemoProps> = ({ img }) => {
  return (
    <Avatar className="w-8 h-8 pointer-events-auto">
      <AvatarImage src={img} alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};
