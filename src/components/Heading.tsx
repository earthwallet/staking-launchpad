import styled from 'styled-components';
import { Heading as H } from 'grommet';

export const Heading = styled(H)`
  font-family: 'Poppins', system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Helvetica, Arial, sans-serif;
  color: ${p => (p.color ? p.color : p.theme.blue.lightest)};
  margin: 0;
  display: block;
  text-align: ${(p: { center?: boolean }) => p.center && 'center'};
  max-width: inherit;
`;
