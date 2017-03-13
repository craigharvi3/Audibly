/**
 * Class representing an AudiblyAudioBufferSourceNode
 * Wrapper for AudioBufferSourceNode - https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode
 * @author Craig Harvie <craig@craigharvie.me>
 *
 * @description
 * The AudioBufferSourceNode interface represents an audio source
 * consisting of in-memory audio data, stored in an AudioBuffer.
 * It is an AudioNode that acts as an audio source.
 */

import AudiblyNode from '../AudiblyNode';
import Exception from '../../../Exception';

class AudiblyAudioBufferSourceNode extends AudiblyNode {


	/**
	 * Create an AudiblyAudioBufferSourceNode instance.
	 * @param {object} options
	 */
	constructor( options={} ) {

		let node = window.AudiblyContext.createBufferSource();

		super( options, node );

		if ( !options.url ) {
			return this;
		}

		// We'll return a promise from the constructor
		let promise = new Promise( ( resolve, reject ) => {

			// Make http request to parse audio file
			var request = new XMLHttpRequest();
			request.open( 'GET', options.url, true );
			request.responseType = 'arraybuffer';

			request.onload = () => {

				window.AudiblyContext.decodeAudioData( request.response )
					.then( ( decodedData ) => {

						this.node.buffer = decodedData;

						// Set options if provided
						if ( options.playbackRate ) {
							if ( options.playbackRate < node.playbackRate.minValue || options.playbackRate > node.playbackRate.maxValue ) {
								throw new Exception( 'AudiblyAudioBufferSourceNode', `Invalid 'playbackRate' option passed in. This value must be between ${node.playbackRate.minValue} and ${node.playbackRate.maxValue}.` );
							}
							this.node.playbackRate.value = options.playbackRate;
						}

						if ( options.loop ) {
							this.node.loop = options.loop;
						}

						// All good, resolve
						resolve( this );
					} );
			};

			request.onerror = ( e ) => {
				reject( { error: e } );
			};

			request.send();

		} );

		return promise;
	}


	/**
	 * Updates the playback rate of the node
	 * @param {number} value - range from 0 - 5
	 */
	setPlaybackRate( value=1 ) {

		if ( value < this.node.playbackRate.minValue || value > this.node.playbackRate.maxValue ) {
			throw new Exception( 'AudiblyAudioBufferSourceNode', `Invalid 'playbackRate' option passed in. This value must be between ${this.node.playbackRate.minValue} and ${this.node.playbackRate.maxValue}.` );
		}

		this.node.playbackRate.value = value;
	}


}


module.exports = AudiblyAudioBufferSourceNode;
