import React from 'react';

function LocationList() {
  const locations = [
    { name: 'Bún Chả Hương Liên', address: 'Đống Đa, Hà Nội' },
    { name: 'Phở Thìn', address: 'Hoàn Kiếm, Hà Nội' },
  ];

  return (
    <div className="location-list">
      <h2>Địa Điểm Nổi Bật</h2>
      <ul>
        {locations.map((location, index) => (
          <li key={index}>{location.name} - {location.address}</li>
        ))}
      </ul>
    </div>
  );
}

export default LocationList;
