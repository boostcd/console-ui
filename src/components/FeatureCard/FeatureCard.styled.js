import { Jira, Trello } from '@styled-icons/fa-brands';
import { ExclamationCircle, TicketAlt } from '@styled-icons/fa-solid';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

import { baseColor } from '../../styles/variables/colors';
import Card from '../Card/Card';

export const Wrapper = styled(Card)`
  margin-top: 0.5rem;
  transition: background 200ms linear;
  background: ${ifProp('isNotPromoted', '#e5f4f7', 'white')};

  &:hover {
    background: ${ifProp('isNotPromoted', '#d9f9ff', '#efefef')};
  }
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
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

export const PartiallyPromotedIcon = styled(ExclamationCircle)`
  width: 1rem;
  color: orange;
`;
