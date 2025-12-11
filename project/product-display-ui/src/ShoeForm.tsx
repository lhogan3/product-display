import { useState } from "react";
import type { NewShoeRequest } from "./types";

interface ShoeFormProps {
  onShoeCreated: () => void;
}

const ShoeForm = ({ onShoeCreated }: ShoeFormProps) => {
  const [newShoe, setNewShoe] = useState<NewShoeRequest>({
    name: "",
    color: "",
    size: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // API call to the Spring Boot backend
      const response = await fetch("/api/shoes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newShoe),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Success: Clear the form and call the refresh handler
      setNewShoe({ name: "", color: "", size: "" });
      onShoeCreated();
    } catch (error) {
      console.error("Failed to create shoe:", error);
      alert(
        "Failed to create shoe. Check the console and ensure the backend is running!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h3>Create New Shoe</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name (e.g., Sneaker)"
          value={newShoe.name}
          onChange={(e) => setNewShoe({ ...newShoe, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Color (e.g., Red)"
          value={newShoe.color}
          onChange={(e) => setNewShoe({ ...newShoe, color: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Size (e.g., 10.5)"
          value={newShoe.size}
          onChange={(e) => setNewShoe({ ...newShoe, size: e.target.value })}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Shoe"}
        </button>
      </form>
    </div>
  );
};

export default ShoeForm;
