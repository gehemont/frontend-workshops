export class FilterValue {
  key: string | number;
  value: string | number;
  groupId?: string;
}

export type ProductFilterValueType = FilterValue[] | string;

export interface ProductFilter {
  id: string;
  filterId: string;
  tabId: string;
  componentFilterType: 'dropdown' | 'text';
  titleTranslationKey: string;
  filterValuesServerName: string;
  bodyPropertyName?: string;
  selectionLimit?: number;
  isReadonly?: boolean;
  isHidden?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  isTranslatable?: boolean;
  values?: ProductFilterValueType;
  hasStaticValuesList?: boolean;
  selectedValues?: ProductFilterValueType;
  acceptedValues?: ProductFilterValueType;
  initialValues?: ProductFilterValueType;
  sectionId: 0 | 1 | -1;
  isLoading?: boolean;
  showTitle?: boolean;
  cssClass?: string;
  searchText?: string;
}

export interface DropdownFilter extends ProductFilter {
  getValuesOnOpen: boolean;
  isMultiSelect?: boolean;
  selectedValuesLimit?: number;
  useDropdownList?: boolean;
  groupingProperty?: string;
}

export interface TextFilter extends ProductFilter {
  searchOnEnter?: boolean;
  placeholderTranslationKey?: string;
}
