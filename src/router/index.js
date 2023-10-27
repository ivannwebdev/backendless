import tabs from '../tabs.json'

const sortedTabs = tabs.sort((a, b) => a.order - b.order)

export const routes = sortedTabs.map(({ path, id, title }) => ({
  path: `/${id}`,
  element: path,
  title
}))
