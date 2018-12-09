var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');

function SelectLanguage (props){
 //A stateless functional compoenent
 var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
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

// state
// lifecycle events
// ui 




class Popular extends React.Component {
  constructor (props) {
    super();
    this.state = {
      selectedLanguage: 'All',
      repos: null 
    };
    //ensures that this.updateLanguage is called in correct context, when called later (i.e., in the JSX function)
    this.updateLanguage = this.updateLanguage.bind(this); 

  }

  componentDidMount (){
  //AJAX
   this.updateLanguage(this.state.selectedLanguage);
}




  updateLanguage(lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang,
        repos: null

      }
    });

     api.fetchPopularRepos(lang)
      .then(function(repos) {

        this.setState(function() {
          return{
            repos: repos

          }


        })

      }.bind(this));
    
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


