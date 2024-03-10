import { NavNode } from "../../interfaces/NavItemInterface";
const navData: NavNode[] = [
  {
    title: "Platform",
    children: [
      {
        title: "Products",
        children: [
          { title: "Payouts" },
          { title: "Payments" },
          { title: "PayFac" },
        ],
      },
      {
        title: "Features",
        children: [
          { title: "Authentication" },
          { title: "Compliance" },
          { title: "Self-service Portal" },
          { title: "Channel" },
        ],
      },
      {
        title: "Connections",
        children: [{ title: "API" }, { title: "Networks" }, { title: "Banks" }],
      },
    ],
  },
  {
    title: "Industries",
    children: [{ title: "B2B" }, { title: "Crypto" }, { title: "Lending" }],
  },
  {
    title: "Company",
    children: [{ title: "Blog" }, { title: "Careers" }, { title: "Abouts Us" }],
  },
  { title: "Developers" },
  { title: "Contact Us" },
];

export default navData;
