export interface OrganizationSubItem {
  id: number;
  name: string;
}
  
export interface OrganizationNavItem {
  id: number;
  name: string;
  submenu?: OrganizationNavItem[];
}

export interface OrganizationNavProps {
    organizationNavi: OrganizationNavItem[];
    selectedId?: string;
    selectedSubId?: string;
}

export interface OrganizationDetailProps {
  item: OrganizationNavItem;
}

export interface OrganizationSubDetailProps {
  subItem: OrganizationSubItem;
}

export interface addNavItem {
  id: number;
  name: string
}
