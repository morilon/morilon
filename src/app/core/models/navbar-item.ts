import { ITranslatable } from '@interfaces/itranslatable'

export class NavbarItem implements ITranslatable {
    key: string
    text: string
    uri: string
}
