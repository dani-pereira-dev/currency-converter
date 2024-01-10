import { FC } from "react"

import { BottomBox, Container, Title, TopBox } from "./style"
import { BackGroundProps } from "./types"
import { useCoverterContext } from "../../store/converter"

export const BackGround: FC<BackGroundProps> = ({ children }) => {
  const {amount, from, to} = useCoverterContext()
  
  return (
    <Container>
      <TopBox>
        <Title className="title">
          {`${amount || 0} ${from.currency} to ${to.currency} - Convert ${from.name} to ${to.name}`}</Title>
      </TopBox>
      {children}
      <BottomBox />
    </Container>
  )
}
