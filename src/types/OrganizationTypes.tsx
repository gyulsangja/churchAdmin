
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
  subItem: OrganizationNavItem;
}

export interface addNavItem {
  id: number;
  name: string
}
