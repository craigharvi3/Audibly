/**
 * Class representing an AudiblyGainNode
 * Wrapper for GainNode - https://developer.mozilla.org/en-US/docs/Web/API/GainNode
 * @author Craig Harvie <craig@craigharvie.me>
 *
 * @description
 * The GainNode interface represents a change in volume. It is an AudioNode
 * audio-processing module that causes a given gain to be applied to the input
 * data before its propagation to the output.
 */

import AudiblyNode from '../AudiblyNode';
import Exception from '../../../Exception';

class AudiblyGainNode extends AudiblyNode {


	/**
   * Create an AudiblyGainNode instance.
   * @param {object} options
   */
	constructor( options={} ) {

		// Gain node
		let node = window.AudiblyContext.createGain();

		// Check options
		if ( options.gain ) {
			if ( options.gain < node.gain.minValue || options.gain > node.gain.maxValue ) {
				throw new Exception( 'AudiblyGainNode', `Invalid 'gain' option passed in. This value must be between ${node.gain.minValue} and ${node.gain.maxValue}.` );
			}
			node.gain.value = options.gain;
		}

		super( options, node );

		return this;
	}


	/**
   * Updates the gain of the node
   * @param {number} value
   */
	setGain( value=1 ) {

		if ( value < this.node.gain.minValue || value > this.node.gain.maxValue ) {
			throw new Exception( 'AudiblyGainNode', `Invalid 'gain' option passed in. This value must be between ${this.node.gain.minValue} and ${this.node.gain.maxValue}.` );
		}

		this.node.gain.value = value;
	}


}


module.exports = AudiblyGainNode;
