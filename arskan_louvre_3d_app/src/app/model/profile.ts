export class Profile{
  constructor(
    public cuts?: {enabled: boolean},
    public edition?: {enabled: boolean},
    public home?: {enabled: boolean},
    public id?: string,
    public measurement?: {enabled: boolean},
    public name?: string,
    public pointers?: {enabled: boolean},
    public team?: {enabled: boolean},
    public withPointers?: boolean
    ) {
  }
}
