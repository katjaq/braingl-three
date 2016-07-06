$(document).ready( function() {

	var $viewer =  $( "#viewer" );
	var width = $viewer.width();
	var height = $viewer.height();

	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, width/height, 0.1, 1000 );

	var renderer = new THREE.WebGLRenderer();
	
	renderer.setSize( width, height );

	$viewer[0].appendChild( renderer.domElement );

	var geometry = new THREE.BoxGeometry( 1, 1, 1 );
	var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	var cube = new THREE.Mesh( geometry, material );
	scene.add( cube );

	camera.position.z = 5;

	var render = function () {
		requestAnimationFrame( render );

		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;

		renderer.render(scene, camera);
	};

	render();

});