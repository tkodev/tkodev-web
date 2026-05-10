import { ClientEntry, ClientId } from '@/types/client'

const clientEntries: Record<ClientId, ClientEntry> = {
  airCanada: {
    id: 'airCanada',
    name: 'Air Canada',
    href: 'https://www.aircanada.com/',
    baseSrc: '/images/companies/air-canada/base@1x.png',
    lightSrc: '/images/companies/air-canada/light@1x.png',
    darkSrc: '/images/companies/air-canada/dark@1x.png'
  },
  airMiles: {
    id: 'airMiles',
    name: 'Air Miles',
    href: 'https://www.airmiles.ca/',
    baseSrc: '/images/companies/air-miles/base@1x.png',
    lightSrc: '/images/companies/air-miles/light@1x.png',
    darkSrc: '/images/companies/air-miles/dark@1x.png'
  },
  babyJogger: {
    id: 'babyJogger',
    name: 'Baby Jogger',
    href: 'https://babyjogger.ca/',
    baseSrc: '/images/companies/baby-jogger/base@1x.png',
    lightSrc: '/images/companies/baby-jogger/light@1x.png',
    darkSrc: '/images/companies/baby-jogger/dark@1x.png'
  },
  badal: {
    id: 'badal',
    name: 'Badal.io',
    href: 'https://badal.io/',
    baseSrc: '/images/companies/badal/base@1x.png',
    lightSrc: '/images/companies/badal/light@1x.png',
    darkSrc: '/images/companies/badal/dark@1x.png'
  },
  beyond: {
    id: 'beyond',
    name: 'Beyond',
    href: 'https://beyondmpd.com/',
    baseSrc: '/images/companies/beyond/base@1x.png',
    lightSrc: '/images/companies/beyond/light@1x.png',
    darkSrc: '/images/companies/beyond/dark@1x.png'
  },
  brandfire: {
    id: 'brandfire',
    name: 'Brandfire',
    href: 'https://www.brandfire.ca/',
    baseSrc: '/images/companies/brandfire/base@1x.png',
    lightSrc: '/images/companies/brandfire/light@1x.png',
    darkSrc: '/images/companies/brandfire/dark@1x.png'
  },
  canadaDry: {
    id: 'canadaDry',
    name: 'Canada Dry',
    href: 'https://www.canadadry.com/',
    baseSrc: '/images/companies/canada-dry/base@1x.png',
    lightSrc: '/images/companies/canada-dry/light@1x.png',
    darkSrc: '/images/companies/canada-dry/dark@1x.png'
  },
  geAppliances: {
    id: 'geAppliances',
    name: 'GE Appliances',
    href: 'https://geappliances.ca/',
    baseSrc: '/images/companies/ge-appliances/base@1x.png',
    lightSrc: '/images/companies/ge-appliances/light@1x.png',
    darkSrc: '/images/companies/ge-appliances/dark@1x.png'
  },
  monogram: {
    id: 'monogram',
    name: 'Monogram',
    href: 'https://monogram.ca',
    baseSrc: '/images/companies/monogram/base@1x.png',
    lightSrc: '/images/companies/monogram/light@1x.png',
    darkSrc: '/images/companies/monogram/dark@1x.png'
  },
  peoplesGroup: {
    id: 'peoplesGroup',
    name: 'Peoples Group',
    href: 'https://www.peoplestrust.com/',
    baseSrc: '/images/companies/peoples-group/base@1x.png',
    lightSrc: '/images/companies/peoples-group/light@1x.png',
    darkSrc: '/images/companies/peoples-group/dark@1x.png'
  },
  quantumMob: {
    id: 'quantumMob',
    name: 'Quantum Mob',
    href: 'https://www.linkedin.com/company/quantumMob/',
    baseSrc: '/images/companies/quantum-mob/base@1x.png',
    lightSrc: '/images/companies/quantum-mob/light@1x.png',
    darkSrc: '/images/companies/quantum-mob/dark@1x.png'
  },
  rewardops: {
    id: 'rewardops',
    name: 'RewardOps',
    href: 'https://www.rewardops.com/',
    baseSrc: '/images/companies/rewardops/base@1x.png',
    lightSrc: '/images/companies/rewardops/light@1x.png',
    darkSrc: '/images/companies/rewardops/dark@1x.png'
  },
  toffifee: {
    id: 'toffifee',
    name: 'Toffifee',
    href: 'https://www.toffifee.ca/',
    baseSrc: '/images/companies/toffifee/base@1x.png',
    lightSrc: '/images/companies/toffifee/light@1x.png',
    darkSrc: '/images/companies/toffifee/dark@1x.png'
  },
  toyota: {
    id: 'toyota',
    name: 'Toyota',
    href: 'https://www.toyota.ca/',
    baseSrc: '/images/companies/toyota/base@1x.png',
    lightSrc: '/images/companies/toyota/light@1x.png',
    darkSrc: '/images/companies/toyota/dark@1x.png'
  },
  weiser: {
    id: 'weiser',
    name: 'Weiser Lock',
    href: 'https://ca.weiserlock.com/',
    baseSrc: '/images/companies/weiser/base@1x.png',
    lightSrc: '/images/companies/weiser/light@1x.png',
    darkSrc: '/images/companies/weiser/dark@1x.png'
  },
  kosInteriorDesign: {
    id: 'kosInteriorDesign',
    name: "Ko's Interior Design",
    href: 'https://www.kosinteriordesign.com/',
    baseSrc: '',
    lightSrc: '',
    darkSrc: ''
  },
  tkodev: {
    id: 'tkodev',
    name: 'Tkodev Inc.',
    href: 'https://www.tko.dev/',
    baseSrc: '',
    lightSrc: '',
    darkSrc: ''
  },
  ocadUniversity: {
    id: 'ocadUniversity',
    name: 'OCAD University',
    href: 'https://www.ocadu.ca/',
    baseSrc: '',
    lightSrc: '',
    darkSrc: ''
  }
}

const clientIds: ClientId[] = [
  'badal',
  'quantumMob',
  'rewardops',
  'brandfire',
  'beyond',
  'peoplesGroup',
  'airCanada',
  'airMiles',
  'toyota',
  'geAppliances',
  'monogram',
  'canadaDry',
  'weiser',
  'toffifee',
  'babyJogger'
]

export { clientEntries, clientIds }
