(function() {
  if (typeof Promise === 'undefined') {
    self.Promise = Ember.RSVP.Promise;
  }
})();
