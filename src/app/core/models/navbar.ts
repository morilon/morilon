import { NavbarItem } from '@models/navbar-item'

export class Navbar {
  picture: string
  mobileTitle: string
  items: NavbarItem[]

  static create(picture: string, mobileText: string, items: any[]): Navbar {
    const nav = new Navbar()
    nav.picture = picture
    nav.mobileTitle = mobileText
    nav.items = items
    return nav
  }

  getKeys(): string[] {
    return this.items.map(i => i.key)
  }
}
