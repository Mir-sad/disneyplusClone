import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
           <Background>
               <img src="data:image/jpeg;base64,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" />
           </Background>
           <ImageTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" />
            </ImageTitle>
            <Control>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" />
                    <span>Trailer</span>
                </TrailerButton>
               <AddButton>
                   <span>+</span>

               </AddButton>
               <GroupWatchButton>
                   <img src="/images/group-icon.png" /> 
               </GroupWatchButton>

           </Control>
           <SubTitle>
               2018 7m Family, Fantasy, Kids, Animation
           </SubTitle>
           <Description>
           Description definition is - an act of describing; specifically : discourse intended to give a mental image of something experienced. How to use description ...
           </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


`

const ImageTitle = styled.div`
   height: 30vh;
   min-height: 170px;
   width: 35vw;
   min-width: 200px;
   margin-top: 60px;
   
   img { 
       width: 100%;
       height: 100%;
       object-fit: contain;
   }
`

const Control = styled.div`
   display: flex;
   align-items: center;

`
const PlayButton = styled.button`
   border-radius: 4px;
   font-size: 15px;
   padding: 0px 24px;
   margin-right: 22px;
   display: flex;
   align-items: center;
   height: 56px;
   background: rgb (249, 249, 249);
   border: none;
   letter-spacing: 1.8px;
   cursor: pointer;

   &:hover {
       background: rgb(198, 198, 198);
   }

`

const TrailerButton = styled(PlayButton)`
   background: rgba(0, 0, 0, 0.3);
   border: 1px solid rgb(249, 249, 249);
   color: rgb(249, 249, 249);
   text-transform: uppercase;
`

const AddButton = styled.button`
   margin-right: 16px;
   width: 44px;
   height: 44px;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50%;
   border: 2px solid white;
   background-color: rgba(0, 0, 0, 0.6);
   cursor: pointer;
   span {
       font-size: 30px;
       color: white;

   }
`

const GroupWatchButton = styled(AddButton)`
  background: rgba(0, 0, 0);

`

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 760px;

`
