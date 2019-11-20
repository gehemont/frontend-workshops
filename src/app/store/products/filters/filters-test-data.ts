import { DropdownFilter, TextFilter } from './filters.models';

export const filtersMap: { [key: string]: DropdownFilter | TextFilter } = {
  pricelistTypes: {
    id: '#all-tab#pricelistTypes',
    filterId: 'pricelistTypes',
    tabId: 'all-tab',
    filterValuesServerName: 'PricelistType',
    componentFilterType: 'dropdown',
    sectionId: 0,
    titleTranslationKey: 'PRICELIST_TYPE',
    cssClass: 'pricelist-types',
    isTranslatable: true,
    getValuesOnOpen: true,
    useDropdownList: true,
    acceptedValues: [
      {
        key: 'Adobe',
        value: 'Adobe'
      }
    ],
    isLoading: false,
    values: [
      {
        key: 'Adobe',
        value: 'Adobe'
      },
      {
        key: 'Aws',
        value: 'Aws'
      },
      {
        key: 'AwsRi',
        value: 'AwsRi'
      },
      {
        key: 'AzureCsp',
        value: 'AzureCsp'
      },
      {
        key: 'AzureCspRi',
        value: 'AzureCspRi'
      },
      {
        key: 'AzureEa',
        value: 'AzureEa'
      },
      {
        key: 'AzureRi',
        value: 'AzureRi'
      },
      {
        key: 'OfficeCsp',
        value: 'OfficeCsp'
      },
      {
        key: 'OfficeEa',
        value: 'OfficeEa'
      }
    ],
    searchText: '',
    selectedValues: [
      {
        key: 'Adobe',
        value: 'Adobe'
      }
    ]
  } as DropdownFilter,
  productTextSearch: {
    filterId: 'productTextSearch',
    id: '#all-tab#productTextSearch',
    tabId: 'all-tab',
    filterValuesServerName: 'DisplayName',
    componentFilterType: 'text',
    sectionId: 0,
    titleTranslationKey: 'QUICK_SEARCH',
    searchOnEnter: true,
    showTitle: false,
    cssClass: 'quick-search',
    getValuesOnOpen: false
  } as TextFilter,
  regions: {
    filterId: 'regions',
    id: '#all-tab#regions',
    tabId: 'all-tab',
    filterValuesServerName: 'ProductRegionName',
    bodyPropertyName: 'Regions',
    selectionLimit: 100,
    componentFilterType: 'dropdown',
    sectionId: 0,
    titleTranslationKey: 'REGION',
    isMultiSelect: true,
    getValuesOnOpen: true,
    isRequired: true,
    acceptedValues: [
      {
        key: 'NA',
        value: 'No Region'
      }
    ],
    isLoading: false,
    values: [
      {
        key: 'AP East',
        value: 'AP East'
      },
      {
        key: 'AP Southeast',
        value: 'AP Southeast'
      },
      {
        key: 'Asia Pacific (Mumbai)',
        value: 'Asia Pacific (Mumbai)'
      },
      {
        key: 'Asia Pacific (Osaka-Local)',
        value: 'Asia Pacific (Osaka-Local)'
      },
      {
        key: 'Asia Pacific (Seoul)',
        value: 'Asia Pacific (Seoul)'
      },
      {
        key: 'Asia Pacific (Singapore)',
        value: 'Asia Pacific (Singapore)'
      },
      {
        key: 'Asia Pacific (Sydney)',
        value: 'Asia Pacific (Sydney)'
      },
      {
        key: 'Asia Pacific (Tokyo)',
        value: 'Asia Pacific (Tokyo)'
      },
      {
        key: 'AU Central',
        value: 'AU Central'
      },
      {
        key: 'AU Central 2',
        value: 'AU Central 2'
      },
      {
        key: 'AU East',
        value: 'AU East'
      },
      {
        key: 'AU Southeast',
        value: 'AU Southeast'
      },
      {
        key: 'AWS GovCloud (US)',
        value: 'AWS GovCloud (US)'
      },
      {
        key: 'AWS GovCloud (US-East)',
        value: 'AWS GovCloud (US-East)'
      },
      {
        key: 'Azure Stack',
        value: 'Azure Stack'
      },
      {
        key: 'BR South',
        value: 'BR South'
      },
      {
        key: 'CA Central',
        value: 'CA Central'
      },
      {
        key: 'CA East',
        value: 'CA East'
      },
      {
        key: 'Canada (Central)',
        value: 'Canada (Central)'
      },
      {
        key: 'DE Central',
        value: 'DE Central'
      },
      {
        key: 'DE Northeast',
        value: 'DE Northeast'
      },
      {
        key: 'DE Zone 1',
        value: 'DE Zone 1'
      },
      {
        key: 'EU (Frankfurt)',
        value: 'EU (Frankfurt)'
      },
      {
        key: 'EU (Ireland)',
        value: 'EU (Ireland)'
      },
      {
        key: 'EU (London)',
        value: 'EU (London)'
      },
      {
        key: 'EU (Paris)',
        value: 'EU (Paris)'
      },
      {
        key: 'EU (Stockholm)',
        value: 'EU (Stockholm)'
      },
      {
        key: 'EU North',
        value: 'EU North'
      },
      {
        key: 'EU West',
        value: 'EU West'
      },
      {
        key: 'FR Central',
        value: 'FR Central'
      },
      {
        key: 'FR South',
        value: 'FR South'
      },
      {
        key: 'IN Central',
        value: 'IN Central'
      },
      {
        key: 'IN South',
        value: 'IN South'
      },
      {
        key: 'IN West',
        value: 'IN West'
      },
      {
        key: 'JA East',
        value: 'JA East'
      },
      {
        key: 'JA West',
        value: 'JA West'
      },
      {
        key: 'Korea Central',
        value: 'Korea Central'
      },
      {
        key: 'Korea South',
        value: 'Korea South'
      },
      {
        key: 'KR Central',
        value: 'KR Central'
      },
      {
        key: 'KR South',
        value: 'KR South'
      },
      {
        key: 'N/A',
        value: 'No Region'
      },
      {
        key: 'South America (Sao Paulo)',
        value: 'South America (Sao Paulo)'
      },
      {
        key: 'UK North',
        value: 'UK North'
      },
      {
        key: 'UK South',
        value: 'UK South'
      },
      {
        key: 'UK South 2',
        value: 'UK South 2'
      },
      {
        key: 'UK West',
        value: 'UK West'
      },
      {
        key: 'US Central',
        value: 'US Central'
      },
      {
        key: 'US DoD',
        value: 'US DoD'
      },
      {
        key: 'US East',
        value: 'US East'
      },
      {
        key: 'US East (N. Virginia)',
        value: 'US East (N. Virginia)'
      },
      {
        key: 'US East (Ohio)',
        value: 'US East (Ohio)'
      },
      {
        key: 'US East 2',
        value: 'US East 2'
      },
      {
        key: 'US Gov',
        value: 'US Gov'
      },
      {
        key: 'US Gov AZ',
        value: 'US Gov AZ'
      },
      {
        key: 'US Gov TX',
        value: 'US Gov TX'
      },
      {
        key: 'US Gov Zone 1',
        value: 'US Gov Zone 1'
      },
      {
        key: 'US Gov Zone 2',
        value: 'US Gov Zone 2'
      },
      {
        key: 'US North Central',
        value: 'US North Central'
      },
      {
        key: 'US South Central',
        value: 'US South Central'
      },
      {
        key: 'US West',
        value: 'US West'
      },
      {
        key: 'US West (N. California)',
        value: 'US West (N. California)'
      },
      {
        key: 'US West (Oregon)',
        value: 'US West (Oregon)'
      },
      {
        key: 'US West 2',
        value: 'US West 2'
      },
      {
        key: 'US West Central',
        value: 'US West Central'
      },
      {
        key: 'Zone 1',
        value: 'Zone 1'
      },
      {
        key: 'Zone 2',
        value: 'Zone 2'
      },
      {
        key: 'Zone 3',
        value: 'Zone 3'
      },
      {
        key: 'Zone 4',
        value: 'Zone 4'
      },
      {
        key: 'Zone 5',
        value: 'Zone 5'
      }
    ],
    searchText: '',
    selectedValues: [
      {
        key: 'N/A',
        value: 'No Region'
      },
      {
        key: 'JA East',
        value: 'JA East'
      }
    ]
  } as DropdownFilter,
  currencies: {
    filterId: 'currencies',
    id: '#all-tab#currencies',
    tabId: 'all-tab',
    filterValuesServerName: 'Currency',
    bodyPropertyName: 'Currencies',
    componentFilterType: 'dropdown',
    sectionId: 0,
    titleTranslationKey: 'CURRENCY',
    isMultiSelect: true,
    getValuesOnOpen: true,
    isRequired: true,
    selectedValuesLimit: 2,
    acceptedValues: [
      {
        key: 'USD',
        value: 'USD'
      }
    ],
    isLoading: false,
    values: [
      {
        key: 'AUD',
        value: 'AUD'
      },
      {
        key: 'AUD FJ',
        value: 'AUD FJ'
      },
      {
        key: 'BRL',
        value: 'BRL'
      },
      {
        key: 'CAD',
        value: 'CAD'
      },
      {
        key: 'CHF',
        value: 'CHF'
      },
      {
        key: 'DKK',
        value: 'DKK'
      },
      {
        key: 'EUR',
        value: 'EUR'
      },
      {
        key: 'GBP',
        value: 'GBP'
      },
      {
        key: 'INR',
        value: 'INR'
      },
      {
        key: 'JPY',
        value: 'JPY'
      },
      {
        key: 'KRW',
        value: 'KRW'
      },
      {
        key: 'NOK',
        value: 'NOK'
      },
      {
        key: 'NZD',
        value: 'NZD'
      },
      {
        key: 'RUB',
        value: 'RUB'
      },
      {
        key: 'SEK',
        value: 'SEK'
      },
      {
        key: 'TWD',
        value: 'TWD'
      },
      {
        key: 'USD',
        value: 'USD'
      }
    ],
    searchText: '',
    selectedValues: [
      {
        key: 'USD',
        value: 'USD'
      }
    ]
  } as DropdownFilter,
  tenants: {
    filterId: 'tenants',
    id: '#all-tab#tenants',
    tabId: 'all-tab',
    filterValuesServerName: 'TenantName',
    bodyPropertyName: 'Tenants',
    componentFilterType: 'dropdown',
    sectionId: 1,
    titleTranslationKey: 'TENANT',
    isMultiSelect: true,
    getValuesOnOpen: true
  } as DropdownFilter,
  publisherNumbers: {
    filterId: 'publisherNumbers',
    id: '#all-tab#publisherNumbers',
    tabId: 'all-tab',
    filterValuesServerName: 'PublisherNumber',
    bodyPropertyName: 'PartNumbers',
    componentFilterType: 'dropdown',
    sectionId: 1,
    titleTranslationKey: 'PUBLISHER_NUMBER',
    isMultiSelect: true,
    getValuesOnOpen: true
  } as DropdownFilter,
  searchResultLimit: {
    filterId: 'searchResultLimit',
    id: '#all-tab#searchResultLimit',
    tabId: 'all-tab',
    filterValuesServerName: 'Take',
    componentFilterType: 'dropdown',
    selectedValues: [
      {
        key: '1000',
        value: '1000'
      }
    ],
    acceptedValues: [
      {
        key: '1000',
        value: '1000'
      }
    ],
    initialValues: [
      {
        key: '1000',
        value: '1000'
      }
    ],
    sectionId: 1,
    isRequired: true,
    titleTranslationKey: 'SEARCH_RESULT_LIMIT',
    useDropdownList: true,
    getValuesOnOpen: false,
    values: [
      {
        key: '100',
        value: '100'
      },
      {
        key: '250',
        value: '250'
      },
      {
        key: '500',
        value: '500'
      },
      {
        key: '1000',
        value: '1000'
      }
    ]
  } as DropdownFilter,
  priceType: {
    filterId: 'priceType',
    id: '#all-tab#priceType',
    tabId: 'all-tab',
    isHidden: true,
    sectionId: -1,
    filterValuesServerName: 'PriceStatus',
    componentFilterType: 'dropdown',
    titleTranslationKey: 'PRICE_TYPE',
    isMultiSelect: true,
    getValuesOnOpen: false,
    selectedValues: [
      {
        key: 0,
        value: 0
      },
      {
        key: 1,
        value: 1
      },
      {
        key: 2,
        value: 2
      }
    ],
    acceptedValues: [
      {
        key: 0,
        value: 0
      },
      {
        key: 1,
        value: 1
      },
      {
        key: 2,
        value: 2
      }
    ],
    initialValues: [
      {
        key: 0,
        value: 0
      },
      {
        key: 1,
        value: 1
      },
      {
        key: 2,
        value: 2
      }
    ],
    values: [
      {
        key: 0,
        value: 0
      },
      {
        key: 1,
        value: 1
      },
      {
        key: 2,
        value: 2
      }
    ]
  } as DropdownFilter
};
