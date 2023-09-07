import { useFoodContext } from "../hooks/useFoodContext";
import { useNavigate } from "react-router-dom";

const FoodDetails = ({ food }) => {
  const { dispatch } = useFoodContext();
  const navigate = useNavigate();

  const handleDelete = async () => {
    
    const response = await fetch("/api/foods/" + food._id, {
      method: "DELETE"
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_FOOD", payload: json });
    }
  };

  const handleUpdate = async () => {
    navigate("/food-update", { state: { food } });
  }

  return (
    <div className="details">
      <h4>
        <strong>Food Name: </strong>
        {food.Name}
      </h4>
      <p>
        <strong>Food Price: </strong>
        {food.Price}
      </p>
      <p>
        <strong>Food Type: </strong>
        {food.Type}
      </p>
      <p>
        <strong>Description </strong>
        {food.Description}
      </p>
      <button className="delete-btn" onClick={handleDelete}>
        Delete
      </button>
      <button className="update-btn" onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
};

export default FoodDetails;
