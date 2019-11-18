const herokuBaseURL = 'https://express-scaffolding-sqlite-pos.herokuapp.com'
const localhostBaseURL =  'http://localhost:4400'

// this allows react to figure out
// whether to use local or heroku URL for the calls to the API
export function withBaseURL(endpoint) {
  return process.env.NODE_ENV === 'production'
    ? herokuBaseURL + endpoint
    : localhostBaseURL + endpoint
}
