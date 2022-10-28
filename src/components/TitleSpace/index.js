import React from 'react'
import { TitleContainer, TitleContent, TitleH1, TitleH2} from './TitleSpaceElements'


const TitleSpace = () => {
  return (
    <TitleContainer>
        <TitleContent>
            <TitleH1>M6:ResDesUX</TitleH1>
            <TitleH2 sequence={['Research & Design of User Experiences', 3000, '']} speed={45}  wrapper="h2" repeat={Infinity}/>
        </TitleContent>
    </TitleContainer>
  )
}

export default TitleSpace