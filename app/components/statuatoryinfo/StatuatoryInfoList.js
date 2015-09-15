import React from 'react';
import moment from 'moment';

class StatuatoryInfoList extends React.Component {
	componentDidUpdate() {
		$(".collapsible").collapsible();
	}
	render() {
		var statuatory_info = this.props.info.map((info, index) => {
			return(
				<li key={index}>
		      <div className="collapsible-header purple-text text-darken-4"><i className="material-icons">info_outline</i>
		      	<p>{info.title} - {moment(info.date_published).format("YYYY")}</p>  
		      	<p className="grey-text darken-1"></p>
		    	</div>
		      <div className="collapsible-body">
		      	<p>{info.description && <span className="flow-text">{info.description}</span>}
		      	<br/>
						<span className="grey-text lighten-2">Uploaded: {moment(info.date_published).format("Do MMMM YYYY")}</span>
						<br/>
			  		{info.file && <a href={info.file} className="btn-floating btn-large waves-effect waves-light red">
					 		<i className="material-icons">description</i>
			  		</a>}</p>
		      </div>
		    </li>
	  	)
		});

		return(
			<ul className="collapsible popout collapsible-accordion" dataCollapsible="accordion">
				{statuatory_info}
			</ul>
		)
	};
}

export default StatuatoryInfoList;

		

