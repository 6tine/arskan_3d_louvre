export class Pointer{
  isCurrentlyUpdated: boolean = false;

  constructor(public camera: {
                position: number[],
                target: number[]
              } = {position: [0,0,0], target: [0,0,0]},
              public position: {
                x?: number, y?: number, z?: number
              } = {x:0,y:0,z:0},
              public description?: string,
              public id?: string,
              public object?: string,
              public title?: string
  ) {
  }

}
