/**
 * Analytics & Sentry service
 *
 * Initializes Sentry for error reporting and Google Analytics 4 for anonymous
 * usage tracking. Both are gated on user analytics consent and skipped in dev.
 *
 * Sentry privacy guarantees enforced in `beforeSend`:
 *   - No breadcrumbs, requests, extras, or arbitrary contexts (only OS /
 *     browser / device metadata kept)
 *   - No frame-level locals or source-context snippets
 *   - No PII — `user` is reduced to a stable anonymous id (or omitted)
 *   - `sendDefaultPii: false` (no IP, no cookies)
 *   - All breadcrumb-producing integrations disabled
 *
 * GA4 privacy guarantees:
 *   - Only page views and feature-engagement events from the allowlist are sent
 *   - No user content, messages, credentials, or PII is ever included
 *   - Ad personalization signals are disabled
 *   - Skipped when `IS_DEV` is true or `GA_MEASUREMENT_ID` is not set
 */
import * as Sentry from '@sentry/react';
import ReactGA from 'react-ga4';

import { getCoreStateSnapshot } from '../lib/coreState/store';
import {
  APP_ENVIRONMENT,
  GA_MEASUREMENT_ID,
  IS_DEV,
  SENTRY_DSN,
  SENTRY_RELEASE,
  SENTRY_SMOKE_TEST,
} from '../utils/config';

// ---------------------------------------------------------------------------
// GA4 — module-level state
// ---------------------------------------------------------------------------

export const GA_ALLOWED_EVENTS = new Set([]);

export function isAnalyticsEnabled(): boolean {
  return false;
}

export function initSentry(): void {
  // Telemetry removed.
}

export function syncAnalyticsConsent(enabled: boolean): void {
  // Telemetry removed.
}

export function initGA(): void {
  // Telemetry removed.
}

export function trackPageView(path: string): void {
  // Telemetry removed.
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
): void {
  // Telemetry removed.
}

export async function triggerSentryTestEvent(): Promise<string | undefined> {
  return undefined;
}

