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
    const card = this.props.pets.map(p => <Pet key={p.id} pet={p} />)
    return (
    <div className="ui cards">
    
    {card}
    
    </div>
    )
  }
}

export default PetBrowser
