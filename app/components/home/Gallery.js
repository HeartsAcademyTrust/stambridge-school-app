import React from 'react';
import helpers from '../../utils/helpers';


class Gallery extends React.Component {
	constructor(props){
      super(props);
      this.state = {
        users_photo_size: 0
      };
    }

	componentDidMount(){
		helpers.getStambridgeFlickrPhotos
		.then((response) => {
			this.setState({
				users_photo_size: response.data.photos.total
			});
		});
		$('.button-collapse').sideNav();
	}

	render() {
		var imgStyle = {
			display: 'block',
			marginRight: 'auto',
			marginLeft: 'auto',
			width: '260px'
		};

		var stambridgeFlickrItGallery = '';

		if (this.state.users_photo_size > 0) {
			stambridgeFlickrItGallery = ( 
				<div style={{position: 'relative', paddingBottom: '76%', height: 0, overflow: 'hidden'}}>
					<iframe id='iframe' 
						src='//flickrit.com/slideshowholder.php?height=75&size=big&count=5&userId=138772545@N07&click=true&caption=on&credit=2&transition=0&layoutType=responsive&sort=0' 
						scrolling='no' 
						frameborder='0'
						style={{width:'100%', height:'100%', position: 'absolute', top:0, left:0}}>
					</iframe>
				</div>
			);
		}

		return(
			<div className="container">
				<a href="http://www.heartsacademytrust.co.uk/" target="_blank">
					<img style={imgStyle} 
					className="center" 
					src="http://www.heartsacademytrust.co.uk/wp-content/uploads/2014/04/HEARTS-logoFIN-01-Copy1.png"/>
				</a>

				<h2 className="indigo-text text-darken-4">Welcome to Stambridge School</h2>
							
				{stambridgeFlickrItGallery}

				<p className="flow-text"> 
					Stambridge Primary School is committed to providing an inspirational environment,
					through a culture of success and achievement, in which individuals can flourish as confident, happy learners.
				</p>
			</div>
		);
	}
}

export default Gallery;