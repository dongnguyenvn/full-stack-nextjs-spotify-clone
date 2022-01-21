import { createTypedHooks } from 'easy-peasy'
import type { StoreModel } from '../lib/store'

const typedHooks = createTypedHooks<StoreModel>()

export const useStoreActions = typedHooks.useStoreActions
export const useStoreDispatch = typedHooks.useStoreDispatch
export const useStoreState = typedHooks.useStoreState
