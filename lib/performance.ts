// Performance monitoring utilities

// Declare gtag as a global function
declare global {
  function gtag(command: string, targetId: string, config?: Record<string, unknown>): void;
  function gtag(command: string, eventName: string, parameters?: Record<string, unknown>): void;
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Measure page load performance
  measurePageLoad(): void {
    if (typeof window === 'undefined') return;

    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        const metrics = {
          'dns-lookup': navigation.domainLookupEnd - navigation.domainLookupStart,
          'tcp-connection': navigation.connectEnd - navigation.connectStart,
          'tls-negotiation': navigation.secureConnectionStart > 0 ? navigation.connectEnd - navigation.secureConnectionStart : 0,
          'request-response': navigation.responseEnd - navigation.requestStart,
          'dom-processing': navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          'load-complete': navigation.loadEventEnd - navigation.loadEventStart,
          'total-time': navigation.loadEventEnd - navigation.fetchStart,
        };

        // Store metrics
        Object.entries(metrics).forEach(([key, value]) => {
          this.metrics.set(key, value);
        });

        // Send to analytics
        this.sendToAnalytics('page-load', metrics);
      }
    });
  }

  // Measure Core Web Vitals
  measureWebVitals(): void {
    if (typeof window === 'undefined') return;

    // Largest Contentful Paint (LCP)
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.set('lcp', lastEntry.startTime);
      this.sendToAnalytics('lcp', { value: lastEntry.startTime });
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const fidEntry = entry as PerformanceEntry & { processingStart?: number };
        const fidValue = fidEntry.processingStart ? fidEntry.processingStart - entry.startTime : 0;
        this.metrics.set('fid', fidValue);
        this.sendToAnalytics('fid', { value: fidValue });
      });
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value || 0;
        }
      });
      this.metrics.set('cls', clsValue);
      this.sendToAnalytics('cls', { value: clsValue });
    }).observe({ entryTypes: ['layout-shift'] });

    // First Contentful Paint (FCP)
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        this.metrics.set('fcp', entry.startTime);
        this.sendToAnalytics('fcp', { value: entry.startTime });
      });
    }).observe({ entryTypes: ['paint'] });
  }

  // Measure resource loading performance
  measureResourcePerformance(): void {
    if (typeof window === 'undefined') return;

    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const resource = entry as PerformanceResourceTiming;
        const loadTime = resource.responseEnd - resource.requestStart;
        
        // Categorize by resource type
        const resourceType = this.getResourceType(resource.name);
        this.metrics.set(`${resourceType}-load-time`, loadTime);
        
        // Send to analytics
        this.sendToAnalytics('resource-load', {
          type: resourceType,
          name: resource.name,
          loadTime: loadTime,
          size: resource.transferSize,
        });
      });
    }).observe({ entryTypes: ['resource'] });
  }

  // Get resource type from URL
  private getResourceType(url: string): string {
    if (url.includes('.js')) return 'javascript';
    if (url.includes('.css')) return 'css';
    if (url.match(/\.(jpg|jpeg|png|gif|webp|avif|svg)$/i)) return 'image';
    if (url.match(/\.(woff|woff2|ttf|eot)$/i)) return 'font';
    if (url.includes('/api/')) return 'api';
    return 'other';
  }

  // Send metrics to analytics
  private sendToAnalytics(event: string, data: Record<string, unknown>): void {
    // Send to Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', event, {
        custom_parameter: data,
        event_category: 'Performance',
      });
    }

    // Send to custom analytics endpoint
    if (typeof fetch !== 'undefined') {
      fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event,
          data,
          timestamp: Date.now(),
          url: window.location.href,
        }),
      }).catch((error) => {
        console.warn('Failed to send analytics:', error);
      });
    }
  }

  // Get all metrics
  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  // Clear metrics
  clearMetrics(): void {
    this.metrics.clear();
  }
}

// Initialize performance monitoring
export function initPerformanceMonitoring(): void {
  if (typeof window === 'undefined') return;

  const monitor = PerformanceMonitor.getInstance();
  monitor.measurePageLoad();
  monitor.measureWebVitals();
  monitor.measureResourcePerformance();
}

// Export singleton instance
export const performanceMonitor = PerformanceMonitor.getInstance();
