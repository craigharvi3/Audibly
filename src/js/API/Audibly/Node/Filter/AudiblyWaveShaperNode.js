/**
 * Class representing an AudiblyWaveShaperNode
 * Wrapper for WaveShaperNode - https://developer.mozilla.org/en-US/docs/Web/API/WaveShaperNode
 * @author Craig Harvie <craig@craigharvie.me>
 *
 * @description
 * The WaveShaperNode interface represents a non-linear distorter.
 * It is an AudioNode that use a curve to apply a waveshaping distortion to t
 * he signal. Beside obvious distortion effects, it is often used to add a
 * warm feeling to the signal.
 */

import AudiblyNode from '../AudiblyNode';
import Exception from '../../../Exception';

class AudiblyWaveShaperNode extends AudiblyNode {


	/**
   * Create an AudiblyWaveShaperNode instance.
   * @param {object} options
   */
	constructor( options={} ) {

		// Wave shaper node
		let node = window.Audibly.Context.createWaveShaper();

		// Check options
		if ( options.curve ) {
			try {
				node.curve = options.curve;
			} catch ( e ) {
				throw new Exception( 'AudiblyWaveShaperNode', 'Invalid \'curve\' option passed in.', e );
			}
		}

		if ( options.oversample ) {
			try {
				node.oversample = options.oversample;
			} catch ( e ) {
				throw new Exception( 'AudiblyWaveShaperNode', 'Invalid \'oversample\' option passed in.', e );
			}
		}

		super( options, node );

		return this;
	}


}

module.exports = AudiblyWaveShaperNode;
