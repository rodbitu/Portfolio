import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Cupido Online">
      <Container>
        <Title>
          Cupido Online <Badge>2021</Badge>
        </Title>
        <P>
          Cupido Online is a web application that the user sends a message of
          love to someone via email.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source-Frontend</Meta>
            <Link href="https://github.com/rodbitu/CupidoOnline-Front-End">
              https://github.com/rodbitu/CupidoOnline-Front-End{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source-Backend</Meta>
            <Link href="https://github.com/rodbitu/CupidoOnline-Back-End">
              https://github.com/rodbitu/CupidoOnline-Back-End{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Nodejs, AWS, Express, NodeMailer</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/cupid_01.png" alt="Cupid_Online" />
        <WorkImage src="/images/works/cupid_02.png" alt="Cupid_Online" />
      </Container>
    </Layout>
  )
}

export default Work
