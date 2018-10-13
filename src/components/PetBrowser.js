import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  onPetAdopt(){
    
  }
  
  gTtype = (){
    if(this.props.pet.gender == 'male'){
      return '♀'
      
    }else{
      return '♂'
    }
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
