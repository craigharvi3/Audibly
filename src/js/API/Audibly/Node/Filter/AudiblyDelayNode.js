/**
 * Class representing an AudiblyDelayNode
 * Wrapper for DelayNode - https://developer.mozilla.org/en-US/docs/Web/API/DelayNode
 * @author Craig Harvie <craig@craigharvie.me>
 *
 * @description
 * The DelayNode interface represents a delay-line; an AudioNode
 * audio-processing module that causes a delay between the arrival
 * of an input data and its propagation to the output.
 */

import AudiblyNode from '../AudiblyNode';
import Exception from '../../../Exception';

class AudiblyDelayNode extends AudiblyNode {


	/**
   * Create an AudiblyDelayNode instance.
   * @param {object} options
   */
	constructor( options={} ) {

		let node;

		// Check options
		if ( options.maxDelayTime ) {
			try {
				// Delay node
				node = window.AudiblyContext.createDelay( options.maxDelayTime );
			} catch ( e ) {
				throw new Exception( 'AudiblyDelayNode', 'Invalid \'maxDelayTime\' option passed in.', e );
			}
		} else {
			node = window.AudiblyContext.createDelay();
		}

		if ( options.delayTime ) {
			if ( options.delayTime < node.delayTime.minValue || options.delayTime > node.delayTime.maxValue ) {
				throw new Exception( 'AudiblyDelayNode', `Invalid 'delayTime' option passed in. This value must be between ${node.delayTime.minValue} and ${node.delayTime.maxValue}.` );
			}
			node.delayTime.value = options.delayTime;
		}

		super( options, node );

		return this;
	}


	/**
   * Updates the delay time of the node
   * @param {number} value
   */
	setDelayTime( value=0 ) {

		if ( value < this.node.delayTime.minValue || value > this.node.delayTime.maxValue ) {
			throw new Exception( 'AudiblyDelayNode', `Invalid 'delayTime' option passed in. This value must be between ${this.node.delayTime.minValue} and ${this.node.delayTime.maxValue}.` );
		}

		this.node.delayTime.value = value;
	}


}


module.exports = AudiblyDelayNode;
