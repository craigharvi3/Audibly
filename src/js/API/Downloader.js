/**
 * Class representing a Downloader
 * Download raw audio files
 * @author Craig Harvie <craig@craigharvie.me>
 */

import Exception from 'API/Exception';

export default class Downloader {


	/**
   * Create a Downloader.
   */
	constructor( audibly, completeCB ) {

		this.audibly = audibly;
		// Keep track of how many we have downloaded
		this.count = 0;
		this.complete = completeCB;

		// Loop through and download audio
		for ( let i=0; i<this.audibly.options.audio.length; i++ ) {

			var request = new XMLHttpRequest();

			try {
				request.open( 'GET', this.audibly.options.audio[ i ].url, true );
			} catch ( e ) {
				throw new Exception( 'AudiblyException', 'Please ensure you have provided a url for your audio' );
			}

			// We want raw data
			request.responseType = 'arraybuffer';

			request.onload = () => {
				// Asynchronously decode the audio file data in request.response
				window.AudiblyContext.decodeAudioData( request.response, this.success.bind( this, this.audibly.options.audio[ i ].id ), this.error );
			};

			request.onerror = () => {
				throw new Exception( 'AudiblyException', 'Please ensure you have provided a url for your audio' );
			};

			request.send();

		}
	}


	/**
   * Download of audio was successfull
   */
	success( id, buffer ) {
		this.audibly.buffers[ id ] = buffer;
		// this.audibly.sources[ id ] = new AudiblyAudioBufferSourceNode( {
		// 	buffer: buffer
		// } );
		if ( ++this.count === this.audibly.options.audio.length ) {
			this.complete();
		}
	}


	/**
   * Download of audio errored
   */
	error() {
		throw new Exception( 'AudiblyException', 'Download of audio errored. Please check your audio configuration' );
	}


}
