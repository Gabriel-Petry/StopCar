import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'StopCar',
  bundledWebRuntime: false,
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  // ...
};

export default config;