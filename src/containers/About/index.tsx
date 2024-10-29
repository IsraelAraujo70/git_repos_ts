import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'
const About = () => (
  <section>
    <Title fontSize={16}>Sobre</Title>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam id
      alias, adipisci ipsa mollitia enim consequuntur odit culpa aut beatae
      natus corporis sit iure facilis consequatur ipsum? Animi, optio voluptate!
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=IsraelAraujo70&show_icons=true&theme=dracula" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=IsraelAraujo70&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)
export default About
