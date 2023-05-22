import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.grayLighter};
  padding: 20px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
`

export const HeaderTitle = styled.span`
  color: ${(props) => props.theme.brandPrimary};
  font-weight: ${(props) => props.theme.fontWeightBold};
  font-size: 18px;
`
