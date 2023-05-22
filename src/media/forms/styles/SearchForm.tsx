import styled from 'styled-components'

export const SearchForm = styled.form`
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    > div,
    button {
      margin-bottom: 10px;
    }
  }
`

export const ClearButton = styled.span`
  color: ${(props) => props.theme.brandPrimary};
  text-decoration: underline;
  margin-left: 5px;
`
