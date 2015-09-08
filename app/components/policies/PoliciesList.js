import React from 'react';

class PoliciesList extends React.Component{
	render(){
		var policies = this.props.policies.map((policy, index) => {
			return <a href={policy.file} className="collection-item" key={index}>{policy.title}</a>
		});
		return(
			<ul className="collection">
				{policies}
  		</ul>
		)
	}
};

export default PoliciesList;