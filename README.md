# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

# Code Structure
As of commit 36076f9acbb189fa8f18ff282f820381312c01a7

index.html < main.ts < App.vue < vue-router
                 ^
        router/index.ts -------------^
                ^
                |- / :          component/views/HomeView         <  component/MainMenu/*
                |- /history/ :  component/views/HistoryView.vue
                |- /map1/ :     component/views/MapView.vue      <  component/Map1/*
                |- /map2/ :     component/views/Map2View         <  component/Map2/*
                |- /status/ :   component/views/StatusView       <  component/Status/*