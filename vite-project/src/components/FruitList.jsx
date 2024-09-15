// src/components/FruitList.js
import React from "react";
import FruitCard from "./FruitCard";

const FruitList = ({ onSelectFruit }) => {
  const fruits = [
    {
      id: 1,
      name: "Apple",
      image:
        "https://imgs.search.brave.com/mxdSOwHt2DfDGzQMZJWaMGJcYzO7dN3vzCAHlGj0D8Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTU3/NjE1NTAvcGhvdG8v/cHJvZmVzc2lvbmFs/LXBob3RvZ3JhcGgt/b2YtYS1ncmVlbi1h/cHBsZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9YmdtYWNJ/Um5aN3NrcnBKZ0JP/US1zRjRTUVpfbkhV/S3M5TWpUNzNqQzA1/Zz0",
      description:
        "Apples are a rich source of essential vitamins, minerals, antioxidants, and dietary fiber, making them an excellent addition to a healthy diet. Here are some key benefits: Heart Health: Apples contain antioxidants and fiber, which may help manage blood pressure and cholesterol levels, reducing the risk of cardiovascular disease. Antioxidant Properties: Apples are rich in quercetin, a powerful antioxidant that may protect against cell damage and inflammation, potentially reducing the risk of chronic diseases like cancer and diabetes",
    },
    {
      id: 2,
      name: "Banana",
      image:
        "https://imgs.search.brave.com/Hki6m18R6YJJHZVgkTWlFUgI2KLORS4H0ICcS5LTDAw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9h/aS1nZW5lcmF0ZWQt/aW1hZ2UtYmFuYW5h/XzIzLTIxNTA2ODMw/MjYuanBnP3NpemU9/NjI2JmV4dD1qcGc",
      description:
        "Bananas are a rich source of essential nutrients, making them a great addition to a healthy diet. Here are some key health benefits and descriptions Fiber Content: Bananas are an excellent source of dietary fiber, containing both soluble and insoluble fiber. This promotes regularity, encourages digestive health, and supports healthy blood sugar levels. Potassium Rich: Bananas are a rich source of potassium, an essential mineral that helps maintain healthy blood pressure, supports bone health, and aids in muscle recovery.",
    },
    {
      id: 3,
      name: "Papaya",
      image:
        "https://imgs.search.brave.com/XcEI9phtLkpqew3W1JYG34u4x7-wU9fJvSs55N2Gf_8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzkwLzM5LzEx/LzM2MF9GXzg5MDM5/MTEyOV9RMWVSUkhN/eEQ1U0EwMjRyNGlp/bzQ2Y0F1Ym9TN1oy/bS5qcGc",
      description:
        "Papaya is a tropical fruit rich in vitamins, minerals, and antioxidants, making it an excellent addition to a healthy diet. Here are some key benefits and uses: High in vitamins A and C, potassium, and fiber Rich in carotenoids, including lycopene, beta-carotene, and alpha-carotene Good source of magnesium, folate, and antioxidants",
    },
    // Add more fruits as needed
  ];

  return (
    <div className="fruit-list">
      {fruits.map((fruit) => (
        <FruitCard
          key={fruit.id}
          fruit={fruit}
          onClick={() => onSelectFruit(fruit)}
        />
      ))}
    </div>
  );
};

export default FruitList;
