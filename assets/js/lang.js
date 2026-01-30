/**
 * Language Switcher Module
 * Handles language switching for UI elements
 * Supports multiple languages through _data/i18n/*.yml files
 */

(function () {
    'use strict';

    const LANG_STORAGE_KEY = 'kalampl_site_lang';
    const DEFAULT_LANG = 'th';

    // Get current language from localStorage or default
    function getCurrentLang() {
        return localStorage.getItem(LANG_STORAGE_KEY) || DEFAULT_LANG;
    }

    // Set language and update UI
    function setLang(lang) {
        localStorage.setItem(LANG_STORAGE_KEY, lang);
        document.documentElement.setAttribute('data-lang', lang);
        updateAllTranslations(lang);
        updateLangSwitcher(lang);
    }

    // Update all elements with data-i18n attribute
    function updateAllTranslations(lang) {
        const translations = window.siteTranslations?.[lang];
        if (!translations) return;

        // Handle data-i18n (text content)
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = getNestedValue(translations, key);
            if (translation) {
                el.textContent = translation;
            }
        });

        // Handle data-i18n-placeholder (input placeholders)
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const translation = getNestedValue(translations, key);
            if (translation) {
                el.placeholder = translation;
            }
        });

        // Handle data-i18n-title (title attributes)
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            const translation = getNestedValue(translations, key);
            if (translation) {
                el.title = translation;
            }
        });
    }

    // Get nested value from object using dot notation
    function getNestedValue(obj, path) {
        return path.split('.').reduce((o, k) => o?.[k], obj);
    }

    // Update language switcher UI
    function updateLangSwitcher(lang) {
        // Update active state on switcher buttons
        document.querySelectorAll('[data-lang-switch]').forEach(btn => {
            const btnLang = btn.getAttribute('data-lang-switch');
            btn.classList.toggle('lang-active', btnLang === lang);
        });

        // Update dropdown button text if exists
        const dropdownBtn = document.querySelector('.lang-dropdown-btn');
        if (dropdownBtn) {
            const langInfo = window.siteLangConfig?.find(l => l.code === lang);
            if (langInfo) {
                // Try to update specific elements first to preserve icon
                const flagEl = dropdownBtn.querySelector('.js-lang-flag');
                const nameEl = dropdownBtn.querySelector('.js-lang-name');

                if (flagEl && nameEl) {
                    flagEl.textContent = langInfo.flag;
                    nameEl.textContent = langInfo.name;
                } else {
                    // Fallback
                    dropdownBtn.innerHTML = `${langInfo.flag} <span class="hidden md:inline">${langInfo.name}</span>`;
                }
            }
        }
    }

    // Initialize language on page load
    function init() {
        const currentLang = getCurrentLang();
        document.documentElement.setAttribute('data-lang', currentLang);

        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                updateAllTranslations(currentLang);
                updateLangSwitcher(currentLang);
                setupEventListeners();
            });
        } else {
            updateAllTranslations(currentLang);
            updateLangSwitcher(currentLang);
            setupEventListeners();
        }
    }

    // Setup event listeners for language switching
    function setupEventListeners() {
        document.querySelectorAll('[data-lang-switch]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const newLang = btn.getAttribute('data-lang-switch');
                setLang(newLang);
            });
        });

        // Toggle dropdown if exists
        const dropdownToggle = document.querySelector('.lang-dropdown-toggle');
        const dropdownMenu = document.querySelector('.lang-dropdown-menu');

        if (dropdownToggle && dropdownMenu) {
            dropdownToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdownMenu.classList.toggle('hidden');
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', () => {
                dropdownMenu.classList.add('hidden');
            });
        }
    }

    // Expose API
    window.langSwitcher = {
        getCurrentLang,
        setLang,
        init
    };

    // Auto-initialize
    init();
})();
