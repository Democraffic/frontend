const API = "https://democraffic-backend.herokuapp.com"
export const get = async (path) => {
  const resp = await fetch(API + path)
  return resp.json()
}


export const post = async (path, data) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
  const resp = await fetch(API + path, requestOptions)
  return resp.json()
}
