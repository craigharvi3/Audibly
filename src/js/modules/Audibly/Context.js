/**
 * Class representing an AudiblyContext
 * Wrapper for AudioContext - https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
 * @author Craig Harvie <craig@craigharvie.me>
 *
 * @description
 * The AudioContext interface represents an audio-processing graph built
 * from audio modules linked together, each represented by an AudioNode.
 * An audio context controls the creation of the nodes it contains and the
 * execution of the audio processing, or decoding.
 * You need to create an AudioContext before you do anything else,
 * as everything happens inside a context.
 */

import Exception from '../Exception';

export default class AudiblyContext {


	/**
   * Create an AudiblyContext.
   */
	constructor() {

		// Create AudioContext
		let AudioContext = window.AudioContext || window.webkitAudioContext;
		if ( AudioContext ) {
			this.context = new AudioContext();
		} else {
			throw new Exception( 'AudiblyContextException', 'Unable to create Web Audio API AudioContext. This may be down to an out of date browser.' );
		}

		return this.context;
	}

}
