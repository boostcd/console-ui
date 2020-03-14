import styled from 'styled-components';

import Button from '../Button';
import Card from '../Card';
import ExclamationIcon from '../ExclamationIcon';

export const Wrapper = styled(Card)`
  height: 120px;
  margin-top: 0.5rem; //TODO: remove this property
`;

export const ErrorIcon = styled(ExclamationIcon)`
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 0.25rem;
`;

export const Name = styled.div`
  font-size: 0.9rem;
  min-height: 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

export const Version = styled.div`
  font-weight: bold;
`;

export const Date = styled.div`
  color: #a2a2a2;
  font-size: 0.7rem;
`;

export const Actions = styled.div`
  min-height: 1.5rem;
  display: flex;
  flex-flow: row;

  ${Button} {
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: 0.65rem;
  }

  * ~ * {
    margin-left: 0.2rem;
  }
`;
