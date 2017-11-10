import $ from 'jquery';
import DS from 'ember-data';

export default DS.Adapter.extend({

	ajax: Ember.inject.service(),

	findRecord(store, type, id, snapshot) {

		let this_self = this;
		let apiRootURL = 'https://jsonplaceholder.typicode.com';
		let apiPath = "/posts/"+ id;
		let fullURL = apiRootURL + apiPath;

		return new Ember.RSVP.Promise( function(resolve, reject) {
			// Returns userId, id, title, body
			this_self.get('ajax').request(fullURL, {
				method: 'GET'
			})
			.then( response => resolve(response) )
			.catch( ({ response, jqXHR, payload }) => reject() );
		}); // return

	},

	/*
	createRecord(store, type, snapshot){

	},
	updateRecord(store, type, snapshot){

	},
	deleteRecord(store, type, snapshot){

	},
	findAll(store, type, sinceToken){

	},
	query(store, type, query){

	}, */

	// // [Optional], to increase speed
	// findMany(store, type, ids, snapshots){

	// }
});