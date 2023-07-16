import { graphql } from "@/gql"; 
export const AddressFragment = graphql(/* GraphQL */ `fragment AddressFragment on Address {
  zip
  street
  city
}`);
 // prettier-ignore 
export const AgentFragment = graphql(/* GraphQL */ `fragment AgentFragment on Agent {
  id
  address
  User {
    ...UserFragment
  }
}`);
 // prettier-ignore 
export const ChannelFragment = graphql(/* GraphQL */ `fragment ChannelFragment on Channel {
  id
  priority
  url
  name
}`);
 // prettier-ignore 
export const CompanyFragment = graphql(/* GraphQL */ `fragment CompanyFragment on Company {
  id
  name
}`);
 // prettier-ignore 
export const CustomerFragment = graphql(/* GraphQL */ `fragment CustomerFragment on Customer {
  id
  address
  User {
    ...UserFragment
  }
}`);
 // prettier-ignore 
export const DeviceFragment = graphql(/* GraphQL */ `fragment DeviceFragment on Device {
  id
  name
  type
  Users {
    ...UserFragment
  }
  Rooms {
    ...RoomFragment
  }
}`);
 // prettier-ignore 
export const ProductTemplateFragment = graphql(/* GraphQL */ `fragment ProductTemplateFragment on ProductTemplate {
  id
  name
  items
}`);
 // prettier-ignore 
export const RoleFragment = graphql(/* GraphQL */ `fragment RoleFragment on Role {
  id
  name
}`);
 // prettier-ignore 
export const RoomFragment = graphql(/* GraphQL */ `fragment RoomFragment on Room {
  id
  name
  description
  startedAt
  endedAt
  Agents {
    ...AgentFragment
  }
  Channels {
    ...ChannelFragment
  }
  Company {
    ...CompanyFragment
  }
  Customers {
    ...CustomerFragment
  }
  ProductTemplates {
    ...ProductTemplateFragment
  }
}`);
 // prettier-ignore 
export const UserFragment = graphql(/* GraphQL */ `fragment UserFragment on User {
  id
  firstName
  lastName
  email
  password
  authenticated
  Company {
    ...CompanyFragment
  }
  Role {
    ...RoleFragment
  }
}`);