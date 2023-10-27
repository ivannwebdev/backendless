import { lazy } from 'react'

export function lazyComponent(path) {
  return lazy(() => new Promise (resolve => setTimeout(() => resolve(import(`../${path}`)), 1000)))
}
