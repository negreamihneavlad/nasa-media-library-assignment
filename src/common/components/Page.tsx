import {
  Page as PageContainer,
  Header,
  HeaderTitle,
  Footer,
  Logo,
} from './styled'
import logoImage from '../assets/img/logo.png'

type PageProps = {
  children: React.ReactNode
}

const Page: React.FC<PageProps> = ({ children }) => (
  <PageContainer>
    <Header>
      <Logo src={logoImage} alt="Logo" />
      <HeaderTitle>Nasa Media Library</HeaderTitle>
    </Header>
    <main>{children}</main>
    <Footer>
      <p>&copy;Negrea Mihnea Vlad</p>
      <p>negreamihneavlad@gmail.com</p>
    </Footer>
  </PageContainer>
)

export default Page
