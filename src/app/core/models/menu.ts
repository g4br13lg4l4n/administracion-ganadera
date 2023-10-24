export interface Menu {
  section: string,
  cap?: string,
  divider?: boolean,
  icon?: string,
  items: Items[]
}

interface Items {
  name: string,
  url: string
}
