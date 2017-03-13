# audibly
An easy to use and powerful Web Audio API OO wrapper for controlling audio on the web.

> The Web Audio API provides a powerful and versatile system for controlling audio on the Web, allowing developers to choose audio sources, add effects to audio, create audio visualizations, apply spatial effects (such as panning)  and much more.
[https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

audibly looks to take all the wonderfullness that the Web Audio API offers and abstract it into a more intuitive and user friendly API.

Check our demo [here](http://craigharvie.me/audibly/demo/)

### API
Please see our JSDocs [here](http://craigharvie.me/audibly/jsdocs/)

### Node list
* BufferSource
* Oscillator
* Filter
* Reverb
* Delay
* Compressor
* Gain
* Panner

### Usage
Include javascript file
```html
<script type="text/javascript" src="audibly.min.js"></script>
```

You will then have access to all nodes listed above. To create a BufferSource node for example, you would call the following:

```javascript
new Audibly.BufferSource({
  url: './audio/music-loop.wav',
  playbackRate: playback,
  loop: true
}).then( bind, function( error ) {
  console.log(error)
} );
```

The `BufferSource` will return a promise - since it performs a http request to fetch the raw audio data. The promise success callback will return you the node to use - as shown [here](http://craigharvie.me/audibly/demo/) in the demo.

### Building source
Clone the repo and perform the following commands inside the audibly directory:

*Install node modules*
```
make install
```

*Build assets (also performs watch)*
```
make dev
```

*Fire up dev server*
```
make serve
```

Your server will be up and running at [http://localhost:8080/](http://localhost:8080/)

### Issues
We very much welcome collaborators so if you see any issues, file an issue [here](https://github.com/craigharvi3/audibly/issues) or create a PR and we'll review.

### Enjoy!
