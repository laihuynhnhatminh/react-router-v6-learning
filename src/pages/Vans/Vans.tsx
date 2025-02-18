import { useEffect, useState } from "react";

import type { Van } from "../../models/van";
import { getVans } from "../../api/firebase";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState<Van[]>([]);

  useEffect(() => {
    getVans().then((vans) => setVans(vans));
  }, []);

  return (
    <div>
      <div className="van-list-container">
        <h1>Find and test your dream van</h1>
        <div className="van-list">
          {vans?.map((van) => (
            <Link key={van.id} to={`/vans/${van.id}`} className="van-tile">
              <img src={van.imageUrl} alt={van.name} />
              <div className="van-info">
                <h2>{van.name}</h2>
                <p>${van.price} per day</p>
              </div>
              <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
