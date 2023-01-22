import React from 'react'
import QuoteButton from './QuoteButton'

const QuoteBox = ({quote, newRandomQuote, color}) => {
    return (
        <div className='quoteBox' style={{color: color}}>
            <p className='quoteBox__quote'>{quote.quote}</p>
            <h3 className='quoteBox__author'>{quote.author}</h3>
            <i className='quoteBox__icon bx bxs-quote-alt-left'></i>
            <QuoteButton 
            newRandomQuote={newRandomQuote}
            color={color}
            />
        </div>
    )
}

export default QuoteBox