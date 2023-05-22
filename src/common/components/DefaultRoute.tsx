import { Navigate } from 'react-router'

const DefaultRoute: React.FC = () => {
  const hash = window.location.hash.replace('#', '')
  const fallbackUrl = hash
  const redirectToUrl = fallbackUrl || '/home'

  return <Navigate to={redirectToUrl} />
}

export default DefaultRoute
