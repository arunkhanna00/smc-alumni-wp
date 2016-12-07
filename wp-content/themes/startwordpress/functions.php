<?php

class wp_ng_theme {
	
	function enqueue_scripts() {
		
		wp_enqueue_style( 'bootstrapCSS', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css', array(), '1.0', 'all' );
		wp_enqueue_style( 'myCSS', get_template_directory_uri() . '/style.css', array(), '1.0', 'all' );
		wp_enqueue_script( 'angular-core', 'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js', array( 'jquery' ), '1.0', true );
		wp_enqueue_script( 'fonts', 'https://use.fontawesome.com/e781d54e8d.js', array(), '1.0', true );
		wp_enqueue_script( 'angular-router', 'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular-route.min.js', array( 'angular-core' ), '1.0', true );
		wp_enqueue_script( 'jquery', 'https://code.jquery.com/jquery-3.1.1.min.js', array(), '1.0', true );
		wp_enqueue_script( 'bootstrap', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js', array('jquery'), '1.0', true );
		wp_enqueue_script( 'js', get_template_directory_uri() . '/index.js', array( 'angular-core' ), '1.0', true );
		wp_localize_script( 'js', 'appInfo',
			array(
				
				'api_url'			 => rest_get_url_prefix() . '/wp/v2/',
				'template_directory' => get_template_directory_uri() . '/',
				'nonce'				 => wp_create_nonce( 'wp_rest' ),
				'is_admin'			 => current_user_can('administrator')
				
			)
		);
		
	}


}

$ngTheme = new wp_ng_theme();
add_action( 'wp_enqueue_scripts', array( $ngTheme, 'enqueue_scripts' ) );
add_action( 'rest_api_init', array( $ngTheme, 'register_new_field' ) );
add_action( 'rest_api_init', array( $ngTheme, 'my_awesome_route' ) );

?>