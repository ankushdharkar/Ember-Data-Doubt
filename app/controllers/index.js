import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({


	title: "[THIS title SHOULD BE REPLACED]",
	body: "[THIS body SHOULD BE REPLACED]",

	mCallMade() {

		let this_self = this;
		let randomUserId = Math.floor(Math.random() * 100);

		this.store.findRecord('my-user', randomUserId).then(function(data) {
			this_self.set('title', data.get('title'));
			this_self.set('body', data.get('body'));

			this_self.set('userId', data.get('userId')); // Where the doubt is, in the serializer
		});
	},

	actions: {
		makeCall() {
			this.mCallMade();
		}
	}

});