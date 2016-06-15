import React from 'react';
import helpers from '../../utils/helpers';
import { Link } from 'react-router';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users_photo_size: 0
    };
  }

  componentDidMount() {
    helpers.getStambridgeFlickrPhotos.then((response) => {
      this.setState({
        users_photo_size: response.data.photos.total
      });
    });
    $('.button-collapse').sideNav();
  }

  render() {
    const imgStyle = {
      display: 'block',
      marginRight: 'auto',
      marginLeft: 'auto',
      width: '260px'
    };

    return (
      <div className="container">
        <a href="http://www.heartsacademytrust.co.uk/" target="_blank">
          <img
            style={imgStyle}
            className="center"
            src="http://www.heartsacademytrust.co.uk/wp-content/uploads/2014/04/HEARTS-logoFIN-01-Copy1.png"
          />
        </a>

        <h2 className="indigo-text text-darken-4" style={{ textAlign: 'center' }}>
          Welcome to Stambridge School
        </h2>

        <div id="PRAWBVLC6S"></div>

        <Link className="waves-effect waves-indigo" to="/gallery"><b>See More Photos</b></Link>

        <p className="flow-text">
					Stambridge Primary School is committed to providing an inspirational environment,
          through a culture of success and achievement, in which individuals can flourish as confident, happy learners.
        </p>
      </div>
		);
  }
}

export default Gallery;
