# Continuing with Grunt, our new friend

Grunt ended up very easy for using existing plugins and tasks, but I wonder how difficult is to write our own task descriptions and plugins? (which contains tasks).

Well, I found a good [blog post](http://adrianmejia.com/blog/2014/10/07/grunt-js-tutorial-from-beginner-to-ninja/) in how to do this.

To create a task we continue using the same `defineTask` method for the `grunt` object but we simply define the task and no the tasks we want to execute. Simple. To execute the specific task we pass the task name together in the command line so:

```js
module.exports = function(grunt) {
    grunt.registerTask('hello', 'Sample description for hello', function() {
        console.log('oh hai!');
    });
}
```

And to execute we simple issue

    grunt hello

Now, the guidance with the [Grunt API](http://gruntjs.com/api/grunt) is pretty good and it is a must read.

One important thing to notice is the difference between simple tasks and [multi tasks](http://gruntjs.com/api/inside-tasks), just be careful with that!.

Tasks can be async as well, a nice thing to have. One thing to be careful is the piping of file output. There is not pipe support as in Gulp but we need to generate temporary files in our way to get the temporary output.

There is a big differences between Grunt and Gulp (and more recently [Broccoli](https://github.com/broccolijs/broccoli)) is the way to concatenate tasks, two good comparissons are [this blog post](http://jaysoo.ca/2014/01/27/gruntjs-vs-gulpjs/) and [this comparisson](http://blog.cozycloud.cc/technic/2014/06/18/task-runners-comparison/).

