export interface OrganizationSubItem {
  id: number;
  name: string;
}
  
export interface OrganizationNavItem {
  id: number;
  name: string;
  submenu?: OrganizationSubItem[];
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
