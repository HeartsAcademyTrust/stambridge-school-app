import React from 'react';


class CoreValues extends React.Component{
	render(){
		var imgRightFloatStyle = {
			float: 'right'
		};

		return (
			<div className="row">
				<div className="col-xs-12">
					<div className="card-panel red darken-4 white-text">
						<p className="flow-text">
							<a href="http://www.heartsacademytrust.co.uk/" target="_blank">
							<b>HEARTS</b> Academy Trust </a> is committed to providing a happy, 
							caring and safe learning environment for all within a values led context where
							everyone feels valued and grows in confidence and independence.
						</p>
					</div>
				</div>
				<div className="col-xs-12">
					<div className="col-xs-12 col-sm-4 col-md-3 col-xl-2">
						<img className="circle img-responsive" src="../images/Mr_Happy.JPG"/>
					</div>
					<p className="flow-text col-xs-12 col-sm-8 col-md-9 col-xl-10">
						We promote <b className="indigo-text text-darken-4">HAPPINESS</b> through a creative, 
						exciting and practical curriculum, which generates a love of, and interest in, learning and a resilience 
						and hope which supports us through challenging times.
					</p>
				</div>

				<div className="col-xs-12">
					<div className="col-xs-12 col-sm-4 col-sm-push-8 col-md-3 col-md-push-9 col-xl-2 col-xl-push-10">
						<img className="img-responsive" src="../images/Self-Esteem.jpg" style={imgRightFloatStyle}/>
					</div>
					<p className="flow-text col-xs-12 col-sm-8 col-sm-pull-4 col-md-9 col-md-pull-3 col-xl-10 col-xl-pull-2">
						Great value is placed on pupils’ self <b className="indigo-text text-darken-4">ESTEEM</b> which is developed through 
						a positive and motivated attitude to learning, a healthy lifestyle, good social skills, self-discipline and a positive self-image.
					</p>
				</div>

				<div className="col-xs-12">
					<div className="col-xs-12 col-sm-4 col-md-3 col-xl-2">
						<img className="img-responsive" src="../images/achievement-star-transparent.png"/>
					</div>
					<p className="flow-text col-xs-12 col-sm-8 col-md-9 col-xl-10">
						We promote the highest standards of <b className="indigo-text text-darken-4">ACHIEVEMENT</b> in all areas of the 
						curriculum and help all pupils to fulfil their potential regardless of gender, race or ability.
					</p>
				</div>

				<div className="col-xs-12">
					<div className="col-xs-12 col-sm-4 col-sm-push-8 col-md-3 col-md-push-9 col-xl-2 col-xl-push-10">
						<img className="img-responsive" src="../images/r&r_values2.png" style={imgRightFloatStyle}/>
					</div>
					<p className="flow-text col-xs-12 col-sm-8 col-sm-pull-4 col-md-9 col-md-pull-3 col-xl-10 col-xl-pull-2">
						We foster <b className="indigo-text text-darken-4">RESPECT & RESPONSIBILITY</b> for all by establishing good 
						relations between the school and home, church and community. Pupils are taught respect for themselves, others and the environment.
					</p>
				</div>

				<div className="col-xs-12">
					<div className="col-xs-12 col-sm-4 col-md-3 col-xl-2">
						<img className="img-responsive" src="../images/truth.jpg"/>
					</div>
					<p className="flow-text col-xs-12 col-sm-8 col-md-9 col-xl-10">
						We encourage <b className="indigo-text text-darken-4">TRUTH</b> and honesty in all aspects of school life – relationships, work and the
						curriculum and learn to trust and accept others’ individuality and uniqueness.
					</p>
				</div>

				<div className="col-xs-12">
					<div className="col-xs-12 col-sm-4 col-sm-push-8 col-md-3 col-md-push-9 col-xl-2 col-xl-push-10">
						<img className="img-responsive" src="../images/spirituality3.jpg" style={imgRightFloatStyle}/>
					</div>
					<p className="flow-text col-xs-12 col-sm-8 col-sm-pull-4 col-md-9 col-md-pull-3 col-xl-10 col-xl-pull-2">
						We develop <b className="indigo-text text-darken-4">SPIRITUALITY & SERVICE</b> so that calm, quiet, reflective times which support deep
						thought, including prayer, are part of school life and beauty is appreciated. We promote a service culture that reflects our duty to support 
						and show compassion to of all members of the community
					</p>
				</div>
			</div>
		);
	}
}

export default CoreValues;