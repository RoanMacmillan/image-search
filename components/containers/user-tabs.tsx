import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Overlay from "./image-overlay";
import { Photos } from "@/pages/user/[id]";
import axios from "axios";
import { useState, useEffect } from "react";
import { capitalizeFirstLetter } from "@/utils/capitilize";
import { Separator } from "../ui/separator";
import { HeartFilledIcon, ImageIcon } from "@radix-ui/react-icons";
import { RiFolder2Fill } from "react-icons/ri";

interface TabsProps {
  data: Photos[];
  activeUser: string;
  totalCollections: string;
  totalLikes: string;
  totalPhotos: string;
}

const TabsDemo: React.FC<TabsProps> = ({
  data,
  activeUser,
  totalCollections,
  totalLikes,
  totalPhotos,
}) => {
  const [activeTab, setActiveTab] = useState("photos");
  const [likeData, setLikeData] = useState<Photos[]>([]);

  useEffect(() => {
    console.log(`total likes: ${totalLikes}`);
  }, []);

  const fetchData = async () => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    try {
      const response = await axios.get(
        `https://api.unsplash.com/users/${activeUser}/likes?client_id=${apiKey}`,
      );

      const likesData = response.data;
      console.log("fetching...");
      console.log(likesData);
      setLikeData(likesData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (tab: string) => {
    setActiveTab(tab);

    if (tab === "likes" && likeData.length === 0) {
      // console.log(tab)
      fetchData();
    }
  };

  const triggers = ["photos", "likes", "collections"];

  const triggers2 = [
    { id: 1, name: "photos", total: `${totalPhotos}`, icon: <ImageIcon /> },
    { id: 2, name: "likes", total: `${totalLikes}`, icon: <HeartFilledIcon /> },
    { id: 3, name: "collections", total: `${totalCollections}`, icon: <RiFolder2Fill /> },
  ];

  return (
    <Tabs defaultValue="photos" className="mt-20 w-full">
      <TabsList className="grid grid-cols-3 lg:w-1/3 gap-4 bg-transparent">
        {/* <TabsTrigger onClick={() => handleClick(id)}  value="photos">Photos</TabsTrigger>
        <TabsTrigger onClick={handleClick} value="likes">Likes</TabsTrigger>
        <TabsTrigger value="collections">Collections</TabsTrigger> */}

        {triggers2.map((item) => (
          <TabsTrigger
            onClick={() => handleClick(item.name)}
            key={item.id}
            value={item.name}
            className={`relative flex items-center gap-2`}
          >
            {item.icon}
            <div className="">
            <span className="mr-1">{capitalizeFirstLetter(item.name)}</span>
            <span>({item.total})</span>
            </div>
        {/* <div className="h-1 bg-black w-full bottom-[-13px] left-0 absolute"></div> */}
        {item.id === 1 && activeTab === "photos" ? (<div className="h-1 absolute left-[-4px] bottom-[-13px] w-[100px] bg-black"></div>) : null}
        {item.id === 2 && activeTab === "likes" ? (<div className="h-1 absolute left-[0] bottom-[-13px] w-[100px] bg-black"></div>) : null}
        {item.id === 3 && activeTab === "collections" ? (<div className="h-1 absolute left-[0px] bottom-[-13px] w-[115px] bg-black"></div>) : null}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="photos">
        <Card className="rounded-none border-none shadow-none">
        <Separator className="w-full"></Separator>

          <ul className="mx-auto mt-4 md:columns-2 lg:columns-3 lg:gap-6">
            {data.map((item, index) => (
              <li key={index}>
                <Overlay
                  imgSrc={item.urls.regular}
                  imgName={item.id}
                  avatarSrc={item.user.profile_image.small}
                  name={item.user.name}
                  slugUrl={item.slug}
                  accountName={item.user.username}
                ></Overlay>
              </li>
            ))}
          </ul>
        </Card>
      </TabsContent>
      <TabsContent value="likes">
        <Card className="rounded-none border-none shadow-none">
        <Separator className="w-full"></Separator>


          {likeData.length > 0 ? (
            <ul className="mx-auto mt-4 md:columns-2 lg:columns-3 lg:gap-6">
              {likeData.map((item, index) => (
                <li key={index}>
                  <Overlay
                    imgSrc={item.urls.regular}
                    imgName={item.id}
                    avatarSrc={item.user.profile_image.small}
                    name={item.user.name}
                    slugUrl={item.slug}
                    accountName={item.user.username}
                  ></Overlay>
                </li>
              ))}
            </ul>
          ) : (
            <div>no likes</div>
          )}
        </Card>
      </TabsContent>
      <TabsContent value="collections">
        <Card className="rounded-none border-none shadow-none">
        <Separator className="w-full"></Separator>

          <div>Collections</div>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default TabsDemo;
