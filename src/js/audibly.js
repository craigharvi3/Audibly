/**
 * audibly.js
 * @author Craig Harvie <craig@craigharvie.me>
 */


import AudiblyContext from 'modules/Audibly/Context';
import Downloader from 'modules/Downloader';


window.Audibly = class Audibly {


	/**
   * Create a audibly instance.
   * @param {array} audio - array of audio objects ({id: 1, url: 'http://audio.com/2.wav'}).
   */
	constructor( options={} ) {

		// Setup variables
		this.options = options;
		this.context = new AudiblyContext();
		this.buffers = {};
		this.sources = {};

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
	getSourceNode( id ) {
		return this.sources[ id ];
	}

};
