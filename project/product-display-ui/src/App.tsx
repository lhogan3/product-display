import { useState, useCallback, useEffect } from "react";
import type { Shoe } from "./types";
import "./App.css";
import ShoeForm from "./ShoeForm";

function App() {
  const [shoes, setShoes] = useState<Shoe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchShoes = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/shoes");
      if (!response.ok) {
        throw new Error("Failed to fetch shoes list.");
      }
      const data: Shoe[] = await response.json();
      setShoes(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(`Error: ${err.message}. Is Spring Boot running on 8080?`);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch the data when the component first mounts
  useEffect(() => {
    fetchShoes();
  }, [fetchShoes]);

  return (
    <div className="app-container">
      <header>
        <h1>Shoes Display</h1>
        <hr />
      </header>

      <div className="content-area">
        <ShoeForm onShoeCreated={fetchShoes} />

        <div className="shoe-list-container">
          <h2>Available Shoes ({shoes.length})</h2>
          {error && <p className="error-message">🚨 {error}</p>}

          {loading && shoes.length === 0 && <p>Loading products...</p>}

          {shoes.length > 0 && (
            <ul className="shoe-list">
              {shoes.map((shoe) => (
                <li key={shoe.id}>
                  <p>
                    <strong>{shoe.name}</strong>
                  </p>
                  <p>Color: {shoe.color}</p>
                  <p>Size: {shoe.size}</p>
                  <p className="id-tag">ID: {shoe.id}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
