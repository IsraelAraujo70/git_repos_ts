import Avatar from '../../components/Avatar'
import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { Descr, BtnTheme, SideBarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SideBarContainer>
      <Avatar></Avatar>
      <Title fontSize={20}>Israel Araujo</Title>
      <Paragraph tipo="secundario" fontSize={16}>
        IsraelAraujo70
      </Paragraph>
      <Descr fontSize={12} tipo="principal">
        Fullstack Developer
      </Descr>
      <BtnTheme onClick={props.trocaTema}>Trocar Tema</BtnTheme>
    </SideBarContainer>
  </aside>
)
export default Sidebar
