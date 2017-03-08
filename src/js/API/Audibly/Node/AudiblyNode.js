/**
 * Class representing an AudiblyNode
 * Wrapper for AudioNode - https://developer.mozilla.org/en-US/docs/Web/API/AudioNode
 * @author Craig Harvie <craig@craigharvie.me>
 *
 * @description
 * The AudioNode interface represents an audio-processing module like an
 * audio source (e.g. an HTML <audio> or <video> element), audio destination,
 * intermediate processing module (e.g. a filter like BiquadFilterNode,
 * or volume control like GainNode).
 */

import Exception from '../../Exception';

class AudiblyNode {


	/**
   * Create an AudiblyNode instance.
   * @param {object} options
   */
	constructor( options, node ) {
		this.node = node;
		return this;
	}


	/**
   * Connects to supplied destination node
   * @param {object} options
   */
	connect( destination=window.AudiblyContext.destination ) {
		try {
			this.node.connect( destination );
			return this;
		} catch ( e ) {
			throw new Exception( 'AudiblyNodeException', 'Unable to connect this node to destination. Please recreate the node and try again.', e );
		}
	}


	/**
   * Start playing node
   * @param {number} time to start playing
   */
	start( time=0 ) {
		try {
			this.node.start( time );
		} catch ( e ) {
			throw new Exception( 'AudiblyNodeException', 'start() can only be called on AudiblyNode instances exactly one time. You must recreate this node when playback is required again.' );
		}
	}


	/**
   * Stop playing node
   */
	stop() {
		try {
			this.node.stop();
		} catch ( e ) {
			throw new Exception( 'AudiblyNodeException', 'stop() can not be called on AudiblyNode instances without first calling start().' );
		}
	}


}

module.exports = AudiblyNode;
