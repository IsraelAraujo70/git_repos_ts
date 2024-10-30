import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

export const Descr = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const BtnTheme = styled.button`
  color: ${(props) => props.theme.corDeFundo};
  padding: 8px;
  background-color: ${(props) => props.theme.corPrincipal};
  border-radius: 12px;
  font-size: 10px;
  font-weight: bold;
  border-style: none;
  cursor: pointer;
`
export const SideBarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
