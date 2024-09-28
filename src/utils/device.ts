import { headers } from 'next/headers'

const headerList = headers()
export const device = headerList.get('x-is-mobile')
