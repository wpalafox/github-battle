var React = require('react');
var PropTypes = require('prop-types');


function SelectLanguage (props){
 //A stateless functional compoenent
 const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
	
	<ul className='languages'>

	    {languages.map(function(lang){
          
            return (
            	//<p>Selected Language: {this.state.selectedLanguage}</p>
            	<li 
            	  style={lang === props.selectedLanguage ? {color: '#d0021b'}: null}
            	  onClick={props.onSelect.bind(null, lang)}
            	  key={lang}>
            	  
            		{lang}
            	</li>


            )

	    })}

	 </ul>
  )
}




SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,

};


class Popular extends React.Component {
	constructor (props) {
	  super();
	  this.state = {
	  	selectedLanguage: 'All',
	  };
	  //ensures that this.updateLanguage is called in correct context, when called later (i.e., in the JSX function)
	  this.updateLanguage = this.updateLanguage.bind(this); 

	}

	updateLanguage(lang) {
		this.setState(function () {
			return {
			  selectedLanguage: lang,

			}
		});
	}

	
	render(){
		
	
		return(
		  <div>
		    <SelectLanguage 
		      selectedLanguage={this.state.selectedLanguage}
		      onSelect={this.updateLanguage} /> 

		  </div>

		 
		)
	}

}


module.exports = Popular; 
