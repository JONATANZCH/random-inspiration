import React from 'react'

const QuoteButton = ({newRandomQuote, color}) => {
    return (
        <button 
            className='quoteBox__button' 
            onClick={newRandomQuote} 
            style={{backgroundColor: color}}
        >
            <i className='bx bx-palette' ></i>
        </button>
    )
}

export default QuoteButton