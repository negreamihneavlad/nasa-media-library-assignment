import { get } from 'lodash'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { Media } from './SearchPage'
import {
  StyledShowPage,
  BackButton,
  MainImage,
  CollectionTitle,
  CollectionDetails,
  DetailItem,
  DetailLabel,
  DetailValue,
  CollectionContainer,
} from './styles'
import { LoadingSpinner } from '../../core/components/styles'
import { getAsset } from '../services/images'

const ShowPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [data, setData] = useState<Media | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      if (id) {
        try {
          const response = await getAsset(id)
          const data = get(response.data, 'collection.items[0]')
          setIsLoading(false)
          setData(data)
        } catch (error) {
          setIsLoading(false)
        }
      }
    }

    fetchData()
  }, [id])

  return (
    <StyledShowPage>
      {isLoading && <LoadingSpinner />}
      {!isLoading && data && (
        <>
          <BackButton onClick={() => navigate(-1)}>Back</BackButton>
          <CollectionContainer>
            <MainImage src={data.links[0].href} alt="Main Image" />
            <CollectionTitle>{data.data[0].title}</CollectionTitle>

            <CollectionDetails>
              <DetailItem>
                <DetailLabel>Photographer: </DetailLabel>
                <DetailValue>
                  {data.data[0].photographer || data.data[0].secondary_creator}
                </DetailValue>
              </DetailItem>

              <DetailItem>
                <DetailLabel>Description: </DetailLabel>
                <DetailValue>{data.data[0].description}</DetailValue>
              </DetailItem>

              <DetailItem>
                <DetailLabel>Keywords: </DetailLabel>
                <DetailValue>{data.data[0].keywords.join(', ')}</DetailValue>
              </DetailItem>

              <DetailItem>
                <DetailLabel>Date: </DetailLabel>
                <DetailValue>{data.data[0].date_created}</DetailValue>
              </DetailItem>
            </CollectionDetails>
          </CollectionContainer>
        </>
      )}
    </StyledShowPage>
  )
}

export default ShowPage
