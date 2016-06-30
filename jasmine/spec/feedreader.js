/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

  describe('RSS Feeds', function() {

    // making sure allFeeds model is defined
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    // checking allFeeds model for any empty url fields
    it('url is empty', function() {
      var allFeedsLength = allFeeds.length;
      expect(allFeedsLength).not.toBe(0);

      for(var x = 0; x < allFeedsLength; x++) {
        var feedsUrl = allFeeds[x].url;

        expect(feedsUrl).not.toBe('');
        expect(feedsUrl).not.toBeNull();
        expect(feedsUrl).toBeDefined();
       }
    });

    // checking allFeeds model for any empty name fields
    it('name is empty', function() {
      var allFeedsLength = allFeeds.length;
      expect(allFeedsLength).not.toBe(0);

      for(var x = 0; x < allFeedsLength; x++) {
       var feedsName = allFeeds[x].name;

       expect(feedsName).not.toBe('');
       expect(feedsName).not.toBeNull();
       expect(feedsName).toBeDefined();
      }
     });
   });


   /* TODO: Write a new test suite named "The menu" */
   describe('The menu', function() {

     // variable for body to be used in both it()s
     var bodyClass = $('body');

     // check if body has the class which hides menu
     it('is hidden by default', function() {
        expect(bodyClass.hasClass('menu-hidden')).toBe(true);
     });

     // check if body has the class which shows menu on click
     // and hides menu on click
     it('visibility changes on menu icon click', function() {
       // make sure a element with this class exists on DOM
       expect($('.icon-list').length).not.toBe(0);

       $('.icon-list').trigger('click');
       expect(bodyClass.hasClass('menu-hidden')).toBe(false);
       $('.icon-list').trigger('click');
       expect(bodyClass.hasClass('menu-hidden')).toBe(true);
      });
    });

    describe('Initial Entries', function() {
      // call loadFeed() at index 0 and pass the done() ( aka wait function )
      beforeEach(function(done) {
       loadFeed(0, done);
      });

      // make sure at least one entry has been fetched and attached to DOM
      it('are fetched successfully', function() {
        expect($('.feed .entry').length).not.toBe(0);
      });
    });

    describe('New Feed Selection', function() {

      // variables for two feed entries
      var firstFeed, secondFeed;
      // call loadFeed() at index 0 and pass the done() ( aka wait function )
      beforeEach(function(done) {
       loadFeed(0, function() {
         firstFeed = $('.feed .entry')[0].innerText;
         loadFeed(1, function() {
           secondFeed= $('.feed .entry')[1].innerText;
           done();
         });
       });
      });

      // get the last two entries and make sure they are not the same
      it('is being loaded successfully', function() {
        var entryLength = $('.feed .entry').length;
        // make sure a element with this class exists on DOM
        expect($('.feed .entry').length).not.toBe(0);
        expect(firstFeed).not.toBe(secondFeed);
      });
    });
}());
