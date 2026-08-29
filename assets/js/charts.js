// ============================================================
// THEME-AWARE CHART CONFIGURATION WRAPPER
// Presentation Framework — charts.js
// ============================================================

(function () {
    'use strict';

    window.chartInstances = {};

    window.getChartColors = function () {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        return {
            textColor: isDark ? '#f8f9ff' : '#1a1a24',
            textMuted: isDark ? '#a0a0b0' : '#555566',
            gridColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)',
            primary: isDark ? '#00d4ff' : '#0d5b5e',
            secondary: isDark ? '#ff6b35' : '#c2542c',
            gold: isDark ? '#ffd600' : '#d49b3f',
            bgGlass: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.7)'
        };
    };

    window.initCharts = function () {
        // Placeholder for chart canvas rendering if instantiated
    };

    window.addEventListener('themeChanged', () => {
        if (typeof window.initCharts === 'function') {
            window.initCharts();
        }
    });
})();
