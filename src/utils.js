const API = "https://democraffic-backend.herokuapp.com"

// const API = "http://65.21.243.125:3000"
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


export const postFoto = async (file, id) => {
  const formData = new FormData();
  formData.append("media", file);
  const requestOptions = {
    method: 'POST',
    body: formData
  };
  const resp = await fetch(API + `/api/reports/${id}/media`, requestOptions)
  return resp.json()
}
