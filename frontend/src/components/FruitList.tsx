import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  getdata,
  read,
  create,
  update,
  remove,
} from "../functions/product";

interface Product {
  id?: string;
  name: string;
  detail: string;
  price: number;
  imageUrl: string;
  // Add other product fields as needed
}


const FruitList: React.FC = () => {
  const [fruits, setFruits] = useState<Product[]>([]);

  // useEffect(() => {
  //   axios.get<Fruit[]>("http://localhost:5000/product").then((response) => {
  //     setFruits(response.data);
  //   });
  // }, []);

  useEffect(() => {
    // code
    loadData();
  }, []);

  const loadData = async () => {
    getdata()
      .then((res) => setFruits(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Fruit List</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            <img src={fruit.imageUrl} alt={fruit.name} width="50" height="50" />
            {fruit.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;
