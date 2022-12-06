var oldham = {
    scene: null,
    camera: null,
    container: null,
    stats: null,
    controls: null,
    renderer: null,
    CONTAINER_WIDTH: null,
    CONTAINER_HEIGHT: null,
    link2mesh: null,
    init: function () {

// create main scene
        this.scene = new THREE.Scene();
        this.container = document.getElementById("canvas3d-view");
        this.scene.position.set(0, 0, 0);
        this.CONTAINER_WIDTH = this.container.offsetWidth;
        this.CONTAINER_HEIGHT = this.container.offsetHeight;

//  renderer
        this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: false});
        this.renderer.setSize(this.CONTAINER_WIDTH, this.CONTAINER_HEIGHT);
        this.renderer.setClearColor(0xCCCCCC, 1); // Set the background color of the canvas to black
        this.renderer.shadowMapEnabled = true;
        this.renderer.shadowMapSoft = true;
        this.container.appendChild(this.renderer.domElement);

// camera
        var VIEW_ANGLE = 40, ASPECT = this.CONTAINER_WIDTH / this.CONTAINER_HEIGHT, NEAR = 1, FAR = 10000;
        this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
        //this.camera.position.z = 500;
        this.camera.position.set(700, 0, 1400);   //
        //this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        this.camera.lookAt(this.scene.position);
//        this.scene.add(this.camera);
//        
        // And some sort of controls to move around
        // We'll use one of THREE's provided control classes for simplicity
        this.controls = new THREE.TrackballControls(this.camera);
        this.controls.rotateSpeed = 1.0;
        this.controls.zoomSpeed = 1.2;
        this.controls.panSpeed = 0.8;
        this.controls.noZoom = false;
        this.controls.noPan = false;
        this.controls.staticMoving = true;
        this.controls.dynamicDampingFactor = 0.3;
        this.controls.keys = [65, 83, 68];
        this.controls.enabled = false;
        // this.controls.addEventListener('change', render);
// Stats preparing
//        this.stats = new Stats();
//        this.stats.domElement.style.position = 'absolute';
//        this.stats.domElement.style.top = '60px';
//        this.container.appendChild(this.stats.domElement);

// create scene

// Add axes, The X axis is red. The Y axis is green. The Z axis is blue.
        axes = buildAxes(200);
        //axes.position = mesh.position;
        this.scene.add(axes);

        Cylinder1 = new THREE.Mesh(new THREE.CylinderGeometry(25, 25, 200, 100), new THREE.MeshNormalMaterial());
        Cylinder1.rotation.x = Math.PI / 2;
        oldham.scene.add(Cylinder1);
        this.loader = new THREE.STLLoader();
        this.loader.load('oh1.STL', function (geometry) {
            geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-5, -51, 0));
            l1material = new THREE.MeshNormalMaterial( );
            l1mesh = new THREE.Mesh(geometry, l1material);
            l1mesh.rotation.x = -Math.PI / 2;
//l1mesh.postition.set(0,0,0);
            Cylinder1.add(l1mesh);

        });
        Cylinder2 = new THREE.Mesh(new THREE.CylinderGeometry(5, 5, 20, 100), new THREE.MeshNormalMaterial());
        // Cylinder2.rotation.x = Math.PI / 2;
        Cylinder2.position.set(140, 0, 180);
        oldham.scene.add(Cylinder2);
        this.loader = new THREE.STLLoader();
        this.loader.load('oh2.STL', function (geometry) {
            link2material = new THREE.MeshNormalMaterial( );
            link2mesh = new THREE.Mesh(geometry, link2material);
            //link2mesh.rotation.z = -Math.PI / 6;
            //  link2mesh.position.set(140, 0, 180);
            Cylinder2.add(link2mesh);

		Cylinder3 = new THREE.Mesh(new THREE.CylinderGeometry(15, 15, 40, 100), new THREE.MeshNormalMaterial());
        Cylinder3.rotation.x = Math.PI / 2;
        Cylinder3.position.set(140, 0, 15);
        link2mesh.add(Cylinder3);
		
		Box1 = new THREE.Mesh(new THREE.BoxGeometry(40, 50, 40, 100), new THREE.MeshNormalMaterial());
        //Box.rotation.x = Math.PI / 2;
        Box1.position.set(0, -20, 0);
        Cylinder3.add(Box1);
		
		
		Cylinder4 = new THREE.Mesh(new THREE.CylinderGeometry(15, 15, 40, 100), new THREE.MeshNormalMaterial());
        Cylinder4.rotation.x = Math.PI / 2;
        Cylinder4.position.set(-140, 0, 15);
        link2mesh.add(Cylinder4);
		
		Box2 = new THREE.Mesh(new THREE.BoxGeometry(40, 50, 40, 100), new THREE.MeshNormalMaterial());
        //Box.rotation.x = Math.PI / 2;
        Box2.position.set(0, -20, 0);
        Cylinder4.add(Box2);
		
        });

		
		
		
        this.loader = new THREE.STLLoader();
        this.loader.load('oh4.stl', function (geometry) {
            link3material = new THREE.MeshBasicMaterial({color: 0x660000});
            link3mesh = new THREE.Mesh(geometry, link3material);
            //link2mesh.rotation.z = -Math.PI / 6;
            link3mesh.position.set(140, -130, 300);
            oldham.scene.add(link3mesh);

        });
//         this.loader = new THREE.STLLoader();
        this.loader.load('oh4 - Copy.stl', function (geometry) {
            link4material = new THREE.MeshBasicMaterial({color: 0x660000});
            link4mesh = new THREE.Mesh(geometry, link4material);
            //link2mesh.rotation.z = -Math.PI / 6;
            link4mesh.position.set(0, -130, 20);
            oldham.scene.add(link4mesh);

        });
        Box = new THREE.Mesh(new THREE.BoxGeometry(500, 500, 50, 100), new THREE.MeshBasicMaterial({color: 0x663300}));
        Box.rotation.x = Math.PI / 2;
        Box.position.set(0, -360, 180);
        oldham.scene.add(Box);

        this.container.addEventListener('mouseover', onContainerMouseOver, false);
        this.container.addEventListener('mouseout', onContainerMouseOut, false);

//        document.addEventListener('mousemove', onContainerMouseMove, false);
//        document.addEventListener('mousedown', onContainerMouseDown, false);
//        document.addEventListener('keydown', onContainerKeyDown, false);
//        document.addEventListener('keyup', onContainerKeyUp, false);
//        document.addEventListener('touchstart', onDocumentTouchStart, false);
//        document.addEventListener('touchmove', onDocumentTouchMove, false);
    }
};

function onContainerMouseOver() {
    oldham.controls.enabled = true;
}
function onContainerMouseOut() {
    oldham.controls.enabled = false;
}
// Animate the scene
function animate() {
    // Cylinder1.rotation.y += 0.2 / 2;
    //Cylinder2.rotation.z += 0.2;
    requestAnimationFrame(animate);
    oldham.renderer.render(oldham.scene, oldham.camera);
    update();
    render();
}
// Update controls and stats
function update() {
//    AXISCubeScene.controls.update(AXISCubeScene.clock.getDelta());
    oldham.controls.update();
    // oldham.stats.update();
}
// Render the scene
function render() {
    if (oldham.renderer) {
        oldham.renderer.render(oldham.scene, oldham.camera);
        //link2mesh.rotation.z = +10;
    }

}
//function move() {
////    animate();
////    Cylinder1.rotation.y += 0.2 / 2;
////    Cylinder2.rotation.z += 0.2;
//    animate = false;
////    requestAnimationFrame(animate);
////    oldham.renderer.render(oldham.scene, oldham.camera);
////    update();
////    render();
//}
//function move2() {
//    // animate();
//    //initializeSimulation()
//    animate();
//    // requestAnimationFrame(move);
////    oldham.renderer.render(oldham.scene, oldham.camera);
////    update();
////    render();
//}

var curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-10, 0, 0),
        new THREE.Vector3(-5, 15, 0),
        new THREE.Vector3(20, 15, 0),
        new THREE.Vector3(10, 0, 0)
        );

var geometry = new THREE.Geometry();
geometry.vertices = curve.getPoints(50);

var material = new THREE.LineBasicMaterial({color: 0xff0000});

// Create the final Object3d to add to the scene
var curveObject = new THREE.Line(geometry, material);