import { render, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'
import { Pagination } from '../core/components'

describe('Pagination', () => {
  it('should render the Pagination component with the correct page numbers and controls', () => {
    const onPageChange = jest.fn()

    const { getByText } = render(
      <Pagination
        currentPage={3}
        totalResults={100}
        limitPerPage={10}
        maxPaginationItems={5}
        onPageChange={onPageChange}
      />,
    )

    // Check the rendered page numbers
    expect(getByText('1')).toBeInTheDocument()
    expect(getByText('2')).toBeInTheDocument()
    expect(getByText('3')).toBeInTheDocument()
    expect(getByText('4')).toBeInTheDocument()
    expect(getByText('5')).toBeInTheDocument()
  })

  it('should call onPageChange callback when clicking on page numbers', () => {
    const onPageChange = jest.fn()

    const { getByText } = render(
      <Pagination
        currentPage={3}
        totalResults={100}
        limitPerPage={10}
        maxPaginationItems={5}
        onPageChange={onPageChange}
      />,
    )

    // Click on a page number
    fireEvent.click(getByText('4'))

    // Check if onPageChange callback is called with the correct page number
    expect(onPageChange).toHaveBeenCalledWith(4)
  })
})
