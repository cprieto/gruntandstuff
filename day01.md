# In the beginning...

Well, first I think we need a nodejs installation but, which version? hey, the other day I even heard there is a fork of NodeJS named [IOJS](http://iosjs.org), what if I want that instead? OMG, would that thing be available in my Mac? what if I want to test and do all of this in my Linux machine (that is what I use everyday for coding learning purposes)...

## Enters NVM

I remember when I started learning Python there was this big issue with the Python version and the needed libraries... And then somebody had the great idea of VirtualEnv... Well, [NVM](https://github.com/creationix/nvm) is like VirtualEnv but for NodeJS. Installing it is easy:

    curl https://raw.githubusercontent.com/creationix/nvm/v0.23.3/install.sh | bash

Done... Now, if you want to use iojs just issue `nvm install iojs` and then switch between versions with `nvm use iojs`, if you are not sure which versions are available a simple `nvm ls-remote` would tell you (while `nvm ls` will tell you the local versions installed).

> An important part is that every installation with NVM carries its own NPM installation too, this is _so awesome_ because allows us to have our own isolation in packages. Yay!

## Time for NPM

Well, I found a few good [npm](https://www.npmjs.com/) tutorials here:
 * [One from digital ocean](https://www.digitalocean.com/community/tutorials/how-to-use-npm-to-manage-node-js-packages-on-a-linux-server)
 * [This one](http://learnwebtutorials.com/first-basic-tutorial-on-using-node-package-manager-npm) that is too basic for my taste (but it is Windows based)

Ok, something I was not aware is that by default npm installs the packages _locally_ in your project. For example, if your code is in `~/myproject` then by default using node will install the package under `~/myproject/node_modules`

If you want to install the package _everywhere for your system_ (or in this particular case, for that nvm environment anyway) then you have to explicitly pass `-g` or `--global`

A good example of this is just checking the **installed packages** in the current project with `npm ls` (which in an empty project _should_ return nothing) compared with the global packages installed (`npm ls -g` which should return a lot).

Npm can also install executables, to see where are they located go and issue `npm bin` and this will return the whole path. Talking about paths, play with `npm root` and `npm prefix` :)

To find a package to install use `npm search` but you know, results can be a lot and hard to read, so better go to the npm website and search for the package to install with the correct name (like nugets).

An interesting thing is the linking of packages. If we want a global package to be available as well to our local package (and not installing the package locally) we can _link_ the installation. For example:

    npm link express

Or we can install express locally and make our packages global with just

    npm link

### Dependencies

Npm will install dependencies needed by other packages, but it is interesting how they handle the dependencies. Contrary than package managers like [nuget](http://nuget.org) where dependencies are installed individually and at the same level as the dependant package, in npm it install the dependencies _for the package requesting it_ under the requested package directory.

For example, given that package1 depends on dep1 and dep2 the directory structure will look like:

    ~/projectdir/node_modules/package1
    ~/projectdir/node_modules/package1/dep1
    ~/projectdir/node_modules/package1/dep2
    ~/projectdir/node_modules/package2
    ~/projectdir/node_modules/package2/dep1

Of course, if another package depends on dep1 we will end up with two versions of dep1 in the directory... We can get rid of that with `npm dedupe` which (if not conflict is detected between versions) will upgrade dep1 as a a primary dependency

    ~/projectdir/node_modules/package1
    ~/projectdir/node_modules/package1/dep2
    ~/projectdir/node_modules/package2
    ~/projectdir/node_modules/dep1

Clever, isn't it?

The problem could occur if we remove package1 and package2 and then we actually don't use dep1 at all... we can correct this issue _pruning_ the installed packages with `npm prune`

Finding outdated packages is actually easy with `npm outdated` but upgrading the package is not as easy with `npm upgrade` because we manually have to update the package description file (which contain info about our current dependencies).