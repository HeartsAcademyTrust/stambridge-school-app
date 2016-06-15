import React from 'react';
import helpers from '../../utils/helpers';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      original_photos_para: (<p></p>)
    };
  }

  componentDidMount() {
    jQuery('#nanoGallery1').nanoGallery({
      kind: 'flickr',
      userID: '138772545@N07',

      colorScheme: 'darkBlue',

      thumbnailL1Width: 'auto',
      thumbnailL1Height: '300',

      thumbnailWidth: 'auto',
      thumbnailHeight: '200 XS300 SM300 LA250 XL200',

      thumbnailHoverEffect: [{
        name: 'imageScale150', duration: 700
      }, {
        name: 'labelAppear75', duration: 400
      }, {
        name: 'descriptionAppear', duration: 1000
      }],
      imageTransition: 'slide',
      thumbnailLabel: { display: true, align: 'center', position: 'overImageOnMiddle' },
      galleryFullpageButton: true
    });

    helpers.getStambridgeFlickrPhotos.then((response) => {
      if (parseInt(response.data.photos.total, 10) === 0) {
        $('#nanoGallery1').html("There are currently no photos uploaded in Stambridge School's photo gallery...");
        document.getElementById('nanoGallery1').className = 'flow-text';
      } else {
        this.setState({ original_photos_para: (
          <p className="flow-text">
            The original photos can be found on
            <a href="https://www.flickr.com/photos/stambridgeprimaryschool/">
              <b> Stambridge Schools Flickr</b>.
            </a>
          </p>
        ) });
      }
    });
  }

  render() {
    return (
      <div className="container" style={{ paddingBottom: '10px' }}>
        <div className="row">
          <div id="nanoGallery1" style={{ fontSize: '1.5em' }}></div>
          {this.state.original_photos_para}
        </div>
      </div>
		);
  }
}

export default Gallery;
