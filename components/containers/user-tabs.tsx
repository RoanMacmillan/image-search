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
import { useState } from "react";
import { capitalizeFirstLetter } from "@/utils/capitilize";

interface TabsProps {
  data: Photos[];
  activeUser: string;
}

const TabsDemo: React.FC<TabsProps> = ({ data, activeUser }) => {
  const [activeTab, setActiveTab] = useState("photos");
  const [likeData, setLikeData] = useState<Photos[]>([]);

  const fetchData = async () => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    try {
      const response = await axios.get(
        `https://api.unsplash.com/users/${activeUser}/likes?client_id=${apiKey}`,
      );

      const likesData = response.data;
      console.log('fetching...')
      console.log(likesData);
      setLikeData(likesData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (tab:string) => {
    setActiveTab(tab);

    if (tab === 'likes' && likeData.length === 0) {

        // console.log(tab)
        fetchData();
    }

  };

  const triggers = ["photos", "likes", "collections"];

  return (
    <Tabs defaultValue="photos" className="mt-20 w-full">
      <TabsList className="grid grid-cols-3 lg:w-1/3">
        {/* <TabsTrigger onClick={() => handleClick(id)}  value="photos">Photos</TabsTrigger>
        <TabsTrigger onClick={handleClick} value="likes">Likes</TabsTrigger>
        <TabsTrigger value="collections">Collections</TabsTrigger> */}

        {triggers.map((item, index) => (
          <TabsTrigger
            onClick={() => handleClick(item)}
            key={index}
            value={item}
          >
            {capitalizeFirstLetter(item)}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="photos">
        <Card className="rounded-none border-none shadow-none">
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
          <div>Collections</div>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default TabsDemo;
