/**
 * audibly.js
 * @author Craig Harvie <craig@craigharvie.me>
 */


import AudiblyContext from 'API/Audibly/AudiblyContext';
import Downloader from 'API/Downloader';
import AudiblyNode from 'API/Audibly/Node/AudiblyNode';
import AudiblyAudioBufferSourceNode from 'API/Audibly/Node/Source/AudiblyAudioBufferSourceNode';
import AudiblyOscillatorNode from 'API/Audibly/Node/Source/AudiblyOscillatorNode';
import AudiblyBiquadFilterNode from 'API/Audibly/Node/Filter/AudiblyBiquadFilterNode';
import AudiblyConvolverNode from 'API/Audibly/Node/Filter/AudiblyConvolverNode';

window.AudiblyContext = new AudiblyContext();
window.AudiblyNode = AudiblyNode;
window.AudiblyAudioBufferSourceNode = AudiblyAudioBufferSourceNode;
window.AudiblyOscillatorNode = AudiblyOscillatorNode;
window.AudiblyBiquadFilterNode = AudiblyBiquadFilterNode;
window.AudiblyConvolverNode = AudiblyConvolverNode;
window.Audibly = class Audibly {


	/**
   * Create a audibly instance.
   * @param {array} audio - array of audio objects ({id: 1, url: 'http://audio.com/2.wav'}).
   */
	constructor( options={} ) {


		// Setup variables
		this.options = options;
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


