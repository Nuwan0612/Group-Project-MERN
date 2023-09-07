import { useEffect } from "react";
import { useFoodContext } from "../hooks/useFoodContext";

// components
import FoodDetails from "../components/FoodDetails";
import Layout from "../components/Layout";
import FoodForm from "../components/FoodForm";

const Food = () => {
  const { foods, dispatch } = useFoodContext();

  useEffect(() => {
    const fetchFood = async () => {
      const response = await fetch("/api/foods");
      const json = await response.json();
      console.log(json);

      if (response.ok) {
        dispatch({ type: "SET_FOODS", payload: json });
      }
    };

    fetchFood();
    
  }, [dispatch]);

  return (
    <Layout>
      <div>
        {foods &&
          foods.map((food) => <FoodDetails food={food} key={food._id} />)}
      </div>
      <FoodForm />
    </Layout>
  );
};

export default Food;
