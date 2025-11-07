/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/js/App.ts":
/*!**************************!*\
  !*** ./assets/js/App.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Account */ "./assets/js/modules/Account.ts");
/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Header */ "./assets/js/modules/Header.ts");
/* harmony import */ var _modules_ImageFader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ImageFader */ "./assets/js/modules/ImageFader.ts");
/* harmony import */ var _modules_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Input */ "./assets/js/modules/Input.ts");
/* harmony import */ var _modules_InstantSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/InstantSearch */ "./assets/js/modules/InstantSearch.ts");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal */ "./assets/js/modal.ts");
/* harmony import */ var _modules_PropertyDetailHero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/PropertyDetailHero */ "./assets/js/modules/PropertyDetailHero.ts");
/* harmony import */ var _modules_PropertySearchMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/PropertySearchMap */ "./assets/js/modules/PropertySearchMap.ts");
/* harmony import */ var _modules_HuntingLeaseMap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/HuntingLeaseMap */ "./assets/js/modules/HuntingLeaseMap.ts");
/* harmony import */ var _modules_SwiperCarousels__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/SwiperCarousels */ "./assets/js/modules/SwiperCarousels.ts");
/* harmony import */ var _modules_SwitchTemplate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/SwitchTemplate */ "./assets/js/modules/SwitchTemplate.ts");
/* harmony import */ var _modules_Toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/Toggle */ "./assets/js/modules/Toggle.ts");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules */ "./assets/js/modules/index.ts");
/* harmony import */ var _utils_Account__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/Account */ "./assets/js/utils/Account.ts");
/* harmony import */ var _utils_LeafletAttribution__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/LeafletAttribution */ "./assets/js/utils/LeafletAttribution.ts");
/* harmony import */ var _utils_ClickDimensions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/ClickDimensions */ "./assets/js/utils/ClickDimensions.ts");
















const App = () => {
    (0,_modules_SwiperCarousels__WEBPACK_IMPORTED_MODULE_9__["default"])();
    (0,_modules_ImageFader__WEBPACK_IMPORTED_MODULE_2__.initImageFader)();
    (0,_modules_Account__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_Header__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules__WEBPACK_IMPORTED_MODULE_12__.initHeroSearch)();
    (0,_modules_InstantSearch__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_modal__WEBPACK_IMPORTED_MODULE_5__.initModals)();
    (0,_modules_PropertyDetailHero__WEBPACK_IMPORTED_MODULE_6__["default"])();
    (0,_modules_PropertySearchMap__WEBPACK_IMPORTED_MODULE_7__["default"])();
    (0,_modules_HuntingLeaseMap__WEBPACK_IMPORTED_MODULE_8__["default"])();
    (0,_modules_SwitchTemplate__WEBPACK_IMPORTED_MODULE_10__["default"])();
    (0,_modules_Toggle__WEBPACK_IMPORTED_MODULE_11__["default"])();
    (0,_modules_Input__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_modules__WEBPACK_IMPORTED_MODULE_12__.initVideoControllers)();
    (0,_modules__WEBPACK_IMPORTED_MODULE_12__.initShareCurrentUrl)();
    (0,_modal__WEBPACK_IMPORTED_MODULE_5__.initSprigModal)();
    (0,_modules__WEBPACK_IMPORTED_MODULE_12__.initCharts)();
    (0,_modules__WEBPACK_IMPORTED_MODULE_12__.initZipSearch)();
    (0,_utils_Account__WEBPACK_IMPORTED_MODULE_13__.initLoginStatusComponents)();
    (0,_utils_LeafletAttribution__WEBPACK_IMPORTED_MODULE_14__["default"])();
    (0,_utils_ClickDimensions__WEBPACK_IMPORTED_MODULE_15__["default"])();
};
document.addEventListener('DOMContentLoaded', () => {
    App();
});


/***/ }),

/***/ "./assets/js/modal.ts":
/*!****************************!*\
  !*** ./assets/js/modal.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   initModal: () => (/* binding */ initModal),
/* harmony export */   initModals: () => (/* binding */ initModals),
/* harmony export */   initSprigModal: () => (/* binding */ initSprigModal)
/* harmony export */ });
const initModal = (modal) => {
    if (!modal) {
        return;
    }
    const body = document.querySelector('body');
    const closeBtn = modal.querySelector('.b-closeBtn');
    const cancelBtn = modal.querySelector('.b-cancelBtn');
    const shadowBox = modal.querySelector('.c-layer--shadowbox');
    const showBtns = document.querySelectorAll('[data-target-modal]');
    const closeModal = () => {
        modal.classList.remove('b-modal--open');
        body.style.overflow = 'auto';
    };
    closeBtn.addEventListener('click', closeModal);
    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeModal);
    }
    if (shadowBox) {
        shadowBox.addEventListener('click', closeModal);
    }
    if (showBtns && showBtns.length > 0) {
        showBtns.forEach((button) => {
            button.addEventListener('click', (e) => {
                console.log('show modal button clicked', e);
                const btn = e.currentTarget;
                console.log('target modal', btn.dataset.targetModal);
                // This should probably swap out content on a singular modal
                const targetModal = document.querySelector(`[data-modal-name='${btn.dataset.targetModal}']`);
                targetModal.classList.add('b-modal--open');
                body.style.overflow = 'hidden';
            });
        });
    }
};
const initModals = () => {
    const modals = document.querySelectorAll('.b-modal');
    if (modals) {
        modals.forEach((modal) => {
            initModal(modal);
        });
    }
};
const initSprigModal = () => {
    const sprigModals = document.querySelectorAll('.b-sprigModalObserver');
    if (sprigModals) {
        const callBack = (sprigModalObserver) => {
            const modal = sprigModalObserver.querySelector('.b-modal');
            initModal(modal);
        };
        sprigModals.forEach((sprigModalObserver) => {
            const config = { childList: true, subtree: true };
            const observer = new MutationObserver(() => callBack(sprigModalObserver));
            observer.observe(sprigModalObserver, config);
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initModals);


/***/ }),

/***/ "./assets/js/modules/Account.ts":
/*!**************************************!*\
  !*** ./assets/js/modules/Account.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ init)
/* harmony export */ });
// Degrees / Education
const addDegree = document.getElementById('addDegree');
const degreeContainer = document.getElementById('degreeContainer');
// Broker In Charge
const licenseContainer = document.getElementById('licenseContainer');
// Generate ID for custom fields
function generateID() {
    return (Math.random() + 1).toString(36).substring(7);
}
// Remove Row
function initRemoveButtons(selector, parentContainer) {
    const removeButtons = document.querySelectorAll(selector);
    removeButtons.forEach((removeBtn) => {
        removeBtn.addEventListener('click', () => {
            const container = document.getElementById(removeBtn.getAttribute('data-id'));
            parentContainer.removeChild(container);
        });
    });
}
function init() {
    // Initialize all remove buttons
    initRemoveButtons('.b-profileMain__buttonContainer', degreeContainer);
    initRemoveButtons('.b-profileMain__buttonContainer', licenseContainer);
    // Degree Logic
    if (addDegree) {
        addDegree.addEventListener('click', () => {
            // Generate ID
            const id = generateID();
            // Degrees / Education
            const inputContainer = document.createElement('div');
            inputContainer.id = `inputContainer_${id}`;
            inputContainer.className = 'u-gap-top-400';
            inputContainer.innerHTML = `<fieldset class="c-flow c-withLayer">
        <label class="b-form__inputLabel" for="degree_${id}">Degree</label>
        <div class="b-input b-inputText c-withLayer">
          <input type="text" id="degree_${id}" class="b-form__inputText c-box | b-form__inputText c-box" name="degree[${id}][name]" placeholder="Degree Title">
          <div class="c-layer c-cluster c-box | u-flex-justify-end">
            <svg class="b-icon b-input__complete u-t-color-state-good"><use href="/svg/sprite.svg#checkmark"></use></svg>
            <svg class="b-icon b-input__incomplete u-t-color-state-bad"><use href="/svg/sprite.svg#x"></use></svg>
            <button class="b-input__control" type="button"><svg class="b-icon b-resetInput u-t-color-grayscale-primary-900"><use href="/svg/sprite.svg#circle-x"></use></svg></button>
          </div>
        </div>
        <p class="b-inputHint u-text-00"></p></fieldset>
        <div class="c-cluster | u-gap-top-400"><fieldset class="c-flow c-withLayer">
          <label class="b-form__inputLabel" for="degreeYear_${id}">Degree Year</label>
        <div class="b-input b-inputText c-withLayer">
          <input type="text" id="degreeYear_${id}" class="b-form__inputText c-box | b-form__inputText c-box" name="degree[${id}][year]" placeholder="Degree Year">
          <div class="c-layer c-cluster c-box | u-flex-justify-end">
            <svg class="b-icon b-input__complete u-t-color-state-good"><use href="/svg/sprite.svg#checkmark"></use></svg>
            <svg class="b-icon b-input__incomplete u-t-color-state-bad"><use href="/svg/sprite.svg#x"></use></svg>
            <button class="b-input__control" type="button"><svg class="b-icon b-resetInput u-t-color-grayscale-primary-900"><use href="/svg/sprite.svg#circle-x"></use></svg></button>
          </div>
        </div>
        <p class="b-inputHint u-text-00"></p></fieldset>
        <div class="b-profileMain__buttonContainer u-box-flex u-flex-dir-row u-flex-self-end"><button class="remove-degree | u-gap-right-200" type="button" data-id="inputContainer_${id}">
          <svg class="b-icon "><use href="/svg/sprite.svg#trash"></use></svg></button><span class="u-tt-upper u-weight-bold">Delete</span></div></div>
        </div>`;
            degreeContainer.appendChild(inputContainer);
            initRemoveButtons('.b-profileMain__buttonContainer', degreeContainer);
        });
    }
    // Credentials Logic
    const credentialsBoxes = document.querySelectorAll('.b-profileMain__checkbox');
    credentialsBoxes.forEach((box) => {
        box.addEventListener('click', () => {
            const credentialContainer = box.parentNode.parentNode;
            if (box.checked) {
                credentialContainer.classList.remove('b-button--tertiary');
                credentialContainer.classList.add('b-button--primary');
            }
            else {
                credentialContainer.classList.remove('b-button--primary');
                credentialContainer.classList.add('b-button--tertiary');
            }
        });
    });
}


/***/ }),

/***/ "./assets/js/modules/Charts.ts":
/*!*************************************!*\
  !*** ./assets/js/modules/Charts.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   initCharts: () => (/* binding */ initCharts)
/* harmony export */ });
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js/auto */ "./node_modules/chart.js/auto/auto.js");

// Ready data comming from commodities to be used in chart.js
const initCharts = () => {
    const rows = document.querySelectorAll('.b-stockListing__row');
    rows.forEach((row, index) => {
        const chartElement = document.getElementById(`stockChart-${index}`);
        const stockData = {
            labels: JSON.parse(chartElement.dataset.labels),
            datasets: [
                {
                    data: JSON.parse(chartElement.dataset.prices), // Sample stock prices
                    borderColor: chartElement.dataset.color,
                    borderWidth: 1,
                    pointRadius: 0,
                    fill: false
                }
            ]
        };
        // Create a new Chart instance
        const ctx = chartElement.getContext('2d');
        new chart_js_auto__WEBPACK_IMPORTED_MODULE_0__["default"](ctx, {
            type: 'line',
            data: stockData,
            options: {
                scales: {
                    x: {
                        display: false // Hide x-axis labels
                    },
                    y: {
                        beginAtZero: false,
                        display: false
                    }
                },
                plugins: {
                    legend: {
                        display: false // Hide legend
                    }
                }
            }
        });
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCharts);


/***/ }),

/***/ "./assets/js/modules/FavoriteProperties.ts":
/*!*************************************************!*\
  !*** ./assets/js/modules/FavoriteProperties.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   initFavoriteProperties: () => (/* binding */ initFavoriteProperties),
/* harmony export */   isPropertyAFavorite: () => (/* binding */ isPropertyAFavorite),
/* harmony export */   openModal: () => (/* binding */ openModal),
/* harmony export */   savedPropertyAsFavorite: () => (/* binding */ savedPropertyAsFavorite)
/* harmony export */ });
/* harmony import */ var _utils_LoginStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/LoginStatus */ "./assets/js/utils/LoginStatus.ts");
/* harmony import */ var _utils_QueryParents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/QueryParents */ "./assets/js/utils/QueryParents.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


// TO DO add interface for repsonse on favorites
// Also the toggle and get functions are very similar and could probably
// be consolidate using arguments, or an argument not sure what the name would be
function toggleFavoriteProperty(propertyId) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = document.querySelector('[name="CRAFT_CSRF_TOKEN"]');
        const params = {
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                propertyId,
                CRAFT_CSRF_TOKEN: token.value
            }),
            method: 'POST'
        };
        const favoritePropertyResponse = yield fetch('/api/v1/properties/favorite', params)
            .then((res) => res.json())
            .then((data) => {
            if (data.savedProperty) {
                return true;
            }
            return false;
        })
            .catch((err) => {
            if (window.location.href.includes('dev')) {
                // eslint-disable-next-line no-console
                console.log(err);
            }
            return false;
        });
        return favoritePropertyResponse;
    });
}
function isPropertyAFavorite(propertyId) {
    return __awaiter(this, void 0, void 0, function* () {
        const userIsLoggedIn = (0,_utils_LoginStatus__WEBPACK_IMPORTED_MODULE_0__.getLoginStatus)();
        if (!userIsLoggedIn)
            return false;
        const token = document.querySelector('[name="CRAFT_CSRF_TOKEN"]');
        const params = {
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                propertyId,
                CRAFT_CSRF_TOKEN: token.value
            }),
            method: 'POST'
        };
        const favoritePropertyResponse = yield fetch('/api/v1/properties/is-favorite', params)
            .then((res) => res.json())
            .then((data) => {
            if (data.favorite) {
                return true;
            }
            return false;
        })
            .catch((err) => {
            if (window.location.href.includes('dev')) {
                // eslint-disable-next-line no-console
                console.log(err);
            }
            return false;
        });
        return favoritePropertyResponse;
    });
}
const openModal = () => {
    const modal = document.querySelector('.b-modal');
    if (modal) {
        modal.classList.add('b-modal--open');
    }
};
const savedPropertyAsFavorite = (e) => {
    const targetEl = e.target;
    const button = (0,_utils_QueryParents__WEBPACK_IMPORTED_MODULE_1__.queryParents)(targetEl, 'b-favoritePropertyToggle');
    const { propertyId } = button.dataset;
    const saveListingText = targetEl.querySelector('span');
    const requestResponse = toggleFavoriteProperty(propertyId);
    if (requestResponse) {
        // Listings
        if (button.classList.contains('b-star')) {
            const activeClass = 'b-favoritePropertyToggle--active';
            if (button.classList.contains(activeClass)) {
                button.classList.remove(activeClass);
            }
            else {
                button.classList.add(activeClass);
            }
        }
        // Save on detail pages
        if (saveListingText) {
            if (saveListingText.textContent === 'Save Property') {
                saveListingText.textContent = 'Remove from listing';
            }
            else {
                saveListingText.textContent = 'Save Property';
            }
        }
        // Remove on account favorites
        if (button.classList.contains('b-fav-delete')) {
            const listing = (0,_utils_QueryParents__WEBPACK_IMPORTED_MODULE_1__.queryParents)(button, 'b-profileMain__card');
            listing.remove();
        }
    }
};
// Attach this immediatly not waiting for the promise response
const favoriteButtonPreventPageChanges = (buttons) => {
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
        });
    });
};
// These can be removed and consolidated into the init
const initAnonymousUser = (buttons) => {
    buttons.forEach((button) => {
        button.addEventListener('click', openModal);
    });
};
const initRecognizedUser = (buttons) => {
    buttons.forEach((button) => {
        button.addEventListener('click', savedPropertyAsFavorite);
    });
};
function initFavoriteProperties(targetData = '[data-favorite-property-toggle]') {
    const favoriteButtons = document.querySelectorAll(targetData);
    // Check if buttons exist before checking login status
    if (favoriteButtons) {
        favoriteButtonPreventPageChanges(favoriteButtons);
        // Get the login status once, then depending on the login status
        // attach a different event listner to each button with target data.
        // With this method we no longer need to check for different button types
        // There are instances where data-property-id may exist but shouldn't be a favorite button. So instead we can target a different data attr that exists solely as a check of whether the button should function
        // An example I believe is on AFM account page. Where there's an element that does have the data-property-id, but doesn't need to have an on click
        const userIsLoggedIn = (0,_utils_LoginStatus__WEBPACK_IMPORTED_MODULE_0__.getLoginStatus)();
        const initButtonsFunction = userIsLoggedIn
            ? initRecognizedUser
            : initAnonymousUser;
        initButtonsFunction(favoriteButtons);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initFavoriteProperties);


/***/ }),

/***/ "./assets/js/modules/Header.ts":
/*!*************************************!*\
  !*** ./assets/js/modules/Header.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initHeader)
/* harmony export */ });
/**
 * Imports
 */
// import { debounce, throttle } from 'lodash';
/**
 * For some reason lodash is causing problems and not giving a single error to understand why/how.
 */
const debounce = (callback, time = 250) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(undefined, args);
        }, time);
    };
};
/**
 * Header Class
 */
class Header {
    constructor(headerEl) {
        this.header = null;
        this.logo = null;
        this.headerBreakpoint = 1280; // 1280 = gorko "lg" breakpoint (80em)
        this.body = document.body;
        this.header = headerEl;
        this.logo = this.header.querySelector('[data-header-logo]');
        this.mobileTrigger = this.header.querySelector('[data-mobile-trigger]');
        this.navLinks = Array.from(this.header.querySelectorAll('[data-header-link]'));
        this.navLinksInSubnav = Array.from(this.header.querySelectorAll('[data-header-link="subnav"]'));
        this.navLinksWithChildren = this.navLinks.filter((link) => link.getAttribute('data-has-children') === 'true');
        this.accountLinks = this.navLinks.filter((link) => link.hasAttribute('data-account-link'));
    }
    /**
     * Handle the mobile trigger (hamburger) being clicked to open/close nav
     *
     * @return    {undefined}          returns nothing, undefined
     */
    handleMobileTriggerClick() {
        this.body.classList.toggle('b-body--locked');
        this.header.classList.toggle('b-header--mobileNavActive');
        this.handleResponsiveTabIndexing();
    }
    /**
     * Handle a click on a nav item with children.
     * If desktop: ignore.
     * If mobile: preventDefault, open subnav and adjust tabIndexing
     *
     * @return    {undefined}          returns nothing, undefined
     */
    handleLinkWithChildrenClick(e) {
        const isMobileMenu = window.innerWidth < this.headerBreakpoint;
        const targetLinkParent = e.target.parentNode;
        const childLinks = targetLinkParent.querySelectorAll('[data-header-link="subnav"]');
        if (isMobileMenu) {
            e.preventDefault();
            targetLinkParent.classList.toggle('active');
            if (targetLinkParent.classList.contains('active')) {
                childLinks.forEach((link) => {
                    link.tabIndex = '0'; // eslint-disable-line no-param-reassign
                });
            }
            else {
                childLinks.forEach((link) => {
                    link.tabIndex = '-1'; // eslint-disable-line no-param-reassign
                });
            }
        }
        else {
            return undefined;
        }
        return undefined;
    }
    /**
     * Handles Responsive TabIndexing by disabling the links when mobile and not active
     *
     * @return    {undefined}                    returns nothing, undefined
     */
    handleResponsiveTabIndexing() {
        const isMobileMenu = window.innerWidth < this.headerBreakpoint;
        const isMobileMenuActive = this.header.classList.contains('b-header--mobileNavActive');
        if (isMobileMenu && !isMobileMenuActive) {
            this.navLinks.forEach((link) => {
                link.tabIndex = -1; // eslint-disable-line no-param-reassign
            });
            return undefined;
        }
        this.navLinks.forEach((link) => {
            // Don't adjust subnav links on mobile, we handle those a little differently
            if (!this.navLinksInSubnav.includes(link) || !isMobileMenu) {
                link.tabIndex = 0; // eslint-disable-line no-param-reassign
            }
        });
        return undefined;
    }
    /**
     * Resets things such as active states whenever a user changes from small to large viewport or vice-versa
     *
     * @return    {undefined}          returns nothing, undefined
     */
    handleResponsiveUX() {
        const isDesktopHeader = window.innerWidth > this.headerBreakpoint;
        if (isDesktopHeader) {
            this.body.classList.remove('b-body--locked');
            this.header.classList.remove('b-header--mobileNavActive');
            this.navLinks.forEach((link) => {
                const linkParent = link.parentElement;
                if (linkParent.classList.contains('active')) {
                    linkParent.classList.remove('active');
                }
            });
        }
        return undefined;
    }
    /**
     * Handles the sticky header when scrolling
     * If desktop: add/remove class to body
     * If mobile: do nothing
     *
     * @return    {undefined}          returns nothing, undefined
     */
    handleStickyHeader() {
        const isMobile = window.innerWidth < this.headerBreakpoint;
        const header = document.querySelector('.b-header');
        const headerHeight = header.offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
        if (isMobile) {
            return undefined;
        }
        function updateBodyClass() {
            if (window.scrollY > headerHeight + 10) {
                document.body.classList.add("desktopStickyActive");
            }
            else {
                document.body.classList.remove("desktopStickyActive");
            }
        }
        // Run on initial page load
        updateBodyClass();
        // Run on scroll
        document.addEventListener("scroll", updateBodyClass);
    }
    /**
     * Method for attaching our event listeners
     */
    attachListeners() {
        // Basic hamburger menu click
        this.mobileTrigger.addEventListener('click', () => this.handleMobileTriggerClick());
        // Handle links with subnavs
        this.navLinksWithChildren.forEach((link) => {
            link.addEventListener('click', (e) => this.handleLinkWithChildrenClick(e));
        });
        // Window Events
        window.addEventListener('resize', debounce(() => this.handleResponsiveTabIndexing()));
        window.addEventListener('resize', debounce(() => this.handleResponsiveUX()));
        this.handleStickyHeader();
    }
    init() {
        // Remove NoJS Data Attr to signal that JS is enabled
        this.header.removeAttribute('data-js-disabled');
        // Attach listeners and any other methods that need to run on init
        this.attachListeners();
        this.handleResponsiveTabIndexing();
    }
}
/**
 * Initialization
 *
 * @return    {undefined}          [returns nothing, initializes header]
 */
function initHeader() {
    let header = document.getElementById('header');
    if (!header) {
        return null;
    }
    header = new Header(header);
    header.init();
    return header;
}


/***/ }),

/***/ "./assets/js/modules/HuntingLeaseMap.ts":
/*!**********************************************!*\
  !*** ./assets/js/modules/HuntingLeaseMap.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initModule)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LeafletMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeafletMap */ "./assets/js/modules/LeafletMap.ts");
/**
 * Imports
 */


/**
 * HuntingLeaseMap Class
 */
class HuntingLeaseMap extends _LeafletMap__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(parentEl) {
        super();
        /**
         * Module's top-level element (section)
         */
        this.parentEl = null;
        this.meiliIndex = 'huntingLeaseNetwork_auctions';
        this.globalFilters = ["propertyStatus != 'leased'"];
        this.parentEl = parentEl;
        this.loadingContainer = this.parentEl;
        this.defaultZip = this.parentEl.getAttribute('data-default-zip');
        this.mapContainer = this.parentEl.querySelector('[data-hunting-lease-map]');
        this.relativeLocationTextEl = this.parentEl.querySelector('[data-relative-location]');
        this.resultsLengthTextEl = this.parentEl.querySelector('[data-results-count]');
        this.searchInput = this.parentEl.querySelector('[data-query-input]');
    }
    /**
     * Anything that needs to happen on the initial request
     */
    handleInitialRequest() {
        // We try to query via geolocation first, this method handles fallbacks
        this.searchViaGeolocation().then(() => {
            const markerBoundsGroup = this.Leaf.featureGroup(this.markers);
            const markerBounds = markerBoundsGroup.getBounds();
            this.map.setView(markerBounds.getCenter(), 5);
        });
    }
    /**
     * Method for attaching our event listeners
     */
    attachListeners() {
        this.searchInput.addEventListener('keyup', (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)((e) => {
            const { target } = e;
            const { value } = target;
            // check if value is a zip code
            this.handleSearchInputChange(value);
        }, 1000));
        this.searchInput.addEventListener('change', (e) => {
            const { target } = e;
            const { value } = target;
            // check if value is a zip code
            this.handleSearchInputChange(value);
        });
    }
    init() {
        // Initialization and listeners
        this.loadMap();
        this.attachListeners();
        this.handleInitialRequest();
    }
}
/**
 * Initialization
 *
 * @return    {undefined}          returns nothing, initializes Class
 */
function initModule() {
    const huntingLeaseModules = Array.from(document.querySelectorAll('[data-hunting-lease-map-module]'));
    huntingLeaseModules.forEach((module) => {
        const huntingLeaseModule = new HuntingLeaseMap(module);
        huntingLeaseModule.init();
    });
}


/***/ }),

/***/ "./assets/js/modules/ImageFader.ts":
/*!*****************************************!*\
  !*** ./assets/js/modules/ImageFader.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   imageFaderTemplate: () => (/* binding */ imageFaderTemplate),
/* harmony export */   initImageFader: () => (/* binding */ initImageFader),
/* harmony export */   initImageFaderMutationObserver: () => (/* binding */ initImageFaderMutationObserver),
/* harmony export */   unmountImageFaders: () => (/* binding */ unmountImageFaders)
/* harmony export */ });
const moveFirstElToLast = (e) => {
    const target = e.target;
    target.parentNode.appendChild(target.previousElementSibling);
};
const imageFaderTemplate = (images) => {
    const imageSlideTemplate = (isLayer, image) => {
        const layerClass = isLayer ? ' c-layer' : '';
        return /* html */ `
        <li class='b-imageFader__imageSlide | c-frame${layerClass}'>
          <img src='${image}' />
        </li>
      `;
    };
    const previewImages = images.slice(0, 4);
    return /* html */ `
  <ul class='b-imageFader' data-image-fader>
    ${previewImages
        .map((image, index) => {
        const isLayer = index !== 0;
        return imageSlideTemplate(isLayer, image);
    })
        .join('')}
  </ul>`;
};
function initImageFader() {
    const imageFaders = document.querySelectorAll('[data-image-fader]');
    if (!imageFaders.length)
        return;
    imageFaders.forEach((faderEl) => {
        faderEl.querySelectorAll('.b-imageFader > li').forEach((slide) => {
            slide.addEventListener('animationend', moveFirstElToLast);
        });
    });
}
const unmountImageFaders = () => {
    const imageFaders = document.querySelectorAll('[data-image-fader]');
    if (!imageFaders.length)
        return;
    imageFaders.forEach((faderEl) => {
        faderEl
            .querySelectorAll('.b-imageFader > li')
            .forEach((slide) => slide.removeEventListener('animationend', moveFirstElToLast));
    });
};
const initImageFaderMutationObserver = (targetEl) => {
    const callback = (mutationList) => {
        mutationList.forEach((mutation) => {
            const { target } = mutation;
            const el = target;
            const isFaderChange = el.classList.contains('b-imageFader');
            // We don't want to fire the unmount and mount if the image fader
            // is animating due to hover. So we look for anything else changing
            // Which indicates that pagination was used requiring a reload.
            if (!isFaderChange) {
                unmountImageFaders();
                initImageFader();
            }
        });
    };
    const targetNode = document.querySelector(targetEl);
    if (targetNode) {
        const config = { childList: true, subtree: true };
        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
    }
    // return observer;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initImageFader);


/***/ }),

/***/ "./assets/js/modules/Input.ts":
/*!************************************!*\
  !*** ./assets/js/modules/Input.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toggleResetBtn: () => (/* binding */ toggleResetBtn)
/* harmony export */ });
const toggleResetBtn = (btn, hide) => {
    if (hide) {
        btn.style.removeProperty('display');
        return;
    }
    btn.style.display = 'flex';
};
const initInputs = () => {
    const textInputs = document.querySelectorAll('.b-inputText');
    if (textInputs) {
        const testValue = (value, regExStr) => {
            const regEx = new RegExp(regExStr);
            return regEx.test(value);
        };
        const hideIncomplete = (incompleteIcon) => {
            incompleteIcon.style.removeProperty('display');
        };
        const showComplete = (completeIcon, incompleteIcon) => {
            hideIncomplete(incompleteIcon);
            completeIcon.style.display = 'block';
        };
        const showIncomplete = (completeIcon, incompleteIcon) => {
            completeIcon.style.removeProperty('display');
            incompleteIcon.style.display = 'block';
        };
        textInputs.forEach((inputUi) => {
            const input = inputUi.querySelector('input');
            const resetBtn = inputUi.querySelector('.b-input__control');
            const togglePasswordVisibilityBtn = inputUi.querySelector('.b-input__password');
            const incompleteIcon = inputUi.querySelector('.b-input__incomplete');
            const completeIcon = inputUi.querySelector('.b-input__complete');
            input.addEventListener('change', () => {
                const { value, pattern } = input;
                if (value === '') {
                    toggleResetBtn(resetBtn, true);
                    showIncomplete(completeIcon, incompleteIcon);
                }
                else {
                    const isValid = testValue(value, pattern);
                    toggleResetBtn(resetBtn, false);
                    if (isValid) {
                        if (pattern !== '') {
                            showComplete(completeIcon, incompleteIcon);
                            return;
                        }
                        hideIncomplete(incompleteIcon);
                        return;
                    }
                    incompleteIcon.style.display = 'block';
                }
            });
            input.addEventListener('beforeinput', (e) => {
                if (e.data !== null) {
                    toggleResetBtn(resetBtn, false);
                }
                else {
                    toggleResetBtn(resetBtn, true);
                }
                incompleteIcon.style.removeProperty('display');
                completeIcon.style.removeProperty('display');
            });
            resetBtn.addEventListener('click', () => {
                input.value = '';
                resetBtn.style.removeProperty('display');
                showIncomplete(completeIcon, incompleteIcon);
            });
            // #region - Password input
            if (togglePasswordVisibilityBtn) {
                togglePasswordVisibilityBtn.addEventListener('click', () => {
                    // input.type = input.type === 'password' ? 'text' : 'password';
                    const showPasswordIcon = inputUi.querySelector('.b-input__showPassword');
                    const hidePasswordIcon = inputUi.querySelector('.b-input__hidePassword');
                    if (input.type === 'password') {
                        input.type = 'text';
                        hidePasswordIcon.style.display = 'block';
                        showPasswordIcon.style.display = 'none';
                        return;
                    }
                    input.type = 'password';
                    hidePasswordIcon.style.removeProperty('display');
                    showPasswordIcon.style.removeProperty('display');
                });
            }
            // #endregion - Password input
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initInputs);


/***/ }),

/***/ "./assets/js/modules/InstantSearch.ts":
/*!********************************************!*\
  !*** ./assets/js/modules/InstantSearch.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _meilisearch_instant_meilisearch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @meilisearch/instant-meilisearch */ "./node_modules/@meilisearch/instant-meilisearch/dist/instant-meilisearch.umd.js");
/* harmony import */ var _meilisearch_instant_meilisearch__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_meilisearch_instant_meilisearch__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var instantsearch_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! instantsearch.js */ "./node_modules/instantsearch.js/es/index.js");
/* harmony import */ var instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! instantsearch.js/es/widgets */ "./node_modules/instantsearch.js/es/widgets/clear-refinements/clear-refinements.js");
/* harmony import */ var instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! instantsearch.js/es/widgets */ "./node_modules/instantsearch.js/es/widgets/refinement-list/refinement-list.js");
/* harmony import */ var instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! instantsearch.js/es/widgets */ "./node_modules/instantsearch.js/es/widgets/menu/menu.js");
/* harmony import */ var instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! instantsearch.js/es/widgets */ "./node_modules/instantsearch.js/es/widgets/range-slider/range-slider.js");
/* harmony import */ var instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! instantsearch.js/es/widgets */ "./node_modules/instantsearch.js/es/widgets/range-input/range-input.js");
/* harmony import */ var instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! instantsearch.js/es/widgets */ "./node_modules/instantsearch.js/es/widgets/configure/configure.js");
/* harmony import */ var instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! instantsearch.js/es/widgets */ "./node_modules/instantsearch.js/es/widgets/stats/stats.js");
/* harmony import */ var instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! instantsearch.js/es/widgets */ "./node_modules/instantsearch.js/es/widgets/hits-per-page/hits-per-page.js");
/* harmony import */ var instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! instantsearch.js/es/widgets */ "./node_modules/instantsearch.js/es/widgets/search-box/search-box.js");
/* harmony import */ var instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! instantsearch.js/es/widgets */ "./node_modules/instantsearch.js/es/widgets/current-refinements/current-refinements.js");
/* harmony import */ var instantsearch_js_es_connectors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! instantsearch.js/es/connectors */ "./node_modules/instantsearch.js/es/connectors/infinite-hits/connectInfiniteHits.js");
/* harmony import */ var instantsearch_js_es_connectors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! instantsearch.js/es/connectors */ "./node_modules/instantsearch.js/es/connectors/hits/connectHits.js");
/* harmony import */ var _utils_Index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Index */ "./assets/js/utils/Index.ts");
/* harmony import */ var _listingSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listingSearch */ "./assets/js/modules/listingSearch/index.ts");
/* harmony import */ var _SearchBarDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBarDropdown */ "./assets/js/modules/SearchBarDropdown.ts");
/* harmony import */ var _listingSearch_ListingTypeRefinementList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listingSearch/ListingTypeRefinementList */ "./assets/js/modules/listingSearch/ListingTypeRefinementList.ts");
/* harmony import */ var _utils_TableCollapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/TableCollapse */ "./assets/js/utils/TableCollapse.ts");
/*
    Meilisearch Parameters
    https://docs.meilisearch.com/reference/api/search.html#body

    Instant Meili Search documentation
    https://www.npmjs.com/package/@meilisearch/instant-meilisearch

    Instantsearch Docs
    https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js/

    // Example on triggering search and how to access the aloglia search helper
    https://discourse.algolia.com/t/how-to-trigger-instantsearch-query-by-setting-input-value-dynamically/9017/3
    https://codesandbox.io/s/instantsearchjs-app-9re0o?file=/src/app.js:1036-1046

    Accessing State to update
    https://www.algolia.com/doc/guides/building-search-ui/going-further/access-state-outside-lifecycle/js/

    Updating parameters without using config
    https://community.algolia.com/algoliasearch-helper-js/reference.html#query-parameters

    TO DO:
    - Search Bar
      - Limit options
*/
// #region - Imports






// import { arrowLeftIcon, arrowRightIcon } from './templates';



// #endregion - Types
// variables
const isTable = !!document.querySelector('[data-instantsearchtable-rules]');
// Fetch unique features before initializing the search
let uniqueFeatures = [];
(0,_listingSearch__WEBPACK_IMPORTED_MODULE_1__.getUniquePropertyFeatures)().then((features) => {
    uniqueFeatures = features;
});
// #region - Widget functions
const resetButton = (container, facets) => {
    const containerName = Array.from(container)[0] === '#'
        ? `${container}_resetBtn`
        : `#${container}_resetBtn`;
    return (0,instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_5__["default"])({
        container: containerName,
        includedAttributes: [...facets],
        templates: {
            resetLabel: 'Reset'
        },
        cssClasses: {
            button: [
                'b-btn',
                ' b-btn--ghost u-tt-upper u-t-color-core-primary-500',
                ' c-box'
            ]
        }
    });
};
// TO DO: Update type for settings for correct type matching, should be able to import from instant search
const styledRefinementList = (container, item, settings) => {
    const containerEl = document.querySelector(container);
    let widgets = [];
    if (containerEl) {
        widgets = [
            (0,instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_6__["default"])(Object.assign({ container: containerEl, attribute: item.facet, limit: 99 }, settings))
        ];
        if (item.display === 'default' && item.type === 'multipleSelect') {
            const resetBtn = resetButton(container, [item.facet]);
            widgets.push(resetBtn);
        }
    }
    return widgets;
};
// This function could be improved by switch over the switch statement to look for an input or dropdown type.
const getFacetUIByType = (item, categoryTitle) => {
    const container = `#${item.facet}`;
    switch (item.facet) {
        case 'propertyStatus': {
            return (0,instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_7__["default"])({
                container,
                attribute: item.facet,
                cssClasses: {
                    label: 'u-text-0'
                },
                templates: {
                    item(data) {
                        const { label, url, cssClasses } = data;
                        const exception = label.replace(/\s/g, '').toLowerCase();
                        return /* html */ `
                <a class="${cssClasses.link}" href="${url}">
                  <span
                    class="b-propertyStatus b-propertyStatus--${exception} ${cssClasses.label} "
                    >${label}</span
                  >
                </a>
              `;
                    }
                }
            });
        }
        case 'listingPrice':
        case 'price':
        case 'totalAcres': {
            const rangeSliderUI = (0,instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_8__["default"])({
                container: `${container}_${item.inputTypes[0]}`,
                attribute: item.facet,
                pips: false,
                min: item.min
                // max: item.facet === 'totalAcres' ? 10000 : item.max
            });
            const rangeInputUI = (0,instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_9__["default"])({
                container: `${container}_${item.inputTypes[1]}`,
                attribute: item.facet,
                min: item.min,
                max: item.max,
                cssClasses: {
                    form: 'c-cluster',
                    input: 'c-box',
                    submit: 'c-box'
                }
            });
            // Setup button
            const resetRange = resetButton(container, [item.facet]);
            // ~Hacky way to reset the button on initial load for Properties|Auctions listings page
            setTimeout(() => {
                const rangeResetBtn = document.querySelector(`${container}_resetBtn button`);
                if (rangeResetBtn) {
                    rangeResetBtn.click();
                }
            }, 1000);
            // Return widgets
            return [rangeSliderUI, rangeInputUI, resetRange];
        }
        case 'listingTypes': {
            return (0,_listingSearch_ListingTypeRefinementList__WEBPACK_IMPORTED_MODULE_3__["default"])({
                // @ts-ignore
                container: document.querySelector(container),
                attribute: 'listingTypes'
            });
        }
        case 'landTypes':
        case 'propertyTypes': {
            const settings = {
                cssClasses: {
                    list: 'c-autoGrid',
                    item: 'u-pad-200 u-box-flex u-flex-align-center | u-t-bg-neutrals-tertiary-400'
                },
                operator: 'or',
                transformItems(items) {
                    const filteredItems = items.filter((facetItem) => categoryTitle !== facetItem.value);
                    return filteredItems;
                }
            };
            return styledRefinementList(container, item, settings);
        }
        case 'propertyFeatures': {
            const settings = {
                cssClasses: {
                    list: 'c-autoGrid',
                    item: 'u-pad-200 u-box-flex u-flex-align-center | u-t-bg-neutrals-tertiary-400'
                },
                operator: 'and',
                transformItems(items) {
                    // Synchronously filter items based on pre-fetched unique features
                    return items.filter((item) => uniqueFeatures.includes(item.label));
                }
            };
            return styledRefinementList(container, item, settings);
        }
        case 'category':
            return item.showFilter ? styledRefinementList(container, item) : null;
        case 'state': {
            return (0,instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_7__["default"])({
                container,
                attribute: item.facet,
                limit: 50,
                cssClasses: {
                    selectedItem: 'u-t-bg-grayscale-200'
                },
                transformItems(items) {
                    items.sort((a, b) => a.label.localeCompare(b.label));
                    return items;
                },
                templates: {
                    item(data) {
                        const { label, url, cssClasses } = data;
                        return /* html */ `
              <a class="${cssClasses.link}" href="${url}">
                <span
                  class="${cssClasses.label}"
                  >${label}</span
                >
              </a>
            `;
                    }
                }
            });
        }
        case 'auctionType':
        case 'agentName': {
            return styledRefinementList(container, item);
        }
        default:
            return null;
    }
};
const getWidgets = (options, filters, facetWidgets, instantsearchInstance) => {
    const { configuration, defaultHitsTemplate, inputs, 
    // mapToggle,
    secondaryHitsTemplate, sortOptions, statsTemplate, useCurrentRefinements, useSortBy, useStats, useHitsPerPage, loadMore = false, isHlnHomePg, 
    // useMap,
    omitPagination } = options;
    let widgets = [];
    if (configuration) {
        const config = filters
            ? Object.assign(Object.assign({}, configuration), filters) : Object.assign({}, configuration);
        widgets.push((0,instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_10__["default"])(config));
    }
    else if (filters) {
        const config = Object.assign({}, filters);
        widgets.push((0,instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_10__["default"])(config));
    }
    let totalHits = 0;
    if (useStats) {
        widgets.push((0,instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_11__["default"])({
            container: '#stats',
            templates: {
                text(data) {
                    totalHits = data.nbHits;
                    return (0,_listingSearch__WEBPACK_IMPORTED_MODULE_1__.getStatsTemplate)(statsTemplate, data);
                }
            }
        }));
    }
    if (useHitsPerPage) {
        // this means we are using pagination
        widgets.push((0,instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_12__["default"])({
            container: '#hits-per-page',
            items: [
                { label: 'Show 10 per page', value: 10 },
                { label: 'Show 15 per page', value: 15, default: true },
                { label: 'Show 20 per page', value: 20 },
                { label: 'Show 30 per page', value: 30 },
                { label: 'Show 50 per page', value: 50 }
            ]
        }), (0,_listingSearch__WEBPACK_IMPORTED_MODULE_1__.CustomPagination)({}));
    }
    if (inputs) {
        (0,_SearchBarDropdown__WEBPACK_IMPORTED_MODULE_2__.initSearchDropdowns)({
            target: '.b-searchDropdown--instantsearch',
            instantsearchInstance
        });
        widgets.push((0,instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_13__["default"])({
            container: '#listingMainSearchBar',
            placeholder: inputs[0].placeholder
        }));
    }
    if (useCurrentRefinements) {
        // Get the default settings for range inputs and assign them to an object
        // Where the key name is the facets name
        const { facets } = options;
        const rangeFacetSettings = facets.filter((facetObj) => {
            const { type } = facetObj;
            return type === 'range';
        });
        const rangeInputs = rangeFacetSettings.reduce((a, rangeFacet) => (Object.assign(Object.assign({}, a), { [rangeFacet.facet]: rangeFacet })), {});
        widgets.push((0,instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_14__["default"])({
            container: '#refinements',
            cssClasses: {
                list: 'c-cluster',
                item: 'c-cluster',
                category: 'c-cluster'
            },
            transformItems(items) {
                // Check range input types for default values
                const filteredItems = items.filter((item) => {
                    const { attribute } = item;
                    if (attribute === 'price' ||
                        attribute === 'listingPrice' ||
                        attribute === 'totalAcres') {
                        const { refinements } = item;
                        const filteredRanges = refinements.filter((refinement) => {
                            const { value } = refinement;
                            const defaultSettings = rangeInputs[attribute];
                            const { min, max } = defaultSettings;
                            // Check value against default
                            if (value === min || value === max) {
                                return false;
                            }
                            return true;
                        });
                        item.refinements = filteredRanges;
                        return filteredRanges.length > 0;
                    }
                    return true;
                });
                filteredItems.map((item) => {
                    const { attribute, label } = item;
                    // Add spaces to Label
                    const updatedLabel = label.replace(/([a-z])([A-Z])/g, '$1 $2');
                    item.label = updatedLabel;
                    // Add $ to price refinements
                    if (attribute === 'price' || attribute === 'listingPrice') {
                        const { refinements } = item;
                        refinements.map((refinement) => {
                            const pieces = refinement.label.split(' ');
                            refinement.label = `${pieces[0]} $${pieces[1]}`;
                            return refinement;
                        });
                        item.refinements = refinements;
                    }
                    return item;
                });
                return filteredItems;
            }
        }));
    }
    if (defaultHitsTemplate) {
        let initialRenderArgs;
        if (!isTable) {
            // if is not a table use infinite hits
            const infiniteHitsWidget = (0,instantsearch_js_es_connectors__WEBPACK_IMPORTED_MODULE_15__["default"])((renderArgs, isFirstRender) => {
                const { hits: infiniteHits, showMore, widgetParams } = renderArgs;
                const { container, templateFunctionName } = widgetParams;
                let hitsToRender = infiniteHits;
                // We want to sort the infinite hits if we are on the HLN home page by live, pending, and leased
                if (templateFunctionName === 'propertyListingCardHln') {
                    const sortOrder = ['live', 'pending', 'leased'];
                    const sorted = infiniteHits.sort((a, b) => {
                        const aIndex = sortOrder.indexOf(a.propertyStatus);
                        const bIndex = sortOrder.indexOf(b.propertyStatus);
                        return ((aIndex === -1 ? Infinity : aIndex) -
                            (bIndex === -1 ? Infinity : bIndex));
                    });
                    hitsToRender = sorted;
                }
                initialRenderArgs = renderArgs;
                if (isFirstRender) {
                    // Sentinel for IntersectionObserver
                    const sentinel = document.createElement('div');
                    const listEl = document.createElement('ul');
                    // ListEl for holding hits
                    // Apply autoGrid to agentListing container
                    if (templateFunctionName === 'agentListing' ||
                        templateFunctionName === 'articleCardTemplate') {
                        listEl.classList.add('c-autoGrid');
                        listEl.classList.add('u-gutter-600');
                    }
                    else if (templateFunctionName === 'propertyListingCardHln') {
                        // HLN grid
                        listEl.classList.add('hln-listing-grid');
                    }
                    else {
                        // Otherwise just add flow
                        listEl.classList.add('c-flow');
                        listEl.classList.add('u-flow-space--600');
                    }
                    if (container) {
                        container.appendChild(listEl);
                        container.appendChild(sentinel);
                    }
                    // Implement IO
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting && !initialRenderArgs.isLastPage) {
                                try {
                                    setTimeout(() => showMore(), 350);
                                }
                                catch (e) {
                                    if (window.location.host.includes('dev')) {
                                        // eslint-disable-next-line no-console
                                        console.error(e);
                                    }
                                }
                            }
                        });
                    });
                    if (loadMore) {
                        const loadMoreBtn = document.getElementById('pagination-load-more');
                        const hitsPerPg = configuration.hitsPerPage;
                        let hitsDisplayed = +hitsPerPg;
                        let showLoadMore = true;
                        function loadMoreItems() {
                            setTimeout(() => showMore(), 50);
                            hitsDisplayed = hitsDisplayed + hitsPerPg;
                            if (hitsDisplayed >= totalHits) {
                                showLoadMore = false;
                                loadMoreBtn.removeEventListener('click', loadMoreItems);
                                loadMoreBtn.classList.add('load-more-disabled');
                            }
                        }
                        if (showLoadMore) {
                            loadMoreBtn.addEventListener('click', loadMoreItems);
                        }
                    }
                    else if (!omitPagination) {
                        observer.observe(sentinel);
                    }
                    return;
                }
                if (container && hitsToRender) {
                    container.querySelector('ul').innerHTML = hitsToRender
                        .map((hit) => {
                        switch (templateFunctionName) {
                            case 'propertyListingHalfCard':
                                return (0,_listingSearch__WEBPACK_IMPORTED_MODULE_1__.propertyListingHalfCard)(hit);
                            case 'propertyListingFullCard':
                                return (0,_listingSearch__WEBPACK_IMPORTED_MODULE_1__.propertyListingFullCard)(hit);
                            case 'propertyListingCardHln':
                                return (0,_listingSearch__WEBPACK_IMPORTED_MODULE_1__.propertyListingCardHln)(hit);
                            case 'articleCardTemplate':
                                return (0,_listingSearch__WEBPACK_IMPORTED_MODULE_1__.articleCardTemplate)(hit);
                            case 'agentListing':
                                return (0,_listingSearch__WEBPACK_IMPORTED_MODULE_1__.agentListing)(hit);
                            default:
                                return '';
                        }
                    })
                        .join('');
                    if (hitsToRender.length === 0) {
                        container.querySelector('ul').innerHTML =
                            (0,_listingSearch__WEBPACK_IMPORTED_MODULE_1__.propertyListingNoResults)();
                    }
                }
            });
            widgets.push(infiniteHitsWidget({
                // @ts-ignore
                container: document.getElementById('listings'),
                templateFunctionName: defaultHitsTemplate
            }));
        }
        else {
            const renderHits = (renderOptions) => {
                const { hits, widgetParams } = renderOptions;
                const { container } = widgetParams;
                if (container) {
                    widgetParams.container.innerHTML = hits
                        .map((hit) => {
                        return (0,_listingSearch__WEBPACK_IMPORTED_MODULE_1__.propertyTableRow)(hit, hit.__position);
                    })
                        .join('');
                }
            };
            const customHits = (0,instantsearch_js_es_connectors__WEBPACK_IMPORTED_MODULE_16__["default"])(renderHits);
            widgets.push(customHits({
                // @ts-ignore
                container: document.getElementById('hits')
            }));
        }
    }
    if (secondaryHitsTemplate) {
        // TODO: Needed? if so, adjust with new infiniteHitsWidget changes
        // const hitWidget = hitsWidget(secondaryHitsTemplate, '#listingsFull');
        // widgets.push(hitWidget);
    }
    if (useSortBy) {
        widgets.push((0,_listingSearch__WEBPACK_IMPORTED_MODULE_1__.CustomSortBy)({
            /* @ts-ignore-next-line */
            container: document.getElementById('sortBy'),
            items: sortOptions
        }));
    }
    else {
        const hiddenSortBy = document.getElementById('hiddenSortBy');
        if (hiddenSortBy) {
            widgets.push((0,_listingSearch__WEBPACK_IMPORTED_MODULE_1__.CustomSortBy)({
                /* @ts-ignore-next-line */
                container: hiddenSortBy,
                items: [
                    {
                        isDefault: true,
                        label: 'Last Name (asc)',
                        value: 'fncRealEstate_agents:lastName:asc'
                    }
                ]
            }));
        }
    }
    if (facetWidgets.length > 0) {
        widgets = [...widgets, ...facetWidgets];
    }
    return widgets;
};
// #endregion - Widget functions
const initListingUI = () => {
    // Get form data
    const INSTANT_SEARCH_RULES_EL = document.querySelector('[data-instantsearch-rules]');
    const INSTANT_SEARCH_TABLE_RULES_EL = document.querySelector('[data-instantsearchtable-rules]');
    if (INSTANT_SEARCH_RULES_EL || INSTANT_SEARCH_TABLE_RULES_EL) {
        (0,_listingSearch__WEBPACK_IMPORTED_MODULE_1__.initListingDropdowns)();
        const searchClient = (0,_meilisearch_instant_meilisearch__WEBPACK_IMPORTED_MODULE_17__.instantMeiliSearch)("https://search.farmersnational.com", "acY.zmKWCX494Umh", {
            keepZeroFacets: true,
            finitePagination: false
        }).searchClient;
        const INSTANT_SEARCH_RULES_DATA = INSTANT_SEARCH_RULES_EL
            ? JSON.parse(INSTANT_SEARCH_RULES_EL.dataset.instantsearchRules)
            : JSON.parse(INSTANT_SEARCH_TABLE_RULES_EL.dataset.instantsearchtableRules);
        const { agentName, facets = [], filters, categoryType, category, office } = INSTANT_SEARCH_RULES_DATA;
        // #region - Category Page default values
        const searchFilters = filters || {};
        if (categoryType && category) {
            searchFilters.filters = `${categoryType} = ${category.title}`;
        }
        // Agent Entry Pages
        if (agentName) {
            searchFilters.facetFilters = `agentName:${agentName}`;
        }
        // Agent Office
        if (office) {
            searchFilters.facetFilters = `office:${office}`;
        }
        // #endregion - Category Page default values
        // #region Grouped dropdowns - Ex: more dropdown in property listing
        const groupedDropdowns = {};
        let facetWidgets = facets.map((item) => {
            // In the future we should shift the facets data to match the desired UI
            if (item.display !== 'default') {
                const displayKeyExists = groupedDropdowns[item.display];
                if (!displayKeyExists) {
                    // If object doesn't exist
                    groupedDropdowns[item.display] = [item.facet];
                }
                else {
                    // If display key exists
                    groupedDropdowns[item.display].push(item.facet);
                }
            }
            return getFacetUIByType(item, category ? category.title : 'Title');
        });
        const groupedDropdownKeys = Object.keys(groupedDropdowns);
        groupedDropdownKeys.forEach((key) => {
            const includedAttributes = groupedDropdowns[key];
            facetWidgets.push(resetButton(key, includedAttributes));
        });
        // #endregion - Grouped Dropdowns
        // Remove nulls & flatten widgets array before spreading onto search.addWidgets()
        facetWidgets = facetWidgets.filter(Boolean);
        facetWidgets = (0,_utils_Index__WEBPACK_IMPORTED_MODULE_0__.flattenArray)(facetWidgets);
        let instantsearchInstance = null;
        if (INSTANT_SEARCH_RULES_DATA.mapToggle) {
            const mapSearchClient = (0,_meilisearch_instant_meilisearch__WEBPACK_IMPORTED_MODULE_17__.instantMeiliSearch)("https://search.farmersnational.com", "acY.zmKWCX494Umh", {
                finitePagination: false
            }).searchClient;
            const mapInstance = (0,instantsearch_js__WEBPACK_IMPORTED_MODULE_18__["default"])({
                indexName: INSTANT_SEARCH_RULES_DATA.index,
                searchClient: mapSearchClient
            });
            mapInstance.addWidgets([
                (0,_listingSearch__WEBPACK_IMPORTED_MODULE_1__.initMapUI)(INSTANT_SEARCH_RULES_DATA.mapToggle),
                (0,instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_10__["default"])({})
            ]);
            instantsearchInstance = (0,instantsearch_js__WEBPACK_IMPORTED_MODULE_18__["default"])({
                indexName: INSTANT_SEARCH_RULES_DATA.index,
                searchClient,
                routing: INSTANT_SEARCH_RULES_DATA.isHlnHomePg ? false : true,
                searchFunction: (helper) => {
                    mapInstance.helper.setState(Object.assign(Object.assign({}, helper.state), { hitsPerPage: 1000, page: 0 }));
                    mapInstance.helper.search();
                    helper.search();
                }
            });
            mapInstance.start();
            if (!INSTANT_SEARCH_RULES_DATA.showMap) {
                const mapEl = document.getElementById('map');
                mapEl.style.visibility = 'hidden';
                const parentEl = mapEl === null || mapEl === void 0 ? void 0 : mapEl.parentElement;
                if (parentEl) {
                    setTimeout(() => {
                        parentEl.classList.add('u-box-hidden');
                        mapEl.style.visibility = 'visible';
                    }, 100);
                }
            }
        }
        else {
            instantsearchInstance = (0,instantsearch_js__WEBPACK_IMPORTED_MODULE_18__["default"])({
                indexName: INSTANT_SEARCH_RULES_DATA.index,
                searchClient,
                routing: INSTANT_SEARCH_RULES_DATA.isHlnHomePg ? false : true
            });
        }
        const widgets = getWidgets(INSTANT_SEARCH_RULES_DATA, searchFilters, facetWidgets, instantsearchInstance);
        instantsearchInstance.addWidgets(widgets);
        // On render could be useful for things like running updates on the
        // image fader. However, it runs everytime the searchbar has input
        // So it doesn't work like an on mount function and I can't find
        // one in the documentation for the vanilla version
        // instantsearchInstance.on('render', () => {});
        instantsearchInstance.start();
        (0,_listingSearch__WEBPACK_IMPORTED_MODULE_1__.initPropertyFaderMutationObserver)('#listings');
        instantsearchInstance.on('render', () => {
            (0,_utils_TableCollapse__WEBPACK_IMPORTED_MODULE_4__["default"])();
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initListingUI);


/***/ }),

/***/ "./assets/js/modules/LeafletMap.ts":
/*!*****************************************!*\
  !*** ./assets/js/modules/LeafletMap.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_CENTER: () => (/* binding */ DEFAULT_CENTER),
/* harmony export */   DEFAULT_ZOOM: () => (/* binding */ DEFAULT_ZOOM),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var meilisearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! meilisearch */ "./node_modules/meilisearch/dist/bundles/meilisearch.umd.js");
/* harmony import */ var meilisearch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(meilisearch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_Index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Index */ "./assets/js/utils/Index.ts");
/* harmony import */ var _utils_Maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Maps */ "./assets/js/utils/Maps.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Imports
 */



/**
 * Constants
 */
const DEFAULT_ZOOM = 6; // Zoom level to show the entire country
const DEFAULT_CENTER = [39.8283, -98.5795]; // Geographic center of the US
/**
 * Parent class to all leaflet classes
 */
class LeafletMap {
    constructor() {
        /**
         * Attribution element bar for Leaflet + ESRI
         */
        this.attributionEl = null;
        /**
         * Default ZIP from CMS
         */
        this.defaultZip = null; // Charlotte default
        /**
         * Default lat/lng for map
         */
        this.defaultLatLong = {
            lat: 37.09024,
            lng: -95.712891
        };
        /**
         * Default zoom for map
         */
        this.defaultZoom = 13;
        /**
         * Whether or not the user has geolocation allowed
         */
        this.geolocationAllowed = false;
        /**
         * Leaf instance
         */
        this.Leaf = window.L;
        /**
         * HTML element that is the container for loading animation(s)
         */
        this.loadingContainer = null;
        /**
         * Leaflet map instance
         */
        this.map = null;
        /**
         * Map Container element for leaflet
         */
        this.mapContainer = null;
        /**
         * Array of markers currently attached to the map
         */
        this.markers = null;
        /**
         * Meilisearch Client
         */
        this.meiliClient = new meilisearch__WEBPACK_IMPORTED_MODULE_2__.MeiliSearch({
            host: "https://search.farmersnational.com",
            apiKey: "acY.zmKWCX494Umh"
        });
        /**
         * Says "You" if geolocated, "{Query|ZIP Code}" if using a normal string query
         */
        this.relativeLocationTextEl = null;
        /**
         * The number of results in: {X} Properties Near You
         */
        this.resultsLengthTextEl = null;
        /**
         * Search input element
         */
        this.searchInput = null;
    }
    /**
     * Takes search results and adds markers (into a cluster) to the map for each
     *
     * @param     {any}                searchResults    Array of search results to add to the map
     *
     * @return    {undefined}                     returns nothing
     */
    addResultMarkersToMap(searchResults) {
        if (!searchResults.length) {
            return undefined;
        }
        const markerArray = [];
        const clusterGroup = this.Leaf.markerClusterGroup();
        searchResults.forEach((result) => {
            // Custom Marker
            const resultIcon = this.Leaf.divIcon({
                className: 'custom-marker',
                html: `
           <a href="${result.url}">
             <i class="${result.propertyStatus.toLowerCase()}"></i>
             <span>${result.price ? (0,_utils_Index__WEBPACK_IMPORTED_MODULE_0__.numFormatter)(result.price) : '$'}</span>
             <i class="arrow">
               <svg viewBox="0 0 15 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                 <path d="M0.263672 6.9548H11.9433V9.31266H0.263672V6.9548Z" />
                 <path d="M7.00059 16.0348L5.39039 14.3833L11.4842 8.13434L5.39039 1.88538L7.00059 0.233887L14.7024 8.13437L7.00059 16.0348Z" />
               </svg>
             </i>
           </a>
         `
            });
            const resultMarker = this.Leaf.marker([result._geo.lat, result._geo.lng], {
                icon: resultIcon,
                keyboard: true,
                title: result.title
            });
            markerArray.push(resultMarker);
            clusterGroup.addLayer(resultMarker);
        });
        if (markerArray.length > 1) {
            const markerBoundsGroup = this.Leaf.featureGroup(markerArray);
            this.map.fitBounds(markerBoundsGroup.getBounds().pad(0.175)); // Pad based on zoom delta
        }
        else {
            this.map.setView([markerArray[0].getLatLng().lat, markerArray[0].getLatLng().lng], this.defaultZoom);
        }
        this.map.addLayer(clusterGroup);
        this.markers = markerArray;
        return undefined;
    }
    /**
     * Get search results from meilisearch.
     *
     * #TODO: Support for additional filters from a listing/search page
     *
     * @param     {LatLongPos|string}        query    Query is either an object containing lat/lng or a string that should contain a zip code
     *
     * @param     {any[]}        filters    Object of filters to be used with the meilisearch query
     *
     * @param     {number}        limit      Limit of results to return, defaults to 1000 (Meilisearch default)
     *
     * @return    {Promise<any>}             Returns promise of search request
     */
    getSearchResults(query, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    filters = null, limit = 1000) {
        return __awaiter(this, void 0, void 0, function* () {
            let searchResults = null;
            // 200 mile radius (200 * 1609.34) : 1 mile === 1609.34 meters
            const radiusInMeters = 321868;
            // Via lat/lng
            if (typeof query === 'object') {
                searchResults = yield this.meiliClient
                    .index('fncRealEstate_properties')
                    .search('', {
                    filter: filters,
                    limit: limit
                });
                return searchResults;
            }
            // Via zip code
            if (typeof query === 'string' && query.match(/^\d+$/g)) {
                const zipCoords = yield (0,_utils_Maps__WEBPACK_IMPORTED_MODULE_1__.getZipCodeCoordinates)(query).then((details) => details);
                if (zipCoords === null) {
                    return undefined;
                }
                searchResults = yield this.meiliClient
                    .index('fncRealEstate_properties')
                    .search('', {
                    filter: [
                        `_geoRadius(
            ${zipCoords.lat},
             ${zipCoords.long},
             ${radiusInMeters}
           )`,
                        "propertyStatus != 'Sold'"
                    ]
                });
                return searchResults;
            }
            // Via traditional query string
            if (typeof query === 'string') {
                searchResults = yield this.meiliClient
                    .index('fncRealEstate_properties')
                    .search(query, {
                    filter: "propertyStatus != 'Sold'"
                });
                return searchResults;
            }
            return undefined;
        });
    }
    /**
     * Handles adjusting the marker positioning to be more realistic
     * - Since we're using custom markers the initial placement of them is a bit jacked up
     *
     * @return    {undefined}            Returns nothing, undefined
     */
    handleMarkerAdjustments() {
        const mapMarkers = Array.from(this.mapContainer.querySelectorAll('.custom-marker'));
        mapMarkers.forEach((marker) => {
            const existingTransform = window.getComputedStyle(marker).transform;
            marker.style.transform = `translateX(-50%) ${existingTransform}`; // eslint-disable-line
        });
        return undefined;
    }
    /**
     * Handles a change of the search input
     *
     * @param     {string}    newQuery    New string to search for
     *
     * @return    {undefined}              returns nothing
     */
    handleSearchInputChange(newQuery) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!newQuery) {
                return undefined;
            }
            if (this.markers !== null) {
                this.markers.forEach((marker) => {
                    marker.remove();
                });
            }
            this.markers = null;
            const newResults = yield this.getSearchResults(newQuery).then((results) => results);
            if (!newResults) {
                this.updateMap([], newQuery.toString(), '0', newQuery.toString());
                return undefined;
            }
            this.updateMap(newResults.hits, newQuery.toString(), newResults.hits.length, newQuery.toString());
            return undefined;
        });
    }
    /**
     * Loads the leaflet map
     *
     * @return    {undefined}          returns nothing
     */
    loadMap() {
        // Charlotte default view, for now
        this.map = this.Leaf.map(this.mapContainer, {
            maxZoom: 25,
            zoomSnap: 0.75,
            zoomDelta: 0.75,
            zoomControl: false,
            scrollWheelZoom: false,
            attributionControl: false
        }).setView([35.2271, -80.8431], this.defaultZoom); // TODO: client-approved default center?
        // Define the Satellite (Imagery) layer
        var satelliteLayer = window.L.esri.Vector.vectorBasemapLayer('ArcGIS:Imagery', {
            apikey: "AAPK9ce630a4d1da4787aaf6d6d23760abd8ixmhOWLjupa3Hg4H1kFcGKkkSNd2KHmtUE89Tdcj_XMMhVqZcxzulUFqUDoPRCGW"
        });
        // Define the Navigation layer
        var navigationLayer = window.L.esri.Vector.vectorBasemapLayer('ArcGIS:Navigation', {
            apikey: "AAPK9ce630a4d1da4787aaf6d6d23760abd8ixmhOWLjupa3Hg4H1kFcGKkkSNd2KHmtUE89Tdcj_XMMhVqZcxzulUFqUDoPRCGW"
        });
        // Add the default layer (Satellite) to the map
        satelliteLayer.addTo(this.map);
        // Add a layer control to switch between layers
        var baseMaps = {
            Satellite: satelliteLayer,
            Navigation: navigationLayer
        };
        // Add controls to map
        window.L.control.layers(baseMaps).addTo(this.map);
        window.L.control.zoom({ position: 'bottomright' }).addTo(this.map);
        // Any event listeners for the map
        this.map.addEventListener('zoomend', this.handleMarkerAdjustments.bind(this));
    }
    /**
     * If a user has enabled location services,
     * get their lat/lng and query results based on that
     */
    searchViaGeolocation() {
        return __awaiter(this, void 0, void 0, function* () {
            this.loadingContainer.classList.add('loading');
            if (navigator.geolocation && window.location.pathname !== '/') {
                navigator.geolocation.getCurrentPosition(
                /**
                 * Success callback
                 */
                (position) => __awaiter(this, void 0, void 0, function* () {
                    this.geolocationAllowed = true;
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    const coords = {
                        lat,
                        lng
                    };
                    const geoResults = yield this.getSearchResults(coords).then((results) => results);
                    this.updateMap(geoResults.hits, '', geoResults.hits.length, null);
                }), 
                /**
                 * Error callback
                 *
                 * - Immediate response after a geolocation error should be searching via defaultZip
                 */
                (error) => __awaiter(this, void 0, void 0, function* () {
                    // Explicitly adjust state value and log something
                    if (error.PERMISSION_DENIED && window.location.href.includes('dev')) {
                        this.geolocationAllowed = false;
                        /* eslint-disable no-console */
                        console.log('Permission for geolocation and location services denied');
                        /* eslint-enable no-console */
                    }
                    const defaultResults = yield this.getSearchResults(this.defaultLatLong).then((results) => results);
                    this.updateMap(defaultResults.hits, '', defaultResults.hits.length, '');
                }));
            }
            else {
                const defaultResults = yield this.getSearchResults(this.defaultLatLong).then((results) => results);
                this.updateMap(defaultResults.hits, '', defaultResults.hits.length, '');
            }
            return undefined;
        });
    }
    search() {
        return __awaiter(this, void 0, void 0, function* () {
            const defaultResults = yield this.getSearchResults(this.defaultLatLong).then((results) => results);
            this.updateMap(defaultResults.hits, '', defaultResults.hits.length, '');
            return undefined;
        });
    }
    /**
     * Updates the map and loading state after a request finishes
     *
     * @param {array} results Array of results from search
     *
     * @param {string} searchInputValue String value to be passed into the ZIP input
     *
     * @param {string|null} resultsLengthText null if we don't want to adjust, string if so
     *
     * @param {string|null} relativeLocationText null if we don't want to adjust, string if so
     *
     * @return {undefined} returns nothing
     */
    updateMap(results, searchInputValue = '', resultsLengthText = null, relativeLocationText = null) {
        // Conditional things
        if (results.length > 0) {
            this.addResultMarkersToMap(results);
            this.handleMarkerAdjustments();
        }
        if (resultsLengthText !== null && this.resultsLengthTextEl) {
            this.resultsLengthTextEl.textContent = resultsLengthText;
        }
        if (relativeLocationText !== null && this.relativeLocationTextEl) {
            this.relativeLocationTextEl.textContent = relativeLocationText;
        }
        // Do this every time
        if (this.searchInput)
            this.searchInput.value = searchInputValue;
        this.loadingContainer.classList.remove('loading');
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeafletMap);


/***/ }),

/***/ "./assets/js/modules/NavAccountLinks.ts":
/*!**********************************************!*\
  !*** ./assets/js/modules/NavAccountLinks.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initModule)
/* harmony export */ });
/* harmony import */ var _utils_LoginStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/LoginStatus */ "./assets/js/utils/LoginStatus.ts");
/**
 * Imports
 */

/**
 * NavAccountLinks Class
 *
 * If for any reason we ever want external control, we can set a variable
 * on the window of the return from this class in app.ts then access it like
 * `window.NavAccountLinks.handleAccountLinks();` from any file that comes after
 */
class NavAccountLinks {
    constructor(accountLinks) {
        /**
         * Array of our AccountLinks
         */
        this.accountLinks = null;
        this.accountLinks = Array.from(accountLinks);
    }
    /**
     * Fetches to see if a user is currenly logged in, adjusting accountLinks accordingly.
     *
     * @return    {undefined}          returns nothing, undefined
     */
    handleAccountLinks() {
        // const userIsLoggedIn = await fetchUserLoginStatus();
        const userIsLoggedIn = (0,_utils_LoginStatus__WEBPACK_IMPORTED_MODULE_0__.getLoginStatus)();
        const showTheseLinksWhenLoggedIn = this.accountLinks.filter((link) => link.getAttribute('data-show') === 'logged-in');
        const showTheseLinksWhenLoggedOut = this.accountLinks.filter((link) => link.getAttribute('data-show') === 'logged-out');
        // If user is logged in
        if (userIsLoggedIn) {
            showTheseLinksWhenLoggedIn.forEach((linkToShow) => {
                linkToShow.style.display = 'inline-flex';
            });
            showTheseLinksWhenLoggedOut.forEach((linkToHide) => {
                linkToHide.style.display = 'none';
            });
            return undefined;
        }
        // If user is logged out
        showTheseLinksWhenLoggedOut.forEach((linkToShow) => {
            linkToShow.style.display = 'inline-flex';
        });
        showTheseLinksWhenLoggedIn.forEach((linkToHide) => {
            linkToHide.style.display = 'none';
        });
        return undefined;
    }
    init() {
        this.handleAccountLinks();
    }
}
/**
 * Initialization
 *
 * @return    {NavAccountLinks}          returns instance of the class
 */
function initModule() {
    const accountLinks = document.querySelectorAll('[data-account-link]');
    if (!accountLinks) {
        return null;
    }
    const accountLinkClass = new NavAccountLinks(accountLinks);
    accountLinkClass.init();
    return accountLinkClass;
}


/***/ }),

/***/ "./assets/js/modules/PropertyDetailHero.ts":
/*!*************************************************!*\
  !*** ./assets/js/modules/PropertyDetailHero.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ init)
/* harmony export */ });
function clearActive(anchors) {
    anchors === null || anchors === void 0 ? void 0 : anchors.forEach((anchor) => { var _a; return (_a = anchor === null || anchor === void 0 ? void 0 : anchor.removeAttribute) === null || _a === void 0 ? void 0 : _a.call(anchor, 'data-active'); });
}
function setup(node) {
    var _a;
    if (!node)
        return;
    const swiperUuid = node.getAttribute('data-phc');
    if (!swiperUuid)
        return;
    if (!window.swipers)
        return;
    const swiperInstance = (_a = window.swipers.find((i) => (i === null || i === void 0 ? void 0 : i.uuid) === swiperUuid)) === null || _a === void 0 ? void 0 : _a.swiper;
    if (!swiperInstance)
        return;
    const availableStartPoints = Array.from(node.querySelectorAll('[data-phc-start]') || []);
    availableStartPoints.forEach((anchor) => {
        if (!anchor)
            return;
        anchor.addEventListener('click', (e) => {
            var _a, _b;
            // no clickity please
            e.preventDefault();
            clearActive(availableStartPoints);
            anchor.setAttribute('data-active', 'true');
            const slideTo = Number((_a = anchor.getAttribute('data-phc-start')) !== null && _a !== void 0 ? _a : '0');
            (_b = swiperInstance === null || swiperInstance === void 0 ? void 0 : swiperInstance.slideTo) === null || _b === void 0 ? void 0 : _b.call(swiperInstance, slideTo);
        });
    });
    // Back button return to previous search
    const previousUrl = document.referrer || '';
    const urlPieces = previousUrl.split(/[/?]/);
    if (urlPieces[3] === 'properties') {
        const backToSearch = document.getElementById('backToSearch');
        if (backToSearch) {
            backToSearch.href = previousUrl;
        }
    } /**
     * Listen to swiper changes to activate the proper anchor tag
     * and ensuring it works in both directions
     */
    swiperInstance.on('slideChange', (swiper) => {
        var _a;
        if (!swiper)
            return;
        const activeAnchorStart = node.querySelector(`[data-phc-start="${swiper.activeIndex}"]`);
        const activeAnchorEnd = node.querySelector(`[data-phc-end="${swiper.activeIndex}"]`);
        const carouselWrapper = document.querySelector('[data-last-photo-index]');
        if (carouselWrapper) {
            const lastPhotoIndex = carouselWrapper.dataset.lastPhotoIndex || '0';
            const lastPhotoIndexNum = parseInt(lastPhotoIndex, 10) || 0;
            const showAllPhotosButton = document.querySelector('#propertyDetail__imageGridButton');
            if (showAllPhotosButton) {
                if (swiper.activeIndex > lastPhotoIndexNum) {
                    showAllPhotosButton.style.display = 'none';
                }
                else {
                    showAllPhotosButton.style.removeProperty('display');
                }
            }
        }
        if (!activeAnchorStart && !activeAnchorEnd)
            return;
        clearActive(availableStartPoints);
        const activeElement = activeAnchorStart || activeAnchorEnd;
        (_a = activeElement === null || activeElement === void 0 ? void 0 : activeElement.setAttribute) === null || _a === void 0 ? void 0 : _a.call(activeElement, 'data-active', 'true');
    });
}
function init() {
    try {
        const propertyDetailHero = Array.from(document.querySelectorAll('[data-phc]') || []);
        propertyDetailHero === null || propertyDetailHero === void 0 ? void 0 : propertyDetailHero.forEach((module) => {
            if (module)
                setup(module);
        });
    }
    catch (error) {
        // Silently handle any errors to prevent script from breaking
        console.error('Error initializing property detail hero:', error);
    }
}


/***/ }),

/***/ "./assets/js/modules/PropertySearchMap.ts":
/*!************************************************!*\
  !*** ./assets/js/modules/PropertySearchMap.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initModule)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LeafletMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeafletMap */ "./assets/js/modules/LeafletMap.ts");
/**
 * Imports
 */


/**
 * PropertySearchMap Class
 */
class PropertySearchMap extends _LeafletMap__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(parentEl) {
        super();
        /**
         * Module's top-level element (section)
         */
        this.parentEl = null;
        this.meiliIndex = 'fncRealEstate_properties';
        this.globalFilters = ["propertyStatus != 'Sold'"];
        this.parentEl = parentEl;
        this.loadingContainer = this.parentEl;
        this.defaultZip = this.parentEl.getAttribute('data-default-zip');
        this.mapContainer = this.parentEl.querySelector('[data-map]');
        this.relativeLocationTextEl = this.parentEl.querySelector('[data-relative-location]');
        this.resultsLengthTextEl = this.parentEl.querySelector('[data-results-count]');
        this.searchInput = this.parentEl.querySelector('[data-query-input]');
    }
    /**
     * Anything that needs to happen on the initial request
     */
    handleInitialRequest() {
        this.search().then(() => {
            const markerBoundsGroup = this.Leaf.featureGroup(this.markers);
            const markerBounds = markerBoundsGroup.getBounds();
            this.map.setView(markerBounds.getCenter(), 5);
        });
    }
    /**
     * Method for attaching our event listeners
     */
    attachListeners() {
        this.searchInput.addEventListener('keyup', (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)((e) => {
            const { target } = e;
            const { value } = target;
            // check if value is a zip code
            this.handleSearchInputChange(value);
        }, 1000));
        this.searchInput.addEventListener('change', (e) => {
            const { target } = e;
            const { value } = target;
            // check if value is a zip code
            this.handleSearchInputChange(value);
        });
    }
    init() {
        // Initialization and listeners
        this.loadMap();
        this.attachListeners();
        this.handleInitialRequest();
    }
}
/**
 * Initialization
 *
 * @return    {undefined}          returns nothing, initializes Class
 */
function initModule() {
    const propertySearchModules = Array.from(document.querySelectorAll('[data-property-search-module]'));
    propertySearchModules.forEach((module) => {
        const propertySearchModule = new PropertySearchMap(module);
        propertySearchModule.init();
    });
}


/***/ }),

/***/ "./assets/js/modules/SavedSearches.ts":
/*!********************************************!*\
  !*** ./assets/js/modules/SavedSearches.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _utils_LoginStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/LoginStatus */ "./assets/js/utils/LoginStatus.ts");
// import { fetchUserLoginStatus } from '../utils/Account';
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function addSearch(searchUrl, searchTitle) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = document.querySelector('[name="CRAFT_CSRF_TOKEN"]');
        const params = {
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                searchUrl,
                searchTitle,
                CRAFT_CSRF_TOKEN: token.value
            }),
            method: 'POST'
        };
        const favoritePropertyResponse = yield fetch('/api/v1/properties/save-search', params)
            .then((res) => res.json())
            .then((data) => {
            if (data.savedSearch) {
                return true;
            }
            return false;
        })
            .catch((err) => {
            if (window.location.href.includes('dev')) {
                // eslint-disable-next-line no-console
                console.log(err);
            }
            return false;
        });
        return favoritePropertyResponse;
    });
}
const saveUserSearch = () => {
    const keywords = document.getElementById('propertyKeywords');
    const requestResponse = addSearch(`${window.location.pathname}${window.location.search}`, keywords.value ? keywords.value : document.title);
    if (requestResponse) {
        // TODO: this should be a modal, or ideally a notification block rather than a window alert.
        // eslint-disable-next-line no-alert
        window.alert('Search successfully saved');
    }
};
const openModal = () => {
    const modal = document.querySelector('.b-modal');
    modal.classList.add('b-modal--open');
};
function handleSaveSearch(button) {
    // const userIsLoggedIn = await fetchUserLoginStatus();
    const userIsLoggedIn = (0,_utils_LoginStatus__WEBPACK_IMPORTED_MODULE_0__.getLoginStatus)();
    if (userIsLoggedIn) {
        if (button.id === 'saveSearch') {
            const textSpan = button.querySelector('span');
            textSpan.innerHTML = 'Save Search';
        }
        button.addEventListener('click', saveUserSearch);
    }
    else {
        if (button.id === 'saveSearch') {
            const textSpan = button.querySelector('span');
            textSpan.innerHTML = 'Get Updates';
        }
        button.addEventListener('click', openModal);
    }
}
function init() {
    const saveSearch = document.getElementById('saveSearch');
    if (saveSearch)
        handleSaveSearch(saveSearch);
}


/***/ }),

/***/ "./assets/js/modules/SearchBarDropdown.ts":
/*!************************************************!*\
  !*** ./assets/js/modules/SearchBarDropdown.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentLocationFailure: () => (/* binding */ currentLocationFailure),
/* harmony export */   currentLocationSuccess: () => (/* binding */ currentLocationSuccess),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   initHeroSearch: () => (/* binding */ initHeroSearch),
/* harmony export */   initSearchBarMutationObserver: () => (/* binding */ initSearchBarMutationObserver),
/* harmony export */   initSearchDropdown: () => (/* binding */ initSearchDropdown),
/* harmony export */   initSearchDropdowns: () => (/* binding */ initSearchDropdowns),
/* harmony export */   initSearchTypeBtns: () => (/* binding */ initSearchTypeBtns),
/* harmony export */   initZipSearch: () => (/* binding */ initZipSearch)
/* harmony export */ });
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "./assets/js/modules/Input.ts");
/* harmony import */ var _utils_ZipCodeLookup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/ZipCodeLookup */ "./assets/js/utils/ZipCodeLookup.ts");
/* harmony import */ var _utils_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Index */ "./assets/js/utils/Index.ts");
/* harmony import */ var _utils_QueryParents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/QueryParents */ "./assets/js/utils/QueryParents.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




// #region Current Location Logic
const currentLocationSuccess = (pos, searchBar, search) => __awaiter(void 0, void 0, void 0, function* () {
    const { coords } = pos;
    const { latitude, longitude } = coords;
    const zipcode = yield (0,_utils_ZipCodeLookup__WEBPACK_IMPORTED_MODULE_1__.getCoordinatesZipCode)(latitude, longitude);
    const searchBarInput = searchBar.querySelector('input');
    const inputValue = searchBarInput.value;
    const isInputEmpty = (0,_utils_Index__WEBPACK_IMPORTED_MODULE_2__.onlySpaces)(inputValue);
    if (isInputEmpty || !search) {
        searchBarInput.value = `${zipcode}`;
    }
    else {
        searchBarInput.value += `, ${zipcode}`;
    }
    if (search) {
        search.helper.setQuery(searchBarInput.value).search();
    }
    // searchBarInput.focus();
});
const currentLocationFailure = (err) => __awaiter(void 0, void 0, void 0, function* () {
    // eslint-disable-next-line no-console
    console.log(err);
    // eslint-disable-next-line no-alert
    alert('Please enable location services to use your current location.');
});
// #endregion Current Location Logic
const initSearchTypeBtns = (searchBar) => {
    const searchByTypeBtnClass = 'b-searchByType';
    const activeClass = `${searchByTypeBtnClass}--active`;
    const searchByTypeButtons = searchBar.querySelectorAll(`.${searchByTypeBtnClass}`);
    if (searchByTypeButtons) {
        searchByTypeButtons.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                // Get Button
                const { target } = e;
                const el = target;
                const searchTypeButton = el.classList.contains(searchByTypeBtnClass)
                    ? target
                    : (0,_utils_QueryParents__WEBPACK_IMPORTED_MODULE_3__.queryParents)(el, searchByTypeBtnClass);
                const { dataset: { searchtype } } = searchTypeButton;
                // Reset active button
                const currentActiveBtn = searchBar.querySelector(`.${activeClass}`);
                currentActiveBtn.classList.remove(activeClass);
                searchTypeButton.classList.add(activeClass);
                searchBar.dataset.activeSearchtype = searchtype;
            });
        });
    }
};
const initSearchDropdown = (searchBar, search) => {
    initSearchTypeBtns(searchBar);
    const currentLocation = searchBar.querySelector('.b-currentLocation');
    currentLocation.addEventListener('click', () => {
        searchBar.classList.remove('open');
        const loadingText = searchBar.querySelector('.b-loadingText');
        loadingText.style.display = 'block';
        navigator.geolocation.getCurrentPosition((pos) => {
            currentLocationSuccess(pos, searchBar, search).then(() => {
                const searchBarInput = searchBar.querySelector('input');
                if (!search) {
                    searchBarInput.dispatchEvent(new Event('change'));
                }
                // searchBarInput.focus();
                loadingText.style.removeProperty('display');
            });
        }, (err) => {
            currentLocationFailure(err).then(() => {
                const searchBarInput = searchBar.querySelector('input');
                searchBarInput.focus();
                loadingText.style.removeProperty('display');
            });
        }, {
            timeout: 10000 // To prevent the function from sliently failing, time can be adjusted
        });
    });
    const searchInput = searchBar.querySelector('.ais-SearchBox-input');
    if (searchInput) {
        const resetBtn = searchBar.querySelector('.ais-SearchBox-reset');
        const searchBarContainer = searchBar.querySelector('#listingMainSearchBar');
        // Get placeholder text passed via data attribute, if any
        const placeholderText = searchBarContainer.hasAttribute('data-placeholder') ?
            searchBarContainer.dataset.placeholder : 'Search';
        // Set search input placeholder
        searchInput.placeholder = placeholderText;
        searchInput.addEventListener('change', () => {
            const { value } = searchInput;
            const hasInput = value === '';
            (0,_Input__WEBPACK_IMPORTED_MODULE_0__.toggleResetBtn)(resetBtn, hasInput);
        });
        searchInput.addEventListener('beforeinput', (e) => {
            const { inputType } = e;
            const charCount = searchInput.value ? searchInput.value.length : null;
            // Use type such as deleteContentBackward
            if (e.data !== null) {
                (0,_Input__WEBPACK_IMPORTED_MODULE_0__.toggleResetBtn)(resetBtn, false);
            }
            else if (searchInput.value !== '') {
                if (charCount === 1 && inputType === 'deleteContentBackward') {
                    (0,_Input__WEBPACK_IMPORTED_MODULE_0__.toggleResetBtn)(resetBtn, true);
                }
                else {
                    (0,_Input__WEBPACK_IMPORTED_MODULE_0__.toggleResetBtn)(resetBtn, false);
                }
            }
            else {
                (0,_Input__WEBPACK_IMPORTED_MODULE_0__.toggleResetBtn)(resetBtn, true);
            }
        });
        resetBtn.addEventListener('click', () => {
            resetBtn.style.removeProperty('display');
        });
    }
};
// Searchbar Mutation Oberver - used as on mount
const initSearchBarMutationObserver = (searchBar, search) => {
    if (searchBar) {
        const unmountMutationObserver = (observer) => {
            observer.disconnect();
        };
        const callback = (mutationList) => {
            if (mutationList.length > 0) {
                initSearchDropdown(searchBar, search);
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                unmountMutationObserver(observer);
            }
        };
        const config = { childList: true, subtree: true };
        const observer = new MutationObserver(callback);
        observer.observe(searchBar, config);
    }
};
const initSearchDropdowns = ({ target, instantsearchIntance }) => {
    const searchBars = document.querySelectorAll(target);
    if (searchBars) {
        searchBars.forEach((searchBar) => {
            // initSearchDropdown(searchBar as HTMLElement, search);
            initSearchBarMutationObserver(searchBar, instantsearchIntance);
        });
    }
};
const initZipSearch = () => {
    const target = '.b-searchDropdown--zip';
    initSearchDropdowns({ target });
};
const initHeroSearch = () => {
    const heroSearchBar = document.querySelector('#heroSearchBarWrapper');
    if (heroSearchBar) {
        const callback = () => {
            const getQuery = () => {
                const url = window.location.href;
                const urlPieces = url.split(/[/]/);
                return urlPieces[urlPieces.length - 1];
            };
            const form = heroSearchBar.querySelector('form');
            form.addEventListener('submit', () => {
                const currentQuery = getQuery();
                const subSite = window.location.pathname.split('/')[1];
                window.location.href = `/${subSite}/properties/${currentQuery}`;
            });
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            observer.disconnect();
        };
        const config = { childList: true, subtree: true };
        const observer = new MutationObserver(callback);
        observer.observe(heroSearchBar, config);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initSearchDropdown);


/***/ }),

/***/ "./assets/js/modules/ShareCurrentUrl.ts":
/*!**********************************************!*\
  !*** ./assets/js/modules/ShareCurrentUrl.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   initShareCurrentUrl: () => (/* binding */ initShareCurrentUrl)
/* harmony export */ });
const initShareCurrentUrl = () => {
    const shareButtons = document.querySelectorAll('.b-shareCurrentUrl');
    shareButtons.forEach((el) => {
        el.addEventListener('click', () => {
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() => {
                // eslint-disable-next-line no-alert
                alert('Copied to clipbaord');
            });
        });
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initShareCurrentUrl);


/***/ }),

/***/ "./assets/js/modules/SwiperCarousels.ts":
/*!**********************************************!*\
  !*** ./assets/js/modules/SwiperCarousels.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


/**
 * Loop through all of our swiper elements and instantiate a new Swiper instance
 * - Passing options etc through data attributes in twig
 */
function init() {
    const logCarousels = false;
    const swiperElements = document.querySelectorAll('[data-swiper]');
    if (!swiperElements.length)
        return;
    swiperElements.forEach((swiperEl, index) => {
        const swiperUuid = swiperEl.dataset.swiper;
        const swiperSelector = `[data-swiper="${swiperUuid}"]`;
        const swiperOptions = JSON.parse(swiperEl.dataset.swiperOptions);
        // Check if thumbnails swiper element exists
        const thumbsElement = document.querySelector(`[data-thumbs="${swiperUuid}"]`);
        const hasThumbs = thumbsElement !== null;
        let thumbsSwiper = null;
        if (hasThumbs) {
            thumbsSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](`[data-thumbs="${swiperUuid}"]`, {
                modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Thumbs],
                spaceBetween: 10,
                slidesPerView: 4,
                freeMode: true,
                watchSlidesProgress: true
            });
        }
        const swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](swiperSelector, Object.assign({ modules: [
                swiper_modules__WEBPACK_IMPORTED_MODULE_1__.A11y,
                swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Autoplay,
                swiper_modules__WEBPACK_IMPORTED_MODULE_1__.EffectFade,
                swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Mousewheel,
                swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation,
                swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination,
                swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Thumbs
            ], keyboard: {
                enabled: true
            }, navigation: {
                nextEl: `[data-next="${swiperUuid}"]`,
                prevEl: `[data-prev="${swiperUuid}"]`
            }, slidesPerView: 2.5, spaceBetween: 50, threshold: 50, mousewheel: {
                forceToAxis: true
            }, watchSlidesProgress: true, thumbs: {
                swiper: thumbsSwiper
            } }, swiperOptions));
        window.swipers = window.swipers || [];
        window.swipers.push({
            uuid: swiperUuid,
            swiper
        });
        if (window.location.href.includes('dev') && logCarousels) {
            /* eslint-disable no-console */
            console.log(`Swiper Instance #${index}: `, swiper);
            /* eslint-enable no-console */
        }
    });
}


/***/ }),

/***/ "./assets/js/modules/SwitchTemplate.ts":
/*!*********************************************!*\
  !*** ./assets/js/modules/SwitchTemplate.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const initSwitches = () => {
    const switches = document.querySelectorAll('.b-switch');
    if (switches) {
        switches.forEach((el) => {
            el.addEventListener('click', (e) => {
                const target = e.target;
                const switchEl = target.classList.contains('b-switch')
                    ? target
                    : target.parentElement;
                const isOn = switchEl.classList.contains('b-switch--on');
                if (isOn) {
                    switchEl.classList.remove('b-switch--on');
                }
                else {
                    switchEl.classList.add('b-switch--on');
                }
            });
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initSwitches);


/***/ }),

/***/ "./assets/js/modules/Toggle.ts":
/*!*************************************!*\
  !*** ./assets/js/modules/Toggle.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ init)
/* harmony export */ });
const toggleButtons = document.getElementsByClassName('collapse-button');
function slideEl(container) {
    if (!container.classList.contains('b-faq__collapse__item__body--open')) {
        container.classList.add('b-faq__collapse__item__body--open');
        container.style.height = 'auto';
        const height = `${container.clientHeight}px`;
        container.style.height = '0px';
        setTimeout(() => {
            container.style.height = height;
        }, 0);
    }
    else {
        container.style.height = '0px';
        container.addEventListener('transitionend', () => {
            container.classList.remove('b-faq__collapse__item__body--open');
        }, { once: true });
    }
}
function init() {
    if (toggleButtons.length) {
        Array.from(toggleButtons).forEach((el) => {
            el.addEventListener('click', () => {
                const contentId = el.getAttribute('aria-controls');
                const contentEl = document.getElementById(contentId);
                const isExpanded = el.getAttribute('aria-expanded') === 'true';
                el.classList.toggle('b-faq__collapse__item__button--active');
                if (!isExpanded) {
                    contentEl.setAttribute('aria-hidden', 'false');
                    el.setAttribute('aria-expanded', 'true');
                    slideEl(contentEl);
                }
                else {
                    contentEl.setAttribute('aria-hidden', 'true');
                    el.setAttribute('aria-expanded', 'false');
                    slideEl(contentEl);
                }
            });
        });
    }
}


/***/ }),

/***/ "./assets/js/modules/VideoController.ts":
/*!**********************************************!*\
  !*** ./assets/js/modules/VideoController.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   initVideoControllers: () => (/* binding */ initVideoControllers)
/* harmony export */ });
/* harmony import */ var _vimeo_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vimeo/player */ "./node_modules/@vimeo/player/dist/player.es.js");
// Types grabbed from https://www.npmjs.com/package/@types/vimeo__player

const toggleVideoPlay = (videoController, pause) => {
    if (pause) {
        videoController.pause();
        return;
    }
    videoController.play();
};
const initVideoControllers = () => {
    const videoFrames = document.querySelectorAll('.b-videoFrameAutoPlayScroll');
    if (videoFrames && !!window.IntersectionObserver) {
        // Sean: I believe the ratio must be higher than the threshold
        const intersectionRatio = 0.01;
        videoFrames.forEach((frame) => {
            const video = frame.querySelector('video');
            const vimeoIframe = frame.querySelector('.b-vimeoPlayer');
            if (video || vimeoIframe) {
                // Assign correct videoController
                const videoController = vimeoIframe
                    ? new _vimeo_player__WEBPACK_IMPORTED_MODULE_0__["default"](vimeoIframe)
                    : video;
                // const isPaused = vimeoIframe ? videoController.pause : video.pau
                const options = {
                    threshold: 0.001
                };
                // Default Callback for regular video El's
                const videoElCallBack = (entries) => {
                    entries.forEach((entry) => {
                        const pause = entry.intersectionRatio <= intersectionRatio && !video.paused;
                        toggleVideoPlay(videoController, pause);
                    });
                };
                // Callback for vimeo videos contained in iframes
                const vimeoCallBack = (entries) => {
                    entries.forEach((entry) => {
                        videoController.getPaused().then((isPaused) => {
                            const pause = entry.intersectionRatio <= intersectionRatio && !isPaused;
                            toggleVideoPlay(videoController, pause);
                        }
                        // ,(err) => {
                        //   console.log(err);
                        // }
                        );
                    });
                };
                // Assign correct callback
                const callback = vimeoIframe ? vimeoCallBack : videoElCallBack;
                const observer = new IntersectionObserver(callback, options);
                observer.observe(frame);
            }
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initVideoControllers);


/***/ }),

/***/ "./assets/js/modules/index.ts":
/*!************************************!*\
  !*** ./assets/js/modules/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomPagination: () => (/* reexport safe */ _listingSearch__WEBPACK_IMPORTED_MODULE_2__.CustomPagination),
/* harmony export */   CustomSortBy: () => (/* reexport safe */ _listingSearch__WEBPACK_IMPORTED_MODULE_2__.CustomSortBy),
/* harmony export */   acresTemplate: () => (/* reexport safe */ _listingSearch__WEBPACK_IMPORTED_MODULE_2__.acresTemplate),
/* harmony export */   agentListing: () => (/* reexport safe */ _listingSearch__WEBPACK_IMPORTED_MODULE_2__.agentListing),
/* harmony export */   agentsStatsTemplate: () => (/* reexport safe */ _listingSearch__WEBPACK_IMPORTED_MODULE_2__.agentsStatsTemplate),
/* harmony export */   arrowLeftIcon: () => (/* reexport safe */ _templates__WEBPACK_IMPORTED_MODULE_3__.arrowLeftIcon),
/* harmony export */   arrowRightIcon: () => (/* reexport safe */ _templates__WEBPACK_IMPORTED_MODULE_3__.arrowRightIcon),
/* harmony export */   articleCardTemplate: () => (/* reexport safe */ _listingSearch__WEBPACK_IMPORTED_MODULE_2__.articleCardTemplate),
/* harmony export */   buttonTemplate: () => (/* reexport safe */ _templates__WEBPACK_IMPORTED_MODULE_3__.buttonTemplate),
/* harmony export */   checkPropertyPhotos: () => (/* reexport safe */ _listingSearch__WEBPACK_IMPORTED_MODULE_2__.checkPropertyPhotos),
/* harmony export */   currentLocationFailure: () => (/* reexport safe */ _SearchBarDropdown__WEBPACK_IMPORTED_MODULE_4__.currentLocationFailure),
/* harmony export */   currentLocationSuccess: () => (/* reexport safe */ _SearchBarDropdown__WEBPACK_IMPORTED_MODULE_4__.currentLocationSuccess),
/* harmony export */   defaultStatsTemplate: () => (/* reexport safe */ _listingSearch__WEBPACK_IMPORTED_MODULE_2__.defaultStatsTemplate),
/* harmony export */   getName: () => (/* reexport safe */ _listingSearch__WEBPACK_IMPORTED_MODULE_2__.getName),
/* harmony export */   getStatsTemplate: () => (/* reexport safe */ _listingSearch__WEBPACK_IMPORTED_MODULE_2__.getStatsTemplate),
/* harmony export */   getUniquePropertyFeatures: () => (/* reexport safe */ _listingSearch__WEBPACK_IMPORTED_MODULE_2__.getUniquePropertyFeatures),
/* harmony export */   hlnStatsTemplate: () => (/* reexport safe */ _listingSearch__WEBPACK_IMPORTED_MODULE_2__.hlnStatsTemplate),
/* harmony export */   imageTemplate: () => (/* reexport safe */ _templates__WEBPACK_IMPORTED_MODULE_3__.imageTemplate),
/* harmony export */   initCharts: () => (/* reexport safe */ _Charts__WEBPACK_IMPORTED_MODULE_0__.initCharts),
/* harmony export */   initFavoriteProperties: () => (/* reexport safe */ _FavoriteProperties__WEBPACK_IMPORTED_MODULE_1__.initFavoriteProperties),
/* harmony export */   initHeroSearch: () => (/* reexport safe */ _SearchBarDropdown__WEBPACK_IMPORTED_MODULE_4__.initHeroSearch),
/* harmony export */   initListingDropdowns: () => (/* reexport safe */ _listingSearch__WEBPACK_IMPORTED_MODULE_2__.initListingDropdowns),
/* harmony export */   initMapUI: () => (/* reexport safe */ _listingSearch__WEBPACK_IMPORTED_MODULE_2__.initMapUI),
/* harmony export */   initPropertyFaderFavorites: () => (/* reexport safe */ _listingSearch__WEBPACK_IMPORTED_MODULE_2__.initPropertyFaderFavorites),
/* harmony export */   initPropertyFaderMutationObserver: () => (/* reexport safe */ _listingSearch__WEBPACK_IMPORTED_MODULE_2__.initPropertyFaderMutationObserver),
/* harmony export */   initSearchBarMutationObserver: () => (/* reexport safe */ _SearchBarDropdown__WEBPACK_IMPORTED_MODULE_4__.initSearchBarMutationObserver),
/* harmony export */   initSearchDropdown: () => (/* reexport safe */ _SearchBarDropdown__WEBPACK_IMPORTED_MODULE_4__.initSearchDropdown),
/* harmony export */   initSearchDropdowns: () => (/* reexport safe */ _SearchBarDropdown__WEBPACK_IMPORTED_MODULE_4__.initSearchDropdowns),
/* harmony export */   initSearchTypeBtns: () => (/* reexport safe */ _SearchBarDropdown__WEBPACK_IMPORTED_MODULE_4__.initSearchTypeBtns),
/* harmony export */   initShareCurrentUrl: () => (/* reexport safe */ _ShareCurrentUrl__WEBPACK_IMPORTED_MODULE_5__.initShareCurrentUrl),
/* harmony export */   initVideoControllers: () => (/* reexport safe */ _VideoController__WEBPACK_IMPORTED_MODULE_6__.initVideoControllers),
/* harmony export */   initZipSearch: () => (/* reexport safe */ _SearchBarDropdown__WEBPACK_IMPORTED_MODULE_4__.initZipSearch),
/* harmony export */   isPropertyAFavorite: () => (/* reexport safe */ _FavoriteProperties__WEBPACK_IMPORTED_MODULE_1__.isPropertyAFavorite),
/* harmony export */   listingTitle: () => (/* reexport safe */ _listingSearch__WEBPACK_IMPORTED_MODULE_2__.listingTitle),
/* harmony export */   numShowingTemplate: () => (/* reexport safe */ _listingSearch__WEBPACK_IMPORTED_MODULE_2__.numShowingTemplate),
/* harmony export */   openModal: () => (/* reexport safe */ _FavoriteProperties__WEBPACK_IMPORTED_MODULE_1__.openModal),
/* harmony export */   propertyFaderTemplate: () => (/* reexport safe */ _listingSearch__WEBPACK_IMPORTED_MODULE_2__.propertyFaderTemplate),
/* harmony export */   propertyListingCardHln: () => (/* reexport safe */ _listingSearch__WEBPACK_IMPORTED_MODULE_2__.propertyListingCardHln),
/* harmony export */   propertyListingFullCard: () => (/* reexport safe */ _listingSearch__WEBPACK_IMPORTED_MODULE_2__.propertyListingFullCard),
/* harmony export */   propertyListingHalfCard: () => (/* reexport safe */ _listingSearch__WEBPACK_IMPORTED_MODULE_2__.propertyListingHalfCard),
/* harmony export */   propertyListingNoResults: () => (/* reexport safe */ _listingSearch__WEBPACK_IMPORTED_MODULE_2__.propertyListingNoResults),
/* harmony export */   propertyTableRow: () => (/* reexport safe */ _listingSearch__WEBPACK_IMPORTED_MODULE_2__.propertyTableRow),
/* harmony export */   renderSortBy: () => (/* reexport safe */ _listingSearch__WEBPACK_IMPORTED_MODULE_2__.renderSortBy),
/* harmony export */   savedPropertyAsFavorite: () => (/* reexport safe */ _FavoriteProperties__WEBPACK_IMPORTED_MODULE_1__.savedPropertyAsFavorite),
/* harmony export */   spriteIcon: () => (/* reexport safe */ _templates__WEBPACK_IMPORTED_MODULE_3__.spriteIcon),
/* harmony export */   styledPriceTemplate: () => (/* reexport safe */ _templates__WEBPACK_IMPORTED_MODULE_3__.styledPriceTemplate),
/* harmony export */   unmountPropertyFaderFavorites: () => (/* reexport safe */ _listingSearch__WEBPACK_IMPORTED_MODULE_2__.unmountPropertyFaderFavorites)
/* harmony export */ });
/* harmony import */ var _Charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Charts */ "./assets/js/modules/Charts.ts");
/* harmony import */ var _FavoriteProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FavoriteProperties */ "./assets/js/modules/FavoriteProperties.ts");
/* harmony import */ var _listingSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listingSearch */ "./assets/js/modules/listingSearch/index.ts");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates */ "./assets/js/modules/templates/index.ts");
/* harmony import */ var _SearchBarDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchBarDropdown */ "./assets/js/modules/SearchBarDropdown.ts");
/* harmony import */ var _ShareCurrentUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShareCurrentUrl */ "./assets/js/modules/ShareCurrentUrl.ts");
/* harmony import */ var _VideoController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VideoController */ "./assets/js/modules/VideoController.ts");









/***/ }),

/***/ "./assets/js/modules/listingSearch/AgentListingTemplate.ts":
/*!*****************************************************************!*\
  !*** ./assets/js/modules/listingSearch/AgentListingTemplate.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   agentListing: () => (/* binding */ agentListing),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates */ "./assets/js/modules/templates/index.ts");
/* harmony import */ var _templates_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/Button */ "./assets/js/modules/templates/Button.ts");
/* harmony import */ var _utils_GetSiteHandle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/GetSiteHandle */ "./assets/js/utils/GetSiteHandle.ts");



const phoneLink = (phoneNumber, iconName) => {
    if (!phoneNumber || phoneNumber === 'N/A') {
        return '';
    }
    const numbers = phoneNumber.split('.').join('');
    return /* html */ `
  <a href='tel:1${numbers}'>
    ${(0,_templates__WEBPACK_IMPORTED_MODULE_0__.spriteIcon)(iconName, 'u-t-color-core-secondary')}
    <span class='u-t-color-grayscale-primary-500'>${phoneNumber}</span>
  </a>
  `;
};
const agentListing = ({ cellPhone, email, firstName, lastName, officePhone, photo, url, title, designation }) => {
    const officePhoneEl = phoneLink(officePhone, 'phone');
    const cellPhoneEl = phoneLink(cellPhone, 'cellphone');
    const siteHandle = (0,_utils_GetSiteHandle__WEBPACK_IMPORTED_MODULE_2__.getSiteHandle)();
    const contactLabel = siteHandle === 'huntingLeaseNetwork' ? 'Email Rep' : 'Contact';
    const getTitle = siteHandle === 'huntingLeaseNetwork' ? designation : title;
    const userTitleEl = getTitle ? `<p>${getTitle}</p>` : '';
    return /* html */ `
  <div class='b-agentListing | c-cluster'>
    <div class='b-agentListing__image c-frame c-frame--aspect-1-1'>
      <a href='${url}'>
        <img src='${photo}' />
      </a>
    </div>
    <div class='b-agentListing__content | c-flow'>
      <div>
        <div class='c-flow'>
          <h3 class='b-agentListing__name | u-weight-demi'>${firstName} ${lastName}</h3>
          ${userTitleEl}
        </div>
        <div class='b-agentListing__phones c-flow'>
        </div>
      </div>
      <div class='c-repel'>
        ${cellPhoneEl}
        ${officePhoneEl}
      </div>
      <div class='c-repel'>
        ${(0,_templates_Button__WEBPACK_IMPORTED_MODULE_1__.buttonTemplate)({
        tagType: 'a',
        className: `b-agentListing__viewProfile | b-button--primary b-button--with-icon | c-withIcon`,
        href: url,
        content: 'Profile',
        iconName: 'arrow-right'
    })}
        ${(0,_templates_Button__WEBPACK_IMPORTED_MODULE_1__.buttonTemplate)({
        tagType: 'a',
        className: `b-button | b-button--primary b-button--clear b-button--with-icon b-button--clearHover`,
        href: `mailto:${email}`,
        iconName: 'arrow-right',
        content: contactLabel
    })}
      </div>
    </div>
  </div>`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (agentListing);


/***/ }),

/***/ "./assets/js/modules/listingSearch/ArticleCardTemplate.ts":
/*!****************************************************************!*\
  !*** ./assets/js/modules/listingSearch/ArticleCardTemplate.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   articleCardTemplate: () => (/* binding */ articleCardTemplate),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates */ "./assets/js/modules/templates/index.ts");

const articleCardTemplate = ({ image, publishedDate, teaserText, title, url, category }) => {
    return /* html */ `
    <a href='${url}' class='b-anchorComplex'>
      <article class='b-articleCard | c-flow'>
        <div class='c-frame c-frame--aspect-4-3 c-withLayer'>
          <img src='${image}' />
          <div class='c-layer'>
            <div class='hoverBar hoverBar--top'></div>
          </div>
        </div>
        <div class='c-repel'>
          <p class='u-t-color-core-primary-500 u-tt-upper u-weight-extra-bold u-text-0'>
            ${category}
          </p>
          <p class='u-t-color-grayscale-primary-500 u-tt-upper u-weight-extra-bold u-text-0'>
            <time>${publishedDate}</time>
          </p>
        </div>
        <h3 class='headline | u-t-color-core-primary u-text-2 u-weight-extra-bold'>${title}</h3>
        <div class='u-t-color-core-tertiary'>${teaserText}</div>
        <div class='u-gap-top-300 u-gap-bottom-400 sm:u-gap-bottom-300 md:u-gap-top-500 md:u-gap-bottom-0'>
          <button class='b-button b-anchorComplex b-button--clear b-button--primary b-button--with-icon | c-withIcon b-button--clearHover u-pad-block-0'>
            <span class='b-button__text | u-tt-upper | u-pad-right-300'>Read More</span>
            ${(0,_templates__WEBPACK_IMPORTED_MODULE_0__.spriteIcon)('arrow-right')}
          </button>
        </div>
      </article>
    </a>
  `;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (articleCardTemplate);


/***/ }),

/***/ "./assets/js/modules/listingSearch/CustomPagination.ts":
/*!*************************************************************!*\
  !*** ./assets/js/modules/listingSearch/CustomPagination.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomPagination: () => (/* binding */ CustomPagination),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var instantsearch_js_es_connectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! instantsearch.js/es/connectors */ "./node_modules/instantsearch.js/es/connectors/pagination/connectPagination.js");

const arrayFromNumber = (length, offset = 0) => {
    return Array.from({ length }, (_, index) => index + offset);
};
const getDisplayPagesArray = (pages, numOfHits, activePageIndex) => {
    /**
     * Creating a Custom pagination page numbers array
     *
     * Step 1: Get the UI for the hits per page
     */
    const hitsPerPageUI = document.querySelector('.ais-HitsPerPage-select');
    if (hitsPerPageUI) {
        const pagesShown = 5;
        /**
         * Step 2: Get the active value
         * This function is rerun when the hitsper page is updated, so no need
         * for an event listener or watcher.
         */
        const { selectedIndex } = hitsPerPageUI;
        const hitsPerPageValue = parseInt(hitsPerPageUI.options[selectedIndex].value, 10);
        // Step 3: utilize nbHits to figue out how many pages should exist
        const numOfPages = Math.ceil(numOfHits / hitsPerPageValue);
        const numOfPagesIndex = numOfPages - 1;
        // Step 4: Check if number of pages is lower than what should be shown (5). If it is return just the number of pages as an array.
        if (numOfPages < 5) {
            return arrayFromNumber(numOfPages);
        }
        /**
         * Step 5: Control the output array, ensuring to check how close the active page is to
         * the bounds of the number of pages array
         */
        // If near low bound
        if (activePageIndex < 3) {
            /**
             * If the page is #3 (index 2) or below, send back the first 5 items.
             */
            return arrayFromNumber(pagesShown);
        }
        // If near high bound
        if (activePageIndex > numOfPagesIndex - 3) {
            /**
             * If within 3 return the last 5 items as an array
             * Ex: 15 pages, for page 13, 14, 15. Or indexes 12,13,14
             * We just want the last 5 items.
             */
            return arrayFromNumber(pagesShown, numOfPages - pagesShown);
        }
        /**
         * If not near bounds simply return an array of numbers with a length
         * equal to the desired num of pages shown, with an offset equal to the active
         * page index - the padding (a static value of 2).
         */
        return arrayFromNumber(pagesShown, activePageIndex - 2);
    }
    /**
     * Add regular pages as a fall back
     */
    return pages;
};
// Create the render function
const renderPagination = (renderOptions) => {
    const { pages, currentRefinement, isFirstPage, isLastPage, refine, createURL, nbHits } = renderOptions;
    /**
     * Ensuring 5 pages are always displayed for the pagination component
     *
     * [@seandepottey]:
     * I dug through the instant meilisearch library to see exactly how pages array was set.
     * Essentially they're coming from the results, and I'm not sure we'll have luck
     * with either an existing setting in instantsearch / instantmeilisearch that will properly
     * control the number of buttons. A possible alternative is upgrading instantmeilisearch,
     * but that will would also mean we likely have to update the meilisearch version,
     * which seems costly.
     *
     * The render options can be overridden here. Or rather we can use some of the others provided to
     * recreate some of the same functionality that the connector function is doing but for our needs.
     *
     * Vars included in `renderOptions`
     * nbHits (number): The total number of hits, this has been uppped to 2.5k and as long as that number isn't exceeded this should work. It could likely account for going over as well, but not sure it's worth the investment of time right now.
     * currentRefinement (number:index): This is the index of the active page
     *
     * pages (number[]): This is an array of numbers that would control which pages would display. But does not behaive how we want it to. Could also reach into UI, since I believe it may be a select and get active value directly out of there.
     */
    const pageNumbersArray = getDisplayPagesArray(pages, nbHits, currentRefinement);
    const container = document.querySelector('#pagination');
    container.innerHTML = /* html */ `
    <div class="b-listingPagination__divider"></div>

    <ul class="b-listingPagination__main">
      ${isFirstPage
        ? /* html */ `
      <li class="ais-Pagination-item ais-Pagination-item--disabled">
        <span class="ais-Pagination-link">
          <svg class='b-icon u-box-flex'>
            <use href='/svg/sprite.svg#arrow-left'></use>
          </svg>
        </span>
      </li>
      `
        : /* html */ `
      <li class="ais-Pagination-item">
        <a href="${createURL(currentRefinement - 1)}" data-value="${currentRefinement - 1}" class="ais-Pagination-link">
          <svg class='b-icon u-box-flex'>
            <use href='/svg/sprite.svg#arrow-left'></use>
          </svg>
        </a>
      </li>
      `}

      ${pageNumbersArray
        .map((page) => /* html */ `
            <li class="ais-Pagination-item ${currentRefinement === page ? 'ais-Pagination-item--selected' : ''}">
              <a
                class="ais-Pagination-link"
                href="${createURL(page)}"
                data-value="${page}"
              >
                ${page + 1}
              </a>
            </li>
          `)
        .join('')}

      ${isLastPage
        ? /* html */ `
      <li class="ais-Pagination-item ais-Pagination-item--disabled">
        <span class="ais-Pagination-link">
          <svg class='b-icon u-box-flex'>
            <use href='/svg/sprite.svg#arrow-right'></use>
          </svg>
        </span>
      </li>
      `
        : /* html */ `
      <li class="ais-Pagination-item">
        <a href="${createURL(currentRefinement + 1)}" data-value="${currentRefinement + 1}" class="ais-Pagination-link">
          <svg class='b-icon u-box-flex'>
            <use href='/svg/sprite.svg#arrow-right'></use>
          </svg>
        </a>
      </li>
      `}
    </ul>

    <div class="b-listingPagination__divider"></div>

    <ul class="b-listingPagination__arrows">
      ${isFirstPage
        ? /* html */ `
      <li class="ais-Pagination-item ais-Pagination-item--prevPage ais-Pagination-item--disabled">
        <span class="ais-Pagination-link">
          <svg class='b-icon u-box-flex'>
            <use href='/svg/sprite.svg#arrow-left'></use>
          </svg>
        </span>
      </li>
      `
        : /* html */ `
      <li class="ais-Pagination-item ais-Pagination-item--prevPage">
        <a href="${createURL(currentRefinement - 1)}" data-value="${currentRefinement - 1}" class="ais-Pagination-link">
          <svg class='b-icon u-box-flex'>
            <use href='/svg/sprite.svg#arrow-left'></use>
          </svg>
        </a>
      </li>
      `}

      ${isLastPage
        ? /* html */ `
      <li class="ais-Pagination-item ais-Pagination-item--nextPage ais-Pagination-item--disabled">
        <span class="ais-Pagination-link">
          <svg class='b-icon u-box-flex'>
            <use href='/svg/sprite.svg#arrow-right'></use>
          </svg>
        </span>
      </li>
      `
        : /* html */ `
      <li class="ais-Pagination-item ais-Pagination-item--nextPage">
        <a href="${createURL(currentRefinement + 1)}" data-value="${currentRefinement + 1}" class="ais-Pagination-link">
          <svg class='b-icon u-box-flex'>
            <use href='/svg/sprite.svg#arrow-right'></use>
          </svg>
        </a>
      </li>
      `}
    </ul>
  `;
    [...container.querySelectorAll('a')].forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            const target = event.currentTarget;
            if (target)
                refine(target.dataset.value);
        });
    });
};
// Create the custom widget
const CustomPagination = (0,instantsearch_js_es_connectors__WEBPACK_IMPORTED_MODULE_0__["default"])(renderPagination);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomPagination);


/***/ }),

/***/ "./assets/js/modules/listingSearch/CustomSortBy.ts":
/*!*********************************************************!*\
  !*** ./assets/js/modules/listingSearch/CustomSortBy.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomSortBy: () => (/* binding */ CustomSortBy),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   renderSortBy: () => (/* binding */ renderSortBy)
/* harmony export */ });
/* harmony import */ var instantsearch_js_es_connectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! instantsearch.js/es/connectors */ "./node_modules/instantsearch.js/es/connectors/sort-by/connectSortBy.js");

const renderSortBy = (renderOptions, isFirstRender) => {
    const { 
    // canRefine, // See note starting on line 62
    currentRefinement, options, refine, widgetParams } = renderOptions;
    if (isFirstRender) {
        const select = document.createElement('select');
        select.addEventListener('change', (event) => {
            // Refine with the <select> value
            refine(event.target.value);
        });
        // Add cssClasses to respective elements
        if (widgetParams === null || widgetParams === void 0 ? void 0 : widgetParams.cssClasses) {
            select.setAttribute('class', widgetParams.cssClasses.select);
            select.querySelectorAll('option').forEach((option) => {
                option.setAttribute('class', widgetParams.cssClasses.option);
            });
            widgetParams.container.setAttribute('class', widgetParams.cssClasses.root);
        }
        widgetParams.container.appendChild(select);
        // Let's also sort|refine the results by default, if there is one
        const defaultOption = options.filter((option) => option.isDefault)[0];
        if (defaultOption) {
            refine(defaultOption.value);
        }
    }
    const select = widgetParams.container.querySelector('select');
    select.setAttribute('class', 'u-text-base u-weight-bold u-t-color-neutrals-primary-500');
    /**
     * Strange issue where canRefine isn't within the SortByRenderState
     * But it works on NWO so just ignoring this on FNC and never letting it be disabled
     */
    // select.disabled = !canRefine;
    select.innerHTML = `
    ${options
        .map((option) => `
          <option
            value="${option.value}"
            data-tracking-value="${option.label}"
            ${option.value === currentRefinement ? 'selected' : ''}
          >
            ${option.label}
          </option>
        `)
        .join('')}
  `;
};
const CustomSortBy = (0,instantsearch_js_es_connectors__WEBPACK_IMPORTED_MODULE_0__["default"])(renderSortBy);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomSortBy);


/***/ }),

/***/ "./assets/js/modules/listingSearch/ListingTypeRefinementList.ts":
/*!**********************************************************************!*\
  !*** ./assets/js/modules/listingSearch/ListingTypeRefinementList.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var instantsearch_js_es_connectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! instantsearch.js/es/connectors */ "./node_modules/instantsearch.js/es/connectors/refinement-list/connectRefinementList.js");

/**
 * ListingType Refinement List (Custom UI)
 *
 * @see https://www.algolia.com/doc/api-reference/widgets/refinement-list/js/#create-a-render-function
 */
const renderRefinementList = (renderOptions, isFirstRender) => {
    const { refine, createURL, widgetParams } = renderOptions;
    if (isFirstRender) {
        const ul = document.createElement('ul');
        ul.setAttribute('role', 'list');
        ul.setAttribute('class', 'ais-RefinementList | u-text-0');
        widgetParams.container.appendChild(ul);
    }
    // Get currentRefinements from existing elements
    const currentRefinements = Array.from(document.querySelectorAll('.ais-CurrentRefinements-categoryLabel')).map((item) => item.textContent);
    const allListingsEnabled = currentRefinements.includes('All Listing Types');
    const allAuctionsEnabled = currentRefinements.includes('All Auctions');
    // Render list items markup, always same order
    widgetParams.container.querySelector('ul').innerHTML = `
    <li>
      <a
        href="${createURL('All Listing Types')}"
        data-value="${'All Listing Types'}"
        class="${allListingsEnabled ? 'active' : ''}"
      >
        <input
          type="checkbox"
          class="ais-RefinementList-checkbox"
          ${allListingsEnabled ? 'checked' : ''}
        > All Listing Types
      </a>
    </li>

    <li>
      <a
        href="${createURL('For sale')}"
        data-value="${'For sale'}"
        class="${allListingsEnabled ? 'parent-enabled' : ''}"
      >
        <input
          type="checkbox"
          class="ais-RefinementList-checkbox"
          ${currentRefinements.includes('For sale') || allListingsEnabled
        ? 'checked'
        : ''}
        > For Sale
      </a>
    </li>

    <li class="hasSublist active">
      <a
        href="${createURL('All Auctions')}"
        data-value="${'All Auctions'}"
        class="${allListingsEnabled ? 'parent-enabled' : ''}"
      >
        <input
          type="checkbox"
          class="ais-RefinementList-checkbox"
          ${allAuctionsEnabled || allListingsEnabled ? 'checked' : ''}
        > All Auctions
      </a>

      <button class="sublistTrigger"><svg class='b-icon'><use href='/svg/sprite.svg#chevron-up'></use></svg></button>

      <ul role="list">
        <li>
          <a
            href="${createURL('In-Person Auction')}"
            data-value="${'In-Person Auction'}"
            class="${allListingsEnabled || allAuctionsEnabled ? 'parent-enabled' : ''}"
          >
            <input
              type="checkbox"
              class="ais-RefinementList-checkbox"
              ${currentRefinements.includes('In-Person Auction') ||
        allAuctionsEnabled ||
        allListingsEnabled
        ? 'checked'
        : ''}
            > In-Person Auction
          </a>
        </li>

        <li>
          <a
            href="${createURL('Online Auction')}"
            data-value="${'Online Auction'}"
            class="${allListingsEnabled || allAuctionsEnabled ? 'parent-enabled' : ''}"
          >
            <input
              type="checkbox"
              class="ais-RefinementList-checkbox"
              ${currentRefinements.includes('Online Auction') ||
        allAuctionsEnabled ||
        allListingsEnabled
        ? 'checked'
        : ''}
            > Online Auction
          </a>
        </li>

        <li>
          <a
            href="${createURL('Simulcast Auction')}"
            data-value="${'Simulcast Auction'}"
            class="${allListingsEnabled || allAuctionsEnabled ? 'parent-enabled' : ''}"
          >
            <input
              type="checkbox"
              class="ais-RefinementList-checkbox"
              ${currentRefinements.includes('Simulcast Auction') ||
        allAuctionsEnabled ||
        allListingsEnabled
        ? 'checked'
        : ''}
            > Simulcast Auction
          </a>
        </li>

        <li>
          <a
            href="${createURL('For Sale by Bid')}"
            data-value="${'For Sale by Bid'}"
            class="${allListingsEnabled || allAuctionsEnabled ? 'parent-enabled' : ''}"
          >
            <input
              type="checkbox"
              class="ais-RefinementList-checkbox"
              ${currentRefinements.includes('For Sale by Bid') ||
        allAuctionsEnabled ||
        allListingsEnabled
        ? 'checked'
        : ''}
            > For Sale by Bid
          </a>
        </li>
      </ul>
    </li>
  `;
    [...widgetParams.container.querySelectorAll('a')].forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            refine(event.currentTarget.dataset.value);
        });
    });
    [
        ...widgetParams.container.querySelectorAll('.hasSublist button.sublistTrigger')
    ].forEach((trigger) => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const parentListItem = e.currentTarget.parentNode;
            parentListItem.classList.toggle('active');
        });
    });
};
const listingTypeRefinementList = (0,instantsearch_js_es_connectors__WEBPACK_IMPORTED_MODULE_0__["default"])(renderRefinementList);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listingTypeRefinementList);


/***/ }),

/***/ "./assets/js/modules/listingSearch/ListingsDropdown.ts":
/*!*************************************************************!*\
  !*** ./assets/js/modules/listingSearch/ListingsDropdown.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initListingDropdowns: () => (/* binding */ initListingDropdowns)
/* harmony export */ });
/* harmony import */ var _utils_QueryParents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/QueryParents */ "./assets/js/utils/QueryParents.ts");

// Sean: This viewport logic should be moved into utils eventually
// const isInViewPort = (el: HTMLElement) => {
//   const rect = el.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// };
const viewPortCenter = (el) => {
    const rect = el.getBoundingClientRect();
    return ((window.innerWidth || document.documentElement.clientWidth) / 2 - rect.left);
};
const isInViewPortRightEdge = (el) => {
    const rect = el.getBoundingClientRect();
    return (rect.right <=
        (window.innerWidth || document.documentElement.clientWidth) - 15);
};
const isInViewPortLeftEdge = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.left >= 0;
};
const initListingDropdowns = () => {
    const listingDropdowns = document.querySelectorAll('.b-listingDropdown');
    const closeDropdowns = (wrappingElement) => {
        const searchedEl = wrappingElement || document;
        const relevantDropdowns = searchedEl.querySelectorAll('.b-listingDropdown');
        relevantDropdowns.forEach((el) => {
            if (el.classList.contains('open')) {
                el.classList.remove('open');
            }
        });
    };
    if (listingDropdowns) {
        listingDropdowns.forEach((el) => {
            const select = el.querySelector('.b-listingDropdown__select');
            select.addEventListener('click', () => {
                const wrapper = select.parentElement;
                const content = wrapper.querySelector('.b-listingDropdown__content');
                if (wrapper.classList.contains('open')) {
                    wrapper.classList.remove('open');
                }
                else {
                    const parent = (0,_utils_QueryParents__WEBPACK_IMPORTED_MODULE_0__.queryParents)(wrapper, 'b-listingDropdown');
                    closeDropdowns(parent);
                    wrapper.classList.add('open');
                    // #region - Placement Logic
                    // This can be moved to it's own function and run on resize as well.
                    wrapper.classList.remove('b-listingDropdown--alignRight');
                    content.style.removeProperty('left');
                    wrapper.classList.remove('b-listingDropdown--alignCenter');
                    const withInRightEdge = isInViewPortRightEdge(content);
                    if (!withInRightEdge) {
                        wrapper.classList.add('b-listingDropdown--alignRight');
                        const withInLeftEdge = isInViewPortLeftEdge(content);
                        if (!withInLeftEdge) {
                            wrapper.classList.remove('b-listingDropdown--alignRight');
                            content.style.left = `${viewPortCenter(wrapper)}px`;
                            wrapper.classList.add('b-listingDropdown--alignCenter');
                        }
                    }
                    // #endregion - Placement Logic
                }
            });
            const content = el.querySelector('.b-listingDropdown__content');
            content.addEventListener('click', () => {
                closeDropdowns(content);
            });
            const controls = el.querySelector('.b-listingDropdown__controls');
            if (controls) {
                const doneButton = el.querySelector('.b-listingDropdown__doneBtn');
                // const resetButton:HTMLElement = el.querySelector('.b-listingDropdown__resetBtn');
                doneButton.addEventListener('click', () => {
                    const rangeSubmit = el.querySelector('.ais-RangeInput-submit');
                    if (rangeSubmit) {
                        rangeSubmit.click();
                    }
                    el.classList.remove('open');
                });
            }
            el.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        });
        window.addEventListener('click', (e) => {
            const el = e.target;
            // There's a better way to loop through this here then to have a click on the content but I can't think of the best way right now.
            // const parent = queryParents(el, 'b-listingDropdown');
            const isDropdown = el.matches('.b-listingDropdown__select') ||
                el.matches('.b-listingDropdown__content');
            if (!isDropdown) {
                const dropdowns = document.querySelectorAll('.b-listingDropdown');
                dropdowns.forEach((dropdown) => {
                    if (dropdown.classList.contains('open')) {
                        dropdown.classList.remove('open');
                    }
                });
            }
        });
        window.addEventListener('resize', () => {
            closeDropdowns();
        });
    }
};
// eslint-disable-next-line import/prefer-default-export



/***/ }),

/***/ "./assets/js/modules/listingSearch/MapUI.ts":
/*!**************************************************!*\
  !*** ./assets/js/modules/listingSearch/MapUI.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   initMapUI: () => (/* binding */ initMapUI)
/* harmony export */ });
/* harmony import */ var _leafletWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leafletWidget */ "./assets/js/modules/listingSearch/leafletWidget.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const showMap = (
// halfListings: HTMLElement,
// fullListings: HTMLElement,
map) => {
    /**
     * Not using half/full cards anymore, always full cards. But leaving in-tact in case that changes
     */
    // halfListings.classList.remove('u-box-hidden');
    // fullListings.classList.add('u-box-hidden');
    // refresh map
    if (window.currentMap)
        window.currentMap.invalidateSize();
    map.classList.remove('u-box-hidden');
    // for some reason needs to be refreshed again
    if (window.currentMap)
        window.currentMap.invalidateSize();
};
const hideMap = (
// halfListings: HTMLElement,
// fullListings: HTMLElement,
map) => {
    /**
     * Not using half/full cards anymore, always full cards. But leaving in-tact in case that changes
     */
    // halfListings.classList.add('u-box-hidden');
    // fullListings.classList.remove('u-box-hidden');
    map.classList.add('u-box-hidden');
};
const toggleMap = (showMapUI) => {
    const map = document.querySelector('.listingMapColumn');
    // const halfListings: HTMLElement = document.querySelector('#listings');
    // const fullListings: HTMLElement = document.querySelector('#listingsFull');
    if (showMapUI) {
        showMap(map);
        // showMap(halfListings, fullListings, map);
    }
    else {
        hideMap(map);
        // hideMap(halfListings, fullListings, map);
    }
};
function updateMapToggle(mapIsClosed) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = document.querySelector('[name="CRAFT_CSRF_TOKEN"]');
        const params = {
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                showMap: mapIsClosed,
                CRAFT_CSRF_TOKEN: token.value
            }),
            method: 'POST'
        };
        const mapToggleResponse = yield fetch('/api/v1/properties/save-map-toggle', params)
            .then((res) => res.json())
            .then((data) => {
            if (data) {
                return true;
            }
            return false;
        })
            .catch(() => {
            return false;
        });
        return mapToggleResponse;
    });
}
const initMapUI = (mapToggle) => {
    const mapToggleButton = document.querySelector('#mapToggleButton');
    if (mapToggleButton) {
        mapToggleButton.addEventListener('click', () => {
            const map = document.querySelector('.listingMapColumn');
            const mapIsClosed = map.classList.contains('u-box-hidden');
            updateMapToggle(mapIsClosed);
            toggleMap(mapIsClosed);
        });
        toggleMap(mapToggle);
    }
    return (0,_leafletWidget__WEBPACK_IMPORTED_MODULE_0__["default"])({
        container: document.querySelector('#map'),
        initialZoom: 15
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initMapUI);


/***/ }),

/***/ "./assets/js/modules/listingSearch/PropertyFader.ts":
/*!**********************************************************!*\
  !*** ./assets/js/modules/listingSearch/PropertyFader.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   initPropertyFaderFavorites: () => (/* binding */ initPropertyFaderFavorites),
/* harmony export */   initPropertyFaderMutationObserver: () => (/* binding */ initPropertyFaderMutationObserver),
/* harmony export */   propertyFaderTemplate: () => (/* binding */ propertyFaderTemplate),
/* harmony export */   unmountPropertyFaderFavorites: () => (/* binding */ unmountPropertyFaderFavorites)
/* harmony export */ });
/* harmony import */ var _FavoriteProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FavoriteProperties */ "./assets/js/modules/FavoriteProperties.ts");
/* harmony import */ var _ImageFader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ImageFader */ "./assets/js/modules/ImageFader.ts");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates */ "./assets/js/modules/templates/index.ts");



// This component has a twig version in the basic card
// It may be better named without alluding to properties
const propertyFaderTemplate = (propertyId, images) => {
    if (!images || images.length === 0)
        return '';
    return /* html */ `
  <div class='b-propertyFader | c-frame c-withLayer | c-frame--aspect-1-1 | u-width-100'>
    <div class='c-frame c-wtih-layer'>
      ${(0,_ImageFader__WEBPACK_IMPORTED_MODULE_1__.imageFaderTemplate)(images)}
      <div class='c-layer | u-box-flex u-flex-justify-end'>
        <div class='b-propertyFader__faderControls | c-box | u-box-flex u-flex-dir-column u-flex-justify-between'>
          <button class='b-favoritePropertyToggle b-star' data-property-id='${propertyId}' data-favorite-property-toggle>
            ${(0,_templates__WEBPACK_IMPORTED_MODULE_2__.spriteIcon)('star')}
          </button>
          <div class='b-pill | c-withIcon c-box'>
            ${(0,_templates__WEBPACK_IMPORTED_MODULE_2__.spriteIcon)('camera')}
            <p>${images.length}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};
// Runs after instantsearch UI is created it enables
// favorite a property button functionality and
// Set's the default state of the button
const initPropertyFaderFavorites = () => {
    const propertyFaderFavButtons = document.querySelectorAll('.b-favoritePropertyToggle');
    if (!propertyFaderFavButtons.length)
        return;
    (0,_FavoriteProperties__WEBPACK_IMPORTED_MODULE_0__.initFavoriteProperties)();
    const propertyListings = document.querySelectorAll('.b-propertyListing');
    propertyListings.forEach((listing) => {
        const favButton = listing.querySelector('[data-property-id]');
        const { propertyId } = favButton.dataset;
        (0,_FavoriteProperties__WEBPACK_IMPORTED_MODULE_0__.isPropertyAFavorite)(propertyId).then((isFav) => {
            if (isFav) {
                favButton.classList.add('b-favoritePropertyToggle--active');
            }
        });
    });
};
const unmountPropertyFaderFavorites = () => {
    const propertyFaderFavButtons = document.querySelectorAll('.b-favoritePropertyToggle');
    if (!propertyFaderFavButtons.length)
        return;
    // const favoriteFunction = USER.isLoggedIn
    const userIsLoggedIn = sessionStorage.getItem('userLoginStatus') === 'true' || false;
    const favoriteFunction = userIsLoggedIn ? _FavoriteProperties__WEBPACK_IMPORTED_MODULE_0__.savedPropertyAsFavorite : _FavoriteProperties__WEBPACK_IMPORTED_MODULE_0__.openModal;
    propertyFaderFavButtons.forEach((buttonEl) => {
        buttonEl.removeEventListener('click', favoriteFunction);
    });
};
const initPropertyFaderMutationObserver = (targetEl) => {
    // Not sure that this is actually the best place to check now.
    const callback = (mutationList) => {
        mutationList.forEach((mutation) => {
            const { target } = mutation;
            const el = target;
            // The image fader might change
            const isFaderChange = el.classList.contains('b-imageFader');
            if (!isFaderChange) {
                (0,_ImageFader__WEBPACK_IMPORTED_MODULE_1__.unmountImageFaders)();
                (0,_ImageFader__WEBPACK_IMPORTED_MODULE_1__.initImageFader)();
                unmountPropertyFaderFavorites();
                initPropertyFaderFavorites();
            }
        });
    };
    const targetNode = document.querySelector(targetEl);
    if (targetNode) {
        const config = { childList: true, subtree: true };
        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (propertyFaderTemplate);


/***/ }),

/***/ "./assets/js/modules/listingSearch/PropertyFeatures.ts":
/*!*************************************************************!*\
  !*** ./assets/js/modules/listingSearch/PropertyFeatures.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUniquePropertyFeatures: () => (/* binding */ getUniquePropertyFeatures)
/* harmony export */ });
/* harmony import */ var meilisearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! meilisearch */ "./node_modules/meilisearch/dist/bundles/meilisearch.umd.js");
/* harmony import */ var meilisearch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(meilisearch__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const client = new meilisearch__WEBPACK_IMPORTED_MODULE_0__.MeiliSearch({
    host: "https://search.farmersnational.com",
    apiKey: "acY.zmKWCX494Umh"
});
const index = client.index('huntingLeaseNetwork_auctions');
function getUniquePropertyFeatures() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Fetch all documents, limiting fields to only `propertyFeatures`
            const { hits } = yield index.search('', {
                attributesToRetrieve: ['propertyFeatures']
            });
            // Use a Set to store unique feature values
            const features = new Set();
            hits.forEach((hit) => {
                if (Array.isArray(hit.propertyFeatures)) {
                    hit.propertyFeatures.forEach((feature) => features.add(feature));
                }
            });
            return Array.from(features).sort();
        }
        catch (error) {
            console.error('Error fetching unique property features:', error);
            return [];
        }
    });
}


/***/ }),

/***/ "./assets/js/modules/listingSearch/PropertyListingTemplates.ts":
/*!*********************************************************************!*\
  !*** ./assets/js/modules/listingSearch/PropertyListingTemplates.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   acresTemplate: () => (/* binding */ acresTemplate),
/* harmony export */   checkPropertyPhotos: () => (/* binding */ checkPropertyPhotos),
/* harmony export */   listingTitle: () => (/* binding */ listingTitle),
/* harmony export */   propertyListingCardHln: () => (/* binding */ propertyListingCardHln),
/* harmony export */   propertyListingFullCard: () => (/* binding */ propertyListingFullCard),
/* harmony export */   propertyListingHalfCard: () => (/* binding */ propertyListingHalfCard),
/* harmony export */   propertyListingNoResults: () => (/* binding */ propertyListingNoResults),
/* harmony export */   propertyTableRow: () => (/* binding */ propertyTableRow)
/* harmony export */ });
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates */ "./assets/js/modules/templates/index.ts");
/* harmony import */ var _PropertyFader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PropertyFader */ "./assets/js/modules/listingSearch/PropertyFader.ts");


// #region - Property Listing Pieces
const saleTypeTemplate = (saleType, className) => {
    const classesExtension = className ? ` ${className}` : '';
    return /* html */ `<p class='b-saleTypeText u-tt-upper ${classesExtension}'>${saleType}</p>`;
};
const listingTitle = (text, className) => {
    const classesExtension = className ? ` ${className}` : '';
    return /* html */ `
    <h3 class='b-listingTitle | u-t-color-core-secondary u-text-2 u-weight-bold u-gap-top-0${classesExtension}'>${text}</h3>
  `;
};
const acresTemplate = (acres) => {
    if (!acres) {
        return '';
    }
    return /* html */ `
  <p>
    ${acres.toLocaleString()} <span class='u-color-secondary-box-text'>&#177;</span> Acres
  </p>
  `;
};
const styledTractTemplate = (isMultiTract, className) => {
    const classesExtension = className ? ` ${className}` : '';
    return /* html */ `
  <p class="b-styledTract | u-weight-bold | u-gap-right-200${classesExtension}">
    ${isMultiTract ? 'Multi-Tract' : 'Single Tract'}
  </p>
  `;
};
const acresTractTemplate = (isMultiTract, acres) => {
    return /* html */ `
  <p class="b-styledTract | u-gap-right-200">
    <span class="u-weight-bold u-gap-right-200">${isMultiTract ? 'Multi-Tract' : 'Single Tract'}</span>
    ${acres.toLocaleString()} <span class='u-color-secondary-box-text'>&#177;</span> Acres
  </p>
  `;
};
const priceOrDateTemplate = (auctionType, isAuction, isPending, isSold, price, actualSoldPrice = null, auctionDateStart = null, auctionDateEnd = null) => {
    // Active auctions, return date instead of price
    if (isAuction && !isPending && !isSold) {
        const icon = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.spriteIcon)('calendar', 'u-t-color-core-primary-500 u-gap-right-100 u-text-1');
        switch (auctionType) {
            case 'In-Person Auction':
                return `${icon} <span>${auctionDateStart}</span>`;
            case 'Online Auction':
            case 'Simulcast Auction':
                return `${icon} <span>${auctionDateStart} - ${auctionDateEnd}</span>`;
            case 'For Sale by Bid':
                return `${icon} <span>Bids Due: ${auctionDateEnd}</span>`;
            default:
                return `${icon} <span>TBD</span>`;
        }
    }
    // Properties OR Auctions that are pending||sold, AND have an actualSoldPrice
    if (isAuction && (isPending || isSold) && actualSoldPrice) {
        return (0,_templates__WEBPACK_IMPORTED_MODULE_0__.styledPriceTemplate)(actualSoldPrice);
    }
    // Properties that are active should show listing price
    if (!isAuction && !isPending && !isSold) {
        return (0,_templates__WEBPACK_IMPORTED_MODULE_0__.styledPriceTemplate)(price);
    }
    // If the above conditionals aren't met, don't show anything.
    return '';
};
const perAcreTemplate = (formattedPricePerAcre) => {
    if (!formattedPricePerAcre ||
        formattedPricePerAcre === '0' ||
        formattedPricePerAcre === 'undefined')
        return '';
    return /* html */ `
  <p class="b-styledPrice">
    or $${formattedPricePerAcre}/acre
  </p>
  `;
};
const propertyStatusTemplate = (propertyStatus) => {
    const propertyStatusPieces = propertyStatus.split(' ');
    const propertyStatusClassExtension = propertyStatusPieces.join('');
    return /* html */ `
  <p class='b-propertyStatus b-propertyStatus--${propertyStatusClassExtension} | eyebrow eyebrow--clear u-tt-upper u-t-color-neutrals-primary-500 u-text-0'>${propertyStatus}</p>
  `;
};
const propertyTypesTemplate = (types) => {
    if (!types || types.length === 0) {
        return '';
    }
    const propertyTypes = types
        .map((type) => {
        return type;
    })
        .join(', ');
    const propertyTypesDisplay = /* html */ `<p class='b-propertyListing__types | u-t-color-neutrals-primary-500'>${propertyTypes}</p>`;
    return propertyTypesDisplay;
};
const listingAgentTemplate = (agentName) => {
    return /* html */ `
  <div class='b-propertyListing__agents'>
    <h5 class='u-tt-upper'>listing agent(s)</h5>
    <p class='u-t-color-core-secondary'>${agentName}</p>
  </div>`;
};
const checkPropertyPhotos = (propertyPhotos) => {
    return !propertyPhotos || propertyPhotos.length === 0
        ? ['/dist/img/re-profile-default.png']
        : propertyPhotos;
};
const locationTemplate = (location, className) => {
    const classesExtension = className ? ` ${className}` : '';
    return location === '' || location === 'N/A'
        ? ''
        : /* html */ `<p class='${classesExtension}'>${location}</p>`;
};
// #endregion - Property Listing Pieces
const propertyListingHalfCard = ({ listingNumber, propertyPhotos, formattedPrice, propertyStatus, id, isAuction, isMultiTract, eyebrow, totalAcres, url, displayLocation, actualSoldPrice, auctionType, auctionDateStart, auctionDateEnd }) => {
    const photos = checkPropertyPhotos(propertyPhotos);
    const isSold = propertyStatus.toLowerCase() === 'sold';
    const isPending = propertyStatus.toLowerCase() === 'pending';
    return /* html */ `
  <a class='b-propertyListing b-anchorComplex | c-cluster | md:u-hoverTarget-shift u-propertyFaderHover' tabindex='0' href='${url}'>
    ${(0,_PropertyFader__WEBPACK_IMPORTED_MODULE_1__.propertyFaderTemplate)(id, photos)}
    <div class='b-propertyListing__content | md:u-hoverEffect-shift'>
      ${saleTypeTemplate(eyebrow)}
      ${listingTitle(listingNumber)}

      <div class='c-repel'>
        ${locationTemplate(displayLocation)}
        ${priceOrDateTemplate(auctionType, isAuction, isPending, isSold, formattedPrice, actualSoldPrice, auctionDateStart, auctionDateEnd)}
      </div>
      <div class='c-repel | u-flex-align-end'>
        <div class='u-box-flex'>
          ${styledTractTemplate(isMultiTract)}
          ${acresTemplate(totalAcres)}
        </div>
        <div class="u-box-flex u-flex-dir-column">
          ${isAuction && formattedPrice !== '0' && (isSold || isPending)
        ? `<div class="u-text-0">
                    <p class="u-weight-bold">
                        $${formattedPrice}
                    </p>
                </div>`
        : ``}
          ${propertyStatusTemplate(propertyStatus)}
        </div>
      </div>
    </div>
  </a>
  `;
};
const propertyListingFullCard = ({ formattedPrice, listingAgent, listingNumber, propertyPhotos, pricePerAcre, propertyStatus, propertyTypes, id, isMultiTract, eyebrow, totalAcres, displayLocation, url, isAuction, auctionType, actualSoldPrice, auctionDateStart, auctionDateEnd }) => {
    const photos = checkPropertyPhotos(propertyPhotos);
    const isSold = propertyStatus.toLowerCase() === 'sold';
    const isPending = propertyStatus.toLowerCase() === 'pending';
    const buttonTheme = document.body.getAttribute('data-handle') === 'huntingLeaseNetwork'
        ? 'secondary'
        : 'primary';
    return /* html */ `
  <div class='b-propertyListing b-propertyListing--full u-propertyFaderHover | c-cluster'>
    <a href="${url}">
      ${(0,_PropertyFader__WEBPACK_IMPORTED_MODULE_1__.propertyFaderTemplate)(id, photos)}
    </a>

    <div class='b-propertyListing__info'>
      ${saleTypeTemplate(eyebrow, 'b-propertyListing__info__type u-shiftHover')}
      <a href="${url}" class='b-propertyListing__priceOrDate | u-text-base u-weight-bold'>
        ${priceOrDateTemplate(auctionType, isAuction, isPending, isSold, formattedPrice, actualSoldPrice, auctionDateStart, auctionDateEnd)}
      </a>

      <div class='b-propertyListing__info__content'>
        <div class='u-text-00'>
          ${locationTemplate(displayLocation)}
        </div>
        <a href="${url}" class='u-text-00'>
          ${listingTitle(listingNumber)}
        </a>
      </div>

      <div class='b-propertyListing__info__content'>
        <div class='u-text-00'>
          ${acresTractTemplate(isMultiTract, totalAcres)}
        </div>
        <a href="${url}" class='u-text-00'>
          ${propertyStatusTemplate(propertyStatus)}
        </a>
      </div>
    </div>

    <div class='b-propertyListing__info b-propertyListing__info--desktop | c-flow | u-flow-space-200'>
      <div class='c-flow | u-flow-space-100'>
        ${saleTypeTemplate(eyebrow, 'u-shiftHover b-propertyListing__info__type')}
        <a href="${url}">${listingTitle(listingNumber)}</a>
        ${locationTemplate(displayLocation)}
      </div>

      <div class='u-box-flex'>
        ${styledTractTemplate(isMultiTract)}
        ${acresTemplate(totalAcres)}
      </div>

      ${propertyStatusTemplate(propertyStatus)}
    </div>

    <div class='b-propertyListing__additionalInfo | c-flow'>
      ${listingAgentTemplate(listingAgent)}
      ${propertyTypesTemplate(propertyTypes)}
    </div>

    <div class='b-propertyListing__action | c-flow u-flex-justify-around u-flex-align-start | sm:u-flex-align-end'>
      <div class='b-propertyListing__priceOrDate | u-ta-right u-weight-bold u-text-0 u-box-flex u-flex-align-center u-flex-justify-between'>
        ${priceOrDateTemplate(auctionType, isAuction, isPending, isSold, formattedPrice, actualSoldPrice, auctionDateStart, auctionDateEnd)}
        ${perAcreTemplate(`${pricePerAcre}`)}
      </div>

      ${(0,_templates__WEBPACK_IMPORTED_MODULE_0__.buttonTemplate)({
        className: `b-button b-anchorComplex b-button--${buttonTheme} b-button--with-icon | c-withIcon`,
        content: 'See Details',
        href: url,
        iconName: 'arrow-right'
    })}
    </div>
  </div>
  `;
};
const propertyListingCardHln = ({ auctionName, formattedPrice, totalAcres, countyState, listingAgent, propertyStatus, propertyPhoto, uri }) => {
    const isDisabled = ['leased', 'pending'].includes(propertyStatus);
    const priceOrNotice = isDisabled
        ? 'Property Leased | Unable to View'
        : `<span>Starting Bid:</span> ${formattedPrice}`;
    const linkOpen = isDisabled ? '' : '<a href="' + uri + '">';
    const linkClose = isDisabled ? '' : '</a>';
    const cardContent = /* html */ `
    <article class="hln-card ${propertyStatus}">
    ${linkOpen}
      <div class="hln-card__image" style="background-image:url('${propertyPhoto}')"></div>
      <div class="hln-card__text">
        <div class="hln-card__heading">${priceOrNotice}</div>
        <div class="hln-card__details">
          <div class="hln-card__secondary">${auctionName}</div>
          <div class="hln-card__county">${countyState}</div>
        </div>
        <div class="hln-card__details">
          <div class="hln-card__agent">${listingAgent}</div>
          <div class="hln-card__acres">${totalAcres} Acres</div>
        </div>
      </div>
      <div class="hln-card__status ${propertyStatus}">${propertyStatus}</div>
    ${linkClose}
    </article>
  `;
    return cardContent;
};
const propertyListingNoResults = () => {
    return `
    <div class='b-propertyListing | c-cluster'>
      <h2>No Results Found</h2>
    </div>
  `;
};
const propertyTableRow = ({ countyState, listingAgent, propertyStatus, listingNumber, totalAcres, formattedPrice, soldDate, url }, hitPosition) => {
    const [county, state] = countyState.split(',');
    const hiddenData = JSON.stringify({
        soldDate,
        status: propertyStatus,
        listingId: listingNumber.split(' ').join('&nbsp;'),
        county: county.split(' ').join('&nbsp;'),
        url
    });
    const listingAgents = listingAgent.split(', ').join('<br>');
    return `
  <tr class="${hitPosition % 2 ? 'even' : 'odd'}" data-details=${hiddenData} data-colspan="5">
    <td class="c-box"><a href="${url}">${listingNumber}</a></td>
    <td class="c-box">${county}</td>
    <td class="c-box">${state}</td>
    <td class="c-box">${county}</td>
    <td class="c-box">${listingAgents}</td>
    <td class="c-box">${totalAcres.toLocaleString()}</td>
    <td class="c-box">$${formattedPrice}</td>
    <td class="c-box"><span class="b-propertyStatus b-propertyStatus--${propertyStatus}">${propertyStatus}</span></td>
    <td class="c-box">${soldDate}</td>
    <td>
        <button class="b-collapseButton">
          <svg class="b-icon b-collapseButton__caret"><use href="/svg/sprite.svg#caret-down"></use></svg>
        </button>
    </td>
  </tr>
  `;
};
// eslint-disable-next-line import/prefer-default-export



/***/ }),

/***/ "./assets/js/modules/listingSearch/StatsTemplates.ts":
/*!***********************************************************!*\
  !*** ./assets/js/modules/listingSearch/StatsTemplates.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   agentsStatsTemplate: () => (/* binding */ agentsStatsTemplate),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   defaultStatsTemplate: () => (/* binding */ defaultStatsTemplate),
/* harmony export */   getName: () => (/* binding */ getName),
/* harmony export */   getStatsTemplate: () => (/* binding */ getStatsTemplate),
/* harmony export */   hlnStatsTemplate: () => (/* binding */ hlnStatsTemplate),
/* harmony export */   numShowingTemplate: () => (/* binding */ numShowingTemplate)
/* harmony export */ });
/* harmony import */ var _utils_GetSiteHandle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/GetSiteHandle */ "./assets/js/utils/GetSiteHandle.ts");
/* StatsTemplate
  Documentation
  @see https://www.algolia.com/doc/api-reference/widgets/stats/js/

  Dev Notes (Sean):
  I like the structure of this more than what's going on with the hits templates.
  May be a good idea to pull those out and have
  a highorder function in it's own file
*/

// Templates
const defaultStatsTemplate = (data) => {
    let count = '';
    if (data.hasManyResults) {
        count += `${data.nbHits} results matched your search`;
    }
    else if (data.hasOneResult) {
        count += '1 result';
    }
    else {
        count += 'No results found';
    }
    return count;
};
const hlnStatsTemplate = (data) => {
    let count = '';
    if (data.hasManyResults) {
        count += `${data.nbHits} results`;
    }
    else if (data.hasOneResult) {
        count += '1 result';
    }
    return count;
};
const getName = (handle = '', isMultiple = false) => {
    const s = isMultiple ? 's' : '';
    switch (handle) {
        case 'fncAppraisal':
            return `appraiser${s}`;
        case 'huntingLeaseNetwork':
            return `rep${s}`;
        default:
            return `agent${s}`;
    }
};
const agentsStatsTemplate = (data) => {
    const siteHandle = (0,_utils_GetSiteHandle__WEBPACK_IMPORTED_MODULE_0__.getSiteHandle)();
    if (data.hasManyResults) {
        const color = siteHandle === 'huntingLeaseNetwork' ? 'tertiary-500' : 'primary-500';
        return `Showing <span class='u-weight-bold u-t-color-core-${color}'>${data.nbHits}</span> ${getName(siteHandle, true)} near you`;
    }
    if (data.hasOneResult) {
        return `Found an ${getName(siteHandle, false)} near you`;
    }
    return `Sorry we couldn't find an ${getName(siteHandle, true)} near you.`;
};
const numShowingTemplate = (data) => {
    const { hitsPerPage, nbHits, nbPages, page } = data;
    if (nbHits <= hitsPerPage) {
        return `Showing all ${data.nbHits} stories`;
    }
    const lastPage = page + 1 === nbPages;
    if (lastPage) {
        const numRemaining = nbHits - (nbPages - 1) * hitsPerPage;
        return `Showing (${numRemaining}) of ${nbHits} stories`;
    }
    return `Showing (${hitsPerPage}) of ${nbHits} stories`;
};
const getStatsTemplate = (templateName, data) => {
    switch (templateName) {
        case 'agent':
            return agentsStatsTemplate(data);
        case 'numShowing':
            return numShowingTemplate(data);
        case 'hln':
            return hlnStatsTemplate(data);
        default:
            return defaultStatsTemplate(data);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getStatsTemplate);


/***/ }),

/***/ "./assets/js/modules/listingSearch/index.ts":
/*!**************************************************!*\
  !*** ./assets/js/modules/listingSearch/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomPagination: () => (/* reexport safe */ _CustomPagination__WEBPACK_IMPORTED_MODULE_2__.CustomPagination),
/* harmony export */   CustomSortBy: () => (/* reexport safe */ _CustomSortBy__WEBPACK_IMPORTED_MODULE_3__.CustomSortBy),
/* harmony export */   acresTemplate: () => (/* reexport safe */ _PropertyListingTemplates__WEBPACK_IMPORTED_MODULE_7__.acresTemplate),
/* harmony export */   agentListing: () => (/* reexport safe */ _AgentListingTemplate__WEBPACK_IMPORTED_MODULE_0__.agentListing),
/* harmony export */   agentsStatsTemplate: () => (/* reexport safe */ _StatsTemplates__WEBPACK_IMPORTED_MODULE_8__.agentsStatsTemplate),
/* harmony export */   articleCardTemplate: () => (/* reexport safe */ _ArticleCardTemplate__WEBPACK_IMPORTED_MODULE_1__.articleCardTemplate),
/* harmony export */   checkPropertyPhotos: () => (/* reexport safe */ _PropertyListingTemplates__WEBPACK_IMPORTED_MODULE_7__.checkPropertyPhotos),
/* harmony export */   defaultStatsTemplate: () => (/* reexport safe */ _StatsTemplates__WEBPACK_IMPORTED_MODULE_8__.defaultStatsTemplate),
/* harmony export */   getName: () => (/* reexport safe */ _StatsTemplates__WEBPACK_IMPORTED_MODULE_8__.getName),
/* harmony export */   getStatsTemplate: () => (/* reexport safe */ _StatsTemplates__WEBPACK_IMPORTED_MODULE_8__.getStatsTemplate),
/* harmony export */   getUniquePropertyFeatures: () => (/* reexport safe */ _PropertyFeatures__WEBPACK_IMPORTED_MODULE_9__.getUniquePropertyFeatures),
/* harmony export */   hlnStatsTemplate: () => (/* reexport safe */ _StatsTemplates__WEBPACK_IMPORTED_MODULE_8__.hlnStatsTemplate),
/* harmony export */   initListingDropdowns: () => (/* reexport safe */ _ListingsDropdown__WEBPACK_IMPORTED_MODULE_4__.initListingDropdowns),
/* harmony export */   initMapUI: () => (/* reexport safe */ _MapUI__WEBPACK_IMPORTED_MODULE_5__.initMapUI),
/* harmony export */   initPropertyFaderFavorites: () => (/* reexport safe */ _PropertyFader__WEBPACK_IMPORTED_MODULE_6__.initPropertyFaderFavorites),
/* harmony export */   initPropertyFaderMutationObserver: () => (/* reexport safe */ _PropertyFader__WEBPACK_IMPORTED_MODULE_6__.initPropertyFaderMutationObserver),
/* harmony export */   listingTitle: () => (/* reexport safe */ _PropertyListingTemplates__WEBPACK_IMPORTED_MODULE_7__.listingTitle),
/* harmony export */   numShowingTemplate: () => (/* reexport safe */ _StatsTemplates__WEBPACK_IMPORTED_MODULE_8__.numShowingTemplate),
/* harmony export */   propertyFaderTemplate: () => (/* reexport safe */ _PropertyFader__WEBPACK_IMPORTED_MODULE_6__.propertyFaderTemplate),
/* harmony export */   propertyListingCardHln: () => (/* reexport safe */ _PropertyListingTemplates__WEBPACK_IMPORTED_MODULE_7__.propertyListingCardHln),
/* harmony export */   propertyListingFullCard: () => (/* reexport safe */ _PropertyListingTemplates__WEBPACK_IMPORTED_MODULE_7__.propertyListingFullCard),
/* harmony export */   propertyListingHalfCard: () => (/* reexport safe */ _PropertyListingTemplates__WEBPACK_IMPORTED_MODULE_7__.propertyListingHalfCard),
/* harmony export */   propertyListingNoResults: () => (/* reexport safe */ _PropertyListingTemplates__WEBPACK_IMPORTED_MODULE_7__.propertyListingNoResults),
/* harmony export */   propertyTableRow: () => (/* reexport safe */ _PropertyListingTemplates__WEBPACK_IMPORTED_MODULE_7__.propertyTableRow),
/* harmony export */   renderSortBy: () => (/* reexport safe */ _CustomSortBy__WEBPACK_IMPORTED_MODULE_3__.renderSortBy),
/* harmony export */   unmountPropertyFaderFavorites: () => (/* reexport safe */ _PropertyFader__WEBPACK_IMPORTED_MODULE_6__.unmountPropertyFaderFavorites)
/* harmony export */ });
/* harmony import */ var _AgentListingTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgentListingTemplate */ "./assets/js/modules/listingSearch/AgentListingTemplate.ts");
/* harmony import */ var _ArticleCardTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArticleCardTemplate */ "./assets/js/modules/listingSearch/ArticleCardTemplate.ts");
/* harmony import */ var _CustomPagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomPagination */ "./assets/js/modules/listingSearch/CustomPagination.ts");
/* harmony import */ var _CustomSortBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomSortBy */ "./assets/js/modules/listingSearch/CustomSortBy.ts");
/* harmony import */ var _ListingsDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListingsDropdown */ "./assets/js/modules/listingSearch/ListingsDropdown.ts");
/* harmony import */ var _MapUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MapUI */ "./assets/js/modules/listingSearch/MapUI.ts");
/* harmony import */ var _PropertyFader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PropertyFader */ "./assets/js/modules/listingSearch/PropertyFader.ts");
/* harmony import */ var _PropertyListingTemplates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PropertyListingTemplates */ "./assets/js/modules/listingSearch/PropertyListingTemplates.ts");
/* harmony import */ var _StatsTemplates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StatsTemplates */ "./assets/js/modules/listingSearch/StatsTemplates.ts");
/* harmony import */ var _PropertyFeatures__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PropertyFeatures */ "./assets/js/modules/listingSearch/PropertyFeatures.ts");












/***/ }),

/***/ "./assets/js/modules/listingSearch/leafletWidget.ts":
/*!**********************************************************!*\
  !*** ./assets/js/modules/listingSearch/leafletWidget.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var instantsearch_js_es_connectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! instantsearch.js/es/connectors */ "./node_modules/instantsearch.js/es/connectors/geo-search/connectGeoSearch.js");
/* harmony import */ var _utils_Index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Index */ "./assets/js/utils/Index.ts");
/* harmony import */ var _LeafletMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LeafletMap */ "./assets/js/modules/LeafletMap.ts");



let map = null;
let markers = [];
const propertyResultIcon = ({ totalAcres, price, propertyStatus, isAuction, url }) => {
    const acresText = /* html */ `${totalAcres.toLocaleString()} &#177; ac.`;
    const displayContent = isAuction ? acresText : (0,_utils_Index__WEBPACK_IMPORTED_MODULE_0__.numFormatter)(price);
    return /* html */ `
  <a href="${url}" class='b-anchorComplex'>
    <i class="${propertyStatus.toLowerCase()}"></i>
    <span>${displayContent}</span>
    <i class="arrow">
      <svg viewBox="0 0 15 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.263672 6.9548H11.9433V9.31266H0.263672V6.9548Z" />
        <path d="M7.00059 16.0348L5.39039 14.3833L11.4842 8.13434L5.39039 1.88538L7.00059 0.233887L14.7024 8.13437L7.00059 16.0348Z" />
      </svg>
    </i>
  </a>
  `;
};
const agentResultIcon = ({ friendlyName, url }) => {
    return /* html */ `
  <a href='${url}' class='b-agentMapIndicator b-anchorComplex | c-withIcon'>
    <span>${friendlyName}</span>
  </a>
  `;
};
const auctionResultIcon = ({ id, propertyPhoto, county, totalAcres, auctionName, uri, price }) => {
    return /* html */ `
    <a href='/${uri}' class='hln-map-container'>
        <div class='hln-map-pt'>
            <span>${totalAcres} Acres</span>
            <span>Price: $${price}</span>
        </div>
        <div class='hln-card'>
            <img src="${propertyPhoto}" alt="${auctionName}" class="hln-card__image"/>
            <div class='hln-card__text'>
                <div class='county'>${county}</div>
                <div class="hln-card__details">
                    <div class='hln-card__name'>${auctionName}</div>
                    <div class='hln-card__acres'>${totalAcres} Acres</div>
                </div>
            </div>
        </div>
    </a>
  `;
};
const mapResultIcon = (iconType, data) => {
    switch (iconType) {
        case 'property':
            return {
                className: 'custom-marker',
                html: propertyResultIcon(data)
            };
        case 'agent':
            return {
                className: 'custom-marker',
                html: agentResultIcon(data)
            };
        case 'auction':
            return {
                className: 'custom-marker',
                html: auctionResultIcon(data)
            };
        default:
            return null;
    }
};
const renderGeoSearch = (renderOptions, isFirstRender) => {
    const { items, widgetParams } = renderOptions;
    const { container } = widgetParams;
    if (isFirstRender) {
        // const button = document.createElement('button');
        // button.textContent = 'Clear the map refinement';
        container.style.height = '700px';
        map = window.L.map(container, {
            maxZoom: 17,
            scrollWheelZoom: false,
            zoomControl: false,
            attributionControl: false
        }).setView(_LeafletMap__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_CENTER, _LeafletMap__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ZOOM);
        window.currentMap = map;
        // Define the Satellite (Imagery) layer
        var satelliteLayer = window.L.esri.Vector.vectorBasemapLayer('ArcGIS:Imagery', {
            apikey: "AAPK9ce630a4d1da4787aaf6d6d23760abd8ixmhOWLjupa3Hg4H1kFcGKkkSNd2KHmtUE89Tdcj_XMMhVqZcxzulUFqUDoPRCGW"
        });
        // Define the Navigation layer
        var navigationLayer = window.L.esri.Vector.vectorBasemapLayer('ArcGIS:Navigation', {
            apikey: "AAPK9ce630a4d1da4787aaf6d6d23760abd8ixmhOWLjupa3Hg4H1kFcGKkkSNd2KHmtUE89Tdcj_XMMhVqZcxzulUFqUDoPRCGW"
        });
        // Add the default layer (Satellite) to the map
        satelliteLayer.addTo(map);
        // Add a layer control to switch between layers
        var baseMaps = {
            Satellite: satelliteLayer,
            Navigation: navigationLayer
        };
        // Add controls to map
        window.L.control.layers(baseMaps).addTo(map);
        window.L.control.zoom({ position: 'bottomright' }).addTo(map);
        // container.appendChild(button);
    }
    // Remove existing markers
    map.eachLayer((layer) => {
        if (layer && layer instanceof window.L.MarkerClusterGroup) {
            map.removeLayer(layer);
        }
    });
    // Cluster group for clustering
    const clusterGroup = window.L.markerClusterGroup();
    // const propertyStatus
    markers = items
        .map((data) => {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const { _geoloc, title, propertyStatus } = data;
        // Filter out leased properties from display on map
        if (['leased', 'pending'].includes(propertyStatus)) {
            return null;
        }
        // Custom Marker
        const iconType = data.friendlyName
            ? 'agent'
            : data.auctionName
                ? 'auction'
                : 'property';
        const resultIcon = window.L.divIcon(mapResultIcon(iconType, data));
        const customMarker = window.L.marker([_geoloc.lat, _geoloc.lng], {
            icon: resultIcon,
            title
        });
        clusterGroup.addLayer(customMarker);
        return customMarker;
    })
        .filter((marker) => marker !== null);
    map.addLayer(clusterGroup);
    // const markerBoundsGroup = window.L.featureGroup(markers);
    if (markers.length) {
        map.fitBounds(window.L.featureGroup(markers).getBounds(), {
            padding: [5, 5]
        });
    }
};
const leafletGeoSearch = (0,instantsearch_js_es_connectors__WEBPACK_IMPORTED_MODULE_2__["default"])(renderGeoSearch);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (leafletGeoSearch);


/***/ }),

/***/ "./assets/js/modules/templates/ArrowLeft.ts":
/*!**************************************************!*\
  !*** ./assets/js/modules/templates/ArrowLeft.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrowLeftIcon: () => (/* binding */ arrowLeftIcon),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const arrowLeftIcon = () => {
    return /* html */ `
  <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="cls-1" d="M14.7,9.31H3.02v-2.36H14.7v2.36Z"/>
    <path class="cls-1" d="M.26,8.13L7.97,.23l1.61,1.65L3.48,8.13l6.09,6.25-1.61,1.65L.26,8.13Z"/>
  </svg>`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrowLeftIcon);


/***/ }),

/***/ "./assets/js/modules/templates/ArrowRight.ts":
/*!***************************************************!*\
  !*** ./assets/js/modules/templates/ArrowRight.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrowRightIcon: () => (/* binding */ arrowRightIcon),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const arrowRightIcon = () => {
    return /* html */ `
	<svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M0.263672 6.9548H11.9433V9.31266H0.263672V6.9548Z" fill="#002538"/>
		<path d="M7.00059 16.0348L5.39039 14.3833L11.4842 8.13434L5.39039 1.88538L7.00059 0.233887L14.7024 8.13437L7.00059 16.0348Z" fill="#002538"/>
	</svg>`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrowRightIcon);


/***/ }),

/***/ "./assets/js/modules/templates/Button.ts":
/*!***********************************************!*\
  !*** ./assets/js/modules/templates/Button.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buttonTemplate: () => (/* binding */ buttonTemplate),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SpriteIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpriteIcon */ "./assets/js/modules/templates/SpriteIcon.ts");

const buttonTemplate = ({ className, content, href, iconName, tagType = 'a', textSize = 0 }) => {
    const icon = iconName ? (0,_SpriteIcon__WEBPACK_IMPORTED_MODULE_0__.spriteIcon)(iconName) : '';
    const hrefAttr = href ? `href='${href}'` : '';
    const classes = className || '';
    return /* html */ `
    <${tagType} class='b-button b-anchorComplex c-withIcon u-text-${textSize} ${classes}' ${hrefAttr}>
      <span>${content}</span>
      ${icon}
    </${tagType}>
  `;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttonTemplate);


/***/ }),

/***/ "./assets/js/modules/templates/Image.ts":
/*!**********************************************!*\
  !*** ./assets/js/modules/templates/Image.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   imageTemplate: () => (/* binding */ imageTemplate)
/* harmony export */ });
const imageTemplate = (src, alt) => {
    if (!src) {
        return '';
    }
    const altAttr = alt ? `alt='${alt}'` : '';
    return /* html */ `
    <div class='c-frame'>
      <img src='${src}' ${altAttr} />
    </div>`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (imageTemplate);


/***/ }),

/***/ "./assets/js/modules/templates/Price.ts":
/*!**********************************************!*\
  !*** ./assets/js/modules/templates/Price.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   styledPriceTemplate: () => (/* binding */ styledPriceTemplate)
/* harmony export */ });
const styledPriceTemplate = (price) => {
    if (price === '0') {
        return '';
    }
    return /* html */ `
    <p class="u-weight-bold">
      $${price}
    </p>
  `;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styledPriceTemplate);


/***/ }),

/***/ "./assets/js/modules/templates/SpriteIcon.ts":
/*!***************************************************!*\
  !*** ./assets/js/modules/templates/SpriteIcon.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   spriteIcon: () => (/* binding */ spriteIcon)
/* harmony export */ });
const spriteIcon = (iconName, className = '') => {
    return /* html */ `
  <svg class='b-icon ${className}'>
      <use href='/svg/sprite.svg#${iconName}'></use>
  </svg>
  `;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spriteIcon);


/***/ }),

/***/ "./assets/js/modules/templates/index.ts":
/*!**********************************************!*\
  !*** ./assets/js/modules/templates/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrowLeftIcon: () => (/* reexport safe */ _ArrowLeft__WEBPACK_IMPORTED_MODULE_0__.arrowLeftIcon),
/* harmony export */   arrowRightIcon: () => (/* reexport safe */ _ArrowRight__WEBPACK_IMPORTED_MODULE_1__.arrowRightIcon),
/* harmony export */   buttonTemplate: () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_2__.buttonTemplate),
/* harmony export */   imageTemplate: () => (/* reexport safe */ _Image__WEBPACK_IMPORTED_MODULE_5__.imageTemplate),
/* harmony export */   spriteIcon: () => (/* reexport safe */ _SpriteIcon__WEBPACK_IMPORTED_MODULE_4__.spriteIcon),
/* harmony export */   styledPriceTemplate: () => (/* reexport safe */ _Price__WEBPACK_IMPORTED_MODULE_3__.styledPriceTemplate)
/* harmony export */ });
/* harmony import */ var _ArrowLeft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrowLeft */ "./assets/js/modules/templates/ArrowLeft.ts");
/* harmony import */ var _ArrowRight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArrowRight */ "./assets/js/modules/templates/ArrowRight.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./assets/js/modules/templates/Button.ts");
/* harmony import */ var _Price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Price */ "./assets/js/modules/templates/Price.ts");
/* harmony import */ var _SpriteIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpriteIcon */ "./assets/js/modules/templates/SpriteIcon.ts");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Image */ "./assets/js/modules/templates/Image.ts");








/***/ }),

/***/ "./assets/js/utils/Account.ts":
/*!************************************!*\
  !*** ./assets/js/utils/Account.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   fetchUserLoginStatus: () => (/* binding */ fetchUserLoginStatus),
/* harmony export */   initLoginStatusComponents: () => (/* binding */ initLoginStatusComponents)
/* harmony export */ });
/* harmony import */ var _modules_NavAccountLinks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/NavAccountLinks */ "./assets/js/modules/NavAccountLinks.ts");
/* harmony import */ var _modules_FavoriteProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/FavoriteProperties */ "./assets/js/modules/FavoriteProperties.ts");
/* harmony import */ var _modules_SavedSearches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/SavedSearches */ "./assets/js/modules/SavedSearches.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



/**
 * Fetch to see if there's a user currently logged in.
 *
 * @return    {boolean}             Returns true if logged in, false if not
 */
function fetchUserLoginStatus() {
    return __awaiter(this, void 0, void 0, function* () {
        const userLoginStatusResponse = yield fetch('/api/v1/login-status')
            .then((res) => res.json())
            .then((data) => {
            if (data.loginStatus && data.loginStatus === true) {
                return data.loginStatus;
            }
            return false;
        })
            .catch((err) => {
            if (window.location.href.includes('dev')) {
                console.error(err); // eslint-disable-line
            }
            return false;
        });
        return userLoginStatusResponse;
    });
}
const initLoginStatusComponents = () => {
    const { hostname } = window.location;
    const siteHasAccounts = hostname.match('realestate') ||
        hostname.match('energy') ||
        hostname.match('hln') ||
        hostname.match('hunting') ||
        hostname.match('stock');
    if (siteHasAccounts) {
        fetchUserLoginStatus().then((value) => {
            sessionStorage.setItem('userLoginStatus', value);
            (0,_modules_NavAccountLinks__WEBPACK_IMPORTED_MODULE_0__["default"])();
            (0,_modules_FavoriteProperties__WEBPACK_IMPORTED_MODULE_1__.initFavoriteProperties)();
            (0,_modules_SavedSearches__WEBPACK_IMPORTED_MODULE_2__["default"])();
        });
    }
};
/**
 * Adjust default export if we add more account utilities
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initLoginStatusComponents);


/***/ }),

/***/ "./assets/js/utils/ClickDimensions.ts":
/*!********************************************!*\
  !*** ./assets/js/utils/ClickDimensions.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clickDimensions: () => (/* binding */ clickDimensions),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const clickDimensions = () => {
    var _a;
    const domain = (_a = window.location.hostname) !== null && _a !== void 0 ? _a : 'farmersnational.com';
    const domainString = domain.replace(/\./g, '');
    const cdAnalytics = new clickdimensions.Analytics('analytics.clickdimensions.com');
    cdAnalytics.setAccountKey('akQlxerFwEKVjK2sh8Slg');
    cdAnalytics.setDomain(domain);
    cdAnalytics.setScore(typeof cdScore == 'undefined' ? 0 : cdScore == 0 ? null : cdScore);
    var optOutHostId = domainString + '_glS8hs2KjVKEwFrexlQka';
    cdAnalytics.optOutTracking(true);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clickDimensions);


/***/ }),

/***/ "./assets/js/utils/GetSiteHandle.ts":
/*!******************************************!*\
  !*** ./assets/js/utils/GetSiteHandle.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSiteHandle: () => (/* binding */ getSiteHandle)
/* harmony export */ });
const getSiteHandle = () => {
    const bodyElement = document.querySelector('body[data-handle]');
    if (bodyElement) {
        return bodyElement.dataset.handle;
    }
    return '';
};


/***/ }),

/***/ "./assets/js/utils/Index.ts":
/*!**********************************!*\
  !*** ./assets/js/utils/Index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bind: () => (/* binding */ bind),
/* harmony export */   fetchUserLoginStatus: () => (/* reexport safe */ _Account__WEBPACK_IMPORTED_MODULE_1__.fetchUserLoginStatus),
/* harmony export */   flattenArray: () => (/* binding */ flattenArray),
/* harmony export */   getCurrentQueryString: () => (/* binding */ getCurrentQueryString),
/* harmony export */   initLoginStatusComponents: () => (/* reexport safe */ _Account__WEBPACK_IMPORTED_MODULE_1__.initLoginStatusComponents),
/* harmony export */   numFormatter: () => (/* binding */ numFormatter),
/* harmony export */   onlySpaces: () => (/* reexport safe */ _OnlySpaces__WEBPACK_IMPORTED_MODULE_2__.onlySpaces),
/* harmony export */   pushToQuery: () => (/* binding */ pushToQuery),
/* harmony export */   unbind: () => (/* binding */ unbind)
/* harmony export */ });
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Account */ "./assets/js/utils/Account.ts");
/* harmony import */ var _OnlySpaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OnlySpaces */ "./assets/js/utils/OnlySpaces.ts");

// Export external files


function bind(node, action, method) {
    node.addEventListener(action, method);
}
function unbind(node, action, method) {
    node.removeEventListener(action, method);
}
function getCurrentQueryString() {
    if (window.location.search) {
        return qs__WEBPACK_IMPORTED_MODULE_0__.parse(window.location.search.replace('?', ''));
    }
    return {};
}
function pushToQuery(e) {
    const node = e.currentTarget;
    const key = node.getAttribute('name');
    const { value } = node;
    const queryString = getCurrentQueryString();
    queryString[key] = value;
    window.history.replaceState(null, null, `${window.location.pathname}?${qs__WEBPACK_IMPORTED_MODULE_0__.stringify(queryString)}`);
}
const flattenArray = (e) => {
    return e.reduce((a, b) => a.concat(Array.isArray(b) ? flattenArray(b) : b), []);
};
function numFormatter(num) {
    if (num > 999 && num < 1000000) {
        return `${(num / 1000).toFixed(1)}K`; // convert to K for number from > 1000 < 1 million
    }
    if (num > 1000000) {
        return `${(num / 1000000).toFixed(1)}M`; // convert to M for number from > 1 million
    }
    return num;
}


/***/ }),

/***/ "./assets/js/utils/LeafletAttribution.ts":
/*!***********************************************!*\
  !*** ./assets/js/utils/LeafletAttribution.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   leafletAttributionHover: () => (/* binding */ leafletAttributionHover)
/* harmony export */ });
const leafletAttributionHover = () => {
    const controlAttribution = document.querySelectorAll('.leaflet-control-attribution');
    if (controlAttribution.length) {
        controlAttribution.forEach((controlEl) => {
            controlEl.addEventListener('click', () => {
                controlEl.classList.toggle('u-whitespace-normal');
            });
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (leafletAttributionHover);


/***/ }),

/***/ "./assets/js/utils/LoginStatus.ts":
/*!****************************************!*\
  !*** ./assets/js/utils/LoginStatus.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getLoginStatus: () => (/* binding */ getLoginStatus)
/* harmony export */ });
const getLoginStatus = () => {
    return sessionStorage.getItem('userLoginStatus') === 'true' || false;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLoginStatus);


/***/ }),

/***/ "./assets/js/utils/Maps.ts":
/*!*********************************!*\
  !*** ./assets/js/utils/Maps.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getZipCodeCoordinates: () => (/* binding */ getZipCodeCoordinates)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Get Coordinates of a given zip code using our endpoint and DB data
 *
 * @return    {object}             Returns object of lat/lng
 */
function getZipCodeCoordinates(zip) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!zip) {
            return undefined;
        }
        const zipLocationResponse = yield fetch(`/actions/zipcodes/lookup/lat-lng?zipcode=${zip}`)
            .then((res) => res.json())
            .then((data) => data);
        let zipCoords = null;
        if (zipLocationResponse.lat && zipLocationResponse.long) {
            // eslint-disable-next-line prefer-destructuring
            zipCoords = zipLocationResponse;
        }
        return zipCoords;
    });
}
/**
 * Adjust default export if we add more map utilities
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getZipCodeCoordinates);


/***/ }),

/***/ "./assets/js/utils/OnlySpaces.ts":
/*!***************************************!*\
  !*** ./assets/js/utils/OnlySpaces.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   onlySpaces: () => (/* binding */ onlySpaces)
/* harmony export */ });
const onlySpaces = (str) => {
    return str.trim().length === 0;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (onlySpaces);


/***/ }),

/***/ "./assets/js/utils/QueryParents.ts":
/*!*****************************************!*\
  !*** ./assets/js/utils/QueryParents.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   queryParents: () => (/* binding */ queryParents)
/* harmony export */ });
// Unlike the querySelector don't include . in your class names
const queryParents = (el, selector) => {
    while (el.parentNode) {
        el = el.parentNode;
        if (el.tagName === selector ||
            el.classList.contains(selector) ||
            el.tagName === 'BODY')
            return el;
    }
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (queryParents);


/***/ }),

/***/ "./assets/js/utils/TableCollapse.ts":
/*!******************************************!*\
  !*** ./assets/js/utils/TableCollapse.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   tableCollapseItem: () => (/* binding */ tableCollapseItem)
/* harmony export */ });
const addDetailRow = (trParent) => {
    const details = JSON.parse(trParent.dataset.details);
    const { colspan } = trParent.dataset;
    const child = document.createElement('tr');
    child.classList.add('details');
    const td = document.createElement('td');
    td.setAttribute('colspan', colspan);
    td.innerHTML = `
    <div class="b-listingTable__details c-flow u-flow-space-200">
        <div>
            <div class="u-weight-medium">Sold Date:</div>
            <div>${details.soldDate}</div>
        </div>

        <div>
            <div class="u-weight-medium">Status:</div>
            <div><span class="b-propertyStatus b-propertyStatus--${details.status} u-weight-bold">${details.status}</span></div>
        </div>

        <div>
            <div class="u-weight-medium">County:</div>
            <div>${details.county}</div>
        </div>

        <div>
            <div class="u-weight-medium">Listing ID:</div>
            <div class="b-propertyId u-weight-bold"><a href="${details.url}">${details.listingId}</a></div>
        </div>
    </div>
    `;
    child.appendChild(td);
    trParent.after(child);
};
const removeDetailRow = (trParent) => {
    const sibling = trParent.nextElementSibling;
    if (sibling.classList.contains('details'))
        trParent.nextElementSibling.remove();
};
const tableCollapseItem = () => {
    const tableEl = document.getElementById('listingTable');
    if (tableEl) {
        const buttons = tableEl.querySelectorAll('button');
        if (buttons.length) {
            buttons.forEach((el) => {
                el.addEventListener('click', (ev) => {
                    ev.preventDefault();
                    const trParent = el.parentNode.parentNode;
                    if (!el.classList.contains('b-collapseButton--open')) {
                        el.classList.add('b-collapseButton--open');
                        addDetailRow(trParent);
                    }
                    else {
                        el.classList.remove('b-collapseButton--open');
                        removeDetailRow(trParent);
                    }
                });
            });
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tableCollapseItem);


/***/ }),

/***/ "./assets/js/utils/ZipCodeLookup.ts":
/*!******************************************!*\
  !*** ./assets/js/utils/ZipCodeLookup.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getCoordinatesZipCode: () => (/* binding */ getCoordinatesZipCode)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Get Zip code of given lat longitude
 *
 * @return      {string}            Returns a string that is the nearest zipcode
 */
function getCoordinatesZipCode(lat, long) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!lat || !long) {
            return undefined;
        }
        const zipcodeObj = yield fetch(`/actions/zipcodes/lookup/zipcode?lat=${lat}&lng=${long}`)
            .then((res) => res.json())
            .then((data) => data);
        // TODO: replace this temp simple return with actual value
        // const zipcode = '30678';
        return zipcodeObj.zipcode;
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCoordinatesZipCode);


/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_union_client"] = self["webpackChunk_union_client"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./assets/js/App.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./assets/scss/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AdW5pb24vY2xpZW50Ly4vYXNzZXRzL3Njc3MvYXBwLnNjc3M/Yjg5OSIsIndlYnBhY2s6Ly9AdW5pb24vY2xpZW50Ly4vYXNzZXRzL2pzL0FwcC50cyIsIndlYnBhY2s6Ly9AdW5pb24vY2xpZW50Ly4vYXNzZXRzL2pzL21vZGFsLnRzIiwid2VicGFjazovL0B1bmlvbi9jbGllbnQvLi9hc3NldHMvanMvbW9kdWxlcy9BY2NvdW50LnRzIiwid2VicGFjazovL0B1bmlvbi9jbGllbnQvLi9hc3NldHMvanMvbW9kdWxlcy9DaGFydHMudHMiLCJ3ZWJwYWNrOi8vQHVuaW9uL2NsaWVudC8uL2Fzc2V0cy9qcy9tb2R1bGVzL0Zhdm9yaXRlUHJvcGVydGllcy50cyIsIndlYnBhY2s6Ly9AdW5pb24vY2xpZW50Ly4vYXNzZXRzL2pzL21vZHVsZXMvSGVhZGVyLnRzIiwid2VicGFjazovL0B1bmlvbi9jbGllbnQvLi9hc3NldHMvanMvbW9kdWxlcy9IdW50aW5nTGVhc2VNYXAudHMiLCJ3ZWJwYWNrOi8vQHVuaW9uL2NsaWVudC8uL2Fzc2V0cy9qcy9tb2R1bGVzL0ltYWdlRmFkZXIudHMiLCJ3ZWJwYWNrOi8vQHVuaW9uL2NsaWVudC8uL2Fzc2V0cy9qcy9tb2R1bGVzL0lucHV0LnRzIiwid2VicGFjazovL0B1bmlvbi9jbGllbnQvLi9hc3NldHMvanMvbW9kdWxlcy9JbnN0YW50U2VhcmNoLnRzIiwid2VicGFjazovL0B1bmlvbi9jbGllbnQvLi9hc3NldHMvanMvbW9kdWxlcy9MZWFmbGV0TWFwLnRzIiwid2VicGFjazovL0B1bmlvbi9jbGllbnQvLi9hc3NldHMvanMvbW9kdWxlcy9OYXZBY2NvdW50TGlua3MudHMiLCJ3ZWJwYWNrOi8vQHVuaW9uL2NsaWVudC8uL2Fzc2V0cy9qcy9tb2R1bGVzL1Byb3BlcnR5RGV0YWlsSGVyby50cyIsIndlYnBhY2s6Ly9AdW5pb24vY2xpZW50Ly4vYXNzZXRzL2pzL21vZHVsZXMvUHJvcGVydHlTZWFyY2hNYXAudHMiLCJ3ZWJwYWNrOi8vQHVuaW9uL2NsaWVudC8uL2Fzc2V0cy9qcy9tb2R1bGVzL1NhdmVkU2VhcmNoZXMudHMiLCJ3ZWJwYWNrOi8vQHVuaW9uL2NsaWVudC8uL2Fzc2V0cy9qcy9tb2R1bGVzL1NlYXJjaEJhckRyb3Bkb3duLnRzIiwid2VicGFjazovL0B1bmlvbi9jbGllbnQvLi9hc3NldHMvanMvbW9kdWxlcy9TaGFyZUN1cnJlbnRVcmwudHMiLCJ3ZWJwYWNrOi8vQHVuaW9uL2NsaWVudC8uL2Fzc2V0cy9qcy9tb2R1bGVzL1N3aXBlckNhcm91c2Vscy50cyIsIndlYnBhY2s6Ly9AdW5pb24vY2xpZW50Ly4vYXNzZXRzL2pzL21vZHVsZXMvU3dpdGNoVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vQHVuaW9uL2NsaWVudC8uL2Fzc2V0cy9qcy9tb2R1bGVzL1RvZ2dsZS50cyIsIndlYnBhY2s6Ly9AdW5pb24vY2xpZW50Ly4vYXNzZXRzL2pzL21vZHVsZXMvVmlkZW9Db250cm9sbGVyLnRzIiwid2VicGFjazovL0B1bmlvbi9jbGllbnQvLi9hc3NldHMvanMvbW9kdWxlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9AdW5pb24vY2xpZW50Ly4vYXNzZXRzL2pzL21vZHVsZXMvbGlzdGluZ1NlYXJjaC9BZ2VudExpc3RpbmdUZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly9AdW5pb24vY2xpZW50Ly4vYXNzZXRzL2pzL21vZHVsZXMvbGlzdGluZ1NlYXJjaC9BcnRpY2xlQ2FyZFRlbXBsYXRlLnRzIiwid2VicGFjazovL0B1bmlvbi9jbGllbnQvLi9hc3NldHMvanMvbW9kdWxlcy9saXN0aW5nU2VhcmNoL0N1c3RvbVBhZ2luYXRpb24udHMiLCJ3ZWJwYWNrOi8vQHVuaW9uL2NsaWVudC8uL2Fzc2V0cy9qcy9tb2R1bGVzL2xpc3RpbmdTZWFyY2gvQ3VzdG9tU29ydEJ5LnRzIiwid2VicGFjazovL0B1bmlvbi9jbGllbnQvLi9hc3NldHMvanMvbW9kdWxlcy9saXN0aW5nU2VhcmNoL0xpc3RpbmdUeXBlUmVmaW5lbWVudExpc3QudHMiLCJ3ZWJwYWNrOi8vQHVuaW9uL2NsaWVudC8uL2Fzc2V0cy9qcy9tb2R1bGVzL2xpc3RpbmdTZWFyY2gvTGlzdGluZ3NEcm9wZG93bi50cyIsIndlYnBhY2s6Ly9AdW5pb24vY2xpZW50Ly4vYXNzZXRzL2pzL21vZHVsZXMvbGlzdGluZ1NlYXJjaC9NYXBVSS50cyIsIndlYnBhY2s6Ly9AdW5pb24vY2xpZW50Ly4vYXNzZXRzL2pzL21vZHVsZXMvbGlzdGluZ1NlYXJjaC9Qcm9wZXJ0eUZhZGVyLnRzIiwid2VicGFjazovL0B1bmlvbi9jbGllbnQvLi9hc3NldHMvanMvbW9kdWxlcy9saXN0aW5nU2VhcmNoL1Byb3BlcnR5RmVhdHVyZXMudHMiLCJ3ZWJwYWNrOi8vQHVuaW9uL2NsaWVudC8uL2Fzc2V0cy9qcy9tb2R1bGVzL2xpc3RpbmdTZWFyY2gvUHJvcGVydHlMaXN0aW5nVGVtcGxhdGVzLnRzIiwid2VicGFjazovL0B1bmlvbi9jbGllbnQvLi9hc3NldHMvanMvbW9kdWxlcy9saXN0aW5nU2VhcmNoL1N0YXRzVGVtcGxhdGVzLnRzIiwid2VicGFjazovL0B1bmlvbi9jbGllbnQvLi9hc3NldHMvanMvbW9kdWxlcy9saXN0aW5nU2VhcmNoL2luZGV4LnRzIiwid2VicGFjazovL0B1bmlvbi9jbGllbnQvLi9hc3NldHMvanMvbW9kdWxlcy9saXN0aW5nU2VhcmNoL2xlYWZsZXRXaWRnZXQudHMiLCJ3ZWJwYWNrOi8vQHVuaW9uL2NsaWVudC8uL2Fzc2V0cy9qcy9tb2R1bGVzL3RlbXBsYXRlcy9BcnJvd0xlZnQudHMiLCJ3ZWJwYWNrOi8vQHVuaW9uL2NsaWVudC8uL2Fzc2V0cy9qcy9tb2R1bGVzL3RlbXBsYXRlcy9BcnJvd1JpZ2h0LnRzIiwid2VicGFjazovL0B1bmlvbi9jbGllbnQvLi9hc3NldHMvanMvbW9kdWxlcy90ZW1wbGF0ZXMvQnV0dG9uLnRzIiwid2VicGFjazovL0B1bmlvbi9jbGllbnQvLi9hc3NldHMvanMvbW9kdWxlcy90ZW1wbGF0ZXMvSW1hZ2UudHMiLCJ3ZWJwYWNrOi8vQHVuaW9uL2NsaWVudC8uL2Fzc2V0cy9qcy9tb2R1bGVzL3RlbXBsYXRlcy9QcmljZS50cyIsIndlYnBhY2s6Ly9AdW5pb24vY2xpZW50Ly4vYXNzZXRzL2pzL21vZHVsZXMvdGVtcGxhdGVzL1Nwcml0ZUljb24udHMiLCJ3ZWJwYWNrOi8vQHVuaW9uL2NsaWVudC8uL2Fzc2V0cy9qcy9tb2R1bGVzL3RlbXBsYXRlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9AdW5pb24vY2xpZW50Ly4vYXNzZXRzL2pzL3V0aWxzL0FjY291bnQudHMiLCJ3ZWJwYWNrOi8vQHVuaW9uL2NsaWVudC8uL2Fzc2V0cy9qcy91dGlscy9DbGlja0RpbWVuc2lvbnMudHMiLCJ3ZWJwYWNrOi8vQHVuaW9uL2NsaWVudC8uL2Fzc2V0cy9qcy91dGlscy9HZXRTaXRlSGFuZGxlLnRzIiwid2VicGFjazovL0B1bmlvbi9jbGllbnQvLi9hc3NldHMvanMvdXRpbHMvSW5kZXgudHMiLCJ3ZWJwYWNrOi8vQHVuaW9uL2NsaWVudC8uL2Fzc2V0cy9qcy91dGlscy9MZWFmbGV0QXR0cmlidXRpb24udHMiLCJ3ZWJwYWNrOi8vQHVuaW9uL2NsaWVudC8uL2Fzc2V0cy9qcy91dGlscy9Mb2dpblN0YXR1cy50cyIsIndlYnBhY2s6Ly9AdW5pb24vY2xpZW50Ly4vYXNzZXRzL2pzL3V0aWxzL01hcHMudHMiLCJ3ZWJwYWNrOi8vQHVuaW9uL2NsaWVudC8uL2Fzc2V0cy9qcy91dGlscy9Pbmx5U3BhY2VzLnRzIiwid2VicGFjazovL0B1bmlvbi9jbGllbnQvLi9hc3NldHMvanMvdXRpbHMvUXVlcnlQYXJlbnRzLnRzIiwid2VicGFjazovL0B1bmlvbi9jbGllbnQvLi9hc3NldHMvanMvdXRpbHMvVGFibGVDb2xsYXBzZS50cyIsIndlYnBhY2s6Ly9AdW5pb24vY2xpZW50Ly4vYXNzZXRzL2pzL3V0aWxzL1ppcENvZGVMb29rdXAudHMiLCJ3ZWJwYWNrOi8vQHVuaW9uL2NsaWVudC9pZ25vcmVkfC9hcHAvbm9kZV9tb2R1bGVzL29iamVjdC1pbnNwZWN0fC4vdXRpbC5pbnNwZWN0Iiwid2VicGFjazovL0B1bmlvbi9jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQHVuaW9uL2NsaWVudC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL0B1bmlvbi9jbGllbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQHVuaW9uL2NsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQHVuaW9uL2NsaWVudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL0B1bmlvbi9jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9AdW5pb24vY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQHVuaW9uL2NsaWVudC93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL0B1bmlvbi9jbGllbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vQHVuaW9uL2NsaWVudC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL0B1bmlvbi9jbGllbnQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL0B1bmlvbi9jbGllbnQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBpbml0QWNjb3VudCBmcm9tICcuL21vZHVsZXMvQWNjb3VudCc7XG5pbXBvcnQgaW5pdEhlYWRlciBmcm9tICcuL21vZHVsZXMvSGVhZGVyJztcbmltcG9ydCB7IGluaXRJbWFnZUZhZGVyIH0gZnJvbSAnLi9tb2R1bGVzL0ltYWdlRmFkZXInO1xuaW1wb3J0IGluaXRJbnB1dHMgZnJvbSAnLi9tb2R1bGVzL0lucHV0JztcbmltcG9ydCBpbml0TGlzdGluZ1VJIGZyb20gJy4vbW9kdWxlcy9JbnN0YW50U2VhcmNoJztcbmltcG9ydCB7IGluaXRNb2RhbHMsIGluaXRTcHJpZ01vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XG5pbXBvcnQgaW5pdFByb3BlcnR5RGV0YWlsSGVybyBmcm9tICcuL21vZHVsZXMvUHJvcGVydHlEZXRhaWxIZXJvJztcbmltcG9ydCBpbml0UHJvcGVydHlTZWFyY2hNYXBzIGZyb20gJy4vbW9kdWxlcy9Qcm9wZXJ0eVNlYXJjaE1hcCc7XG5pbXBvcnQgaW5pdEh1bnRpbmdMZWFzZU1hcHMgZnJvbSAnLi9tb2R1bGVzL0h1bnRpbmdMZWFzZU1hcCc7XG5pbXBvcnQgaW5pdFN3aXBlckNhcm91c2VscyBmcm9tICcuL21vZHVsZXMvU3dpcGVyQ2Fyb3VzZWxzJztcbmltcG9ydCBpbml0U3dpdGNoZXMgZnJvbSAnLi9tb2R1bGVzL1N3aXRjaFRlbXBsYXRlJztcbmltcG9ydCBpbml0VG9nZ2xlIGZyb20gJy4vbW9kdWxlcy9Ub2dnbGUnO1xuXG5pbXBvcnQge1xuICBpbml0Q2hhcnRzLFxuICBpbml0SGVyb1NlYXJjaCxcbiAgaW5pdFNoYXJlQ3VycmVudFVybCxcbiAgaW5pdFZpZGVvQ29udHJvbGxlcnMsXG4gIGluaXRaaXBTZWFyY2hcbn0gZnJvbSAnLi9tb2R1bGVzJztcbmltcG9ydCB7IGluaXRMb2dpblN0YXR1c0NvbXBvbmVudHMgfSBmcm9tICcuL3V0aWxzL0FjY291bnQnO1xuaW1wb3J0IGluaXRMZWFmTGVhdEF0dHJpYnV0aW9uIGZyb20gJy4vdXRpbHMvTGVhZmxldEF0dHJpYnV0aW9uJztcbmltcG9ydCBpbml0Q2xpY2tEaW1lbnNpb25zIGZyb20gJy4vdXRpbHMvQ2xpY2tEaW1lbnNpb25zJztcblxuY29uc3QgQXBwID0gKCk6IHZvaWQgPT4ge1xuICBpbml0U3dpcGVyQ2Fyb3VzZWxzKCk7XG4gIGluaXRJbWFnZUZhZGVyKCk7XG4gIGluaXRBY2NvdW50KCk7XG4gIGluaXRIZWFkZXIoKTtcbiAgaW5pdEhlcm9TZWFyY2goKTtcbiAgaW5pdExpc3RpbmdVSSgpO1xuICBpbml0TW9kYWxzKCk7XG4gIGluaXRQcm9wZXJ0eURldGFpbEhlcm8oKTtcbiAgaW5pdFByb3BlcnR5U2VhcmNoTWFwcygpO1xuICBpbml0SHVudGluZ0xlYXNlTWFwcygpO1xuICBpbml0U3dpdGNoZXMoKTtcbiAgaW5pdFRvZ2dsZSgpO1xuICBpbml0SW5wdXRzKCk7XG4gIGluaXRWaWRlb0NvbnRyb2xsZXJzKCk7XG4gIGluaXRTaGFyZUN1cnJlbnRVcmwoKTtcbiAgaW5pdFNwcmlnTW9kYWwoKTtcbiAgaW5pdENoYXJ0cygpO1xuICBpbml0WmlwU2VhcmNoKCk7XG4gIGluaXRMb2dpblN0YXR1c0NvbXBvbmVudHMoKTtcbiAgaW5pdExlYWZMZWF0QXR0cmlidXRpb24oKTtcbiAgaW5pdENsaWNrRGltZW5zaW9ucygpO1xufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgQXBwKCk7XG59KTtcbiIsImV4cG9ydCBjb25zdCBpbml0TW9kYWwgPSAobW9kYWw6IEhUTUxFbGVtZW50KSA9PiB7XG4gIGlmICghbW9kYWwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgYm9keTogSFRNTEJvZHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gIGNvbnN0IGNsb3NlQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcignLmItY2xvc2VCdG4nKTtcbiAgY29uc3QgY2FuY2VsQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcignLmItY2FuY2VsQnRuJyk7XG4gIGNvbnN0IHNoYWRvd0JveCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5jLWxheWVyLS1zaGFkb3dib3gnKTtcbiAgY29uc3Qgc2hvd0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10YXJnZXQtbW9kYWxdJyk7XG5cbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdiLW1vZGFsLS1vcGVuJyk7XG4gICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbiAgfTtcblxuICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuXG4gIGlmIChjYW5jZWxCdG4pIHtcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcbiAgfVxuXG4gIGlmIChzaGFkb3dCb3gpIHtcbiAgICBzaGFkb3dCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcbiAgfVxuXG4gIGlmIChzaG93QnRucyAmJiBzaG93QnRucy5sZW5ndGggPiAwKSB7XG4gICAgc2hvd0J0bnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnc2hvdyBtb2RhbCBidXR0b24gY2xpY2tlZCcsIGUpO1xuICAgICAgICBjb25zdCBidG4gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0YXJnZXQgbW9kYWwnLCBidG4uZGF0YXNldC50YXJnZXRNb2RhbCk7XG4gICAgICAgIC8vIFRoaXMgc2hvdWxkIHByb2JhYmx5IHN3YXAgb3V0IGNvbnRlbnQgb24gYSBzaW5ndWxhciBtb2RhbFxuICAgICAgICBjb25zdCB0YXJnZXRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYFtkYXRhLW1vZGFsLW5hbWU9JyR7YnRuLmRhdGFzZXQudGFyZ2V0TW9kYWx9J11gXG4gICAgICAgICk7XG4gICAgICAgIHRhcmdldE1vZGFsLmNsYXNzTGlzdC5hZGQoJ2ItbW9kYWwtLW9wZW4nKTtcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBpbml0TW9kYWxzID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYi1tb2RhbCcpO1xuXG4gIGlmIChtb2RhbHMpIHtcbiAgICBtb2RhbHMuZm9yRWFjaCgobW9kYWw6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICBpbml0TW9kYWwobW9kYWwpO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaW5pdFNwcmlnTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IHNwcmlnTW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmItc3ByaWdNb2RhbE9ic2VydmVyJyk7XG5cbiAgaWYgKHNwcmlnTW9kYWxzKSB7XG4gICAgY29uc3QgY2FsbEJhY2sgPSAoc3ByaWdNb2RhbE9ic2VydmVyOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgbW9kYWwgPSBzcHJpZ01vZGFsT2JzZXJ2ZXIucXVlcnlTZWxlY3RvcignLmItbW9kYWwnKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGluaXRNb2RhbChtb2RhbCk7XG4gICAgfTtcblxuICAgIHNwcmlnTW9kYWxzLmZvckVhY2goKHNwcmlnTW9kYWxPYnNlcnZlcikgPT4ge1xuICAgICAgY29uc3QgY29uZmlnID0geyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfTtcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT5cbiAgICAgICAgY2FsbEJhY2soc3ByaWdNb2RhbE9ic2VydmVyIGFzIEhUTUxFbGVtZW50KVxuICAgICAgKTtcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoc3ByaWdNb2RhbE9ic2VydmVyLCBjb25maWcpO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0TW9kYWxzO1xuIiwiLy8gRGVncmVlcyAvIEVkdWNhdGlvblxuY29uc3QgYWRkRGVncmVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZERlZ3JlZScpO1xuY29uc3QgZGVncmVlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlZ3JlZUNvbnRhaW5lcicpO1xuXG4vLyBCcm9rZXIgSW4gQ2hhcmdlXG5jb25zdCBsaWNlbnNlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpY2Vuc2VDb250YWluZXInKTtcblxuLy8gR2VuZXJhdGUgSUQgZm9yIGN1c3RvbSBmaWVsZHNcbmZ1bmN0aW9uIGdlbmVyYXRlSUQoKSB7XG4gIHJldHVybiAoTWF0aC5yYW5kb20oKSArIDEpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XG59XG5cbi8vIFJlbW92ZSBSb3dcbmZ1bmN0aW9uIGluaXRSZW1vdmVCdXR0b25zKHNlbGVjdG9yOiBzdHJpbmcsIHBhcmVudENvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgY29uc3QgcmVtb3ZlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG4gIHJlbW92ZUJ1dHRvbnMuZm9yRWFjaCgocmVtb3ZlQnRuKSA9PiB7XG4gICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgIHJlbW92ZUJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxuICAgICAgKTtcbiAgICAgIHBhcmVudENvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgLy8gSW5pdGlhbGl6ZSBhbGwgcmVtb3ZlIGJ1dHRvbnNcbiAgaW5pdFJlbW92ZUJ1dHRvbnMoJy5iLXByb2ZpbGVNYWluX19idXR0b25Db250YWluZXInLCBkZWdyZWVDb250YWluZXIpO1xuICBpbml0UmVtb3ZlQnV0dG9ucygnLmItcHJvZmlsZU1haW5fX2J1dHRvbkNvbnRhaW5lcicsIGxpY2Vuc2VDb250YWluZXIpO1xuXG4gIC8vIERlZ3JlZSBMb2dpY1xuICBpZiAoYWRkRGVncmVlKSB7XG4gICAgYWRkRGVncmVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgLy8gR2VuZXJhdGUgSURcbiAgICAgIGNvbnN0IGlkID0gZ2VuZXJhdGVJRCgpO1xuICAgICAgLy8gRGVncmVlcyAvIEVkdWNhdGlvblxuICAgICAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgaW5wdXRDb250YWluZXIuaWQgPSBgaW5wdXRDb250YWluZXJfJHtpZH1gO1xuICAgICAgaW5wdXRDb250YWluZXIuY2xhc3NOYW1lID0gJ3UtZ2FwLXRvcC00MDAnO1xuICAgICAgaW5wdXRDb250YWluZXIuaW5uZXJIVE1MID0gYDxmaWVsZHNldCBjbGFzcz1cImMtZmxvdyBjLXdpdGhMYXllclwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJiLWZvcm1fX2lucHV0TGFiZWxcIiBmb3I9XCJkZWdyZWVfJHtpZH1cIj5EZWdyZWU8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYi1pbnB1dCBiLWlucHV0VGV4dCBjLXdpdGhMYXllclwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZGVncmVlXyR7aWR9XCIgY2xhc3M9XCJiLWZvcm1fX2lucHV0VGV4dCBjLWJveCB8IGItZm9ybV9faW5wdXRUZXh0IGMtYm94XCIgbmFtZT1cImRlZ3JlZVske2lkfV1bbmFtZV1cIiBwbGFjZWhvbGRlcj1cIkRlZ3JlZSBUaXRsZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLWxheWVyIGMtY2x1c3RlciBjLWJveCB8IHUtZmxleC1qdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImItaWNvbiBiLWlucHV0X19jb21wbGV0ZSB1LXQtY29sb3Itc3RhdGUtZ29vZFwiPjx1c2UgaHJlZj1cIi9zdmcvc3ByaXRlLnN2ZyNjaGVja21hcmtcIj48L3VzZT48L3N2Zz5cbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJiLWljb24gYi1pbnB1dF9faW5jb21wbGV0ZSB1LXQtY29sb3Itc3RhdGUtYmFkXCI+PHVzZSBocmVmPVwiL3N2Zy9zcHJpdGUuc3ZnI3hcIj48L3VzZT48L3N2Zz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJiLWlucHV0X19jb250cm9sXCIgdHlwZT1cImJ1dHRvblwiPjxzdmcgY2xhc3M9XCJiLWljb24gYi1yZXNldElucHV0IHUtdC1jb2xvci1ncmF5c2NhbGUtcHJpbWFyeS05MDBcIj48dXNlIGhyZWY9XCIvc3ZnL3Nwcml0ZS5zdmcjY2lyY2xlLXhcIj48L3VzZT48L3N2Zz48L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzPVwiYi1pbnB1dEhpbnQgdS10ZXh0LTAwXCI+PC9wPjwvZmllbGRzZXQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjLWNsdXN0ZXIgfCB1LWdhcC10b3AtNDAwXCI+PGZpZWxkc2V0IGNsYXNzPVwiYy1mbG93IGMtd2l0aExheWVyXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYi1mb3JtX19pbnB1dExhYmVsXCIgZm9yPVwiZGVncmVlWWVhcl8ke2lkfVwiPkRlZ3JlZSBZZWFyPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImItaW5wdXQgYi1pbnB1dFRleHQgYy13aXRoTGF5ZXJcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRlZ3JlZVllYXJfJHtpZH1cIiBjbGFzcz1cImItZm9ybV9faW5wdXRUZXh0IGMtYm94IHwgYi1mb3JtX19pbnB1dFRleHQgYy1ib3hcIiBuYW1lPVwiZGVncmVlWyR7aWR9XVt5ZWFyXVwiIHBsYWNlaG9sZGVyPVwiRGVncmVlIFllYXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYy1sYXllciBjLWNsdXN0ZXIgYy1ib3ggfCB1LWZsZXgtanVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJiLWljb24gYi1pbnB1dF9fY29tcGxldGUgdS10LWNvbG9yLXN0YXRlLWdvb2RcIj48dXNlIGhyZWY9XCIvc3ZnL3Nwcml0ZS5zdmcjY2hlY2ttYXJrXCI+PC91c2U+PC9zdmc+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzPVwiYi1pY29uIGItaW5wdXRfX2luY29tcGxldGUgdS10LWNvbG9yLXN0YXRlLWJhZFwiPjx1c2UgaHJlZj1cIi9zdmcvc3ByaXRlLnN2ZyN4XCI+PC91c2U+PC9zdmc+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYi1pbnB1dF9fY29udHJvbFwiIHR5cGU9XCJidXR0b25cIj48c3ZnIGNsYXNzPVwiYi1pY29uIGItcmVzZXRJbnB1dCB1LXQtY29sb3ItZ3JheXNjYWxlLXByaW1hcnktOTAwXCI+PHVzZSBocmVmPVwiL3N2Zy9zcHJpdGUuc3ZnI2NpcmNsZS14XCI+PC91c2U+PC9zdmc+PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzcz1cImItaW5wdXRIaW50IHUtdGV4dC0wMFwiPjwvcD48L2ZpZWxkc2V0PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYi1wcm9maWxlTWFpbl9fYnV0dG9uQ29udGFpbmVyIHUtYm94LWZsZXggdS1mbGV4LWRpci1yb3cgdS1mbGV4LXNlbGYtZW5kXCI+PGJ1dHRvbiBjbGFzcz1cInJlbW92ZS1kZWdyZWUgfCB1LWdhcC1yaWdodC0yMDBcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1pZD1cImlucHV0Q29udGFpbmVyXyR7aWR9XCI+XG4gICAgICAgICAgPHN2ZyBjbGFzcz1cImItaWNvbiBcIj48dXNlIGhyZWY9XCIvc3ZnL3Nwcml0ZS5zdmcjdHJhc2hcIj48L3VzZT48L3N2Zz48L2J1dHRvbj48c3BhbiBjbGFzcz1cInUtdHQtdXBwZXIgdS13ZWlnaHQtYm9sZFwiPkRlbGV0ZTwvc3Bhbj48L2Rpdj48L2Rpdj5cbiAgICAgICAgPC9kaXY+YDtcblxuICAgICAgZGVncmVlQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0Q29udGFpbmVyKTtcbiAgICAgIGluaXRSZW1vdmVCdXR0b25zKCcuYi1wcm9maWxlTWFpbl9fYnV0dG9uQ29udGFpbmVyJywgZGVncmVlQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIENyZWRlbnRpYWxzIExvZ2ljXG4gIGNvbnN0IGNyZWRlbnRpYWxzQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICcuYi1wcm9maWxlTWFpbl9fY2hlY2tib3gnXG4gICk7XG5cbiAgY3JlZGVudGlhbHNCb3hlcy5mb3JFYWNoKChib3g6IEhUTUxJbnB1dEVsZW1lbnQpID0+IHtcbiAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBjcmVkZW50aWFsQ29udGFpbmVyID0gYm94LnBhcmVudE5vZGUucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChib3guY2hlY2tlZCkge1xuICAgICAgICBjcmVkZW50aWFsQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ItYnV0dG9uLS10ZXJ0aWFyeScpO1xuICAgICAgICBjcmVkZW50aWFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ItYnV0dG9uLS1wcmltYXJ5Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjcmVkZW50aWFsQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ItYnV0dG9uLS1wcmltYXJ5Jyk7XG4gICAgICAgIGNyZWRlbnRpYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYi1idXR0b24tLXRlcnRpYXJ5Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzL2F1dG8nO1xuXG4vLyBSZWFkeSBkYXRhIGNvbW1pbmcgZnJvbSBjb21tb2RpdGllcyB0byBiZSB1c2VkIGluIGNoYXJ0LmpzXG5cbmV4cG9ydCBjb25zdCBpbml0Q2hhcnRzID0gKCkgPT4ge1xuICBjb25zdCByb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmItc3RvY2tMaXN0aW5nX19yb3cnKTtcbiAgcm93cy5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XG4gICAgY29uc3QgY2hhcnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHN0b2NrQ2hhcnQtJHtpbmRleH1gKTtcbiAgICBjb25zdCBzdG9ja0RhdGEgPSB7XG4gICAgICBsYWJlbHM6IEpTT04ucGFyc2UoY2hhcnRFbGVtZW50LmRhdGFzZXQubGFiZWxzKSxcbiAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhOiBKU09OLnBhcnNlKGNoYXJ0RWxlbWVudC5kYXRhc2V0LnByaWNlcyksIC8vIFNhbXBsZSBzdG9jayBwcmljZXNcbiAgICAgICAgICBib3JkZXJDb2xvcjogY2hhcnRFbGVtZW50LmRhdGFzZXQuY29sb3IsXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgICAgcG9pbnRSYWRpdXM6IDAsXG4gICAgICAgICAgZmlsbDogZmFsc2VcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgQ2hhcnQgaW5zdGFuY2VcbiAgICBjb25zdCBjdHggPSAoY2hhcnRFbGVtZW50IGFzIGFueSkuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICB0eXBlOiAnbGluZScsXG4gICAgICBkYXRhOiBzdG9ja0RhdGEsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHNjYWxlczoge1xuICAgICAgICAgIHg6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlIC8vIEhpZGUgeC1heGlzIGxhYmVsc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgeToge1xuICAgICAgICAgICAgYmVnaW5BdFplcm86IGZhbHNlLFxuICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlIC8vIEhpZGUgbGVnZW5kXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdENoYXJ0cztcbiIsImltcG9ydCB7IGdldExvZ2luU3RhdHVzIH0gZnJvbSAnLi4vdXRpbHMvTG9naW5TdGF0dXMnO1xuaW1wb3J0IHsgcXVlcnlQYXJlbnRzIH0gZnJvbSAnLi4vdXRpbHMvUXVlcnlQYXJlbnRzJztcblxuLy8gVE8gRE8gYWRkIGludGVyZmFjZSBmb3IgcmVwc29uc2Ugb24gZmF2b3JpdGVzXG5cbi8vIEFsc28gdGhlIHRvZ2dsZSBhbmQgZ2V0IGZ1bmN0aW9ucyBhcmUgdmVyeSBzaW1pbGFyIGFuZCBjb3VsZCBwcm9iYWJseVxuLy8gYmUgY29uc29saWRhdGUgdXNpbmcgYXJndW1lbnRzLCBvciBhbiBhcmd1bWVudCBub3Qgc3VyZSB3aGF0IHRoZSBuYW1lIHdvdWxkIGJlXG5hc3luYyBmdW5jdGlvbiB0b2dnbGVGYXZvcml0ZVByb3BlcnR5KHByb3BlcnR5SWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gIGNvbnN0IHRva2VuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnW25hbWU9XCJDUkFGVF9DU1JGX1RPS0VOXCJdJ1xuICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgY29uc3QgcGFyYW1zOiBSZXF1ZXN0SW5pdCA9IHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBwcm9wZXJ0eUlkLFxuICAgICAgQ1JBRlRfQ1NSRl9UT0tFTjogdG9rZW4udmFsdWVcbiAgICB9KSxcbiAgICBtZXRob2Q6ICdQT1NUJ1xuICB9O1xuXG4gIGNvbnN0IGZhdm9yaXRlUHJvcGVydHlSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICcvYXBpL3YxL3Byb3BlcnRpZXMvZmF2b3JpdGUnLFxuICAgIHBhcmFtc1xuICApXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGEuc2F2ZWRQcm9wZXJ0eSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcygnZGV2JykpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICByZXR1cm4gZmF2b3JpdGVQcm9wZXJ0eVJlc3BvbnNlO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNQcm9wZXJ0eUFGYXZvcml0ZShwcm9wZXJ0eUlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICBjb25zdCB1c2VySXNMb2dnZWRJbiA9IGdldExvZ2luU3RhdHVzKCk7XG4gIGlmICghdXNlcklzTG9nZ2VkSW4pIHJldHVybiBmYWxzZTtcblxuICBjb25zdCB0b2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJ1tuYW1lPVwiQ1JBRlRfQ1NSRl9UT0tFTlwiXSdcbiAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXG4gIGNvbnN0IHBhcmFtczogUmVxdWVzdEluaXQgPSB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04J1xuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgcHJvcGVydHlJZCxcbiAgICAgIENSQUZUX0NTUkZfVE9LRU46IHRva2VuLnZhbHVlXG4gICAgfSksXG4gICAgbWV0aG9kOiAnUE9TVCdcbiAgfTtcblxuICBjb25zdCBmYXZvcml0ZVByb3BlcnR5UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAnL2FwaS92MS9wcm9wZXJ0aWVzL2lzLWZhdm9yaXRlJyxcbiAgICBwYXJhbXNcbiAgKVxuICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLmZhdm9yaXRlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdkZXYnKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gIHJldHVybiBmYXZvcml0ZVByb3BlcnR5UmVzcG9uc2U7XG59XG5cbmV4cG9ydCBjb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmItbW9kYWwnKTtcbiAgaWYgKG1vZGFsKSB7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYi1tb2RhbC0tb3BlbicpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc2F2ZWRQcm9wZXJ0eUFzRmF2b3JpdGUgPSAoZTogRXZlbnQpID0+IHtcbiAgY29uc3QgdGFyZ2V0RWwgPSBlLnRhcmdldCBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgY29uc3QgYnV0dG9uID0gcXVlcnlQYXJlbnRzKHRhcmdldEVsLCAnYi1mYXZvcml0ZVByb3BlcnR5VG9nZ2xlJyk7XG4gIGNvbnN0IHsgcHJvcGVydHlJZCB9ID0gYnV0dG9uLmRhdGFzZXQ7XG4gIGNvbnN0IHNhdmVMaXN0aW5nVGV4dDogSFRNTEVsZW1lbnQgPSB0YXJnZXRFbC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gIGNvbnN0IHJlcXVlc3RSZXNwb25zZSA9IHRvZ2dsZUZhdm9yaXRlUHJvcGVydHkocHJvcGVydHlJZCk7XG4gIGlmIChyZXF1ZXN0UmVzcG9uc2UpIHtcbiAgICAvLyBMaXN0aW5nc1xuICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdiLXN0YXInKSkge1xuICAgICAgY29uc3QgYWN0aXZlQ2xhc3MgPSAnYi1mYXZvcml0ZVByb3BlcnR5VG9nZ2xlLS1hY3RpdmUnO1xuICAgICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoYWN0aXZlQ2xhc3MpKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUNsYXNzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNsYXNzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gU2F2ZSBvbiBkZXRhaWwgcGFnZXNcbiAgICBpZiAoc2F2ZUxpc3RpbmdUZXh0KSB7XG4gICAgICBpZiAoc2F2ZUxpc3RpbmdUZXh0LnRleHRDb250ZW50ID09PSAnU2F2ZSBQcm9wZXJ0eScpIHtcbiAgICAgICAgc2F2ZUxpc3RpbmdUZXh0LnRleHRDb250ZW50ID0gJ1JlbW92ZSBmcm9tIGxpc3RpbmcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2F2ZUxpc3RpbmdUZXh0LnRleHRDb250ZW50ID0gJ1NhdmUgUHJvcGVydHknO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgb24gYWNjb3VudCBmYXZvcml0ZXNcbiAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYi1mYXYtZGVsZXRlJykpIHtcbiAgICAgIGNvbnN0IGxpc3RpbmcgPSBxdWVyeVBhcmVudHMoYnV0dG9uLCAnYi1wcm9maWxlTWFpbl9fY2FyZCcpO1xuICAgICAgbGlzdGluZy5yZW1vdmUoKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIEF0dGFjaCB0aGlzIGltbWVkaWF0bHkgbm90IHdhaXRpbmcgZm9yIHRoZSBwcm9taXNlIHJlc3BvbnNlXG5jb25zdCBmYXZvcml0ZUJ1dHRvblByZXZlbnRQYWdlQ2hhbmdlcyA9IChcbiAgYnV0dG9uczogTm9kZUxpc3RPZjxIVE1MQnV0dG9uRWxlbWVudD5cbikgPT4ge1xuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQpID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vLyBUaGVzZSBjYW4gYmUgcmVtb3ZlZCBhbmQgY29uc29saWRhdGVkIGludG8gdGhlIGluaXRcbmNvbnN0IGluaXRBbm9ueW1vdXNVc2VyID0gKGJ1dHRvbnM6IE5vZGVMaXN0T2Y8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1vZGFsKTtcbiAgfSk7XG59O1xuXG5jb25zdCBpbml0UmVjb2duaXplZFVzZXIgPSAoYnV0dG9uczogTm9kZUxpc3RPZjxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzYXZlZFByb3BlcnR5QXNGYXZvcml0ZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRGYXZvcml0ZVByb3BlcnRpZXMoXG4gIHRhcmdldERhdGEgPSAnW2RhdGEtZmF2b3JpdGUtcHJvcGVydHktdG9nZ2xlXSdcbikge1xuICBjb25zdCBmYXZvcml0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgIHRhcmdldERhdGFcbiAgKSBhcyBOb2RlTGlzdE9mPEhUTUxCdXR0b25FbGVtZW50PjtcbiAgLy8gQ2hlY2sgaWYgYnV0dG9ucyBleGlzdCBiZWZvcmUgY2hlY2tpbmcgbG9naW4gc3RhdHVzXG4gIGlmIChmYXZvcml0ZUJ1dHRvbnMpIHtcbiAgICBmYXZvcml0ZUJ1dHRvblByZXZlbnRQYWdlQ2hhbmdlcyhmYXZvcml0ZUJ1dHRvbnMpO1xuICAgIC8vIEdldCB0aGUgbG9naW4gc3RhdHVzIG9uY2UsIHRoZW4gZGVwZW5kaW5nIG9uIHRoZSBsb2dpbiBzdGF0dXNcbiAgICAvLyBhdHRhY2ggYSBkaWZmZXJlbnQgZXZlbnQgbGlzdG5lciB0byBlYWNoIGJ1dHRvbiB3aXRoIHRhcmdldCBkYXRhLlxuXG4gICAgLy8gV2l0aCB0aGlzIG1ldGhvZCB3ZSBubyBsb25nZXIgbmVlZCB0byBjaGVjayBmb3IgZGlmZmVyZW50IGJ1dHRvbiB0eXBlc1xuICAgIC8vIFRoZXJlIGFyZSBpbnN0YW5jZXMgd2hlcmUgZGF0YS1wcm9wZXJ0eS1pZCBtYXkgZXhpc3QgYnV0IHNob3VsZG4ndCBiZSBhIGZhdm9yaXRlIGJ1dHRvbi4gU28gaW5zdGVhZCB3ZSBjYW4gdGFyZ2V0IGEgZGlmZmVyZW50IGRhdGEgYXR0ciB0aGF0IGV4aXN0cyBzb2xlbHkgYXMgYSBjaGVjayBvZiB3aGV0aGVyIHRoZSBidXR0b24gc2hvdWxkIGZ1bmN0aW9uXG4gICAgLy8gQW4gZXhhbXBsZSBJIGJlbGlldmUgaXMgb24gQUZNIGFjY291bnQgcGFnZS4gV2hlcmUgdGhlcmUncyBhbiBlbGVtZW50IHRoYXQgZG9lcyBoYXZlIHRoZSBkYXRhLXByb3BlcnR5LWlkLCBidXQgZG9lc24ndCBuZWVkIHRvIGhhdmUgYW4gb24gY2xpY2tcbiAgICBjb25zdCB1c2VySXNMb2dnZWRJbiA9IGdldExvZ2luU3RhdHVzKCk7XG4gICAgY29uc3QgaW5pdEJ1dHRvbnNGdW5jdGlvbiA9IHVzZXJJc0xvZ2dlZEluXG4gICAgICA/IGluaXRSZWNvZ25pemVkVXNlclxuICAgICAgOiBpbml0QW5vbnltb3VzVXNlcjtcblxuICAgIGluaXRCdXR0b25zRnVuY3Rpb24oZmF2b3JpdGVCdXR0b25zKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0RmF2b3JpdGVQcm9wZXJ0aWVzO1xuIiwiLyoqXG4gKiBJbXBvcnRzXG4gKi9cbi8vIGltcG9ydCB7IGRlYm91bmNlLCB0aHJvdHRsZSB9IGZyb20gJ2xvZGFzaCc7XG5cbi8qKlxuICogRm9yIHNvbWUgcmVhc29uIGxvZGFzaCBpcyBjYXVzaW5nIHByb2JsZW1zIGFuZCBub3QgZ2l2aW5nIGEgc2luZ2xlIGVycm9yIHRvIHVuZGVyc3RhbmQgd2h5L2hvdy5cbiAqL1xuY29uc3QgZGVib3VuY2UgPSAoY2FsbGJhY2s6IEZ1bmN0aW9uLCB0aW1lOiBudW1iZXIgPSAyNTApID0+IHtcbiAgbGV0IHRpbWVyOiBhbnk7XG4gIHJldHVybiAoLi4uYXJnczogYW55KSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSwgdGltZSk7XG4gIH07XG59O1xuXG4vKipcbiAqIEhlYWRlciBDbGFzc1xuICovXG5jbGFzcyBIZWFkZXIge1xuICBib2R5OiBIVE1MQm9keUVsZW1lbnQgfCBhbnk7XG5cbiAgaGVhZGVyOiBIVE1MRWxlbWVudCA9IG51bGw7XG5cbiAgbG9nbzogSFRNTEVsZW1lbnQgPSBudWxsO1xuXG4gIG1vYmlsZVRyaWdnZXI6IEhUTUxCdXR0b25FbGVtZW50O1xuXG4gIG5hdkxpbmtzOiBIVE1MQW5jaG9yRWxlbWVudFtdO1xuXG4gIG5hdkxpbmtzSW5TdWJuYXY6IEhUTUxBbmNob3JFbGVtZW50W107XG5cbiAgbmF2TGlua3NXaXRoQ2hpbGRyZW46IEhUTUxBbmNob3JFbGVtZW50W107XG5cbiAgYWNjb3VudExpbmtzOiBIVE1MQW5jaG9yRWxlbWVudFtdO1xuXG4gIGhlYWRlckJyZWFrcG9pbnQ6IG51bWJlciA9IDEyODA7IC8vIDEyODAgPSBnb3JrbyBcImxnXCIgYnJlYWtwb2ludCAoODBlbSlcblxuICBjb25zdHJ1Y3RvcihoZWFkZXJFbDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLmJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIHRoaXMuaGVhZGVyID0gaGVhZGVyRWw7XG4gICAgdGhpcy5sb2dvID0gdGhpcy5oZWFkZXIucXVlcnlTZWxlY3RvcignW2RhdGEtaGVhZGVyLWxvZ29dJyk7XG4gICAgdGhpcy5tb2JpbGVUcmlnZ2VyID0gdGhpcy5oZWFkZXIucXVlcnlTZWxlY3RvcignW2RhdGEtbW9iaWxlLXRyaWdnZXJdJyk7XG4gICAgdGhpcy5uYXZMaW5rcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLmhlYWRlci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1oZWFkZXItbGlua10nKVxuICAgICk7XG4gICAgdGhpcy5uYXZMaW5rc0luU3VibmF2ID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuaGVhZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWhlYWRlci1saW5rPVwic3VibmF2XCJdJylcbiAgICApO1xuICAgIHRoaXMubmF2TGlua3NXaXRoQ2hpbGRyZW4gPSB0aGlzLm5hdkxpbmtzLmZpbHRlcihcbiAgICAgIChsaW5rKSA9PiBsaW5rLmdldEF0dHJpYnV0ZSgnZGF0YS1oYXMtY2hpbGRyZW4nKSA9PT0gJ3RydWUnXG4gICAgKTtcbiAgICB0aGlzLmFjY291bnRMaW5rcyA9IHRoaXMubmF2TGlua3MuZmlsdGVyKChsaW5rKSA9PlxuICAgICAgbGluay5oYXNBdHRyaWJ1dGUoJ2RhdGEtYWNjb3VudC1saW5rJylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSB0aGUgbW9iaWxlIHRyaWdnZXIgKGhhbWJ1cmdlcikgYmVpbmcgY2xpY2tlZCB0byBvcGVuL2Nsb3NlIG5hdlxuICAgKlxuICAgKiBAcmV0dXJuICAgIHt1bmRlZmluZWR9ICAgICAgICAgIHJldHVybnMgbm90aGluZywgdW5kZWZpbmVkXG4gICAqL1xuICBoYW5kbGVNb2JpbGVUcmlnZ2VyQ2xpY2soKSB7XG4gICAgdGhpcy5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2ItYm9keS0tbG9ja2VkJyk7XG4gICAgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYi1oZWFkZXItLW1vYmlsZU5hdkFjdGl2ZScpO1xuICAgIHRoaXMuaGFuZGxlUmVzcG9uc2l2ZVRhYkluZGV4aW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGEgY2xpY2sgb24gYSBuYXYgaXRlbSB3aXRoIGNoaWxkcmVuLlxuICAgKiBJZiBkZXNrdG9wOiBpZ25vcmUuXG4gICAqIElmIG1vYmlsZTogcHJldmVudERlZmF1bHQsIG9wZW4gc3VibmF2IGFuZCBhZGp1c3QgdGFiSW5kZXhpbmdcbiAgICpcbiAgICogQHJldHVybiAgICB7dW5kZWZpbmVkfSAgICAgICAgICByZXR1cm5zIG5vdGhpbmcsIHVuZGVmaW5lZFxuICAgKi9cbiAgaGFuZGxlTGlua1dpdGhDaGlsZHJlbkNsaWNrKGU6IGFueSk6IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgaXNNb2JpbGVNZW51ID0gd2luZG93LmlubmVyV2lkdGggPCB0aGlzLmhlYWRlckJyZWFrcG9pbnQ7XG4gICAgY29uc3QgdGFyZ2V0TGlua1BhcmVudCA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgY29uc3QgY2hpbGRMaW5rcyA9IHRhcmdldExpbmtQYXJlbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICdbZGF0YS1oZWFkZXItbGluaz1cInN1Ym5hdlwiXSdcbiAgICApO1xuXG4gICAgaWYgKGlzTW9iaWxlTWVudSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGFyZ2V0TGlua1BhcmVudC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcblxuICAgICAgaWYgKHRhcmdldExpbmtQYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICBjaGlsZExpbmtzLmZvckVhY2goKGxpbms6IGFueSkgPT4ge1xuICAgICAgICAgIGxpbmsudGFiSW5kZXggPSAnMCc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZExpbmtzLmZvckVhY2goKGxpbms6IGFueSkgPT4ge1xuICAgICAgICAgIGxpbmsudGFiSW5kZXggPSAnLTEnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBSZXNwb25zaXZlIFRhYkluZGV4aW5nIGJ5IGRpc2FibGluZyB0aGUgbGlua3Mgd2hlbiBtb2JpbGUgYW5kIG5vdCBhY3RpdmVcbiAgICpcbiAgICogQHJldHVybiAgICB7dW5kZWZpbmVkfSAgICAgICAgICAgICAgICAgICAgcmV0dXJucyBub3RoaW5nLCB1bmRlZmluZWRcbiAgICovXG4gIGhhbmRsZVJlc3BvbnNpdmVUYWJJbmRleGluZygpOiB1bmRlZmluZWQge1xuICAgIGNvbnN0IGlzTW9iaWxlTWVudSA9IHdpbmRvdy5pbm5lcldpZHRoIDwgdGhpcy5oZWFkZXJCcmVha3BvaW50O1xuICAgIGNvbnN0IGlzTW9iaWxlTWVudUFjdGl2ZSA9IHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucyhcbiAgICAgICdiLWhlYWRlci0tbW9iaWxlTmF2QWN0aXZlJ1xuICAgICk7XG5cbiAgICBpZiAoaXNNb2JpbGVNZW51ICYmICFpc01vYmlsZU1lbnVBY3RpdmUpIHtcbiAgICAgIHRoaXMubmF2TGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICBsaW5rLnRhYkluZGV4ID0gLTE7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHRoaXMubmF2TGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgLy8gRG9uJ3QgYWRqdXN0IHN1Ym5hdiBsaW5rcyBvbiBtb2JpbGUsIHdlIGhhbmRsZSB0aG9zZSBhIGxpdHRsZSBkaWZmZXJlbnRseVxuICAgICAgaWYgKCF0aGlzLm5hdkxpbmtzSW5TdWJuYXYuaW5jbHVkZXMobGluaykgfHwgIWlzTW9iaWxlTWVudSkge1xuICAgICAgICBsaW5rLnRhYkluZGV4ID0gMDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhpbmdzIHN1Y2ggYXMgYWN0aXZlIHN0YXRlcyB3aGVuZXZlciBhIHVzZXIgY2hhbmdlcyBmcm9tIHNtYWxsIHRvIGxhcmdlIHZpZXdwb3J0IG9yIHZpY2UtdmVyc2FcbiAgICpcbiAgICogQHJldHVybiAgICB7dW5kZWZpbmVkfSAgICAgICAgICByZXR1cm5zIG5vdGhpbmcsIHVuZGVmaW5lZFxuICAgKi9cbiAgaGFuZGxlUmVzcG9uc2l2ZVVYKCk6IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgaXNEZXNrdG9wSGVhZGVyID0gd2luZG93LmlubmVyV2lkdGggPiB0aGlzLmhlYWRlckJyZWFrcG9pbnQ7XG5cbiAgICBpZiAoaXNEZXNrdG9wSGVhZGVyKSB7XG4gICAgICB0aGlzLmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYi1ib2R5LS1sb2NrZWQnKTtcbiAgICAgIHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ItaGVhZGVyLS1tb2JpbGVOYXZBY3RpdmUnKTtcbiAgICAgIHRoaXMubmF2TGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICBjb25zdCBsaW5rUGFyZW50ID0gbGluay5wYXJlbnRFbGVtZW50O1xuICAgICAgICBpZiAobGlua1BhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgbGlua1BhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRoZSBzdGlja3kgaGVhZGVyIHdoZW4gc2Nyb2xsaW5nXG4gICAqIElmIGRlc2t0b3A6IGFkZC9yZW1vdmUgY2xhc3MgdG8gYm9keVxuICAgKiBJZiBtb2JpbGU6IGRvIG5vdGhpbmdcbiAgICpcbiAgICogQHJldHVybiAgICB7dW5kZWZpbmVkfSAgICAgICAgICByZXR1cm5zIG5vdGhpbmcsIHVuZGVmaW5lZFxuICAgKi9cbiAgaGFuZGxlU3RpY2t5SGVhZGVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGlzTW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPCB0aGlzLmhlYWRlckJyZWFrcG9pbnQgYXMgYm9vbGVhbjtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYi1oZWFkZXInKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSBoZWFkZXIub2Zmc2V0SGVpZ2h0IGFzIG51bWJlcjtcbiAgICBcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0taGVhZGVyLWhlaWdodCcsIGAke2hlYWRlckhlaWdodH1weGApO1xuXG4gICAgaWYgKGlzTW9iaWxlKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUJvZHlDbGFzcygpIHtcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IGhlYWRlckhlaWdodCArIDEwKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImRlc2t0b3BTdGlja3lBY3RpdmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJkZXNrdG9wU3RpY2t5QWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJ1biBvbiBpbml0aWFsIHBhZ2UgbG9hZFxuICAgIHVwZGF0ZUJvZHlDbGFzcygpO1xuXG4gICAgLy8gUnVuIG9uIHNjcm9sbFxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdXBkYXRlQm9keUNsYXNzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgZm9yIGF0dGFjaGluZyBvdXIgZXZlbnQgbGlzdGVuZXJzXG4gICAqL1xuICBhdHRhY2hMaXN0ZW5lcnMoKSB7XG4gICAgLy8gQmFzaWMgaGFtYnVyZ2VyIG1lbnUgY2xpY2tcbiAgICB0aGlzLm1vYmlsZVRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgdGhpcy5oYW5kbGVNb2JpbGVUcmlnZ2VyQ2xpY2soKVxuICAgICk7XG5cbiAgICAvLyBIYW5kbGUgbGlua3Mgd2l0aCBzdWJuYXZzXG4gICAgdGhpcy5uYXZMaW5rc1dpdGhDaGlsZHJlbi5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+XG4gICAgICAgIHRoaXMuaGFuZGxlTGlua1dpdGhDaGlsZHJlbkNsaWNrKGUpXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgLy8gV2luZG93IEV2ZW50c1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ3Jlc2l6ZScsXG4gICAgICBkZWJvdW5jZSgoKSA9PiB0aGlzLmhhbmRsZVJlc3BvbnNpdmVUYWJJbmRleGluZygpKVxuICAgICk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAncmVzaXplJyxcbiAgICAgIGRlYm91bmNlKCgpID0+IHRoaXMuaGFuZGxlUmVzcG9uc2l2ZVVYKCkpXG4gICAgKTtcblxuICAgIHRoaXMuaGFuZGxlU3RpY2t5SGVhZGVyKCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIC8vIFJlbW92ZSBOb0pTIERhdGEgQXR0ciB0byBzaWduYWwgdGhhdCBKUyBpcyBlbmFibGVkXG4gICAgdGhpcy5oZWFkZXIucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWpzLWRpc2FibGVkJyk7XG5cbiAgICAvLyBBdHRhY2ggbGlzdGVuZXJzIGFuZCBhbnkgb3RoZXIgbWV0aG9kcyB0aGF0IG5lZWQgdG8gcnVuIG9uIGluaXRcbiAgICB0aGlzLmF0dGFjaExpc3RlbmVycygpO1xuICAgIHRoaXMuaGFuZGxlUmVzcG9uc2l2ZVRhYkluZGV4aW5nKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBJbml0aWFsaXphdGlvblxuICpcbiAqIEByZXR1cm4gICAge3VuZGVmaW5lZH0gICAgICAgICAgW3JldHVybnMgbm90aGluZywgaW5pdGlhbGl6ZXMgaGVhZGVyXVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0SGVhZGVyKCk6IEhlYWRlciB7XG4gIGxldCBoZWFkZXI6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcblxuICBpZiAoIWhlYWRlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaGVhZGVyID0gbmV3IEhlYWRlcihoZWFkZXIpO1xuICBoZWFkZXIuaW5pdCgpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG4iLCIvKipcbiAqIEltcG9ydHNcbiAqL1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IExlYWZsZXRNYXAgZnJvbSAnLi9MZWFmbGV0TWFwJztcblxuLyoqXG4gKiBIdW50aW5nTGVhc2VNYXAgQ2xhc3NcbiAqL1xuY2xhc3MgSHVudGluZ0xlYXNlTWFwIGV4dGVuZHMgTGVhZmxldE1hcCB7XG4gIC8qKlxuICAgKiBNb2R1bGUncyB0b3AtbGV2ZWwgZWxlbWVudCAoc2VjdGlvbilcbiAgICovXG4gIHBhcmVudEVsOiBIVE1MRWxlbWVudCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocGFyZW50RWw6IEhUTUxFbGVtZW50KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1laWxpSW5kZXggPSAnaHVudGluZ0xlYXNlTmV0d29ya19hdWN0aW9ucyc7XG4gICAgdGhpcy5nbG9iYWxGaWx0ZXJzID0gW1wicHJvcGVydHlTdGF0dXMgIT0gJ2xlYXNlZCdcIl07XG4gICAgdGhpcy5wYXJlbnRFbCA9IHBhcmVudEVsO1xuICAgIHRoaXMubG9hZGluZ0NvbnRhaW5lciA9IHRoaXMucGFyZW50RWw7XG4gICAgdGhpcy5kZWZhdWx0WmlwID0gdGhpcy5wYXJlbnRFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGVmYXVsdC16aXAnKTtcbiAgICB0aGlzLm1hcENvbnRhaW5lciA9IHRoaXMucGFyZW50RWwucXVlcnlTZWxlY3RvcignW2RhdGEtaHVudGluZy1sZWFzZS1tYXBdJyk7XG4gICAgdGhpcy5yZWxhdGl2ZUxvY2F0aW9uVGV4dEVsID0gdGhpcy5wYXJlbnRFbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ1tkYXRhLXJlbGF0aXZlLWxvY2F0aW9uXSdcbiAgICApO1xuICAgIHRoaXMucmVzdWx0c0xlbmd0aFRleHRFbCA9IHRoaXMucGFyZW50RWwucXVlcnlTZWxlY3RvcihcbiAgICAgICdbZGF0YS1yZXN1bHRzLWNvdW50XSdcbiAgICApO1xuICAgIHRoaXMuc2VhcmNoSW5wdXQgPSB0aGlzLnBhcmVudEVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXF1ZXJ5LWlucHV0XScpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFueXRoaW5nIHRoYXQgbmVlZHMgdG8gaGFwcGVuIG9uIHRoZSBpbml0aWFsIHJlcXVlc3RcbiAgICovXG4gIGhhbmRsZUluaXRpYWxSZXF1ZXN0KCkge1xuICAgIC8vIFdlIHRyeSB0byBxdWVyeSB2aWEgZ2VvbG9jYXRpb24gZmlyc3QsIHRoaXMgbWV0aG9kIGhhbmRsZXMgZmFsbGJhY2tzXG4gICAgdGhpcy5zZWFyY2hWaWFHZW9sb2NhdGlvbigpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgbWFya2VyQm91bmRzR3JvdXAgPSB0aGlzLkxlYWYuZmVhdHVyZUdyb3VwKHRoaXMubWFya2Vycyk7XG4gICAgICBjb25zdCBtYXJrZXJCb3VuZHMgPSBtYXJrZXJCb3VuZHNHcm91cC5nZXRCb3VuZHMoKTtcbiAgICAgIHRoaXMubWFwLnNldFZpZXcobWFya2VyQm91bmRzLmdldENlbnRlcigpLCA1KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgZm9yIGF0dGFjaGluZyBvdXIgZXZlbnQgbGlzdGVuZXJzXG4gICAqL1xuICBhdHRhY2hMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2tleXVwJyxcbiAgICAgIGRlYm91bmNlKChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBlO1xuICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSB0YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICAgICAgICAvLyBjaGVjayBpZiB2YWx1ZSBpcyBhIHppcCBjb2RlXG4gICAgICAgIHRoaXMuaGFuZGxlU2VhcmNoSW5wdXRDaGFuZ2UodmFsdWUpO1xuICAgICAgfSwgMTAwMClcbiAgICApO1xuXG4gICAgdGhpcy5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZTogRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBlO1xuICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICAgIC8vIGNoZWNrIGlmIHZhbHVlIGlzIGEgemlwIGNvZGVcbiAgICAgIHRoaXMuaGFuZGxlU2VhcmNoSW5wdXRDaGFuZ2UodmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICAvLyBJbml0aWFsaXphdGlvbiBhbmQgbGlzdGVuZXJzXG4gICAgdGhpcy5sb2FkTWFwKCk7XG4gICAgdGhpcy5hdHRhY2hMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmhhbmRsZUluaXRpYWxSZXF1ZXN0KCk7XG4gIH1cbn1cblxuLyoqXG4gKiBJbml0aWFsaXphdGlvblxuICpcbiAqIEByZXR1cm4gICAge3VuZGVmaW5lZH0gICAgICAgICAgcmV0dXJucyBub3RoaW5nLCBpbml0aWFsaXplcyBDbGFzc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0TW9kdWxlKCkge1xuICBjb25zdCBodW50aW5nTGVhc2VNb2R1bGVzOiBhbnlbXSA9IEFycmF5LmZyb20oXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtaHVudGluZy1sZWFzZS1tYXAtbW9kdWxlXScpXG4gICk7XG5cbiAgaHVudGluZ0xlYXNlTW9kdWxlcy5mb3JFYWNoKChtb2R1bGUpID0+IHtcbiAgICBjb25zdCBodW50aW5nTGVhc2VNb2R1bGU6IEh1bnRpbmdMZWFzZU1hcCA9IG5ldyBIdW50aW5nTGVhc2VNYXAobW9kdWxlKTtcbiAgICBodW50aW5nTGVhc2VNb2R1bGUuaW5pdCgpO1xuICB9KTtcbn1cbiIsImNvbnN0IG1vdmVGaXJzdEVsVG9MYXN0ID0gKGU6IEV2ZW50KSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XG4gIHRhcmdldC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbWFnZUZhZGVyVGVtcGxhdGUgPSAoaW1hZ2VzOiBzdHJpbmdbXSkgPT4ge1xuICBjb25zdCBpbWFnZVNsaWRlVGVtcGxhdGUgPSAoaXNMYXllcjogYm9vbGVhbiwgaW1hZ2U6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGxheWVyQ2xhc3MgPSBpc0xheWVyID8gJyBjLWxheWVyJyA6ICcnO1xuICAgIHJldHVybiAvKiBodG1sICovIGBcbiAgICAgICAgPGxpIGNsYXNzPSdiLWltYWdlRmFkZXJfX2ltYWdlU2xpZGUgfCBjLWZyYW1lJHtsYXllckNsYXNzfSc+XG4gICAgICAgICAgPGltZyBzcmM9JyR7aW1hZ2V9JyAvPlxuICAgICAgICA8L2xpPlxuICAgICAgYDtcbiAgfTtcblxuICBjb25zdCBwcmV2aWV3SW1hZ2VzID0gaW1hZ2VzLnNsaWNlKDAsIDQpO1xuXG4gIHJldHVybiAvKiBodG1sICovIGBcbiAgPHVsIGNsYXNzPSdiLWltYWdlRmFkZXInIGRhdGEtaW1hZ2UtZmFkZXI+XG4gICAgJHtwcmV2aWV3SW1hZ2VzXG4gICAgICAubWFwKChpbWFnZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgaXNMYXllciA9IGluZGV4ICE9PSAwO1xuICAgICAgICByZXR1cm4gaW1hZ2VTbGlkZVRlbXBsYXRlKGlzTGF5ZXIsIGltYWdlKTtcbiAgICAgIH0pXG4gICAgICAuam9pbignJyl9XG4gIDwvdWw+YDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0SW1hZ2VGYWRlcigpIHtcbiAgY29uc3QgaW1hZ2VGYWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pbWFnZS1mYWRlcl0nKTtcblxuICBpZiAoIWltYWdlRmFkZXJzLmxlbmd0aCkgcmV0dXJuO1xuXG4gIGltYWdlRmFkZXJzLmZvckVhY2goKGZhZGVyRWw6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgZmFkZXJFbC5xdWVyeVNlbGVjdG9yQWxsKCcuYi1pbWFnZUZhZGVyID4gbGknKS5mb3JFYWNoKChzbGlkZSkgPT4ge1xuICAgICAgc2xpZGUuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgbW92ZUZpcnN0RWxUb0xhc3QpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IHVubW91bnRJbWFnZUZhZGVycyA9ICgpID0+IHtcbiAgY29uc3QgaW1hZ2VGYWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pbWFnZS1mYWRlcl0nKTtcblxuICBpZiAoIWltYWdlRmFkZXJzLmxlbmd0aCkgcmV0dXJuO1xuXG4gIGltYWdlRmFkZXJzLmZvckVhY2goKGZhZGVyRWw6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgZmFkZXJFbFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5iLWltYWdlRmFkZXIgPiBsaScpXG4gICAgICAuZm9yRWFjaCgoc2xpZGUpID0+XG4gICAgICAgIHNsaWRlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIG1vdmVGaXJzdEVsVG9MYXN0KVxuICAgICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgaW5pdEltYWdlRmFkZXJNdXRhdGlvbk9ic2VydmVyID0gKHRhcmdldEVsOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgY2FsbGJhY2sgPSAobXV0YXRpb25MaXN0OiBNdXRhdGlvblJlY29yZFtdKSA9PiB7XG4gICAgbXV0YXRpb25MaXN0LmZvckVhY2goKG11dGF0aW9uOiBNdXRhdGlvblJlY29yZCkgPT4ge1xuICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IG11dGF0aW9uO1xuICAgICAgY29uc3QgZWwgPSB0YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCBpc0ZhZGVyQ2hhbmdlID0gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdiLWltYWdlRmFkZXInKTtcbiAgICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gZmlyZSB0aGUgdW5tb3VudCBhbmQgbW91bnQgaWYgdGhlIGltYWdlIGZhZGVyXG4gICAgICAvLyBpcyBhbmltYXRpbmcgZHVlIHRvIGhvdmVyLiBTbyB3ZSBsb29rIGZvciBhbnl0aGluZyBlbHNlIGNoYW5naW5nXG4gICAgICAvLyBXaGljaCBpbmRpY2F0ZXMgdGhhdCBwYWdpbmF0aW9uIHdhcyB1c2VkIHJlcXVpcmluZyBhIHJlbG9hZC5cbiAgICAgIGlmICghaXNGYWRlckNoYW5nZSkge1xuICAgICAgICB1bm1vdW50SW1hZ2VGYWRlcnMoKTtcbiAgICAgICAgaW5pdEltYWdlRmFkZXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB0YXJnZXROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRFbCk7XG5cbiAgaWYgKHRhcmdldE5vZGUpIHtcbiAgICBjb25zdCBjb25maWcgPSB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgY29uZmlnKTtcbiAgfVxuXG4gIC8vIHJldHVybiBvYnNlcnZlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRJbWFnZUZhZGVyO1xuIiwiZXhwb3J0IGNvbnN0IHRvZ2dsZVJlc2V0QnRuID0gKGJ0bjogSFRNTEVsZW1lbnQsIGhpZGU6IGJvb2xlYW4pID0+IHtcbiAgaWYgKGhpZGUpIHtcbiAgICBidG4uc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcbiAgICByZXR1cm47XG4gIH1cbiAgYnRuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG59O1xuXG5jb25zdCBpbml0SW5wdXRzID0gKCkgPT4ge1xuICBjb25zdCB0ZXh0SW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmItaW5wdXRUZXh0Jyk7XG5cbiAgaWYgKHRleHRJbnB1dHMpIHtcbiAgICBjb25zdCB0ZXN0VmFsdWUgPSAodmFsdWU6IHN0cmluZywgcmVnRXhTdHI6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgcmVnRXggPSBuZXcgUmVnRXhwKHJlZ0V4U3RyKTtcbiAgICAgIHJldHVybiByZWdFeC50ZXN0KHZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGlkZUluY29tcGxldGUgPSAoaW5jb21wbGV0ZUljb246IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICBpbmNvbXBsZXRlSWNvbi5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScpO1xuICAgIH07XG5cbiAgICBjb25zdCBzaG93Q29tcGxldGUgPSAoXG4gICAgICBjb21wbGV0ZUljb246IEhUTUxFbGVtZW50LFxuICAgICAgaW5jb21wbGV0ZUljb246IEhUTUxFbGVtZW50XG4gICAgKSA9PiB7XG4gICAgICBoaWRlSW5jb21wbGV0ZShpbmNvbXBsZXRlSWNvbik7XG4gICAgICBjb21wbGV0ZUljb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfTtcblxuICAgIGNvbnN0IHNob3dJbmNvbXBsZXRlID0gKFxuICAgICAgY29tcGxldGVJY29uOiBIVE1MRWxlbWVudCxcbiAgICAgIGluY29tcGxldGVJY29uOiBIVE1MRWxlbWVudFxuICAgICkgPT4ge1xuICAgICAgY29tcGxldGVJY29uLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5Jyk7XG4gICAgICBpbmNvbXBsZXRlSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9O1xuXG4gICAgdGV4dElucHV0cy5mb3JFYWNoKChpbnB1dFVpKSA9PiB7XG4gICAgICBjb25zdCBpbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGlucHV0VWkucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgIGNvbnN0IHJlc2V0QnRuOiBIVE1MRWxlbWVudCA9IGlucHV0VWkucXVlcnlTZWxlY3RvcignLmItaW5wdXRfX2NvbnRyb2wnKTtcbiAgICAgIGNvbnN0IHRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eUJ0bjogSFRNTEVsZW1lbnQgPVxuICAgICAgICBpbnB1dFVpLnF1ZXJ5U2VsZWN0b3IoJy5iLWlucHV0X19wYXNzd29yZCcpO1xuICAgICAgY29uc3QgaW5jb21wbGV0ZUljb246IEhUTUxFbGVtZW50ID0gaW5wdXRVaS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnLmItaW5wdXRfX2luY29tcGxldGUnXG4gICAgICApO1xuICAgICAgY29uc3QgY29tcGxldGVJY29uOiBIVE1MRWxlbWVudCA9XG4gICAgICAgIGlucHV0VWkucXVlcnlTZWxlY3RvcignLmItaW5wdXRfX2NvbXBsZXRlJyk7XG5cbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSwgcGF0dGVybiB9ID0gaW5wdXQ7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICB0b2dnbGVSZXNldEJ0bihyZXNldEJ0biwgdHJ1ZSk7XG4gICAgICAgICAgc2hvd0luY29tcGxldGUoY29tcGxldGVJY29uLCBpbmNvbXBsZXRlSWNvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgaXNWYWxpZCA9IHRlc3RWYWx1ZSh2YWx1ZSwgcGF0dGVybik7XG4gICAgICAgICAgdG9nZ2xlUmVzZXRCdG4ocmVzZXRCdG4sIGZhbHNlKTtcbiAgICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgICAgaWYgKHBhdHRlcm4gIT09ICcnKSB7XG4gICAgICAgICAgICAgIHNob3dDb21wbGV0ZShjb21wbGV0ZUljb24sIGluY29tcGxldGVJY29uKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGlkZUluY29tcGxldGUoaW5jb21wbGV0ZUljb24pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbmNvbXBsZXRlSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZWlucHV0JywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUuZGF0YSAhPT0gbnVsbCkge1xuICAgICAgICAgIHRvZ2dsZVJlc2V0QnRuKHJlc2V0QnRuLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9nZ2xlUmVzZXRCdG4ocmVzZXRCdG4sIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGluY29tcGxldGVJY29uLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5Jyk7XG4gICAgICAgIGNvbXBsZXRlSWNvbi5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScpO1xuICAgICAgfSk7XG5cbiAgICAgIHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICByZXNldEJ0bi5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScpO1xuICAgICAgICBzaG93SW5jb21wbGV0ZShjb21wbGV0ZUljb24sIGluY29tcGxldGVJY29uKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyAjcmVnaW9uIC0gUGFzc3dvcmQgaW5wdXRcbiAgICAgIGlmICh0b2dnbGVQYXNzd29yZFZpc2liaWxpdHlCdG4pIHtcbiAgICAgICAgdG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIC8vIGlucHV0LnR5cGUgPSBpbnB1dC50eXBlID09PSAncGFzc3dvcmQnID8gJ3RleHQnIDogJ3Bhc3N3b3JkJztcbiAgICAgICAgICBjb25zdCBzaG93UGFzc3dvcmRJY29uOiBUU1ZHSW5IVE1MID0gaW5wdXRVaS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJy5iLWlucHV0X19zaG93UGFzc3dvcmQnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBoaWRlUGFzc3dvcmRJY29uOiBUU1ZHSW5IVE1MID0gaW5wdXRVaS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJy5iLWlucHV0X19oaWRlUGFzc3dvcmQnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoaW5wdXQudHlwZSA9PT0gJ3Bhc3N3b3JkJykge1xuICAgICAgICAgICAgaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgIGhpZGVQYXNzd29yZEljb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBzaG93UGFzc3dvcmRJY29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0LnR5cGUgPSAncGFzc3dvcmQnO1xuICAgICAgICAgIGhpZGVQYXNzd29yZEljb24uc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcbiAgICAgICAgICBzaG93UGFzc3dvcmRJY29uLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5Jyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLy8gI2VuZHJlZ2lvbiAtIFBhc3N3b3JkIGlucHV0XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRJbnB1dHM7XG4iLCIvKlxuICAgIE1laWxpc2VhcmNoIFBhcmFtZXRlcnNcbiAgICBodHRwczovL2RvY3MubWVpbGlzZWFyY2guY29tL3JlZmVyZW5jZS9hcGkvc2VhcmNoLmh0bWwjYm9keVxuXG4gICAgSW5zdGFudCBNZWlsaSBTZWFyY2ggZG9jdW1lbnRhdGlvblxuICAgIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL0BtZWlsaXNlYXJjaC9pbnN0YW50LW1laWxpc2VhcmNoXG5cbiAgICBJbnN0YW50c2VhcmNoIERvY3NcbiAgICBodHRwczovL3d3dy5hbGdvbGlhLmNvbS9kb2MvZ3VpZGVzL2J1aWxkaW5nLXNlYXJjaC11aS93aGF0LWlzLWluc3RhbnRzZWFyY2gvanMvXG5cbiAgICAvLyBFeGFtcGxlIG9uIHRyaWdnZXJpbmcgc2VhcmNoIGFuZCBob3cgdG8gYWNjZXNzIHRoZSBhbG9nbGlhIHNlYXJjaCBoZWxwZXJcbiAgICBodHRwczovL2Rpc2NvdXJzZS5hbGdvbGlhLmNvbS90L2hvdy10by10cmlnZ2VyLWluc3RhbnRzZWFyY2gtcXVlcnktYnktc2V0dGluZy1pbnB1dC12YWx1ZS1keW5hbWljYWxseS85MDE3LzNcbiAgICBodHRwczovL2NvZGVzYW5kYm94LmlvL3MvaW5zdGFudHNlYXJjaGpzLWFwcC05cmUwbz9maWxlPS9zcmMvYXBwLmpzOjEwMzYtMTA0NlxuXG4gICAgQWNjZXNzaW5nIFN0YXRlIHRvIHVwZGF0ZVxuICAgIGh0dHBzOi8vd3d3LmFsZ29saWEuY29tL2RvYy9ndWlkZXMvYnVpbGRpbmctc2VhcmNoLXVpL2dvaW5nLWZ1cnRoZXIvYWNjZXNzLXN0YXRlLW91dHNpZGUtbGlmZWN5Y2xlL2pzL1xuXG4gICAgVXBkYXRpbmcgcGFyYW1ldGVycyB3aXRob3V0IHVzaW5nIGNvbmZpZ1xuICAgIGh0dHBzOi8vY29tbXVuaXR5LmFsZ29saWEuY29tL2FsZ29saWFzZWFyY2gtaGVscGVyLWpzL3JlZmVyZW5jZS5odG1sI3F1ZXJ5LXBhcmFtZXRlcnNcblxuICAgIFRPIERPOlxuICAgIC0gU2VhcmNoIEJhclxuICAgICAgLSBMaW1pdCBvcHRpb25zXG4qL1xuXG4vLyAjcmVnaW9uIC0gSW1wb3J0c1xuaW1wb3J0IHsgaW5zdGFudE1laWxpU2VhcmNoIH0gZnJvbSAnQG1laWxpc2VhcmNoL2luc3RhbnQtbWVpbGlzZWFyY2gnO1xuaW1wb3J0IGluc3RhbnRzZWFyY2ggZnJvbSAnaW5zdGFudHNlYXJjaC5qcyc7XG5pbXBvcnQge1xuICBjbGVhclJlZmluZW1lbnRzLFxuICBjb25maWd1cmUsXG4gIGN1cnJlbnRSZWZpbmVtZW50cyxcbiAgaGl0c1BlclBhZ2UsXG4gIG1lbnUsXG4gIHJhbmdlSW5wdXQsXG4gIHJhbmdlU2xpZGVyLFxuICByZWZpbmVtZW50TGlzdCxcbiAgc2VhcmNoQm94LFxuICBzdGF0c1xufSBmcm9tICdpbnN0YW50c2VhcmNoLmpzL2VzL3dpZGdldHMnO1xuaW1wb3J0IHtcbiAgY29ubmVjdEluZmluaXRlSGl0cyxcbiAgY29ubmVjdEhpdHNcbn0gZnJvbSAnaW5zdGFudHNlYXJjaC5qcy9lcy9jb25uZWN0b3JzJztcbmltcG9ydCB7IGZsYXR0ZW5BcnJheSB9IGZyb20gJy4uL3V0aWxzL0luZGV4JztcbmltcG9ydCB7XG4gIGFnZW50TGlzdGluZyxcbiAgYXJ0aWNsZUNhcmRUZW1wbGF0ZSxcbiAgQ3VzdG9tUGFnaW5hdGlvbixcbiAgQ3VzdG9tU29ydEJ5LFxuICBwcm9wZXJ0eUxpc3RpbmdGdWxsQ2FyZCxcbiAgcHJvcGVydHlMaXN0aW5nSGFsZkNhcmQsXG4gIHByb3BlcnR5TGlzdGluZ0NhcmRIbG4sXG4gIHByb3BlcnR5VGFibGVSb3csXG4gIGdldFVuaXF1ZVByb3BlcnR5RmVhdHVyZXMsXG4gIElBZ2VudExpc3RpbmcsXG4gIElBcnRpY2xlQ2FyZCxcbiAgSVByb3BlcnR5TGlzdGluZyxcbiAgaW5pdExpc3RpbmdEcm9wZG93bnMsXG4gIGluaXRNYXBVSSxcbiAgZ2V0U3RhdHNUZW1wbGF0ZSxcbiAgaW5pdFByb3BlcnR5RmFkZXJNdXRhdGlvbk9ic2VydmVyLFxuICBwcm9wZXJ0eUxpc3RpbmdOb1Jlc3VsdHNcbn0gZnJvbSAnLi9saXN0aW5nU2VhcmNoJztcbi8vIGltcG9ydCB7IGFycm93TGVmdEljb24sIGFycm93UmlnaHRJY29uIH0gZnJvbSAnLi90ZW1wbGF0ZXMnO1xuaW1wb3J0IHsgaW5pdFNlYXJjaERyb3Bkb3ducyB9IGZyb20gJy4vU2VhcmNoQmFyRHJvcGRvd24nO1xuaW1wb3J0IGxpc3RpbmdUeXBlUmVmaW5lbWVudExpc3QgZnJvbSAnLi9saXN0aW5nU2VhcmNoL0xpc3RpbmdUeXBlUmVmaW5lbWVudExpc3QnO1xuaW1wb3J0IGluaXRUYWJsZUNvbGxhcHNlSXRlbSBmcm9tICcuLi91dGlscy9UYWJsZUNvbGxhcHNlJztcbi8vICNlbmRyZWdpb24gLSBJbXBvcnRzXG5cbi8qIC8vICNyZWdpb24gLSBUeXBlc1xudHlwZSBUUHJvcGVydHlUeXBlcyA9XG4gIHwgJ3RpbWJlcmxhbmQnXG4gIHwgJ3JlY3JlYXRpb24nXG4gIHwgJ2RldmVsb3BtZW50J1xuICB8ICdhZ3JpY3VsdHVyZS1mYXJtbGFuZCdcbiAgfCAnYWNyZWFnZS1lc3RhdGVzJ1xuICB8ICdjb25zZXJ2YXRpb24nO1xuXG5cbnR5cGUgVFByb3BlcnR5U3RhdHVzZXMgPSAnc29sZCc7XG4qL1xuXG5pbnRlcmZhY2UgSVdpZGdldE9wdGlvbnMge1xuICB0eXBlOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGZhY2V0OiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIG9wdGlvbnM/OiBzdHJpbmdbXTtcbiAgZGlzcGxheTogc3RyaW5nO1xuICBpbnB1dFR5cGVzOiBzdHJpbmdbXTtcbiAgbWluPzogbnVtYmVyO1xuICBtYXg/OiBudW1iZXI7XG4gIHNob3dGaWx0ZXI/OiBib29sZWFuO1xufVxuXG50eXBlIFROYW1lZFdpZGdldHNPYmplY3QgPSB7XG4gIFtrZXk6IHN0cmluZ106IElXaWRnZXRPcHRpb25zO1xufTtcblxuaW50ZXJmYWNlIElGaWx0ZXJzIHtcbiAgZmlsdGVyPzogc3RyaW5nO1xuICBmYWNldEZpbHRlcnM/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbn1cblxuaW50ZXJmYWNlIElHcm91cGVkRHJvcGRvd25zIHtcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nW107XG59XG5cbmludGVyZmFjZSBJU29ydE9wdGlvbiB7XG4gIGlzRGVmYXVsdD86IGJvb2xlYW47XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG59XG5cbnR5cGUgVEhpdHNUZW1wbGF0ZUZ1bmN0aW9uTmFtZSA9XG4gIHwgJ3Byb3BlcnR5TGlzdGluZ0hhbGZDYXJkJ1xuICB8ICdwcm9wZXJ0eUxpc3RpbmdGdWxsQ2FyZCdcbiAgfCAncHJvcGVydHlMaXN0aW5nQ2FyZEhsbidcbiAgfCAnYWdlbnRMaXN0aW5nJztcblxuaW50ZXJmYWNlIElJbnN0YW50c2VhcmNoT3B0aW9ucyB7XG4gIGFnZW50TmFtZTogc3RyaW5nO1xuICBpbmRleDogc3RyaW5nO1xuICBpbnB1dHM6IElXaWRnZXRPcHRpb25zW107XG4gIGZhY2V0czogSVdpZGdldE9wdGlvbnNbXTtcbiAgZmlsdGVyOiBzdHJpbmc7XG4gIHNvcnRPcHRpb25zOiBJU29ydE9wdGlvbltdO1xuICBtYXBUb2dnbGU/OiBib29sZWFuO1xuICBzaG93TWFwPzogYm9vbGVhbjtcbiAgbXVsdGlUcmFjdE5hbWU6IHN0cmluZ1tdO1xuICBjb25maWd1cmF0aW9uPzoge1xuICAgIGhpdHNQZXJQYWdlOiBudW1iZXI7XG4gIH07XG4gIHVzZVNvcnRCeT86IGJvb2xlYW47XG4gIHVzZVN0YXRzPzogYm9vbGVhbjtcbiAgdXNlSGl0c1BlclBhZ2U/OiBib29sZWFuO1xuICB1c2VDdXJyZW50UmVmaW5lbWVudHM6IGJvb2xlYW47XG4gIGlzSGxuSG9tZVBnPzogYm9vbGVhbjtcbiAgZGVmYXVsdEhpdHNUZW1wbGF0ZTogVEhpdHNUZW1wbGF0ZUZ1bmN0aW9uTmFtZTtcbiAgc2Vjb25kYXJ5SGl0c1RlbXBsYXRlOiBUSGl0c1RlbXBsYXRlRnVuY3Rpb25OYW1lO1xuICBvbWl0UGFnaW5hdGlvbjogYm9vbGVhbjtcbiAgdXNlTWFwOiBib29sZWFuO1xuICBzdGF0c1RlbXBsYXRlOiBzdHJpbmc7XG4gIG9mZmljZTogc3RyaW5nO1xuICBsb2FkTW9yZT86IGJvb2xlYW47XG59XG4vLyAjZW5kcmVnaW9uIC0gVHlwZXNcblxuLy8gdmFyaWFibGVzXG5jb25zdCBpc1RhYmxlID0gISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1pbnN0YW50c2VhcmNodGFibGUtcnVsZXNdJyk7XG5cbi8vIEZldGNoIHVuaXF1ZSBmZWF0dXJlcyBiZWZvcmUgaW5pdGlhbGl6aW5nIHRoZSBzZWFyY2hcbmxldCB1bmlxdWVGZWF0dXJlczogc3RyaW5nW10gPSBbXTtcbmdldFVuaXF1ZVByb3BlcnR5RmVhdHVyZXMoKS50aGVuKChmZWF0dXJlcykgPT4ge1xuICB1bmlxdWVGZWF0dXJlcyA9IGZlYXR1cmVzO1xufSk7XG5cbi8vICNyZWdpb24gLSBXaWRnZXQgZnVuY3Rpb25zXG5jb25zdCByZXNldEJ1dHRvbiA9IChjb250YWluZXI6IHN0cmluZywgZmFjZXRzOiBzdHJpbmdbXSkgPT4ge1xuICBjb25zdCBjb250YWluZXJOYW1lID1cbiAgICBBcnJheS5mcm9tKGNvbnRhaW5lcilbMF0gPT09ICcjJ1xuICAgICAgPyBgJHtjb250YWluZXJ9X3Jlc2V0QnRuYFxuICAgICAgOiBgIyR7Y29udGFpbmVyfV9yZXNldEJ0bmA7XG5cbiAgcmV0dXJuIGNsZWFyUmVmaW5lbWVudHMoe1xuICAgIGNvbnRhaW5lcjogY29udGFpbmVyTmFtZSxcbiAgICBpbmNsdWRlZEF0dHJpYnV0ZXM6IFsuLi5mYWNldHNdLFxuICAgIHRlbXBsYXRlczoge1xuICAgICAgcmVzZXRMYWJlbDogJ1Jlc2V0J1xuICAgIH0sXG4gICAgY3NzQ2xhc3Nlczoge1xuICAgICAgYnV0dG9uOiBbXG4gICAgICAgICdiLWJ0bicsXG4gICAgICAgICcgYi1idG4tLWdob3N0IHUtdHQtdXBwZXIgdS10LWNvbG9yLWNvcmUtcHJpbWFyeS01MDAnLFxuICAgICAgICAnIGMtYm94J1xuICAgICAgXVxuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBUTyBETzogVXBkYXRlIHR5cGUgZm9yIHNldHRpbmdzIGZvciBjb3JyZWN0IHR5cGUgbWF0Y2hpbmcsIHNob3VsZCBiZSBhYmxlIHRvIGltcG9ydCBmcm9tIGluc3RhbnQgc2VhcmNoXG5jb25zdCBzdHlsZWRSZWZpbmVtZW50TGlzdCA9IChcbiAgY29udGFpbmVyOiBzdHJpbmcsXG4gIGl0ZW06IElXaWRnZXRPcHRpb25zLFxuICBzZXR0aW5ncz86IGFueVxuKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpO1xuICBsZXQgd2lkZ2V0czogYW55ID0gW107XG5cbiAgaWYgKGNvbnRhaW5lckVsKSB7XG4gICAgd2lkZ2V0cyA9IFtcbiAgICAgIHJlZmluZW1lbnRMaXN0KHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXJFbCxcbiAgICAgICAgYXR0cmlidXRlOiBpdGVtLmZhY2V0LFxuICAgICAgICBsaW1pdDogOTksXG4gICAgICAgIC4uLnNldHRpbmdzXG4gICAgICB9KVxuICAgIF07XG5cbiAgICBpZiAoaXRlbS5kaXNwbGF5ID09PSAnZGVmYXVsdCcgJiYgaXRlbS50eXBlID09PSAnbXVsdGlwbGVTZWxlY3QnKSB7XG4gICAgICBjb25zdCByZXNldEJ0biA9IHJlc2V0QnV0dG9uKGNvbnRhaW5lciwgW2l0ZW0uZmFjZXRdKTtcbiAgICAgIHdpZGdldHMucHVzaChyZXNldEJ0bik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHdpZGdldHM7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIGNvdWxkIGJlIGltcHJvdmVkIGJ5IHN3aXRjaCBvdmVyIHRoZSBzd2l0Y2ggc3RhdGVtZW50IHRvIGxvb2sgZm9yIGFuIGlucHV0IG9yIGRyb3Bkb3duIHR5cGUuXG5jb25zdCBnZXRGYWNldFVJQnlUeXBlID0gKGl0ZW06IElXaWRnZXRPcHRpb25zLCBjYXRlZ29yeVRpdGxlPzogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGAjJHtpdGVtLmZhY2V0fWA7XG5cbiAgc3dpdGNoIChpdGVtLmZhY2V0KSB7XG4gICAgY2FzZSAncHJvcGVydHlTdGF0dXMnOiB7XG4gICAgICByZXR1cm4gbWVudSh7XG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgYXR0cmlidXRlOiBpdGVtLmZhY2V0LFxuICAgICAgICBjc3NDbGFzc2VzOiB7XG4gICAgICAgICAgbGFiZWw6ICd1LXRleHQtMCdcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICAgICAgaXRlbShkYXRhOiBhbnkpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgbGFiZWwsIHVybCwgY3NzQ2xhc3NlcyB9ID0gZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IGV4Y2VwdGlvbiA9IGxhYmVsLnJlcGxhY2UoL1xccy9nLCAnJykudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgcmV0dXJuIC8qIGh0bWwgKi8gYFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiJHtjc3NDbGFzc2VzLmxpbmt9XCIgaHJlZj1cIiR7dXJsfVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJiLXByb3BlcnR5U3RhdHVzIGItcHJvcGVydHlTdGF0dXMtLSR7ZXhjZXB0aW9ufSAke2Nzc0NsYXNzZXMubGFiZWx9IFwiXG4gICAgICAgICAgICAgICAgICAgID4ke2xhYmVsfTwvc3BhblxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgYDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBjYXNlICdsaXN0aW5nUHJpY2UnOlxuICAgIGNhc2UgJ3ByaWNlJzpcbiAgICBjYXNlICd0b3RhbEFjcmVzJzoge1xuICAgICAgY29uc3QgcmFuZ2VTbGlkZXJVSSA9IHJhbmdlU2xpZGVyKHtcbiAgICAgICAgY29udGFpbmVyOiBgJHtjb250YWluZXJ9XyR7aXRlbS5pbnB1dFR5cGVzWzBdfWAsXG4gICAgICAgIGF0dHJpYnV0ZTogaXRlbS5mYWNldCxcbiAgICAgICAgcGlwczogZmFsc2UsXG4gICAgICAgIG1pbjogaXRlbS5taW5cbiAgICAgICAgLy8gbWF4OiBpdGVtLmZhY2V0ID09PSAndG90YWxBY3JlcycgPyAxMDAwMCA6IGl0ZW0ubWF4XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHJhbmdlSW5wdXRVSSA9IHJhbmdlSW5wdXQoe1xuICAgICAgICBjb250YWluZXI6IGAke2NvbnRhaW5lcn1fJHtpdGVtLmlucHV0VHlwZXNbMV19YCxcbiAgICAgICAgYXR0cmlidXRlOiBpdGVtLmZhY2V0LFxuICAgICAgICBtaW46IGl0ZW0ubWluLFxuICAgICAgICBtYXg6IGl0ZW0ubWF4LFxuICAgICAgICBjc3NDbGFzc2VzOiB7XG4gICAgICAgICAgZm9ybTogJ2MtY2x1c3RlcicsXG4gICAgICAgICAgaW5wdXQ6ICdjLWJveCcsXG4gICAgICAgICAgc3VibWl0OiAnYy1ib3gnXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBTZXR1cCBidXR0b25cbiAgICAgIGNvbnN0IHJlc2V0UmFuZ2UgPSByZXNldEJ1dHRvbihjb250YWluZXIsIFtpdGVtLmZhY2V0XSk7XG5cbiAgICAgIC8vIH5IYWNreSB3YXkgdG8gcmVzZXQgdGhlIGJ1dHRvbiBvbiBpbml0aWFsIGxvYWQgZm9yIFByb3BlcnRpZXN8QXVjdGlvbnMgbGlzdGluZ3MgcGFnZVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhbmdlUmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAke2NvbnRhaW5lcn1fcmVzZXRCdG4gYnV0dG9uYFxuICAgICAgICApIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgICAgICBpZiAocmFuZ2VSZXNldEJ0bikge1xuICAgICAgICAgIHJhbmdlUmVzZXRCdG4uY2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwMCk7XG5cbiAgICAgIC8vIFJldHVybiB3aWRnZXRzXG4gICAgICByZXR1cm4gW3JhbmdlU2xpZGVyVUksIHJhbmdlSW5wdXRVSSwgcmVzZXRSYW5nZV07XG4gICAgfVxuICAgIGNhc2UgJ2xpc3RpbmdUeXBlcyc6IHtcbiAgICAgIHJldHVybiBsaXN0aW5nVHlwZVJlZmluZW1lbnRMaXN0KHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb250YWluZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSxcbiAgICAgICAgYXR0cmlidXRlOiAnbGlzdGluZ1R5cGVzJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNhc2UgJ2xhbmRUeXBlcyc6XG4gICAgY2FzZSAncHJvcGVydHlUeXBlcyc6IHtcbiAgICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgICBjc3NDbGFzc2VzOiB7XG4gICAgICAgICAgbGlzdDogJ2MtYXV0b0dyaWQnLFxuICAgICAgICAgIGl0ZW06ICd1LXBhZC0yMDAgdS1ib3gtZmxleCB1LWZsZXgtYWxpZ24tY2VudGVyIHwgdS10LWJnLW5ldXRyYWxzLXRlcnRpYXJ5LTQwMCdcbiAgICAgICAgfSxcbiAgICAgICAgb3BlcmF0b3I6ICdvcicsXG4gICAgICAgIHRyYW5zZm9ybUl0ZW1zKGl0ZW1zOiBhbnkpIHtcbiAgICAgICAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gaXRlbXMuZmlsdGVyKFxuICAgICAgICAgICAgKGZhY2V0SXRlbTogYW55KSA9PiBjYXRlZ29yeVRpdGxlICE9PSBmYWNldEl0ZW0udmFsdWVcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiBmaWx0ZXJlZEl0ZW1zO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHN0eWxlZFJlZmluZW1lbnRMaXN0KGNvbnRhaW5lciwgaXRlbSwgc2V0dGluZ3MpO1xuICAgIH1cbiAgICBjYXNlICdwcm9wZXJ0eUZlYXR1cmVzJzoge1xuICAgICAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgICAgIGNzc0NsYXNzZXM6IHtcbiAgICAgICAgICBsaXN0OiAnYy1hdXRvR3JpZCcsXG4gICAgICAgICAgaXRlbTogJ3UtcGFkLTIwMCB1LWJveC1mbGV4IHUtZmxleC1hbGlnbi1jZW50ZXIgfCB1LXQtYmctbmV1dHJhbHMtdGVydGlhcnktNDAwJ1xuICAgICAgICB9LFxuICAgICAgICBvcGVyYXRvcjogJ2FuZCcsXG4gICAgICAgIHRyYW5zZm9ybUl0ZW1zKGl0ZW1zOiBhbnkpIHtcbiAgICAgICAgICAvLyBTeW5jaHJvbm91c2x5IGZpbHRlciBpdGVtcyBiYXNlZCBvbiBwcmUtZmV0Y2hlZCB1bmlxdWUgZmVhdHVyZXNcbiAgICAgICAgICByZXR1cm4gaXRlbXMuZmlsdGVyKChpdGVtOiB7IGxhYmVsOiBzdHJpbmcgfSkgPT5cbiAgICAgICAgICAgIHVuaXF1ZUZlYXR1cmVzLmluY2x1ZGVzKGl0ZW0ubGFiZWwpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiBzdHlsZWRSZWZpbmVtZW50TGlzdChjb250YWluZXIsIGl0ZW0sIHNldHRpbmdzKTtcbiAgICB9XG4gICAgY2FzZSAnY2F0ZWdvcnknOlxuICAgICAgcmV0dXJuIGl0ZW0uc2hvd0ZpbHRlciA/IHN0eWxlZFJlZmluZW1lbnRMaXN0KGNvbnRhaW5lciwgaXRlbSkgOiBudWxsO1xuICAgIGNhc2UgJ3N0YXRlJzoge1xuICAgICAgcmV0dXJuIG1lbnUoe1xuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIGF0dHJpYnV0ZTogaXRlbS5mYWNldCxcbiAgICAgICAgbGltaXQ6IDUwLFxuICAgICAgICBjc3NDbGFzc2VzOiB7XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtOiAndS10LWJnLWdyYXlzY2FsZS0yMDAnXG4gICAgICAgIH0sXG4gICAgICAgIHRyYW5zZm9ybUl0ZW1zKGl0ZW1zKSB7XG4gICAgICAgICAgaXRlbXMuc29ydCgoYSwgYikgPT4gYS5sYWJlbC5sb2NhbGVDb21wYXJlKGIubGFiZWwpKTtcbiAgICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlczoge1xuICAgICAgICAgIGl0ZW0oZGF0YTogYW55KSB7XG4gICAgICAgICAgICBjb25zdCB7IGxhYmVsLCB1cmwsIGNzc0NsYXNzZXMgfSA9IGRhdGE7XG5cbiAgICAgICAgICAgIHJldHVybiAvKiBodG1sICovIGBcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCIke2Nzc0NsYXNzZXMubGlua31cIiBocmVmPVwiJHt1cmx9XCI+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiJHtjc3NDbGFzc2VzLmxhYmVsfVwiXG4gICAgICAgICAgICAgICAgICA+JHtsYWJlbH08L3NwYW5cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgY2FzZSAnYXVjdGlvblR5cGUnOlxuICAgIGNhc2UgJ2FnZW50TmFtZSc6IHtcbiAgICAgIHJldHVybiBzdHlsZWRSZWZpbmVtZW50TGlzdChjb250YWluZXIsIGl0ZW0pO1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmNvbnN0IGdldFdpZGdldHMgPSAoXG4gIG9wdGlvbnM6IElJbnN0YW50c2VhcmNoT3B0aW9ucyxcbiAgZmlsdGVyczogSUZpbHRlcnMgfCBudWxsLFxuICBmYWNldFdpZGdldHM6IGFueSxcbiAgaW5zdGFudHNlYXJjaEluc3RhbmNlOiBhbnlcbikgPT4ge1xuICBjb25zdCB7XG4gICAgY29uZmlndXJhdGlvbixcbiAgICBkZWZhdWx0SGl0c1RlbXBsYXRlLFxuICAgIGlucHV0cyxcbiAgICAvLyBtYXBUb2dnbGUsXG4gICAgc2Vjb25kYXJ5SGl0c1RlbXBsYXRlLFxuICAgIHNvcnRPcHRpb25zLFxuICAgIHN0YXRzVGVtcGxhdGUsXG4gICAgdXNlQ3VycmVudFJlZmluZW1lbnRzLFxuICAgIHVzZVNvcnRCeSxcbiAgICB1c2VTdGF0cyxcbiAgICB1c2VIaXRzUGVyUGFnZSxcbiAgICBsb2FkTW9yZSA9IGZhbHNlLFxuICAgIGlzSGxuSG9tZVBnLFxuICAgIC8vIHVzZU1hcCxcbiAgICBvbWl0UGFnaW5hdGlvblxuICB9ID0gb3B0aW9ucztcblxuICBsZXQgd2lkZ2V0cyA9IFtdO1xuXG4gIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgY29uc3QgY29uZmlnID0gZmlsdGVyc1xuICAgICAgPyB7XG4gICAgICAgICAgLi4uY29uZmlndXJhdGlvbixcbiAgICAgICAgICAuLi5maWx0ZXJzXG4gICAgICAgIH1cbiAgICAgIDoge1xuICAgICAgICAgIC4uLmNvbmZpZ3VyYXRpb25cbiAgICAgICAgfTtcbiAgICB3aWRnZXRzLnB1c2goY29uZmlndXJlKGNvbmZpZykpO1xuICB9IGVsc2UgaWYgKGZpbHRlcnMpIHtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAuLi5maWx0ZXJzXG4gICAgfTtcbiAgICB3aWRnZXRzLnB1c2goY29uZmlndXJlKGNvbmZpZykpO1xuICB9XG4gIGxldCB0b3RhbEhpdHMgPSAwO1xuICBpZiAodXNlU3RhdHMpIHtcbiAgICB3aWRnZXRzLnB1c2goXG4gICAgICBzdGF0cyh7XG4gICAgICAgIGNvbnRhaW5lcjogJyNzdGF0cycsXG4gICAgICAgIHRlbXBsYXRlczoge1xuICAgICAgICAgIHRleHQoZGF0YSkge1xuICAgICAgICAgICAgdG90YWxIaXRzID0gZGF0YS5uYkhpdHM7XG4gICAgICAgICAgICByZXR1cm4gZ2V0U3RhdHNUZW1wbGF0ZShzdGF0c1RlbXBsYXRlLCBkYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuICBpZiAodXNlSGl0c1BlclBhZ2UpIHtcbiAgICAvLyB0aGlzIG1lYW5zIHdlIGFyZSB1c2luZyBwYWdpbmF0aW9uXG4gICAgd2lkZ2V0cy5wdXNoKFxuICAgICAgaGl0c1BlclBhZ2Uoe1xuICAgICAgICBjb250YWluZXI6ICcjaGl0cy1wZXItcGFnZScsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyBsYWJlbDogJ1Nob3cgMTAgcGVyIHBhZ2UnLCB2YWx1ZTogMTAgfSxcbiAgICAgICAgICB7IGxhYmVsOiAnU2hvdyAxNSBwZXIgcGFnZScsIHZhbHVlOiAxNSwgZGVmYXVsdDogdHJ1ZSB9LFxuICAgICAgICAgIHsgbGFiZWw6ICdTaG93IDIwIHBlciBwYWdlJywgdmFsdWU6IDIwIH0sXG4gICAgICAgICAgeyBsYWJlbDogJ1Nob3cgMzAgcGVyIHBhZ2UnLCB2YWx1ZTogMzAgfSxcbiAgICAgICAgICB7IGxhYmVsOiAnU2hvdyA1MCBwZXIgcGFnZScsIHZhbHVlOiA1MCB9XG4gICAgICAgIF1cbiAgICAgIH0pLFxuICAgICAgQ3VzdG9tUGFnaW5hdGlvbih7fSlcbiAgICApO1xuICB9XG4gIGlmIChpbnB1dHMpIHtcbiAgICBpbml0U2VhcmNoRHJvcGRvd25zKHtcbiAgICAgIHRhcmdldDogJy5iLXNlYXJjaERyb3Bkb3duLS1pbnN0YW50c2VhcmNoJyxcbiAgICAgIGluc3RhbnRzZWFyY2hJbnN0YW5jZVxuICAgIH0pO1xuICAgIHdpZGdldHMucHVzaChcbiAgICAgIHNlYXJjaEJveCh7XG4gICAgICAgIGNvbnRhaW5lcjogJyNsaXN0aW5nTWFpblNlYXJjaEJhcicsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBpbnB1dHNbMF0ucGxhY2Vob2xkZXJcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuICBpZiAodXNlQ3VycmVudFJlZmluZW1lbnRzKSB7XG4gICAgLy8gR2V0IHRoZSBkZWZhdWx0IHNldHRpbmdzIGZvciByYW5nZSBpbnB1dHMgYW5kIGFzc2lnbiB0aGVtIHRvIGFuIG9iamVjdFxuICAgIC8vIFdoZXJlIHRoZSBrZXkgbmFtZSBpcyB0aGUgZmFjZXRzIG5hbWVcbiAgICBjb25zdCB7IGZhY2V0cyB9ID0gb3B0aW9ucztcbiAgICBjb25zdCByYW5nZUZhY2V0U2V0dGluZ3MgPSBmYWNldHMuZmlsdGVyKChmYWNldE9iaikgPT4ge1xuICAgICAgY29uc3QgeyB0eXBlIH0gPSBmYWNldE9iajtcbiAgICAgIHJldHVybiB0eXBlID09PSAncmFuZ2UnO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmFuZ2VJbnB1dHM6IFROYW1lZFdpZGdldHNPYmplY3QgPSByYW5nZUZhY2V0U2V0dGluZ3MucmVkdWNlKFxuICAgICAgKGEsIHJhbmdlRmFjZXQpID0+ICh7IC4uLmEsIFtyYW5nZUZhY2V0LmZhY2V0XTogcmFuZ2VGYWNldCB9KSxcbiAgICAgIHt9XG4gICAgKTtcblxuICAgIHdpZGdldHMucHVzaChcbiAgICAgIGN1cnJlbnRSZWZpbmVtZW50cyh7XG4gICAgICAgIGNvbnRhaW5lcjogJyNyZWZpbmVtZW50cycsXG4gICAgICAgIGNzc0NsYXNzZXM6IHtcbiAgICAgICAgICBsaXN0OiAnYy1jbHVzdGVyJyxcbiAgICAgICAgICBpdGVtOiAnYy1jbHVzdGVyJyxcbiAgICAgICAgICBjYXRlZ29yeTogJ2MtY2x1c3RlcidcbiAgICAgICAgfSxcbiAgICAgICAgdHJhbnNmb3JtSXRlbXMoaXRlbXMpIHtcbiAgICAgICAgICAvLyBDaGVjayByYW5nZSBpbnB1dCB0eXBlcyBmb3IgZGVmYXVsdCB2YWx1ZXNcbiAgICAgICAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGF0dHJpYnV0ZSB9ID0gaXRlbTtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBhdHRyaWJ1dGUgPT09ICdwcmljZScgfHxcbiAgICAgICAgICAgICAgYXR0cmlidXRlID09PSAnbGlzdGluZ1ByaWNlJyB8fFxuICAgICAgICAgICAgICBhdHRyaWJ1dGUgPT09ICd0b3RhbEFjcmVzJ1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcmVmaW5lbWVudHMgfSA9IGl0ZW07XG4gICAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkUmFuZ2VzID0gcmVmaW5lbWVudHMuZmlsdGVyKChyZWZpbmVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gcmVmaW5lbWVudDtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0U2V0dGluZ3M6IElXaWRnZXRPcHRpb25zID0gcmFuZ2VJbnB1dHNbYXR0cmlidXRlXTtcbiAgICAgICAgICAgICAgICBjb25zdCB7IG1pbiwgbWF4IH0gPSBkZWZhdWx0U2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgdmFsdWUgYWdhaW5zdCBkZWZhdWx0XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBtaW4gfHwgdmFsdWUgPT09IG1heCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBpdGVtLnJlZmluZW1lbnRzID0gZmlsdGVyZWRSYW5nZXM7XG4gICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJlZFJhbmdlcy5sZW5ndGggPiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGZpbHRlcmVkSXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGF0dHJpYnV0ZSwgbGFiZWwgfSA9IGl0ZW07XG4gICAgICAgICAgICAvLyBBZGQgc3BhY2VzIHRvIExhYmVsXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkTGFiZWwgPSBsYWJlbC5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAnJDEgJDInKTtcbiAgICAgICAgICAgIGl0ZW0ubGFiZWwgPSB1cGRhdGVkTGFiZWw7XG5cbiAgICAgICAgICAgIC8vIEFkZCAkIHRvIHByaWNlIHJlZmluZW1lbnRzXG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlID09PSAncHJpY2UnIHx8IGF0dHJpYnV0ZSA9PT0gJ2xpc3RpbmdQcmljZScpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyByZWZpbmVtZW50cyB9ID0gaXRlbTtcbiAgICAgICAgICAgICAgcmVmaW5lbWVudHMubWFwKChyZWZpbmVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGllY2VzID0gcmVmaW5lbWVudC5sYWJlbC5zcGxpdCgnICcpO1xuICAgICAgICAgICAgICAgIHJlZmluZW1lbnQubGFiZWwgPSBgJHtwaWVjZXNbMF19ICQke3BpZWNlc1sxXX1gO1xuICAgICAgICAgICAgICAgIHJldHVybiByZWZpbmVtZW50O1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgaXRlbS5yZWZpbmVtZW50cyA9IHJlZmluZW1lbnRzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGZpbHRlcmVkSXRlbXM7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuICBpZiAoZGVmYXVsdEhpdHNUZW1wbGF0ZSkge1xuICAgIGxldCBpbml0aWFsUmVuZGVyQXJnczogeyBpc0xhc3RQYWdlOiBib29sZWFuIH07XG5cbiAgICBpZiAoIWlzVGFibGUpIHtcbiAgICAgIC8vIGlmIGlzIG5vdCBhIHRhYmxlIHVzZSBpbmZpbml0ZSBoaXRzXG4gICAgICBjb25zdCBpbmZpbml0ZUhpdHNXaWRnZXQgPSBjb25uZWN0SW5maW5pdGVIaXRzKFxuICAgICAgICAocmVuZGVyQXJnczogYW55LCBpc0ZpcnN0UmVuZGVyOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBoaXRzOiBpbmZpbml0ZUhpdHMsIHNob3dNb3JlLCB3aWRnZXRQYXJhbXMgfSA9IHJlbmRlckFyZ3M7XG4gICAgICAgICAgY29uc3QgeyBjb250YWluZXIsIHRlbXBsYXRlRnVuY3Rpb25OYW1lIH0gPSB3aWRnZXRQYXJhbXM7XG4gICAgICAgICAgbGV0IGhpdHNUb1JlbmRlciA9IGluZmluaXRlSGl0cztcblxuICAgICAgICAgIC8vIFdlIHdhbnQgdG8gc29ydCB0aGUgaW5maW5pdGUgaGl0cyBpZiB3ZSBhcmUgb24gdGhlIEhMTiBob21lIHBhZ2UgYnkgbGl2ZSwgcGVuZGluZywgYW5kIGxlYXNlZFxuICAgICAgICAgIGlmICh0ZW1wbGF0ZUZ1bmN0aW9uTmFtZSA9PT0gJ3Byb3BlcnR5TGlzdGluZ0NhcmRIbG4nKSB7XG4gICAgICAgICAgICBjb25zdCBzb3J0T3JkZXIgPSBbJ2xpdmUnLCAncGVuZGluZycsICdsZWFzZWQnXTtcbiAgICAgICAgICAgIGNvbnN0IHNvcnRlZCA9IGluZmluaXRlSGl0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFJbmRleCA9IHNvcnRPcmRlci5pbmRleE9mKGEucHJvcGVydHlTdGF0dXMpO1xuICAgICAgICAgICAgICBjb25zdCBiSW5kZXggPSBzb3J0T3JkZXIuaW5kZXhPZihiLnByb3BlcnR5U3RhdHVzKTtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAoYUluZGV4ID09PSAtMSA/IEluZmluaXR5IDogYUluZGV4KSAtXG4gICAgICAgICAgICAgICAgKGJJbmRleCA9PT0gLTEgPyBJbmZpbml0eSA6IGJJbmRleClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaGl0c1RvUmVuZGVyID0gc29ydGVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGluaXRpYWxSZW5kZXJBcmdzID0gcmVuZGVyQXJncztcblxuICAgICAgICAgIGlmIChpc0ZpcnN0UmVuZGVyKSB7XG4gICAgICAgICAgICAvLyBTZW50aW5lbCBmb3IgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgICAgICAgICAgIGNvbnN0IHNlbnRpbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBsaXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgLy8gTGlzdEVsIGZvciBob2xkaW5nIGhpdHNcblxuICAgICAgICAgICAgLy8gQXBwbHkgYXV0b0dyaWQgdG8gYWdlbnRMaXN0aW5nIGNvbnRhaW5lclxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0ZW1wbGF0ZUZ1bmN0aW9uTmFtZSA9PT0gJ2FnZW50TGlzdGluZycgfHxcbiAgICAgICAgICAgICAgdGVtcGxhdGVGdW5jdGlvbk5hbWUgPT09ICdhcnRpY2xlQ2FyZFRlbXBsYXRlJ1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGxpc3RFbC5jbGFzc0xpc3QuYWRkKCdjLWF1dG9HcmlkJyk7XG4gICAgICAgICAgICAgIGxpc3RFbC5jbGFzc0xpc3QuYWRkKCd1LWd1dHRlci02MDAnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGVtcGxhdGVGdW5jdGlvbk5hbWUgPT09ICdwcm9wZXJ0eUxpc3RpbmdDYXJkSGxuJykge1xuICAgICAgICAgICAgICAvLyBITE4gZ3JpZFxuICAgICAgICAgICAgICBsaXN0RWwuY2xhc3NMaXN0LmFkZCgnaGxuLWxpc3RpbmctZ3JpZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIGp1c3QgYWRkIGZsb3dcbiAgICAgICAgICAgICAgbGlzdEVsLmNsYXNzTGlzdC5hZGQoJ2MtZmxvdycpO1xuICAgICAgICAgICAgICBsaXN0RWwuY2xhc3NMaXN0LmFkZCgndS1mbG93LXNwYWNlLS02MDAnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEVsKTtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNlbnRpbmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEltcGxlbWVudCBJT1xuICAgICAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyAmJiAhaW5pdGlhbFJlbmRlckFyZ3MuaXNMYXN0UGFnZSkge1xuICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzaG93TW9yZSgpLCAzNTApO1xuICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhvc3QuaW5jbHVkZXMoJ2RldicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobG9hZE1vcmUpIHtcbiAgICAgICAgICAgICAgY29uc3QgbG9hZE1vcmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgICAgICAncGFnaW5hdGlvbi1sb2FkLW1vcmUnXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGNvbnN0IGhpdHNQZXJQZyA9IGNvbmZpZ3VyYXRpb24uaGl0c1BlclBhZ2U7XG4gICAgICAgICAgICAgIGxldCBoaXRzRGlzcGxheWVkOiBudW1iZXIgPSAraGl0c1BlclBnO1xuICAgICAgICAgICAgICBsZXQgc2hvd0xvYWRNb3JlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gbG9hZE1vcmVJdGVtcygpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNob3dNb3JlKCksIDUwKTtcbiAgICAgICAgICAgICAgICBoaXRzRGlzcGxheWVkID0gaGl0c0Rpc3BsYXllZCArIGhpdHNQZXJQZztcblxuICAgICAgICAgICAgICAgIGlmIChoaXRzRGlzcGxheWVkID49IHRvdGFsSGl0cykge1xuICAgICAgICAgICAgICAgICAgc2hvd0xvYWRNb3JlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICBsb2FkTW9yZUJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRNb3JlSXRlbXMpO1xuICAgICAgICAgICAgICAgICAgbG9hZE1vcmVCdG4uY2xhc3NMaXN0LmFkZCgnbG9hZC1tb3JlLWRpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChzaG93TG9hZE1vcmUpIHtcbiAgICAgICAgICAgICAgICBsb2FkTW9yZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRNb3JlSXRlbXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFvbWl0UGFnaW5hdGlvbikge1xuICAgICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHNlbnRpbmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY29udGFpbmVyICYmIGhpdHNUb1JlbmRlcikge1xuICAgICAgICAgICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3VsJykuaW5uZXJIVE1MID0gaGl0c1RvUmVuZGVyXG4gICAgICAgICAgICAgIC5tYXAoKGhpdDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0ZW1wbGF0ZUZ1bmN0aW9uTmFtZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSAncHJvcGVydHlMaXN0aW5nSGFsZkNhcmQnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvcGVydHlMaXN0aW5nSGFsZkNhcmQoXG4gICAgICAgICAgICAgICAgICAgICAgaGl0IGFzIHVua25vd24gYXMgSVByb3BlcnR5TGlzdGluZ1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgY2FzZSAncHJvcGVydHlMaXN0aW5nRnVsbENhcmQnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvcGVydHlMaXN0aW5nRnVsbENhcmQoXG4gICAgICAgICAgICAgICAgICAgICAgaGl0IGFzIHVua25vd24gYXMgSVByb3BlcnR5TGlzdGluZ1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgY2FzZSAncHJvcGVydHlMaXN0aW5nQ2FyZEhsbic6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0eUxpc3RpbmdDYXJkSGxuKFxuICAgICAgICAgICAgICAgICAgICAgIGhpdCBhcyB1bmtub3duIGFzIElQcm9wZXJ0eUxpc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ2FydGljbGVDYXJkVGVtcGxhdGUnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJ0aWNsZUNhcmRUZW1wbGF0ZShoaXQgYXMgdW5rbm93biBhcyBJQXJ0aWNsZUNhcmQpO1xuICAgICAgICAgICAgICAgICAgY2FzZSAnYWdlbnRMaXN0aW5nJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFnZW50TGlzdGluZyhoaXQgYXMgdW5rbm93biBhcyBJQWdlbnRMaXN0aW5nKTtcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5qb2luKCcnKTtcblxuICAgICAgICAgICAgaWYgKGhpdHNUb1JlbmRlci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3VsJykuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUxpc3RpbmdOb1Jlc3VsdHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHdpZGdldHMucHVzaChcbiAgICAgICAgaW5maW5pdGVIaXRzV2lkZ2V0KHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgY29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdGluZ3MnKSxcbiAgICAgICAgICB0ZW1wbGF0ZUZ1bmN0aW9uTmFtZTogZGVmYXVsdEhpdHNUZW1wbGF0ZVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVuZGVySGl0cyA9IChyZW5kZXJPcHRpb25zOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgeyBoaXRzLCB3aWRnZXRQYXJhbXMgfSA9IHJlbmRlck9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSB3aWRnZXRQYXJhbXM7XG5cbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgIHdpZGdldFBhcmFtcy5jb250YWluZXIuaW5uZXJIVE1MID0gaGl0c1xuICAgICAgICAgICAgLm1hcCgoaGl0OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb3BlcnR5VGFibGVSb3coXG4gICAgICAgICAgICAgICAgaGl0IGFzIHVua25vd24gYXMgSVByb3BlcnR5TGlzdGluZyxcbiAgICAgICAgICAgICAgICBoaXQuX19wb3NpdGlvblxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5qb2luKCcnKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgY29uc3QgY3VzdG9tSGl0cyA9IGNvbm5lY3RIaXRzKHJlbmRlckhpdHMpO1xuICAgICAgd2lkZ2V0cy5wdXNoKFxuICAgICAgICBjdXN0b21IaXRzKHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgY29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGl0cycpXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBpZiAoc2Vjb25kYXJ5SGl0c1RlbXBsYXRlKSB7XG4gICAgLy8gVE9ETzogTmVlZGVkPyBpZiBzbywgYWRqdXN0IHdpdGggbmV3IGluZmluaXRlSGl0c1dpZGdldCBjaGFuZ2VzXG4gICAgLy8gY29uc3QgaGl0V2lkZ2V0ID0gaGl0c1dpZGdldChzZWNvbmRhcnlIaXRzVGVtcGxhdGUsICcjbGlzdGluZ3NGdWxsJyk7XG4gICAgLy8gd2lkZ2V0cy5wdXNoKGhpdFdpZGdldCk7XG4gIH1cbiAgaWYgKHVzZVNvcnRCeSkge1xuICAgIHdpZGdldHMucHVzaChcbiAgICAgIEN1c3RvbVNvcnRCeSh7XG4gICAgICAgIC8qIEB0cy1pZ25vcmUtbmV4dC1saW5lICovXG4gICAgICAgIGNvbnRhaW5lcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvcnRCeScpLFxuICAgICAgICBpdGVtczogc29ydE9wdGlvbnNcbiAgICAgIH0pXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBoaWRkZW5Tb3J0QnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlkZGVuU29ydEJ5Jyk7XG4gICAgaWYgKGhpZGRlblNvcnRCeSkge1xuICAgICAgd2lkZ2V0cy5wdXNoKFxuICAgICAgICBDdXN0b21Tb3J0Qnkoe1xuICAgICAgICAgIC8qIEB0cy1pZ25vcmUtbmV4dC1saW5lICovXG4gICAgICAgICAgY29udGFpbmVyOiBoaWRkZW5Tb3J0QnksXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaXNEZWZhdWx0OiB0cnVlLFxuICAgICAgICAgICAgICBsYWJlbDogJ0xhc3QgTmFtZSAoYXNjKScsXG4gICAgICAgICAgICAgIHZhbHVlOiAnZm5jUmVhbEVzdGF0ZV9hZ2VudHM6bGFzdE5hbWU6YXNjJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGlmIChmYWNldFdpZGdldHMubGVuZ3RoID4gMCkge1xuICAgIHdpZGdldHMgPSBbLi4ud2lkZ2V0cywgLi4uZmFjZXRXaWRnZXRzXTtcbiAgfVxuXG4gIHJldHVybiB3aWRnZXRzO1xufTtcbi8vICNlbmRyZWdpb24gLSBXaWRnZXQgZnVuY3Rpb25zXG5cbmNvbnN0IGluaXRMaXN0aW5nVUkgPSAoKSA9PiB7XG4gIC8vIEdldCBmb3JtIGRhdGFcbiAgY29uc3QgSU5TVEFOVF9TRUFSQ0hfUlVMRVNfRUw6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnW2RhdGEtaW5zdGFudHNlYXJjaC1ydWxlc10nXG4gICk7XG5cbiAgY29uc3QgSU5TVEFOVF9TRUFSQ0hfVEFCTEVfUlVMRVNfRUw6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnW2RhdGEtaW5zdGFudHNlYXJjaHRhYmxlLXJ1bGVzXSdcbiAgKTtcblxuICBpZiAoSU5TVEFOVF9TRUFSQ0hfUlVMRVNfRUwgfHwgSU5TVEFOVF9TRUFSQ0hfVEFCTEVfUlVMRVNfRUwpIHtcbiAgICBpbml0TGlzdGluZ0Ryb3Bkb3ducygpO1xuICAgIGNvbnN0IHNlYXJjaENsaWVudCA9IGluc3RhbnRNZWlsaVNlYXJjaChcbiAgICAgIHByb2Nlc3MuZW52Lk1FSUxJX0ZST05URU5EX0hPU1QsXG4gICAgICBwcm9jZXNzLmVudi5NRUlMSV9BUElfS0VZLFxuICAgICAge1xuICAgICAgICBrZWVwWmVyb0ZhY2V0czogdHJ1ZSxcbiAgICAgICAgZmluaXRlUGFnaW5hdGlvbjogZmFsc2VcbiAgICAgIH1cbiAgICApLnNlYXJjaENsaWVudDtcblxuICAgIGNvbnN0IElOU1RBTlRfU0VBUkNIX1JVTEVTX0RBVEEgPSBJTlNUQU5UX1NFQVJDSF9SVUxFU19FTFxuICAgICAgPyBKU09OLnBhcnNlKElOU1RBTlRfU0VBUkNIX1JVTEVTX0VMLmRhdGFzZXQuaW5zdGFudHNlYXJjaFJ1bGVzKVxuICAgICAgOiBKU09OLnBhcnNlKFxuICAgICAgICAgIElOU1RBTlRfU0VBUkNIX1RBQkxFX1JVTEVTX0VMLmRhdGFzZXQuaW5zdGFudHNlYXJjaHRhYmxlUnVsZXNcbiAgICAgICAgKTtcblxuICAgIGNvbnN0IHtcbiAgICAgIGFnZW50TmFtZSxcbiAgICAgIGZhY2V0cyA9IFtdLFxuICAgICAgZmlsdGVycyxcbiAgICAgIGNhdGVnb3J5VHlwZSxcbiAgICAgIGNhdGVnb3J5LFxuICAgICAgb2ZmaWNlXG4gICAgfSA9IElOU1RBTlRfU0VBUkNIX1JVTEVTX0RBVEE7XG5cbiAgICAvLyAjcmVnaW9uIC0gQ2F0ZWdvcnkgUGFnZSBkZWZhdWx0IHZhbHVlc1xuICAgIGNvbnN0IHNlYXJjaEZpbHRlcnMgPSBmaWx0ZXJzIHx8IHt9O1xuXG4gICAgaWYgKGNhdGVnb3J5VHlwZSAmJiBjYXRlZ29yeSkge1xuICAgICAgc2VhcmNoRmlsdGVycy5maWx0ZXJzID0gYCR7Y2F0ZWdvcnlUeXBlfSA9ICR7Y2F0ZWdvcnkudGl0bGV9YDtcbiAgICB9XG5cbiAgICAvLyBBZ2VudCBFbnRyeSBQYWdlc1xuICAgIGlmIChhZ2VudE5hbWUpIHtcbiAgICAgIHNlYXJjaEZpbHRlcnMuZmFjZXRGaWx0ZXJzID0gYGFnZW50TmFtZToke2FnZW50TmFtZX1gO1xuICAgIH1cblxuICAgIC8vIEFnZW50IE9mZmljZVxuICAgIGlmIChvZmZpY2UpIHtcbiAgICAgIHNlYXJjaEZpbHRlcnMuZmFjZXRGaWx0ZXJzID0gYG9mZmljZToke29mZmljZX1gO1xuICAgIH1cbiAgICAvLyAjZW5kcmVnaW9uIC0gQ2F0ZWdvcnkgUGFnZSBkZWZhdWx0IHZhbHVlc1xuXG4gICAgLy8gI3JlZ2lvbiBHcm91cGVkIGRyb3Bkb3ducyAtIEV4OiBtb3JlIGRyb3Bkb3duIGluIHByb3BlcnR5IGxpc3RpbmdcbiAgICBjb25zdCBncm91cGVkRHJvcGRvd25zOiBJR3JvdXBlZERyb3Bkb3ducyA9IHt9O1xuICAgIGxldCBmYWNldFdpZGdldHMgPSBmYWNldHMubWFwKChpdGVtOiBJV2lkZ2V0T3B0aW9ucykgPT4ge1xuICAgICAgLy8gSW4gdGhlIGZ1dHVyZSB3ZSBzaG91bGQgc2hpZnQgdGhlIGZhY2V0cyBkYXRhIHRvIG1hdGNoIHRoZSBkZXNpcmVkIFVJXG4gICAgICBpZiAoaXRlbS5kaXNwbGF5ICE9PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgY29uc3QgZGlzcGxheUtleUV4aXN0cyA9IGdyb3VwZWREcm9wZG93bnNbaXRlbS5kaXNwbGF5IGFzIGtleW9mIE9iamVjdF07XG4gICAgICAgIGlmICghZGlzcGxheUtleUV4aXN0cykge1xuICAgICAgICAgIC8vIElmIG9iamVjdCBkb2Vzbid0IGV4aXN0XG4gICAgICAgICAgZ3JvdXBlZERyb3Bkb3duc1tpdGVtLmRpc3BsYXkgYXMga2V5b2YgT2JqZWN0XSA9IFtpdGVtLmZhY2V0XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBJZiBkaXNwbGF5IGtleSBleGlzdHNcbiAgICAgICAgICBncm91cGVkRHJvcGRvd25zW2l0ZW0uZGlzcGxheSBhcyBrZXlvZiBPYmplY3RdLnB1c2goaXRlbS5mYWNldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXRGYWNldFVJQnlUeXBlKGl0ZW0sIGNhdGVnb3J5ID8gY2F0ZWdvcnkudGl0bGUgOiAnVGl0bGUnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGdyb3VwZWREcm9wZG93bktleXMgPSBPYmplY3Qua2V5cyhncm91cGVkRHJvcGRvd25zKTtcbiAgICBncm91cGVkRHJvcGRvd25LZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZWRBdHRyaWJ1dGVzID0gZ3JvdXBlZERyb3Bkb3duc1trZXldO1xuICAgICAgZmFjZXRXaWRnZXRzLnB1c2gocmVzZXRCdXR0b24oa2V5LCBpbmNsdWRlZEF0dHJpYnV0ZXMpKTtcbiAgICB9KTtcbiAgICAvLyAjZW5kcmVnaW9uIC0gR3JvdXBlZCBEcm9wZG93bnNcblxuICAgIC8vIFJlbW92ZSBudWxscyAmIGZsYXR0ZW4gd2lkZ2V0cyBhcnJheSBiZWZvcmUgc3ByZWFkaW5nIG9udG8gc2VhcmNoLmFkZFdpZGdldHMoKVxuICAgIGZhY2V0V2lkZ2V0cyA9IGZhY2V0V2lkZ2V0cy5maWx0ZXIoQm9vbGVhbik7XG4gICAgZmFjZXRXaWRnZXRzID0gZmxhdHRlbkFycmF5KGZhY2V0V2lkZ2V0cyk7XG5cbiAgICBsZXQgaW5zdGFudHNlYXJjaEluc3RhbmNlOiBhbnkgPSBudWxsO1xuICAgIGlmIChJTlNUQU5UX1NFQVJDSF9SVUxFU19EQVRBLm1hcFRvZ2dsZSkge1xuICAgICAgY29uc3QgbWFwU2VhcmNoQ2xpZW50ID0gaW5zdGFudE1laWxpU2VhcmNoKFxuICAgICAgICBwcm9jZXNzLmVudi5NRUlMSV9GUk9OVEVORF9IT1NULFxuICAgICAgICBwcm9jZXNzLmVudi5NRUlMSV9BUElfS0VZLFxuICAgICAgICB7XG4gICAgICAgICAgZmluaXRlUGFnaW5hdGlvbjogZmFsc2VcbiAgICAgICAgfVxuICAgICAgKS5zZWFyY2hDbGllbnQ7XG4gICAgICBjb25zdCBtYXBJbnN0YW5jZSA9IGluc3RhbnRzZWFyY2goe1xuICAgICAgICBpbmRleE5hbWU6IElOU1RBTlRfU0VBUkNIX1JVTEVTX0RBVEEuaW5kZXgsXG4gICAgICAgIHNlYXJjaENsaWVudDogbWFwU2VhcmNoQ2xpZW50XG4gICAgICB9KTtcbiAgICAgIG1hcEluc3RhbmNlLmFkZFdpZGdldHMoW1xuICAgICAgICBpbml0TWFwVUkoSU5TVEFOVF9TRUFSQ0hfUlVMRVNfREFUQS5tYXBUb2dnbGUpLFxuICAgICAgICBjb25maWd1cmUoe30pXG4gICAgICBdKTtcblxuICAgICAgaW5zdGFudHNlYXJjaEluc3RhbmNlID0gaW5zdGFudHNlYXJjaCh7XG4gICAgICAgIGluZGV4TmFtZTogSU5TVEFOVF9TRUFSQ0hfUlVMRVNfREFUQS5pbmRleCxcbiAgICAgICAgc2VhcmNoQ2xpZW50LFxuICAgICAgICByb3V0aW5nOiBJTlNUQU5UX1NFQVJDSF9SVUxFU19EQVRBLmlzSGxuSG9tZVBnID8gZmFsc2UgOiB0cnVlLFxuICAgICAgICBzZWFyY2hGdW5jdGlvbjogKGhlbHBlcikgPT4ge1xuICAgICAgICAgIG1hcEluc3RhbmNlLmhlbHBlci5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAuLi5oZWxwZXIuc3RhdGUsXG4gICAgICAgICAgICBoaXRzUGVyUGFnZTogMTAwMCxcbiAgICAgICAgICAgIHBhZ2U6IDBcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIG1hcEluc3RhbmNlLmhlbHBlci5zZWFyY2goKTtcbiAgICAgICAgICBoZWxwZXIuc2VhcmNoKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBtYXBJbnN0YW5jZS5zdGFydCgpO1xuXG4gICAgICBpZiAoIUlOU1RBTlRfU0VBUkNIX1JVTEVTX0RBVEEuc2hvd01hcCkge1xuICAgICAgICBjb25zdCBtYXBFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKTtcbiAgICAgICAgbWFwRWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBjb25zdCBwYXJlbnRFbCA9IG1hcEVsPy5wYXJlbnRFbGVtZW50O1xuICAgICAgICBpZiAocGFyZW50RWwpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHBhcmVudEVsLmNsYXNzTGlzdC5hZGQoJ3UtYm94LWhpZGRlbicpO1xuICAgICAgICAgICAgbWFwRWwuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc3RhbnRzZWFyY2hJbnN0YW5jZSA9IGluc3RhbnRzZWFyY2goe1xuICAgICAgICBpbmRleE5hbWU6IElOU1RBTlRfU0VBUkNIX1JVTEVTX0RBVEEuaW5kZXgsXG4gICAgICAgIHNlYXJjaENsaWVudCxcbiAgICAgICAgcm91dGluZzogSU5TVEFOVF9TRUFSQ0hfUlVMRVNfREFUQS5pc0hsbkhvbWVQZyA/IGZhbHNlIDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3Qgd2lkZ2V0cyA9IGdldFdpZGdldHMoXG4gICAgICBJTlNUQU5UX1NFQVJDSF9SVUxFU19EQVRBLFxuICAgICAgc2VhcmNoRmlsdGVycyxcbiAgICAgIGZhY2V0V2lkZ2V0cyxcbiAgICAgIGluc3RhbnRzZWFyY2hJbnN0YW5jZVxuICAgICk7XG5cbiAgICBpbnN0YW50c2VhcmNoSW5zdGFuY2UuYWRkV2lkZ2V0cyh3aWRnZXRzKTtcbiAgICAvLyBPbiByZW5kZXIgY291bGQgYmUgdXNlZnVsIGZvciB0aGluZ3MgbGlrZSBydW5uaW5nIHVwZGF0ZXMgb24gdGhlXG4gICAgLy8gaW1hZ2UgZmFkZXIuIEhvd2V2ZXIsIGl0IHJ1bnMgZXZlcnl0aW1lIHRoZSBzZWFyY2hiYXIgaGFzIGlucHV0XG4gICAgLy8gU28gaXQgZG9lc24ndCB3b3JrIGxpa2UgYW4gb24gbW91bnQgZnVuY3Rpb24gYW5kIEkgY2FuJ3QgZmluZFxuICAgIC8vIG9uZSBpbiB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIHZhbmlsbGEgdmVyc2lvblxuICAgIC8vIGluc3RhbnRzZWFyY2hJbnN0YW5jZS5vbigncmVuZGVyJywgKCkgPT4ge30pO1xuICAgIGluc3RhbnRzZWFyY2hJbnN0YW5jZS5zdGFydCgpO1xuXG4gICAgaW5pdFByb3BlcnR5RmFkZXJNdXRhdGlvbk9ic2VydmVyKCcjbGlzdGluZ3MnKTtcblxuICAgIGluc3RhbnRzZWFyY2hJbnN0YW5jZS5vbigncmVuZGVyJywgKCkgPT4ge1xuICAgICAgaW5pdFRhYmxlQ29sbGFwc2VJdGVtKCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRMaXN0aW5nVUk7XG4iLCIvKipcbiAqIEltcG9ydHNcbiAqL1xuaW1wb3J0IHsgTWVpbGlTZWFyY2ggfSBmcm9tICdtZWlsaXNlYXJjaCc7XG5pbXBvcnQgeyBudW1Gb3JtYXR0ZXIgfSBmcm9tICcuLi91dGlscy9JbmRleCc7XG5pbXBvcnQgeyBnZXRaaXBDb2RlQ29vcmRpbmF0ZXMgfSBmcm9tICcuLi91dGlscy9NYXBzJztcblxuLyoqXG4gKiBUeXBlc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIExhdExvbmdQb3Mge1xuICBsYXQ6IG51bWJlciB8IHN0cmluZztcbiAgbG5nOiBudW1iZXIgfCBzdHJpbmc7XG59XG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX1pPT00gPSA2OyAvLyBab29tIGxldmVsIHRvIHNob3cgdGhlIGVudGlyZSBjb3VudHJ5XG5leHBvcnQgY29uc3QgREVGQVVMVF9DRU5URVI6IFtudW1iZXIsIG51bWJlcl0gPSBbMzkuODI4MywgLTk4LjU3OTVdOyAvLyBHZW9ncmFwaGljIGNlbnRlciBvZiB0aGUgVVNcblxuLyoqXG4gKiBQYXJlbnQgY2xhc3MgdG8gYWxsIGxlYWZsZXQgY2xhc3Nlc1xuICovXG5jbGFzcyBMZWFmbGV0TWFwIHtcbiAgLyoqXG4gICAqIEF0dHJpYnV0aW9uIGVsZW1lbnQgYmFyIGZvciBMZWFmbGV0ICsgRVNSSVxuICAgKi9cbiAgYXR0cmlidXRpb25FbDogSFRNTEVsZW1lbnQgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0IFpJUCBmcm9tIENNU1xuICAgKi9cbiAgZGVmYXVsdFppcDogc3RyaW5nID0gbnVsbDsgLy8gQ2hhcmxvdHRlIGRlZmF1bHRcblxuICAvKipcbiAgICogRGVmYXVsdCBsYXQvbG5nIGZvciBtYXBcbiAgICovXG4gIGRlZmF1bHRMYXRMb25nOiBMYXRMb25nUG9zID0ge1xuICAgIGxhdDogMzcuMDkwMjQsXG4gICAgbG5nOiAtOTUuNzEyODkxXG4gIH07XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgem9vbSBmb3IgbWFwXG4gICAqL1xuICBkZWZhdWx0Wm9vbTogbnVtYmVyID0gMTM7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRoZSB1c2VyIGhhcyBnZW9sb2NhdGlvbiBhbGxvd2VkXG4gICAqL1xuICBnZW9sb2NhdGlvbkFsbG93ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogTGVhZiBpbnN0YW5jZVxuICAgKi9cbiAgTGVhZjogYW55ID0gd2luZG93Lkw7XG5cbiAgLyoqXG4gICAqIEhUTUwgZWxlbWVudCB0aGF0IGlzIHRoZSBjb250YWluZXIgZm9yIGxvYWRpbmcgYW5pbWF0aW9uKHMpXG4gICAqL1xuICBsb2FkaW5nQ29udGFpbmVyOiBIVE1MRWxlbWVudCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIExlYWZsZXQgbWFwIGluc3RhbmNlXG4gICAqL1xuICBtYXA6IGFueSA9IG51bGw7XG5cbiAgLyoqXG4gICAqIE1hcCBDb250YWluZXIgZWxlbWVudCBmb3IgbGVhZmxldFxuICAgKi9cbiAgbWFwQ29udGFpbmVyOiBIVE1MRWxlbWVudCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEFycmF5IG9mIG1hcmtlcnMgY3VycmVudGx5IGF0dGFjaGVkIHRvIHRoZSBtYXBcbiAgICovXG4gIG1hcmtlcnM6IGFueVtdID0gbnVsbDtcblxuICAvKipcbiAgICogTWVpbGlzZWFyY2ggQ2xpZW50XG4gICAqL1xuICBtZWlsaUNsaWVudDogTWVpbGlTZWFyY2ggPSBuZXcgTWVpbGlTZWFyY2goe1xuICAgIGhvc3Q6IHByb2Nlc3MuZW52Lk1FSUxJX0ZST05URU5EX0hPU1QsXG4gICAgYXBpS2V5OiBwcm9jZXNzLmVudi5NRUlMSV9BUElfS0VZXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBTYXlzIFwiWW91XCIgaWYgZ2VvbG9jYXRlZCwgXCJ7UXVlcnl8WklQIENvZGV9XCIgaWYgdXNpbmcgYSBub3JtYWwgc3RyaW5nIHF1ZXJ5XG4gICAqL1xuICByZWxhdGl2ZUxvY2F0aW9uVGV4dEVsOiBIVE1MRWxlbWVudCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgcmVzdWx0cyBpbjoge1h9IFByb3BlcnRpZXMgTmVhciBZb3VcbiAgICovXG4gIHJlc3VsdHNMZW5ndGhUZXh0RWw6IEhUTUxFbGVtZW50ID0gbnVsbDtcblxuICAvKipcbiAgICogU2VhcmNoIGlucHV0IGVsZW1lbnRcbiAgICovXG4gIHNlYXJjaElucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gbnVsbDtcblxuICAvKipcbiAgICogVGFrZXMgc2VhcmNoIHJlc3VsdHMgYW5kIGFkZHMgbWFya2VycyAoaW50byBhIGNsdXN0ZXIpIHRvIHRoZSBtYXAgZm9yIGVhY2hcbiAgICpcbiAgICogQHBhcmFtICAgICB7YW55fSAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRzICAgIEFycmF5IG9mIHNlYXJjaCByZXN1bHRzIHRvIGFkZCB0byB0aGUgbWFwXG4gICAqXG4gICAqIEByZXR1cm4gICAge3VuZGVmaW5lZH0gICAgICAgICAgICAgICAgICAgICByZXR1cm5zIG5vdGhpbmdcbiAgICovXG4gIGFkZFJlc3VsdE1hcmtlcnNUb01hcChzZWFyY2hSZXN1bHRzOiBhbnkpOiB1bmRlZmluZWQge1xuICAgIGlmICghc2VhcmNoUmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgY29uc3QgbWFya2VyQXJyYXk6IGFueVtdID0gW107XG4gICAgY29uc3QgY2x1c3Rlckdyb3VwOiBhbnkgPSB0aGlzLkxlYWYubWFya2VyQ2x1c3Rlckdyb3VwKCk7XG5cbiAgICBzZWFyY2hSZXN1bHRzLmZvckVhY2goKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAvLyBDdXN0b20gTWFya2VyXG4gICAgICBjb25zdCByZXN1bHRJY29uID0gdGhpcy5MZWFmLmRpdkljb24oe1xuICAgICAgICBjbGFzc05hbWU6ICdjdXN0b20tbWFya2VyJyxcbiAgICAgICAgaHRtbDogYFxuICAgICAgICAgICA8YSBocmVmPVwiJHtyZXN1bHQudXJsfVwiPlxuICAgICAgICAgICAgIDxpIGNsYXNzPVwiJHtyZXN1bHQucHJvcGVydHlTdGF0dXMudG9Mb3dlckNhc2UoKX1cIj48L2k+XG4gICAgICAgICAgICAgPHNwYW4+JHtyZXN1bHQucHJpY2UgPyBudW1Gb3JtYXR0ZXIocmVzdWx0LnByaWNlKSA6ICckJ308L3NwYW4+XG4gICAgICAgICAgICAgPGkgY2xhc3M9XCJhcnJvd1wiPlxuICAgICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDE1IDE3XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wLjI2MzY3MiA2Ljk1NDhIMTEuOTQzM1Y5LjMxMjY2SDAuMjYzNjcyVjYuOTU0OFpcIiAvPlxuICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTcuMDAwNTkgMTYuMDM0OEw1LjM5MDM5IDE0LjM4MzNMMTEuNDg0MiA4LjEzNDM0TDUuMzkwMzkgMS44ODUzOEw3LjAwMDU5IDAuMjMzODg3TDE0LjcwMjQgOC4xMzQzN0w3LjAwMDU5IDE2LjAzNDhaXCIgLz5cbiAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgPC9hPlxuICAgICAgICAgYFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHJlc3VsdE1hcmtlciA9IHRoaXMuTGVhZi5tYXJrZXIoXG4gICAgICAgIFtyZXN1bHQuX2dlby5sYXQsIHJlc3VsdC5fZ2VvLmxuZ10sXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiByZXN1bHRJY29uLFxuICAgICAgICAgIGtleWJvYXJkOiB0cnVlLFxuICAgICAgICAgIHRpdGxlOiByZXN1bHQudGl0bGVcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgbWFya2VyQXJyYXkucHVzaChyZXN1bHRNYXJrZXIpO1xuICAgICAgY2x1c3Rlckdyb3VwLmFkZExheWVyKHJlc3VsdE1hcmtlcik7XG4gICAgfSk7XG5cbiAgICBpZiAobWFya2VyQXJyYXkubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3QgbWFya2VyQm91bmRzR3JvdXAgPSB0aGlzLkxlYWYuZmVhdHVyZUdyb3VwKG1hcmtlckFycmF5KTtcbiAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhtYXJrZXJCb3VuZHNHcm91cC5nZXRCb3VuZHMoKS5wYWQoMC4xNzUpKTsgLy8gUGFkIGJhc2VkIG9uIHpvb20gZGVsdGFcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYXAuc2V0VmlldyhcbiAgICAgICAgW21hcmtlckFycmF5WzBdLmdldExhdExuZygpLmxhdCwgbWFya2VyQXJyYXlbMF0uZ2V0TGF0TG5nKCkubG5nXSxcbiAgICAgICAgdGhpcy5kZWZhdWx0Wm9vbVxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLm1hcC5hZGRMYXllcihjbHVzdGVyR3JvdXApO1xuICAgIHRoaXMubWFya2VycyA9IG1hcmtlckFycmF5O1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNlYXJjaCByZXN1bHRzIGZyb20gbWVpbGlzZWFyY2guXG4gICAqXG4gICAqICNUT0RPOiBTdXBwb3J0IGZvciBhZGRpdGlvbmFsIGZpbHRlcnMgZnJvbSBhIGxpc3Rpbmcvc2VhcmNoIHBhZ2VcbiAgICpcbiAgICogQHBhcmFtICAgICB7TGF0TG9uZ1Bvc3xzdHJpbmd9ICAgICAgICBxdWVyeSAgICBRdWVyeSBpcyBlaXRoZXIgYW4gb2JqZWN0IGNvbnRhaW5pbmcgbGF0L2xuZyBvciBhIHN0cmluZyB0aGF0IHNob3VsZCBjb250YWluIGEgemlwIGNvZGVcbiAgICpcbiAgICogQHBhcmFtICAgICB7YW55W119ICAgICAgICBmaWx0ZXJzICAgIE9iamVjdCBvZiBmaWx0ZXJzIHRvIGJlIHVzZWQgd2l0aCB0aGUgbWVpbGlzZWFyY2ggcXVlcnlcbiAgICogXG4gICAqIEBwYXJhbSAgICAge251bWJlcn0gICAgICAgIGxpbWl0ICAgICAgTGltaXQgb2YgcmVzdWx0cyB0byByZXR1cm4sIGRlZmF1bHRzIHRvIDEwMDAgKE1laWxpc2VhcmNoIGRlZmF1bHQpXG4gICAqXG4gICAqIEByZXR1cm4gICAge1Byb21pc2U8YW55Pn0gICAgICAgICAgICAgUmV0dXJucyBwcm9taXNlIG9mIHNlYXJjaCByZXF1ZXN0XG4gICAqL1xuICBhc3luYyBnZXRTZWFyY2hSZXN1bHRzKFxuICAgIHF1ZXJ5OiBMYXRMb25nUG9zIHwgc3RyaW5nLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICBmaWx0ZXJzOiBhbnlbXSA9IG51bGwsXG4gICAgbGltaXQ6IG51bWJlciA9IDEwMDBcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBsZXQgc2VhcmNoUmVzdWx0cyA9IG51bGw7XG4gICAgXG4gICAgLy8gMjAwIG1pbGUgcmFkaXVzICgyMDAgKiAxNjA5LjM0KSA6IDEgbWlsZSA9PT0gMTYwOS4zNCBtZXRlcnNcbiAgICBjb25zdCByYWRpdXNJbk1ldGVycyA9IDMyMTg2ODtcblxuICAgIC8vIFZpYSBsYXQvbG5nXG4gICAgaWYgKHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHNlYXJjaFJlc3VsdHMgPSBhd2FpdCB0aGlzLm1laWxpQ2xpZW50XG4gICAgICAgIC5pbmRleCgnZm5jUmVhbEVzdGF0ZV9wcm9wZXJ0aWVzJylcbiAgICAgICAgLnNlYXJjaCgnJywge1xuICAgICAgICAgIGZpbHRlcjogZmlsdGVycyxcbiAgICAgICAgICBsaW1pdDogbGltaXRcbiAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBzZWFyY2hSZXN1bHRzO1xuICAgIH1cblxuICAgIC8vIFZpYSB6aXAgY29kZVxuICAgIGlmICh0eXBlb2YgcXVlcnkgPT09ICdzdHJpbmcnICYmIHF1ZXJ5Lm1hdGNoKC9eXFxkKyQvZykpIHtcbiAgICAgIGNvbnN0IHppcENvb3JkcyA9IGF3YWl0IGdldFppcENvZGVDb29yZGluYXRlcyhxdWVyeSkudGhlbihcbiAgICAgICAgKGRldGFpbHMpID0+IGRldGFpbHNcbiAgICAgICk7XG5cbiAgICAgIGlmICh6aXBDb29yZHMgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgc2VhcmNoUmVzdWx0cyA9IGF3YWl0IHRoaXMubWVpbGlDbGllbnRcbiAgICAgICAgLmluZGV4KCdmbmNSZWFsRXN0YXRlX3Byb3BlcnRpZXMnKVxuICAgICAgICAuc2VhcmNoKCcnLCB7XG4gICAgICAgICAgZmlsdGVyOiBbXG4gICAgICAgICAgICBgX2dlb1JhZGl1cyhcbiAgICAgICAgICAgICR7emlwQ29vcmRzLmxhdH0sXG4gICAgICAgICAgICAgJHt6aXBDb29yZHMubG9uZ30sXG4gICAgICAgICAgICAgJHtyYWRpdXNJbk1ldGVyc31cbiAgICAgICAgICAgKWAsXG4gICAgICAgICAgICBcInByb3BlcnR5U3RhdHVzICE9ICdTb2xkJ1wiXG4gICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIHNlYXJjaFJlc3VsdHM7XG4gICAgfVxuXG4gICAgLy8gVmlhIHRyYWRpdGlvbmFsIHF1ZXJ5IHN0cmluZ1xuICAgIGlmICh0eXBlb2YgcXVlcnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzZWFyY2hSZXN1bHRzID0gYXdhaXQgdGhpcy5tZWlsaUNsaWVudFxuICAgICAgICAuaW5kZXgoJ2ZuY1JlYWxFc3RhdGVfcHJvcGVydGllcycpXG4gICAgICAgIC5zZWFyY2gocXVlcnksIHtcbiAgICAgICAgICBmaWx0ZXI6IFwicHJvcGVydHlTdGF0dXMgIT0gJ1NvbGQnXCJcbiAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBzZWFyY2hSZXN1bHRzO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBhZGp1c3RpbmcgdGhlIG1hcmtlciBwb3NpdGlvbmluZyB0byBiZSBtb3JlIHJlYWxpc3RpY1xuICAgKiAtIFNpbmNlIHdlJ3JlIHVzaW5nIGN1c3RvbSBtYXJrZXJzIHRoZSBpbml0aWFsIHBsYWNlbWVudCBvZiB0aGVtIGlzIGEgYml0IGphY2tlZCB1cFxuICAgKlxuICAgKiBAcmV0dXJuICAgIHt1bmRlZmluZWR9ICAgICAgICAgICAgUmV0dXJucyBub3RoaW5nLCB1bmRlZmluZWRcbiAgICovXG4gIGhhbmRsZU1hcmtlckFkanVzdG1lbnRzKCk6IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgbWFwTWFya2VycyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLm1hcENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLW1hcmtlcicpXG4gICAgKTtcbiAgICBtYXBNYXJrZXJzLmZvckVhY2goKG1hcmtlcjogYW55KSA9PiB7XG4gICAgICBjb25zdCBleGlzdGluZ1RyYW5zZm9ybSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG1hcmtlcikudHJhbnNmb3JtO1xuICAgICAgbWFya2VyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC01MCUpICR7ZXhpc3RpbmdUcmFuc2Zvcm19YDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGEgY2hhbmdlIG9mIHRoZSBzZWFyY2ggaW5wdXRcbiAgICpcbiAgICogQHBhcmFtICAgICB7c3RyaW5nfSAgICBuZXdRdWVyeSAgICBOZXcgc3RyaW5nIHRvIHNlYXJjaCBmb3JcbiAgICpcbiAgICogQHJldHVybiAgICB7dW5kZWZpbmVkfSAgICAgICAgICAgICAgcmV0dXJucyBub3RoaW5nXG4gICAqL1xuICBhc3luYyBoYW5kbGVTZWFyY2hJbnB1dENoYW5nZShuZXdRdWVyeTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAoIW5ld1F1ZXJ5KSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1hcmtlcnMgIT09IG51bGwpIHtcbiAgICAgIHRoaXMubWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgICAgbWFya2VyLnJlbW92ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMubWFya2VycyA9IG51bGw7XG5cbiAgICBjb25zdCBuZXdSZXN1bHRzID0gYXdhaXQgdGhpcy5nZXRTZWFyY2hSZXN1bHRzKG5ld1F1ZXJ5KS50aGVuKFxuICAgICAgKHJlc3VsdHMpID0+IHJlc3VsdHNcbiAgICApO1xuXG4gICAgaWYgKCFuZXdSZXN1bHRzKSB7XG4gICAgICB0aGlzLnVwZGF0ZU1hcChbXSwgbmV3UXVlcnkudG9TdHJpbmcoKSwgJzAnLCBuZXdRdWVyeS50b1N0cmluZygpKTtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVNYXAoXG4gICAgICBuZXdSZXN1bHRzLmhpdHMsXG4gICAgICBuZXdRdWVyeS50b1N0cmluZygpLFxuICAgICAgbmV3UmVzdWx0cy5oaXRzLmxlbmd0aCxcbiAgICAgIG5ld1F1ZXJ5LnRvU3RyaW5nKClcbiAgICApO1xuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyB0aGUgbGVhZmxldCBtYXBcbiAgICpcbiAgICogQHJldHVybiAgICB7dW5kZWZpbmVkfSAgICAgICAgICByZXR1cm5zIG5vdGhpbmdcbiAgICovXG4gIGxvYWRNYXAoKSB7XG4gICAgLy8gQ2hhcmxvdHRlIGRlZmF1bHQgdmlldywgZm9yIG5vd1xuICAgIHRoaXMubWFwID0gdGhpcy5MZWFmLm1hcCh0aGlzLm1hcENvbnRhaW5lciwge1xuICAgICAgbWF4Wm9vbTogMjUsXG4gICAgICB6b29tU25hcDogMC43NSxcbiAgICAgIHpvb21EZWx0YTogMC43NSxcbiAgICAgIHpvb21Db250cm9sOiBmYWxzZSxcbiAgICAgIHNjcm9sbFdoZWVsWm9vbTogZmFsc2UsXG4gICAgICBhdHRyaWJ1dGlvbkNvbnRyb2w6IGZhbHNlXG4gICAgfSkuc2V0VmlldyhbMzUuMjI3MSwgLTgwLjg0MzFdLCB0aGlzLmRlZmF1bHRab29tKTsgLy8gVE9ETzogY2xpZW50LWFwcHJvdmVkIGRlZmF1bHQgY2VudGVyP1xuXG4gICAgLy8gRGVmaW5lIHRoZSBTYXRlbGxpdGUgKEltYWdlcnkpIGxheWVyXG4gICAgdmFyIHNhdGVsbGl0ZUxheWVyID0gd2luZG93LkwuZXNyaS5WZWN0b3IudmVjdG9yQmFzZW1hcExheWVyKFxuICAgICAgJ0FyY0dJUzpJbWFnZXJ5JyxcbiAgICAgIHtcbiAgICAgICAgYXBpa2V5OiBwcm9jZXNzLmVudi5FU1JJX0FQSV9LRVlcbiAgICAgIH1cbiAgICApO1xuXG4gICAgLy8gRGVmaW5lIHRoZSBOYXZpZ2F0aW9uIGxheWVyXG4gICAgdmFyIG5hdmlnYXRpb25MYXllciA9IHdpbmRvdy5MLmVzcmkuVmVjdG9yLnZlY3RvckJhc2VtYXBMYXllcihcbiAgICAgICdBcmNHSVM6TmF2aWdhdGlvbicsXG4gICAgICB7XG4gICAgICAgIGFwaWtleTogcHJvY2Vzcy5lbnYuRVNSSV9BUElfS0VZXG4gICAgICB9XG4gICAgKTtcblxuICAgIC8vIEFkZCB0aGUgZGVmYXVsdCBsYXllciAoU2F0ZWxsaXRlKSB0byB0aGUgbWFwXG4gICAgc2F0ZWxsaXRlTGF5ZXIuYWRkVG8odGhpcy5tYXApO1xuXG4gICAgLy8gQWRkIGEgbGF5ZXIgY29udHJvbCB0byBzd2l0Y2ggYmV0d2VlbiBsYXllcnNcbiAgICB2YXIgYmFzZU1hcHMgPSB7XG4gICAgICBTYXRlbGxpdGU6IHNhdGVsbGl0ZUxheWVyLFxuICAgICAgTmF2aWdhdGlvbjogbmF2aWdhdGlvbkxheWVyXG4gICAgfTtcblxuICAgIC8vIEFkZCBjb250cm9scyB0byBtYXBcbiAgICB3aW5kb3cuTC5jb250cm9sLmxheWVycyhiYXNlTWFwcykuYWRkVG8odGhpcy5tYXApO1xuICAgIHdpbmRvdy5MLmNvbnRyb2wuem9vbSh7IHBvc2l0aW9uOiAnYm90dG9tcmlnaHQnIH0pLmFkZFRvKHRoaXMubWFwKTtcblxuICAgIC8vIEFueSBldmVudCBsaXN0ZW5lcnMgZm9yIHRoZSBtYXBcbiAgICB0aGlzLm1hcC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ3pvb21lbmQnLFxuICAgICAgdGhpcy5oYW5kbGVNYXJrZXJBZGp1c3RtZW50cy5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiBhIHVzZXIgaGFzIGVuYWJsZWQgbG9jYXRpb24gc2VydmljZXMsXG4gICAqIGdldCB0aGVpciBsYXQvbG5nIGFuZCBxdWVyeSByZXN1bHRzIGJhc2VkIG9uIHRoYXRcbiAgICovXG4gIGFzeW5jIHNlYXJjaFZpYUdlb2xvY2F0aW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgdGhpcy5sb2FkaW5nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmcnKTtcblxuICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24gJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICE9PSAnLycpIHtcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdWNjZXNzIGNhbGxiYWNrXG4gICAgICAgICAqL1xuICAgICAgICBhc3luYyAocG9zaXRpb24pID0+IHtcbiAgICAgICAgICB0aGlzLmdlb2xvY2F0aW9uQWxsb3dlZCA9IHRydWU7XG4gICAgICAgICAgY29uc3QgbGF0ID0gcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlO1xuICAgICAgICAgIGNvbnN0IGxuZyA9IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGU7XG4gICAgICAgICAgY29uc3QgY29vcmRzID0ge1xuICAgICAgICAgICAgbGF0LFxuICAgICAgICAgICAgbG5nXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGNvbnN0IGdlb1Jlc3VsdHM6IGFueSA9IGF3YWl0IHRoaXMuZ2V0U2VhcmNoUmVzdWx0cyhjb29yZHMpLnRoZW4oXG4gICAgICAgICAgICAocmVzdWx0cykgPT4gcmVzdWx0c1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICB0aGlzLnVwZGF0ZU1hcChnZW9SZXN1bHRzLmhpdHMsICcnLCBnZW9SZXN1bHRzLmhpdHMubGVuZ3RoLCBudWxsKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVycm9yIGNhbGxiYWNrXG4gICAgICAgICAqXG4gICAgICAgICAqIC0gSW1tZWRpYXRlIHJlc3BvbnNlIGFmdGVyIGEgZ2VvbG9jYXRpb24gZXJyb3Igc2hvdWxkIGJlIHNlYXJjaGluZyB2aWEgZGVmYXVsdFppcFxuICAgICAgICAgKi9cbiAgICAgICAgYXN5bmMgKGVycm9yKSA9PiB7XG4gICAgICAgICAgLy8gRXhwbGljaXRseSBhZGp1c3Qgc3RhdGUgdmFsdWUgYW5kIGxvZyBzb21ldGhpbmdcbiAgICAgICAgICBpZiAoZXJyb3IuUEVSTUlTU0lPTl9ERU5JRUQgJiYgd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ2RldicpKSB7XG4gICAgICAgICAgICB0aGlzLmdlb2xvY2F0aW9uQWxsb3dlZCA9IGZhbHNlO1xuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICdQZXJtaXNzaW9uIGZvciBnZW9sb2NhdGlvbiBhbmQgbG9jYXRpb24gc2VydmljZXMgZGVuaWVkJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBkZWZhdWx0UmVzdWx0cyA9IGF3YWl0IHRoaXMuZ2V0U2VhcmNoUmVzdWx0cyh0aGlzLmRlZmF1bHRMYXRMb25nKS50aGVuKChyZXN1bHRzKSA9PiByZXN1bHRzKTtcblxuICAgICAgICAgIHRoaXMudXBkYXRlTWFwKFxuICAgICAgICAgICAgZGVmYXVsdFJlc3VsdHMuaGl0cyxcbiAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgZGVmYXVsdFJlc3VsdHMuaGl0cy5sZW5ndGgsXG4gICAgICAgICAgICAnJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRSZXN1bHRzID0gYXdhaXQgdGhpcy5nZXRTZWFyY2hSZXN1bHRzKHRoaXMuZGVmYXVsdExhdExvbmcpLnRoZW4oKHJlc3VsdHMpID0+IHJlc3VsdHMpO1xuXG4gICAgICB0aGlzLnVwZGF0ZU1hcChkZWZhdWx0UmVzdWx0cy5oaXRzLCAnJywgZGVmYXVsdFJlc3VsdHMuaGl0cy5sZW5ndGgsICcnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgYXN5bmMgc2VhcmNoKCk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgZGVmYXVsdFJlc3VsdHMgPSBhd2FpdCB0aGlzLmdldFNlYXJjaFJlc3VsdHModGhpcy5kZWZhdWx0TGF0TG9uZykudGhlbigocmVzdWx0cykgPT4gcmVzdWx0cyk7XG5cbiAgICB0aGlzLnVwZGF0ZU1hcChkZWZhdWx0UmVzdWx0cy5oaXRzLCAnJywgZGVmYXVsdFJlc3VsdHMuaGl0cy5sZW5ndGgsICcnKTtcblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgbWFwIGFuZCBsb2FkaW5nIHN0YXRlIGFmdGVyIGEgcmVxdWVzdCBmaW5pc2hlc1xuICAgKlxuICAgKiBAcGFyYW0ge2FycmF5fSByZXN1bHRzIEFycmF5IG9mIHJlc3VsdHMgZnJvbSBzZWFyY2hcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlYXJjaElucHV0VmFsdWUgU3RyaW5nIHZhbHVlIHRvIGJlIHBhc3NlZCBpbnRvIHRoZSBaSVAgaW5wdXRcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8bnVsbH0gcmVzdWx0c0xlbmd0aFRleHQgbnVsbCBpZiB3ZSBkb24ndCB3YW50IHRvIGFkanVzdCwgc3RyaW5nIGlmIHNvXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bGx9IHJlbGF0aXZlTG9jYXRpb25UZXh0IG51bGwgaWYgd2UgZG9uJ3Qgd2FudCB0byBhZGp1c3QsIHN0cmluZyBpZiBzb1xuICAgKlxuICAgKiBAcmV0dXJuIHt1bmRlZmluZWR9IHJldHVybnMgbm90aGluZ1xuICAgKi9cbiAgdXBkYXRlTWFwKFxuICAgIHJlc3VsdHM6IGFueVtdLFxuICAgIHNlYXJjaElucHV0VmFsdWU6IHN0cmluZyA9ICcnLFxuICAgIHJlc3VsdHNMZW5ndGhUZXh0OiBzdHJpbmcgfCBudWxsID0gbnVsbCxcbiAgICByZWxhdGl2ZUxvY2F0aW9uVGV4dDogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgKSB7XG4gICAgLy8gQ29uZGl0aW9uYWwgdGhpbmdzXG4gICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5hZGRSZXN1bHRNYXJrZXJzVG9NYXAocmVzdWx0cyk7XG4gICAgICB0aGlzLmhhbmRsZU1hcmtlckFkanVzdG1lbnRzKCk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdHNMZW5ndGhUZXh0ICE9PSBudWxsICYmIHRoaXMucmVzdWx0c0xlbmd0aFRleHRFbCkge1xuICAgICAgdGhpcy5yZXN1bHRzTGVuZ3RoVGV4dEVsLnRleHRDb250ZW50ID0gcmVzdWx0c0xlbmd0aFRleHQ7XG4gICAgfVxuXG4gICAgaWYgKHJlbGF0aXZlTG9jYXRpb25UZXh0ICE9PSBudWxsICYmIHRoaXMucmVsYXRpdmVMb2NhdGlvblRleHRFbCkge1xuICAgICAgdGhpcy5yZWxhdGl2ZUxvY2F0aW9uVGV4dEVsLnRleHRDb250ZW50ID0gcmVsYXRpdmVMb2NhdGlvblRleHQ7XG4gICAgfVxuXG4gICAgLy8gRG8gdGhpcyBldmVyeSB0aW1lXG4gICAgaWYgKHRoaXMuc2VhcmNoSW5wdXQpIHRoaXMuc2VhcmNoSW5wdXQudmFsdWUgPSBzZWFyY2hJbnB1dFZhbHVlO1xuICAgIHRoaXMubG9hZGluZ0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVhZmxldE1hcDtcbiIsIi8qKlxuICogSW1wb3J0c1xuICovXG5cbmltcG9ydCB7IGdldExvZ2luU3RhdHVzIH0gZnJvbSAnLi4vdXRpbHMvTG9naW5TdGF0dXMnO1xuXG4vKipcbiAqIE5hdkFjY291bnRMaW5rcyBDbGFzc1xuICpcbiAqIElmIGZvciBhbnkgcmVhc29uIHdlIGV2ZXIgd2FudCBleHRlcm5hbCBjb250cm9sLCB3ZSBjYW4gc2V0IGEgdmFyaWFibGVcbiAqIG9uIHRoZSB3aW5kb3cgb2YgdGhlIHJldHVybiBmcm9tIHRoaXMgY2xhc3MgaW4gYXBwLnRzIHRoZW4gYWNjZXNzIGl0IGxpa2VcbiAqIGB3aW5kb3cuTmF2QWNjb3VudExpbmtzLmhhbmRsZUFjY291bnRMaW5rcygpO2AgZnJvbSBhbnkgZmlsZSB0aGF0IGNvbWVzIGFmdGVyXG4gKi9cbmNsYXNzIE5hdkFjY291bnRMaW5rcyB7XG4gIC8qKlxuICAgKiBBcnJheSBvZiBvdXIgQWNjb3VudExpbmtzXG4gICAqL1xuICBhY2NvdW50TGlua3M6IEhUTUxBbmNob3JFbGVtZW50W10gPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGFjY291bnRMaW5rczogTm9kZUxpc3RPZjxIVE1MQW5jaG9yRWxlbWVudD4pIHtcbiAgICB0aGlzLmFjY291bnRMaW5rcyA9IEFycmF5LmZyb20oYWNjb3VudExpbmtzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaGVzIHRvIHNlZSBpZiBhIHVzZXIgaXMgY3VycmVubHkgbG9nZ2VkIGluLCBhZGp1c3RpbmcgYWNjb3VudExpbmtzIGFjY29yZGluZ2x5LlxuICAgKlxuICAgKiBAcmV0dXJuICAgIHt1bmRlZmluZWR9ICAgICAgICAgIHJldHVybnMgbm90aGluZywgdW5kZWZpbmVkXG4gICAqL1xuICBoYW5kbGVBY2NvdW50TGlua3MoKTogdm9pZCB7XG4gICAgLy8gY29uc3QgdXNlcklzTG9nZ2VkSW4gPSBhd2FpdCBmZXRjaFVzZXJMb2dpblN0YXR1cygpO1xuICAgIGNvbnN0IHVzZXJJc0xvZ2dlZEluID0gZ2V0TG9naW5TdGF0dXMoKTtcbiAgICBjb25zdCBzaG93VGhlc2VMaW5rc1doZW5Mb2dnZWRJbiA9IHRoaXMuYWNjb3VudExpbmtzLmZpbHRlcihcbiAgICAgIChsaW5rKSA9PiBsaW5rLmdldEF0dHJpYnV0ZSgnZGF0YS1zaG93JykgPT09ICdsb2dnZWQtaW4nXG4gICAgKTtcbiAgICBjb25zdCBzaG93VGhlc2VMaW5rc1doZW5Mb2dnZWRPdXQgPSB0aGlzLmFjY291bnRMaW5rcy5maWx0ZXIoXG4gICAgICAobGluaykgPT4gbGluay5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2hvdycpID09PSAnbG9nZ2VkLW91dCdcbiAgICApO1xuXG4gICAgLy8gSWYgdXNlciBpcyBsb2dnZWQgaW5cbiAgICBpZiAodXNlcklzTG9nZ2VkSW4pIHtcbiAgICAgIHNob3dUaGVzZUxpbmtzV2hlbkxvZ2dlZEluLmZvckVhY2goKGxpbmtUb1Nob3cpID0+IHtcbiAgICAgICAgbGlua1RvU2hvdy5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1mbGV4JztcbiAgICAgIH0pO1xuICAgICAgc2hvd1RoZXNlTGlua3NXaGVuTG9nZ2VkT3V0LmZvckVhY2goKGxpbmtUb0hpZGUpID0+IHtcbiAgICAgICAgbGlua1RvSGlkZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8vIElmIHVzZXIgaXMgbG9nZ2VkIG91dFxuICAgIHNob3dUaGVzZUxpbmtzV2hlbkxvZ2dlZE91dC5mb3JFYWNoKChsaW5rVG9TaG93KSA9PiB7XG4gICAgICBsaW5rVG9TaG93LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWZsZXgnO1xuICAgIH0pO1xuICAgIHNob3dUaGVzZUxpbmtzV2hlbkxvZ2dlZEluLmZvckVhY2goKGxpbmtUb0hpZGUpID0+IHtcbiAgICAgIGxpbmtUb0hpZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuaGFuZGxlQWNjb3VudExpbmtzKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBJbml0aWFsaXphdGlvblxuICpcbiAqIEByZXR1cm4gICAge05hdkFjY291bnRMaW5rc30gICAgICAgICAgcmV0dXJucyBpbnN0YW5jZSBvZiB0aGUgY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdE1vZHVsZSgpOiBOYXZBY2NvdW50TGlua3Mge1xuICBjb25zdCBhY2NvdW50TGlua3M6IE5vZGVMaXN0T2Y8SFRNTEFuY2hvckVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAnW2RhdGEtYWNjb3VudC1saW5rXSdcbiAgKTtcblxuICBpZiAoIWFjY291bnRMaW5rcykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgYWNjb3VudExpbmtDbGFzcyA9IG5ldyBOYXZBY2NvdW50TGlua3MoYWNjb3VudExpbmtzKTtcbiAgYWNjb3VudExpbmtDbGFzcy5pbml0KCk7XG5cbiAgcmV0dXJuIGFjY291bnRMaW5rQ2xhc3M7XG59XG4iLCJmdW5jdGlvbiBjbGVhckFjdGl2ZShhbmNob3JzOiBIVE1MQW5jaG9yRWxlbWVudFtdKSB7XG4gIGFuY2hvcnM/LmZvckVhY2goKGFuY2hvcikgPT4gYW5jaG9yPy5yZW1vdmVBdHRyaWJ1dGU/LignZGF0YS1hY3RpdmUnKSk7XG59XG5cbmZ1bmN0aW9uIHNldHVwKG5vZGU6IEhUTUxFbGVtZW50KSB7XG4gIGlmICghbm9kZSkgcmV0dXJuO1xuICBcbiAgY29uc3Qgc3dpcGVyVXVpZCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXBoYycpO1xuICBpZiAoIXN3aXBlclV1aWQpIHJldHVybjtcblxuICBpZiAoIXdpbmRvdy5zd2lwZXJzKSByZXR1cm47XG5cbiAgY29uc3Qgc3dpcGVySW5zdGFuY2UgPSB3aW5kb3cuc3dpcGVycy5maW5kKFxuICAgIChpKSA9PiBpPy51dWlkID09PSBzd2lwZXJVdWlkXG4gICk/LnN3aXBlcjtcbiAgaWYgKCFzd2lwZXJJbnN0YW5jZSkgcmV0dXJuO1xuXG4gIGNvbnN0IGF2YWlsYWJsZVN0YXJ0UG9pbnRzOiBIVE1MQW5jaG9yRWxlbWVudFtdID0gQXJyYXkuZnJvbShcbiAgICBub2RlLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KCdbZGF0YS1waGMtc3RhcnRdJykgfHwgW11cbiAgKTtcblxuICBhdmFpbGFibGVTdGFydFBvaW50cy5mb3JFYWNoKChhbmNob3IpID0+IHtcbiAgICBpZiAoIWFuY2hvcikgcmV0dXJuO1xuICAgIFxuICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAvLyBubyBjbGlja2l0eSBwbGVhc2VcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNsZWFyQWN0aXZlKGF2YWlsYWJsZVN0YXJ0UG9pbnRzKTtcbiAgICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aXZlJywgJ3RydWUnKTtcbiAgICAgIGNvbnN0IHNsaWRlVG8gPSBOdW1iZXIoYW5jaG9yLmdldEF0dHJpYnV0ZSgnZGF0YS1waGMtc3RhcnQnKSA/PyAnMCcpO1xuICAgICAgc3dpcGVySW5zdGFuY2U/LnNsaWRlVG8/LihzbGlkZVRvKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gQmFjayBidXR0b24gcmV0dXJuIHRvIHByZXZpb3VzIHNlYXJjaFxuICBjb25zdCBwcmV2aW91c1VybCA9IGRvY3VtZW50LnJlZmVycmVyIHx8ICcnO1xuICBjb25zdCB1cmxQaWVjZXMgPSBwcmV2aW91c1VybC5zcGxpdCgvWy8/XS8pO1xuICBpZiAodXJsUGllY2VzWzNdID09PSAncHJvcGVydGllcycpIHtcbiAgICBjb25zdCBiYWNrVG9TZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja1RvU2VhcmNoJykgYXMgSFRNTEFuY2hvckVsZW1lbnQgfCBudWxsO1xuICAgIGlmIChiYWNrVG9TZWFyY2gpIHtcbiAgICAgIGJhY2tUb1NlYXJjaC5ocmVmID0gcHJldmlvdXNVcmw7XG4gICAgfVxuICB9ICAvKipcbiAgICogTGlzdGVuIHRvIHN3aXBlciBjaGFuZ2VzIHRvIGFjdGl2YXRlIHRoZSBwcm9wZXIgYW5jaG9yIHRhZ1xuICAgKiBhbmQgZW5zdXJpbmcgaXQgd29ya3MgaW4gYm90aCBkaXJlY3Rpb25zXG4gICAqL1xuICBzd2lwZXJJbnN0YW5jZS5vbignc2xpZGVDaGFuZ2UnLCAoc3dpcGVyKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCBhY3RpdmVBbmNob3JTdGFydCA9IG5vZGUucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1waGMtc3RhcnQ9XCIke3N3aXBlci5hY3RpdmVJbmRleH1cIl1gXG4gICAgKTtcbiAgICBjb25zdCBhY3RpdmVBbmNob3JFbmQgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtcGhjLWVuZD1cIiR7c3dpcGVyLmFjdGl2ZUluZGV4fVwiXWBcbiAgICApO1xuICAgIFxuICAgIGNvbnN0IGNhcm91c2VsV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnW2RhdGEtbGFzdC1waG90by1pbmRleF0nXG4gICAgKSBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgXG4gICAgaWYgKGNhcm91c2VsV3JhcHBlcikge1xuICAgICAgY29uc3QgbGFzdFBob3RvSW5kZXggPSBjYXJvdXNlbFdyYXBwZXIuZGF0YXNldC5sYXN0UGhvdG9JbmRleCB8fCAnMCc7XG4gICAgICBjb25zdCBsYXN0UGhvdG9JbmRleE51bSA9IHBhcnNlSW50KGxhc3RQaG90b0luZGV4LCAxMCkgfHwgMDtcbiAgICAgIFxuICAgICAgY29uc3Qgc2hvd0FsbFBob3Rvc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICcjcHJvcGVydHlEZXRhaWxfX2ltYWdlR3JpZEJ1dHRvbidcbiAgICAgICkgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgICAgXG4gICAgICBpZiAoc2hvd0FsbFBob3Rvc0J1dHRvbikge1xuICAgICAgICBpZiAoc3dpcGVyLmFjdGl2ZUluZGV4ID4gbGFzdFBob3RvSW5kZXhOdW0pIHtcbiAgICAgICAgICBzaG93QWxsUGhvdG9zQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hvd0FsbFBob3Rvc0J1dHRvbi5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmICghYWN0aXZlQW5jaG9yU3RhcnQgJiYgIWFjdGl2ZUFuY2hvckVuZCkgcmV0dXJuO1xuICAgIFxuICAgIGNsZWFyQWN0aXZlKGF2YWlsYWJsZVN0YXJ0UG9pbnRzKTtcbiAgICBcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gYWN0aXZlQW5jaG9yU3RhcnQgfHwgYWN0aXZlQW5jaG9yRW5kO1xuICAgIGFjdGl2ZUVsZW1lbnQ/LnNldEF0dHJpYnV0ZT8uKCdkYXRhLWFjdGl2ZScsICd0cnVlJyk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCk6IHZvaWQge1xuICB0cnkge1xuICAgIGNvbnN0IHByb3BlcnR5RGV0YWlsSGVybzogSFRNTEVsZW1lbnRbXSA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignW2RhdGEtcGhjXScpIHx8IFtdXG4gICAgKTtcblxuICAgIHByb3BlcnR5RGV0YWlsSGVybz8uZm9yRWFjaCgobW9kdWxlKSA9PiB7XG4gICAgICBpZiAobW9kdWxlKSBzZXR1cChtb2R1bGUpO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIFNpbGVudGx5IGhhbmRsZSBhbnkgZXJyb3JzIHRvIHByZXZlbnQgc2NyaXB0IGZyb20gYnJlYWtpbmdcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbml0aWFsaXppbmcgcHJvcGVydHkgZGV0YWlsIGhlcm86JywgZXJyb3IpO1xuICB9XG59XG4iLCIvKipcbiAqIEltcG9ydHNcbiAqL1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IExlYWZsZXRNYXAgZnJvbSAnLi9MZWFmbGV0TWFwJztcblxuLyoqXG4gKiBQcm9wZXJ0eVNlYXJjaE1hcCBDbGFzc1xuICovXG5jbGFzcyBQcm9wZXJ0eVNlYXJjaE1hcCBleHRlbmRzIExlYWZsZXRNYXAge1xuICAvKipcbiAgICogTW9kdWxlJ3MgdG9wLWxldmVsIGVsZW1lbnQgKHNlY3Rpb24pXG4gICAqL1xuICBwYXJlbnRFbDogSFRNTEVsZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHBhcmVudEVsOiBIVE1MRWxlbWVudCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tZWlsaUluZGV4ID0gJ2ZuY1JlYWxFc3RhdGVfcHJvcGVydGllcyc7XG4gICAgdGhpcy5nbG9iYWxGaWx0ZXJzID0gW1wicHJvcGVydHlTdGF0dXMgIT0gJ1NvbGQnXCJdO1xuICAgIHRoaXMucGFyZW50RWwgPSBwYXJlbnRFbDtcbiAgICB0aGlzLmxvYWRpbmdDb250YWluZXIgPSB0aGlzLnBhcmVudEVsO1xuICAgIHRoaXMuZGVmYXVsdFppcCA9IHRoaXMucGFyZW50RWwuZ2V0QXR0cmlidXRlKCdkYXRhLWRlZmF1bHQtemlwJyk7XG4gICAgdGhpcy5tYXBDb250YWluZXIgPSB0aGlzLnBhcmVudEVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1hcF0nKTtcbiAgICB0aGlzLnJlbGF0aXZlTG9jYXRpb25UZXh0RWwgPSB0aGlzLnBhcmVudEVsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnW2RhdGEtcmVsYXRpdmUtbG9jYXRpb25dJ1xuICAgICk7XG4gICAgdGhpcy5yZXN1bHRzTGVuZ3RoVGV4dEVsID0gdGhpcy5wYXJlbnRFbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ1tkYXRhLXJlc3VsdHMtY291bnRdJ1xuICAgICk7XG4gICAgdGhpcy5zZWFyY2hJbnB1dCA9IHRoaXMucGFyZW50RWwucXVlcnlTZWxlY3RvcignW2RhdGEtcXVlcnktaW5wdXRdJyk7XG4gIH1cblxuICAvKipcbiAgICogQW55dGhpbmcgdGhhdCBuZWVkcyB0byBoYXBwZW4gb24gdGhlIGluaXRpYWwgcmVxdWVzdFxuICAgKi9cbiAgaGFuZGxlSW5pdGlhbFJlcXVlc3QoKSB7XG4gICAgdGhpcy5zZWFyY2goKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IG1hcmtlckJvdW5kc0dyb3VwID0gdGhpcy5MZWFmLmZlYXR1cmVHcm91cCh0aGlzLm1hcmtlcnMpO1xuICAgICAgY29uc3QgbWFya2VyQm91bmRzID0gbWFya2VyQm91bmRzR3JvdXAuZ2V0Qm91bmRzKCk7XG4gICAgICB0aGlzLm1hcC5zZXRWaWV3KG1hcmtlckJvdW5kcy5nZXRDZW50ZXIoKSwgNSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIGZvciBhdHRhY2hpbmcgb3VyIGV2ZW50IGxpc3RlbmVyc1xuICAgKi9cbiAgYXR0YWNoTGlzdGVuZXJzKCkge1xuICAgIHRoaXMuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdrZXl1cCcsXG4gICAgICBkZWJvdW5jZSgoZSkgPT4ge1xuICAgICAgICBjb25zdCB7IHRhcmdldCB9ID0gZTtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgdmFsdWUgaXMgYSB6aXAgY29kZVxuICAgICAgICB0aGlzLmhhbmRsZVNlYXJjaElucHV0Q2hhbmdlKHZhbHVlKTtcbiAgICAgIH0sIDEwMDApXG4gICAgKTtcblxuICAgIHRoaXMuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGU6IEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IHRhcmdldCB9ID0gZTtcbiAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgICAvLyBjaGVjayBpZiB2YWx1ZSBpcyBhIHppcCBjb2RlXG4gICAgICB0aGlzLmhhbmRsZVNlYXJjaElucHV0Q2hhbmdlKHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgLy8gSW5pdGlhbGl6YXRpb24gYW5kIGxpc3RlbmVyc1xuICAgIHRoaXMubG9hZE1hcCgpO1xuICAgIHRoaXMuYXR0YWNoTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5oYW5kbGVJbml0aWFsUmVxdWVzdCgpO1xuICB9XG59XG5cbi8qKlxuICogSW5pdGlhbGl6YXRpb25cbiAqXG4gKiBAcmV0dXJuICAgIHt1bmRlZmluZWR9ICAgICAgICAgIHJldHVybnMgbm90aGluZywgaW5pdGlhbGl6ZXMgQ2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdE1vZHVsZSgpIHtcbiAgY29uc3QgcHJvcGVydHlTZWFyY2hNb2R1bGVzOiBhbnlbXSA9IEFycmF5LmZyb20oXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcHJvcGVydHktc2VhcmNoLW1vZHVsZV0nKVxuICApO1xuXG4gIHByb3BlcnR5U2VhcmNoTW9kdWxlcy5mb3JFYWNoKChtb2R1bGUpID0+IHtcbiAgICBjb25zdCBwcm9wZXJ0eVNlYXJjaE1vZHVsZTogUHJvcGVydHlTZWFyY2hNYXAgPSBuZXcgUHJvcGVydHlTZWFyY2hNYXAoXG4gICAgICBtb2R1bGVcbiAgICApO1xuICAgIHByb3BlcnR5U2VhcmNoTW9kdWxlLmluaXQoKTtcbiAgfSk7XG59XG4iLCIvLyBpbXBvcnQgeyBmZXRjaFVzZXJMb2dpblN0YXR1cyB9IGZyb20gJy4uL3V0aWxzL0FjY291bnQnO1xuXG5pbXBvcnQgeyBnZXRMb2dpblN0YXR1cyB9IGZyb20gJy4uL3V0aWxzL0xvZ2luU3RhdHVzJztcblxuYXN5bmMgZnVuY3Rpb24gYWRkU2VhcmNoKHNlYXJjaFVybDogc3RyaW5nLCBzZWFyY2hUaXRsZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgY29uc3QgdG9rZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICdbbmFtZT1cIkNSQUZUX0NTUkZfVE9LRU5cIl0nXG4gICkgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICBjb25zdCBwYXJhbXM6IFJlcXVlc3RJbml0ID0ge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCdcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHNlYXJjaFVybCxcbiAgICAgIHNlYXJjaFRpdGxlLFxuICAgICAgQ1JBRlRfQ1NSRl9UT0tFTjogdG9rZW4udmFsdWVcbiAgICB9KSxcbiAgICBtZXRob2Q6ICdQT1NUJ1xuICB9O1xuICBjb25zdCBmYXZvcml0ZVByb3BlcnR5UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAnL2FwaS92MS9wcm9wZXJ0aWVzL3NhdmUtc2VhcmNoJyxcbiAgICBwYXJhbXNcbiAgKVxuICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLnNhdmVkU2VhcmNoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdkZXYnKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gIHJldHVybiBmYXZvcml0ZVByb3BlcnR5UmVzcG9uc2U7XG59XG5cbmNvbnN0IHNhdmVVc2VyU2VhcmNoID0gKCkgPT4ge1xuICBjb25zdCBrZXl3b3JkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICdwcm9wZXJ0eUtleXdvcmRzJ1xuICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGNvbnN0IHJlcXVlc3RSZXNwb25zZSA9IGFkZFNlYXJjaChcbiAgICBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9JHt3aW5kb3cubG9jYXRpb24uc2VhcmNofWAsXG4gICAga2V5d29yZHMudmFsdWUgPyBrZXl3b3Jkcy52YWx1ZSA6IGRvY3VtZW50LnRpdGxlXG4gICk7XG5cbiAgaWYgKHJlcXVlc3RSZXNwb25zZSkge1xuICAgIC8vIFRPRE86IHRoaXMgc2hvdWxkIGJlIGEgbW9kYWwsIG9yIGlkZWFsbHkgYSBub3RpZmljYXRpb24gYmxvY2sgcmF0aGVyIHRoYW4gYSB3aW5kb3cgYWxlcnQuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XG4gICAgd2luZG93LmFsZXJ0KCdTZWFyY2ggc3VjY2Vzc2Z1bGx5IHNhdmVkJyk7XG4gIH1cbn07XG5cbmNvbnN0IG9wZW5Nb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYi1tb2RhbCcpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdiLW1vZGFsLS1vcGVuJyk7XG59O1xuXG5mdW5jdGlvbiBoYW5kbGVTYXZlU2VhcmNoKGJ1dHRvbjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgLy8gY29uc3QgdXNlcklzTG9nZ2VkSW4gPSBhd2FpdCBmZXRjaFVzZXJMb2dpblN0YXR1cygpO1xuICBjb25zdCB1c2VySXNMb2dnZWRJbiA9IGdldExvZ2luU3RhdHVzKCk7XG4gIGlmICh1c2VySXNMb2dnZWRJbikge1xuICAgIGlmIChidXR0b24uaWQgPT09ICdzYXZlU2VhcmNoJykge1xuICAgICAgY29uc3QgdGV4dFNwYW4gPSBidXR0b24ucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuICAgICAgdGV4dFNwYW4uaW5uZXJIVE1MID0gJ1NhdmUgU2VhcmNoJztcbiAgICB9XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2F2ZVVzZXJTZWFyY2gpO1xuICB9IGVsc2Uge1xuICAgIGlmIChidXR0b24uaWQgPT09ICdzYXZlU2VhcmNoJykge1xuICAgICAgY29uc3QgdGV4dFNwYW4gPSBidXR0b24ucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuICAgICAgdGV4dFNwYW4uaW5uZXJIVE1MID0gJ0dldCBVcGRhdGVzJztcbiAgICB9XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1vZGFsKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCBzYXZlU2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmVTZWFyY2gnKTtcbiAgaWYgKHNhdmVTZWFyY2gpIGhhbmRsZVNhdmVTZWFyY2goc2F2ZVNlYXJjaCk7XG59XG4iLCJpbXBvcnQgeyB0b2dnbGVSZXNldEJ0biB9IGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IHsgZ2V0Q29vcmRpbmF0ZXNaaXBDb2RlIH0gZnJvbSAnLi4vdXRpbHMvWmlwQ29kZUxvb2t1cCc7XG5pbXBvcnQgeyBvbmx5U3BhY2VzIH0gZnJvbSAnLi4vdXRpbHMvSW5kZXgnO1xuaW1wb3J0IHsgcXVlcnlQYXJlbnRzIH0gZnJvbSAnLi4vdXRpbHMvUXVlcnlQYXJlbnRzJztcblxuaW50ZXJmYWNlIFNlYXJjaEluaXQge1xuICB0YXJnZXQ6IHN0cmluZztcbiAgaW5zdGFudHNlYXJjaEluc3RhbmNlPzogYW55O1xufVxuXG4vLyAjcmVnaW9uIEN1cnJlbnQgTG9jYXRpb24gTG9naWNcbmV4cG9ydCBjb25zdCBjdXJyZW50TG9jYXRpb25TdWNjZXNzID0gYXN5bmMgKFxuICBwb3M6IEdlb2xvY2F0aW9uUG9zaXRpb24sXG4gIHNlYXJjaEJhcjogSFRNTEVsZW1lbnQsXG4gIHNlYXJjaD86IGFueVxuKSA9PiB7XG4gIGNvbnN0IHsgY29vcmRzIH0gPSBwb3M7XG4gIGNvbnN0IHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9ID0gY29vcmRzO1xuICBjb25zdCB6aXBjb2RlID0gYXdhaXQgZ2V0Q29vcmRpbmF0ZXNaaXBDb2RlKGxhdGl0dWRlLCBsb25naXR1ZGUpO1xuICBjb25zdCBzZWFyY2hCYXJJbnB1dCA9IHNlYXJjaEJhci5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICBjb25zdCBpbnB1dFZhbHVlID0gc2VhcmNoQmFySW5wdXQudmFsdWU7XG4gIGNvbnN0IGlzSW5wdXRFbXB0eSA9IG9ubHlTcGFjZXMoaW5wdXRWYWx1ZSk7XG4gIGlmIChpc0lucHV0RW1wdHkgfHwgIXNlYXJjaCkge1xuICAgIHNlYXJjaEJhcklucHV0LnZhbHVlID0gYCR7emlwY29kZX1gO1xuICB9IGVsc2Uge1xuICAgIHNlYXJjaEJhcklucHV0LnZhbHVlICs9IGAsICR7emlwY29kZX1gO1xuICB9XG5cbiAgaWYgKHNlYXJjaCkge1xuICAgIHNlYXJjaC5oZWxwZXIuc2V0UXVlcnkoc2VhcmNoQmFySW5wdXQudmFsdWUpLnNlYXJjaCgpO1xuICB9XG4gIC8vIHNlYXJjaEJhcklucHV0LmZvY3VzKCk7XG59O1xuXG5leHBvcnQgY29uc3QgY3VycmVudExvY2F0aW9uRmFpbHVyZSA9IGFzeW5jIChlcnI6IEdlb2xvY2F0aW9uUG9zaXRpb25FcnJvcikgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICBjb25zb2xlLmxvZyhlcnIpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcbiAgYWxlcnQoJ1BsZWFzZSBlbmFibGUgbG9jYXRpb24gc2VydmljZXMgdG8gdXNlIHlvdXIgY3VycmVudCBsb2NhdGlvbi4nKTtcbn07XG4vLyAjZW5kcmVnaW9uIEN1cnJlbnQgTG9jYXRpb24gTG9naWNcblxuZXhwb3J0IGNvbnN0IGluaXRTZWFyY2hUeXBlQnRucyA9IChzZWFyY2hCYXI6IEhUTUxFbGVtZW50KSA9PiB7XG4gIGNvbnN0IHNlYXJjaEJ5VHlwZUJ0bkNsYXNzID0gJ2Itc2VhcmNoQnlUeXBlJztcbiAgY29uc3QgYWN0aXZlQ2xhc3MgPSBgJHtzZWFyY2hCeVR5cGVCdG5DbGFzc30tLWFjdGl2ZWA7XG4gIGNvbnN0IHNlYXJjaEJ5VHlwZUJ1dHRvbnMgPSBzZWFyY2hCYXIucXVlcnlTZWxlY3RvckFsbChcbiAgICBgLiR7c2VhcmNoQnlUeXBlQnRuQ2xhc3N9YFxuICApO1xuICBpZiAoc2VhcmNoQnlUeXBlQnV0dG9ucykge1xuICAgIHNlYXJjaEJ5VHlwZUJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAvLyBHZXQgQnV0dG9uXG4gICAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBlO1xuICAgICAgICBjb25zdCBlbCA9IHRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgY29uc3Qgc2VhcmNoVHlwZUJ1dHRvbiA9IGVsLmNsYXNzTGlzdC5jb250YWlucyhzZWFyY2hCeVR5cGVCdG5DbGFzcylcbiAgICAgICAgICA/ICh0YXJnZXQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpXG4gICAgICAgICAgOiAocXVlcnlQYXJlbnRzKGVsLCBzZWFyY2hCeVR5cGVCdG5DbGFzcykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpO1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgZGF0YXNldDogeyBzZWFyY2h0eXBlIH1cbiAgICAgICAgfSA9IHNlYXJjaFR5cGVCdXR0b247XG5cbiAgICAgICAgLy8gUmVzZXQgYWN0aXZlIGJ1dHRvblxuICAgICAgICBjb25zdCBjdXJyZW50QWN0aXZlQnRuID0gc2VhcmNoQmFyLnF1ZXJ5U2VsZWN0b3IoYC4ke2FjdGl2ZUNsYXNzfWApO1xuICAgICAgICBjdXJyZW50QWN0aXZlQnRuLmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3MpO1xuXG4gICAgICAgIHNlYXJjaFR5cGVCdXR0b24uY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzcyk7XG4gICAgICAgIHNlYXJjaEJhci5kYXRhc2V0LmFjdGl2ZVNlYXJjaHR5cGUgPSBzZWFyY2h0eXBlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBpbml0U2VhcmNoRHJvcGRvd24gPSAoc2VhcmNoQmFyOiBIVE1MRWxlbWVudCwgc2VhcmNoPzogYW55KSA9PiB7XG4gIGluaXRTZWFyY2hUeXBlQnRucyhzZWFyY2hCYXIpO1xuXG4gIGNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IHNlYXJjaEJhci5xdWVyeVNlbGVjdG9yKCcuYi1jdXJyZW50TG9jYXRpb24nKTtcbiAgY3VycmVudExvY2F0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNlYXJjaEJhci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgY29uc3QgbG9hZGluZ1RleHQ6IEhUTUxFbGVtZW50ID0gc2VhcmNoQmFyLnF1ZXJ5U2VsZWN0b3IoJy5iLWxvYWRpbmdUZXh0Jyk7XG4gICAgbG9hZGluZ1RleHQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihcbiAgICAgIChwb3MpID0+IHtcbiAgICAgICAgY3VycmVudExvY2F0aW9uU3VjY2Vzcyhwb3MsIHNlYXJjaEJhciwgc2VhcmNoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBzZWFyY2hCYXJJbnB1dCA9IHNlYXJjaEJhci5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICAgIGlmICghc2VhcmNoKSB7XG4gICAgICAgICAgICBzZWFyY2hCYXJJbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBzZWFyY2hCYXJJbnB1dC5mb2N1cygpO1xuICAgICAgICAgIGxvYWRpbmdUZXh0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5Jyk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIChlcnIpID0+IHtcbiAgICAgICAgY3VycmVudExvY2F0aW9uRmFpbHVyZShlcnIpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHNlYXJjaEJhcklucHV0ID0gc2VhcmNoQmFyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgICAgc2VhcmNoQmFySW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICBsb2FkaW5nVGV4dC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpbWVvdXQ6IDEwMDAwIC8vIFRvIHByZXZlbnQgdGhlIGZ1bmN0aW9uIGZyb20gc2xpZW50bHkgZmFpbGluZywgdGltZSBjYW4gYmUgYWRqdXN0ZWRcbiAgICAgIH1cbiAgICApO1xuICB9KTtcblxuICBjb25zdCBzZWFyY2hJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IHNlYXJjaEJhci5xdWVyeVNlbGVjdG9yKFxuICAgICcuYWlzLVNlYXJjaEJveC1pbnB1dCdcbiAgKTtcblxuICBpZiAoc2VhcmNoSW5wdXQpIHtcbiAgICBjb25zdCByZXNldEJ0bjogSFRNTEVsZW1lbnQgPSBzZWFyY2hCYXIucXVlcnlTZWxlY3RvcihcbiAgICAgICcuYWlzLVNlYXJjaEJveC1yZXNldCdcbiAgICApO1xuXG4gICAgY29uc3Qgc2VhcmNoQmFyQ29udGFpbmVyOiBIVE1MRWxlbWVudCA9IHNlYXJjaEJhci5xdWVyeVNlbGVjdG9yKFxuICAgICAgJyNsaXN0aW5nTWFpblNlYXJjaEJhcidcbiAgICApO1xuXG4gICAgLy8gR2V0IHBsYWNlaG9sZGVyIHRleHQgcGFzc2VkIHZpYSBkYXRhIGF0dHJpYnV0ZSwgaWYgYW55XG4gICAgY29uc3QgcGxhY2Vob2xkZXJUZXh0ID0gc2VhcmNoQmFyQ29udGFpbmVyLmhhc0F0dHJpYnV0ZSgnZGF0YS1wbGFjZWhvbGRlcicpID8gXG4gICAgIHNlYXJjaEJhckNvbnRhaW5lci5kYXRhc2V0LnBsYWNlaG9sZGVyIDogJ1NlYXJjaCc7XG5cbiAgICAvLyBTZXQgc2VhcmNoIGlucHV0IHBsYWNlaG9sZGVyXG4gICAgc2VhcmNoSW5wdXQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlclRleHQ7XG5cbiAgICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB7IHZhbHVlIH0gPSBzZWFyY2hJbnB1dDtcbiAgICAgIGNvbnN0IGhhc0lucHV0ID0gdmFsdWUgPT09ICcnO1xuICAgICAgdG9nZ2xlUmVzZXRCdG4ocmVzZXRCdG4sIGhhc0lucHV0KTtcbiAgICB9KTtcblxuICAgIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZWlucHV0JywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHsgaW5wdXRUeXBlIH0gPSBlO1xuICAgICAgY29uc3QgY2hhckNvdW50ID0gc2VhcmNoSW5wdXQudmFsdWUgPyBzZWFyY2hJbnB1dC52YWx1ZS5sZW5ndGggOiBudWxsO1xuICAgICAgLy8gVXNlIHR5cGUgc3VjaCBhcyBkZWxldGVDb250ZW50QmFja3dhcmRcbiAgICAgIGlmIChlLmRhdGEgIT09IG51bGwpIHtcbiAgICAgICAgdG9nZ2xlUmVzZXRCdG4ocmVzZXRCdG4sIGZhbHNlKTtcbiAgICAgIH0gZWxzZSBpZiAoc2VhcmNoSW5wdXQudmFsdWUgIT09ICcnKSB7XG4gICAgICAgIGlmIChjaGFyQ291bnQgPT09IDEgJiYgaW5wdXRUeXBlID09PSAnZGVsZXRlQ29udGVudEJhY2t3YXJkJykge1xuICAgICAgICAgIHRvZ2dsZVJlc2V0QnRuKHJlc2V0QnRuLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b2dnbGVSZXNldEJ0bihyZXNldEJ0biwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2dnbGVSZXNldEJ0bihyZXNldEJ0biwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHJlc2V0QnRuLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5Jyk7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8vIFNlYXJjaGJhciBNdXRhdGlvbiBPYmVydmVyIC0gdXNlZCBhcyBvbiBtb3VudFxuZXhwb3J0IGNvbnN0IGluaXRTZWFyY2hCYXJNdXRhdGlvbk9ic2VydmVyID0gKFxuICBzZWFyY2hCYXI6IEhUTUxFbGVtZW50LFxuICBzZWFyY2g6IGFueVxuKSA9PiB7XG4gIGlmIChzZWFyY2hCYXIpIHtcbiAgICBjb25zdCB1bm1vdW50TXV0YXRpb25PYnNlcnZlciA9IChvYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcikgPT4ge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBjYWxsYmFjayA9IChtdXRhdGlvbkxpc3Q6IE11dGF0aW9uUmVjb3JkW10pID0+IHtcbiAgICAgIGlmIChtdXRhdGlvbkxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICBpbml0U2VhcmNoRHJvcGRvd24oc2VhcmNoQmFyLCBzZWFyY2gpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgICAgIHVubW91bnRNdXRhdGlvbk9ic2VydmVyKG9ic2VydmVyKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY29uZmlnID0geyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKHNlYXJjaEJhciwgY29uZmlnKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGluaXRTZWFyY2hEcm9wZG93bnMgPSAoe1xuICB0YXJnZXQsXG4gIGluc3RhbnRzZWFyY2hJbnRhbmNlXG59OiBTZWFyY2hJbml0KSA9PiB7XG4gIGNvbnN0IHNlYXJjaEJhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldCk7XG5cbiAgaWYgKHNlYXJjaEJhcnMpIHtcbiAgICBzZWFyY2hCYXJzLmZvckVhY2goKHNlYXJjaEJhcikgPT4ge1xuICAgICAgLy8gaW5pdFNlYXJjaERyb3Bkb3duKHNlYXJjaEJhciBhcyBIVE1MRWxlbWVudCwgc2VhcmNoKTtcbiAgICAgIGluaXRTZWFyY2hCYXJNdXRhdGlvbk9ic2VydmVyKFxuICAgICAgICBzZWFyY2hCYXIgYXMgSFRNTEVsZW1lbnQsXG4gICAgICAgIGluc3RhbnRzZWFyY2hJbnRhbmNlXG4gICAgICApO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaW5pdFppcFNlYXJjaCA9ICgpID0+IHtcbiAgY29uc3QgdGFyZ2V0ID0gJy5iLXNlYXJjaERyb3Bkb3duLS16aXAnO1xuICBpbml0U2VhcmNoRHJvcGRvd25zKHsgdGFyZ2V0IH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGluaXRIZXJvU2VhcmNoID0gKCkgPT4ge1xuICBjb25zdCBoZXJvU2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlcm9TZWFyY2hCYXJXcmFwcGVyJyk7XG4gIGlmIChoZXJvU2VhcmNoQmFyKSB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICBjb25zdCBnZXRRdWVyeSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIGNvbnN0IHVybFBpZWNlcyA9IHVybC5zcGxpdCgvWy9dLyk7XG4gICAgICAgIHJldHVybiB1cmxQaWVjZXNbdXJsUGllY2VzLmxlbmd0aCAtIDFdO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgZm9ybSA9IGhlcm9TZWFyY2hCYXIucXVlcnlTZWxlY3RvcignZm9ybScpO1xuXG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFF1ZXJ5ID0gZ2V0UXVlcnkoKTtcbiAgICAgICAgY29uc3Qgc3ViU2l0ZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpWzFdO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvJHtzdWJTaXRlfS9wcm9wZXJ0aWVzLyR7Y3VycmVudFF1ZXJ5fWA7XG4gICAgICB9KTtcblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11c2UtYmVmb3JlLWRlZmluZVxuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBjb25maWcgPSB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoaGVyb1NlYXJjaEJhciwgY29uZmlnKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdFNlYXJjaERyb3Bkb3duO1xuIiwiZXhwb3J0IGNvbnN0IGluaXRTaGFyZUN1cnJlbnRVcmwgPSAoKSA9PiB7XG4gIGNvbnN0IHNoYXJlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iLXNoYXJlQ3VycmVudFVybCcpO1xuICBzaGFyZUJ1dHRvbnMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodXJsKS50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XG4gICAgICAgIGFsZXJ0KCdDb3BpZWQgdG8gY2xpcGJhb3JkJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0U2hhcmVDdXJyZW50VXJsO1xuIiwiaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xuaW1wb3J0IHtcbiAgQTExeSxcbiAgQXV0b3BsYXksXG4gIEVmZmVjdEZhZGUsXG4gIE1vdXNld2hlZWwsXG4gIE5hdmlnYXRpb24sXG4gIFBhZ2luYXRpb24sXG4gIFRodW1ic1xufSBmcm9tICdzd2lwZXIvbW9kdWxlcyc7XG5cbi8qKlxuICogTG9vcCB0aHJvdWdoIGFsbCBvZiBvdXIgc3dpcGVyIGVsZW1lbnRzIGFuZCBpbnN0YW50aWF0ZSBhIG5ldyBTd2lwZXIgaW5zdGFuY2VcbiAqIC0gUGFzc2luZyBvcHRpb25zIGV0YyB0aHJvdWdoIGRhdGEgYXR0cmlidXRlcyBpbiB0d2lnXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbnN0IGxvZ0Nhcm91c2VscyA9IGZhbHNlO1xuICBjb25zdCBzd2lwZXJFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXN3aXBlcl0nKTtcblxuICBpZiAoIXN3aXBlckVsZW1lbnRzLmxlbmd0aCkgcmV0dXJuO1xuXG4gIHN3aXBlckVsZW1lbnRzLmZvckVhY2goKHN3aXBlckVsOiBIVE1MRWxlbWVudCwgaW5kZXg6IE51bWJlcikgPT4ge1xuICAgIGNvbnN0IHN3aXBlclV1aWQgPSBzd2lwZXJFbC5kYXRhc2V0LnN3aXBlcjtcbiAgICBjb25zdCBzd2lwZXJTZWxlY3RvciA9IGBbZGF0YS1zd2lwZXI9XCIke3N3aXBlclV1aWR9XCJdYDtcbiAgICBjb25zdCBzd2lwZXJPcHRpb25zID0gSlNPTi5wYXJzZShzd2lwZXJFbC5kYXRhc2V0LnN3aXBlck9wdGlvbnMpO1xuICAgIFxuICAgIC8vIENoZWNrIGlmIHRodW1ibmFpbHMgc3dpcGVyIGVsZW1lbnQgZXhpc3RzXG4gICAgY29uc3QgdGh1bWJzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRodW1icz1cIiR7c3dpcGVyVXVpZH1cIl1gKTtcbiAgICBjb25zdCBoYXNUaHVtYnMgPSB0aHVtYnNFbGVtZW50ICE9PSBudWxsO1xuXG4gICAgbGV0IHRodW1ic1N3aXBlciA9IG51bGw7XG4gICAgaWYgKGhhc1RodW1icykge1xuICAgICAgdGh1bWJzU3dpcGVyID0gbmV3IFN3aXBlcihgW2RhdGEtdGh1bWJzPVwiJHtzd2lwZXJVdWlkfVwiXWAsIHtcbiAgICAgICAgbW9kdWxlczogW1RodW1ic10sXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgIGZyZWVNb2RlOiB0cnVlLFxuICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKHN3aXBlclNlbGVjdG9yLCB7XG4gICAgICBtb2R1bGVzOiBbXG4gICAgICAgIEExMXksXG4gICAgICAgIEF1dG9wbGF5LFxuICAgICAgICBFZmZlY3RGYWRlLFxuICAgICAgICBNb3VzZXdoZWVsLFxuICAgICAgICBOYXZpZ2F0aW9uLFxuICAgICAgICBQYWdpbmF0aW9uLFxuICAgICAgICBUaHVtYnNcbiAgICAgIF0sXG4gICAgICBrZXlib2FyZDoge1xuICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICB9LFxuICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6IGBbZGF0YS1uZXh0PVwiJHtzd2lwZXJVdWlkfVwiXWAsXG4gICAgICAgIHByZXZFbDogYFtkYXRhLXByZXY9XCIke3N3aXBlclV1aWR9XCJdYFxuICAgICAgfSxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIuNSxcbiAgICAgIHNwYWNlQmV0d2VlbjogNTAsXG4gICAgICB0aHJlc2hvbGQ6IDUwLFxuICAgICAgbW91c2V3aGVlbDoge1xuICAgICAgICBmb3JjZVRvQXhpczogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICB0aHVtYnM6IHtcbiAgICAgICAgc3dpcGVyOiB0aHVtYnNTd2lwZXJcbiAgICAgIH0sXG4gICAgICAuLi5zd2lwZXJPcHRpb25zXG4gICAgfSk7XG5cbiAgICB3aW5kb3cuc3dpcGVycyA9IHdpbmRvdy5zd2lwZXJzIHx8IFtdO1xuICAgIHdpbmRvdy5zd2lwZXJzLnB1c2goe1xuICAgICAgdXVpZDogc3dpcGVyVXVpZCxcbiAgICAgIHN3aXBlclxuICAgIH0pO1xuXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdkZXYnKSAmJiBsb2dDYXJvdXNlbHMpIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIGNvbnNvbGUubG9nKGBTd2lwZXIgSW5zdGFuY2UgIyR7aW5kZXh9OiBgLCBzd2lwZXIpO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgfVxuICB9KTtcbn1cbiIsImNvbnN0IGluaXRTd2l0Y2hlcyA9ICgpID0+IHtcbiAgY29uc3Qgc3dpdGNoZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYi1zd2l0Y2gnKTtcbiAgaWYgKHN3aXRjaGVzKSB7XG4gICAgc3dpdGNoZXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHN3aXRjaEVsID0gdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYi1zd2l0Y2gnKVxuICAgICAgICAgID8gdGFyZ2V0XG4gICAgICAgICAgOiB0YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgaXNPbiA9IHN3aXRjaEVsLmNsYXNzTGlzdC5jb250YWlucygnYi1zd2l0Y2gtLW9uJyk7XG4gICAgICAgIGlmIChpc09uKSB7XG4gICAgICAgICAgc3dpdGNoRWwuY2xhc3NMaXN0LnJlbW92ZSgnYi1zd2l0Y2gtLW9uJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3dpdGNoRWwuY2xhc3NMaXN0LmFkZCgnYi1zd2l0Y2gtLW9uJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0U3dpdGNoZXM7XG4iLCJjb25zdCB0b2dnbGVCdXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29sbGFwc2UtYnV0dG9uJyk7XG5cbmZ1bmN0aW9uIHNsaWRlRWwoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICBpZiAoIWNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2ItZmFxX19jb2xsYXBzZV9faXRlbV9fYm9keS0tb3BlbicpKSB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ItZmFxX19jb2xsYXBzZV9faXRlbV9fYm9keS0tb3BlbicpO1xuICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gICAgY29uc3QgaGVpZ2h0ID0gYCR7Y29udGFpbmVyLmNsaWVudEhlaWdodH1weGA7XG4gICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH0sIDApO1xuICB9IGVsc2Uge1xuICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ItZmFxX19jb2xsYXBzZV9faXRlbV9fYm9keS0tb3BlbicpO1xuICAgICAgfSxcbiAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCkge1xuICBpZiAodG9nZ2xlQnV0dG9ucy5sZW5ndGgpIHtcbiAgICBBcnJheS5mcm9tKHRvZ2dsZUJ1dHRvbnMpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudElkID0gZWwuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJyk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRlbnRJZCk7XG4gICAgICAgIGNvbnN0IGlzRXhwYW5kZWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ3RydWUnO1xuXG4gICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2ItZmFxX19jb2xsYXBzZV9faXRlbV9fYnV0dG9uLS1hY3RpdmUnKTtcblxuICAgICAgICBpZiAoIWlzRXhwYW5kZWQpIHtcbiAgICAgICAgICBjb250ZW50RWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICAgICAgc2xpZGVFbChjb250ZW50RWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRlbnRFbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICBzbGlkZUVsKGNvbnRlbnRFbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iLCIvLyBUeXBlcyBncmFiYmVkIGZyb20gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvQHR5cGVzL3ZpbWVvX19wbGF5ZXJcbmltcG9ydCBWaW1lbyBmcm9tICdAdmltZW8vcGxheWVyJztcblxudHlwZSBUVmlkZW9Db250cm9sbGVyID0gSFRNTFZpZGVvRWxlbWVudCB8IFZpbWVvO1xuXG5jb25zdCB0b2dnbGVWaWRlb1BsYXkgPSAodmlkZW9Db250cm9sbGVyOiBUVmlkZW9Db250cm9sbGVyLCBwYXVzZTogYm9vbGVhbikgPT4ge1xuICBpZiAocGF1c2UpIHtcbiAgICB2aWRlb0NvbnRyb2xsZXIucGF1c2UoKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdmlkZW9Db250cm9sbGVyLnBsYXkoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbml0VmlkZW9Db250cm9sbGVycyA9ICgpID0+IHtcbiAgY29uc3QgdmlkZW9GcmFtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYi12aWRlb0ZyYW1lQXV0b1BsYXlTY3JvbGwnKTtcbiAgaWYgKHZpZGVvRnJhbWVzICYmICEhd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgLy8gU2VhbjogSSBiZWxpZXZlIHRoZSByYXRpbyBtdXN0IGJlIGhpZ2hlciB0aGFuIHRoZSB0aHJlc2hvbGRcbiAgICBjb25zdCBpbnRlcnNlY3Rpb25SYXRpbyA9IDAuMDE7XG5cbiAgICB2aWRlb0ZyYW1lcy5mb3JFYWNoKChmcmFtZSkgPT4ge1xuICAgICAgY29uc3QgdmlkZW8gPSBmcmFtZS5xdWVyeVNlbGVjdG9yKCd2aWRlbycpO1xuICAgICAgY29uc3QgdmltZW9JZnJhbWU6IEhUTUxJRnJhbWVFbGVtZW50ID1cbiAgICAgICAgZnJhbWUucXVlcnlTZWxlY3RvcignLmItdmltZW9QbGF5ZXInKTtcblxuICAgICAgaWYgKHZpZGVvIHx8IHZpbWVvSWZyYW1lKSB7XG4gICAgICAgIC8vIEFzc2lnbiBjb3JyZWN0IHZpZGVvQ29udHJvbGxlclxuICAgICAgICBjb25zdCB2aWRlb0NvbnRyb2xsZXI6IFRWaWRlb0NvbnRyb2xsZXIgPSB2aW1lb0lmcmFtZVxuICAgICAgICAgID8gKG5ldyBWaW1lbyh2aW1lb0lmcmFtZSkgYXMgVmltZW8pXG4gICAgICAgICAgOiAodmlkZW8gYXMgSFRNTFZpZGVvRWxlbWVudCk7XG4gICAgICAgIC8vIGNvbnN0IGlzUGF1c2VkID0gdmltZW9JZnJhbWUgPyB2aWRlb0NvbnRyb2xsZXIucGF1c2UgOiB2aWRlby5wYXVcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgIHRocmVzaG9sZDogMC4wMDFcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBEZWZhdWx0IENhbGxiYWNrIGZvciByZWd1bGFyIHZpZGVvIEVsJ3NcbiAgICAgICAgY29uc3QgdmlkZW9FbENhbGxCYWNrOiBJbnRlcnNlY3Rpb25PYnNlcnZlckNhbGxiYWNrID0gKGVudHJpZXMpID0+IHtcbiAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5OiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXVzZSA9XG4gICAgICAgICAgICAgIGVudHJ5LmludGVyc2VjdGlvblJhdGlvIDw9IGludGVyc2VjdGlvblJhdGlvICYmICF2aWRlby5wYXVzZWQ7XG4gICAgICAgICAgICB0b2dnbGVWaWRlb1BsYXkodmlkZW9Db250cm9sbGVyLCBwYXVzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQ2FsbGJhY2sgZm9yIHZpbWVvIHZpZGVvcyBjb250YWluZWQgaW4gaWZyYW1lc1xuICAgICAgICBjb25zdCB2aW1lb0NhbGxCYWNrOiBJbnRlcnNlY3Rpb25PYnNlcnZlckNhbGxiYWNrID0gKGVudHJpZXMpID0+IHtcbiAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5OiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5KSA9PiB7XG4gICAgICAgICAgICAodmlkZW9Db250cm9sbGVyIGFzIFZpbWVvKS5nZXRQYXVzZWQoKS50aGVuKFxuICAgICAgICAgICAgICAoaXNQYXVzZWQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXVzZSA9XG4gICAgICAgICAgICAgICAgICBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA8PSBpbnRlcnNlY3Rpb25SYXRpbyAmJiAhaXNQYXVzZWQ7XG4gICAgICAgICAgICAgICAgdG9nZ2xlVmlkZW9QbGF5KHZpZGVvQ29udHJvbGxlciwgcGF1c2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vICwoZXJyKSA9PiB7XG4gICAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBBc3NpZ24gY29ycmVjdCBjYWxsYmFja1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IHZpbWVvSWZyYW1lID8gdmltZW9DYWxsQmFjayA6IHZpZGVvRWxDYWxsQmFjaztcblxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihjYWxsYmFjaywgb3B0aW9ucyk7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZnJhbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0VmlkZW9Db250cm9sbGVycztcbiIsImV4cG9ydCAqIGZyb20gJy4vQ2hhcnRzJztcbmV4cG9ydCAqIGZyb20gJy4vRmF2b3JpdGVQcm9wZXJ0aWVzJztcbmV4cG9ydCAqIGZyb20gJy4vbGlzdGluZ1NlYXJjaCc7XG5leHBvcnQgKiBmcm9tICcuL3RlbXBsYXRlcyc7XG5leHBvcnQgKiBmcm9tICcuL1NlYXJjaEJhckRyb3Bkb3duJztcbmV4cG9ydCAqIGZyb20gJy4vU2hhcmVDdXJyZW50VXJsJztcbmV4cG9ydCAqIGZyb20gJy4vVmlkZW9Db250cm9sbGVyJztcbiIsImltcG9ydCB7IHNwcml0ZUljb24gfSBmcm9tICcuLi90ZW1wbGF0ZXMnO1xuaW1wb3J0IHsgYnV0dG9uVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZXMvQnV0dG9uJztcbmltcG9ydCB7IGdldFNpdGVIYW5kbGUgfSBmcm9tICcuLi8uLi91dGlscy9HZXRTaXRlSGFuZGxlJztcblxuZXhwb3J0IGludGVyZmFjZSBJQWdlbnRMaXN0aW5nIHtcbiAgY2VsbFBob25lOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBvZmZpY2VQaG9uZTogc3RyaW5nO1xuICBwaG90bzogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzaWduYXRpb246IHN0cmluZztcbn1cblxuY29uc3QgcGhvbmVMaW5rID0gKHBob25lTnVtYmVyOiBzdHJpbmcsIGljb25OYW1lOiBzdHJpbmcpID0+IHtcbiAgaWYgKCFwaG9uZU51bWJlciB8fCBwaG9uZU51bWJlciA9PT0gJ04vQScpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgY29uc3QgbnVtYmVycyA9IHBob25lTnVtYmVyLnNwbGl0KCcuJykuam9pbignJyk7XG4gIHJldHVybiAvKiBodG1sICovIGBcbiAgPGEgaHJlZj0ndGVsOjEke251bWJlcnN9Jz5cbiAgICAke3Nwcml0ZUljb24oaWNvbk5hbWUsICd1LXQtY29sb3ItY29yZS1zZWNvbmRhcnknKX1cbiAgICA8c3BhbiBjbGFzcz0ndS10LWNvbG9yLWdyYXlzY2FsZS1wcmltYXJ5LTUwMCc+JHtwaG9uZU51bWJlcn08L3NwYW4+XG4gIDwvYT5cbiAgYDtcbn07XG5cbmV4cG9ydCBjb25zdCBhZ2VudExpc3Rpbmc6IChkYXRhOiBJQWdlbnRMaXN0aW5nKSA9PiBzdHJpbmcgPSAoe1xuICBjZWxsUGhvbmUsXG4gIGVtYWlsLFxuICBmaXJzdE5hbWUsXG4gIGxhc3ROYW1lLFxuICBvZmZpY2VQaG9uZSxcbiAgcGhvdG8sXG4gIHVybCxcbiAgdGl0bGUsXG4gIGRlc2lnbmF0aW9uXG59KSA9PiB7XG4gIGNvbnN0IG9mZmljZVBob25lRWwgPSBwaG9uZUxpbmsob2ZmaWNlUGhvbmUsICdwaG9uZScpO1xuICBjb25zdCBjZWxsUGhvbmVFbCA9IHBob25lTGluayhjZWxsUGhvbmUsICdjZWxscGhvbmUnKTtcbiAgY29uc3Qgc2l0ZUhhbmRsZSA9IGdldFNpdGVIYW5kbGUoKTtcbiAgY29uc3QgY29udGFjdExhYmVsID1cbiAgICBzaXRlSGFuZGxlID09PSAnaHVudGluZ0xlYXNlTmV0d29yaycgPyAnRW1haWwgUmVwJyA6ICdDb250YWN0JztcbiAgY29uc3QgZ2V0VGl0bGUgPSBzaXRlSGFuZGxlID09PSAnaHVudGluZ0xlYXNlTmV0d29yaycgPyBkZXNpZ25hdGlvbiA6IHRpdGxlO1xuICBjb25zdCB1c2VyVGl0bGVFbCA9IGdldFRpdGxlID8gYDxwPiR7Z2V0VGl0bGV9PC9wPmAgOiAnJztcbiAgcmV0dXJuIC8qIGh0bWwgKi8gYFxuICA8ZGl2IGNsYXNzPSdiLWFnZW50TGlzdGluZyB8IGMtY2x1c3Rlcic+XG4gICAgPGRpdiBjbGFzcz0nYi1hZ2VudExpc3RpbmdfX2ltYWdlIGMtZnJhbWUgYy1mcmFtZS0tYXNwZWN0LTEtMSc+XG4gICAgICA8YSBocmVmPScke3VybH0nPlxuICAgICAgICA8aW1nIHNyYz0nJHtwaG90b30nIC8+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz0nYi1hZ2VudExpc3RpbmdfX2NvbnRlbnQgfCBjLWZsb3cnPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nYy1mbG93Jz5cbiAgICAgICAgICA8aDMgY2xhc3M9J2ItYWdlbnRMaXN0aW5nX19uYW1lIHwgdS13ZWlnaHQtZGVtaSc+JHtmaXJzdE5hbWV9ICR7bGFzdE5hbWV9PC9oMz5cbiAgICAgICAgICAke3VzZXJUaXRsZUVsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nYi1hZ2VudExpc3RpbmdfX3Bob25lcyBjLWZsb3cnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz0nYy1yZXBlbCc+XG4gICAgICAgICR7Y2VsbFBob25lRWx9XG4gICAgICAgICR7b2ZmaWNlUGhvbmVFbH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz0nYy1yZXBlbCc+XG4gICAgICAgICR7YnV0dG9uVGVtcGxhdGUoe1xuICAgICAgICAgIHRhZ1R5cGU6ICdhJyxcbiAgICAgICAgICBjbGFzc05hbWU6IGBiLWFnZW50TGlzdGluZ19fdmlld1Byb2ZpbGUgfCBiLWJ1dHRvbi0tcHJpbWFyeSBiLWJ1dHRvbi0td2l0aC1pY29uIHwgYy13aXRoSWNvbmAsXG4gICAgICAgICAgaHJlZjogdXJsLFxuICAgICAgICAgIGNvbnRlbnQ6ICdQcm9maWxlJyxcbiAgICAgICAgICBpY29uTmFtZTogJ2Fycm93LXJpZ2h0J1xuICAgICAgICB9KX1cbiAgICAgICAgJHtidXR0b25UZW1wbGF0ZSh7XG4gICAgICAgICAgdGFnVHlwZTogJ2EnLFxuICAgICAgICAgIGNsYXNzTmFtZTogYGItYnV0dG9uIHwgYi1idXR0b24tLXByaW1hcnkgYi1idXR0b24tLWNsZWFyIGItYnV0dG9uLS13aXRoLWljb24gYi1idXR0b24tLWNsZWFySG92ZXJgLFxuICAgICAgICAgIGhyZWY6IGBtYWlsdG86JHtlbWFpbH1gLFxuICAgICAgICAgIGljb25OYW1lOiAnYXJyb3ctcmlnaHQnLFxuICAgICAgICAgIGNvbnRlbnQ6IGNvbnRhY3RMYWJlbFxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5gO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWdlbnRMaXN0aW5nO1xuIiwiaW1wb3J0IHsgc3ByaXRlSWNvbiB9IGZyb20gJy4uL3RlbXBsYXRlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFydGljbGVDYXJkIHtcbiAgaW1hZ2U6IHN0cmluZztcbiAgcHVibGlzaGVkRGF0ZTogc3RyaW5nO1xuICB0ZWFzZXJUZXh0OiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICBjYXRlZ29yeTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgYXJ0aWNsZUNhcmRUZW1wbGF0ZTogKGRhdGE6IElBcnRpY2xlQ2FyZCkgPT4gc3RyaW5nID0gKHtcbiAgaW1hZ2UsXG4gIHB1Ymxpc2hlZERhdGUsXG4gIHRlYXNlclRleHQsXG4gIHRpdGxlLFxuICB1cmwsXG4gIGNhdGVnb3J5XG59KSA9PiB7XG4gIHJldHVybiAvKiBodG1sICovIGBcbiAgICA8YSBocmVmPScke3VybH0nIGNsYXNzPSdiLWFuY2hvckNvbXBsZXgnPlxuICAgICAgPGFydGljbGUgY2xhc3M9J2ItYXJ0aWNsZUNhcmQgfCBjLWZsb3cnPlxuICAgICAgICA8ZGl2IGNsYXNzPSdjLWZyYW1lIGMtZnJhbWUtLWFzcGVjdC00LTMgYy13aXRoTGF5ZXInPlxuICAgICAgICAgIDxpbWcgc3JjPScke2ltYWdlfScgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdjLWxheWVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2hvdmVyQmFyIGhvdmVyQmFyLS10b3AnPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nYy1yZXBlbCc+XG4gICAgICAgICAgPHAgY2xhc3M9J3UtdC1jb2xvci1jb3JlLXByaW1hcnktNTAwIHUtdHQtdXBwZXIgdS13ZWlnaHQtZXh0cmEtYm9sZCB1LXRleHQtMCc+XG4gICAgICAgICAgICAke2NhdGVnb3J5fVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzcz0ndS10LWNvbG9yLWdyYXlzY2FsZS1wcmltYXJ5LTUwMCB1LXR0LXVwcGVyIHUtd2VpZ2h0LWV4dHJhLWJvbGQgdS10ZXh0LTAnPlxuICAgICAgICAgICAgPHRpbWU+JHtwdWJsaXNoZWREYXRlfTwvdGltZT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDMgY2xhc3M9J2hlYWRsaW5lIHwgdS10LWNvbG9yLWNvcmUtcHJpbWFyeSB1LXRleHQtMiB1LXdlaWdodC1leHRyYS1ib2xkJz4ke3RpdGxlfTwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3M9J3UtdC1jb2xvci1jb3JlLXRlcnRpYXJ5Jz4ke3RlYXNlclRleHR9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J3UtZ2FwLXRvcC0zMDAgdS1nYXAtYm90dG9tLTQwMCBzbTp1LWdhcC1ib3R0b20tMzAwIG1kOnUtZ2FwLXRvcC01MDAgbWQ6dS1nYXAtYm90dG9tLTAnPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9J2ItYnV0dG9uIGItYW5jaG9yQ29tcGxleCBiLWJ1dHRvbi0tY2xlYXIgYi1idXR0b24tLXByaW1hcnkgYi1idXR0b24tLXdpdGgtaWNvbiB8IGMtd2l0aEljb24gYi1idXR0b24tLWNsZWFySG92ZXIgdS1wYWQtYmxvY2stMCc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nYi1idXR0b25fX3RleHQgfCB1LXR0LXVwcGVyIHwgdS1wYWQtcmlnaHQtMzAwJz5SZWFkIE1vcmU8L3NwYW4+XG4gICAgICAgICAgICAke3Nwcml0ZUljb24oJ2Fycm93LXJpZ2h0Jyl9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvYT5cbiAgYDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFydGljbGVDYXJkVGVtcGxhdGU7XG4iLCJpbXBvcnQgeyBjb25uZWN0UGFnaW5hdGlvbiB9IGZyb20gJ2luc3RhbnRzZWFyY2guanMvZXMvY29ubmVjdG9ycyc7XG5cbnR5cGUgVEFycmF5RnJvbU51bWJlciA9IChsZW5ndGg6IG51bWJlciwgb2Zmc2V0PzogbnVtYmVyKSA9PiBudW1iZXJbXTtcbmNvbnN0IGFycmF5RnJvbU51bWJlcjogVEFycmF5RnJvbU51bWJlciA9IChsZW5ndGgsIG9mZnNldCA9IDApID0+IHtcbiAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGggfSwgKF8sIGluZGV4KSA9PiBpbmRleCArIG9mZnNldCk7XG59O1xuXG5jb25zdCBnZXREaXNwbGF5UGFnZXNBcnJheSA9IChcbiAgcGFnZXM6IG51bWJlcltdLFxuICBudW1PZkhpdHM6IG51bWJlcixcbiAgYWN0aXZlUGFnZUluZGV4OiBudW1iZXJcbik6IG51bWJlcltdID0+IHtcbiAgLyoqXG4gICAqIENyZWF0aW5nIGEgQ3VzdG9tIHBhZ2luYXRpb24gcGFnZSBudW1iZXJzIGFycmF5XG4gICAqXG4gICAqIFN0ZXAgMTogR2V0IHRoZSBVSSBmb3IgdGhlIGhpdHMgcGVyIHBhZ2VcbiAgICovXG4gIGNvbnN0IGhpdHNQZXJQYWdlVUkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcuYWlzLUhpdHNQZXJQYWdlLXNlbGVjdCdcbiAgKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgaWYgKGhpdHNQZXJQYWdlVUkpIHtcbiAgICBjb25zdCBwYWdlc1Nob3duID0gNTtcbiAgICAvKipcbiAgICAgKiBTdGVwIDI6IEdldCB0aGUgYWN0aXZlIHZhbHVlXG4gICAgICogVGhpcyBmdW5jdGlvbiBpcyByZXJ1biB3aGVuIHRoZSBoaXRzcGVyIHBhZ2UgaXMgdXBkYXRlZCwgc28gbm8gbmVlZFxuICAgICAqIGZvciBhbiBldmVudCBsaXN0ZW5lciBvciB3YXRjaGVyLlxuICAgICAqL1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRJbmRleCB9ID0gaGl0c1BlclBhZ2VVSTtcbiAgICBjb25zdCBoaXRzUGVyUGFnZVZhbHVlID0gcGFyc2VJbnQoXG4gICAgICBoaXRzUGVyUGFnZVVJLm9wdGlvbnNbc2VsZWN0ZWRJbmRleF0udmFsdWUsXG4gICAgICAxMFxuICAgICk7XG4gICAgLy8gU3RlcCAzOiB1dGlsaXplIG5iSGl0cyB0byBmaWd1ZSBvdXQgaG93IG1hbnkgcGFnZXMgc2hvdWxkIGV4aXN0XG4gICAgY29uc3QgbnVtT2ZQYWdlcyA9IE1hdGguY2VpbChudW1PZkhpdHMgLyBoaXRzUGVyUGFnZVZhbHVlKTtcbiAgICBjb25zdCBudW1PZlBhZ2VzSW5kZXggPSBudW1PZlBhZ2VzIC0gMTtcbiAgICAvLyBTdGVwIDQ6IENoZWNrIGlmIG51bWJlciBvZiBwYWdlcyBpcyBsb3dlciB0aGFuIHdoYXQgc2hvdWxkIGJlIHNob3duICg1KS4gSWYgaXQgaXMgcmV0dXJuIGp1c3QgdGhlIG51bWJlciBvZiBwYWdlcyBhcyBhbiBhcnJheS5cbiAgICBpZiAobnVtT2ZQYWdlcyA8IDUpIHtcbiAgICAgIHJldHVybiBhcnJheUZyb21OdW1iZXIobnVtT2ZQYWdlcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0ZXAgNTogQ29udHJvbCB0aGUgb3V0cHV0IGFycmF5LCBlbnN1cmluZyB0byBjaGVjayBob3cgY2xvc2UgdGhlIGFjdGl2ZSBwYWdlIGlzIHRvXG4gICAgICogdGhlIGJvdW5kcyBvZiB0aGUgbnVtYmVyIG9mIHBhZ2VzIGFycmF5XG4gICAgICovXG4gICAgLy8gSWYgbmVhciBsb3cgYm91bmRcbiAgICBpZiAoYWN0aXZlUGFnZUluZGV4IDwgMykge1xuICAgICAgLyoqXG4gICAgICAgKiBJZiB0aGUgcGFnZSBpcyAjMyAoaW5kZXggMikgb3IgYmVsb3csIHNlbmQgYmFjayB0aGUgZmlyc3QgNSBpdGVtcy5cbiAgICAgICAqL1xuICAgICAgcmV0dXJuIGFycmF5RnJvbU51bWJlcihwYWdlc1Nob3duKTtcbiAgICB9XG4gICAgLy8gSWYgbmVhciBoaWdoIGJvdW5kXG4gICAgaWYgKGFjdGl2ZVBhZ2VJbmRleCA+IG51bU9mUGFnZXNJbmRleCAtIDMpIHtcbiAgICAgIC8qKlxuICAgICAgICogSWYgd2l0aGluIDMgcmV0dXJuIHRoZSBsYXN0IDUgaXRlbXMgYXMgYW4gYXJyYXlcbiAgICAgICAqIEV4OiAxNSBwYWdlcywgZm9yIHBhZ2UgMTMsIDE0LCAxNS4gT3IgaW5kZXhlcyAxMiwxMywxNFxuICAgICAgICogV2UganVzdCB3YW50IHRoZSBsYXN0IDUgaXRlbXMuXG4gICAgICAgKi9cbiAgICAgIHJldHVybiBhcnJheUZyb21OdW1iZXIocGFnZXNTaG93biwgbnVtT2ZQYWdlcyAtIHBhZ2VzU2hvd24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIG5vdCBuZWFyIGJvdW5kcyBzaW1wbHkgcmV0dXJuIGFuIGFycmF5IG9mIG51bWJlcnMgd2l0aCBhIGxlbmd0aFxuICAgICAqIGVxdWFsIHRvIHRoZSBkZXNpcmVkIG51bSBvZiBwYWdlcyBzaG93biwgd2l0aCBhbiBvZmZzZXQgZXF1YWwgdG8gdGhlIGFjdGl2ZVxuICAgICAqIHBhZ2UgaW5kZXggLSB0aGUgcGFkZGluZyAoYSBzdGF0aWMgdmFsdWUgb2YgMikuXG4gICAgICovXG4gICAgcmV0dXJuIGFycmF5RnJvbU51bWJlcihwYWdlc1Nob3duLCBhY3RpdmVQYWdlSW5kZXggLSAyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgcmVndWxhciBwYWdlcyBhcyBhIGZhbGwgYmFja1xuICAgKi9cbiAgcmV0dXJuIHBhZ2VzO1xufTtcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFJlbmRlck9wdGlvbnMgcHJvcGVydGllc1xuICogQHNlZSBodHRwczovL3d3dy5hbGdvbGlhLmNvbS9kb2MvYXBpLXJlZmVyZW5jZS93aWRnZXRzL3BhZ2luYXRpb24vanMvI2NyZWF0ZS1hLXJlbmRlci1mdW5jdGlvblxuICovXG5pbnRlcmZhY2UgSVJlbmRlck9wdGlvbnMge1xuICBwYWdlczogbnVtYmVyW107XG4gIGN1cnJlbnRSZWZpbmVtZW50OiBudW1iZXI7XG4gIG5iSGl0czogbnVtYmVyO1xuICBuYlBhZ2VzOiBudW1iZXI7XG4gIGlzRmlyc3RQYWdlOiBib29sZWFuO1xuICBpc0xhc3RQYWdlOiBib29sZWFuO1xuICBjYW5SZWZpbmU6IGJvb2xlYW47XG4gIHJlZmluZTogRnVuY3Rpb247XG4gIGNyZWF0ZVVSTDogRnVuY3Rpb247XG4gIHdpZGdldFBhcmFtczogYW55O1xufVxuXG4vLyBDcmVhdGUgdGhlIHJlbmRlciBmdW5jdGlvblxuY29uc3QgcmVuZGVyUGFnaW5hdGlvbiA9IChyZW5kZXJPcHRpb25zOiBJUmVuZGVyT3B0aW9ucykgPT4ge1xuICBjb25zdCB7XG4gICAgcGFnZXMsXG4gICAgY3VycmVudFJlZmluZW1lbnQsXG4gICAgaXNGaXJzdFBhZ2UsXG4gICAgaXNMYXN0UGFnZSxcbiAgICByZWZpbmUsXG4gICAgY3JlYXRlVVJMLFxuICAgIG5iSGl0c1xuICB9ID0gcmVuZGVyT3B0aW9ucztcbiAgLyoqXG4gICAqIEVuc3VyaW5nIDUgcGFnZXMgYXJlIGFsd2F5cyBkaXNwbGF5ZWQgZm9yIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxuICAgKlxuICAgKiBbQHNlYW5kZXBvdHRleV06XG4gICAqIEkgZHVnIHRocm91Z2ggdGhlIGluc3RhbnQgbWVpbGlzZWFyY2ggbGlicmFyeSB0byBzZWUgZXhhY3RseSBob3cgcGFnZXMgYXJyYXkgd2FzIHNldC5cbiAgICogRXNzZW50aWFsbHkgdGhleSdyZSBjb21pbmcgZnJvbSB0aGUgcmVzdWx0cywgYW5kIEknbSBub3Qgc3VyZSB3ZSdsbCBoYXZlIGx1Y2tcbiAgICogd2l0aCBlaXRoZXIgYW4gZXhpc3Rpbmcgc2V0dGluZyBpbiBpbnN0YW50c2VhcmNoIC8gaW5zdGFudG1laWxpc2VhcmNoIHRoYXQgd2lsbCBwcm9wZXJseVxuICAgKiBjb250cm9sIHRoZSBudW1iZXIgb2YgYnV0dG9ucy4gQSBwb3NzaWJsZSBhbHRlcm5hdGl2ZSBpcyB1cGdyYWRpbmcgaW5zdGFudG1laWxpc2VhcmNoLFxuICAgKiBidXQgdGhhdCB3aWxsIHdvdWxkIGFsc28gbWVhbiB3ZSBsaWtlbHkgaGF2ZSB0byB1cGRhdGUgdGhlIG1laWxpc2VhcmNoIHZlcnNpb24sXG4gICAqIHdoaWNoIHNlZW1zIGNvc3RseS5cbiAgICpcbiAgICogVGhlIHJlbmRlciBvcHRpb25zIGNhbiBiZSBvdmVycmlkZGVuIGhlcmUuIE9yIHJhdGhlciB3ZSBjYW4gdXNlIHNvbWUgb2YgdGhlIG90aGVycyBwcm92aWRlZCB0b1xuICAgKiByZWNyZWF0ZSBzb21lIG9mIHRoZSBzYW1lIGZ1bmN0aW9uYWxpdHkgdGhhdCB0aGUgY29ubmVjdG9yIGZ1bmN0aW9uIGlzIGRvaW5nIGJ1dCBmb3Igb3VyIG5lZWRzLlxuICAgKlxuICAgKiBWYXJzIGluY2x1ZGVkIGluIGByZW5kZXJPcHRpb25zYFxuICAgKiBuYkhpdHMgKG51bWJlcik6IFRoZSB0b3RhbCBudW1iZXIgb2YgaGl0cywgdGhpcyBoYXMgYmVlbiB1cHBwZWQgdG8gMi41ayBhbmQgYXMgbG9uZyBhcyB0aGF0IG51bWJlciBpc24ndCBleGNlZWRlZCB0aGlzIHNob3VsZCB3b3JrLiBJdCBjb3VsZCBsaWtlbHkgYWNjb3VudCBmb3IgZ29pbmcgb3ZlciBhcyB3ZWxsLCBidXQgbm90IHN1cmUgaXQncyB3b3J0aCB0aGUgaW52ZXN0bWVudCBvZiB0aW1lIHJpZ2h0IG5vdy5cbiAgICogY3VycmVudFJlZmluZW1lbnQgKG51bWJlcjppbmRleCk6IFRoaXMgaXMgdGhlIGluZGV4IG9mIHRoZSBhY3RpdmUgcGFnZVxuICAgKlxuICAgKiBwYWdlcyAobnVtYmVyW10pOiBUaGlzIGlzIGFuIGFycmF5IG9mIG51bWJlcnMgdGhhdCB3b3VsZCBjb250cm9sIHdoaWNoIHBhZ2VzIHdvdWxkIGRpc3BsYXkuIEJ1dCBkb2VzIG5vdCBiZWhhaXZlIGhvdyB3ZSB3YW50IGl0IHRvLiBDb3VsZCBhbHNvIHJlYWNoIGludG8gVUksIHNpbmNlIEkgYmVsaWV2ZSBpdCBtYXkgYmUgYSBzZWxlY3QgYW5kIGdldCBhY3RpdmUgdmFsdWUgZGlyZWN0bHkgb3V0IG9mIHRoZXJlLlxuICAgKi9cbiAgY29uc3QgcGFnZU51bWJlcnNBcnJheSA9IGdldERpc3BsYXlQYWdlc0FycmF5KFxuICAgIHBhZ2VzLFxuICAgIG5iSGl0cyxcbiAgICBjdXJyZW50UmVmaW5lbWVudFxuICApO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYWdpbmF0aW9uJyk7XG5cbiAgY29udGFpbmVyLmlubmVySFRNTCA9IC8qIGh0bWwgKi8gYFxuICAgIDxkaXYgY2xhc3M9XCJiLWxpc3RpbmdQYWdpbmF0aW9uX19kaXZpZGVyXCI+PC9kaXY+XG5cbiAgICA8dWwgY2xhc3M9XCJiLWxpc3RpbmdQYWdpbmF0aW9uX19tYWluXCI+XG4gICAgICAke1xuICAgICAgICBpc0ZpcnN0UGFnZVxuICAgICAgICAgID8gLyogaHRtbCAqLyBgXG4gICAgICA8bGkgY2xhc3M9XCJhaXMtUGFnaW5hdGlvbi1pdGVtIGFpcy1QYWdpbmF0aW9uLWl0ZW0tLWRpc2FibGVkXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYWlzLVBhZ2luYXRpb24tbGlua1wiPlxuICAgICAgICAgIDxzdmcgY2xhc3M9J2ItaWNvbiB1LWJveC1mbGV4Jz5cbiAgICAgICAgICAgIDx1c2UgaHJlZj0nL3N2Zy9zcHJpdGUuc3ZnI2Fycm93LWxlZnQnPjwvdXNlPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2xpPlxuICAgICAgYFxuICAgICAgICAgIDogLyogaHRtbCAqLyBgXG4gICAgICA8bGkgY2xhc3M9XCJhaXMtUGFnaW5hdGlvbi1pdGVtXCI+XG4gICAgICAgIDxhIGhyZWY9XCIke2NyZWF0ZVVSTChjdXJyZW50UmVmaW5lbWVudCAtIDEpfVwiIGRhdGEtdmFsdWU9XCIke1xuICAgICAgICAgIGN1cnJlbnRSZWZpbmVtZW50IC0gMVxuICAgICAgICB9XCIgY2xhc3M9XCJhaXMtUGFnaW5hdGlvbi1saW5rXCI+XG4gICAgICAgICAgPHN2ZyBjbGFzcz0nYi1pY29uIHUtYm94LWZsZXgnPlxuICAgICAgICAgICAgPHVzZSBocmVmPScvc3ZnL3Nwcml0ZS5zdmcjYXJyb3ctbGVmdCc+PC91c2U+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgICBgXG4gICAgICB9XG5cbiAgICAgICR7cGFnZU51bWJlcnNBcnJheVxuICAgICAgICAubWFwKFxuICAgICAgICAgIChwYWdlKSA9PiAvKiBodG1sICovIGBcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImFpcy1QYWdpbmF0aW9uLWl0ZW0gJHtcbiAgICAgICAgICAgICAgY3VycmVudFJlZmluZW1lbnQgPT09IHBhZ2UgPyAnYWlzLVBhZ2luYXRpb24taXRlbS0tc2VsZWN0ZWQnIDogJydcbiAgICAgICAgICAgIH1cIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzcz1cImFpcy1QYWdpbmF0aW9uLWxpbmtcIlxuICAgICAgICAgICAgICAgIGhyZWY9XCIke2NyZWF0ZVVSTChwYWdlKX1cIlxuICAgICAgICAgICAgICAgIGRhdGEtdmFsdWU9XCIke3BhZ2V9XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICR7cGFnZSArIDF9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgYFxuICAgICAgICApXG4gICAgICAgIC5qb2luKCcnKX1cblxuICAgICAgJHtcbiAgICAgICAgaXNMYXN0UGFnZVxuICAgICAgICAgID8gLyogaHRtbCAqLyBgXG4gICAgICA8bGkgY2xhc3M9XCJhaXMtUGFnaW5hdGlvbi1pdGVtIGFpcy1QYWdpbmF0aW9uLWl0ZW0tLWRpc2FibGVkXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYWlzLVBhZ2luYXRpb24tbGlua1wiPlxuICAgICAgICAgIDxzdmcgY2xhc3M9J2ItaWNvbiB1LWJveC1mbGV4Jz5cbiAgICAgICAgICAgIDx1c2UgaHJlZj0nL3N2Zy9zcHJpdGUuc3ZnI2Fycm93LXJpZ2h0Jz48L3VzZT5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9saT5cbiAgICAgIGBcbiAgICAgICAgICA6IC8qIGh0bWwgKi8gYFxuICAgICAgPGxpIGNsYXNzPVwiYWlzLVBhZ2luYXRpb24taXRlbVwiPlxuICAgICAgICA8YSBocmVmPVwiJHtjcmVhdGVVUkwoY3VycmVudFJlZmluZW1lbnQgKyAxKX1cIiBkYXRhLXZhbHVlPVwiJHtcbiAgICAgICAgICBjdXJyZW50UmVmaW5lbWVudCArIDFcbiAgICAgICAgfVwiIGNsYXNzPVwiYWlzLVBhZ2luYXRpb24tbGlua1wiPlxuICAgICAgICAgIDxzdmcgY2xhc3M9J2ItaWNvbiB1LWJveC1mbGV4Jz5cbiAgICAgICAgICAgIDx1c2UgaHJlZj0nL3N2Zy9zcHJpdGUuc3ZnI2Fycm93LXJpZ2h0Jz48L3VzZT5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9saT5cbiAgICAgIGBcbiAgICAgIH1cbiAgICA8L3VsPlxuXG4gICAgPGRpdiBjbGFzcz1cImItbGlzdGluZ1BhZ2luYXRpb25fX2RpdmlkZXJcIj48L2Rpdj5cblxuICAgIDx1bCBjbGFzcz1cImItbGlzdGluZ1BhZ2luYXRpb25fX2Fycm93c1wiPlxuICAgICAgJHtcbiAgICAgICAgaXNGaXJzdFBhZ2VcbiAgICAgICAgICA/IC8qIGh0bWwgKi8gYFxuICAgICAgPGxpIGNsYXNzPVwiYWlzLVBhZ2luYXRpb24taXRlbSBhaXMtUGFnaW5hdGlvbi1pdGVtLS1wcmV2UGFnZSBhaXMtUGFnaW5hdGlvbi1pdGVtLS1kaXNhYmxlZFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImFpcy1QYWdpbmF0aW9uLWxpbmtcIj5cbiAgICAgICAgICA8c3ZnIGNsYXNzPSdiLWljb24gdS1ib3gtZmxleCc+XG4gICAgICAgICAgICA8dXNlIGhyZWY9Jy9zdmcvc3ByaXRlLnN2ZyNhcnJvdy1sZWZ0Jz48L3VzZT5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9saT5cbiAgICAgIGBcbiAgICAgICAgICA6IC8qIGh0bWwgKi8gYFxuICAgICAgPGxpIGNsYXNzPVwiYWlzLVBhZ2luYXRpb24taXRlbSBhaXMtUGFnaW5hdGlvbi1pdGVtLS1wcmV2UGFnZVwiPlxuICAgICAgICA8YSBocmVmPVwiJHtjcmVhdGVVUkwoY3VycmVudFJlZmluZW1lbnQgLSAxKX1cIiBkYXRhLXZhbHVlPVwiJHtcbiAgICAgICAgICBjdXJyZW50UmVmaW5lbWVudCAtIDFcbiAgICAgICAgfVwiIGNsYXNzPVwiYWlzLVBhZ2luYXRpb24tbGlua1wiPlxuICAgICAgICAgIDxzdmcgY2xhc3M9J2ItaWNvbiB1LWJveC1mbGV4Jz5cbiAgICAgICAgICAgIDx1c2UgaHJlZj0nL3N2Zy9zcHJpdGUuc3ZnI2Fycm93LWxlZnQnPjwvdXNlPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgICAgYFxuICAgICAgfVxuXG4gICAgICAke1xuICAgICAgICBpc0xhc3RQYWdlXG4gICAgICAgICAgPyAvKiBodG1sICovIGBcbiAgICAgIDxsaSBjbGFzcz1cImFpcy1QYWdpbmF0aW9uLWl0ZW0gYWlzLVBhZ2luYXRpb24taXRlbS0tbmV4dFBhZ2UgYWlzLVBhZ2luYXRpb24taXRlbS0tZGlzYWJsZWRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhaXMtUGFnaW5hdGlvbi1saW5rXCI+XG4gICAgICAgICAgPHN2ZyBjbGFzcz0nYi1pY29uIHUtYm94LWZsZXgnPlxuICAgICAgICAgICAgPHVzZSBocmVmPScvc3ZnL3Nwcml0ZS5zdmcjYXJyb3ctcmlnaHQnPjwvdXNlPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2xpPlxuICAgICAgYFxuICAgICAgICAgIDogLyogaHRtbCAqLyBgXG4gICAgICA8bGkgY2xhc3M9XCJhaXMtUGFnaW5hdGlvbi1pdGVtIGFpcy1QYWdpbmF0aW9uLWl0ZW0tLW5leHRQYWdlXCI+XG4gICAgICAgIDxhIGhyZWY9XCIke2NyZWF0ZVVSTChjdXJyZW50UmVmaW5lbWVudCArIDEpfVwiIGRhdGEtdmFsdWU9XCIke1xuICAgICAgICAgIGN1cnJlbnRSZWZpbmVtZW50ICsgMVxuICAgICAgICB9XCIgY2xhc3M9XCJhaXMtUGFnaW5hdGlvbi1saW5rXCI+XG4gICAgICAgICAgPHN2ZyBjbGFzcz0nYi1pY29uIHUtYm94LWZsZXgnPlxuICAgICAgICAgICAgPHVzZSBocmVmPScvc3ZnL3Nwcml0ZS5zdmcjYXJyb3ctcmlnaHQnPjwvdXNlPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgICAgYFxuICAgICAgfVxuICAgIDwvdWw+XG4gIGA7XG5cbiAgWy4uLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdhJyldLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudDtcbiAgICAgIGlmICh0YXJnZXQpIHJlZmluZSh0YXJnZXQuZGF0YXNldC52YWx1ZSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLy8gQ3JlYXRlIHRoZSBjdXN0b20gd2lkZ2V0XG5leHBvcnQgY29uc3QgQ3VzdG9tUGFnaW5hdGlvbiA9IGNvbm5lY3RQYWdpbmF0aW9uKHJlbmRlclBhZ2luYXRpb24pO1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21QYWdpbmF0aW9uO1xuIiwiaW1wb3J0IHsgY29ubmVjdFNvcnRCeSB9IGZyb20gJ2luc3RhbnRzZWFyY2guanMvZXMvY29ubmVjdG9ycyc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBSZW5kZXJPcHRpb25zIHByb3BlcnRpZXNcbiAqIEBzZWUgaHR0cHM6Ly93d3cuYWxnb2xpYS5jb20vZG9jL2FwaS1yZWZlcmVuY2Uvd2lkZ2V0cy9zb3J0LWJ5L2pzLyNjcmVhdGUtYS1yZW5kZXItZnVuY3Rpb25cbiAqL1xuaW50ZXJmYWNlIElSZW5kZXJPcHRpb25zIHtcbiAgb3B0aW9uczoge1xuICAgIGlzRGVmYXVsdD86IGJvb2xlYW47XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB2YWx1ZTogc3RyaW5nO1xuICB9W107XG4gIGN1cnJlbnRSZWZpbmVtZW50OiBzdHJpbmc7XG4gIC8vIGNhblJlZmluZTogYm9vbGVhbjsgLy8gU2VlIG5vdGUgc3RhcnRpbmcgb24gbGluZSA2MlxuICByZWZpbmU6IEZ1bmN0aW9uO1xuICB3aWRnZXRQYXJhbXM6IGFueTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlbmRlclNvcnRCeSA9IChcbiAgcmVuZGVyT3B0aW9uczogSVJlbmRlck9wdGlvbnMsXG4gIGlzRmlyc3RSZW5kZXI6IGJvb2xlYW5cbikgPT4ge1xuICBjb25zdCB7XG4gICAgLy8gY2FuUmVmaW5lLCAvLyBTZWUgbm90ZSBzdGFydGluZyBvbiBsaW5lIDYyXG4gICAgY3VycmVudFJlZmluZW1lbnQsXG4gICAgb3B0aW9ucyxcbiAgICByZWZpbmUsXG4gICAgd2lkZ2V0UGFyYW1zXG4gIH0gPSByZW5kZXJPcHRpb25zO1xuXG4gIGlmIChpc0ZpcnN0UmVuZGVyKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cbiAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAvLyBSZWZpbmUgd2l0aCB0aGUgPHNlbGVjdD4gdmFsdWVcbiAgICAgIHJlZmluZSgoZXZlbnQudGFyZ2V0IGFzIEhUTUxTZWxlY3RFbGVtZW50KS52YWx1ZSk7XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgY3NzQ2xhc3NlcyB0byByZXNwZWN0aXZlIGVsZW1lbnRzXG4gICAgaWYgKHdpZGdldFBhcmFtcz8uY3NzQ2xhc3Nlcykge1xuICAgICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB3aWRnZXRQYXJhbXMuY3NzQ2xhc3Nlcy5zZWxlY3QpO1xuICAgICAgc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsIHdpZGdldFBhcmFtcy5jc3NDbGFzc2VzLm9wdGlvbik7XG4gICAgICB9KTtcbiAgICAgIHdpZGdldFBhcmFtcy5jb250YWluZXIuc2V0QXR0cmlidXRlKFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICB3aWRnZXRQYXJhbXMuY3NzQ2xhc3Nlcy5yb290XG4gICAgICApO1xuICAgIH1cblxuICAgIHdpZGdldFBhcmFtcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcblxuICAgIC8vIExldCdzIGFsc28gc29ydHxyZWZpbmUgdGhlIHJlc3VsdHMgYnkgZGVmYXVsdCwgaWYgdGhlcmUgaXMgb25lXG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbjogYW55ID0gb3B0aW9ucy5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLmlzRGVmYXVsdClbMF07XG4gICAgaWYgKGRlZmF1bHRPcHRpb24pIHtcbiAgICAgIHJlZmluZShkZWZhdWx0T3B0aW9uLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBzZWxlY3QgPSB3aWRnZXRQYXJhbXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xuICBzZWxlY3Quc2V0QXR0cmlidXRlKFxuICAgICdjbGFzcycsXG4gICAgJ3UtdGV4dC1iYXNlIHUtd2VpZ2h0LWJvbGQgdS10LWNvbG9yLW5ldXRyYWxzLXByaW1hcnktNTAwJ1xuICApO1xuXG4gIC8qKlxuICAgKiBTdHJhbmdlIGlzc3VlIHdoZXJlIGNhblJlZmluZSBpc24ndCB3aXRoaW4gdGhlIFNvcnRCeVJlbmRlclN0YXRlXG4gICAqIEJ1dCBpdCB3b3JrcyBvbiBOV08gc28ganVzdCBpZ25vcmluZyB0aGlzIG9uIEZOQyBhbmQgbmV2ZXIgbGV0dGluZyBpdCBiZSBkaXNhYmxlZFxuICAgKi9cbiAgLy8gc2VsZWN0LmRpc2FibGVkID0gIWNhblJlZmluZTtcblxuICBzZWxlY3QuaW5uZXJIVE1MID0gYFxuICAgICR7b3B0aW9uc1xuICAgICAgLm1hcChcbiAgICAgICAgKG9wdGlvbikgPT4gYFxuICAgICAgICAgIDxvcHRpb25cbiAgICAgICAgICAgIHZhbHVlPVwiJHtvcHRpb24udmFsdWV9XCJcbiAgICAgICAgICAgIGRhdGEtdHJhY2tpbmctdmFsdWU9XCIke29wdGlvbi5sYWJlbH1cIlxuICAgICAgICAgICAgJHtvcHRpb24udmFsdWUgPT09IGN1cnJlbnRSZWZpbmVtZW50ID8gJ3NlbGVjdGVkJyA6ICcnfVxuICAgICAgICAgID5cbiAgICAgICAgICAgICR7b3B0aW9uLmxhYmVsfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICBgXG4gICAgICApXG4gICAgICAuam9pbignJyl9XG4gIGA7XG59O1xuXG5leHBvcnQgY29uc3QgQ3VzdG9tU29ydEJ5ID0gY29ubmVjdFNvcnRCeShyZW5kZXJTb3J0QnkpO1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21Tb3J0Qnk7XG4iLCJpbXBvcnQgeyBjb25uZWN0UmVmaW5lbWVudExpc3QgfSBmcm9tICdpbnN0YW50c2VhcmNoLmpzL2VzL2Nvbm5lY3RvcnMnO1xuXG4vKipcbiAqIExpc3RpbmdUeXBlIFJlZmluZW1lbnQgTGlzdCAoQ3VzdG9tIFVJKVxuICpcbiAqIEBzZWUgaHR0cHM6Ly93d3cuYWxnb2xpYS5jb20vZG9jL2FwaS1yZWZlcmVuY2Uvd2lkZ2V0cy9yZWZpbmVtZW50LWxpc3QvanMvI2NyZWF0ZS1hLXJlbmRlci1mdW5jdGlvblxuICovXG5jb25zdCByZW5kZXJSZWZpbmVtZW50TGlzdCA9IChyZW5kZXJPcHRpb25zOiBhbnksIGlzRmlyc3RSZW5kZXI6IGFueSkgPT4ge1xuICBjb25zdCB7IHJlZmluZSwgY3JlYXRlVVJMLCB3aWRnZXRQYXJhbXMgfSA9IHJlbmRlck9wdGlvbnM7XG5cbiAgaWYgKGlzRmlyc3RSZW5kZXIpIHtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdWwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2xpc3QnKTtcbiAgICB1bC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Fpcy1SZWZpbmVtZW50TGlzdCB8IHUtdGV4dC0wJyk7XG5cbiAgICB3aWRnZXRQYXJhbXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHVsKTtcbiAgfVxuXG4gIC8vIEdldCBjdXJyZW50UmVmaW5lbWVudHMgZnJvbSBleGlzdGluZyBlbGVtZW50c1xuICBjb25zdCBjdXJyZW50UmVmaW5lbWVudHM6IHN0cmluZ1tdID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWlzLUN1cnJlbnRSZWZpbmVtZW50cy1jYXRlZ29yeUxhYmVsJylcbiAgKS5tYXAoKGl0ZW06IGFueSkgPT4gaXRlbS50ZXh0Q29udGVudCk7XG5cbiAgY29uc3QgYWxsTGlzdGluZ3NFbmFibGVkID0gY3VycmVudFJlZmluZW1lbnRzLmluY2x1ZGVzKCdBbGwgTGlzdGluZyBUeXBlcycpO1xuICBjb25zdCBhbGxBdWN0aW9uc0VuYWJsZWQgPSBjdXJyZW50UmVmaW5lbWVudHMuaW5jbHVkZXMoJ0FsbCBBdWN0aW9ucycpO1xuXG4gIC8vIFJlbmRlciBsaXN0IGl0ZW1zIG1hcmt1cCwgYWx3YXlzIHNhbWUgb3JkZXJcbiAgd2lkZ2V0UGFyYW1zLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCd1bCcpLmlubmVySFRNTCA9IGBcbiAgICA8bGk+XG4gICAgICA8YVxuICAgICAgICBocmVmPVwiJHtjcmVhdGVVUkwoJ0FsbCBMaXN0aW5nIFR5cGVzJyl9XCJcbiAgICAgICAgZGF0YS12YWx1ZT1cIiR7J0FsbCBMaXN0aW5nIFR5cGVzJ31cIlxuICAgICAgICBjbGFzcz1cIiR7YWxsTGlzdGluZ3NFbmFibGVkID8gJ2FjdGl2ZScgOiAnJ31cIlxuICAgICAgPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIGNsYXNzPVwiYWlzLVJlZmluZW1lbnRMaXN0LWNoZWNrYm94XCJcbiAgICAgICAgICAke2FsbExpc3RpbmdzRW5hYmxlZCA/ICdjaGVja2VkJyA6ICcnfVxuICAgICAgICA+IEFsbCBMaXN0aW5nIFR5cGVzXG4gICAgICA8L2E+XG4gICAgPC9saT5cblxuICAgIDxsaT5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9XCIke2NyZWF0ZVVSTCgnRm9yIHNhbGUnKX1cIlxuICAgICAgICBkYXRhLXZhbHVlPVwiJHsnRm9yIHNhbGUnfVwiXG4gICAgICAgIGNsYXNzPVwiJHthbGxMaXN0aW5nc0VuYWJsZWQgPyAncGFyZW50LWVuYWJsZWQnIDogJyd9XCJcbiAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICBjbGFzcz1cImFpcy1SZWZpbmVtZW50TGlzdC1jaGVja2JveFwiXG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIGN1cnJlbnRSZWZpbmVtZW50cy5pbmNsdWRlcygnRm9yIHNhbGUnKSB8fCBhbGxMaXN0aW5nc0VuYWJsZWRcbiAgICAgICAgICAgICAgPyAnY2hlY2tlZCdcbiAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgPiBGb3IgU2FsZVxuICAgICAgPC9hPlxuICAgIDwvbGk+XG5cbiAgICA8bGkgY2xhc3M9XCJoYXNTdWJsaXN0IGFjdGl2ZVwiPlxuICAgICAgPGFcbiAgICAgICAgaHJlZj1cIiR7Y3JlYXRlVVJMKCdBbGwgQXVjdGlvbnMnKX1cIlxuICAgICAgICBkYXRhLXZhbHVlPVwiJHsnQWxsIEF1Y3Rpb25zJ31cIlxuICAgICAgICBjbGFzcz1cIiR7YWxsTGlzdGluZ3NFbmFibGVkID8gJ3BhcmVudC1lbmFibGVkJyA6ICcnfVwiXG4gICAgICA+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgY2xhc3M9XCJhaXMtUmVmaW5lbWVudExpc3QtY2hlY2tib3hcIlxuICAgICAgICAgICR7YWxsQXVjdGlvbnNFbmFibGVkIHx8IGFsbExpc3RpbmdzRW5hYmxlZCA/ICdjaGVja2VkJyA6ICcnfVxuICAgICAgICA+IEFsbCBBdWN0aW9uc1xuICAgICAgPC9hPlxuXG4gICAgICA8YnV0dG9uIGNsYXNzPVwic3VibGlzdFRyaWdnZXJcIj48c3ZnIGNsYXNzPSdiLWljb24nPjx1c2UgaHJlZj0nL3N2Zy9zcHJpdGUuc3ZnI2NoZXZyb24tdXAnPjwvdXNlPjwvc3ZnPjwvYnV0dG9uPlxuXG4gICAgICA8dWwgcm9sZT1cImxpc3RcIj5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiJHtjcmVhdGVVUkwoJ0luLVBlcnNvbiBBdWN0aW9uJyl9XCJcbiAgICAgICAgICAgIGRhdGEtdmFsdWU9XCIkeydJbi1QZXJzb24gQXVjdGlvbid9XCJcbiAgICAgICAgICAgIGNsYXNzPVwiJHtcbiAgICAgICAgICAgICAgYWxsTGlzdGluZ3NFbmFibGVkIHx8IGFsbEF1Y3Rpb25zRW5hYmxlZCA/ICdwYXJlbnQtZW5hYmxlZCcgOiAnJ1xuICAgICAgICAgICAgfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiYWlzLVJlZmluZW1lbnRMaXN0LWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UmVmaW5lbWVudHMuaW5jbHVkZXMoJ0luLVBlcnNvbiBBdWN0aW9uJykgfHxcbiAgICAgICAgICAgICAgICBhbGxBdWN0aW9uc0VuYWJsZWQgfHxcbiAgICAgICAgICAgICAgICBhbGxMaXN0aW5nc0VuYWJsZWRcbiAgICAgICAgICAgICAgICAgID8gJ2NoZWNrZWQnXG4gICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID4gSW4tUGVyc29uIEF1Y3Rpb25cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiJHtjcmVhdGVVUkwoJ09ubGluZSBBdWN0aW9uJyl9XCJcbiAgICAgICAgICAgIGRhdGEtdmFsdWU9XCIkeydPbmxpbmUgQXVjdGlvbid9XCJcbiAgICAgICAgICAgIGNsYXNzPVwiJHtcbiAgICAgICAgICAgICAgYWxsTGlzdGluZ3NFbmFibGVkIHx8IGFsbEF1Y3Rpb25zRW5hYmxlZCA/ICdwYXJlbnQtZW5hYmxlZCcgOiAnJ1xuICAgICAgICAgICAgfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiYWlzLVJlZmluZW1lbnRMaXN0LWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UmVmaW5lbWVudHMuaW5jbHVkZXMoJ09ubGluZSBBdWN0aW9uJykgfHxcbiAgICAgICAgICAgICAgICBhbGxBdWN0aW9uc0VuYWJsZWQgfHxcbiAgICAgICAgICAgICAgICBhbGxMaXN0aW5nc0VuYWJsZWRcbiAgICAgICAgICAgICAgICAgID8gJ2NoZWNrZWQnXG4gICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID4gT25saW5lIEF1Y3Rpb25cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiJHtjcmVhdGVVUkwoJ1NpbXVsY2FzdCBBdWN0aW9uJyl9XCJcbiAgICAgICAgICAgIGRhdGEtdmFsdWU9XCIkeydTaW11bGNhc3QgQXVjdGlvbid9XCJcbiAgICAgICAgICAgIGNsYXNzPVwiJHtcbiAgICAgICAgICAgICAgYWxsTGlzdGluZ3NFbmFibGVkIHx8IGFsbEF1Y3Rpb25zRW5hYmxlZCA/ICdwYXJlbnQtZW5hYmxlZCcgOiAnJ1xuICAgICAgICAgICAgfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiYWlzLVJlZmluZW1lbnRMaXN0LWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UmVmaW5lbWVudHMuaW5jbHVkZXMoJ1NpbXVsY2FzdCBBdWN0aW9uJykgfHxcbiAgICAgICAgICAgICAgICBhbGxBdWN0aW9uc0VuYWJsZWQgfHxcbiAgICAgICAgICAgICAgICBhbGxMaXN0aW5nc0VuYWJsZWRcbiAgICAgICAgICAgICAgICAgID8gJ2NoZWNrZWQnXG4gICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID4gU2ltdWxjYXN0IEF1Y3Rpb25cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiJHtjcmVhdGVVUkwoJ0ZvciBTYWxlIGJ5IEJpZCcpfVwiXG4gICAgICAgICAgICBkYXRhLXZhbHVlPVwiJHsnRm9yIFNhbGUgYnkgQmlkJ31cIlxuICAgICAgICAgICAgY2xhc3M9XCIke1xuICAgICAgICAgICAgICBhbGxMaXN0aW5nc0VuYWJsZWQgfHwgYWxsQXVjdGlvbnNFbmFibGVkID8gJ3BhcmVudC1lbmFibGVkJyA6ICcnXG4gICAgICAgICAgICB9XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJhaXMtUmVmaW5lbWVudExpc3QtY2hlY2tib3hcIlxuICAgICAgICAgICAgICAke1xuICAgICAgICAgICAgICAgIGN1cnJlbnRSZWZpbmVtZW50cy5pbmNsdWRlcygnRm9yIFNhbGUgYnkgQmlkJykgfHxcbiAgICAgICAgICAgICAgICBhbGxBdWN0aW9uc0VuYWJsZWQgfHxcbiAgICAgICAgICAgICAgICBhbGxMaXN0aW5nc0VuYWJsZWRcbiAgICAgICAgICAgICAgICAgID8gJ2NoZWNrZWQnXG4gICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID4gRm9yIFNhbGUgYnkgQmlkXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2xpPlxuICBgO1xuXG4gIFsuLi53aWRnZXRQYXJhbXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKV0uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJlZmluZShldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudmFsdWUpO1xuICAgIH0pO1xuICB9KTtcblxuICBbXG4gICAgLi4ud2lkZ2V0UGFyYW1zLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJy5oYXNTdWJsaXN0IGJ1dHRvbi5zdWJsaXN0VHJpZ2dlcidcbiAgICApXG4gIF0uZm9yRWFjaCgodHJpZ2dlcjogYW55KSA9PiB7XG4gICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBhbnkpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHBhcmVudExpc3RJdGVtID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICBwYXJlbnRMaXN0SXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBsaXN0aW5nVHlwZVJlZmluZW1lbnRMaXN0ID0gY29ubmVjdFJlZmluZW1lbnRMaXN0KHJlbmRlclJlZmluZW1lbnRMaXN0KTtcblxuZXhwb3J0IGRlZmF1bHQgbGlzdGluZ1R5cGVSZWZpbmVtZW50TGlzdDtcbiIsImltcG9ydCB7IHF1ZXJ5UGFyZW50cyB9IGZyb20gJy4uLy4uL3V0aWxzL1F1ZXJ5UGFyZW50cyc7XG5cbi8vIFNlYW46IFRoaXMgdmlld3BvcnQgbG9naWMgc2hvdWxkIGJlIG1vdmVkIGludG8gdXRpbHMgZXZlbnR1YWxseVxuLy8gY29uc3QgaXNJblZpZXdQb3J0ID0gKGVsOiBIVE1MRWxlbWVudCkgPT4ge1xuLy8gICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgcmVjdC50b3AgPj0gMCAmJlxuLy8gICAgIHJlY3QubGVmdCA+PSAwICYmXG4vLyAgICAgcmVjdC5ib3R0b20gPD1cbi8vICAgICAgICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgJiZcbi8vICAgICByZWN0LnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXG4vLyAgICk7XG4vLyB9O1xuXG5jb25zdCB2aWV3UG9ydENlbnRlciA9IChlbDogSFRNTEVsZW1lbnQpID0+IHtcbiAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4gKFxuICAgICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpIC8gMiAtIHJlY3QubGVmdFxuICApO1xufTtcblxuY29uc3QgaXNJblZpZXdQb3J0UmlnaHRFZGdlID0gKGVsOiBIVE1MRWxlbWVudCkgPT4ge1xuICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiAoXG4gICAgcmVjdC5yaWdodCA8PVxuICAgICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpIC0gMTVcbiAgKTtcbn07XG5cbmNvbnN0IGlzSW5WaWV3UG9ydExlZnRFZGdlID0gKGVsOiBIVE1MRWxlbWVudCkgPT4ge1xuICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiByZWN0LmxlZnQgPj0gMDtcbn07XG5cbmNvbnN0IGluaXRMaXN0aW5nRHJvcGRvd25zID0gKCkgPT4ge1xuICBjb25zdCBsaXN0aW5nRHJvcGRvd25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmItbGlzdGluZ0Ryb3Bkb3duJyk7XG5cbiAgY29uc3QgY2xvc2VEcm9wZG93bnMgPSAod3JhcHBpbmdFbGVtZW50PzogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBzZWFyY2hlZEVsID0gd3JhcHBpbmdFbGVtZW50IHx8IGRvY3VtZW50O1xuICAgIGNvbnN0IHJlbGV2YW50RHJvcGRvd25zID0gc2VhcmNoZWRFbC5xdWVyeVNlbGVjdG9yQWxsKCcuYi1saXN0aW5nRHJvcGRvd24nKTtcbiAgICByZWxldmFudERyb3Bkb3ducy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBpZiAobGlzdGluZ0Ryb3Bkb3ducykge1xuICAgIGxpc3RpbmdEcm9wZG93bnMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5iLWxpc3RpbmdEcm9wZG93bl9fc2VsZWN0Jyk7XG4gICAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBzZWxlY3QucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgY29udGVudDogSFRNTEVsZW1lbnQgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgJy5iLWxpc3RpbmdEcm9wZG93bl9fY29udGVudCdcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHdyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcbiAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBwYXJlbnQgPSBxdWVyeVBhcmVudHMod3JhcHBlciwgJ2ItbGlzdGluZ0Ryb3Bkb3duJyk7XG4gICAgICAgICAgY2xvc2VEcm9wZG93bnMocGFyZW50KTtcbiAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcblxuICAgICAgICAgIC8vICNyZWdpb24gLSBQbGFjZW1lbnQgTG9naWNcbiAgICAgICAgICAvLyBUaGlzIGNhbiBiZSBtb3ZlZCB0byBpdCdzIG93biBmdW5jdGlvbiBhbmQgcnVuIG9uIHJlc2l6ZSBhcyB3ZWxsLlxuICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnYi1saXN0aW5nRHJvcGRvd24tLWFsaWduUmlnaHQnKTtcbiAgICAgICAgICBjb250ZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdsZWZ0Jyk7XG4gICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdiLWxpc3RpbmdEcm9wZG93bi0tYWxpZ25DZW50ZXInKTtcblxuICAgICAgICAgIGNvbnN0IHdpdGhJblJpZ2h0RWRnZSA9IGlzSW5WaWV3UG9ydFJpZ2h0RWRnZShjb250ZW50KTtcblxuICAgICAgICAgIGlmICghd2l0aEluUmlnaHRFZGdlKSB7XG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2ItbGlzdGluZ0Ryb3Bkb3duLS1hbGlnblJpZ2h0Jyk7XG4gICAgICAgICAgICBjb25zdCB3aXRoSW5MZWZ0RWRnZSA9IGlzSW5WaWV3UG9ydExlZnRFZGdlKGNvbnRlbnQpO1xuXG4gICAgICAgICAgICBpZiAoIXdpdGhJbkxlZnRFZGdlKSB7XG4gICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnYi1saXN0aW5nRHJvcGRvd24tLWFsaWduUmlnaHQnKTtcbiAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5sZWZ0ID0gYCR7dmlld1BvcnRDZW50ZXIod3JhcHBlcil9cHhgO1xuICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2ItbGlzdGluZ0Ryb3Bkb3duLS1hbGlnbkNlbnRlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyAjZW5kcmVnaW9uIC0gUGxhY2VtZW50IExvZ2ljXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjb250ZW50ID0gZWwucXVlcnlTZWxlY3RvcignLmItbGlzdGluZ0Ryb3Bkb3duX19jb250ZW50Jyk7XG4gICAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbG9zZURyb3Bkb3ducyhjb250ZW50IGFzIEhUTUxFbGVtZW50KTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjb250cm9scyA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5iLWxpc3RpbmdEcm9wZG93bl9fY29udHJvbHMnKTtcbiAgICAgIGlmIChjb250cm9scykge1xuICAgICAgICBjb25zdCBkb25lQnV0dG9uOiBIVE1MRWxlbWVudCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgJy5iLWxpc3RpbmdEcm9wZG93bl9fZG9uZUJ0bidcbiAgICAgICAgKTtcbiAgICAgICAgLy8gY29uc3QgcmVzZXRCdXR0b246SFRNTEVsZW1lbnQgPSBlbC5xdWVyeVNlbGVjdG9yKCcuYi1saXN0aW5nRHJvcGRvd25fX3Jlc2V0QnRuJyk7XG5cbiAgICAgICAgZG9uZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBjb25zdCByYW5nZVN1Ym1pdDogSFRNTEZvcm1FbGVtZW50ID0gZWwucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICcuYWlzLVJhbmdlSW5wdXQtc3VibWl0J1xuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKHJhbmdlU3VibWl0KSB7XG4gICAgICAgICAgICByYW5nZVN1Ym1pdC5jbGljaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBlbCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgLy8gVGhlcmUncyBhIGJldHRlciB3YXkgdG8gbG9vcCB0aHJvdWdoIHRoaXMgaGVyZSB0aGVuIHRvIGhhdmUgYSBjbGljayBvbiB0aGUgY29udGVudCBidXQgSSBjYW4ndCB0aGluayBvZiB0aGUgYmVzdCB3YXkgcmlnaHQgbm93LlxuICAgICAgLy8gY29uc3QgcGFyZW50ID0gcXVlcnlQYXJlbnRzKGVsLCAnYi1saXN0aW5nRHJvcGRvd24nKTtcblxuICAgICAgY29uc3QgaXNEcm9wZG93biA9XG4gICAgICAgIGVsLm1hdGNoZXMoJy5iLWxpc3RpbmdEcm9wZG93bl9fc2VsZWN0JykgfHxcbiAgICAgICAgZWwubWF0Y2hlcygnLmItbGlzdGluZ0Ryb3Bkb3duX19jb250ZW50Jyk7XG5cbiAgICAgIGlmICghaXNEcm9wZG93bikge1xuICAgICAgICBjb25zdCBkcm9wZG93bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYi1saXN0aW5nRHJvcGRvd24nKTtcbiAgICAgICAgZHJvcGRvd25zLmZvckVhY2goKGRyb3Bkb3duKSA9PiB7XG4gICAgICAgICAgaWYgKGRyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XG4gICAgICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICBjbG9zZURyb3Bkb3ducygpO1xuICAgIH0pO1xuICB9XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IHsgaW5pdExpc3RpbmdEcm9wZG93bnMgfTtcbiIsIi8vIFNlYW46IE1pZ2h0IGJlIGEgZ29vZCBpZGVhIHRvIG1lcmdlIHRoaXMgZmlsZSB3aXRoIGxlYWZsZXRXaWRnZXRcbmltcG9ydCB7IEdlb1NlYXJjaENvbm5lY3RvclBhcmFtcyB9IGZyb20gJ2luc3RhbnRzZWFyY2guanMvZXMvY29ubmVjdG9ycy9nZW8tc2VhcmNoL2Nvbm5lY3RHZW9TZWFyY2gnO1xuaW1wb3J0IGxlYWZsZXRHZW9TZWFyY2ggZnJvbSAnLi9sZWFmbGV0V2lkZ2V0JztcblxuY29uc3Qgc2hvd01hcCA9IChcbiAgLy8gaGFsZkxpc3RpbmdzOiBIVE1MRWxlbWVudCxcbiAgLy8gZnVsbExpc3RpbmdzOiBIVE1MRWxlbWVudCxcbiAgbWFwOiBIVE1MRWxlbWVudFxuKSA9PiB7XG4gIC8qKlxuICAgKiBOb3QgdXNpbmcgaGFsZi9mdWxsIGNhcmRzIGFueW1vcmUsIGFsd2F5cyBmdWxsIGNhcmRzLiBCdXQgbGVhdmluZyBpbi10YWN0IGluIGNhc2UgdGhhdCBjaGFuZ2VzXG4gICAqL1xuICAvLyBoYWxmTGlzdGluZ3MuY2xhc3NMaXN0LnJlbW92ZSgndS1ib3gtaGlkZGVuJyk7XG4gIC8vIGZ1bGxMaXN0aW5ncy5jbGFzc0xpc3QuYWRkKCd1LWJveC1oaWRkZW4nKTtcblxuICAvLyByZWZyZXNoIG1hcFxuICBpZiAod2luZG93LmN1cnJlbnRNYXApIHdpbmRvdy5jdXJyZW50TWFwLmludmFsaWRhdGVTaXplKCk7XG5cbiAgbWFwLmNsYXNzTGlzdC5yZW1vdmUoJ3UtYm94LWhpZGRlbicpO1xuXG4gIC8vIGZvciBzb21lIHJlYXNvbiBuZWVkcyB0byBiZSByZWZyZXNoZWQgYWdhaW5cbiAgaWYgKHdpbmRvdy5jdXJyZW50TWFwKSB3aW5kb3cuY3VycmVudE1hcC5pbnZhbGlkYXRlU2l6ZSgpO1xufTtcblxuY29uc3QgaGlkZU1hcCA9IChcbiAgLy8gaGFsZkxpc3RpbmdzOiBIVE1MRWxlbWVudCxcbiAgLy8gZnVsbExpc3RpbmdzOiBIVE1MRWxlbWVudCxcbiAgbWFwOiBIVE1MRWxlbWVudFxuKSA9PiB7XG4gIC8qKlxuICAgKiBOb3QgdXNpbmcgaGFsZi9mdWxsIGNhcmRzIGFueW1vcmUsIGFsd2F5cyBmdWxsIGNhcmRzLiBCdXQgbGVhdmluZyBpbi10YWN0IGluIGNhc2UgdGhhdCBjaGFuZ2VzXG4gICAqL1xuICAvLyBoYWxmTGlzdGluZ3MuY2xhc3NMaXN0LmFkZCgndS1ib3gtaGlkZGVuJyk7XG4gIC8vIGZ1bGxMaXN0aW5ncy5jbGFzc0xpc3QucmVtb3ZlKCd1LWJveC1oaWRkZW4nKTtcbiAgbWFwLmNsYXNzTGlzdC5hZGQoJ3UtYm94LWhpZGRlbicpO1xufTtcblxuY29uc3QgdG9nZ2xlTWFwID0gKHNob3dNYXBVSTogYm9vbGVhbikgPT4ge1xuICBjb25zdCBtYXA6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RpbmdNYXBDb2x1bW4nKTtcbiAgLy8gY29uc3QgaGFsZkxpc3RpbmdzOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0aW5ncycpO1xuICAvLyBjb25zdCBmdWxsTGlzdGluZ3M6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3RpbmdzRnVsbCcpO1xuXG4gIGlmIChzaG93TWFwVUkpIHtcbiAgICBzaG93TWFwKG1hcCk7XG4gICAgLy8gc2hvd01hcChoYWxmTGlzdGluZ3MsIGZ1bGxMaXN0aW5ncywgbWFwKTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlTWFwKG1hcCk7XG4gICAgLy8gaGlkZU1hcChoYWxmTGlzdGluZ3MsIGZ1bGxMaXN0aW5ncywgbWFwKTtcbiAgfVxufTtcblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlTWFwVG9nZ2xlKG1hcElzQ2xvc2VkOiBzdHJpbmcpIHtcbiAgY29uc3QgdG9rZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICdbbmFtZT1cIkNSQUZUX0NTUkZfVE9LRU5cIl0nXG4gICkgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICBjb25zdCBwYXJhbXM6IFJlcXVlc3RJbml0ID0ge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCdcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHNob3dNYXA6IG1hcElzQ2xvc2VkLFxuICAgICAgQ1JBRlRfQ1NSRl9UT0tFTjogdG9rZW4udmFsdWVcbiAgICB9KSxcbiAgICBtZXRob2Q6ICdQT1NUJ1xuICB9O1xuICBjb25zdCBtYXBUb2dnbGVSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICcvYXBpL3YxL3Byb3BlcnRpZXMvc2F2ZS1tYXAtdG9nZ2xlJyxcbiAgICBwYXJhbXNcbiAgKVxuICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICByZXR1cm4gbWFwVG9nZ2xlUmVzcG9uc2U7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0TWFwVUkgPSAobWFwVG9nZ2xlOiBib29sZWFuKSA9PiB7XG4gIGNvbnN0IG1hcFRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXBUb2dnbGVCdXR0b24nKTtcbiAgaWYgKG1hcFRvZ2dsZUJ1dHRvbikge1xuICAgIG1hcFRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IG1hcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0aW5nTWFwQ29sdW1uJyk7XG4gICAgICBjb25zdCBtYXBJc0Nsb3NlZCA9IG1hcC5jbGFzc0xpc3QuY29udGFpbnMoJ3UtYm94LWhpZGRlbicpO1xuICAgICAgdXBkYXRlTWFwVG9nZ2xlKG1hcElzQ2xvc2VkKTtcbiAgICAgIHRvZ2dsZU1hcChtYXBJc0Nsb3NlZCk7XG4gICAgfSk7XG4gICAgdG9nZ2xlTWFwKG1hcFRvZ2dsZSk7XG4gIH1cblxuICByZXR1cm4gbGVhZmxldEdlb1NlYXJjaCh7XG4gICAgY29udGFpbmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFwJyksXG4gICAgaW5pdGlhbFpvb206IDE1XG4gIH0gYXMgR2VvU2VhcmNoQ29ubmVjdG9yUGFyYW1zKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRNYXBVSTtcbiIsImltcG9ydCB7XG4gIGluaXRGYXZvcml0ZVByb3BlcnRpZXMsXG4gIGlzUHJvcGVydHlBRmF2b3JpdGUsXG4gIG9wZW5Nb2RhbCxcbiAgc2F2ZWRQcm9wZXJ0eUFzRmF2b3JpdGVcbn0gZnJvbSAnLi4vRmF2b3JpdGVQcm9wZXJ0aWVzJztcbmltcG9ydCB7XG4gIGluaXRJbWFnZUZhZGVyLFxuICBpbWFnZUZhZGVyVGVtcGxhdGUsXG4gIHVubW91bnRJbWFnZUZhZGVyc1xufSBmcm9tICcuLi9JbWFnZUZhZGVyJztcbmltcG9ydCB7IHNwcml0ZUljb24gfSBmcm9tICcuLi90ZW1wbGF0ZXMnO1xuXG4vLyBUaGlzIGNvbXBvbmVudCBoYXMgYSB0d2lnIHZlcnNpb24gaW4gdGhlIGJhc2ljIGNhcmRcbi8vIEl0IG1heSBiZSBiZXR0ZXIgbmFtZWQgd2l0aG91dCBhbGx1ZGluZyB0byBwcm9wZXJ0aWVzXG5leHBvcnQgY29uc3QgcHJvcGVydHlGYWRlclRlbXBsYXRlID0gKHByb3BlcnR5SWQ6IHN0cmluZywgaW1hZ2VzOiBzdHJpbmdbXSkgPT4ge1xuICBpZiAoIWltYWdlcyB8fCBpbWFnZXMubGVuZ3RoID09PSAwKSByZXR1cm4gJyc7XG5cbiAgcmV0dXJuIC8qIGh0bWwgKi8gYFxuICA8ZGl2IGNsYXNzPSdiLXByb3BlcnR5RmFkZXIgfCBjLWZyYW1lIGMtd2l0aExheWVyIHwgYy1mcmFtZS0tYXNwZWN0LTEtMSB8IHUtd2lkdGgtMTAwJz5cbiAgICA8ZGl2IGNsYXNzPSdjLWZyYW1lIGMtd3RpaC1sYXllcic+XG4gICAgICAke2ltYWdlRmFkZXJUZW1wbGF0ZShpbWFnZXMpfVxuICAgICAgPGRpdiBjbGFzcz0nYy1sYXllciB8IHUtYm94LWZsZXggdS1mbGV4LWp1c3RpZnktZW5kJz5cbiAgICAgICAgPGRpdiBjbGFzcz0nYi1wcm9wZXJ0eUZhZGVyX19mYWRlckNvbnRyb2xzIHwgYy1ib3ggfCB1LWJveC1mbGV4IHUtZmxleC1kaXItY29sdW1uIHUtZmxleC1qdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9J2ItZmF2b3JpdGVQcm9wZXJ0eVRvZ2dsZSBiLXN0YXInIGRhdGEtcHJvcGVydHktaWQ9JyR7cHJvcGVydHlJZH0nIGRhdGEtZmF2b3JpdGUtcHJvcGVydHktdG9nZ2xlPlxuICAgICAgICAgICAgJHtzcHJpdGVJY29uKCdzdGFyJyl9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nYi1waWxsIHwgYy13aXRoSWNvbiBjLWJveCc+XG4gICAgICAgICAgICAke3Nwcml0ZUljb24oJ2NhbWVyYScpfVxuICAgICAgICAgICAgPHA+JHtpbWFnZXMubGVuZ3RofTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIGA7XG59O1xuXG4vLyBSdW5zIGFmdGVyIGluc3RhbnRzZWFyY2ggVUkgaXMgY3JlYXRlZCBpdCBlbmFibGVzXG4vLyBmYXZvcml0ZSBhIHByb3BlcnR5IGJ1dHRvbiBmdW5jdGlvbmFsaXR5IGFuZFxuLy8gU2V0J3MgdGhlIGRlZmF1bHQgc3RhdGUgb2YgdGhlIGJ1dHRvblxuZXhwb3J0IGNvbnN0IGluaXRQcm9wZXJ0eUZhZGVyRmF2b3JpdGVzID0gKCkgPT4ge1xuICBjb25zdCBwcm9wZXJ0eUZhZGVyRmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJy5iLWZhdm9yaXRlUHJvcGVydHlUb2dnbGUnXG4gICk7XG5cbiAgaWYgKCFwcm9wZXJ0eUZhZGVyRmF2QnV0dG9ucy5sZW5ndGgpIHJldHVybjtcblxuICBpbml0RmF2b3JpdGVQcm9wZXJ0aWVzKCk7XG4gIGNvbnN0IHByb3BlcnR5TGlzdGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYi1wcm9wZXJ0eUxpc3RpbmcnKTtcbiAgcHJvcGVydHlMaXN0aW5ncy5mb3JFYWNoKChsaXN0aW5nKSA9PiB7XG4gICAgY29uc3QgZmF2QnV0dG9uID0gbGlzdGluZy5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ1tkYXRhLXByb3BlcnR5LWlkXSdcbiAgICApIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIGNvbnN0IHsgcHJvcGVydHlJZCB9ID0gZmF2QnV0dG9uLmRhdGFzZXQ7XG4gICAgaXNQcm9wZXJ0eUFGYXZvcml0ZShwcm9wZXJ0eUlkKS50aGVuKChpc0ZhdikgPT4ge1xuICAgICAgaWYgKGlzRmF2KSB7XG4gICAgICAgIGZhdkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdiLWZhdm9yaXRlUHJvcGVydHlUb2dnbGUtLWFjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCB1bm1vdW50UHJvcGVydHlGYWRlckZhdm9yaXRlcyA9ICgpID0+IHtcbiAgY29uc3QgcHJvcGVydHlGYWRlckZhdkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICcuYi1mYXZvcml0ZVByb3BlcnR5VG9nZ2xlJ1xuICApO1xuXG4gIGlmICghcHJvcGVydHlGYWRlckZhdkJ1dHRvbnMubGVuZ3RoKSByZXR1cm47XG5cbiAgLy8gY29uc3QgZmF2b3JpdGVGdW5jdGlvbiA9IFVTRVIuaXNMb2dnZWRJblxuICBjb25zdCB1c2VySXNMb2dnZWRJbiA9XG4gICAgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlckxvZ2luU3RhdHVzJykgPT09ICd0cnVlJyB8fCBmYWxzZTtcbiAgY29uc3QgZmF2b3JpdGVGdW5jdGlvbiA9IHVzZXJJc0xvZ2dlZEluID8gc2F2ZWRQcm9wZXJ0eUFzRmF2b3JpdGUgOiBvcGVuTW9kYWw7XG5cbiAgcHJvcGVydHlGYWRlckZhdkJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uRWw6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgYnV0dG9uRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmYXZvcml0ZUZ1bmN0aW9uKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgaW5pdFByb3BlcnR5RmFkZXJNdXRhdGlvbk9ic2VydmVyID0gKHRhcmdldEVsOiBzdHJpbmcpID0+IHtcbiAgLy8gTm90IHN1cmUgdGhhdCB0aGlzIGlzIGFjdHVhbGx5IHRoZSBiZXN0IHBsYWNlIHRvIGNoZWNrIG5vdy5cbiAgY29uc3QgY2FsbGJhY2sgPSAobXV0YXRpb25MaXN0OiBNdXRhdGlvblJlY29yZFtdKSA9PiB7XG4gICAgbXV0YXRpb25MaXN0LmZvckVhY2goKG11dGF0aW9uOiBNdXRhdGlvblJlY29yZCkgPT4ge1xuICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IG11dGF0aW9uO1xuICAgICAgY29uc3QgZWwgPSB0YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAvLyBUaGUgaW1hZ2UgZmFkZXIgbWlnaHQgY2hhbmdlXG4gICAgICBjb25zdCBpc0ZhZGVyQ2hhbmdlID0gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdiLWltYWdlRmFkZXInKTtcbiAgICAgIGlmICghaXNGYWRlckNoYW5nZSkge1xuICAgICAgICB1bm1vdW50SW1hZ2VGYWRlcnMoKTtcbiAgICAgICAgaW5pdEltYWdlRmFkZXIoKTtcbiAgICAgICAgdW5tb3VudFByb3BlcnR5RmFkZXJGYXZvcml0ZXMoKTtcbiAgICAgICAgaW5pdFByb3BlcnR5RmFkZXJGYXZvcml0ZXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB0YXJnZXROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRFbCk7XG5cbiAgaWYgKHRhcmdldE5vZGUpIHtcbiAgICBjb25zdCBjb25maWcgPSB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgY29uZmlnKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvcGVydHlGYWRlclRlbXBsYXRlO1xuIiwiaW1wb3J0IHsgTWVpbGlTZWFyY2gsIEluZGV4IH0gZnJvbSAnbWVpbGlzZWFyY2gnO1xuXG5pbnRlcmZhY2UgUHJvcGVydHlEb2N1bWVudCB7XG4gICAgcHJvcGVydHlGZWF0dXJlcz86IHN0cmluZ1tdO1xufVxuXG5jb25zdCBjbGllbnQgPSBuZXcgTWVpbGlTZWFyY2goe1xuICAgIGhvc3Q6IHByb2Nlc3MuZW52Lk1FSUxJX0ZST05URU5EX0hPU1QsXG4gICAgYXBpS2V5OiBwcm9jZXNzLmVudi5NRUlMSV9BUElfS0VZXG59KTtcblxuY29uc3QgaW5kZXg6IEluZGV4PFByb3BlcnR5RG9jdW1lbnQ+ID0gY2xpZW50LmluZGV4PFByb3BlcnR5RG9jdW1lbnQ+KCdodW50aW5nTGVhc2VOZXR3b3JrX2F1Y3Rpb25zJyk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVbmlxdWVQcm9wZXJ0eUZlYXR1cmVzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICB0cnkge1xuICAgICAgICAvLyBGZXRjaCBhbGwgZG9jdW1lbnRzLCBsaW1pdGluZyBmaWVsZHMgdG8gb25seSBgcHJvcGVydHlGZWF0dXJlc2BcbiAgICAgICAgY29uc3QgeyBoaXRzIH0gPSBhd2FpdCBpbmRleC5zZWFyY2goJycsIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNUb1JldHJpZXZlOiBbJ3Byb3BlcnR5RmVhdHVyZXMnXVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBVc2UgYSBTZXQgdG8gc3RvcmUgdW5pcXVlIGZlYXR1cmUgdmFsdWVzXG4gICAgICAgIGNvbnN0IGZlYXR1cmVzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoKTtcblxuICAgICAgICBoaXRzLmZvckVhY2goKGhpdCkgPT4ge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaGl0LnByb3BlcnR5RmVhdHVyZXMpKSB7XG4gICAgICAgICAgICAgICAgaGl0LnByb3BlcnR5RmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZSkgPT4gZmVhdHVyZXMuYWRkKGZlYXR1cmUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oZmVhdHVyZXMpLnNvcnQoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1bmlxdWUgcHJvcGVydHkgZmVhdHVyZXM6JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufSIsImltcG9ydCB7IGJ1dHRvblRlbXBsYXRlLCBzcHJpdGVJY29uLCBzdHlsZWRQcmljZVRlbXBsYXRlIH0gZnJvbSAnLi4vdGVtcGxhdGVzJztcbmltcG9ydCB7IHByb3BlcnR5RmFkZXJUZW1wbGF0ZSB9IGZyb20gJy4vUHJvcGVydHlGYWRlcic7XG5cbmludGVyZmFjZSBJUHJvcGVydHlMaXN0aW5nIHtcbiAgYXVjdGlvbk5hbWU6IHN0cmluZztcbiAgY291bnR5U3RhdGU6IHN0cmluZztcbiAgbGlzdGluZ0FnZW50OiBzdHJpbmc7XG4gIGxpc3RpbmdOdW1iZXI6IHN0cmluZztcbiAgcHJpY2U6IG51bWJlcjtcbiAgZm9ybWF0dGVkUHJpY2U6IHN0cmluZztcbiAgcHJpY2VQZXJBY3JlOiBudW1iZXI7XG4gIGZvcm1hdHRlZFByaWNlUGVyQWNyZTogc3RyaW5nO1xuICBwcm9wZXJ0eVBob3Rvczogc3RyaW5nW107XG4gIHByb3BlcnR5UGhvdG86IHN0cmluZztcbiAgcHJvcGVydHlTdGF0dXM6IHN0cmluZztcbiAgcHJvcGVydHlUeXBlczogc3RyaW5nW107XG4gIHByb3BlcnR5RmVhdHVyZXM6IHN0cmluZ1tdO1xuICBpZDogc3RyaW5nO1xuICBpc0F1Y3Rpb246IGJvb2xlYW47XG4gIGlzTXVsdGlUcmFjdDogYm9vbGVhbjtcbiAgZXllYnJvdzogc3RyaW5nO1xuICB0aW1lTGVmdDogbnVtYmVyO1xuICB0b3RhbEFjcmVzOiBudW1iZXI7XG4gIHVybDogc3RyaW5nO1xuICB1cmk6IHN0cmluZztcbiAgZGlzcGxheUxvY2F0aW9uOiBzdHJpbmc7XG4gIGF1Y3Rpb25UeXBlOiBzdHJpbmc7XG4gIGFjdHVhbFNvbGRQcmljZTogc3RyaW5nO1xuICBhdWN0aW9uRGF0ZVN0YXJ0OiBzdHJpbmc7XG4gIGF1Y3Rpb25EYXRlRW5kOiBzdHJpbmc7XG4gIHNvbGREYXRlOiBzdHJpbmc7XG59XG5cbi8vICNyZWdpb24gLSBQcm9wZXJ0eSBMaXN0aW5nIFBpZWNlc1xuY29uc3Qgc2FsZVR5cGVUZW1wbGF0ZSA9IChzYWxlVHlwZTogc3RyaW5nLCBjbGFzc05hbWU/OiBzdHJpbmcpID0+IHtcbiAgY29uc3QgY2xhc3Nlc0V4dGVuc2lvbiA9IGNsYXNzTmFtZSA/IGAgJHtjbGFzc05hbWV9YCA6ICcnO1xuICByZXR1cm4gLyogaHRtbCAqLyBgPHAgY2xhc3M9J2Itc2FsZVR5cGVUZXh0IHUtdHQtdXBwZXIgJHtjbGFzc2VzRXh0ZW5zaW9ufSc+JHtzYWxlVHlwZX08L3A+YDtcbn07XG5cbmV4cG9ydCBjb25zdCBsaXN0aW5nVGl0bGUgPSAodGV4dDogc3RyaW5nLCBjbGFzc05hbWU/OiBzdHJpbmcpID0+IHtcbiAgY29uc3QgY2xhc3Nlc0V4dGVuc2lvbiA9IGNsYXNzTmFtZSA/IGAgJHtjbGFzc05hbWV9YCA6ICcnO1xuICByZXR1cm4gLyogaHRtbCAqLyBgXG4gICAgPGgzIGNsYXNzPSdiLWxpc3RpbmdUaXRsZSB8IHUtdC1jb2xvci1jb3JlLXNlY29uZGFyeSB1LXRleHQtMiB1LXdlaWdodC1ib2xkIHUtZ2FwLXRvcC0wJHtjbGFzc2VzRXh0ZW5zaW9ufSc+JHt0ZXh0fTwvaDM+XG4gIGA7XG59O1xuXG5leHBvcnQgY29uc3QgYWNyZXNUZW1wbGF0ZSA9IChhY3JlczogbnVtYmVyKSA9PiB7XG4gIGlmICghYWNyZXMpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZXR1cm4gLyogaHRtbCAqLyBgXG4gIDxwPlxuICAgICR7YWNyZXMudG9Mb2NhbGVTdHJpbmcoKX0gPHNwYW4gY2xhc3M9J3UtY29sb3Itc2Vjb25kYXJ5LWJveC10ZXh0Jz4mIzE3Nzs8L3NwYW4+IEFjcmVzXG4gIDwvcD5cbiAgYDtcbn07XG5cbmNvbnN0IHN0eWxlZFRyYWN0VGVtcGxhdGUgPSAoaXNNdWx0aVRyYWN0OiBib29sZWFuLCBjbGFzc05hbWU/OiBzdHJpbmcpID0+IHtcbiAgY29uc3QgY2xhc3Nlc0V4dGVuc2lvbiA9IGNsYXNzTmFtZSA/IGAgJHtjbGFzc05hbWV9YCA6ICcnO1xuICByZXR1cm4gLyogaHRtbCAqLyBgXG4gIDxwIGNsYXNzPVwiYi1zdHlsZWRUcmFjdCB8IHUtd2VpZ2h0LWJvbGQgfCB1LWdhcC1yaWdodC0yMDAke2NsYXNzZXNFeHRlbnNpb259XCI+XG4gICAgJHtpc011bHRpVHJhY3QgPyAnTXVsdGktVHJhY3QnIDogJ1NpbmdsZSBUcmFjdCd9XG4gIDwvcD5cbiAgYDtcbn07XG5cbmNvbnN0IGFjcmVzVHJhY3RUZW1wbGF0ZSA9IChpc011bHRpVHJhY3Q6IGJvb2xlYW4sIGFjcmVzOiBudW1iZXIpID0+IHtcbiAgcmV0dXJuIC8qIGh0bWwgKi8gYFxuICA8cCBjbGFzcz1cImItc3R5bGVkVHJhY3QgfCB1LWdhcC1yaWdodC0yMDBcIj5cbiAgICA8c3BhbiBjbGFzcz1cInUtd2VpZ2h0LWJvbGQgdS1nYXAtcmlnaHQtMjAwXCI+JHtpc011bHRpVHJhY3QgPyAnTXVsdGktVHJhY3QnIDogJ1NpbmdsZSBUcmFjdCd9PC9zcGFuPlxuICAgICR7YWNyZXMudG9Mb2NhbGVTdHJpbmcoKX0gPHNwYW4gY2xhc3M9J3UtY29sb3Itc2Vjb25kYXJ5LWJveC10ZXh0Jz4mIzE3Nzs8L3NwYW4+IEFjcmVzXG4gIDwvcD5cbiAgYDtcbn07XG5cbmNvbnN0IHByaWNlT3JEYXRlVGVtcGxhdGU6IChcbiAgYXVjdGlvblR5cGU6IHN0cmluZyxcbiAgaXNBdWN0aW9uOiBib29sZWFuLFxuICBpc1BlbmRpbmc6IGJvb2xlYW4sXG4gIGlzU29sZDogYm9vbGVhbixcbiAgcHJpY2U6IHN0cmluZyxcbiAgYWN0dWFsU29sZFByaWNlOiBzdHJpbmcgfCBudWxsLFxuICBhdWN0aW9uRGF0ZVN0YXJ0OiBzdHJpbmcgfCBudWxsLFxuICBhdWN0aW9uRGF0ZUVuZDogc3RyaW5nIHwgbnVsbFxuKSA9PiBzdHJpbmcgPSAoXG4gIGF1Y3Rpb25UeXBlLFxuICBpc0F1Y3Rpb24sXG4gIGlzUGVuZGluZyxcbiAgaXNTb2xkLFxuICBwcmljZSxcbiAgYWN0dWFsU29sZFByaWNlID0gbnVsbCxcbiAgYXVjdGlvbkRhdGVTdGFydCA9IG51bGwsXG4gIGF1Y3Rpb25EYXRlRW5kID0gbnVsbFxuKSA9PiB7XG4gIC8vIEFjdGl2ZSBhdWN0aW9ucywgcmV0dXJuIGRhdGUgaW5zdGVhZCBvZiBwcmljZVxuICBpZiAoaXNBdWN0aW9uICYmICFpc1BlbmRpbmcgJiYgIWlzU29sZCkge1xuICAgIGNvbnN0IGljb24gPSBzcHJpdGVJY29uKFxuICAgICAgJ2NhbGVuZGFyJyxcbiAgICAgICd1LXQtY29sb3ItY29yZS1wcmltYXJ5LTUwMCB1LWdhcC1yaWdodC0xMDAgdS10ZXh0LTEnXG4gICAgKTtcblxuICAgIHN3aXRjaCAoYXVjdGlvblR5cGUpIHtcbiAgICAgIGNhc2UgJ0luLVBlcnNvbiBBdWN0aW9uJzpcbiAgICAgICAgcmV0dXJuIGAke2ljb259IDxzcGFuPiR7YXVjdGlvbkRhdGVTdGFydH08L3NwYW4+YDtcbiAgICAgIGNhc2UgJ09ubGluZSBBdWN0aW9uJzpcbiAgICAgIGNhc2UgJ1NpbXVsY2FzdCBBdWN0aW9uJzpcbiAgICAgICAgcmV0dXJuIGAke2ljb259IDxzcGFuPiR7YXVjdGlvbkRhdGVTdGFydH0gLSAke2F1Y3Rpb25EYXRlRW5kfTwvc3Bhbj5gO1xuICAgICAgY2FzZSAnRm9yIFNhbGUgYnkgQmlkJzpcbiAgICAgICAgcmV0dXJuIGAke2ljb259IDxzcGFuPkJpZHMgRHVlOiAke2F1Y3Rpb25EYXRlRW5kfTwvc3Bhbj5gO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGAke2ljb259IDxzcGFuPlRCRDwvc3Bhbj5gO1xuICAgIH1cbiAgfVxuXG4gIC8vIFByb3BlcnRpZXMgT1IgQXVjdGlvbnMgdGhhdCBhcmUgcGVuZGluZ3x8c29sZCwgQU5EIGhhdmUgYW4gYWN0dWFsU29sZFByaWNlXG4gIGlmIChpc0F1Y3Rpb24gJiYgKGlzUGVuZGluZyB8fCBpc1NvbGQpICYmIGFjdHVhbFNvbGRQcmljZSkge1xuICAgIHJldHVybiBzdHlsZWRQcmljZVRlbXBsYXRlKGFjdHVhbFNvbGRQcmljZSk7XG4gIH1cblxuICAvLyBQcm9wZXJ0aWVzIHRoYXQgYXJlIGFjdGl2ZSBzaG91bGQgc2hvdyBsaXN0aW5nIHByaWNlXG4gIGlmICghaXNBdWN0aW9uICYmICFpc1BlbmRpbmcgJiYgIWlzU29sZCkge1xuICAgIHJldHVybiBzdHlsZWRQcmljZVRlbXBsYXRlKHByaWNlKTtcbiAgfVxuXG4gIC8vIElmIHRoZSBhYm92ZSBjb25kaXRpb25hbHMgYXJlbid0IG1ldCwgZG9uJ3Qgc2hvdyBhbnl0aGluZy5cbiAgcmV0dXJuICcnO1xufTtcblxuY29uc3QgcGVyQWNyZVRlbXBsYXRlID0gKGZvcm1hdHRlZFByaWNlUGVyQWNyZTogc3RyaW5nKSA9PiB7XG4gIGlmIChcbiAgICAhZm9ybWF0dGVkUHJpY2VQZXJBY3JlIHx8XG4gICAgZm9ybWF0dGVkUHJpY2VQZXJBY3JlID09PSAnMCcgfHxcbiAgICBmb3JtYXR0ZWRQcmljZVBlckFjcmUgPT09ICd1bmRlZmluZWQnXG4gIClcbiAgICByZXR1cm4gJyc7XG5cbiAgcmV0dXJuIC8qIGh0bWwgKi8gYFxuICA8cCBjbGFzcz1cImItc3R5bGVkUHJpY2VcIj5cbiAgICBvciAkJHtmb3JtYXR0ZWRQcmljZVBlckFjcmV9L2FjcmVcbiAgPC9wPlxuICBgO1xufTtcblxuY29uc3QgcHJvcGVydHlTdGF0dXNUZW1wbGF0ZSA9IChwcm9wZXJ0eVN0YXR1czogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHByb3BlcnR5U3RhdHVzUGllY2VzID0gcHJvcGVydHlTdGF0dXMuc3BsaXQoJyAnKTtcbiAgY29uc3QgcHJvcGVydHlTdGF0dXNDbGFzc0V4dGVuc2lvbiA9IHByb3BlcnR5U3RhdHVzUGllY2VzLmpvaW4oJycpO1xuXG4gIHJldHVybiAvKiBodG1sICovIGBcbiAgPHAgY2xhc3M9J2ItcHJvcGVydHlTdGF0dXMgYi1wcm9wZXJ0eVN0YXR1cy0tJHtwcm9wZXJ0eVN0YXR1c0NsYXNzRXh0ZW5zaW9ufSB8IGV5ZWJyb3cgZXllYnJvdy0tY2xlYXIgdS10dC11cHBlciB1LXQtY29sb3ItbmV1dHJhbHMtcHJpbWFyeS01MDAgdS10ZXh0LTAnPiR7cHJvcGVydHlTdGF0dXN9PC9wPlxuICBgO1xufTtcblxuY29uc3QgcHJvcGVydHlUeXBlc1RlbXBsYXRlID0gKHR5cGVzOiBzdHJpbmdbXSkgPT4ge1xuICBpZiAoIXR5cGVzIHx8IHR5cGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGNvbnN0IHByb3BlcnR5VHlwZXMgPSB0eXBlc1xuICAgIC5tYXAoKHR5cGU6IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfSlcbiAgICAuam9pbignLCAnKTtcblxuICBjb25zdCBwcm9wZXJ0eVR5cGVzRGlzcGxheSA9IC8qIGh0bWwgKi8gYDxwIGNsYXNzPSdiLXByb3BlcnR5TGlzdGluZ19fdHlwZXMgfCB1LXQtY29sb3ItbmV1dHJhbHMtcHJpbWFyeS01MDAnPiR7cHJvcGVydHlUeXBlc308L3A+YDtcblxuICByZXR1cm4gcHJvcGVydHlUeXBlc0Rpc3BsYXk7XG59O1xuXG5jb25zdCBsaXN0aW5nQWdlbnRUZW1wbGF0ZSA9IChhZ2VudE5hbWU6IHN0cmluZykgPT4ge1xuICByZXR1cm4gLyogaHRtbCAqLyBgXG4gIDxkaXYgY2xhc3M9J2ItcHJvcGVydHlMaXN0aW5nX19hZ2VudHMnPlxuICAgIDxoNSBjbGFzcz0ndS10dC11cHBlcic+bGlzdGluZyBhZ2VudChzKTwvaDU+XG4gICAgPHAgY2xhc3M9J3UtdC1jb2xvci1jb3JlLXNlY29uZGFyeSc+JHthZ2VudE5hbWV9PC9wPlxuICA8L2Rpdj5gO1xufTtcblxuZXhwb3J0IGNvbnN0IGNoZWNrUHJvcGVydHlQaG90b3MgPSAocHJvcGVydHlQaG90b3M6IHN0cmluZ1tdKSA9PiB7XG4gIHJldHVybiAhcHJvcGVydHlQaG90b3MgfHwgcHJvcGVydHlQaG90b3MubGVuZ3RoID09PSAwXG4gICAgPyBbJy9kaXN0L2ltZy9yZS1wcm9maWxlLWRlZmF1bHQucG5nJ11cbiAgICA6IHByb3BlcnR5UGhvdG9zO1xufTtcblxuY29uc3QgbG9jYXRpb25UZW1wbGF0ZSA9IChsb2NhdGlvbjogc3RyaW5nLCBjbGFzc05hbWU/OiBzdHJpbmcpID0+IHtcbiAgY29uc3QgY2xhc3Nlc0V4dGVuc2lvbiA9IGNsYXNzTmFtZSA/IGAgJHtjbGFzc05hbWV9YCA6ICcnO1xuICByZXR1cm4gbG9jYXRpb24gPT09ICcnIHx8IGxvY2F0aW9uID09PSAnTi9BJ1xuICAgID8gJydcbiAgICA6IC8qIGh0bWwgKi8gYDxwIGNsYXNzPScke2NsYXNzZXNFeHRlbnNpb259Jz4ke2xvY2F0aW9ufTwvcD5gO1xufTtcbi8vICNlbmRyZWdpb24gLSBQcm9wZXJ0eSBMaXN0aW5nIFBpZWNlc1xuXG5jb25zdCBwcm9wZXJ0eUxpc3RpbmdIYWxmQ2FyZDogKGRhdGE6IElQcm9wZXJ0eUxpc3RpbmcpID0+IHN0cmluZyA9ICh7XG4gIGxpc3RpbmdOdW1iZXIsXG4gIHByb3BlcnR5UGhvdG9zLFxuICBmb3JtYXR0ZWRQcmljZSxcbiAgcHJvcGVydHlTdGF0dXMsXG4gIGlkLFxuICBpc0F1Y3Rpb24sXG4gIGlzTXVsdGlUcmFjdCxcbiAgZXllYnJvdyxcbiAgdG90YWxBY3JlcyxcbiAgdXJsLFxuICBkaXNwbGF5TG9jYXRpb24sXG4gIGFjdHVhbFNvbGRQcmljZSxcbiAgYXVjdGlvblR5cGUsXG4gIGF1Y3Rpb25EYXRlU3RhcnQsXG4gIGF1Y3Rpb25EYXRlRW5kXG59KSA9PiB7XG4gIGNvbnN0IHBob3RvcyA9IGNoZWNrUHJvcGVydHlQaG90b3MocHJvcGVydHlQaG90b3MpO1xuICBjb25zdCBpc1NvbGQgPSBwcm9wZXJ0eVN0YXR1cy50b0xvd2VyQ2FzZSgpID09PSAnc29sZCc7XG4gIGNvbnN0IGlzUGVuZGluZyA9IHByb3BlcnR5U3RhdHVzLnRvTG93ZXJDYXNlKCkgPT09ICdwZW5kaW5nJztcblxuICByZXR1cm4gLyogaHRtbCAqLyBgXG4gIDxhIGNsYXNzPSdiLXByb3BlcnR5TGlzdGluZyBiLWFuY2hvckNvbXBsZXggfCBjLWNsdXN0ZXIgfCBtZDp1LWhvdmVyVGFyZ2V0LXNoaWZ0IHUtcHJvcGVydHlGYWRlckhvdmVyJyB0YWJpbmRleD0nMCcgaHJlZj0nJHt1cmx9Jz5cbiAgICAke3Byb3BlcnR5RmFkZXJUZW1wbGF0ZShpZCwgcGhvdG9zKX1cbiAgICA8ZGl2IGNsYXNzPSdiLXByb3BlcnR5TGlzdGluZ19fY29udGVudCB8IG1kOnUtaG92ZXJFZmZlY3Qtc2hpZnQnPlxuICAgICAgJHtzYWxlVHlwZVRlbXBsYXRlKGV5ZWJyb3cpfVxuICAgICAgJHtsaXN0aW5nVGl0bGUobGlzdGluZ051bWJlcil9XG5cbiAgICAgIDxkaXYgY2xhc3M9J2MtcmVwZWwnPlxuICAgICAgICAke2xvY2F0aW9uVGVtcGxhdGUoZGlzcGxheUxvY2F0aW9uKX1cbiAgICAgICAgJHtwcmljZU9yRGF0ZVRlbXBsYXRlKFxuICAgICAgICAgIGF1Y3Rpb25UeXBlLFxuICAgICAgICAgIGlzQXVjdGlvbixcbiAgICAgICAgICBpc1BlbmRpbmcsXG4gICAgICAgICAgaXNTb2xkLFxuICAgICAgICAgIGZvcm1hdHRlZFByaWNlLFxuICAgICAgICAgIGFjdHVhbFNvbGRQcmljZSxcbiAgICAgICAgICBhdWN0aW9uRGF0ZVN0YXJ0LFxuICAgICAgICAgIGF1Y3Rpb25EYXRlRW5kXG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9J2MtcmVwZWwgfCB1LWZsZXgtYWxpZ24tZW5kJz5cbiAgICAgICAgPGRpdiBjbGFzcz0ndS1ib3gtZmxleCc+XG4gICAgICAgICAgJHtzdHlsZWRUcmFjdFRlbXBsYXRlKGlzTXVsdGlUcmFjdCl9XG4gICAgICAgICAgJHthY3Jlc1RlbXBsYXRlKHRvdGFsQWNyZXMpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInUtYm94LWZsZXggdS1mbGV4LWRpci1jb2x1bW5cIj5cbiAgICAgICAgICAke1xuICAgICAgICAgICAgaXNBdWN0aW9uICYmIGZvcm1hdHRlZFByaWNlICE9PSAnMCcgJiYgKGlzU29sZCB8fCBpc1BlbmRpbmcpXG4gICAgICAgICAgICAgID8gYDxkaXYgY2xhc3M9XCJ1LXRleHQtMFwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInUtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICQke2Zvcm1hdHRlZFByaWNlfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICAgICAgICA6IGBgXG4gICAgICAgICAgfVxuICAgICAgICAgICR7cHJvcGVydHlTdGF0dXNUZW1wbGF0ZShwcm9wZXJ0eVN0YXR1cyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvYT5cbiAgYDtcbn07XG5cbmNvbnN0IHByb3BlcnR5TGlzdGluZ0Z1bGxDYXJkOiAoZGF0YTogSVByb3BlcnR5TGlzdGluZykgPT4gc3RyaW5nID0gKHtcbiAgZm9ybWF0dGVkUHJpY2UsXG4gIGxpc3RpbmdBZ2VudCxcbiAgbGlzdGluZ051bWJlcixcbiAgcHJvcGVydHlQaG90b3MsXG4gIHByaWNlUGVyQWNyZSxcbiAgcHJvcGVydHlTdGF0dXMsXG4gIHByb3BlcnR5VHlwZXMsXG4gIGlkLFxuICBpc011bHRpVHJhY3QsXG4gIGV5ZWJyb3csXG4gIHRvdGFsQWNyZXMsXG4gIGRpc3BsYXlMb2NhdGlvbixcbiAgdXJsLFxuICBpc0F1Y3Rpb24sXG4gIGF1Y3Rpb25UeXBlLFxuICBhY3R1YWxTb2xkUHJpY2UsXG4gIGF1Y3Rpb25EYXRlU3RhcnQsXG4gIGF1Y3Rpb25EYXRlRW5kXG59KSA9PiB7XG4gIGNvbnN0IHBob3RvcyA9IGNoZWNrUHJvcGVydHlQaG90b3MocHJvcGVydHlQaG90b3MpO1xuICBjb25zdCBpc1NvbGQgPSBwcm9wZXJ0eVN0YXR1cy50b0xvd2VyQ2FzZSgpID09PSAnc29sZCc7XG4gIGNvbnN0IGlzUGVuZGluZyA9IHByb3BlcnR5U3RhdHVzLnRvTG93ZXJDYXNlKCkgPT09ICdwZW5kaW5nJztcbiAgY29uc3QgYnV0dG9uVGhlbWUgPVxuICAgIGRvY3VtZW50LmJvZHkuZ2V0QXR0cmlidXRlKCdkYXRhLWhhbmRsZScpID09PSAnaHVudGluZ0xlYXNlTmV0d29yaydcbiAgICAgID8gJ3NlY29uZGFyeSdcbiAgICAgIDogJ3ByaW1hcnknO1xuXG4gIHJldHVybiAvKiBodG1sICovIGBcbiAgPGRpdiBjbGFzcz0nYi1wcm9wZXJ0eUxpc3RpbmcgYi1wcm9wZXJ0eUxpc3RpbmctLWZ1bGwgdS1wcm9wZXJ0eUZhZGVySG92ZXIgfCBjLWNsdXN0ZXInPlxuICAgIDxhIGhyZWY9XCIke3VybH1cIj5cbiAgICAgICR7cHJvcGVydHlGYWRlclRlbXBsYXRlKGlkLCBwaG90b3MpfVxuICAgIDwvYT5cblxuICAgIDxkaXYgY2xhc3M9J2ItcHJvcGVydHlMaXN0aW5nX19pbmZvJz5cbiAgICAgICR7c2FsZVR5cGVUZW1wbGF0ZShleWVicm93LCAnYi1wcm9wZXJ0eUxpc3RpbmdfX2luZm9fX3R5cGUgdS1zaGlmdEhvdmVyJyl9XG4gICAgICA8YSBocmVmPVwiJHt1cmx9XCIgY2xhc3M9J2ItcHJvcGVydHlMaXN0aW5nX19wcmljZU9yRGF0ZSB8IHUtdGV4dC1iYXNlIHUtd2VpZ2h0LWJvbGQnPlxuICAgICAgICAke3ByaWNlT3JEYXRlVGVtcGxhdGUoXG4gICAgICAgICAgYXVjdGlvblR5cGUsXG4gICAgICAgICAgaXNBdWN0aW9uLFxuICAgICAgICAgIGlzUGVuZGluZyxcbiAgICAgICAgICBpc1NvbGQsXG4gICAgICAgICAgZm9ybWF0dGVkUHJpY2UsXG4gICAgICAgICAgYWN0dWFsU29sZFByaWNlLFxuICAgICAgICAgIGF1Y3Rpb25EYXRlU3RhcnQsXG4gICAgICAgICAgYXVjdGlvbkRhdGVFbmRcbiAgICAgICAgKX1cbiAgICAgIDwvYT5cblxuICAgICAgPGRpdiBjbGFzcz0nYi1wcm9wZXJ0eUxpc3RpbmdfX2luZm9fX2NvbnRlbnQnPlxuICAgICAgICA8ZGl2IGNsYXNzPSd1LXRleHQtMDAnPlxuICAgICAgICAgICR7bG9jYXRpb25UZW1wbGF0ZShkaXNwbGF5TG9jYXRpb24pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGEgaHJlZj1cIiR7dXJsfVwiIGNsYXNzPSd1LXRleHQtMDAnPlxuICAgICAgICAgICR7bGlzdGluZ1RpdGxlKGxpc3RpbmdOdW1iZXIpfVxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz0nYi1wcm9wZXJ0eUxpc3RpbmdfX2luZm9fX2NvbnRlbnQnPlxuICAgICAgICA8ZGl2IGNsYXNzPSd1LXRleHQtMDAnPlxuICAgICAgICAgICR7YWNyZXNUcmFjdFRlbXBsYXRlKGlzTXVsdGlUcmFjdCwgdG90YWxBY3Jlcyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YSBocmVmPVwiJHt1cmx9XCIgY2xhc3M9J3UtdGV4dC0wMCc+XG4gICAgICAgICAgJHtwcm9wZXJ0eVN0YXR1c1RlbXBsYXRlKHByb3BlcnR5U3RhdHVzKX1cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPSdiLXByb3BlcnR5TGlzdGluZ19faW5mbyBiLXByb3BlcnR5TGlzdGluZ19faW5mby0tZGVza3RvcCB8IGMtZmxvdyB8IHUtZmxvdy1zcGFjZS0yMDAnPlxuICAgICAgPGRpdiBjbGFzcz0nYy1mbG93IHwgdS1mbG93LXNwYWNlLTEwMCc+XG4gICAgICAgICR7c2FsZVR5cGVUZW1wbGF0ZShcbiAgICAgICAgICBleWVicm93LFxuICAgICAgICAgICd1LXNoaWZ0SG92ZXIgYi1wcm9wZXJ0eUxpc3RpbmdfX2luZm9fX3R5cGUnXG4gICAgICAgICl9XG4gICAgICAgIDxhIGhyZWY9XCIke3VybH1cIj4ke2xpc3RpbmdUaXRsZShsaXN0aW5nTnVtYmVyKX08L2E+XG4gICAgICAgICR7bG9jYXRpb25UZW1wbGF0ZShkaXNwbGF5TG9jYXRpb24pfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9J3UtYm94LWZsZXgnPlxuICAgICAgICAke3N0eWxlZFRyYWN0VGVtcGxhdGUoaXNNdWx0aVRyYWN0KX1cbiAgICAgICAgJHthY3Jlc1RlbXBsYXRlKHRvdGFsQWNyZXMpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgICR7cHJvcGVydHlTdGF0dXNUZW1wbGF0ZShwcm9wZXJ0eVN0YXR1cyl9XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPSdiLXByb3BlcnR5TGlzdGluZ19fYWRkaXRpb25hbEluZm8gfCBjLWZsb3cnPlxuICAgICAgJHtsaXN0aW5nQWdlbnRUZW1wbGF0ZShsaXN0aW5nQWdlbnQpfVxuICAgICAgJHtwcm9wZXJ0eVR5cGVzVGVtcGxhdGUocHJvcGVydHlUeXBlcyl9XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPSdiLXByb3BlcnR5TGlzdGluZ19fYWN0aW9uIHwgYy1mbG93IHUtZmxleC1qdXN0aWZ5LWFyb3VuZCB1LWZsZXgtYWxpZ24tc3RhcnQgfCBzbTp1LWZsZXgtYWxpZ24tZW5kJz5cbiAgICAgIDxkaXYgY2xhc3M9J2ItcHJvcGVydHlMaXN0aW5nX19wcmljZU9yRGF0ZSB8IHUtdGEtcmlnaHQgdS13ZWlnaHQtYm9sZCB1LXRleHQtMCB1LWJveC1mbGV4IHUtZmxleC1hbGlnbi1jZW50ZXIgdS1mbGV4LWp1c3RpZnktYmV0d2Vlbic+XG4gICAgICAgICR7cHJpY2VPckRhdGVUZW1wbGF0ZShcbiAgICAgICAgICBhdWN0aW9uVHlwZSxcbiAgICAgICAgICBpc0F1Y3Rpb24sXG4gICAgICAgICAgaXNQZW5kaW5nLFxuICAgICAgICAgIGlzU29sZCxcbiAgICAgICAgICBmb3JtYXR0ZWRQcmljZSxcbiAgICAgICAgICBhY3R1YWxTb2xkUHJpY2UsXG4gICAgICAgICAgYXVjdGlvbkRhdGVTdGFydCxcbiAgICAgICAgICBhdWN0aW9uRGF0ZUVuZFxuICAgICAgICApfVxuICAgICAgICAke3BlckFjcmVUZW1wbGF0ZShgJHtwcmljZVBlckFjcmV9YCl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgJHtidXR0b25UZW1wbGF0ZSh7XG4gICAgICAgIGNsYXNzTmFtZTogYGItYnV0dG9uIGItYW5jaG9yQ29tcGxleCBiLWJ1dHRvbi0tJHtidXR0b25UaGVtZX0gYi1idXR0b24tLXdpdGgtaWNvbiB8IGMtd2l0aEljb25gLFxuICAgICAgICBjb250ZW50OiAnU2VlIERldGFpbHMnLFxuICAgICAgICBocmVmOiB1cmwsXG4gICAgICAgIGljb25OYW1lOiAnYXJyb3ctcmlnaHQnXG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIGA7XG59O1xuXG5jb25zdCBwcm9wZXJ0eUxpc3RpbmdDYXJkSGxuOiAoZGF0YTogSVByb3BlcnR5TGlzdGluZykgPT4gc3RyaW5nID0gKHtcbiAgYXVjdGlvbk5hbWUsXG4gIGZvcm1hdHRlZFByaWNlLFxuICB0b3RhbEFjcmVzLFxuICBjb3VudHlTdGF0ZSxcbiAgbGlzdGluZ0FnZW50LFxuICBwcm9wZXJ0eVN0YXR1cyxcbiAgcHJvcGVydHlQaG90byxcbiAgdXJpXG59KSA9PiB7XG4gIGNvbnN0IGlzRGlzYWJsZWQgPSBbJ2xlYXNlZCcsICdwZW5kaW5nJ10uaW5jbHVkZXMocHJvcGVydHlTdGF0dXMpO1xuICBjb25zdCBwcmljZU9yTm90aWNlID0gaXNEaXNhYmxlZFxuICAgID8gJ1Byb3BlcnR5IExlYXNlZCB8IFVuYWJsZSB0byBWaWV3J1xuICAgIDogYDxzcGFuPlN0YXJ0aW5nIEJpZDo8L3NwYW4+ICR7Zm9ybWF0dGVkUHJpY2V9YDtcbiAgY29uc3QgbGlua09wZW4gPSBpc0Rpc2FibGVkID8gJycgOiAnPGEgaHJlZj1cIicgKyB1cmkgKyAnXCI+JztcbiAgY29uc3QgbGlua0Nsb3NlID0gaXNEaXNhYmxlZCA/ICcnIDogJzwvYT4nO1xuICBjb25zdCBjYXJkQ29udGVudCA9IC8qIGh0bWwgKi8gYFxuICAgIDxhcnRpY2xlIGNsYXNzPVwiaGxuLWNhcmQgJHtwcm9wZXJ0eVN0YXR1c31cIj5cbiAgICAke2xpbmtPcGVufVxuICAgICAgPGRpdiBjbGFzcz1cImhsbi1jYXJkX19pbWFnZVwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTp1cmwoJyR7cHJvcGVydHlQaG90b30nKVwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImhsbi1jYXJkX190ZXh0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJobG4tY2FyZF9faGVhZGluZ1wiPiR7cHJpY2VPck5vdGljZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhsbi1jYXJkX19kZXRhaWxzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhsbi1jYXJkX19zZWNvbmRhcnlcIj4ke2F1Y3Rpb25OYW1lfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJobG4tY2FyZF9fY291bnR5XCI+JHtjb3VudHlTdGF0ZX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJobG4tY2FyZF9fZGV0YWlsc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJobG4tY2FyZF9fYWdlbnRcIj4ke2xpc3RpbmdBZ2VudH08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGxuLWNhcmRfX2FjcmVzXCI+JHt0b3RhbEFjcmVzfSBBY3JlczwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImhsbi1jYXJkX19zdGF0dXMgJHtwcm9wZXJ0eVN0YXR1c31cIj4ke3Byb3BlcnR5U3RhdHVzfTwvZGl2PlxuICAgICR7bGlua0Nsb3NlfVxuICAgIDwvYXJ0aWNsZT5cbiAgYDtcblxuICByZXR1cm4gY2FyZENvbnRlbnQ7XG59O1xuXG5jb25zdCBwcm9wZXJ0eUxpc3RpbmdOb1Jlc3VsdHMgPSAoKSA9PiB7XG4gIHJldHVybiBgXG4gICAgPGRpdiBjbGFzcz0nYi1wcm9wZXJ0eUxpc3RpbmcgfCBjLWNsdXN0ZXInPlxuICAgICAgPGgyPk5vIFJlc3VsdHMgRm91bmQ8L2gyPlxuICAgIDwvZGl2PlxuICBgO1xufTtcblxuY29uc3QgcHJvcGVydHlUYWJsZVJvdzogKFxuICBkYXRhOiBJUHJvcGVydHlMaXN0aW5nLFxuICBoaXRQb3NpdGlvbjogbnVtYmVyXG4pID0+IHN0cmluZyA9IChcbiAge1xuICAgIGNvdW50eVN0YXRlLFxuICAgIGxpc3RpbmdBZ2VudCxcbiAgICBwcm9wZXJ0eVN0YXR1cyxcbiAgICBsaXN0aW5nTnVtYmVyLFxuICAgIHRvdGFsQWNyZXMsXG4gICAgZm9ybWF0dGVkUHJpY2UsXG4gICAgc29sZERhdGUsXG4gICAgdXJsXG4gIH0sXG4gIGhpdFBvc2l0aW9uXG4pID0+IHtcbiAgY29uc3QgW2NvdW50eSwgc3RhdGVdID0gY291bnR5U3RhdGUuc3BsaXQoJywnKTtcbiAgY29uc3QgaGlkZGVuRGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICBzb2xkRGF0ZSxcbiAgICBzdGF0dXM6IHByb3BlcnR5U3RhdHVzLFxuICAgIGxpc3RpbmdJZDogbGlzdGluZ051bWJlci5zcGxpdCgnICcpLmpvaW4oJyZuYnNwOycpLFxuICAgIGNvdW50eTogY291bnR5LnNwbGl0KCcgJykuam9pbignJm5ic3A7JyksXG4gICAgdXJsXG4gIH0pO1xuXG4gIGNvbnN0IGxpc3RpbmdBZ2VudHMgPSBsaXN0aW5nQWdlbnQuc3BsaXQoJywgJykuam9pbignPGJyPicpO1xuXG4gIHJldHVybiBgXG4gIDx0ciBjbGFzcz1cIiR7XG4gICAgaGl0UG9zaXRpb24gJSAyID8gJ2V2ZW4nIDogJ29kZCdcbiAgfVwiIGRhdGEtZGV0YWlscz0ke2hpZGRlbkRhdGF9IGRhdGEtY29sc3Bhbj1cIjVcIj5cbiAgICA8dGQgY2xhc3M9XCJjLWJveFwiPjxhIGhyZWY9XCIke3VybH1cIj4ke2xpc3RpbmdOdW1iZXJ9PC9hPjwvdGQ+XG4gICAgPHRkIGNsYXNzPVwiYy1ib3hcIj4ke2NvdW50eX08L3RkPlxuICAgIDx0ZCBjbGFzcz1cImMtYm94XCI+JHtzdGF0ZX08L3RkPlxuICAgIDx0ZCBjbGFzcz1cImMtYm94XCI+JHtjb3VudHl9PC90ZD5cbiAgICA8dGQgY2xhc3M9XCJjLWJveFwiPiR7bGlzdGluZ0FnZW50c308L3RkPlxuICAgIDx0ZCBjbGFzcz1cImMtYm94XCI+JHt0b3RhbEFjcmVzLnRvTG9jYWxlU3RyaW5nKCl9PC90ZD5cbiAgICA8dGQgY2xhc3M9XCJjLWJveFwiPiQke2Zvcm1hdHRlZFByaWNlfTwvdGQ+XG4gICAgPHRkIGNsYXNzPVwiYy1ib3hcIj48c3BhbiBjbGFzcz1cImItcHJvcGVydHlTdGF0dXMgYi1wcm9wZXJ0eVN0YXR1cy0tJHtwcm9wZXJ0eVN0YXR1c31cIj4ke3Byb3BlcnR5U3RhdHVzfTwvc3Bhbj48L3RkPlxuICAgIDx0ZCBjbGFzcz1cImMtYm94XCI+JHtzb2xkRGF0ZX08L3RkPlxuICAgIDx0ZD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImItY29sbGFwc2VCdXR0b25cIj5cbiAgICAgICAgICA8c3ZnIGNsYXNzPVwiYi1pY29uIGItY29sbGFwc2VCdXR0b25fX2NhcmV0XCI+PHVzZSBocmVmPVwiL3N2Zy9zcHJpdGUuc3ZnI2NhcmV0LWRvd25cIj48L3VzZT48L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC90ZD5cbiAgPC90cj5cbiAgYDtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQge1xuICBwcm9wZXJ0eUxpc3RpbmdIYWxmQ2FyZCxcbiAgcHJvcGVydHlMaXN0aW5nRnVsbENhcmQsXG4gIHByb3BlcnR5TGlzdGluZ0NhcmRIbG4sXG4gIHByb3BlcnR5TGlzdGluZ05vUmVzdWx0cyxcbiAgcHJvcGVydHlUYWJsZVJvdyxcbiAgSVByb3BlcnR5TGlzdGluZ1xufTtcbiIsIi8qIFN0YXRzVGVtcGxhdGVcbiAgRG9jdW1lbnRhdGlvblxuICBAc2VlIGh0dHBzOi8vd3d3LmFsZ29saWEuY29tL2RvYy9hcGktcmVmZXJlbmNlL3dpZGdldHMvc3RhdHMvanMvXG5cbiAgRGV2IE5vdGVzIChTZWFuKTpcbiAgSSBsaWtlIHRoZSBzdHJ1Y3R1cmUgb2YgdGhpcyBtb3JlIHRoYW4gd2hhdCdzIGdvaW5nIG9uIHdpdGggdGhlIGhpdHMgdGVtcGxhdGVzLlxuICBNYXkgYmUgYSBnb29kIGlkZWEgdG8gcHVsbCB0aG9zZSBvdXQgYW5kIGhhdmVcbiAgYSBoaWdob3JkZXIgZnVuY3Rpb24gaW4gaXQncyBvd24gZmlsZVxuKi9cblxuaW1wb3J0IHsgZ2V0U2l0ZUhhbmRsZSB9IGZyb20gJy4uLy4uL3V0aWxzL0dldFNpdGVIYW5kbGUnO1xuXG4vLyBUZW1wbGF0ZXNcbmV4cG9ydCBjb25zdCBkZWZhdWx0U3RhdHNUZW1wbGF0ZSA9IChkYXRhOiBhbnkpID0+IHtcbiAgbGV0IGNvdW50ID0gJyc7XG5cbiAgaWYgKGRhdGEuaGFzTWFueVJlc3VsdHMpIHtcbiAgICBjb3VudCArPSBgJHtkYXRhLm5iSGl0c30gcmVzdWx0cyBtYXRjaGVkIHlvdXIgc2VhcmNoYDtcbiAgfSBlbHNlIGlmIChkYXRhLmhhc09uZVJlc3VsdCkge1xuICAgIGNvdW50ICs9ICcxIHJlc3VsdCc7XG4gIH0gZWxzZSB7XG4gICAgY291bnQgKz0gJ05vIHJlc3VsdHMgZm91bmQnO1xuICB9XG5cbiAgcmV0dXJuIGNvdW50O1xufTtcblxuZXhwb3J0IGNvbnN0IGhsblN0YXRzVGVtcGxhdGUgPSAoZGF0YTogYW55KSA9PiB7XG4gIGxldCBjb3VudCA9ICcnO1xuXG4gIGlmIChkYXRhLmhhc01hbnlSZXN1bHRzKSB7XG4gICAgY291bnQgKz0gYCR7ZGF0YS5uYkhpdHN9IHJlc3VsdHNgO1xuICB9IGVsc2UgaWYgKGRhdGEuaGFzT25lUmVzdWx0KSB7XG4gICAgY291bnQgKz0gJzEgcmVzdWx0JztcbiAgfVxuXG4gIHJldHVybiBjb3VudDtcbn07XG5cbnR5cGUgVEdldE5hbWUgPSAoaGFuZGxlOiBzdHJpbmcsIGlzTXVsdGlwbGU/OiBib29sZWFuKSA9PiBzdHJpbmc7XG5leHBvcnQgY29uc3QgZ2V0TmFtZTogVEdldE5hbWUgPSAoaGFuZGxlID0gJycsIGlzTXVsdGlwbGUgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBzID0gaXNNdWx0aXBsZSA/ICdzJyA6ICcnO1xuICBzd2l0Y2ggKGhhbmRsZSkge1xuICAgIGNhc2UgJ2ZuY0FwcHJhaXNhbCc6XG4gICAgICByZXR1cm4gYGFwcHJhaXNlciR7c31gO1xuICAgIGNhc2UgJ2h1bnRpbmdMZWFzZU5ldHdvcmsnOlxuICAgICAgcmV0dXJuIGByZXAke3N9YDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGBhZ2VudCR7c31gO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgYWdlbnRzU3RhdHNUZW1wbGF0ZSA9IChkYXRhOiBhbnkpID0+IHtcbiAgY29uc3Qgc2l0ZUhhbmRsZSA9IGdldFNpdGVIYW5kbGUoKTtcblxuICBpZiAoZGF0YS5oYXNNYW55UmVzdWx0cykge1xuICAgIGNvbnN0IGNvbG9yID1cbiAgICAgIHNpdGVIYW5kbGUgPT09ICdodW50aW5nTGVhc2VOZXR3b3JrJyA/ICd0ZXJ0aWFyeS01MDAnIDogJ3ByaW1hcnktNTAwJztcbiAgICByZXR1cm4gYFNob3dpbmcgPHNwYW4gY2xhc3M9J3Utd2VpZ2h0LWJvbGQgdS10LWNvbG9yLWNvcmUtJHtjb2xvcn0nPiR7XG4gICAgICBkYXRhLm5iSGl0c1xuICAgIH08L3NwYW4+ICR7Z2V0TmFtZShzaXRlSGFuZGxlLCB0cnVlKX0gbmVhciB5b3VgO1xuICB9XG4gIGlmIChkYXRhLmhhc09uZVJlc3VsdCkge1xuICAgIHJldHVybiBgRm91bmQgYW4gJHtnZXROYW1lKHNpdGVIYW5kbGUsIGZhbHNlKX0gbmVhciB5b3VgO1xuICB9XG4gIHJldHVybiBgU29ycnkgd2UgY291bGRuJ3QgZmluZCBhbiAke2dldE5hbWUoc2l0ZUhhbmRsZSwgdHJ1ZSl9IG5lYXIgeW91LmA7XG59O1xuXG5leHBvcnQgY29uc3QgbnVtU2hvd2luZ1RlbXBsYXRlID0gKGRhdGE6IGFueSkgPT4ge1xuICBjb25zdCB7IGhpdHNQZXJQYWdlLCBuYkhpdHMsIG5iUGFnZXMsIHBhZ2UgfSA9IGRhdGE7XG4gIGlmIChuYkhpdHMgPD0gaGl0c1BlclBhZ2UpIHtcbiAgICByZXR1cm4gYFNob3dpbmcgYWxsICR7ZGF0YS5uYkhpdHN9IHN0b3JpZXNgO1xuICB9XG4gIGNvbnN0IGxhc3RQYWdlID0gcGFnZSArIDEgPT09IG5iUGFnZXM7XG4gIGlmIChsYXN0UGFnZSkge1xuICAgIGNvbnN0IG51bVJlbWFpbmluZyA9IG5iSGl0cyAtIChuYlBhZ2VzIC0gMSkgKiBoaXRzUGVyUGFnZTtcblxuICAgIHJldHVybiBgU2hvd2luZyAoJHtudW1SZW1haW5pbmd9KSBvZiAke25iSGl0c30gc3Rvcmllc2A7XG4gIH1cbiAgcmV0dXJuIGBTaG93aW5nICgke2hpdHNQZXJQYWdlfSkgb2YgJHtuYkhpdHN9IHN0b3JpZXNgO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRzVGVtcGxhdGUgPSAodGVtcGxhdGVOYW1lOiBzdHJpbmcsIGRhdGE6IGFueSkgPT4ge1xuICBzd2l0Y2ggKHRlbXBsYXRlTmFtZSkge1xuICAgIGNhc2UgJ2FnZW50JzpcbiAgICAgIHJldHVybiBhZ2VudHNTdGF0c1RlbXBsYXRlKGRhdGEpO1xuICAgIGNhc2UgJ251bVNob3dpbmcnOlxuICAgICAgcmV0dXJuIG51bVNob3dpbmdUZW1wbGF0ZShkYXRhKTtcbiAgICBjYXNlICdobG4nOlxuICAgICAgcmV0dXJuIGhsblN0YXRzVGVtcGxhdGUoZGF0YSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkZWZhdWx0U3RhdHNUZW1wbGF0ZShkYXRhKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0U3RhdHNUZW1wbGF0ZTtcbiIsImV4cG9ydCAqIGZyb20gJy4vQWdlbnRMaXN0aW5nVGVtcGxhdGUnO1xuZXhwb3J0ICogZnJvbSAnLi9BcnRpY2xlQ2FyZFRlbXBsYXRlJztcbmV4cG9ydCAqIGZyb20gJy4vQ3VzdG9tUGFnaW5hdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL0N1c3RvbVNvcnRCeSc7XG5leHBvcnQgKiBmcm9tICcuL0xpc3RpbmdzRHJvcGRvd24nO1xuZXhwb3J0ICogZnJvbSAnLi9NYXBVSSc7XG5leHBvcnQgKiBmcm9tICcuL1Byb3BlcnR5RmFkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9Qcm9wZXJ0eUxpc3RpbmdUZW1wbGF0ZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9TdGF0c1RlbXBsYXRlcyc7XG5leHBvcnQgKiBmcm9tICcuL1Byb3BlcnR5RmVhdHVyZXMnO1xuIiwiaW1wb3J0IHsgY29ubmVjdEdlb1NlYXJjaCB9IGZyb20gJ2luc3RhbnRzZWFyY2guanMvZXMvY29ubmVjdG9ycyc7XG5pbXBvcnQgeyBudW1Gb3JtYXR0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9JbmRleCc7XG5pbXBvcnQgeyBMYXRMb25nUG9zLCBERUZBVUxUX0NFTlRFUiwgREVGQVVMVF9aT09NIH0gZnJvbSAnLi4vTGVhZmxldE1hcCc7XG5cbmludGVyZmFjZSBJUmVuZGVyR2VvU2VhcmNoT3B0aW9ucyB7XG4gIGl0ZW1zOiBhbnk7XG4gIHdpZGdldFBhcmFtczogYW55O1xufVxuXG5pbnRlcmZhY2UgSU1hcEljb24ge1xuICBfZ2VvbG9jOiBMYXRMb25nUG9zO1xuICBmcmllbmRseU5hbWU/OiBzdHJpbmc7XG4gIGF1Y3Rpb25OYW1lPzogc3RyaW5nO1xuICBwcmljZT86IG51bWJlcjtcbiAgdG90YWxBY3Jlcz86IG51bWJlcjtcbiAgcHJvcGVydHlTdGF0dXM/OiBzdHJpbmc7XG4gIHVyaTogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGlzQXVjdGlvbjogYm9vbGVhbjtcbiAgcHJvcGVydHlQaG90bzogc3RyaW5nO1xuICBjb3VudHk6IHN0cmluZztcbiAgaWQ6IG51bWJlcjtcbn1cblxubGV0IG1hcDogYW55ID0gbnVsbDtcbmxldCBtYXJrZXJzOiBhbnkgPSBbXTtcblxuY29uc3QgcHJvcGVydHlSZXN1bHRJY29uID0gKHtcbiAgdG90YWxBY3JlcyxcbiAgcHJpY2UsXG4gIHByb3BlcnR5U3RhdHVzLFxuICBpc0F1Y3Rpb24sXG4gIHVybFxufTogSU1hcEljb24pID0+IHtcbiAgY29uc3QgYWNyZXNUZXh0ID0gLyogaHRtbCAqLyBgJHt0b3RhbEFjcmVzLnRvTG9jYWxlU3RyaW5nKCl9ICYjMTc3OyBhYy5gO1xuICBjb25zdCBkaXNwbGF5Q29udGVudCA9IGlzQXVjdGlvbiA/IGFjcmVzVGV4dCA6IG51bUZvcm1hdHRlcihwcmljZSk7XG4gIHJldHVybiAvKiBodG1sICovIGBcbiAgPGEgaHJlZj1cIiR7dXJsfVwiIGNsYXNzPSdiLWFuY2hvckNvbXBsZXgnPlxuICAgIDxpIGNsYXNzPVwiJHtwcm9wZXJ0eVN0YXR1cy50b0xvd2VyQ2FzZSgpfVwiPjwvaT5cbiAgICA8c3Bhbj4ke2Rpc3BsYXlDb250ZW50fTwvc3Bhbj5cbiAgICA8aSBjbGFzcz1cImFycm93XCI+XG4gICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTUgMTdcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8cGF0aCBkPVwiTTAuMjYzNjcyIDYuOTU0OEgxMS45NDMzVjkuMzEyNjZIMC4yNjM2NzJWNi45NTQ4WlwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNNy4wMDA1OSAxNi4wMzQ4TDUuMzkwMzkgMTQuMzgzM0wxMS40ODQyIDguMTM0MzRMNS4zOTAzOSAxLjg4NTM4TDcuMDAwNTkgMC4yMzM4ODdMMTQuNzAyNCA4LjEzNDM3TDcuMDAwNTkgMTYuMDM0OFpcIiAvPlxuICAgICAgPC9zdmc+XG4gICAgPC9pPlxuICA8L2E+XG4gIGA7XG59O1xuXG5jb25zdCBhZ2VudFJlc3VsdEljb24gPSAoeyBmcmllbmRseU5hbWUsIHVybCB9OiBJTWFwSWNvbikgPT4ge1xuICByZXR1cm4gLyogaHRtbCAqLyBgXG4gIDxhIGhyZWY9JyR7dXJsfScgY2xhc3M9J2ItYWdlbnRNYXBJbmRpY2F0b3IgYi1hbmNob3JDb21wbGV4IHwgYy13aXRoSWNvbic+XG4gICAgPHNwYW4+JHtmcmllbmRseU5hbWV9PC9zcGFuPlxuICA8L2E+XG4gIGA7XG59O1xuXG5jb25zdCBhdWN0aW9uUmVzdWx0SWNvbiA9ICh7XG4gIGlkLFxuICBwcm9wZXJ0eVBob3RvLFxuICBjb3VudHksXG4gIHRvdGFsQWNyZXMsXG4gIGF1Y3Rpb25OYW1lLFxuICB1cmksXG4gIHByaWNlXG59OiBJTWFwSWNvbikgPT4ge1xuICByZXR1cm4gLyogaHRtbCAqLyBgXG4gICAgPGEgaHJlZj0nLyR7dXJpfScgY2xhc3M9J2hsbi1tYXAtY29udGFpbmVyJz5cbiAgICAgICAgPGRpdiBjbGFzcz0naGxuLW1hcC1wdCc+XG4gICAgICAgICAgICA8c3Bhbj4ke3RvdGFsQWNyZXN9IEFjcmVzPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+UHJpY2U6ICQke3ByaWNlfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J2hsbi1jYXJkJz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtwcm9wZXJ0eVBob3RvfVwiIGFsdD1cIiR7YXVjdGlvbk5hbWV9XCIgY2xhc3M9XCJobG4tY2FyZF9faW1hZ2VcIi8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdobG4tY2FyZF9fdGV4dCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY291bnR5Jz4ke2NvdW50eX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGxuLWNhcmRfX2RldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0naGxuLWNhcmRfX25hbWUnPiR7YXVjdGlvbk5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2hsbi1jYXJkX19hY3Jlcyc+JHt0b3RhbEFjcmVzfSBBY3JlczwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvYT5cbiAgYDtcbn07XG5cbmNvbnN0IG1hcFJlc3VsdEljb24gPSAoaWNvblR5cGU6IHN0cmluZywgZGF0YTogSU1hcEljb24pID0+IHtcbiAgc3dpdGNoIChpY29uVHlwZSkge1xuICAgIGNhc2UgJ3Byb3BlcnR5JzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2N1c3RvbS1tYXJrZXInLFxuICAgICAgICBodG1sOiBwcm9wZXJ0eVJlc3VsdEljb24oZGF0YSlcbiAgICAgIH07XG4gICAgY2FzZSAnYWdlbnQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnY3VzdG9tLW1hcmtlcicsXG4gICAgICAgIGh0bWw6IGFnZW50UmVzdWx0SWNvbihkYXRhKVxuICAgICAgfTtcbiAgICBjYXNlICdhdWN0aW9uJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2N1c3RvbS1tYXJrZXInLFxuICAgICAgICBodG1sOiBhdWN0aW9uUmVzdWx0SWNvbihkYXRhKVxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmNvbnN0IHJlbmRlckdlb1NlYXJjaCA9IChcbiAgcmVuZGVyT3B0aW9uczogSVJlbmRlckdlb1NlYXJjaE9wdGlvbnMsXG4gIGlzRmlyc3RSZW5kZXI6IGJvb2xlYW5cbikgPT4ge1xuICBjb25zdCB7IGl0ZW1zLCB3aWRnZXRQYXJhbXMgfSA9IHJlbmRlck9wdGlvbnM7XG4gIGNvbnN0IHsgY29udGFpbmVyIH0gPSB3aWRnZXRQYXJhbXM7XG5cbiAgaWYgKGlzRmlyc3RSZW5kZXIpIHtcbiAgICAvLyBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAvLyBidXR0b24udGV4dENvbnRlbnQgPSAnQ2xlYXIgdGhlIG1hcCByZWZpbmVtZW50JztcblxuICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnNzAwcHgnO1xuXG4gICAgbWFwID0gd2luZG93LkwubWFwKGNvbnRhaW5lciwge1xuICAgICAgbWF4Wm9vbTogMTcsXG4gICAgICBzY3JvbGxXaGVlbFpvb206IGZhbHNlLFxuICAgICAgem9vbUNvbnRyb2w6IGZhbHNlLFxuICAgICAgYXR0cmlidXRpb25Db250cm9sOiBmYWxzZVxuICAgIH0pLnNldFZpZXcoREVGQVVMVF9DRU5URVIsIERFRkFVTFRfWk9PTSk7XG5cbiAgICB3aW5kb3cuY3VycmVudE1hcCA9IG1hcDtcblxuICAgIC8vIERlZmluZSB0aGUgU2F0ZWxsaXRlIChJbWFnZXJ5KSBsYXllclxuICAgIHZhciBzYXRlbGxpdGVMYXllciA9IHdpbmRvdy5MLmVzcmkuVmVjdG9yLnZlY3RvckJhc2VtYXBMYXllcihcbiAgICAgICdBcmNHSVM6SW1hZ2VyeScsXG4gICAgICB7XG4gICAgICAgIGFwaWtleTogcHJvY2Vzcy5lbnYuRVNSSV9BUElfS0VZXG4gICAgICB9XG4gICAgKTtcblxuICAgIC8vIERlZmluZSB0aGUgTmF2aWdhdGlvbiBsYXllclxuICAgIHZhciBuYXZpZ2F0aW9uTGF5ZXIgPSB3aW5kb3cuTC5lc3JpLlZlY3Rvci52ZWN0b3JCYXNlbWFwTGF5ZXIoXG4gICAgICAnQXJjR0lTOk5hdmlnYXRpb24nLFxuICAgICAge1xuICAgICAgICBhcGlrZXk6IHByb2Nlc3MuZW52LkVTUklfQVBJX0tFWVxuICAgICAgfVxuICAgICk7XG5cbiAgICAvLyBBZGQgdGhlIGRlZmF1bHQgbGF5ZXIgKFNhdGVsbGl0ZSkgdG8gdGhlIG1hcFxuICAgIHNhdGVsbGl0ZUxheWVyLmFkZFRvKG1hcCk7XG5cbiAgICAvLyBBZGQgYSBsYXllciBjb250cm9sIHRvIHN3aXRjaCBiZXR3ZWVuIGxheWVyc1xuICAgIHZhciBiYXNlTWFwcyA9IHtcbiAgICAgIFNhdGVsbGl0ZTogc2F0ZWxsaXRlTGF5ZXIsXG4gICAgICBOYXZpZ2F0aW9uOiBuYXZpZ2F0aW9uTGF5ZXJcbiAgICB9O1xuXG4gICAgLy8gQWRkIGNvbnRyb2xzIHRvIG1hcFxuICAgIHdpbmRvdy5MLmNvbnRyb2wubGF5ZXJzKGJhc2VNYXBzKS5hZGRUbyhtYXApO1xuICAgIHdpbmRvdy5MLmNvbnRyb2wuem9vbSh7IHBvc2l0aW9uOiAnYm90dG9tcmlnaHQnIH0pLmFkZFRvKG1hcCk7XG5cbiAgICAvLyBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgfVxuXG4gIC8vIFJlbW92ZSBleGlzdGluZyBtYXJrZXJzXG4gIG1hcC5lYWNoTGF5ZXIoKGxheWVyOiBhbnkpID0+IHtcbiAgICBpZiAobGF5ZXIgJiYgbGF5ZXIgaW5zdGFuY2VvZiB3aW5kb3cuTC5NYXJrZXJDbHVzdGVyR3JvdXApIHtcbiAgICAgIG1hcC5yZW1vdmVMYXllcihsYXllcik7XG4gICAgfVxuICB9KTtcblxuICAvLyBDbHVzdGVyIGdyb3VwIGZvciBjbHVzdGVyaW5nXG4gIGNvbnN0IGNsdXN0ZXJHcm91cDogYW55ID0gd2luZG93LkwubWFya2VyQ2x1c3Rlckdyb3VwKCk7XG5cbiAgLy8gY29uc3QgcHJvcGVydHlTdGF0dXNcblxuICBtYXJrZXJzID0gaXRlbXNcbiAgICAubWFwKChkYXRhOiBJTWFwSWNvbikgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxuICAgICAgY29uc3QgeyBfZ2VvbG9jLCB0aXRsZSwgcHJvcGVydHlTdGF0dXMgfSA9IGRhdGE7XG5cbiAgICAgIC8vIEZpbHRlciBvdXQgbGVhc2VkIHByb3BlcnRpZXMgZnJvbSBkaXNwbGF5IG9uIG1hcFxuICAgICAgaWYgKFsnbGVhc2VkJywgJ3BlbmRpbmcnXS5pbmNsdWRlcyhwcm9wZXJ0eVN0YXR1cykpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIEN1c3RvbSBNYXJrZXJcbiAgICAgIGNvbnN0IGljb25UeXBlID0gZGF0YS5mcmllbmRseU5hbWVcbiAgICAgICAgPyAnYWdlbnQnXG4gICAgICAgIDogZGF0YS5hdWN0aW9uTmFtZVxuICAgICAgICAgID8gJ2F1Y3Rpb24nXG4gICAgICAgICAgOiAncHJvcGVydHknO1xuICAgICAgY29uc3QgcmVzdWx0SWNvbiA9IHdpbmRvdy5MLmRpdkljb24obWFwUmVzdWx0SWNvbihpY29uVHlwZSwgZGF0YSkpO1xuXG4gICAgICBjb25zdCBjdXN0b21NYXJrZXIgPSB3aW5kb3cuTC5tYXJrZXIoW19nZW9sb2MubGF0LCBfZ2VvbG9jLmxuZ10sIHtcbiAgICAgICAgaWNvbjogcmVzdWx0SWNvbixcbiAgICAgICAgdGl0bGVcbiAgICAgIH0pO1xuXG4gICAgICBjbHVzdGVyR3JvdXAuYWRkTGF5ZXIoY3VzdG9tTWFya2VyKTtcblxuICAgICAgcmV0dXJuIGN1c3RvbU1hcmtlcjtcbiAgICB9KVxuICAgIC5maWx0ZXIoKG1hcmtlcjogYW55KSA9PiBtYXJrZXIgIT09IG51bGwpO1xuXG4gIG1hcC5hZGRMYXllcihjbHVzdGVyR3JvdXApO1xuXG4gIC8vIGNvbnN0IG1hcmtlckJvdW5kc0dyb3VwID0gd2luZG93LkwuZmVhdHVyZUdyb3VwKG1hcmtlcnMpO1xuXG4gIGlmIChtYXJrZXJzLmxlbmd0aCkge1xuICAgIG1hcC5maXRCb3VuZHMod2luZG93LkwuZmVhdHVyZUdyb3VwKG1hcmtlcnMpLmdldEJvdW5kcygpLCB7XG4gICAgICBwYWRkaW5nOiBbNSwgNV1cbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgbGVhZmxldEdlb1NlYXJjaCA9IGNvbm5lY3RHZW9TZWFyY2gocmVuZGVyR2VvU2VhcmNoKTtcblxuZXhwb3J0IGRlZmF1bHQgbGVhZmxldEdlb1NlYXJjaDtcbiIsImV4cG9ydCBjb25zdCBhcnJvd0xlZnRJY29uOiAoKSA9PiBzdHJpbmcgPSAoKSA9PiB7XG4gIHJldHVybiAvKiBodG1sICovIGBcbiAgPHN2ZyB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiMTdcIiB2aWV3Qm94PVwiMCAwIDE1IDE3XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPHBhdGggY2xhc3M9XCJjbHMtMVwiIGQ9XCJNMTQuNyw5LjMxSDMuMDJ2LTIuMzZIMTQuN3YyLjM2WlwiLz5cbiAgICA8cGF0aCBjbGFzcz1cImNscy0xXCIgZD1cIk0uMjYsOC4xM0w3Ljk3LC4yM2wxLjYxLDEuNjVMMy40OCw4LjEzbDYuMDksNi4yNS0xLjYxLDEuNjVMLjI2LDguMTNaXCIvPlxuICA8L3N2Zz5gO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXJyb3dMZWZ0SWNvbjtcbiIsImV4cG9ydCBjb25zdCBhcnJvd1JpZ2h0SWNvbjogKCkgPT4gc3RyaW5nID0gKCkgPT4ge1xuICByZXR1cm4gLyogaHRtbCAqLyBgXG5cdDxzdmcgd2lkdGg9XCIxNVwiIGhlaWdodD1cIjE3XCIgdmlld0JveD1cIjAgMCAxNSAxN1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdDxwYXRoIGQ9XCJNMC4yNjM2NzIgNi45NTQ4SDExLjk0MzNWOS4zMTI2NkgwLjI2MzY3MlY2Ljk1NDhaXCIgZmlsbD1cIiMwMDI1MzhcIi8+XG5cdFx0PHBhdGggZD1cIk03LjAwMDU5IDE2LjAzNDhMNS4zOTAzOSAxNC4zODMzTDExLjQ4NDIgOC4xMzQzNEw1LjM5MDM5IDEuODg1MzhMNy4wMDA1OSAwLjIzMzg4N0wxNC43MDI0IDguMTM0MzdMNy4wMDA1OSAxNi4wMzQ4WlwiIGZpbGw9XCIjMDAyNTM4XCIvPlxuXHQ8L3N2Zz5gO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXJyb3dSaWdodEljb247XG4iLCJpbXBvcnQgeyBzcHJpdGVJY29uIH0gZnJvbSAnLi9TcHJpdGVJY29uJztcblxudHlwZSBUQnV0dG9uVGFnID0gJ2EnIHwgJ2J1dHRvbic7XG5cbmludGVyZmFjZSBJQnV0dG9uVGVtcGxhdGUge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgaHJlZj86IHN0cmluZztcbiAgaWNvbk5hbWU/OiBzdHJpbmc7XG4gIHRhZ1R5cGU/OiBUQnV0dG9uVGFnO1xuICB0ZXh0U2l6ZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGJ1dHRvblRlbXBsYXRlID0gKHtcbiAgY2xhc3NOYW1lLFxuICBjb250ZW50LFxuICBocmVmLFxuICBpY29uTmFtZSxcbiAgdGFnVHlwZSA9ICdhJyxcbiAgdGV4dFNpemUgPSAwXG59OiBJQnV0dG9uVGVtcGxhdGUpID0+IHtcbiAgY29uc3QgaWNvbiA9IGljb25OYW1lID8gc3ByaXRlSWNvbihpY29uTmFtZSkgOiAnJztcbiAgY29uc3QgaHJlZkF0dHIgPSBocmVmID8gYGhyZWY9JyR7aHJlZn0nYCA6ICcnO1xuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lIHx8ICcnO1xuXG4gIHJldHVybiAvKiBodG1sICovIGBcbiAgICA8JHt0YWdUeXBlfSBjbGFzcz0nYi1idXR0b24gYi1hbmNob3JDb21wbGV4IGMtd2l0aEljb24gdS10ZXh0LSR7dGV4dFNpemV9ICR7Y2xhc3Nlc30nICR7aHJlZkF0dHJ9PlxuICAgICAgPHNwYW4+JHtjb250ZW50fTwvc3Bhbj5cbiAgICAgICR7aWNvbn1cbiAgICA8LyR7dGFnVHlwZX0+XG4gIGA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBidXR0b25UZW1wbGF0ZTtcbiIsImV4cG9ydCBpbnRlcmZhY2UgSUltYWdlIHtcbiAgYWx0Pzogc3RyaW5nO1xuICBzcmM6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGltYWdlVGVtcGxhdGUgPSAoc3JjOiBzdHJpbmcsIGFsdDogc3RyaW5nKSA9PiB7XG4gIGlmICghc3JjKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgY29uc3QgYWx0QXR0ciA9IGFsdCA/IGBhbHQ9JyR7YWx0fSdgIDogJyc7XG5cbiAgcmV0dXJuIC8qIGh0bWwgKi8gYFxuICAgIDxkaXYgY2xhc3M9J2MtZnJhbWUnPlxuICAgICAgPGltZyBzcmM9JyR7c3JjfScgJHthbHRBdHRyfSAvPlxuICAgIDwvZGl2PmA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbWFnZVRlbXBsYXRlO1xuIiwiZXhwb3J0IGNvbnN0IHN0eWxlZFByaWNlVGVtcGxhdGUgPSAocHJpY2U6IHN0cmluZykgPT4ge1xuICBpZiAocHJpY2UgPT09ICcwJykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiAvKiBodG1sICovIGBcbiAgICA8cCBjbGFzcz1cInUtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICQke3ByaWNlfVxuICAgIDwvcD5cbiAgYDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZFByaWNlVGVtcGxhdGU7XG4iLCJleHBvcnQgY29uc3Qgc3ByaXRlSWNvbiA9IChpY29uTmFtZTogc3RyaW5nLCBjbGFzc05hbWUgPSAnJykgPT4ge1xuICByZXR1cm4gLyogaHRtbCAqLyBgXG4gIDxzdmcgY2xhc3M9J2ItaWNvbiAke2NsYXNzTmFtZX0nPlxuICAgICAgPHVzZSBocmVmPScvc3ZnL3Nwcml0ZS5zdmcjJHtpY29uTmFtZX0nPjwvdXNlPlxuICA8L3N2Zz5cbiAgYDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNwcml0ZUljb247XG4iLCJleHBvcnQgKiBmcm9tICcuL0Fycm93TGVmdCc7XG5leHBvcnQgKiBmcm9tICcuL0Fycm93UmlnaHQnO1xuZXhwb3J0ICogZnJvbSAnLi9CdXR0b24nO1xuZXhwb3J0ICogZnJvbSAnLi9QcmljZSc7XG5leHBvcnQgKiBmcm9tICcuL1Nwcml0ZUljb24nO1xuZXhwb3J0ICogZnJvbSAnLi9JbWFnZSc7XG4iLCJpbXBvcnQgaW5pdE5hdkFjY291bnRMaW5rcyBmcm9tICcuLi9tb2R1bGVzL05hdkFjY291bnRMaW5rcyc7XG5pbXBvcnQgeyBpbml0RmF2b3JpdGVQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vbW9kdWxlcy9GYXZvcml0ZVByb3BlcnRpZXMnO1xuaW1wb3J0IGluaXRTYXZlZFNlYXJjaGVzIGZyb20gJy4uL21vZHVsZXMvU2F2ZWRTZWFyY2hlcyc7XG5cbi8qKlxuICogRmV0Y2ggdG8gc2VlIGlmIHRoZXJlJ3MgYSB1c2VyIGN1cnJlbnRseSBsb2dnZWQgaW4uXG4gKlxuICogQHJldHVybiAgICB7Ym9vbGVhbn0gICAgICAgICAgICAgUmV0dXJucyB0cnVlIGlmIGxvZ2dlZCBpbiwgZmFsc2UgaWYgbm90XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFVzZXJMb2dpblN0YXR1cygpOiBQcm9taXNlPGFueT4ge1xuICBjb25zdCB1c2VyTG9naW5TdGF0dXNSZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3YxL2xvZ2luLXN0YXR1cycpXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGEubG9naW5TdGF0dXMgJiYgZGF0YS5sb2dpblN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gZGF0YS5sb2dpblN0YXR1cztcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ2RldicpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gIHJldHVybiB1c2VyTG9naW5TdGF0dXNSZXNwb25zZTtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRMb2dpblN0YXR1c0NvbXBvbmVudHMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaG9zdG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgY29uc3Qgc2l0ZUhhc0FjY291bnRzID1cbiAgICBob3N0bmFtZS5tYXRjaCgncmVhbGVzdGF0ZScpIHx8XG4gICAgaG9zdG5hbWUubWF0Y2goJ2VuZXJneScpIHx8XG4gICAgaG9zdG5hbWUubWF0Y2goJ2hsbicpIHx8XG4gICAgaG9zdG5hbWUubWF0Y2goJ2h1bnRpbmcnKSB8fFxuICAgIGhvc3RuYW1lLm1hdGNoKCdzdG9jaycpO1xuXG4gIGlmIChzaXRlSGFzQWNjb3VudHMpIHtcbiAgICBmZXRjaFVzZXJMb2dpblN0YXR1cygpLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VyTG9naW5TdGF0dXMnLCB2YWx1ZSk7XG4gICAgICBpbml0TmF2QWNjb3VudExpbmtzKCk7XG4gICAgICBpbml0RmF2b3JpdGVQcm9wZXJ0aWVzKCk7XG4gICAgICBpbml0U2F2ZWRTZWFyY2hlcygpO1xuICAgIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIEFkanVzdCBkZWZhdWx0IGV4cG9ydCBpZiB3ZSBhZGQgbW9yZSBhY2NvdW50IHV0aWxpdGllc1xuICovXG5leHBvcnQgZGVmYXVsdCBpbml0TG9naW5TdGF0dXNDb21wb25lbnRzO1xuIiwiZXhwb3J0IGNvbnN0IGNsaWNrRGltZW5zaW9ucyA9ICgpID0+IHtcbiAgY29uc3QgZG9tYWluID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID8/ICdmYXJtZXJzbmF0aW9uYWwuY29tJztcbiAgY29uc3QgZG9tYWluU3RyaW5nID0gZG9tYWluLnJlcGxhY2UoL1xcLi9nLCAnJyk7XG4gIGNvbnN0IGNkQW5hbHl0aWNzID0gbmV3IGNsaWNrZGltZW5zaW9ucy5BbmFseXRpY3MoXG4gICAgJ2FuYWx5dGljcy5jbGlja2RpbWVuc2lvbnMuY29tJ1xuICApO1xuXG4gIGNkQW5hbHl0aWNzLnNldEFjY291bnRLZXkoJ2FrUWx4ZXJGd0VLVmpLMnNoOFNsZycpO1xuICBjZEFuYWx5dGljcy5zZXREb21haW4oZG9tYWluKTtcbiAgY2RBbmFseXRpY3Muc2V0U2NvcmUoXG4gICAgdHlwZW9mIGNkU2NvcmUgPT0gJ3VuZGVmaW5lZCcgPyAwIDogY2RTY29yZSA9PSAwID8gbnVsbCA6IGNkU2NvcmVcbiAgKTtcblxuICB2YXIgb3B0T3V0SG9zdElkID0gZG9tYWluU3RyaW5nICsgJ19nbFM4aHMyS2pWS0V3RnJleGxRa2EnO1xuXG4gIGNkQW5hbHl0aWNzLm9wdE91dFRyYWNraW5nKHRydWUpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xpY2tEaW1lbnNpb25zO1xuIiwiZXhwb3J0IGNvbnN0IGdldFNpdGVIYW5kbGUgPSAoKTogc3RyaW5nID0+IHtcbiAgY29uc3QgYm9keUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICdib2R5W2RhdGEtaGFuZGxlXSdcbiAgKSBhcyBIVE1MRWxlbWVudDtcbiAgaWYgKGJvZHlFbGVtZW50KSB7XG4gICAgcmV0dXJuIGJvZHlFbGVtZW50LmRhdGFzZXQuaGFuZGxlO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufTtcbiIsImltcG9ydCAqIGFzIHFzIGZyb20gJ3FzJztcbi8vIEV4cG9ydCBleHRlcm5hbCBmaWxlc1xuZXhwb3J0ICogZnJvbSAnLi9BY2NvdW50JztcbmV4cG9ydCAqIGZyb20gJy4vT25seVNwYWNlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kKFxuICBub2RlOiBIVE1MRWxlbWVudCxcbiAgYWN0aW9uOiBzdHJpbmcsXG4gIG1ldGhvZDogKGU6IEV2ZW50KSA9PiB2b2lkXG4pOiB2b2lkIHtcbiAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGFjdGlvbiwgbWV0aG9kKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuYmluZChcbiAgbm9kZTogSFRNTEVsZW1lbnQsXG4gIGFjdGlvbjogc3RyaW5nLFxuICBtZXRob2Q6IChlOiBFdmVudCkgPT4gdm9pZFxuKTogdm9pZCB7XG4gIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihhY3Rpb24sIG1ldGhvZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50UXVlcnlTdHJpbmcoKSB7XG4gIGlmICh3aW5kb3cubG9jYXRpb24uc2VhcmNoKSB7XG4gICAgcmV0dXJuIHFzLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnPycsICcnKSk7XG4gIH1cbiAgcmV0dXJuIHt9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaFRvUXVlcnkoZTogRXZlbnQpIHtcbiAgY29uc3Qgbm9kZSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFNlbGVjdEVsZW1lbnQ7XG4gIGNvbnN0IGtleSA9IG5vZGUuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gIGNvbnN0IHsgdmFsdWUgfSA9IG5vZGU7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gZ2V0Q3VycmVudFF1ZXJ5U3RyaW5nKCk7XG4gIHF1ZXJ5U3RyaW5nW2tleV0gPSB2YWx1ZTtcblxuICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoXG4gICAgbnVsbCxcbiAgICBudWxsLFxuICAgIGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0/JHtxcy5zdHJpbmdpZnkocXVlcnlTdHJpbmcpfWBcbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGZsYXR0ZW5BcnJheSA9IChlOiBhbnkpID0+IHtcbiAgcmV0dXJuIGUucmVkdWNlKFxuICAgIChhOiBhbnksIGI6IGFueSkgPT4gYS5jb25jYXQoQXJyYXkuaXNBcnJheShiKSA/IGZsYXR0ZW5BcnJheShiKSA6IGIpLFxuICAgIFtdXG4gICk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbnVtRm9ybWF0dGVyKG51bTogbnVtYmVyKSB7XG4gIGlmIChudW0gPiA5OTkgJiYgbnVtIDwgMTAwMDAwMCkge1xuICAgIHJldHVybiBgJHsobnVtIC8gMTAwMCkudG9GaXhlZCgxKX1LYDsgLy8gY29udmVydCB0byBLIGZvciBudW1iZXIgZnJvbSA+IDEwMDAgPCAxIG1pbGxpb25cbiAgfVxuXG4gIGlmIChudW0gPiAxMDAwMDAwKSB7XG4gICAgcmV0dXJuIGAkeyhudW0gLyAxMDAwMDAwKS50b0ZpeGVkKDEpfU1gOyAvLyBjb252ZXJ0IHRvIE0gZm9yIG51bWJlciBmcm9tID4gMSBtaWxsaW9uXG4gIH1cblxuICByZXR1cm4gbnVtO1xufVxuIiwiZXhwb3J0IGNvbnN0IGxlYWZsZXRBdHRyaWJ1dGlvbkhvdmVyID0gKCkgPT4ge1xuICBjb25zdCBjb250cm9sQXR0cmlidXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICcubGVhZmxldC1jb250cm9sLWF0dHJpYnV0aW9uJ1xuICApO1xuXG4gIGlmIChjb250cm9sQXR0cmlidXRpb24ubGVuZ3RoKSB7XG4gICAgY29udHJvbEF0dHJpYnV0aW9uLmZvckVhY2goKGNvbnRyb2xFbCkgPT4ge1xuICAgICAgY29udHJvbEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb250cm9sRWwuY2xhc3NMaXN0LnRvZ2dsZSgndS13aGl0ZXNwYWNlLW5vcm1hbCcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxlYWZsZXRBdHRyaWJ1dGlvbkhvdmVyO1xuIiwiZXhwb3J0IGNvbnN0IGdldExvZ2luU3RhdHVzID0gKCkgPT4ge1xuICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlckxvZ2luU3RhdHVzJykgPT09ICd0cnVlJyB8fCBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldExvZ2luU3RhdHVzO1xuIiwiLyoqXG4gKiBHZXQgQ29vcmRpbmF0ZXMgb2YgYSBnaXZlbiB6aXAgY29kZSB1c2luZyBvdXIgZW5kcG9pbnQgYW5kIERCIGRhdGFcbiAqXG4gKiBAcmV0dXJuICAgIHtvYmplY3R9ICAgICAgICAgICAgIFJldHVybnMgb2JqZWN0IG9mIGxhdC9sbmdcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFppcENvZGVDb29yZGluYXRlcyh6aXA6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gIGlmICghemlwKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGNvbnN0IHppcExvY2F0aW9uUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgL2FjdGlvbnMvemlwY29kZXMvbG9va3VwL2xhdC1sbmc/emlwY29kZT0ke3ppcH1gXG4gIClcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiBkYXRhKTtcblxuICBsZXQgemlwQ29vcmRzID0gbnVsbDtcbiAgaWYgKHppcExvY2F0aW9uUmVzcG9uc2UubGF0ICYmIHppcExvY2F0aW9uUmVzcG9uc2UubG9uZykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgIHppcENvb3JkcyA9IHppcExvY2F0aW9uUmVzcG9uc2U7XG4gIH1cblxuICByZXR1cm4gemlwQ29vcmRzO1xufVxuXG4vKipcbiAqIEFkanVzdCBkZWZhdWx0IGV4cG9ydCBpZiB3ZSBhZGQgbW9yZSBtYXAgdXRpbGl0aWVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGdldFppcENvZGVDb29yZGluYXRlcztcbiIsImV4cG9ydCBjb25zdCBvbmx5U3BhY2VzID0gKHN0cjogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBzdHIudHJpbSgpLmxlbmd0aCA9PT0gMDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9ubHlTcGFjZXM7XG4iLCIvLyBVbmxpa2UgdGhlIHF1ZXJ5U2VsZWN0b3IgZG9uJ3QgaW5jbHVkZSAuIGluIHlvdXIgY2xhc3MgbmFtZXNcbmV4cG9ydCBjb25zdCBxdWVyeVBhcmVudHMgPSAoZWw6IEhUTUxFbGVtZW50LCBzZWxlY3Rvcjogc3RyaW5nKSA9PiB7XG4gIHdoaWxlIChlbC5wYXJlbnROb2RlKSB7XG4gICAgZWwgPSBlbC5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmIChcbiAgICAgIGVsLnRhZ05hbWUgPT09IHNlbGVjdG9yIHx8XG4gICAgICBlbC5jbGFzc0xpc3QuY29udGFpbnMoc2VsZWN0b3IpIHx8XG4gICAgICBlbC50YWdOYW1lID09PSAnQk9EWSdcbiAgICApXG4gICAgICByZXR1cm4gZWw7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBxdWVyeVBhcmVudHM7XG4iLCJjb25zdCBhZGREZXRhaWxSb3cgPSAodHJQYXJlbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gIGNvbnN0IGRldGFpbHMgPSBKU09OLnBhcnNlKHRyUGFyZW50LmRhdGFzZXQuZGV0YWlscyk7XG4gIGNvbnN0IHsgY29sc3BhbiB9ID0gdHJQYXJlbnQuZGF0YXNldDtcbiAgY29uc3QgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICBjaGlsZC5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzJyk7XG5cbiAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICB0ZC5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCBjb2xzcGFuKTtcbiAgdGQuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJiLWxpc3RpbmdUYWJsZV9fZGV0YWlscyBjLWZsb3cgdS1mbG93LXNwYWNlLTIwMFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInUtd2VpZ2h0LW1lZGl1bVwiPlNvbGQgRGF0ZTo8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+JHtkZXRhaWxzLnNvbGREYXRlfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInUtd2VpZ2h0LW1lZGl1bVwiPlN0YXR1czo8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PHNwYW4gY2xhc3M9XCJiLXByb3BlcnR5U3RhdHVzIGItcHJvcGVydHlTdGF0dXMtLSR7ZGV0YWlscy5zdGF0dXN9IHUtd2VpZ2h0LWJvbGRcIj4ke2RldGFpbHMuc3RhdHVzfTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1LXdlaWdodC1tZWRpdW1cIj5Db3VudHk6PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PiR7ZGV0YWlscy5jb3VudHl9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidS13ZWlnaHQtbWVkaXVtXCI+TGlzdGluZyBJRDo8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiLXByb3BlcnR5SWQgdS13ZWlnaHQtYm9sZFwiPjxhIGhyZWY9XCIke2RldGFpbHMudXJsfVwiPiR7ZGV0YWlscy5saXN0aW5nSWR9PC9hPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICBjaGlsZC5hcHBlbmRDaGlsZCh0ZCk7XG4gIHRyUGFyZW50LmFmdGVyKGNoaWxkKTtcbn07XG5cbmNvbnN0IHJlbW92ZURldGFpbFJvdyA9ICh0clBhcmVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgY29uc3Qgc2libGluZyA9IHRyUGFyZW50Lm5leHRFbGVtZW50U2libGluZztcbiAgaWYgKHNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZXRhaWxzJykpXG4gICAgdHJQYXJlbnQubmV4dEVsZW1lbnRTaWJsaW5nLnJlbW92ZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IHRhYmxlQ29sbGFwc2VJdGVtID0gKCkgPT4ge1xuICBjb25zdCB0YWJsZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RpbmdUYWJsZScpO1xuICBpZiAodGFibGVFbCkge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSB0YWJsZUVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuICAgIGlmIChidXR0b25zLmxlbmd0aCkge1xuICAgICAgYnV0dG9ucy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgY29uc3QgdHJQYXJlbnQgPSA8SFRNTEVsZW1lbnQ+ZWwucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgIGlmICghZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdiLWNvbGxhcHNlQnV0dG9uLS1vcGVuJykpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2ItY29sbGFwc2VCdXR0b24tLW9wZW4nKTtcbiAgICAgICAgICAgIGFkZERldGFpbFJvdyh0clBhcmVudCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ItY29sbGFwc2VCdXR0b24tLW9wZW4nKTtcbiAgICAgICAgICAgIHJlbW92ZURldGFpbFJvdyh0clBhcmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdGFibGVDb2xsYXBzZUl0ZW07XG4iLCIvKipcbiAqIEdldCBaaXAgY29kZSBvZiBnaXZlbiBsYXQgbG9uZ2l0dWRlXG4gKlxuICogQHJldHVybiAgICAgIHtzdHJpbmd9ICAgICAgICAgICAgUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHRoZSBuZWFyZXN0IHppcGNvZGVcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvb3JkaW5hdGVzWmlwQ29kZShcbiAgbGF0OiBudW1iZXIsXG4gIGxvbmc6IG51bWJlclxuKTogUHJvbWlzZTxhbnk+IHtcbiAgaWYgKCFsYXQgfHwgIWxvbmcpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgY29uc3QgemlwY29kZU9iaiA9IGF3YWl0IGZldGNoKFxuICAgIGAvYWN0aW9ucy96aXBjb2Rlcy9sb29rdXAvemlwY29kZT9sYXQ9JHtsYXR9JmxuZz0ke2xvbmd9YFxuICApXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4gZGF0YSk7XG5cbiAgLy8gVE9ETzogcmVwbGFjZSB0aGlzIHRlbXAgc2ltcGxlIHJldHVybiB3aXRoIGFjdHVhbCB2YWx1ZVxuICAvLyBjb25zdCB6aXBjb2RlID0gJzMwNjc4JztcblxuICByZXR1cm4gemlwY29kZU9iai56aXBjb2RlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRDb29yZGluYXRlc1ppcENvZGU7XG4iLCIvKiAoaWdub3JlZCkgKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtfdW5pb25fY2xpZW50XCJdID0gc2VsZltcIndlYnBhY2tDaHVua191bmlvbl9jbGllbnRcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvanMvQXBwLnRzXCIpKSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3Njc3MvYXBwLnNjc3NcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==