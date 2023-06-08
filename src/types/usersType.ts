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

type UserCompanyType = {
  name: string
  bs: string
  catchPhrase: string
}

export type UsersType = {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string
  website: string
  address: UserAddressType
  company: UserCompanyType
}