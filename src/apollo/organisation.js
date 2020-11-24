import { gql } from '@apollo/client';

export const CreateOrganization = gql`
  mutation createOrganization(
    $name: String!
    $about: String
    $state: String
    $email: String!
    $address: String!
    $phone: String!
    $city: String!
    $zip: String!
    $country: String!
    $owner: [ID]
  ) {
    createOrganization(
      input: {
        data: {
          name: $name
          about: $about
          state: $state
          email: $email
          address: $address
          phone: $phone
          city: $city
          zip: $zip
          country: $country
          owner: $owner
        }
      }
    ) {
      organization {
        id
      }
    }
  }
`;
/**
 * Working Variables
{
  "zip": "335513",
  "city": "Hanumangarh Town",
  "name": "Twin Tower",
  "about": "Dream Project Blah Blah Blah",
  "phone": "+91 9999999999",
  "state": "Rajasthan",
  "owner": [1],
  "address": "JE, Main Market",
  "email": "admin@admin.com",
  "country": "India"
}
 */
