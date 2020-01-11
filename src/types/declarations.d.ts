declare module "*.css" {
  const content: { [className: string]: string }
  export = content
}

declare module "*.gif" {
  const value: any
  export default value
}
