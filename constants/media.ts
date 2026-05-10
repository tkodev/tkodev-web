import { FrameEntry, FrameId } from '@/types/media'

const frameEntries: Record<FrameId, FrameEntry> = {
  mobile: {
    id: 'mobile',
    src: '/images/frames/iphone.png',
    width: 272,
    height: 551.11,
    alt: 'iPhone Frame',
    screenTop: 16,
    screenWidth: 240,
    screenHeight: 519.11
  },
  desktop: {
    id: 'desktop',
    src: '/images/frames/macbook.png',
    width: 852,
    height: 508,
    alt: 'Macbook Frame',
    screenTop: 16,
    screenWidth: 660,
    screenHeight: 428
  }
}

export { frameEntries }
