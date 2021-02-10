import React from 'react'

import FlowStages from './'

export default {
  title: 'Misc/ Flow Stages',
  component: FlowStages,
  parameters: {
    docs: {
      description: {
        component: 'A component used to display the user\'s current position in a flow.',
      },
    },
  },
}

export const Base = args => <FlowStages {...args} />
Base.args = {
  stages: Array.from({ length: 5 }, (_, i) => ({ title: `Stage ${i + 1}` })),
  current: 2,
  maxStage: 3,
  onClick: console.log
}
