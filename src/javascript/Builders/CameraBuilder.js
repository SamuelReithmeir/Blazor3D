import * as THREE from "three";
import Transforms from "../Utils/Transforms";

class CameraBuilder {

  static BuildCamera(options,aspect) {
    let camera;
    if ((options.type == "PerspectiveCamera")) {
      camera = new THREE.PerspectiveCamera(
        options.fov,
        aspect,
        options.near,
        options.far
      );
    }

    if ((options.type == "OrthographicCamera")) {
      camera = new THREE.OrthographicCamera(
        options.left * (options.useJavascriptAspectCalculation?aspect:1),
        options.right * (options.useJavascriptAspectCalculation?aspect:1),
        options.top,
        options.bottom,
        options.near,
        options.far
      );
      camera.zoom = options.zoom;
    }

    camera.uuid = options.uuid;
    Transforms.setPosition(camera, options.position);
    Transforms.setRotation(camera, options.rotation);
    Transforms.setScale(camera, options.scale);
    camera.up = new THREE.Vector3(options.up.x, options.up.y, options.up.z);
    let {x, y, z} = options.lookAt;
    camera.lookAt(x, y, z);
    return camera;
  }
}

export default CameraBuilder;
