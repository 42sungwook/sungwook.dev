import { headers } from 'next/headers'

export function getDevice() {
  const headerList = headers()
  const device = headerList.get('x-is-mobile')
  return device
}
