import React from "react"
import styled from "styled-components"

const Title = ({ firstWord, rest, className }) => {
  return (
    <div className={className}>
      <h4>
        <span className="firstWord">{firstWord}</span>
        <span>{rest}</span>
      </h4>
    </div>
  )
}

export default styled(Title)`
  text-transform: uppercase;
  font-size: 2.3rem;
  margin-bottom: 2rem;
  h4 {
    text-align: center;
    letter-spacing: 12px;
    color: var(--primaryColor);
  }
  .firstWord {
    color: var(--mainBlack);
  }
  span {
    display: block;
  }
  @media (min-width: 576px) {
    display: inline-block;
    margin: 0 0.35rem;
  }
`
