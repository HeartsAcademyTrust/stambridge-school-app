import React from 'react';
import InDevelopment from '../dev/InDevelopmentPage';

class Gallery extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        original_photos_para: (<p></p>)
      };
    }

	componentDidMount(){
    jQuery("#nanoGallery1").nanoGallery({
      kind:'flickr',
      userID:'138772545@N07',

      colorScheme: 'darkBlue',

      thumbnailL1Width:'140 XS100 SM100', thumbnailL1Height:'140 XS100 SM100',
      thumbnailWidth:'auto', thumbnailHeight:'200 XS80 SM150 LA250 XL290',

      thumbnailHoverEffect:[{name: 'imageScale150', duration:700}, {name:'labelAppear75', duration:400}, {name:'descriptionAppear', duration:1000}],
      paginationMaxLinesPerPage: 1,
      imageTransition : 'slide',
      thumbnailLabel:{ display:true, align:'center', position:'overImageOnMiddle' },
      galleryFullpageButton: true
    });

    if ($('#nanoGallery1').nanoGallery('galleryCountImages') == 0) {
      $('#nanoGallery1').html("There are currently no photos uploaded in Stambridge School's photo gallery...");
      document.getElementById("nanoGallery1").className = 'flow-text';
    } else {
      this.state.original_photos_para = (
        <p className="flow-text">
          The original photos can be found on 
          <a href="https://www.flickr.com/photos/stambridgeprimaryschool/">
            <b> Stambridge Schools Flickr</b>.
          </a>
        </p>
      );
    };
	}

	render() {
		return (
      <div className="container" style={{paddingBottom:'10px'}}>
        <div className="row">
          <h1 className="indigo-text text-darken-4">Gallery</h1>
  			  <div id="nanoGallery1"></div>
          {this.state.original_photos_para}
        </div>
      </div>
		);
	}
}

export default Gallery;