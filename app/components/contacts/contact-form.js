import Ember from 'ember';

export default Ember.Component.extend({

  isNew: false,
  isShowing: false,
  isEditing: false,

  isNameEmpty: Ember.computed('model.name', function() {return Ember.isBlank(this.get('model.name'));}),
  isPhoneEmpty: Ember.computed('model.phone', function() {return Ember.isBlank(this.get('model.phone'));}),

  nothingThere: Ember.computed.or('isNameEmpty', 'isPhoneEmpty'),

  isDisabled: Ember.computed.or('nothingThere', 'model.isSaving'),

  actions: {
    buttonClicked() {
      this.sendAction('action', this.get('model'));
    }
  }


});
