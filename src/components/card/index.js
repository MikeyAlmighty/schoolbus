import React from 'react'
import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'

import IconButton from '../icon-button'
import Flex from '../flex'

import {
  StyledCard,
  StyledCardHeader,
  StyledCardDivider,
  StyledCardTitle,
  StyledCardDescription,
  StyledContent,
  TitleContainer,
  ActionsContainer,
} from './styles'

class Card extends React.PureComponent {
  static defaultProps = {
    title: '',
    description: '',
    actions: [],
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ...propTypes.space,
    ...propTypes.layout,
    ...propTypes.flexbox,
  }

  static Header = StyledCardHeader
  static Title = StyledCardTitle
  static Description = StyledCardDescription
  static Divider = StyledCardDivider
  static Content = StyledContent

  render() {
    const {
      title,
      description,
      onAdd,
      actions,
      viewState,
      renderHeader,
      children,
      hideDivider,
      wrapContent = true,
      ...otherProps
    } = this.props

    const showDivider = !hideDivider && title && (!viewState || !!children)

    return (
      <StyledCard {...otherProps}>
        {typeof renderHeader === 'function' ? (
          renderHeader({ title, description })
        ) : (
          <StyledCardHeader>
            <TitleContainer>
              <StyledCardTitle>{title}</StyledCardTitle>
              <ActionsContainer>
                {actions}
                {onAdd && !viewState && <IconButton onClick={onAdd} />}
              </ActionsContainer>
            </TitleContainer>
            {description.length > 0 && !viewState && (
              <StyledCardDescription>{description}</StyledCardDescription>
            )}
            {showDivider && <StyledCardDivider />}
          </StyledCardHeader>
        )}

        {wrapContent
          ? (
            <StyledContent
              hasHeader={title || description}
              showDivider={showDivider}
            >
              {children}
            </StyledContent>
          )
          : {children}
        }

      </StyledCard>
    )
  }
}

export default Card
