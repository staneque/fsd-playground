import type { StoryFn } from '@storybook/react'
import { StateSchema } from 'app/providers/Store'
import { Provider } from 'react-redux'
import { createReduxStore } from 'app/providers/Store/config/store'
import { DeepPartial } from 'shared/libs/types'

export const StoreDecorator = (state: DeepPartial<StateSchema>) => {
  const store = createReduxStore(state as StateSchema)

  return (StoryComponent: StoryFn) => (
    <Provider store={store}>
      <StoryComponent />
    </Provider>
  )
}
