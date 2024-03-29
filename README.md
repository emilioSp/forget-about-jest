# forget-about-jest
<a href="https://www.buymeacoffee.com/emiliosp" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

Unpopular opinion, forget about Jest! 😔

I'm very sad to say this, because I have used it a lot in the past, and for a long time I considered it the best framework to test Node.js applications.

### Memory leaks
It suffers from serious memory leaks -> https://github.com/facebook/jest/issues/11956
This means that it is not suitable to be used with middle/big code repositories.

### ESM issues
It doesn't fully support ESM -> https://github.com/facebook/jest/issues/9430
In the past, I was forced to transform a module in a static class simply because otherwise mocks didn't work.

### Jest globals
The last straw is https://github.com/facebook/jest/issues/2549
Basically Jest VM differs from Node.js, but it is used to test Node.js applications. How can we consider it realiable?
To prove this last point, simply clone this repo and execute:

`npm run jest`
and then
`npm run assert` and see with your own eyes that, inside Jest, a caught Error is not an instance of Error 😵.

Thanks to Matteo Collina for sharing this https://www.twitch.tv/matteocollina/clip/CleverResourcefulFennelBabyRage-oGUFchiE1SAJIApU

### Bonus track
Jest is slower compared to other test frameworks like TAP.
x
## Future 🤔

If it is up to me I won't use Jest anymore to test Node.js applications. IMO we should embrace Node.js test framework shipped starting from v18 version 🚀
👉 https://nodejs.org/docs/latest-v18.x/api/test.html
