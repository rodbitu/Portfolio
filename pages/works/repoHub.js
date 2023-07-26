import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="RepoHub">
      <Container>
        <Title>
          RepoHub <Badge>2023</Badge>
        </Title>
        <P>
          RepoHub is an innovative online platform that offers users a
          streamlined experience to organize their repositories quickly, easily
          and efficiently. Designed to meet the needs of developers, students
          and work teams, RepoHub has a number of smart and intuitive features
          that make it easy to manage and collaborate on source code projects.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source-Backend</Meta>
            <Link href="https://github.com/rodbitu/RepoHub-Backend">
              https://github.com/rodbitu/RepoHub-Backend
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source-Frontend</Meta>
            <Link href="https://github.com/rodbitu/RepoHub-Frontend">
              https://github.com/rodbitu/RepoHub-Frontend
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
              Reactjs, React Router, Axios, Node.js, Express, Bcrypt,
              JsonWebToken, Mongoose, MongoDB
            </span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/repoHub.png" alt="RepoHub" />
      </Container>
    </Layout>
  )
}

export default Work
