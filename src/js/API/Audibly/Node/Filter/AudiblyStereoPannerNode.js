/**
 * Class representing an AudiblyStereoPannerNode
 * Wrapper for StereoPannerNode - https://developer.mozilla.org/en-US/docs/Web/API/StereoPannerNode
 * @author Craig Harvie <craig@craigharvie.me>
 *
 * @description
 * The StereoPannerNode interface represents a simple stereo panner node
 * that can be used to pan an audio stream left or right.
 */

import AudiblyNode from '../AudiblyNode';
import Exception from '../../../Exception';

class AudiblyStereoPannerNode extends AudiblyNode {


	/**
   * Create an AudiblyStereoPannerNode instance.
   * @param {object} options
   */
	constructor( options={} ) {

		// Stereo Panner node
		let node = window.AudiblyContext.createStereoPanner();

		// Check options
		if ( options.pan ) {
			if ( options.pan < node.pan.minValue || options.pan > node.pan.maxValue ) {
				throw new Exception( 'AudiblyStereoPannerNode', `Invalid 'pan' option passed in. This value must be between ${node.pan.minValue} and ${node.pan.maxValue}.` );
			}
			node.pan.value = options.pan;
		}

		super( options, node );

		return this;
	}


	/**
   * Updates the pan of the node
   * @param {number} value
   */
	setPan( value=1 ) {

		if ( value < this.node.pan.minValue || value > this.node.pan.maxValue ) {
			throw new Exception( 'AudiblyStereoPannerNode', `Invalid 'pan' option passed in. This value must be between ${this.node.pan.minValue} and ${this.node.pan.maxValue}.` );
		}

		this.node.pan.value = value;
	}


}


module.exports = AudiblyStereoPannerNode;
