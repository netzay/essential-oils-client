import React, { Component } from 'react'
import Favorite from '../components/Favorite'
import CardDeck from 'react-bootstrap/CardDeck'
import { connect } from 'react-redux'
import { deleteFavorite } from '../actions/favorites'



class Favorites extends Component {



  render(){
    return(
      <div>
        <h2>Favorites</h2>
        <CardDeck>{this.props.favorites ?
          this.props.favorites.map((favorite) =>
          <Favorite key={favorite.name} oil={favorite} delete={this.props.deleteFavorite}/>)
          : <p>Oops, you haven't starred any favorites yet!</p>}
        </CardDeck>
      </div>
    )
  }


}

const mapStateToProps = state => {
  return {
    favorites: state.favorites.favoritesData
  }
}

export default connect(mapStateToProps, {deleteFavorite})(Favorites);
