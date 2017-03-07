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

export default class AudiblyAudioBufferSourceNode extends AudiblyNode {


	/**
   * Create an AudiblyAudioBufferSourceNode instance.
   * @param {object} options
   */
	constructor( options={} ) {

		// Buffer source node
		let node = window.AudiblyContext.createBufferSource();

		// Check options
		if ( options.playbackRate ) {
			if ( options.playbackRate < node.playbackRate.minValue || options.playbackRate > node.playbackRate.maxValue ) {
				throw new Exception( 'AudiblyAudioBufferSourceNode', `Invalid 'playbackRate' option passed in. This value must be between ${node.playbackRate.minValue} and ${node.playbackRate.maxValue}.` );
			}
			node.playbackRate.value = options.playbackRate;
		}

		if ( options.buffer ) {
			node.buffer = options.buffer;
		}

		if ( options.loop ) {
			node.loop = options.loop;
		}

		super( options, node );

		return this;
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
