import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Animated } from 'react-animated-css';

import { NovabookLogoWhite } from '../images';
import { hexToRgbA } from '../utils/colors';

const DELAY = 100;

const delay = (index) => index * DELAY;

const BUTTONS = [
  { caption: 'Visiter', desc: 'Je regarde juste, merci. Non, je n\'ai pas besoin de conseil. Non, je ne veux pas acheter d\'aspirateur à triple action rotative inversée. Lâchez-moi, vous me faites peur.', color: 'black', backgroundColor: '#CCC' },
  { caption: 'S\'inscrire', desc: 'Je veux embarquer dans la merveilleuse aventure de Novabook, car je suis une personne de goût et que je sais reconnaître une applcation de qualité quand j\'en vois une.', color: 'white', backgroundColor: 'darkred' },
  { caption: 'Se connecter', desc: 'Laissez-moi passer, bande de noobs!', color: 'white', backgroundColor: 'darkblue' },
];

const Page = styled.div`
  position: relative;
  background: ${hexToRgbA('#548041', .66)};
  color: white;
  overflow: hidden;
`;

const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 4em 0 0;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  /* justify-content: center; */
  align-items: center;
  min-height: 100vh;

  & > * {
    margin: 1.5em 0;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Subtitle = styled.div`
  font-size: 2em;
  color: #dde5d8;

  /* font-style: italic; */
`;

const TitleFont = styled.span`
  font-family: 'Exo 2', Arial, sans-serif;
  font-weight: bold;
  font-style: initial;
  color: white;
`;

const Description = styled.div`
  font-size: 1.5em;
  font-style: italic;
  max-width: 90%;
  margin: 0 auto;
  text-align: center;
`;

const ButtonBar = styled.div`
  display: flex;
`;

const Button = styled.button`
  ${props => (props.hasOwnProperty('color') ? 
    `color: ${props.color};` : null
  )}
  ${props => (props.hasOwnProperty('backgroundColor') ? 
    `background-color: ${props.backgroundColor};` : null
  )}
  font-family: 'Exo 2', Arial, sans-serif;
  font-weight: bold;
  padding: 1em 2em;
  margin: 0 1em;
  border-radius: .5em;
  border: none;
  position: relative;
  z-index: 1;
  overflow: hidden;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 50%;
    height: 100%;
    top: 0;
    right: 0;
    margin: 0 auto;
    left: 0;
    background: white;
    opacity: 0;
    transition: all .2s ease-in;
  }

  &:hover {
    &:before {
      width: 100%;
      opacity: .1;
    }
  }
`;

class HomePage extends Component {
  state = {
    hoveredButtonIndex: null,
  }

  setHoveredButton = (index) => () => this.setState({ hoveredButtonIndex: index });

  render = () =>
    <Page>
      <BackgroundImage image="https://picsum.photos/1024" />
      <Wrapper>
        <Animated animationIn="bounceInLeft">
          <img src={NovabookLogoWhite} style={{ color: 'white' }} alt="Novabook logo" />
        </Animated>
        <Animated animationIn="fadeInUp" animationInDelay={delay(1)}>
          <Subtitle>
            Une expérience littéraire <TitleFont>Nova</TitleFont>trice
          </Subtitle>
        </Animated>
        <ButtonBar>
        { BUTTONS.map ( (button, index) =>
            <Link to="/discover">
            <Animated animationIn="fadeInUp" animationInDelay={delay(2 + index)}>
              <Button
                onMouseEnter={this.setHoveredButton(index)}
                onMouseLeave={this.setHoveredButton(null)}
                color={button.color}
                backgroundColor={button.backgroundColor}
                >
                {button.caption}
              </Button>
            </Animated>
            </Link>
          )}
        </ButtonBar>
        <Animated animationIn="bounceIn" animationInDuration={500} animationOutDuration={0}
          isVisible={this.state.hoveredButtonIndex !== null}>
          <Description>
            «&nbsp;{ this.state.hoveredButtonIndex !== null ? `${BUTTONS[this.state.hoveredButtonIndex].desc}` : null }&nbsp;»
          </Description>
        </Animated>
      </Wrapper>
    </Page>
  ;
}

export default HomePage;
