import defaultSettings from '@/global/global-settings'

const title = defaultSettings.title || 'King Maker Web'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
