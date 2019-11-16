const herokuBaseURL = 'https://express-scaffolding-sqlite-pos.herokuapp.com'
const localhostBaseURL =  'http://localhost:4400'

export function withBaseURL(endpoint) {
  return process.env.NODE_ENV === 'production'
    ? herokuBaseURL + endpoint
    : localhostBaseURL + endpoint
}
