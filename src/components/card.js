import React from 'react';
import '../style/card.css';

class Card extends React.Component {
    render(){
        return(
            <div className='card'>
                card title
                <img src={this.props.image} alt={this.props.imageAlt} className = 'card-image' />
                <div className='textBox'>
                    {this.props.textBox}
                </div>
            </div>
        );
    }
}

export default Card;