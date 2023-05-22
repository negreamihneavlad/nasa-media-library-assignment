import { get } from 'lodash'
import { useEffect, useState } from 'react'
import { useLocation, createSearchParams, useNavigate } from 'react-router-dom'

import {
  StyledSearchPage,
  StyledSearchForm,
  SearchPageTitle,
  SearchPlaceholder,
  NoResults,
  GridContainer,
  GridItem,
  GridImage,
  GridTitle,
  GridPhotographer,
} from './styles'
import placeholder from '../../common/assets/img/placeholder.png'
import { Pagination } from '../../core/components'
import { LoadingSpinner } from '../../core/components/styles'
import { SearchForm } from '../forms'
import { IFormValues } from '../forms/SearchForm'
import { searchImages } from '../services/images'

export interface MediaData {
  nasa_id: string
  title: string
  secondary_creator: string
  photographer: string
  description: string
  keywords: string[]
  date_created: string
}

export interface LinksData {
  href: string
}

export interface Media {
  data: MediaData[]
  links: LinksData[]
}

const SearchPage: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const [data, setData] = useState<Media[] | []>([])
  const [isLoading, setIsLoading] = useState(false)
  const [totalResults, setTotalResults] = useState(0)

  const searchParams = new URLSearchParams(location.search)
  const query = searchParams.get('query')
  const yearStart = searchParams.get('yearStart')
  const yearEnd = searchParams.get('yearEnd')

  const page = searchParams.get('page')

  const [currentPage, setCurrentPage] = useState(Number(page) || 1)

  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        setIsLoading(true)
        try {
          const response = await searchImages(
            query,
            yearStart,
            yearEnd,
            currentPage,
          )
          const data = get(response.data, 'collection.items')
          const totalResults = get(
            response.data,
            'collection.metadata.total_hits',
          )
          setIsLoading(false)
          setData(data)
          setTotalResults(totalResults)
        } catch (error) {
          setIsLoading(false)
        }
      }
    }
    fetchData()
  }, [location.search])

  const handlePageChange = async (page: number) => {
    setCurrentPage(page)
    navigate({
      pathname: '/home',
      search: `?${createSearchParams({
        ...(query && { query }),
        ...(yearStart && { yearStart }),
        ...(yearEnd && { yearEnd }),
        page: `${page}`,
      })}`,
    })
  }

  const submitSearch = (values: IFormValues) => {
    setCurrentPage(1)
    navigate({
      pathname: '/home',
      search: `?${createSearchParams({
        query: values.query,
        ...(values.yearStart && {
          yearStart: new Date(values.yearStart).getFullYear().toString(),
        }),
        ...(values.yearEnd && {
          yearEnd: new Date(values.yearEnd).getFullYear().toString(),
        }),
        page: `1`,
      })}`,
    })
  }

  const clearSearch = () => {
    navigate({
      pathname: '/home',
    })

    setData([])
  }

  const navigateToShowPage = (nasaId: string) => {
    navigate({
      pathname: `/show/${nasaId}`,
    })
  }

  return (
    <StyledSearchPage>
      <SearchPageTitle>Search Nasa Media Library</SearchPageTitle>
      <StyledSearchForm>
        <SearchForm
          initialValues={{
            query: query || undefined,
            yearStart: yearStart ? new Date(yearStart) : undefined,
            yearEnd: yearEnd ? new Date(yearEnd) : undefined,
          }}
          onSubmit={submitSearch}
          reset={clearSearch}
        />
      </StyledSearchForm>

      {!data.length && query && !isLoading && <NoResults>No results</NoResults>}

      {(!data?.length || !query) && !isLoading && (
        <SearchPlaceholder>
          <img src={placeholder} />
        </SearchPlaceholder>
      )}

      {!!data?.length && !isLoading && (
        <>
          <GridContainer>
            {data.map((item: Media) => (
              <GridItem
                key={item.data[0].nasa_id}
                onClick={() => navigateToShowPage(item.data[0].nasa_id)}
              >
                <GridImage src={item.links[0].href} alt={item.data[0].title} />
                <GridTitle>{item.data[0].title}</GridTitle>
                <GridPhotographer>
                  {item.data[0].photographer || item.data[0].secondary_creator}
                </GridPhotographer>
              </GridItem>
            ))}
          </GridContainer>
          <Pagination
            currentPage={currentPage}
            totalResults={totalResults}
            onPageChange={handlePageChange}
          />
        </>
      )}

      {isLoading && <LoadingSpinner />}
    </StyledSearchPage>
  )
}

export default SearchPage
