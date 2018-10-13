import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  
  onFindPetsClick(event){
    let url = '/api/pets';
    this.state.filters.type == 'all'? 
    fetch('/api/pets')
    .then(res => res.json())
    .then(data => {
      this.setState({
        pets:data,
        filters:{
          type:'all'
        }
      })
    }) : fetch(`/api/pets?type=${this.state.filters.type}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        pets:data,
        filters:{
          type:'all'
        }
      })
    })
    
    
    
  }
  
  onChangeType(event){
    this.setState({
      filters:{
        type: event.target.value
      }
    })
    
  }
  
  onAdoptPet(){
    
    
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick={this.onFindPetsClick.bind(this)} onChange={() => this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
