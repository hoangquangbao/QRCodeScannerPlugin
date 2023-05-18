import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'QRCodeScanner',
  webDir: 'dist',
  server: {
		url: 'http://localhost:8080/',
		cleartext: true
	}
};

export default config;
