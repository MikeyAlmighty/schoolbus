import styled from 'styled-components'
import { space, layout } from 'styled-system'

import Flex from '../flex'

export const ToggleContainer = styled(Flex).attrs({
  alignItems: 'center'
})`
  display: block;
  padding-bottom: 0.2em;
  width: 3.75em;
  height: 2.5em;
  position: relative;
  ${space}
  ${layout}
`

export const ToggleInput = styled.input`
  display: none;
`

export const Circle = styled(Flex).attrs({
  as: 'span',
  justifyContent: 'center',
  alignItems: 'center'
})`
  background: ${({ theme }) => theme.colors.grayscale.default};
  border-radius: ${({ theme }) => theme.radii.full};
  box-shadow: ${({ theme }) => theme.elevations.titleBar};
  content: '';
  width: 1.3em;
  height: 1.3em;
  left: 0;
  position: absolute;
  transition: transform 0.3 ease-in-out;

  ::before {
    content: '';
    position: absolute;
    width: 2.5em;
    height: 2.5em;
    background-color: ${({ theme }) => theme.colors.grayscale.light};
    opacity: 0.2;
    border-radius: 50%;
    transition: transform 0.2s ease-in-out, opacity 0.1s;
    transform: scale(0);
    transform-origin: center;
  }

  &:hover {
    ::before {
      transform: scale(1);
    }
  }
  &:active {
    ::before {
      opacity: 0.3;
    }
  }
`

export const ToggleLabel = styled(Flex).attrs({
  as: 'label',
  alignItems: 'center'
})`
  cursor: pointer;
  position: relative;
  height: 2.5em;

  ::before {
    background: ${({ theme }) => theme.colors.grayscale.default};
    border-radius: ${({ theme }) => theme.radii.large};
    content: '';
    height: 1em;
    position: absolute;
    opacity: 0.3;
    transition: all 0.4s ease-in-out;
    width: 2.5em;
  }

  /* stylelint-disable-next-line selector-type-no-unknown */
  ${ToggleInput}:checked + & > ${Circle} {
    background: ${({ theme }) => theme.colors.grayscale.light};
  }

  /* stylelint-disable-next-line selector-type-no-unknown */
  ${ToggleInput}:checked + & > ${Circle} {
    transform: translateX(1.25em);
    background: ${({ theme }) => theme.colors.primary.default};
    ::before {
      background: ${({ theme }) => theme.colors.primary.default};
    }
  }
`