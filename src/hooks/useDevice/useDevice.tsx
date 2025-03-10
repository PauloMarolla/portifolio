import { useMediaQuery } from '@uidotdev/usehooks'

export const useDevice = () => {
  const isMobile = useMediaQuery('only screen and (max-width : 767px)')
  const isLower840 = useMediaQuery('only screen and (max-width : 840px)')

  return { isMobile, isLower840 }
}
