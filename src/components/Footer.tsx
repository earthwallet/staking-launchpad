import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Heading } from './Heading';
import { routesEnum } from '../Routes';
import { Link } from './Link';

import { Button } from './Button';

const Rhino = styled.span`
  font-size: 20px;
`;

const FooterBackground = styled.div`
  min-width: 100%;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
`;

const FooterStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 4rem;
  @media screen and (max-width: 1080px) {
    flex-direction: column;
  }
  @media screen and (max-width: 960px) {
    .cta-button {
      display: none;
    }
  }

  @media screen and (max-width: 518px) {
    .extra-links {
      margin-top: 1rem;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonLink = styled(Link)`
  width: fit-content;
  padding: 0;
`;

export const Footer = () => {
  const { pathname } = useLocation();
  const despotWorkflowRoutes = [
    routesEnum.acknowledgementPage,
    routesEnum.selectClient,
    routesEnum.generateKeysPage,
    routesEnum.uploadValidatorPage,
    routesEnum.connectWalletPage,
    routesEnum.summaryPage,
    routesEnum.transactionsPage,
    routesEnum.congratulationsPage,
    routesEnum.topUpPage,
  ];

  return (
    <FooterBackground>
      <FooterStyles>
        <div className="col">
          <Heading level={4}>
            <FormattedMessage defaultMessage="Staking Launchpad" />
          </Heading>
          <Link to={routesEnum.acknowledgementPage}>
            <FormattedMessage defaultMessage="Deposit" />
          </Link>
          <Link to={routesEnum.checklistPage}>
            <FormattedMessage defaultMessage="Checklist" />
          </Link>
          <Link to={routesEnum.FaqPage}>
            <FormattedMessage defaultMessage="FAQ" />
          </Link>
          <Link to={routesEnum.termsOfServicePage}>
            <FormattedMessage defaultMessage="Terms of Service" />
          </Link>
        </div>

        {!despotWorkflowRoutes.includes(pathname as routesEnum) && (
          <ButtonContainer className="m-auto">
            <ButtonLink
              to={routesEnum.acknowledgementPage}
              className="cta-button"
            >
              <Button
                rainbow
                fullWidth
                width={400}
                label={
                  <FormattedMessage
                    defaultMessage="Become a validator {emoji}"
                    values={{
                      emoji: (
                        <Rhino>
                          <span role="img" aria-label="earth">
                            🌎
                          </span>
                        </Rhino>
                      ),
                    }}
                  />
                }
              />
            </ButtonLink>
          </ButtonContainer>
        )}
        <div className="col extra-links">
          <Heading level={4}>
            <FormattedMessage defaultMessage="More on staking" />
          </Heading>
          <Link to="https://ethereum.org/en/roadmap/">
            <FormattedMessage defaultMessage="The Ethereum roadmap" />
          </Link>
          <Link to={routesEnum.phishingPage}>
            <FormattedMessage defaultMessage="Avoid phishing" />
          </Link>
          <Link to="https://docs.google.com/spreadsheets/d/15tmPOvOgi3wKxJw7KQJKoUe-uonbYR6HF7u83LR5Mj4/edit#gid=842896204">
            <FormattedMessage defaultMessage="Staking economics" />
          </Link>
          <Link to="https://github.com/runtimeverification/deposit-contract-verification/blob/96434de/deposit-contract-verification.pdf">
            <FormattedMessage defaultMessage="Formal verification report" />
          </Link>
        </div>
      </FooterStyles>
    </FooterBackground>
  );
};
