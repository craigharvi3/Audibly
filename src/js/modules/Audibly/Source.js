/**
 * Class representing an AudiblySource
 * Wrapper for AudioBufferSourceNode - https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode
 * @author Craig Harvie <craig@craigharvie.me>
 *
 * @description
 * The AudioBufferSourceNode interface represents an audio source consisting
 * of in-memory audio data, stored in an AudioBuffer.
 * It is an AudioNode that acts as an audio source.
 */

export default class AudiblySource {


	constructor( context, buffer ) {

		// Browser differences check
		if ( !context.createGain ) {
			context.createGain = context.createGainNode;
		}

		// Source node
		this.node = context.createBufferSource();
		this.node.playbackRate.value = 1;
		this.node.buffer = buffer;

		// Connect the context destination node to the gain node
		this.node.connect( context.destination );

		this.node.loop = true;

		return this;
	}




}

