import styled from 'styled-components'

const CardThanksContainer = styled.div`
  text-align: center;
  color: var(--Verdarviolet);
  max-width: 30rem;
  margin-right: auto;
  
  p:first-of-type {
    font-size: 28px;
    text-transform: uppercase;
    margin-bottom: 0;
  }
  
  p:last-of-type {
    opacity: 0.8;
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 30px;
  }
  
  .btn-primary {
    width: 60%;
  }
  
  @media screen and (max-width: 750px) {
    margin: auto;
    margin-top: 19rem;
  }
`

export default CardThanksContainer
