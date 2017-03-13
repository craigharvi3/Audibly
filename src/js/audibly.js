/**
 * audibly.js
 * @author Craig Harvie <craig@craigharvie.me>
 */


import 'extlibs/prism';
import AudiblyContext from 'API/Audibly/AudiblyContext';
import Downloader from 'API/Downloader';
import AudiblyNode from 'API/Audibly/Node/AudiblyNode';
import AudiblyAudioBufferSourceNode from 'API/Audibly/Node/Source/AudiblyAudioBufferSourceNode';
import AudiblyOscillatorNode from 'API/Audibly/Node/Source/AudiblyOscillatorNode';
import AudiblyBiquadFilterNode from 'API/Audibly/Node/Filter/AudiblyBiquadFilterNode';
import AudiblyConvolverNode from 'API/Audibly/Node/Filter/AudiblyConvolverNode';
import AudiblyDelayNode from 'API/Audibly/Node/Filter/AudiblyDelayNode';
import AudiblyDynamicsCompressorNode from 'API/Audibly/Node/Filter/AudiblyDynamicsCompressorNode';
import AudiblyGainNode from 'API/Audibly/Node/Filter/AudiblyGainNode';
import AudiblyStereoPannerNode from 'API/Audibly/Node/Filter/AudiblyStereoPannerNode';

window.Audibly = {
	Context: new AudiblyContext(),
	Node: AudiblyNode,
	BufferSource: AudiblyAudioBufferSourceNode,
	Oscillator: AudiblyOscillatorNode,
	Filter: AudiblyBiquadFilterNode,
	Reverb: AudiblyConvolverNode,
	Delay: AudiblyDelayNode,
	Compressor: AudiblyDynamicsCompressorNode,
	Gain: AudiblyGainNode,
	Panner: AudiblyStereoPannerNode
};

window.Audibly.Base = class Audibly {


	/**
   * Create a audibly instance.
   * @param {array} audio - array of audio objects ({id: 1, url: 'http://audio.com/2.wav'}).
   */
	constructor( options={}, context=window.Audibly.Context ) {


		// Setup variables
		this.options = options;
		this.context = context;
		this.buffers = {};


		// Process options
		this.options = Object.assign( {
			audio: [],
			callback: () => {}
		}, options );


		// Download any audio we have
		if ( this.options.audio.length ) {
			new Downloader( this, this.options.callback.bind( this ) );
		}


		return this;
	}


	/**
   * Gets a source node
   * @param {string} id
   */
	getBufferNode( id ) {
		return this.buffers[ id ];
	}


};


