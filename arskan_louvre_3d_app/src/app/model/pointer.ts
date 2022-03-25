export class Pointer{
  constructor(public camera?: {
              position?: number[], target: number[]
              },
              public description?: string,
              public id?: string,
              public object?: string,
              public position?: {
                x: number, y: number, z: number
              },
              public title?: string
  ) {
  }

}
