import { HeaderContainer, HeaderContent } from './styles';

import logoImg from '../../assets/Logo2.svg';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
      </HeaderContent>
    </HeaderContainer>
  );
}
