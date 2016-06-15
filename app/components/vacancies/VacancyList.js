import React from 'react';

const VacancyList = ({ vacancies }) => (
  <div>
    {
      vacancies.map((vacancy, index) => (
        <div className="col-xs-12 col-sm-6 col-xl-4" key={index}>
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{vacancy.role}</span>
              {
                vacancy.description &&
                  <p style={{ whiteSpace: 'pre-line' }}>{vacancy.description}</p>
              }
            </div>
          </div>
        </div>
      ))
    }
  </div>
);

export default VacancyList;
