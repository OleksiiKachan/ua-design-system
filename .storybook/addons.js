import '@storybook/addon-storysource/register';
import '@storybook/addon-knobs/register';
import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';
import '@storybook/addon-a11y/register';

// Community addons
// import 'storybook-readme/register';

// Custom addons
// import './addon-carbon-theme/register';

// These options used by storybook often conflict with developer tools,
// conditional panels, or other things that get in the way of our workflow
localStorage.removeItem('@storybook/ui/store');
localStorage.removeItem('storybook-layout');
