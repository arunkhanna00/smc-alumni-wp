<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'startwordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'BM/yARu16[Io96NKLm0_`*#=$3Wpt#dn(^ ft?N!q,kJkF}t[!ig0e{b+dToJ@+j');
define('SECURE_AUTH_KEY',  'Yg[-5}O*iZseq++j]HN1|cXY.rFSmG)|BSksNz,0R6KMFv!zoyk]R&a>vKjBhR]W');
define('LOGGED_IN_KEY',    'Ol8{P46ue0wPKwE&~_V7i9D]#_5*WkocT&yF1Mth8nx|V x2[|eP||EZt.^+6Nag');
define('NONCE_KEY',        'e,p>vxIgS@{4R=?.wmN*aa_}-la`+yrs&>S7+M(oldk~B*-r:;xDDaK}&8O_X)eN');
define('AUTH_SALT',        'sAWA=Z2IoHu&M+^pyM;Atc,;A#6U,Bw/)+07=b8 fx_16s|3{!+:!}8-$#:.diAU');
define('SECURE_AUTH_SALT', 'x+{{%@h-ntFL8Yt_cn6nrrZArYEz>9+02.At&U.5-G9,0&D^B)-CYN~_#KOG6.NP');
define('LOGGED_IN_SALT',   'q0k9eK=|;@-|!w@x!bA0i>]ro_j[Jo3F0C,Xq14+S(nK-_M@O?cje02V liv{Z,:');
define('NONCE_SALT',       'PFRJ>mUSw*@+C&w,|x]J  V{*^+Xrl=_}[rF24+=wZwtmEnV;|kTkT0*v<]~{J-V');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'xyz77_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
