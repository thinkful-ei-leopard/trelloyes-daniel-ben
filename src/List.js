import Card from './Card'
import React from 'react'
import App from './App'

function mapCards(cards) {
  return(
    cards.map(card => <Card/>)
  )
}

class List extends React.Component {
  render() {
    return(
      <section className="List"> 
      <header className="List-header"><h2>{this.props.header}</h2></header>
      <div className="List-cards"> {
      cards.map(card => <Card key={this.card.id} title={this.card.title} content={this.card.content} />)
}
      </div>
      </section>

    )
  }
}