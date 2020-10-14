
export class Student {
  constructor(
  public id: string,
  public name: string = null,
  public genre: Genre = null,
  public nickname: string = null,
  public email: string = null,
  public phone: string = null,
  public optionsId: string[] = []) {}
}

enum Genre {
  Male,
  Female
}