import React, { useState, useEffect } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CaretSortIcon, ImageIcon } from "@radix-ui/react-icons";

interface SelectDemoProps {
  valueChange: any;
  placeholder: string;
  filterType: 'orientation' | 'sort';
}

export function SelectDemo({ valueChange, placeholder, filterType }: SelectDemoProps) {


const orientation = ["All", "Portrait", "Landscape"];

const sort = [`Relevance`, `Newest`, `Popular`];

const options = filterType === 'orientation' ? orientation : sort;

  return (
    <>
      <Select onValueChange={valueChange}>
        <SelectTrigger className="w-[180px]">
            {filterType === 'orientation' ? <ImageIcon /> : null}
          <SelectValue placeholder={placeholder}/>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{filterType === 'orientation' ? 'Orientation' : 'Sort By'}</SelectLabel>
            {options.map((option, index) => (
              <SelectItem value={option} key={index}>
                <div className="flex items-center gap-2">
                  {/* <ImageIcon /> */}
                  <div className="">{option}</div>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}



