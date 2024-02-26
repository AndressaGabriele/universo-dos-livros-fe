import { books } from "./dadosFeature"
import styled from "styled-components"


const LatestLaunchesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const Title = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: #EB9B00;
    font-size: 36px;
    text-align: center;
    margin: 0;
`

const Img = styled.img`
width: 16%;
gap: 0.5rem;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`


function FeaturedNew() {
    return (
        <LatestLaunchesContainer>
            <Title>ULTIMOS LANÇAMENTOS</Title>
            <NewBooksContainer>
                {books.map(book => (
                    <Img src={book.src} />
                ))}
            </NewBooksContainer>

        </LatestLaunchesContainer>

    )
}

export default FeaturedNew