import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
	userId: attr('number'),
	title: attr('string'),
	body: attr('string')
});
