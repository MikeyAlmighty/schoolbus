import React from 'react'
import { Circle } from '@tiaanduplessis/react-progressbar'
import get from 'lodash.get'

import BreakdownText from './breakdown-text'
import Loader from './loader'
import Text from '../text'
import Flex from '../flex'
import Box from '../box'
import theme from '../../config/theme'

const ProgressCircle = ({
  color = theme.colors.primary.default,
  backgroundColor = theme.colors.grayscale.xxlight,
  fg = color,
  bg = backgroundColor, 
  showBreakdown,
  min = 0,
  max = 100,
  value = 0,
  isLoading,
  title,
  width = '12em',
  text = 'Active',
  complementText = 'Inactive',
  fontSize = 'xxlarge',
  titleFontSize = 'medium',
  children,
  ...otherProps
}) => {

  return (
    <Flex
      flexDirection='column'
      alignItems='center'
      {...otherProps}
    >
      <Box
        width={width}
        role='progressbar'
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
      >
        {isLoading
          ? <Loader showBreakdown={showBreakdown} width={width} />
          : (
          <Flex
            width='90%'
            m='0 auto'
            position='relative'
            alignItems='center'
            justifyContent='center'
          >
            <Circle
              progress={value / max}
              color={get(theme.colors, fg) || fg}
              trailColor={get(theme.colors, bg) || bg}
              strokeWidth={3}
              easing='easeInOut'
            />
            <Flex
              position='absolute'
              flexDirection='column'
              alignItems='center'
            >
              <Text
                color='grayscale.dark'
                fontSize={fontSize}
                fontWeight='bold'
              >
                {Math.round(value)}
              </Text>
              {title && (
                <Text
                  color='grayscale.default'
                  fontSize={titleFontSize}
                >
                  {title}
                </Text>
              )}
            </Flex>
          </Flex>
        )}
      </Box>
      {showBreakdown && !isLoading && (
        <Flex mt='1em'>
          <BreakdownText color={fg} count={value} mr='1em'>
            {text}
          </BreakdownText>
          <BreakdownText color={bg} count={max - value}>
            {complementText}
          </BreakdownText>
        </Flex>
      )}
      {children}
    </Flex>
  )
}

export default ProgressCircle
