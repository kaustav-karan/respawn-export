import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from '@mui/material';
import {
  EventTagLine,
  FestInfo,
  FooterContainer,
  FooterHeader,
  FooterInner,
  FooterLink,
  ListContainer,
  LogoContainer,
  SinuLogo,
  SinuLogoHeader,
  SiteInfo,
  WidgetContainer,
} from './styledComponents';
import SinuLogoLong from '@/assets/img/logo/home.png';
import { footerData } from './footerData';

export default function Footer() {
  return (
    <FooterContainer>
      <Container>
        <FooterInner>
          <SiteInfo>
            <WidgetContainer>
              <LogoContainer>
                <SinuLogoHeader
                  id="logo_footer"
                  src={SinuLogoLong}
                  alt="logo"
                />
              </LogoContainer>
              <EventTagLine>
                NIIT University brings to you its annual technological fest -
                siNUsoid V7.
              </EventTagLine>
            </WidgetContainer>
          </SiteInfo>
          <FestInfo>
            <FooterLinks type="pageLinks" />
            <FooterLinks type="contact" title="Contact" />
            <FooterLinks type="venuelocation" title="Location" />
            {/* <ListContainer>
              <h6>Location</h6>
              <ul />
              <li>
                <a>
                  NIIT University, NH 8, Delhi - Jaipur Expressway, Neemrana
                  Rajasthan 301705
                </a>
              </li>
            </ListContainer> */}
          </FestInfo>
        </FooterInner>

        {/* <div class="bottom-inner">
        <div class="tf-container">
            <div class="row">
                <div class="col-md-12">
                    <div class="bottom">

                        <p class="copy-right">siNUsoid V7 - ALL rights reserved</p>

                        <ul class="social-item">
                            <li><a href="https://www.instagram.com/siNUsoid.nu/?hl=en" target="_blank"><i
                                        class="fab fa-instagram"></i></a></li>
                            <li><a href="https://www.facebook.com/siNUsoidniit/" target="_blank"><i
                                        class="fab fa-facebook"></i></a></li>
                            <li><a href="https://www.youtube.com/@siNUsoidannualtechfestofnu8938"
                                    target="_blank"><i class="fab fa-youtube"></i></a></li>
                            <li><a href="https://in.linkedin.com/company/siNUsoid" target="_blank"><i><svg
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                            <path
                                                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                        </svg></i></a></li>
                            <li><a href="https://discord.com/invite/dyAFrUKf" target="_blank"><i
                                        class="icon-fl-vt"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
      </Container>
    </FooterContainer>
  );
}

function FooterLinks({ type }) {
  function handleNewTab(href) {
    window.open(href, '_blank');
  }

  return (
    <ListContainer>
      {footerData?.[type]?.title && (
        <FooterHeader>{footerData?.[type]?.title}</FooterHeader>
      )}
      {footerData?.[type]?.links?.map(({ href, label, newTab }) =>
        newTab ? (
          <FooterLink key={href} href="#" onClick={() => handleNewTab(href)}>
            {label}
          </FooterLink>
        ) : (
          <FooterLink key={href} href={href}>
            {label}
          </FooterLink>
        ),
      )}
    </ListContainer>
  );
}
