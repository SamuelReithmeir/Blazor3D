# Blazor3D-Core
Blazor component that displays 3D things :) 

Blazor + ThreeJS = Blazor3D

You can find the documentation and examples of using Blazor3D [here](https://github.com/HomagGroup/Blazor3D)

# Changes from Original HomagGroup/Blazor3D
* Added support for ShaderMaterial to allow for custom fragement/vertexShader
* Added support RawBufferGeometry to allow for setting of vertices/indices directly
* Added support for changing position/rotation/scale of objects based on uuid without rebuilding scene
* Added support for TextureMaterial for Meshes
* Added support for direct mouse events for objects: ObjectClicked,ObjectHovered,ObjectHoverEnd

## Build Instructions
### Build the Javascript bundle using webpack
* From a node.js command prompt, navigate to `Blazor3D-Core\src\javascript`
* Run `npx webpack --mode production`
* A `bundle.js` will be created inside `Blazor3D-Core\src\dotnet\Blazor3D\Blazor3D\wwwroot\js` which Blazor can reference

### Build the dotnet assembly 
* Build the csproj from VSCode or Visual Studio
* `dotnet pack` to package into a `nupkg`
