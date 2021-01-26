export enum ADMIN_LEVELS {
  ADMIN_LEVEL_ONE = 1,
  ADMIN_LEVEL_TWO = 2,
  ADMIN_LEVEL_THREE = 3
}

export interface Place {
  name_en: string;
  name_best?: string;
  id: string;
  volume?: number;
  admin_level: ADMIN_LEVELS;
  disabled?: boolean;
  children?: Place[];
}

export interface Country {
  name_en: string;
  name_best?: string;
  id: string;
  volume?: number;
  disabled?: boolean;
  children?: Place[];
}

export const SUPPORTED_COUNTRIES: Country[] = [
  {
    name_en: 'Italy',
    name_best: 'Italia',
    id: 'IT',
    volume: 100000
  },
  {
    name_en: 'Spain',
    name_best: 'Espagna',
    id: 'ES',
    volume: 10000
  },
  {
    name_en: 'Germany',
    name_best: 'Germany',
    id: 'DE',
    volume: 100000
  },
  {
    name_en: 'Great Britain',
    name_best: 'Great Britain',
    id: 'GB',
    volume: 10
  },
  {
    name_en: 'France',
    name_best: 'France',
    id: 'FR',
    volume: 100000
  },
]

export const COUNTRIES_DATA: Country[] = [
  {
    name_en: 'Italy',
    name_best: 'Italia',
    id: 'IT',
    children: [
      {
        name_en: 'Lombardy',
        name_best: 'Lombardia',
        id: 'csdc',
        volume: 10000,
        admin_level: ADMIN_LEVELS.ADMIN_LEVEL_ONE,
        children: [
          {
            name_en: 'Milan',
            name_best: 'Milano',
            id: 'YX123sdcfsdf456',
            volume: 500000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Bergamo',
            name_best: 'Bergamo',
            id: 'dfasf',
            volume: 500,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Brescia',
            name_best: 'Brescia',
            id: 'dfag3r4',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Como',
            name_best: 'Como',
            id: 'lkndsfh8.qr4',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          }
        ]
      },
      {
        name_en: 'Lazio',
        name_best: 'Lazio',
        id: '23lknlrq',
        volume: 10000,
        admin_level: ADMIN_LEVELS.ADMIN_LEVEL_ONE,
        children: [
          {
            name_en: 'Rome',
            name_best: 'Rome',
            id: '32rnldaskd',
            volume: 500000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Perugia',
            name_best: 'Perugia',
            id: '34324nln',
            volume: 500,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Brescia',
            name_best: 'Brescia',
            id: '34dnnqwd',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Como',
            name_best: 'Como',
            id: '14fasdf',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          }
        ]
      },
      {
        name_en: 'Molise',
        name_best: 'Molise',
        id: '3r4dasd',
        volume: 10,
        admin_level: ADMIN_LEVELS.ADMIN_LEVEL_ONE,
        children: [
          {
            name_en: 'Rome',
            name_best: 'Rome',
            id: '14fasd',
            volume: 500000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Perugia',
            name_best: 'Perugia',
            id: '3421rf',
            volume: 500,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Brescia',
            name_best: 'Brescia',
            id: '3rfmmopjr32r',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Como',
            name_best: 'Como',
            id: '324fsdfe',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          }
        ]
      }
    ]
  }
]