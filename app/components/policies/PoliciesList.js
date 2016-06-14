import React from 'react';

const PoliciesList = ({ policies }) => (
  <ul className="collection">
    {
      policies.map((policy, index) => (
        <a
          href={policy.file}
          target="_blank"
          className="collection-item col-sm-6  col-md-4 col-lg-6 purple-text text-darken-4"
          key={index}
        >
          <i className="material-icons left">description</i>{policy.title}
        </a>
      ))
    }
  </ul>
);

export default PoliciesList;
