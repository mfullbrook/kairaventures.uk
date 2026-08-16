import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

// Inject Vercel Web Analytics
inject();

// Inject Vercel Speed Insights
injectSpeedInsights();
