import styled from 'styled-components';

export const InfoBox = styled.div`
  border: 1px solid #ddd;
  padding: 12px 10px;
  width: 100%;
  background: ${p => p.theme.gray.lightest};
  border: 1px solid #4a4a4a;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  backdrop-filter: blur(6px);
`;
