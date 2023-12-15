import {devices} from '@playwright/test';
import type {PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {
    webServer: {
        port: 3000,
        command: 'yarn workspace website docusaurus serve',
    },
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
            },
        },
    ],
};

export default config;