export interface NavSubItem {
    icon: string
    name: string
    to: string
}

export interface NavItem extends NavSubItem {
    subItems?: NavSubItem[]
}