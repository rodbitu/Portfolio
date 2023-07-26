import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="LiveLib">
      <Container>
        <Title>
          LiveLib <Badge>2023</Badge>
        </Title>
        <P>
          Livelib is an innovative chatbot integrated with WhatsApp, specially
          developed to facilitate the efficient management of small and
          medium-sized libraries. With its user-friendly interface and advanced
          features, Livelib provides an enhanced experience for both library
          staff and patrons.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source-Backend</Meta>
            <Link href="https://github.com/rodbitu/livelib">
              https://github.com/rodbitu/livelib
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Nestjs, Typescript, Prisma, TwillioAPI, WhatsappAPI, MongoDB
            </span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/liveLib.png" alt="LiveLib" />
      </Container>
    </Layout>
  )
}

export default Work
