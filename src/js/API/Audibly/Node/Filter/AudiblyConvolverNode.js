/**
 * Class representing an AudiblyConvolverNode
 * Wrapper for ConvolverNode - https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode
 * @author Craig Harvie <craig@craigharvie.me>
 *
 * @description
 * The ConvolverNode interface is an AudioNode that performs a Linear
 * Convolution on a given AudioBuffer, often used to achieve a reverb effect.
 * A ConvolverNode always has exactly one input and one output.
 */

import AudiblyNode from '../AudiblyNode';
import Exception from '../../../Exception';

export default class AudiblyConvolverNode extends AudiblyNode {


	/**
   * Create an AudiblyConvolverNode instance.
   * @param {object} options
   */
	constructor( options={} ) {

		// Convolver node
		let node = window.AudiblyContext.createConvolver();

		// Check options
		if ( options.buffer ) {
			try {
				node.buffer = options.buffer;
			} catch ( e ) {
				throw new Exception( 'AudiblyConvolverNode', 'Invalid \'buffer\' option passed in.', e );
			}
		}

		if ( options.normalize ) {
			node.normalize = options.normalize;
		}

		super( options, node );

		return this;
	}


}
