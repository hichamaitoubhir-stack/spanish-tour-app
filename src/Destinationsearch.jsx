import { useState } from 'react';

function DestinationSearch({ destinations }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredDestinations = destinations.filter(dest =>
    dest.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Insertar palabra clave"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <ul>
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map(dest => (
            <li key={dest.id}>{dest.name}</li>
          ))
        ) : (
          <li>No destinations found</li>
        )}
      </ul>
    </div>
  );
}

export default DestinationSearch;