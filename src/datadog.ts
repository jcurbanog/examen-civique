import { datadogLogs } from '@datadog/browser-logs';
import { datadogRum } from '@datadog/browser-rum';
import { reactPlugin } from '@datadog/browser-rum-react';

export const initDatadog = () => {
    datadogLogs.init({
        clientToken: 'pubb1368dffbc42d59d60ea922125813310',
        site: 'datadoghq.eu',
        forwardErrorsToLogs: true,
        sessionSampleRate: 100
      });

      datadogRum.init({
        applicationId: '7bcd1588-9445-46fc-8598-81f35f7c92bf',
        clientToken: 'pubd916d65a7247a5b5912baa8e111c67a2',
        site: 'datadoghq.eu',
        service:'quiz-browser',
        env: 'prod',
        version: '1.0.0',
        sessionSampleRate: 100,
        sessionReplaySampleRate: 5,
        trackUserInteractions: true,
        trackResources: true,
        trackLongTasks: true,
        defaultPrivacyLevel: 'mask-user-input',
        plugins: [reactPlugin({ router: true })],
    });
}