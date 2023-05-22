import styled from 'styled-components'

export const ShowPage = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`

export const BackButton = styled.button`
  display: inline-block;
  position: absolute;
  padding: 8px 16px;
  background-color: #eee;
  color: #333;
  left: 20px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
`

export const CollectionContainer = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 500px;
  /* align-items: center; */
  flex-direction: column;
`

export const MainImage = styled.img`
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
`

export const CollectionTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  padding: 0 20px;
`

export const CollectionDetails = styled.div`
  margin-bottom: 20px;
  padding: 0 20px;
`

export const DetailItem = styled.div`
  margin-bottom: 10px;
`

export const DetailLabel = styled.span`
  font-weight: bold;
`

export const DetailValue = styled.span``
