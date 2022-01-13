import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Chatty">
      <Container>
        <Title>
          Chatty <Badge>2021</Badge>
        </Title>
        <P>
          What is live chat support? Live chat support allows customers to have
          text-based conversations with support teams via the web.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/rodbitu/Chatty">
              https://github.com/rodbitu/Chatty <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Nodejs, TypeScript, Express, Socket.io</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/chatty_01.png" alt="Chatty" />
        <WorkImage src="/images/works/chatty_02.png" alt="Chatty" />
      </Container>
    </Layout>
  )
}

export default Work
