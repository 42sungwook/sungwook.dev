import { Device } from '@/types/device'
import { useMediaQuery } from 'react-responsive'
import { BREAKPOINT } from '@/constants/responsive'

const useIsDesktop = () => useMediaQuery({ minWidth: BREAKPOINT.TABLET })

const useIsTablet = () =>
  useMediaQuery({
    minWidth: BREAKPOINT.MOBILE,
    maxWidth: BREAKPOINT.TABLET - 1
  })

const useIsMobile = () => useMediaQuery({ maxWidth: BREAKPOINT.MOBILE - 1 })

export const useDeviceType = (): Device | null => {
  const isDesktop = useIsDesktop()
  const isTablet = useIsTablet()
  const isMobile = useIsMobile()

  if (isDesktop) {
    return 'desktop'
  }
  if (isTablet) {
    return 'tablet'
  }
  if (isMobile) {
    return 'mobile'
  }
  return null
}
