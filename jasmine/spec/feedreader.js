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
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
         // making sure allFeeds model is defined
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         // checking allFeeds model for any empty url fields
         it('url is empty', function() {
           var allFeedsLength = allFeeds.length;
           expect(allFeedsLength).not.toBe(0);

           for(var x = 0; x < allFeedsLength; x++){
             var feedsUrl = allFeeds[x].url;

             expect(feedsUrl).not.toBe('');
             expect(feedsUrl).not.toBeNull();
             expect(feedsUrl).toBeDefined();
           }
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         // checking allFeeds model for any empty name fields
         it('name is empty', function() {
           var allFeedsLength = allFeeds.length;
           expect(allFeedsLength).not.toBe(0);

           for(var x = 0; x < allFeedsLength; x++){
             var feedsName = allFeeds[x].name;

             expect(feedsName).not.toBe('');
             expect(feedsName).not.toBeNull();
             expect(feedsName).toBeDefined();
           }
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

         // variable for body's class attribute to be used in both it()s
         var bodyClass = $('body').attr('class');
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         // check if body has the class which hides menu
         it('is hidden by default', function() {
            expect(bodyClass).toBe('menu-hidden');
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          // check if body has the class which shows menu on click
          // and hides menu on click
          it('visibility changes on menu icon click', function() {
            // make sure a element with this class exists on DOM
            expect($('.icon-list').length).not.toBe(0);

            $('.icon-list').trigger('click');
            expect(bodyClass).not.toBe('');
            $('.icon-list').trigger('click');
            expect(bodyClass).toBe('menu-hidden');
          });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         // call loadFeed() at index 0 and pass the done() ( aka waite function )
         beforeEach(function(done) {
           loadFeed(0, done);
         });

         // make sure at least one entry has been fetched and attached to DOM
         it('are fetched successfully', function(done) {
           expect($('.entry-link').length).not.toBe(0);
           done();
         });
    });
    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {

      // variables for two feed entries
      var firstFeed, secondFeed;
      /* TODO: Write a test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       * Remember, loadFeed() is asynchronous.
       */
       // call loadFeed() at index 0 and pass the done() ( aka waite function )
       beforeEach(function(done) {
         loadFeed(0, done);
       });

       // get the last two entries and make sure they are not the same
       it('is being loaded successfully', function(done) {
         var entryLength = $('.entry').length;
         // make sure a element with this class exists on DOM
         expect($('.entry').length).not.toBe(0);
         expect($('.entry')[entryLength-1].innerText).toBeDefined();
         expect($('.entry')[entryLength-2].innerText).toBeDefined();

         firstFeed = $('.entry')[entryLength-1].innerText;
         secondFeed= $('.entry')[entryLength-2].innerText;

         expect(firstFeed).not.toBe(secondFeed);
         done();
       });
    });
}());
