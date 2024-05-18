import styled from "styled-components";
import { theme } from "styles/theme";

export const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 240px;
`;

export const nameText = styled.p`
  margin: 0;
  white-space: nowrap;
  font-size: ${theme.font.heading[2].size};
  font-weight: ${theme.font.heading[2].fontweight};
`;

export const HeaderIconWrap = styled.div`
  display: flex;
  gap: 40px;
`;