import { FaRegUserCircle } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import styled from "styled-components";

const Icon = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-right: 30px;
`

function IconsHeader() {
  return (
    <Icon>
      <FaRegUserCircle size={20} />
      <IoBag size={20} />
    </Icon>
  )
}

export default IconsHeader