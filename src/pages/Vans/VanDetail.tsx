import { useEffect, useState } from "react";

import type { Van } from "../../models/van";
import { useParams } from "react-router-dom";
import { getVanById } from "../../api/firebase";

export default function VanDetail() {
  const [isLoading, setIsLoading] = useState(true);
  const [van, setVan] = useState<Van | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getVanById(id)
        .then((van) => setVan(van))
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }
  }, [id]);

  return (
    <div className="van-detail-container">
      {van && !isLoading && (
        <div className="van-detail">
          <img src={van.imageUrl} alt={van.name} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">${van.price} per day</p>
          <p>{van.description}</p>
          <button className="link-button">Book now</button>
        </div>
      )}
      {isLoading && <h1>Loading...</h1>}
    </div>
  );
}
