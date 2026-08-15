// ============================================================
// STATISTICAL DATA POPOVERS — Presentation Framework
// Hover-driven mathematical & contextual insight overlays
// ============================================================

(function () {
    'use strict';

    const popupData = {
        'households': {
            title: '1,00,000+ Rural Households Reached',
            formula: 'Total Direct Beneficiary Reach = Σ(Village Households × Engagement Index)',
            rawData: '12 Districts · 450+ Gram Panchayats · Direct grassroots engagement since 2011',
            whyMatters: 'Measures verifiable family livelihoods, water security, and healthcare coverage across Chhattisgarh.'
        },
        'districts': {
            title: '12 Active Operational Districts',
            formula: 'Coverage = Verified District Field Operations & Administrative Partnerships',
            rawData: 'Raipur, Dhamtari, Kanker, Bastar, Balod, Balodabazar, Kawardha, Bemetara, Rajnandgaon, Bilaspur, Gariaband, Mahasamund',
            whyMatters: 'Demonstrates multi-ecosystem presence spanning plains, river basins, and tribal forest zones.'
        },
        'years': {
            title: '15 Years of Verifiable Service',
            formula: 'Continuity Index = 2011 to 2026 Institutional Operations',
            rawData: '15 Annual Audits · 100% Compliance (12A, 80G, CSR-1, NGO Darpan)',
            whyMatters: 'Reflects institutional resilience, trust, and sustained long-term community stewardship.'
        },
        'bolti-nadi': {
            title: 'Bolti Nadi — 90 km Sakri River Revival',
            formula: 'River Perenniality = Continuous 12-Month Flow Verification Across 90 km Reach',
            rawData: 'Drought Duration: 30 Years (1989-2019) → Revival: Continuous Perennial Flow 2019-2023+',
            whyMatters: 'Proves decentralized, community-led water governance can permanently restore dry river basins.'
        },
        'women-shg': {
            title: '12,000+ Women Farmers & 860+ SHGs',
            formula: 'Empowerment Vector = Leadership Roles × Organic Crop Yield × Market Linkages',
            rawData: '860+ Self-Help Groups · Farmours Organic Value Chain · Direct income uplift of 38%',
            whyMatters: 'Empowers female agriculturalists as primary ecosystem stewards and independent producers.'
        },
        'aeiom': {
            title: 'The Five Pillars Framework (A-E-I-O-M)',
            formula: 'Institutional Trust Score = Accountability + Execution + Initiative + Outcome + Meaning',
            rawData: '5 Mathematical Verification Layers operationalized via the AEIOM Architecture',
            whyMatters: 'Ensures public trust through transparent, evidence-backed impact reporting.'
        }
    };

    function initPopupSystem() {
        let overlay = document.querySelector('.popup-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'popup-overlay';
            overlay.innerHTML = `
                <div class="popup-modal">
                    <button class="popup-close" aria-label="Close Popover">&times;</button>
                    <h3 class="popup-title"></h3>
                    <div class="popup-section">
                        <div class="popup-label"><i class="fas fa-square-root-alt"></i> Formula & Metric Definition</div>
                        <div class="popup-formula"></div>
                    </div>
                    <div class="popup-section">
                        <div class="popup-label"><i class="fas fa-database"></i> Ground Verification Data</div>
                        <div class="popup-raw"></div>
                    </div>
                    <div class="popup-section">
                        <div class="popup-label"><i class="fas fa-lightbulb"></i> Strategic Impact</div>
                        <div class="popup-why"></div>
                    </div>
                </div>
            `;
            document.body.appendChild(overlay);
        }

        const titleEl = overlay.querySelector('.popup-title');
        const formulaEl = overlay.querySelector('.popup-formula');
        const rawEl = overlay.querySelector('.popup-raw');
        const whyEl = overlay.querySelector('.popup-why');
        const closeBtn = overlay.querySelector('.popup-close');

        function showPopup(key) {
            const data = popupData[key];
            if (!data) return;

            titleEl.textContent = data.title;
            formulaEl.textContent = data.formula;
            rawEl.textContent = data.rawData;
            whyEl.textContent = data.whyMatters;

            overlay.classList.add('active');
        }

        function hidePopup() {
            overlay.classList.remove('active');
        }

        document.body.addEventListener('click', (e) => {
            const trigger = e.target.closest('[data-popup]');
            if (trigger) {
                e.preventDefault();
                const key = trigger.getAttribute('data-popup');
                showPopup(key);
            }
        });

        closeBtn.addEventListener('click', hidePopup);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) hidePopup();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && overlay.classList.contains('active')) hidePopup();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPopupSystem);
    } else {
        initPopupSystem();
    }
})();
