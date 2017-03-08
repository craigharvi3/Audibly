/**
 * Class representing an AudiblyBiquadFilterNode
 * Wrapper for BiquadFilterNode - https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode
 * @author Craig Harvie <craig@craigharvie.me>
 *
 * @description
 * The BiquadFilterNode interface represents a simple low-order filter.
 * It is an AudioNode that can represent different kinds of filters, tone
 * control devices, or graphic equalizers. A BiquadFilterNode always has
 * exactly one input and one output.
 */

import AudiblyNode from '../AudiblyNode';
import Exception from '../../../Exception';

// Accepted options
const TYPE_VALUES = [ 'lowpass', 'highpass', 'bandpass', 'lowshelf', 'highshelf', 'peaking', 'notch', 'allpass' ];

class AudiblyBiquadFilterNode extends AudiblyNode {


	/**
   * Create an AudiblyBiquadFilterNode instance.
   * @param {object} options
   */
	constructor( options={} ) {

		// BiquadFilter node
		let node = window.AudiblyContext.createBiquadFilter();

		// Check options
		if ( options.frequency ) {
			if ( options.frequency < node.frequency.minValue || options.frequency > node.frequency.maxValue ) {
				throw new Exception( 'AudiblyBiquadFilterNode', `Invalid 'frequency' option passed in. This value must be between ${node.frequency.minValue} and ${node.frequency.maxValue}.` );
			}
			node.frequency.value = options.frequency;
		}

		if ( options.detune ) {
			if ( options.detune < node.detune.minValue || options.detune > node.detune.maxValue ) {
				throw new Exception( 'AudiblyBiquadFilterNode', `Invalid 'detune' option passed in. This value must be between ${node.detune.minValue} and ${node.detune.maxValue}.` );
			}
			node.detune.value = options.detune;
		}

		if ( options.type ) {
			if ( TYPE_VALUES.indexOf( options.type ) === -1 ) {
				throw new Exception( 'AudiblyBiquadFilterNode', `Invalid 'type' option passed in. Accepted values are ${TYPE_VALUES.join( ', ' )}.` );
			}
			node.type = options.type;
		}

		if ( options.Q ) {
			if ( options.Q < node.Q.minValue || options.Q > node.Q.maxValue ) {
				throw new Exception( 'AudiblyBiquadFilterNode', `Invalid 'Q' option passed in. This value must be between ${node.Q.minValue} and ${node.Q.maxValue}.` );
			}
			node.Q.value = options.Q;
		}

		if ( options.gain ) {
			if ( options.gain < node.gain.minValue || options.gain > node.gain.maxValue ) {
				throw new Exception( 'AudiblyBiquadFilterNode', `Invalid 'gain' option passed in. This value must be between ${node.gain.minValue} and ${node.gain.maxValue}.` );
			}
			node.gain.value = options.gain;
		}

		super( options, node );

		return this;
	}


}

module.exports = AudiblyBiquadFilterNode;
