import { Jira, Trello } from '@styled-icons/fa-brands';
import { TicketAlt } from '@styled-icons/fa-solid';
import styled, { css } from 'styled-components';

import { baseColor } from '../../styles/variables/colors';
import Card from '../Card';

export const Wrapper = styled(Card)`
  /* height: 200px; */
  margin-top: 0.5rem;
  transition: 200ms background linear;

  &:hover {
    background: #efefef;
  }
`;

export const IdSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Id = styled.div`
  color: #959595;
  font-size: 0.8rem;
  margin-left: 0.5rem;
`;

export const Title = styled.div`
  font-size: 1.1rem;
  margin: 1.2rem 0;
`;

const iconStyles = css`
  color: ${baseColor};
  vertical-align: middle;
`;

export const TrelloIcon = styled(Trello)`
  ${iconStyles};
  width: 1rem;
`;

export const JiraIcon = styled(Jira)`
  ${iconStyles};
  width: 1rem;
`;

export const FeatureIcon = styled(TicketAlt)`
  ${iconStyles};
  height: 1rem;
`;

export const WaitingSince = styled.div`
  font-size: 0.8rem;
`;

export const Status = styled.div`
  font-size: 0.8rem;
`;
