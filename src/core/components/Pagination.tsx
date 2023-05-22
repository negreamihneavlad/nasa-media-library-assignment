import { range } from 'lodash'

import {
  PaginationItem,
  PaginationControl,
  Pagination as PaginationContainer,
} from './styles'

interface PaginationProps {
  currentPage: number
  totalResults: number
  limitPerPage?: number
  maxPaginationItems?: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  totalResults,
  limitPerPage = 20,
  maxPaginationItems = 5,
  currentPage,
  onPageChange,
}) => {
  const { firstPage, lastPage } = calculatePaginationBoundaries(
    totalResults,
    limitPerPage,
    maxPaginationItems,
    currentPage,
  )

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === lastPage

  return (
    <PaginationContainer
      withoutFirstControl={isFirstPage}
      withoutLastControl={isLastPage}
    >
      {!isFirstPage && (
        <PaginationControl onClick={() => onPageChange(currentPage - 1)}>
          Previouse
        </PaginationControl>
      )}

      {range(firstPage, lastPage + 1).map((page) => (
        <PaginationItem
          key={page}
          onClick={() => onPageChange(page)}
          isActive={currentPage === page}
        >
          {page}
        </PaginationItem>
      ))}

      {!isLastPage && (
        <PaginationControl onClick={() => onPageChange(currentPage + 1)}>
          Next
        </PaginationControl>
      )}
    </PaginationContainer>
  )
}

export default Pagination

const calculatePaginationBoundaries = (
  totalResults: number,
  limitPerPage: number,
  maxPaginationItems: number,
  currentPage: number,
) => {
  const totalPages = Math.max(1, Math.ceil(totalResults / limitPerPage))
  let firstPage = Math.ceil(Math.max(1, currentPage - maxPaginationItems / 2))
  const lastPage = Math.min(totalPages, firstPage + maxPaginationItems - 1)
  firstPage = Math.max(
    1,
    Math.min(firstPage, lastPage - maxPaginationItems + 1),
  )

  return { firstPage, lastPage }
}
