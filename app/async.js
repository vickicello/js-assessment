exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  //understand how to use promises to handle asynchronicity
  async: function(value) {
    let def = $.Deferred();
    setTimeout (function(){
      def.resolve(value);
    }, 10);
    return def.promise();
  },

  //retrieve data from the server and return a sorted array of names
  manipulateRemoteData: function(url) {
    let def = $.Deferred();
      $.ajax(url).then(function(response){
        let people = $.map(response.people, function(person){
          return person.name;
        });
        def.resolve(people.sort());
      });
      return def.promise();
  }
};
