import { ExclamationCircle as ExclamationCircleIcon } from '@styled-icons/fa-solid';
import styled from 'styled-components';

import Button from '../Button';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  height: 120px;
  background: white;
  border-radius: 4px;
  font-size: 0.85rem;
  margin-top: 0.5rem; //TODO: remove this property
  padding: 0.5rem;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const ExclamationCircle = styled(ExclamationCircleIcon)`
  color: red;
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 0.25rem;
`;

export const Name = styled.div`
  min-height: 1.1rem;
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
  font-size: 0.75rem;
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
