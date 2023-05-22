import styled from 'styled-components'

export const SearchPage = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`

export const SearchPageTitle = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.brandPrimaryDark};
`

export const SearchForm = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

export const SearchPlaceholder = styled.div`
  margin-top: 50px;
  padding: 0 30%;
  img {
    width: 100%;
    height: 100%;
  }
`

export const ClearButton = styled.span`
  color: ${(props) => props.theme.brandPrimary};
  text-decoration: underline;
  margin-left: 5px;
`

export const NoResults = styled.span`
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
`

export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0;
`

export const GridItem = styled.div`
  width: 200px;
  height: 250px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
`

export const GridImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;
`

export const GridTitle = styled.span`
  margin-top: 5px;
  font-size: 12px;
`

export const GridLocation = styled.p`
  margin-bottom: 5px;
`

export const GridPhotographer = styled.span`
  font-weight: bold;
  margin-top: 2px;
  font-size: 8px;
`
