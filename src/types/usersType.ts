type userAddressGeoType = {
  lat: string,
  lng: string
}
type userAddressType = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: userAddressGeoType
}

export type usersType = {
  id: 1,
  name: string,
  username: string,
  email: string,
  address: userAddressType
}