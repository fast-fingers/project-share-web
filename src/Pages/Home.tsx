import styled from 'styled-components'
import Navbar from '../Header/Navbar'
import Spacer from '../components/Spacer'
import Footer from '../Footer/Footer'
import Paragraph from '../components/Paragraph'
import MobileShow from '../components/MobileShow'
import NextMeeting from '../NextMeetup/NextMeetup'
import SketchLines from '../components/SketchLines'
import { Link } from 'react-router-dom'
import Links from '../Header/Links'
import ProjectList from '../ProjectList/ProjectList'
import { PROJECTS, PROJECTS_SHOWN_ON_HOMEPAGE } from '../constants'
import { StyledLink } from '../components/StyledLink'

const StyledMain = styled.div`
  position: relative;
  margin: auto;
  margin-top: 8rem;

  max-width: 768px;
`

const Home = () => {
  return (
    <>
      <Navbar />

      <StyledMain>
        <MobileShow>
          <div style={{ height: '4rem' }} />
        </MobileShow>

        <Links />
        <Spacer size={32} />

        <MobileShow>
          <SketchLines top bottom margin={20}>
            <NextMeeting />
          </SketchLines>
          <Spacer size={32} />
        </MobileShow>

        <Paragraph title="So... what is this?">
          <p>
            Glad you asked! Picture this: every other week, an enthusiastic
            group of tech lovers huddle together around a metaphorical campfire.
          </p>
          <p>
            Each one of us, from those working on our first website to the
            seasoned pros building complex multiplayer games, we bring our
            projects to the table! Fueled by curiosity and a passion for
            learning, we turn our individual insights into collective "aha!"
            moments.
          </p>
          <p>
            It's not about the grandeur of the project, but the story it tells,
            the challenges faced, and the triumphs enjoyed.
          </p>
        </Paragraph>
        <Spacer size={64} />
        <Paragraph title="Who can join?">
          <p>
            Anyone! The only condition? Be prepared to share your journey.
            Embrace the opportunity to allow us all to learn and grow through
            your experiences. After all, at the heart of every project lies a
            story worth sharing. Welcome to Project Share.
          </p>
        </Paragraph>
        <Spacer size={64} />
        <Paragraph title="Projects that have been shared at Project Share">
          <p>Take a look</p>
          <ProjectList
            projects={PROJECTS.slice(0, PROJECTS_SHOWN_ON_HOMEPAGE)}
          />

          {PROJECTS.length > PROJECTS_SHOWN_ON_HOMEPAGE && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '0.5rem 0 2rem 0',
              }}>
              <StyledLink as={Link} to="/projects">
                See more
              </StyledLink>
            </div>
          )}
        </Paragraph>
        <Spacer size={64} />
        <Paragraph title="Want to know more about this website?">
          <p>
            Check the <Link to="/components">behind the scenes</Link> of this
            website
          </p>
        </Paragraph>
        <Spacer size={128} />
      </StyledMain>
      <Footer />
    </>
  )
}

export default Home
