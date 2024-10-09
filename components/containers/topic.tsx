import React, { useState, useEffect } from "react";

interface Item {
  title: string;
}

const Topic = () => {
  const [dataa, setDataa] = useState<Item[]>([]);

  const fetchData = async () => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    const url = `https://api.unsplash.com/topics?page=1&client_id=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();
    setDataa(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {dataa.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))}
    </div>
  );
};

export default Topic;
