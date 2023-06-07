type UserAddressGeoType = {
  lat: string,
  lng: string
}
type UserAddressType = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: UserAddressGeoType
}

export type UsersType = {
  id: 1,
  name: string,
  username: string,
  email: string,
  address: UserAddressType
}