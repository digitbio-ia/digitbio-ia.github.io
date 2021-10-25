/*! Wowchemy v5.2.0 | https://wowchemy.com/ */
/*! Copyright 2016-present George Cushen (https://georgecushen.com/) */
/*! License: https://github.com/wowchemy/wowchemy-hugo-modules/blob/main/LICENSE.md */

;
/*************************************************
 *  Wowchemy
 *  https://github.com/wowchemy/wowchemy-hugo-modules
 *
 *  Wowchemy Initialization
 **************************************************/

import {initThemeVariation} from './wowchemy-theming';

import {wcDarkLightEnabled, wcIsSiteThemeDark} from '@params';

window.wc = {
  darkLightEnabled: wcDarkLightEnabled,
  isSiteThemeDark: wcIsSiteThemeDark,
};

// CMS authentication
if (window.netlifyIdentity) {
  window.netlifyIdentity.on('init', (user) => {
    if (!user) {
      window.netlifyIdentity.on('login', () => {
        document.location.href = '/admin/';
      });
    }
  });
}

// Initialize theme variation and set body theme class.
initThemeVariation();

// For Plotly compatibility with MathJax (must appear prior to loading Plotly).
window.PlotlyConfig = {MathJaxConfig: 'local'};
