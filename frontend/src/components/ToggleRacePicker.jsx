// ToggleRacePicker.jsx

import React from "react";

function ToggleRacePicker({ onToggle, races, selectedRace, onFilter }) {
  return (
    <div className="race-picker">
      <label htmlFor="race">Sélectionner la race</label>
      <select
        name="race"
        value={selectedRace}
        onChange={(e) => onFilter(e.target.value)}
      >
        <option key="Toutes" value="_all_">
          Toutes les races
        </option>
        {races
          .filter((breed) => breed.race !== "")
          .map((breed) => (
            <option key={breed.race} value={breed.race}>
              {breed.race}
            </option>
          ))}
      </select>

      <button type="button" onClick={onToggle}>
        Filtrer
      </button>
    </div>
  );
}

export default ToggleRacePicker;
