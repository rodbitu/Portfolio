import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbChatty from '../public/images/works/chatty_eyecatch.png'
import thumbCupid from '../public/images/works/cupid_eyecatch.png'
import thumbValoriza from '../public/images/works/valoriza_eyecatch.png'
import thumbBinanceBot from '../public/images/works/binance_bot_eyecatch.png'
import thumbValkyrie from '../public/images/works/valkyrie_eyecatch.png'
import thumbTubeSummarizerAI from '../public/images/works/tubeSummarizerAi_eyecatch.png'
import thumbLiveLib from '../public/images/works/liveLib_eyecatch.png'
import thumbRepoHub from '../public/images/works/repoHub_eyecatch.png'

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
              title="Cupido Online"
              thumbnail={thumbCupid}
            >
              Cupido Online is a web application that the user sends a message
              of love to someone via email.
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
          <Section>
            <WorkGridItem
              id="binanceBot"
              title="BinanceBot"
              thumbnail={thumbBinanceBot}
            >
              BinanceBot is a bot created with the aim of automating operations
              on the Binance exchange.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="valkyrie"
              title="Valkyrie"
              thumbnail={thumbValkyrie}
            >
              Valkyrie is software to analyze and calculate the native
              vegetation area of a given terrain using python processing.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="tubeSummarizerAI"
              title="TubeSummarizerAI"
              thumbnail={thumbTubeSummarizerAI}
            >
              TubeSummarizerAI is an innovative online platform that has come to
              revolutionize the way users get smart summaries of YouTube videos.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="liveLib" title="LiveLib" thumbnail={thumbLiveLib}>
              LiveLib is a Whatsapp-integrated chatbot for managing small and
              medium-sized libraries.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="repoHub" title="RepoHub" thumbnail={thumbRepoHub}>
              RepoHub is an online platform that allows users to organize their
              repositories quickly and easily.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
