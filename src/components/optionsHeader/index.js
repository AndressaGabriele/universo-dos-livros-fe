import styled from 'styled-components'

const HeaderOptions = styled.ul`
    width: 100%;
    display: flex;

`

const OptionHeader = styled.li`
    min-width: 120px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;    
`


const textOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OptionsHeader() {
    return (
        <HeaderOptions className='options'>
            {
                textOptions.map((text) => (
                    <OptionHeader className='option'><p></p>{text}</OptionHeader>
                ))
            }
        </HeaderOptions>
    )
}

export default OptionsHeader