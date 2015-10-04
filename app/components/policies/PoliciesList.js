import React from 'react';

class PoliciesList extends React.Component{
	render(){
		var policies = this.props.policies.map((policy, index) => {
			return (
				<a href={policy.file} target="_blank" className="collection-item col-sm-6  col-md-4 col-lg-6 purple-text text-darken-4" key={index}>
					<i className="material-icons left">description</i>{policy.title}
				</a>
			);
		});

		return(
			<ul className="collection">
				{policies}
			</ul>
		);
	}
}

export default PoliciesList;