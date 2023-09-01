export {};

declare module "vue" {
  // @ts-ignore
  type Hooks = App.AppInstance & Page.PageInstance;
  interface ComponentCustomOptions extends Hooks {}
}
