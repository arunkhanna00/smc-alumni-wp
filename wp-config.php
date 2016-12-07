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
define('DB_CHARSET', 'utf8mb4');

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
define('AUTH_KEY',         '~Ram85!xt+z320R>}gb4X!S%Vq(be1HJeFi%kcz~unDXS#l>iB:nS^7pwx{h^/h-');
define('SECURE_AUTH_KEY',  '%cI $6AI=KgZ4g@y0XMn3+?+2|pp!d2_.&t[{@A6wGC=X2CNf3c6uapK3hW:4hs4');
define('LOGGED_IN_KEY',    ']!z;M=[i5.3kns/7Gay+AsTupJfX0:f=ATP1a@4o2h^xmU.P75H>J[s1Q##Fb7<a');
define('NONCE_KEY',        'Os!Gh?ute~l@;g~2x%Uz?[Y72zYj*-RzLa-M[qh|$dllXo_3W.h>1xlx(6L:YTu|');
define('AUTH_SALT',        ')7^]bi=`(= 85[=umMkl1UJQGbUYQ5<]B_%q)%B1]X1vtM 1qE?b%5; Y,F)quqH');
define('SECURE_AUTH_SALT', 'ILRHg[0`#O& SmdeyuU>E$5k-K12EU4EgE6kh/;I#|&)AN/H.(Zq{+6`D^i@Ddvv');
define('LOGGED_IN_SALT',   '8uBZAwPk<-o@h1B~6M_d7cz_?KTG$cFGx$:=[oc><G1j]!zM8:)kJl%*TVwT_J](');
define('NONCE_SALT',       '^lpuV;Wz=O[Yzjv+Z6_@U) #l>kw4c8Md(G_nj@h}&{yHve8!:sPzxOFTNMPyB +');

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
