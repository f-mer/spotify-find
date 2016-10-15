const got = require('got')

module.exports = search

const endpoint = 'https://api.spotify.com/v1/search'

function search (query) {
  return got(endpoint, {query, json: true})
    .then((res) => res.body)
}
