import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="TubeSummarizerAI">
      <Container>
        <Title>
          TubeSummarizerAI <Badge>2023</Badge>
        </Title>
        <P>
          TubeSummarizerAI is an online platform that allows users to get smart
          summaries of YouTube videos quickly and easily. With a simple and
          efficient proposal, this platform offers its users the ability to
          obtain accurate and quick summaries of videos, saving them the time
          and effort of watching extensive content.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source-Backend</Meta>
            <Link href="https://github.com/rodbitu/TubeSummarizerAI-Backend">
              https://github.com/rodbitu/TubeSummarizerAI-Backend
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source-Frontend</Meta>
            <Link href="https://github.com/rodbitu/TubeSummarizerAI-Frontend">
              https://github.com/rodbitu/TubeSummarizerAI-Frontend
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
              Nextjs, Tailwindcss, Nodejs, TypeScript, Express, OpenAI
            </span>
          </ListItem>
        </List>

        <WorkImage
          src="/images/works/tubeSummarizerAi.png"
          alt="TubeSummarizerAI"
        />
      </Container>
    </Layout>
  )
}

export default Work
