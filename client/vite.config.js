// // // // // import { defineConfig } from 'vite'
// // // // // import react from '@vitejs/plugin-react'

// // // // // // https://vite.dev/config/
// // // // // export default defineConfig({
// // // // //   plugins: [react()],
// // // // // })
// // // // import { defineConfig } from 'vite';
// // // // import react from '@vitejs/plugin-react';

// // // // // https://vitejs.dev/config/
// // // // export default defineConfig({
// // // //   plugins: [react()],
// // // //   server: {
// // // //     hmr: true, // Ensure HMR is enabled
// // // //   },
// // // // });
// // // import { defineConfig } from 'vite';
// // // import react from '@vitejs/plugin-react';

// // // export default defineConfig({
// // //   plugins: [react()],
// // //   server: {
// // //     hmr: {
// // //       protocol: 'ws',
// // //       host: 'localhost',
// // //     },
// // //     watch: {
// // //       usePolling: true,
// // //     },
// // //     open: true,
// // //   },
// // // });
// // import { defineConfig } from 'vite';
// // import react from '@vitejs/plugin-react';

// // export default defineConfig({
// //   plugins: [react()],
// //   server: {
// //     hmr: true,
// //     open: true,
// //   },
// // });
// // vite.config.js
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     open: true,
//     hmr: {
//       protocol: 'ws',
//       host: 'localhost',
//     },
//     watch: {
//       usePolling: true,
//     },
//   },
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 5173,
    open: true,
    strictPort: true,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
    watch: {
      usePolling: true,
    },
  },
});
