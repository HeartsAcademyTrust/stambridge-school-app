import React from 'react';
import moment from 'moment';

const SimplePage = ({ title, description, datePublished, file, dataExists }) => {
  let page = <p className="flow-text">There is currently no {title} uploaded...</p>;
  if (dataExists) {
    const dontBreakOutOfContainer = {
      /* These are technically the same, but use both */
      overflowWrap: 'break-word',
      wordWrap: 'break-word',

      msWordBreak: 'break-all',
      /* Instead use this non-standard one: */
      wordBreak: 'break-word',

      /* Adds a hyphen where the word breaks, if supported (No Blink) */
      msHyphens: 'auto',
      mozHyphens: 'auto',
      webkitHyphens: 'auto',
      hyphens: 'auto'
    };
    page = (
      <div>
        {description && <p className="flow-text" style={dontBreakOutOfContainer}>{description}</p>}
        {
          datePublished &&
            <span className="grey-text lighten-2">
              Uploaded: {moment(datePublished).format('Do MMMM YYYY')}
              <br />
            </span>
        }
        {
          file &&
            <a
              href={file}
              target="_blank"
              style={{ marginBottom: '10' }}
              className="btn-floating btn-large waves-effect waves-light purple darken-4"
            >
              <i className="material-icons">description</i>
            </a>
        }
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <h1 className="indigo-text text-darken-4">{title}</h1>
        {page}
      </div>
    </div>
  );
};

export default SimplePage;
