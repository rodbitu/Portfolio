import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Valoriza">
      <Container>
        <Title>
          Valoriza <Badge>2022</Badge>
        </Title>
        <P>It is a system of praise between users through tags.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/rodbitu/Valoriza">
              https://github.com/rodbitu/Valoriza <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Nodejs, TypeScript, Express, JSONWebToken, TypeORM, SQLite
            </span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/valoriza_01.png" alt="Valoriza" />
      </Container>
    </Layout>
  )
}

export default Work
