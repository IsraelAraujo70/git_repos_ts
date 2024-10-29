import Project from '../../components/Project'
import Title from '../../components/Title'
import { Lista } from './styles'

const Projects = () => (
  <section>
    <Title fontSize={16}>Projetos</Title>
    <ul>
      <Lista>
        <Project></Project>
        <Project></Project>
        <Project></Project>
        <Project></Project>
        <Project></Project>
        <Project></Project>
      </Lista>
    </ul>
  </section>
)
export default Projects
