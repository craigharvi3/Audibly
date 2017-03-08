/**
 * Class representing an AudiblyDynamicsCompressorNode
 * Wrapper for DynamicsCompressorNode - https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode
 * @author Craig Harvie <craig@craigharvie.me>
 *
 * @description
 * The DynamicsCompressorNode interface provides a compression effect, which
 * lowers the volume of the loudest parts of the signal in order to help prevent
 * clipping and distortion that can occur when multiple sounds are played and
 * multiplexed together at once.
 */

import AudiblyNode from '../AudiblyNode';
import Exception from '../../../Exception';

class AudiblyDynamicsCompressorNode extends AudiblyNode {


	/**
   * Create an AudiblyDynamicsCompressorNode instance.
   * @param {object} options
   */
	constructor( options={} ) {

		// DynamicsCompresso node
		let node = window.AudiblyContext.createDynamicsCompressor();

		// Check options
		if ( options.threshold ) {
			if ( options.threshold < node.threshold.minValue || options.threshold > node.threshold.maxValue ) {
				throw new Exception( 'AudiblyDynamicsCompressorNode', `Invalid 'threshold' option passed in. This value must be between ${node.threshold.minValue} and ${node.threshold.maxValue}.` );
			}
			node.threshold.value = options.threshold;
		}

		if ( options.knee ) {
			if ( options.knee < node.knee.minValue || options.knee > node.knee.maxValue ) {
				throw new Exception( 'AudiblyDynamicsCompressorNode', `Invalid 'knee' option passed in. This value must be between ${node.knee.minValue} and ${node.knee.maxValue}.` );
			}
			node.knee.value = options.knee;
		}

		if ( options.ratio ) {
			if ( options.ratio < node.ratio.minValue || options.ratio > node.ratio.maxValue ) {
				throw new Exception( 'AudiblyDynamicsCompressorNode', `Invalid 'ratio' option passed in. This value must be between ${node.ratio.minValue} and ${node.ratio.maxValue}.` );
			}
			node.ratio.value = options.ratio;
		}

		if ( options.attack ) {
			if ( options.attack < node.attack.minValue || options.attack > node.attack.maxValue ) {
				throw new Exception( 'AudiblyDynamicsCompressorNode', `Invalid 'attack' option passed in. This value must be between ${node.attack.minValue} and ${node.attack.maxValue}.` );
			}
			node.attack.value = options.attack;
		}

		if ( options.release ) {
			if ( options.release < node.release.minValue || options.release > node.release.maxValue ) {
				throw new Exception( 'AudiblyDynamicsCompressorNode', `Invalid 'release' option passed in. This value must be between ${node.release.minValue} and ${node.release.maxValue}.` );
			}
			node.release.value = options.release;
		}

		super( options, node );

		return this;
	}


	/**
   * Updates the threshold of the node
   * @param {number} value
   */
	setThreshold( value=-24 ) {

		if ( value < this.node.threshold.minValue || value > this.node.threshold.maxValue ) {
			throw new Exception( 'AudiblyDynamicsCompressorNode', `Invalid 'threshold' option passed in. This value must be between ${this.node.threshold.minValue} and ${this.node.threshold.maxValue}.` );
		}

		this.node.threshold.value = value;
	}


	/**
   * Updates the knee of the node
   * @param {number} value
   */
	setKnee( value=30 ) {

		if ( value < this.node.knee.minValue || value > this.node.knee.maxValue ) {
			throw new Exception( 'AudiblyDynamicsCompressorNode', `Invalid 'knee' option passed in. This value must be between ${this.node.knee.minValue} and ${this.node.knee.maxValue}.` );
		}

		this.node.knee.value = value;
	}


	/**
   * Updates the ratio of the node
   * @param {number} value
   */
	setRatio( value=12 ) {

		if ( value < this.node.ratio.minValue || value > this.node.ratio.maxValue ) {
			throw new Exception( 'AudiblyDynamicsCompressorNode', `Invalid 'ratio' option passed in. This value must be between ${this.node.ratio.minValue} and ${this.node.ratio.maxValue}.` );
		}

		this.node.ratio.value = value;
	}


	/**
   * Updates the attack of the node
   * @param {number} value
   */
	setAttack( value=0.003 ) {

		if ( value < this.node.attack.minValue || value > this.node.attack.maxValue ) {
			throw new Exception( 'AudiblyDynamicsCompressorNode', `Invalid 'attack' option passed in. This value must be between ${this.node.attack.minValue} and ${this.node.attack.maxValue}.` );
		}

		this.node.attack.value = value;
	}


	/**
   * Updates the release of the node
   * @param {number} value
   */
	setRelease( value=-24 ) {

		if ( value < this.node.release.minValue || value > this.node.release.maxValue ) {
			throw new Exception( 'AudiblyDynamicsCompressorNode', `Invalid 'release' option passed in. This value must be between ${this.node.release.minValue} and ${this.node.release.maxValue}.` );
		}

		this.node.release.value = value;
	}


}


module.exports = AudiblyDynamicsCompressorNode;
