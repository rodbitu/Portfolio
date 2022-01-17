import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbChatty from '../public/images/works/chatty_eyecatch.png'
import thumbCupid from '../public/images/works/cupid_eyecatch.png'
import thumbValoriza from '../public/images/works/valoriza_eyecatch.png'

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="chatty" title="Chatty" thumbnail={thumbChatty}>
              Chatty is a real-time customer service chat.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="cupid"
              title="Cupid Online"
              thumbnail={thumbCupid}
            >
              Cupid Online is a web application that the user sends a message of
              love to someone via email.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="valoriza"
              title="Valoriza"
              thumbnail={thumbValoriza}
            >
              Valoriza is a platform to promote recognition among teammates.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
