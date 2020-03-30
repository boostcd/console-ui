import { Jira, Trello } from '@styled-icons/fa-brands';
import { TicketAlt } from '@styled-icons/fa-solid';
import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';

import PROMOTE_STATUS from '../../constants/promoteStatus';
import { baseColor } from '../../styles/variables/colors';
import Card from '../Card/Card';

const backgrounds = {
  [PROMOTE_STATUS.NOT_PROMOTED]: '#d9f9ff',
  [PROMOTE_STATUS.PARTIALLY_PROMOTED]: '#fcffd1',
  [PROMOTE_STATUS.PROMOTED]: 'white',
};

const hoverBackgrounds = {
  [PROMOTE_STATUS.NOT_PROMOTED]: '#e5f4f7',
  [PROMOTE_STATUS.PARTIALLY_PROMOTED]: '#f3f9a4',
  [PROMOTE_STATUS.PROMOTED]: '#efefef',
};

export const Wrapper = styled(Card)`
  margin-top: 0.5rem;
  transition: background 200ms linear;
  background: ${switchProp('promoteStatus', backgrounds)};

  &:hover {
    background: ${switchProp('promoteStatus', hoverBackgrounds)};
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
