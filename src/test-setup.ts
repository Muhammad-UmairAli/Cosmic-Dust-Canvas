import '@testing-library/jest-dom'

// required for React 18 act() in vitest
// @ts-expect-error — global not typed
globalThis.IS_REACT_ACT_ENVIRONMENT = true
