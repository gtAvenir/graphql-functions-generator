import { graphql } from "@/gql";

// prettier-ignore
export const AddressFragment = graphql(/* GraphQL */ `fragment AddressFragment on Address {\n  zip\n  street\n  city\n}`);
// prettier-ignore
export const AgentFragment = graphql(/* GraphQL */ `fragment AgentFragment on Agent {\n  id\n  address\n  User {\n    ...UserFragment\n  }\n}`);
// prettier-ignore
export const ChannelFragment = graphql(/* GraphQL */ `fragment ChannelFragment on Channel {\n  id\n  priority\n  url\n  name\n}`);
// prettier-ignore
export const CompanyFragment = graphql(/* GraphQL */ `fragment CompanyFragment on Company {\n  id\n  name\n}`);
// prettier-ignore
export const CustomerFragment = graphql(/* GraphQL */ `fragment CustomerFragment on Customer {\n  id\n  address\n  User {\n    ...UserFragment\n  }\n}`);
// prettier-ignore
export const DeviceFragment = graphql(/* GraphQL */ `fragment DeviceFragment on Device {\n  id\n  name\n  type\n  Users {\n    ...UserFragment\n  }\n  Rooms {\n    ...RoomFragment\n  }\n}`);
// prettier-ignore
export const ProductTemplateFragment = graphql(/* GraphQL */ `fragment ProductTemplateFragment on ProductTemplate {\n  id\n  name\n  items\n}`);
// prettier-ignore
export const RoleFragment = graphql(/* GraphQL */ `fragment RoleFragment on Role {\n  id\n  name\n}`);
// prettier-ignore
export const RoomFragment = graphql(/* GraphQL */ `fragment RoomFragment on Room {\n  id\n  name\n  description\n  startedAt\n  endedAt\n  Agents {\n    ...AgentFragment\n  }\n  Channels {\n    ...ChannelFragment\n  }\n  Company {\n    ...CompanyFragment\n  }\n  Customers {\n    ...CustomerFragment\n  }\n  ProductTemplates {\n    ...ProductTemplateFragment\n  }\n}`);
// prettier-ignore
export const UserFragment = graphql(/* GraphQL */ `fragment UserFragment on User {\n  id\n  firstName\n  lastName\n  email\n  password\n  authenticated\n  Company {\n    ...CompanyFragment\n  }\n  Role {\n    ...RoleFragment\n  }\n}`);
