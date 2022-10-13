import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'svelte-app2',
  },
});

export default app;
