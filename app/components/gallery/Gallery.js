import React from 'react';
import InDevelopment from '../dev/InDevelopmentPage';

class Gallery extends React.Component {
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
	}

	render() {
		return (
			<div id="nanoGallery1"></div>
		);
	}
}

export default Gallery;