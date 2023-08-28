import { useEffect, useState } from "react";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const tours = await res.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return <h2>Tours Starter</h2>;
};
export default App;
