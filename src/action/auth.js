import jwt_decode from "jwt-decode";

export const decodedToken = (token) => {
  const decoded = jwt_decode(token)

  if(decoded.aud != "fir-example-8ef3b"){
    return null
  }

  return decoded
}