import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

interface CardData {
  title: string;
  description: string;
}

const Main: React.FC<{ searchQuery: string }> = ({ searchQuery }) => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<{
        statusCode: number;
        data: CardData[];
        message: string;
        success: boolean;
      }>("http://localhost:8000/api/v1/cards")
      .then((response) => {
        const { data } = response.data;
        setCards(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching card data: " + (error as Error).message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white flex items-center justify-center w-full min-h-[400px] p-4">
      <div className="grid grid-cols-2 gap-10 w-full max-w-screen-lg">
        {filteredCards.map((cardData, index) => (
          <Card
            key={index}
            title={cardData.title}
            description={cardData.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
