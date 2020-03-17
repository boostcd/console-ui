import { CheckCircle, ExclamationCircle } from '@styled-icons/fa-solid';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

import Card from '../Card';

export const Wrapper = styled(Card)`
  height: 130px;
  margin-top: 0.5rem;
  transition: background 200ms linear;

  ${ifProp(
    'isActive',
    css`
      background: #e5f4f7;
    `
  )};
`;

const testIconStyles = css`
  width: 0.8rem;
  height: 0.8rem;
  margin-left: 0.25rem;
  vertical-align: middle;
`;

export const TestsSuccessful = styled(CheckCircle)`
  ${testIconStyles};
  color: green;
`;

export const TestsFailed = styled(ExclamationCircle)`
  ${testIconStyles};
  color: red;
`;

export const Name = styled.div`
  min-height: 1.35rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

export const Version = styled.div`
  font-weight: bold;
  font-size: 0.9rem;
`;

export const Date = styled.div`
  color: #a2a2a2;
  font-size: 0.8rem;
`;

export const Actions = styled.div`
  min-height: 1.5rem;
  display: flex;
  flex-flow: row;

  * ~ * {
    margin-left: 0.2rem;
  }
`;
