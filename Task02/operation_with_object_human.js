const human = {
  fullName: {
    get: function() {
      return firstName + '' + lastName
    },
    set: function(value) {
      [this.firstName, this.lastName] = value.split(' ')
    },
  },

  dateOfBirth: {
    set: function(value) {
      this.age = new Date().getFullYear() - this
    },
  }
};
