import React from 'react';


class CoreValues extends React.Component{
	render(){
		var imgRightFloatStyle = {
			float: 'right'
		}

		return (
			<div>
				<div className="col s12">
					<img className="col s12 m2" src="../images/Happy.gif"/>
					<p className="flow-text col s12 m10">
						We promote <b className="indigo-text text-darken-4">HAPPINESS</b> through a creative, exciting and practical curriculum, 
						which generates a love of, and interest in, learning.
					</p>
				</div>

				<div className="col s12">
					<img className="col s12 m2" src="../images/Self-Esteem.jpg" style={imgRightFloatStyle}/>
					<p className="flow-text col s12 m10">
						Great value is placed on pupils’ self <b className="indigo-text text-darken-4">ESTEEM</b> which is developed through a 
						well-motivated attitude to learning, a healthy lifestyle, good social skills, self-discipline and a positive self-image.
					</p>
				</div>

				<div className="col s12">
					<img className="col s12 m2" src="../images/achievement-star-transparent.png"/>
					<p className="flow-text col s12 m10">
						We promote the highest standards of <b className="indigo-text text-darken-4">ACHIEVEMENT</b> in all areas of the 
						curriculum and help all pupils to fulfil their potential regardless of gender, race or ability.
					</p>
				</div>

				<div className="col s12">
					<img className="col s12 m2" src="../images/r&r_values.png" style={imgRightFloatStyle}/>
					<p className="flow-text col s12 m10">
						We foster <b className="indigo-text text-darken-4">RESPECT & RESPONSIBILITY</b> for all by establishing good 
						relations between the school and home, church and community. Pupils are taught respect for themselves, others and the environment.
					</p>
				</div>

				<div className="col s12">
					<img className="col s12 m2" src="../images/truth.jpg"/>
					<p className="flow-text col s12 m10">
						We encourage <b className="indigo-text text-darken-4">TRUTH</b> and honesty in all aspects of school life – relationships, 
						work and the curriculum.
					</p>
				</div>

				<div className="col s12">
					<img className="col s12 m2" src="../images/spirituality.bmp" style={imgRightFloatStyle}/>
					<p className="flow-text col s12 m10">
						We develop <b className="indigo-text text-darken-4">SPIRITUALITY & SERVICE</b> so that calm, quiet, reflective times, 
						including prayers are part of school life and beauty is appreciated.
					</p>
				</div>
			</div>
		)
	}
};

export default CoreValues;