/* eslint-disable jsx-a11y/alt-text */
import logo from '../../imgs/logo.svg'
import styled from 'styled-components'

const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    font-size: 25px;

`

const LogoImg = styled.img`
width: 20%;
margin-right: 10px;
`


function Logo() {
    return (
        <ContainerLogo className='logo'>
          <LogoImg src={logo}/>
          <p><strong>Universo</strong>Books</p>
        </ContainerLogo>
    )
}

export default Logo