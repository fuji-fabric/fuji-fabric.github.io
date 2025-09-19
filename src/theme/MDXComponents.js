/* Import font-awesome components. */
import MDXComponents from '@theme-original/MDXComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component.
import { library } from '@fortawesome/fontawesome-svg-core'; // Import the library component.
import { fab } from '@fortawesome/free-brands-svg-icons'; // Import all brands icons.
import { fas } from '@fortawesome/free-solid-svg-icons'; // Import all solid icons.
library.add(fab, fas); // Add all icons to the library so you can use them without importing them individually.

/* Import the admonition component. */
import Admonition from '@theme/Admonition';

// noinspection JSUnusedGlobalSymbols
export default {
  /* Re-use the default mapping */
  ...MDXComponents,
  /* Make the FontAwesomeIcon component available in MDX as <FAIcon />. */
  FAIcon: FontAwesomeIcon,
  /* Export the Admonition component to the MDX. */
  Admonition: Admonition,
};
