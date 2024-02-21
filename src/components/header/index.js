import Logo from "../Logo"
import IconsHeader from "../iconsHeader"
import OptionsHeader from "../optionsHeader"
import styled from "styled-components"

const HeaderContainer = styled.header`
    background-color: #eeeeee;
    display: flex;
    justify-content: center;


`

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <IconsHeader />
            <OptionsHeader />
        </HeaderContainer>
    )
}

export default Header