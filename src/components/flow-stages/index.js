import { Fragment } from 'react'
import { theme, Flex } from '@lessondesk/schoolbus'
import ChevronRight from '@lessondesk/material-icons/dist/ChevronRight'
import { Stage } from './styles'

const FlowStages = ({ stages, maxStage, current, onClick, ...otherProps }) => {
  return (
    <Flex {...otherProps} height='1.7em' alignItems='center'>
      {stages.map((stage, i) => {
        const title = stage?.title || stage

        return (
          <Fragment key={title}>
            {i > 0 && (
              <ChevronRight m='0 1em' color={theme.colors.grayscale.dark} />
            )}
            <Stage
              visited={i <= maxStage}
              disabled={i > maxStage && current !== i}
              current={i === current}
              onClick={onClick && (() => onClick(i))}
            >
              {title}
            </Stage>
          </Fragment>
        )
      })}
    </Flex>
  )
}

export default FlowStages
