export interface ImageBlock {
  avatar: string,
  first_name: string,
  date_of_birth: string,
  employment: string
}
export interface MoreInfoBlock {
  first_name: string,
  last_name: string,
  date_of_birth: string,
  employment: MoreInfoBlockEmployment,
  phone_number: string,
  social_insurance_number: string,
  email: string,
  address: MoreInfoBlockAddress,
  subscription: MoreInfoBlockSubscription
}
interface MoreInfoBlockEmployment {
  title: string,
  key_skill: string
}
export interface MoreInfoBlockAddress {
  city: string,
  street_name: string,
  street_address: string,
  zip_code: string,
  state: string,
  country: string,
  coordinates: {
      lat: number,
      lng: number
  }
}
interface MoreInfoBlockSubscription {
  plan: string,
  status: string,
  payment_method: string,
  term: string
}