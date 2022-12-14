import React from 'react'

//Components
import LineScroll from '../../Components/lineScroll'

//Dependencias
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import { 
    Animator,
    ScrollContainer,
    ScrollPage,
    batch,
    Sticky,
    StickyIn,
    Fade,
    FadeIn,
    MoveIn,
    MoveOut,
    ZoomIn,
  } from 'react-scroll-motion'

//Img
import Pspectre from '../../img/Spectre2023.jpg'
import SpectreTraz from '../../img/spectreTraz.jpg'

const SpectreDiv = styled.section`
  width: 100%;
  height: auto;
  background: black;
`;

const FrontSpectre = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${Pspectre});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 550px){
    background-position: 25%;
  }
  h1{
    width: 80%;
    text-align: center;
    font-size: 80px;
    font-weight: 600;
    color: #ffffff;
     @media (max-width: 550px){
      font-size: 60px;
  }
  }
`;

const TxtSpectre = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    margin-top: 10vh;
    width: 500px;
    height: auto;
    color: #ffffff;
    font-size: 30px;
    text-align: center;
    @media (max-width: 550px){
      width: 300px;
    }
  }
  p{
    margin-top: 2vh;
    width: 400px;
    height: auto;
    color: #ffffff;
    font-size: 12px;
    text-align: center;
    @media (max-width: 550px){
    margin-top: 10vh;
    width: 300px;
    }
  }
`;

const ImgSpectre = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 550px){
    margin-top: 20vh;
  }
`;

const BtnDetail = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 300px;
  height: 50px;
  cursor: pointer;
  color: #000000;
  border: 1px solid black;
  background-color: white;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    background-color: rgb(11, 231, 251);
  }
  p{
    width: 100%;
    height: 100%;
    font-size: 15px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    overflow: hidden
    }
`;

const ApresentationSpectre = () => {

  const ZoomInScroll = batch(StickyIn(), FadeIn(), ZoomIn());

  return (
    
    <SpectreDiv as={motion.section}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    >

      <ScrollContainer>
        <ScrollPage Page={0}>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>

            <FrontSpectre >

              <motion.h1
              initial={{ opacity: 0, x: '-100vh' }}
              animate={{  opacity: 1, x: 0 }}
              whileHover={{ scale: 1.2 }}
              >Spectre</motion.h1>

              <LineScroll />

            </FrontSpectre>

          </Animator>
        </ScrollPage>
      
        <ScrollPage Page={1}>
          <Animator animation={batch(Sticky(), Fade(), MoveOut())}>
            
            <TxtSpectre>
            
            <h1>O PRIMEIRO CARRO<br/>
             TOTALMENTE EL??TRICO DA MARCA.<br/>
            CHEGANDO 2023.</h1>

            </TxtSpectre>
            

          </Animator>
        </ScrollPage>
        <ScrollPage Page={2}>

              <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}><ImgSpectre><img src={SpectreTraz} alt='trazeira'/></ImgSpectre></Animator>

        </ScrollPage>
       {/* <ScrollPage Page={3}>

              <Animator animation={batch(MoveIn(1000), MoveOut(-1000))}><ImgSpectre><img src={Deserto} /></ImgSpectre></Animator>

        </ScrollPage>
        <ScrollPage Page={4}>

              <Animator animation={batch(MoveIn(-1000), MoveOut(1000))}><ImgSpectre><img src={meio} /></ImgSpectre></Animator>

        </ScrollPage> */}

        <ScrollPage Page={5}>
          <Animator animation={batch(Sticky(), Fade(), MoveIn())}>

            <TxtSpectre>

              <h2 >AVENTURA ENCORAJADA</h2>

              <p> As emo????es evocadas por nomes t??o misteriosos s??o de leve desconforto e apreens??o aumentada.<br/> <br/>
                Os humanos est??o naturalmente ansiosos por apari????es fantasmag??ricas que habitam um ambiente inexplic??vel que n??o ?? deste mundo. <br/><br/>
                Esses fantasmas parecem ilus??es ??? eles est??o l??, mas n??o est??o l??, ef??meros em sua raridade, totalmente silenciosos enquanto passam por nosso espa??o vital, fugazes em suas apar??ncias e desaparecem em um sussurro de tempo.<br/><br/>
                E quando transitam pelo nosso mundo, criam uma sensa????o de admira????o e uma cren??a de que encontramos algo desvinculado de nossa exist??ncia, uma apari????o an??mala.<br/><br/>
                Essa vigorosa realidade alternativa ?? assustadora, mas intrigante; amea??ador, mas atraente; al??m da compreens??o, mas n??s o cobi??amos.<br/><br/>
                E apenas alguns de n??s, na verdade apenas alguns poucos selecionados e corajosos, podem cruzar a linha divis??ria e comandar esses seres transit??rios e espectrais para seguirem.  </p>

            </TxtSpectre>
          </Animator>
        </ScrollPage>

        <ScrollPage Page={6}>
          <Animator animation={ZoomInScroll}>


            <BtnDetail>
              <Button to='Map' as={motion(Link)}
                transition={{ delay: 0.8 }}
                >

                <motion.p
                    whileHover={{ scale: 1.1, textShadow: '0px 0px 8px rgb(0,0,0)' }}
                  >
                  Ache um Revendedor
                </motion.p>

              </Button>
            </BtnDetail>
          </Animator>
        </ScrollPage>
      </ScrollContainer>

    </SpectreDiv>

  )
}

export default ApresentationSpectre