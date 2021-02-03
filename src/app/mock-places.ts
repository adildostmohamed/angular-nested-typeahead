export enum ADMIN_LEVELS {
  COUNTRY = 0,
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
  supportedAdminLevel?: ADMIN_LEVELS;
  volume?: number;
  disabled?: boolean;
  children?: Place[];
}

export const SUPPORTED_COUNTRIES: Country[] = [
  {
    name_en: 'Italy',
    name_best: 'Italia',
    id: 'IT',
    volume: 100000,
    supportedAdminLevel: ADMIN_LEVELS.ADMIN_LEVEL_TWO
  },
  {
    name_en: 'Spain',
    name_best: 'Espagna',
    id: 'ES',
    volume: 1000000,
    supportedAdminLevel: ADMIN_LEVELS.COUNTRY
  },
  {
    name_en: 'Germany',
    name_best: 'Germany',
    id: 'DE',
    volume: 10000000,
    supportedAdminLevel: ADMIN_LEVELS.COUNTRY
  },
  {
    name_en: 'Great Britain',
    name_best: 'Great Britain',
    id: 'GB',
    volume: 10901242,
    supportedAdminLevel: ADMIN_LEVELS.ADMIN_LEVEL_TWO
  },
  {
    name_en: 'France',
    name_best: 'France',
    id: 'FR',
    volume: 100000,
    supportedAdminLevel: ADMIN_LEVELS.ADMIN_LEVEL_ONE

  },
  {
    name_en: 'Greece',
    name_best: 'Greece',
    id: 'GR',
    volume: 100000,
    supportedAdminLevel: ADMIN_LEVELS.ADMIN_LEVEL_THREE
  }
]

export const COUNTRIES_DATA: Country[] = [
  {
    name_en: 'Spain',
    name_best: 'Espagna',
    id: 'ES',
    volume: 1000000,
    supportedAdminLevel: ADMIN_LEVELS.COUNTRY
  },
  {
    name_en: 'Germany',
    name_best: 'Germany',
    id: 'DE',
    volume: 10000000,
    supportedAdminLevel: ADMIN_LEVELS.COUNTRY
  },
  {
    name_en: 'France',
    name_best: 'France',
    id: 'FR',
    supportedAdminLevel: ADMIN_LEVELS.ADMIN_LEVEL_ONE,
    children: [
      {
        name_en: 'Auvergne-Rhone-Alpes',
        name_best: 'Auvergne-Rhone-Alpes',
        id: 'csdc',
        volume: 10000,
        admin_level: ADMIN_LEVELS.ADMIN_LEVEL_ONE,
      },
      {
        name_en: 'Bourgogne-Franche-Comte',
        name_best: 'Bourgogne-Franche-Comte',
        id: 'csdc',
        volume: 10000,
        admin_level: ADMIN_LEVELS.ADMIN_LEVEL_ONE,
      },
      {
        name_en: 'Brittany',
        name_best: 'Brittany',
        id: 'csdc',
        volume: 10000,
        admin_level: ADMIN_LEVELS.ADMIN_LEVEL_ONE,
      },
      {
        name_en: 'Centre-Val de Loire',
        name_best: 'Centre-Val de Loire',
        id: 'csdc',
        volume: 10000,
        admin_level: ADMIN_LEVELS.ADMIN_LEVEL_ONE,
      },
      {
        name_en: 'Corsica',
        name_best: 'Corsica',
        id: 'csdc',
        volume: 10000,
        admin_level: ADMIN_LEVELS.ADMIN_LEVEL_ONE,
      },
      {
        name_en: 'Grand Est',
        name_best: 'Grand Est',
        id: 'csdc',
        volume: 10000,
        admin_level: ADMIN_LEVELS.ADMIN_LEVEL_ONE,
      },
      {
        name_en: 'Hauts-de-France',
        name_best: 'Hauts-de-France',
        id: 'csdc',
        volume: 10000,
        admin_level: ADMIN_LEVELS.ADMIN_LEVEL_ONE,
      },
      {
        name_en: 'Normandy',
        name_best: 'Normandy',
        id: 'csdc',
        volume: 10000,
        admin_level: ADMIN_LEVELS.ADMIN_LEVEL_ONE,
      },
      {
        name_en: 'Nouvelle-Aquitaine',
        name_best: 'Nouvelle-Aquitaine',
        id: 'csdc',
        volume: 10000,
        admin_level: ADMIN_LEVELS.ADMIN_LEVEL_ONE,
      },
      {
        name_en: 'Occitanie',
        name_best: 'Occitanie',
        id: 'csdc',
        volume: 10000,
        admin_level: ADMIN_LEVELS.ADMIN_LEVEL_ONE,
      },
      {
        name_en: 'Pays de la Loire',
        name_best: 'Pays de la Loire',
        id: 'csdc',
        volume: 10000,
        admin_level: ADMIN_LEVELS.ADMIN_LEVEL_ONE,
      },
      {
        name_en: 'Provence-Alpes-Cote dAzure',
        name_best: 'Provence-Alpes-Cote dAzure',
        id: 'csdc',
        volume: 10000,
        admin_level: ADMIN_LEVELS.ADMIN_LEVEL_ONE,
      },
      {
        name_en: 'Ile-de-France',
        name_best: 'Ile-de-France',
        id: 'csdc',
        volume: 10000,
        admin_level: ADMIN_LEVELS.ADMIN_LEVEL_ONE,
      }
    ]
  },
  {
    name_en: 'Italy',
    name_best: 'Italia',
    id: 'IT',
    supportedAdminLevel: ADMIN_LEVELS.ADMIN_LEVEL_TWO,
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
  },
  {
    name_en: 'Great Britain',
    name_best: 'Great Britain',
    id: 'GB',
    supportedAdminLevel: ADMIN_LEVELS.ADMIN_LEVEL_TWO,
    children: [
      {
        name_en: 'England',
        name_best: 'England',
        id: 'england',
        volume: 10000,
        admin_level: ADMIN_LEVELS.ADMIN_LEVEL_ONE,
        children: [
          {
            name_en: 'Bath and North East Somerset',
            name_best: 'Bath and North East Somerset',
            id: 'YX123sdcfsdf456',
            volume: 500000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Bedford',
            name_best: 'Bedford',
            id: 'dfasf',
            volume: 500,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Blackburn with Darwen',
            name_best: 'Blackburn with Darwen',
            id: 'sad',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Blackpool',
            name_best: 'Blackpool',
            id: 'lkndsfh8.adsas',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Borough of Halton',
            name_best: 'Borough of Halton',
            id: 'lkndsfh8.asdsda',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Bracknell Forest',
            name_best: 'Bracknell Forest',
            id: 'lkndsfh8.sadsa',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Brighton and Hove',
            name_best: 'Brighton and Hove',
            id: 'lkndsfh8.adsdsa',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Brisol',
            name_best: 'Brisol',
            id: 'lkndsfh8.br',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Buckinghamshire',
            name_best: 'Buckinghamshire',
            id: 'lkndsfh8.asddsadad',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Cambridgeshire',
            name_best: 'Cambridgeshire',
            id: 'lkndsfh8.sbdsbsdb',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Central Bedfordshire',
            name_best: 'Central Bedfordshire',
            id: 'lkndsfh8.dasdasd',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Cheshire East',
            name_best: 'Cheshire East',
            id: 'lkndsfh8.adssds',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Cheshire West and Chester',
            name_best: 'Cheshire West and Chester',
            id: 'lkndsfh8.adasdads',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
        ]
      },
      {
        name_en: 'Northern Ireland',
        name_best: 'Northern Ireland',
        id: 'ni',
        volume: 10000,
        admin_level: ADMIN_LEVELS.ADMIN_LEVEL_ONE,
        children: [
          {
            name_en: 'Antrim and Newtownabbey',
            name_best: 'Antrim and Newtownabbey',
            id: 'asacdascas',
            volume: 500000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Ards and North Down',
            name_best: 'Ards and North Down',
            id: 'tghujk',
            volume: 500,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Armagh City, Banbridge and Craigavon',
            name_best: 'Armagh City, Banbridge and Craigavon',
            id: 'jopjca',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Belfast',
            name_best: 'Belfast',
            id: 'ghsad.adsas',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Causeway Coast and Glens',
            name_best: 'Causeway Coast and Glens',
            id: 'wqdcwffw2.asdsda',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Derry and Strabane',
            name_best: 'Derry and Strabane',
            id: 'lkndsfh8.tyguhqwdi',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Fermanagh and Omagh',
            name_best: 'Fermanagh and Omagh',
            id: 'lkndsfh8.scas',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Lisburn and Castelreagh',
            name_best: 'Lisburn and Castelreagh',
            id: 'lkndsfh8.sdasasdbr',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Mid Ulster',
            name_best: 'Mid Ulster',
            id: 'lkndsfh8.67tghdsa',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Mid and East Antrim',
            name_best: 'Mid and East Antrim',
            id: 'lkndsfh8.asdas',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Newry, Mourne and Down',
            name_best: 'Newry, Mourne and Down',
            id: 'lkndsfh8.scascasfsaf',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          }
        ]
      },
      {
        name_en: 'Scotland',
        name_best: 'Scotland',
        id: 'scotland',
        volume: 10000,
        admin_level: ADMIN_LEVELS.ADMIN_LEVEL_ONE,
        children: [
          {
            name_en: 'Aberdeen City',
            name_best: 'Aberdeen City',
            id: 'YX123sdcfsdf456',
            volume: 500000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Aberdeenshire',
            name_best: 'Aberdeenshire',
            id: 'dfasf',
            volume: 500,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Angus Council',
            name_best: 'Angus Council',
            id: 'sad',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Argyll and Bute Council',
            name_best: 'Argyll and Bute Council',
            id: 'lkndsfh8.adsas',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Clackmannanshire',
            name_best: 'Clackmannanshire',
            id: 'lkndsfh8.asdsda',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Dumfries and Galloway',
            name_best: 'Dumfries and Galloway',
            id: 'lkndsfh8.sadsa',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'East Ayrshire',
            name_best: 'East Ayrshire',
            id: 'lkndsfh8.adsdsa',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'East Dunbartonshire Council',
            name_best: 'East Dunbartonshire Council',
            id: 'lkndsfh8.br',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'East Lothian Council',
            name_best: 'East Lothian Council',
            id: 'lkndsfh8.asddsadad',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'East Renfrewshire Council',
            name_best: 'East Renfrewshire Council',
            id: 'lkndsfh8.sbdsbsdb',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Edinburgh',
            name_best: 'Edinburgh',
            id: 'lkndsfh8.dasdasd',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Falkirk',
            name_best: 'Falkirk',
            id: 'lkndsfh8.adssds',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Fife',
            name_best: 'Fife',
            id: 'lkndsfh8.adasdads',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Glasgow City',
            name_best: 'Glasgow City',
            id: 'lkndsfh8.adasdads',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
        ]
      },
      {
        name_en: 'Wales',
        name_best: 'Wales',
        id: 'wales',
        volume: 10000,
        admin_level: ADMIN_LEVELS.ADMIN_LEVEL_ONE,
        children: [
          {
            name_en: 'Blaenau Gwent',
            name_best: 'Blaenau Gwent',
            id: 'YX123sdcfsdf456',
            volume: 500000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Bridgend County Borough',
            name_best: 'Bridgend County Borough',
            id: 'dfasf',
            volume: 500,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Caerphilly County Borough',
            name_best: 'Caerphilly County Borough',
            id: 'sad',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Cardiff',
            name_best: 'Cardiff',
            id: 'lkndsfh8.adsas',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Carmarthenshire',
            name_best: 'Carmarthenshire',
            id: 'lkndsfh8.asdsda',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Ceredigion',
            name_best: 'Ceredigion',
            id: 'lkndsfh8.sadsa',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Conwy Principal Area',
            name_best: 'Conwy Principal Area',
            id: 'lkndsfh8.adsdsa',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Denbigshire',
            name_best: 'Denbigshire',
            id: 'lkndsfh8.br',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Flintshire',
            name_best: 'Flintshire',
            id: 'lkndsfh8.asddsadad',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Gwynedd',
            name_best: 'Gwynedd',
            id: 'lkndsfh8.sbdsbsdb',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Isle of Anglesey',
            name_best: 'Isle of Anglesey',
            id: 'lkndsfh8.dasdasd',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Merthyr Tydfil County Borough',
            name_best: 'Merthyr Tydfil County Borough',
            id: 'lkndsfh8.adssds',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
          {
            name_en: 'Monmouthshire',
            name_best: 'Monmouthshire',
            id: 'lkndsfh8.adasdads',
            volume: 5000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO
          },
        ]
      }
    ]
  },
  {
    name_en: 'Greece',
    name_best: 'Greece',
    id: 'GR',
    supportedAdminLevel: ADMIN_LEVELS.ADMIN_LEVEL_THREE,
    children: [
      {
        name_en: 'Decentralized Administration of Attica',
        name_best: 'Decentralized Administration of Attica',
        id: 'attica',
        volume: 10000,
        admin_level: ADMIN_LEVELS.ADMIN_LEVEL_ONE,
        children: [
          {
            name_en: 'Attica',
            name_best: 'Attica',
            id: 'YX123sdcfsdf456',
            volume: 500000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO,
            children: [
              {
                name_en: 'Central Athens Regional Unit',
                name_best: 'Central Athens Regional Unit',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'East Attica Regional Unit',
                name_best: 'East Attica Regional Unit',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Islands',
                name_best: 'Islands',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'North Athens Regional Unit',
                name_best: 'North Athens Regional Unit',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Piraeus Regional Unit',
                name_best: 'Piraeus Regional Unit',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'South Athens',
                name_best: 'South Athens',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'West Athens Regional Unit',
                name_best: 'West Athens Regional Unit',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'West Attica Regional Unit',
                name_best: 'West Attica Regional Unit',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
            ]
          }
        ]
      },
      {
        name_en: 'Decentralized Administration of Crete',
        name_best: 'Decentralized Administration of Crete',
        id: 'crete',
        volume: 10000,
        admin_level: ADMIN_LEVELS.ADMIN_LEVEL_ONE,
        children: [
          {
            name_en: 'Crete',
            name_best: 'Crete',
            id: 'YX123sdcfsdf456',
            volume: 500000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO,
            children: [
              {
                name_en: 'Chania',
                name_best: 'Chania',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Heraklion',
                name_best: 'Heraklion',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Lasithi',
                name_best: 'Lasithi',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Rethymno',
                name_best: 'Rethymno',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              }
            ]
          }
        ]
      },
      {
        name_en: 'Decentralized Administration of Epirus and Western Macedonia',
        name_best: 'Decentralized Administration of Epirus and Western Macedonia',
        id: 'epirus',
        volume: 10000,
        admin_level: ADMIN_LEVELS.ADMIN_LEVEL_ONE,
        children: [
          {
            name_en: 'Epirus',
            name_best: 'Epirus',
            id: 'YX123sdcfsdf456',
            volume: 500000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO,
            children: [
              {
                name_en: 'Arta',
                name_best: 'Arta',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Ioannina',
                name_best: 'Ioannina',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Preveza',
                name_best: 'Preveza',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Thesproita',
                name_best: 'Thesproita',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              }
            ]
          },
          {
            name_en: 'Western Macedonia Region',
            name_best: 'Western Macedonia Region',
            id: 'YX123sdcfsdf456',
            volume: 500000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO,
            children: [
              {
                name_en: 'Florina',
                name_best: 'Florina',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Grevena',
                name_best: 'Grevena',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Kastoria',
                name_best: 'Kastoria',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Kozani',
                name_best: 'Kozani',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              }
            ]
          }
        ]
      },
      {
        name_en: 'Decentralized Administration of Macedonia and Thrace',
        name_best: 'Decentralized Administration of Macedonia and Thrace',
        id: 'epirus',
        volume: 10000,
        admin_level: ADMIN_LEVELS.ADMIN_LEVEL_ONE,
        children: [
          {
            name_en: 'Central Macedonia',
            name_best: 'Central Macedonia',
            id: 'YX123sdcfsdf456',
            volume: 500000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO,
            children: [
              {
                name_en: 'Halkidiki',
                name_best: 'Halkidiki',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Imathia',
                name_best: 'Imathia',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Kilki',
                name_best: 'Kilki',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Pella',
                name_best: 'Pella',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Pieria',
                name_best: 'Pieria',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Serres',
                name_best: 'Serres',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Thessaloniki',
                name_best: 'Thessaloniki',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              }
            ]
          },
          {
            name_en: 'East Macedonia and Thrace',
            name_best: 'East Macedonia and Thrace',
            id: 'YX123sdcfsdf456',
            volume: 500000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO,
            children: [
              {
                name_en: 'Drama',
                name_best: 'Drama',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Evros',
                name_best: 'Evros',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Kavala Prefecture',
                name_best: 'Kavala Prefecture',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Rhodope',
                name_best: 'Rhodope',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Thasos Regional Unit',
                name_best: 'Thasos Regional Unit',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Xanthi',
                name_best: 'Xanthi',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              }
            ]
          }
        ]
      },
      {
        name_en: 'Decentralized Administration of Peloponnese, Western Greece and the Ionian',
        name_best: 'Decentralized Administration of Peloponnese, Western Greece and the Ionian',
        id: 'epirus',
        volume: 10000,
        admin_level: ADMIN_LEVELS.ADMIN_LEVEL_ONE,
        children: [
          {
            name_en: 'Ionian Islands',
            name_best: 'Ionian Islands',
            id: 'YX123sdcfsdf456',
            volume: 500000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO,
            children: [
              {
                name_en: 'Cephalonia',
                name_best: 'Cephalonia',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Corfu',
                name_best: 'Corfu',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Ithaki',
                name_best: 'Ithaki',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Lefkada',
                name_best: 'Lefkada',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Zakynthos',
                name_best: 'Zakynthos',
                id: 'YX123sdcfsdf456',
                volume: 500000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              }
            ]
          },
          {
            name_en: 'Peloponnese Region',
            name_best: 'Peloponnese Region',
            id: 'YX123sdcfsdf456',
            volume: 500000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO,
            children: [
              {
                name_en: 'Arcadia',
                name_best: 'Arcadia',
                id: 'arcadia',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Argolis',
                name_best: 'Argolis',
                id: 'argolis',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Corinthia',
                name_best: 'Corinthia',
                id: 'Corinthia',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Laconia',
                name_best: 'Laconia',
                id: 'arcadia',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Messenia',
                name_best: 'Messenia',
                id: 'arcadia',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              }
            ]
          },
          {
            name_en: 'Western Greece',
            name_best: 'Western Greece',
            id: 'YX123sdcfsdf456',
            volume: 500000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO,
            children: [
              {
                name_en: 'Achaea',
                name_best: 'Achaea',
                id: 'Achaea',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Aetolia-Acarnania',
                name_best: 'Aetolia-Acarnania',
                id: 'Aetolia-Acarnania',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Elis',
                name_best: 'Elis',
                id: 'Elis',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
            ]
          }
        ]
      },
      {
        name_en: 'Decentralized Administration of the Aegean',
        name_best: 'Decentralized Administration of the Aegean',
        id: 'epirus',
        volume: 10000,
        admin_level: ADMIN_LEVELS.ADMIN_LEVEL_ONE,
        children: [
          {
            name_en: 'North Aegean Region',
            name_best: 'North Aegean Region',
            id: 'YX123sdcfsdf456',
            volume: 500000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO,
            children: [
              {
                name_en: 'Chios',
                name_best: 'Chios',
                id: 'Chios',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Icaria',
                name_best: 'Icaria',
                id: 'Icaria',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Lemnos',
                name_best: 'Lemnos',
                id: 'Lemnos',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Lesbos Prefecture',
                name_best: 'Lesbos Prefecture',
                id: 'Lesbos Prefecture',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Samos Prefecture',
                name_best: 'Samos Prefecture',
                id: 'Samos Prefecture',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              }
            ]
          },
          {
            name_en: 'South Aegean',
            name_best: 'South Aegean',
            id: 'YX123sdcfsdf456',
            volume: 500000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO,
            children: [
              {
                name_en: 'Andros',
                name_best: 'Andros',
                id: 'Andros',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Kalymnos',
                name_best: 'Kalymnos',
                id: 'Kalymnos',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Karphatos',
                name_best: 'Karphatos',
                id: 'Karphatos',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Kea-Kythnos',
                name_best: 'Kea-Kythnos',
                id: 'Kea-Kythnos',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Kos',
                name_best: 'Kos',
                id: 'Kos',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Milos',
                name_best: 'Milos',
                id: 'Milos',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Mykonos',
                name_best: 'Mykonos',
                id: 'Mykonos',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Naxos',
                name_best: 'Naxos',
                id: 'Naxos',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Paros',
                name_best: 'Paros',
                id: 'Paros',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Rhodes',
                name_best: 'Rhodes',
                id: 'Rhodes',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Syros',
                name_best: 'Syros',
                id: 'Syros',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Thira',
                name_best: 'Thira',
                id: 'Thira',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Tinos Regional Unit',
                name_best: 'Tinos Regional Unit',
                id: 'Tinos Regional Unit',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              }
            ]
          }
        ]
      },
      {
        name_en: 'Decentralized Administration of Thessaly and Central Greece',
        name_best: 'Decentralized Administration of Thessaly and Central Greece',
        id: 'epirus',
        volume: 10000,
        admin_level: ADMIN_LEVELS.ADMIN_LEVEL_ONE,
        children: [
          {
            name_en: 'Central Greece',
            name_best: 'Central Greece',
            id: 'YX123sdcfsdf456',
            volume: 500000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO,
            children: [
              {
                name_en: 'Boeotia',
                name_best: 'Boeotia',
                id: 'Boeotia',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Euboea',
                name_best: 'Euboea',
                id: 'Euboea',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Evrytania',
                name_best: 'Evrytania',
                id: 'Evrytania',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Phocis',
                name_best: 'Phocis',
                id: 'Phocis',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Phthiotis',
                name_best: 'Phthiotis',
                id: 'Phthiotis',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              }
            ]
          },
          {
            name_en: 'Thessalia',
            name_best: 'Thessalia',
            id: 'YX123sdcfsdf456',
            volume: 500000,
            admin_level: ADMIN_LEVELS.ADMIN_LEVEL_TWO,
            children: [
              {
                name_en: 'Karditsa',
                name_best: 'Karditsa',
                id: 'Karditsa',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Larissa',
                name_best: 'Larissa',
                id: 'Larissa',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Magneisa Prefecture',
                name_best: 'Magneisa Prefecture',
                id: 'Magneisa Prefecture',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Sporades',
                name_best: 'Sporades',
                id: 'Sporades',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              },
              {
                name_en: 'Trikala',
                name_best: 'Trikala',
                id: 'Trikala',
                volume: 50000,
                admin_level: ADMIN_LEVELS.ADMIN_LEVEL_THREE
              }
            ]
          }
        ]
      }
    ]
  }
];
