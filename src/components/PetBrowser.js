import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  onPetAdopt(){
    
  }
  
  render() {
    return (
    <div className="ui cards">
    
    <Pet onPetAdopt={this.onPetAdopt}/>
    
    </div>
    )
  }
}

export default PetBrowser
