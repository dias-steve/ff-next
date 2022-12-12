import Container from '../components/Container/Container.js';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
