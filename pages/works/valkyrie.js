import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Valkyrie">
      <Container>
        <Title>
          Valkyrie <Badge>2022</Badge>
        </Title>
        <P>
          The Valkyrie aims to create a service, through a web application,
          which will have the functionality of sensing areas of native
          vegetation on large estates in the Amazon region.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source-Frontend</Meta>
            <Link href="https://github.com/TubaroesVoadores/valkyrie-frontend">
              https://github.com/TubaroesVoadores/valkyrie-frontend
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source-Backend</Meta>
            <Link href="https://github.com/TubaroesVoadores/valkyrie-backend">
              https://github.com/TubaroesVoadores/valkyrie-backend
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source - Processing</Meta>
            <Link href="https://github.com/TubaroesVoadores/valkyrie-processing">
              https://github.com/TubaroesVoadores/valkyrie-processing
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ReactJS, NodeJS, Python, Serverless, AWS-CLI</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/valkyrie_01.png" alt="Valkyrie" />
        <WorkImage src="/images/works/valkyrie_02.png" alt="Valkyrie" />
      </Container>
    </Layout>
  )
}

export default Work
