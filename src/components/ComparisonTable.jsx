import { useState } from "react";
import { platforms } from "../data/platforms";

const ComparisonTable = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredPlatforms = platforms
    .filter((p) =>
      filter === "All" ? true : p.bestFor === filter
    )
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="container table-section">

      {/* Controls */}
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
        
        <input
          type="text"
          placeholder="Search platform..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px"
          }}
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px"
          }}
        >
          <option value="All">All</option>
          <option value="Beginners">Beginners</option>
          <option value="Long-term investors">Long-term investors</option>
          <option value="Retirement accounts">Retirement accounts</option>
          <option value="Active traders">Active traders</option>
          <option value="Advanced tools">Advanced tools</option>
          <option value="Professional traders">Professional traders</option>
        </select>

      </div>

      {/* Table */}
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Platform</th>
              <th>Fees</th>
              <th>Min Deposit</th>
              <th>Best For</th>
              <th>Fractional</th>
              <th>Crypto</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlatforms.map((platform, index) => (
              <tr key={index}>
                <td><strong>{platform.name}</strong></td>
                <td>{platform.fees}</td>
                <td>{platform.minDeposit}</td>
                <td>{platform.bestFor}</td>
                <td>{platform.fractional}</td>
                <td>{platform.crypto}</td>
                <td>{platform.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ComparisonTable;