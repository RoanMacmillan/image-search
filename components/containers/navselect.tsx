import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Navselect = () => {
  return (
    <>
      <Select>
        <SelectTrigger value='english' className="w-[180px]">
          <SelectValue placeholder="English" />
        </SelectTrigger>
        <SelectContent>
            {/* <h1 className="text-sm">Select your Language</h1> */}
          <SelectItem value="german">Deutsch</SelectItem>
          <SelectItem value="english">English</SelectItem>

          <SelectItem value="french">Français</SelectItem>
          <SelectItem value="spanish">Español</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};

export default Navselect;
