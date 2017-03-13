/**
 * Class representing an AudiblyOscillatorNode
 * Wrapper for OscillatorNode - https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode
 * @author Craig Harvie <craig@craigharvie.me>
 *
 * @description
 * The OscillatorNode interface represents a periodic waveform, such
 * as a sine or triangle wave. It is an AudioNode audio-processing
 * module that causes a given frequency of wave to be created.
 */

import AudiblyNode from '../AudiblyNode';
import Exception from '../../../Exception';

// Accepted options
const TYPE_VALUES = [ 'sine', 'square', 'sawtooth', 'triangle' ];

class AudiblyOscillatorNode extends AudiblyNode {


	/**
   * Create an AudiblyAudioBufferSourceNode instance.
   * @param {object} options
   */
	constructor( options={} ) {

		// Oscillator node
		let node = window.Audibly.Context.createOscillator();

		// Check options
		if ( options.frequency ) {
			if ( options.frequency < node.frequency.minValue || options.frequency > node.frequency.maxValue ) {
				throw new Exception( 'AudiblyOscillatorNode', `Invalid 'frequency' option passed in. This value must be between ${node.frequency.minValue} and ${node.frequency.maxValue}.` );
			}
			node.frequency.value = options.frequency;
		}

		if ( options.detune ) {
			if ( options.detune < node.detune.minValue || options.detune > node.detune.maxValue ) {
				throw new Exception( 'AudiblyOscillatorNode', `Invalid 'detune' option passed in. This value must be between ${node.detune.minValue} and ${node.detune.maxValue}.` );
			}
			node.detune.value = options.detune;
		}

		if ( options.type ) {
			if ( TYPE_VALUES.indexOf( options.type ) === -1 ) {
				throw new Exception( 'AudiblyOscillatorNode', `Invalid 'type' option passed in. Accepted values are ${TYPE_VALUES.join( ', ' )}.` );
			}
			node.type = options.type;
		}

		super( options, node );

		return this;
	}


	/**
   * Updates the type of the node
   * @param {string} type - range from 'sine', 'square', 'sawtooth', 'triangle'
   */
	setType( type='sine' ) {
		if ( TYPE_VALUES.indexOf( type ) === -1 ) {
			throw new Exception( 'AudiblyOscillatorNode', `Invalid 'type' option passed in. Accepted values are ${TYPE_VALUES.join( ', ' )}.` );
		}
		this.node.type = type;
	}


	/**
   * Updates the frequency of the node
   * @param {number} value - range from 0 to 6000
   */
	setFrequency( value=440 ) {
		if ( value < this.node.frequency.minValue || value > this.node.frequency.maxValue ) {
			throw new Exception( 'AudiblyOscillatorNode', `Invalid 'frequency' option passed in. This value must be between ${this.node.frequency.minValue} and ${this.node.frequency.maxValue}.` );
		}
		this.node.frequency.value = value;
	}

}


module.exports = AudiblyOscillatorNode;
