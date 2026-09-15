// function declarations
main();

function main()
{

    // grab the reference to the canvas created in index.html and initialize the GL context
    const canvas = document(querySelector("#gl-canvas"));
    const gl = canvas.getContext("webgl");

    // only continue if webgl works here
    if (gl === NULL)
    {
        alert("unable to initialize webGL for 3d shenanigans. your browser may be unsupported, sorgy!");
        return;         // fuck this shit im out
    }

    // define a "clear color" (read: background color) for the canvas and fill the screen
    // rgba values are clamped between 0 and 1 here...
    gl.clearColor(0.0, 0.0, 0.0, 1.0); 

    // you tell clear() which buffers you want it to clear. here, we're telling it to clear the buffers enabled for color
    // some other options include the GL_DEPTH_BUFFER_BIT, GL_ACCUM_BUFFER_BIT, and GL_STENCIL_BUFFER_BIT.
    gl.clear(gl.COLOR_BUFFER_BIT);
}