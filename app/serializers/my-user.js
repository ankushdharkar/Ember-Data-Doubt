import DS from 'ember-data';

export default DS.Serializer.extend({

	serialize(snapshot, options){

		var json = this._super(...arguments);
		return json;
	},

	normalizeResponse(store, primaryModelClass, payload, id, requestType) {

		var attrHash = {};
		attrHash['id'] = payload.id;


		/************ <Doubt> ************/

		attrHash['userId'] = payload['userId']; //Works
		// Shouldn't this be:
		// attrHash['user-id'] = payload['userId']; // Doesn't work, but is the JSONAPI spec

		/************ </Doubt> ************/


		attrHash['title'] = payload['title'];
		attrHash['body'] = payload['body'];

		let JSONAPIData = this.normalize(primaryModelClass, attrHash);
		return JSONAPIData;
	},

	normalize(modelClass, resourceHash) {
		var data = {
			id: resourceHash.id,
			type: modelClass.modelName,
			attributes: resourceHash
		};
		return { data: data };
	}

});