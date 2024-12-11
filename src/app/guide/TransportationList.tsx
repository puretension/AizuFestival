import React from 'react';

const TransportationList = ({ items }) => {
  return (
    <ul className="transportation-list">
      {items.map((item, index) => (
        <li key={index} className="transportation-list-item">
          <a className="station-list-link" href={item.link}>
            <img src={item.icon} className="node-icon" alt={item.alt} />
            <dl className="station-info-area">
              <dt className="station">{item.station}</dt>
              <dd className="pref">{item.prefecture}</dd>
            </dl>
            <img
              src="/static/parche/20241210-1/images/pc/page/area/spot/search-arrow.svg"
              className="arrow"
              alt="arrow"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default TransportationList;
