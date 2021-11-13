export default class ThisCodeSucks {
  private label: string
  constructor(text: string) {
    console.log(text)

    this.label = text
  }

  getLabelFn(): () => string {
    return () => this.label
  }
}
