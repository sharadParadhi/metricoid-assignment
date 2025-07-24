import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Cart from "./Cart";

function Products() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.get("https://metricoid-assignment.onrender.com/").then((res) => {
      console.log("res", res);
      const resData = res.data.data;
      setData(resData);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="font-3xl">
      <h1 className="font-bold-16xl">Products</h1>
      <div>
        {data.length ? (
          data?.map((ele,ind)=><Cart key={ind} item={ele}/>)
        ) : (
          <div>
            <h3>No Data Found</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
