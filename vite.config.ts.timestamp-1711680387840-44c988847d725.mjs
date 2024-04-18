// packages/create-analog/template-angular-v17/vite.config.ts
import { defineConfig } from "file:///Users/robertsbt/projects/analogjs/analog/node_modules/.pnpm/vite@5.0.11_@types+node@18.19.15_less@4.1.3_stylus@0.59.0/node_modules/vite/dist/node/index.js";
import analog from "file:///Users/robertsbt/projects/analogjs/analog/node_modules/.pnpm/@analogjs+platform@1.0.2_@angular-devkit+build-angular@17.2.0_@nx+devkit@18.0.4_@nx+vite@18.0.4/node_modules/@analogjs/platform/src/index.js";
var vite_config_default = defineConfig(({ mode }) => ({
  publicDir: "src/assets",
  build: {
    target: ["es2020"]
  },
  resolve: {
    mainFields: ["module"]
  },
  plugins: [analog()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/test.ts"],
    include: ["**/*.spec.ts"],
    reporters: ["default"]
  },
  define: {
    "import.meta.vitest": mode !== "production"
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsicGFja2FnZXMvY3JlYXRlLWFuYWxvZy90ZW1wbGF0ZS1hbmd1bGFyLXYxNy92aXRlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9yb2JlcnRzYnQvcHJvamVjdHMvYW5hbG9nanMvYW5hbG9nL3BhY2thZ2VzL2NyZWF0ZS1hbmFsb2cvdGVtcGxhdGUtYW5ndWxhci12MTdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9yb2JlcnRzYnQvcHJvamVjdHMvYW5hbG9nanMvYW5hbG9nL3BhY2thZ2VzL2NyZWF0ZS1hbmFsb2cvdGVtcGxhdGUtYW5ndWxhci12MTcvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3JvYmVydHNidC9wcm9qZWN0cy9hbmFsb2dqcy9hbmFsb2cvcGFja2FnZXMvY3JlYXRlLWFuYWxvZy90ZW1wbGF0ZS1hbmd1bGFyLXYxNy92aXRlLmNvbmZpZy50c1wiOy8vLyA8cmVmZXJlbmNlIHR5cGVzPVwidml0ZXN0XCIgLz5cblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgYW5hbG9nIGZyb20gJ0BhbmFsb2dqcy9wbGF0Zm9ybSc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xuICBwdWJsaWNEaXI6ICdzcmMvYXNzZXRzJyxcbiAgYnVpbGQ6IHtcbiAgICB0YXJnZXQ6IFsnZXMyMDIwJ10sXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBtYWluRmllbGRzOiBbJ21vZHVsZSddLFxuICB9LFxuICBwbHVnaW5zOiBbYW5hbG9nKCldLFxuICB0ZXN0OiB7XG4gICAgZ2xvYmFsczogdHJ1ZSxcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcbiAgICBzZXR1cEZpbGVzOiBbJ3NyYy90ZXN0LnRzJ10sXG4gICAgaW5jbHVkZTogWycqKi8qLnNwZWMudHMnXSxcbiAgICByZXBvcnRlcnM6IFsnZGVmYXVsdCddLFxuICB9LFxuICBkZWZpbmU6IHtcbiAgICAnaW1wb3J0Lm1ldGEudml0ZXN0JzogbW9kZSAhPT0gJ3Byb2R1Y3Rpb24nLFxuICB9LFxufSkpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sWUFBWTtBQUduQixJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLFdBQVc7QUFBQSxFQUNYLE9BQU87QUFBQSxJQUNMLFFBQVEsQ0FBQyxRQUFRO0FBQUEsRUFDbkI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLFlBQVksQ0FBQyxRQUFRO0FBQUEsRUFDdkI7QUFBQSxFQUNBLFNBQVMsQ0FBQyxPQUFPLENBQUM7QUFBQSxFQUNsQixNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFDYixZQUFZLENBQUMsYUFBYTtBQUFBLElBQzFCLFNBQVMsQ0FBQyxjQUFjO0FBQUEsSUFDeEIsV0FBVyxDQUFDLFNBQVM7QUFBQSxFQUN2QjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sc0JBQXNCLFNBQVM7QUFBQSxFQUNqQztBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
