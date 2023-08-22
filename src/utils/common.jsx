export const userData = (selectedUser) => [
  {
    key: "UserName",
    value: selectedUser?.username,
  },
  {
    key: "e-mail",
    value: selectedUser?.email,
  },
  {
    key: "Phone",
    value: selectedUser?.phone,
  },
  {
    key: "Website",
    value: selectedUser?.website,
  },
];

export const companyData = (selectedUser) => [
  {
    key: "Name",
    value: selectedUser?.company?.name,
  },
  {
    key: "CatchPhrase",
    value: selectedUser?.company?.catchPhrase,
  },
  {
    key: "bs",
    value: selectedUser?.company?.bs,
  },
];

export const addressData = (selectedUser) => [
  {
    key: "Street",
    value: selectedUser?.address?.street,
  },
  {
    key: "Suite",
    value: selectedUser?.address?.suite,
  },
  {
    key: "City",
    value: selectedUser?.address?.city,
  },
  {
    key: "Zipcode",
    value: selectedUser?.address?.zipcode,
  },
];
