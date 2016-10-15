# spotify-search [![stability][0]][1]
[![npm version][2]][3] [![downloads][4]][5] [![js-standard-style][6]][7]

Get Spotify catalog information about artists, albums, tracks or playlists that match a keyword string.

## Usage
```js
const search = require('spotify-search')

search({q: 'Never Gonna Give You Up', type: 'track'}).then(function(res) {
  console.log(res.tracks)
})
```

## Installation
```sh
$ npm install spotify-search
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/spotify-search.svg?style=flat-square
[3]: http://img.shields.io/npm/dm/spotify-search.svg?style=flat-square
[4]: https://npmjs.org/package/spotify-search
[5]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[6]: https://github.com/feross/standard