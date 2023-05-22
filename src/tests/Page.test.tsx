import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Page } from '../common/components'

describe('Page', () => {
  it('should render the Page component with the correct header and footer content', () => {
    const { getByAltText, getByText } = render(
      <Page>
        <div>Content</div>
      </Page>,
    )

    const logoElement = getByAltText('Logo')
    const titleElement = getByText('Nasa Media Library')

    expect(logoElement).toBeInTheDocument()
    expect(titleElement).toBeInTheDocument()
  })

  it('should render the Page component with the provided children content', () => {
    const { getByText } = render(
      <Page>
        <div>Content</div>
      </Page>,
    )

    const contentElement = getByText('Content')

    expect(contentElement).toBeInTheDocument()
  })
})
