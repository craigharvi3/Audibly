/**
 * Class representing an Exception
 * @author Craig Harvie <craig@craigharvie.me>
 */
export default class Exception {


	/**
   * Create an Exception.
   */
	constructor( type, message ) {
		this.type = type;
		this.message = message;
		this.toString = function() {
			return `${this.type}: ${this.message}`;
		};
	}


}
