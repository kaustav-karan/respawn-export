import React from 'react';
import styles from './';
import ReSpawnImg from '../../assets/img/banner/respawn.jpg'
import skoarImg from '../../assets/img/logo/scgclogo.png'

import {
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { alignProperty } from '@mui/material/styles/cssUtils';
import { position } from 'stylis';
import { games } from './respawn-utils';
import {
  GameCardContainer,
  RegisterationsContainer,
  RespawnContainer,
  RespawnDetails,
  RespawnGameCardHoverBorder,
  SectionHeading,
  StyledRespawnGameCard,
} from './styledComponents';

export default function RespawnFallBackPage() {
  const navigate = useNavigate();

  function navigateToForm(href) {
    navigate(href);
  }

  return (
    <RespawnContainer>
      <RespawnInformation />
      <SkoreInformation/>
      <RegisterationsContainer><br></br>
        <SectionHeading>REGISTER HERE</SectionHeading><br></br>
        <Grid container spacing={1}>
          {Object.entries(games).map(([gameKey, data]) => (
            <Grid item md={6} sx={{ flex: '1 0 auto' }} key={gameKey}>
              <RespawnGameCardHoverBorder>
                <StyledRespawnGameCard>
                  <CardActionArea onClick={() => navigateToForm(data?.href)}>
                    <CardMedia
                      component="img"
                      height="100%"
                      image={data?.backgroundImage}
                      alt={gameKey}
                    />
                    <GameCardContainer>
                      {data?.title && (
                        <Typography gutterBottom variant="h3" component="div">
                          {data?.title}
                        </Typography>
                      )}
                      {data?.subText && (
                        <Typography variant="body2" color="text.secondary">
                          {data?.subText}
                        </Typography>
                      )}
                    </GameCardContainer>
                  </CardActionArea>
                </StyledRespawnGameCard>
              </RespawnGameCardHoverBorder>
            </Grid>
          ))}
        </Grid>
      </RegisterationsContainer>
    </RespawnContainer>
  );
}

function RespawnInformation() {
  return (

    // <RespawnDetails>
    //   <div className="resp-header">
    //     Re: Spaw

    //   </div>
    // </RespawnDetails>
    <section className="tf-item-detail">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="tf-item-detail-image">
              <img className='titleImg' src= {ReSpawnImg} alt="Image" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="tf-item-detail-inner">
              <h1 className="title">
                Re: Spawn
              </h1>
              <p className="des"><i>Press Ctrl + Z on Defeat, Gaming Redemption with Every Respawn!</i></p>
              <div className="tf-heading style-2 wow fadeInUp">
                {/* <h2 className="heading">THE STORY</h2> */}
                <p className="sub-heading" style={{ paddingTop: '30px' }}>
                  Immerse yourself into the world of Re:Spawn, an event where gaming knows no bounds. A LAN event that brings together avid gamers for a weekend of intense multiplayer battles. 
                  <br /><br />
                  Unleash your tactical prowess in the high-stakes world of Valorant or dive into the limitless creativity of Minecraft alongside other titles including Call of Duty Mobile and Battlegrounds Mobile India.
                  <br /><br />
                  Join us for an unparalleled gaming experience and endless fun. Patience isn't the key for this one - reserve your place now and prepare to game on!
                </p>
              </div>
              {/* <div class="flex-container">
                <div class="flex-item-left">Dates: 30 September - 1 October</div>
                <div class="flex-item-middle">2</div>
                <div class="flex-item-right">3</div>
              </div> */}
            </div>
          </div>
        </div><br></br><br></br>
      </div>
    </section>
  );
}


function SkoreInformation() {
  return (
    <section className="tf-item-detail">
      {/* <h2 className={resp-header}>In Collaboration With</h2> */}
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="tf-item-detail-image">
              <img className="titleImg" src={skoarImg} alt="Image" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="tf-item-detail-inner">
              <h2 className="title">
                SKOAR College Gaming Club
              </h2>
              <p className="des"><i>Inid's First And Only College Gaming Community Program</i></p>
              <div className="tf-heading style-2 wow fadeInUp">
                {/* <h2 className="heading">THE STORY</h2> */}
                <p className="sub-heading" style={{ paddingTop: '30px' }}>
                  SKOAR! College Gaming Club (SCGC) is partnering with students and colleges to set up gaming communities across campuses in India.
                  <br /><br />
                  We aim to create India's 1st structured program for esports at the college level. We are building a community that offers students an inclusive and enriching opportunity to play and understand the options available in the esports industry.
                  <br /><br />
                  SCGC is an Initiative by Digit - the most popular technology portal in India, visited by tens of millions of technology enthusiasts every month.
                </p>
              </div>
              {/* <div className="mt-3 infor-item-wrap">
                <div className="infor-item-box">
                  <div className="category">Date</div>
                  <h4 className="name">30 September - 1 October</h4>
                </div>
                <div className="infor-item-box">
                  <div className="category">Venue</div>
                  <h4 className="name">CR-202</h4>
                </div>
                <div className="infor-item-box">
                  <div className="category">Timing</div>
                  <h4 className="name">Post Academic Hours</h4>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
