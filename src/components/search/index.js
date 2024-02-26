import SearchInput from "../searchInput"
import styled from "styled-components"
import { useState } from "react"
import { books } from "./dadosSearch"

const SearchContainer = styled.section`
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`

const Title = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const SubTitle = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;

`
const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
   
`
function Search() {
    const [booksSearch, setBooksSearch] = useState([])
    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <SubTitle>Encontre seu livro em nossa estante.</SubTitle>
            <SearchInput
                placeholder="Escreva sua próxima leitura"
                onBlur={event => {
                    const textTyped = event.target.value
                    const resultSearch = books.filter(book => book.name.includes(textTyped))
                    setBooksSearch(resultSearch)
                }}
            />
            {
                booksSearch.map(book => (
                    <Result>
                        <img src={book.src} alt="" />
                        <p>{book.name}</p>
                    </Result>

                ))
            }


        </SearchContainer>
    )
}

export default Search