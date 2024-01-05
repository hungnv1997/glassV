declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// declare module "@/src/*" {
//   import { defineComponent } from "vue";
//   const component: ReturnType<typeof defineComponent>;
//   export default component;
// }

// declare module "@/src/components/*" {
//   import { defineComponent } from "vue";
//   const component: ReturnType<typeof defineComponent>;
//   export default component;
// }
