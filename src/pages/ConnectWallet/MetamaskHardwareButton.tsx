import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import styled from 'styled-components';
import ledger from '../../static/ledger.png';
import { Paper } from '../../components/Paper';
import { Text } from '../../components/Text';
import { Link } from '../../components/Link';

const Logo = styled.img`
  height: 50px;
  width: 50px;
  display: block;
  margin: 24px;
`;

const StyledText = styled(Text as any)`
  margin: 10px;
  font-size: 14px;
  margin-inline-end: 20px;
`;
const StyledPaper = styled(Paper)`
  width: 350px;
  margin: 10px;
  align-items: center;
  &:hover {
    box-shadow: 0px 8px 17px rgba(0, 0, 0, 0.15);
    transition: transform 0.1s;
    transform: scale(1.02);
  }
  outline: 3px solid purple;
`;

export const MetamaskHardwareButton = () => {
  const { locale } = useIntl();
  return (
    <Link
      isTextLink={false}
      to="https://metamask.zendesk.com/hc/en-us/articles/360020394612-How-to-connect-a-Trezor-or-Ledger-Hardware-Wallet"
    >
      <StyledPaper
        pad="xsmall"
        className="wallet-button flex flex-row relative"
      >
        <Logo src={ledger} />
        <StyledText>
          <FormattedMessage defaultMessage="Connect your hardware wallet to Metamask" />
        </StyledText>
        <StyledText>{locale === 'ar' ? '↖' : '↗'}</StyledText>
      </StyledPaper>
    </Link>
  );
};
