export interface ChildItem {
  title: string;
  content: string[];
}

export interface SampleData {
  title: string;
  children: ChildItem[];
}

const sampleData: SampleData = {
  title: "Welcome to PayEASY",
  children: [
    {
      title: "Overview",
      content: [
        "The PayEASY App is a user-friendly mobile application designed to simplify financial transactions for individuals and businesses. With intuitive features and secure payment processing, the app offers a convenient way to manage finances on the go.",
        "Whether you're paying bills, transferring funds, or monitoring transactions, the PayEASY App provides a seamless experience tailored to your needs. Say goodbye to long queues and complicated paperwork – with just a few taps, you can take control of your finances effortlessly.",
        "With a sleek and intuitive interface, the PayEASY App makes financial management accessible to users of all technical backgrounds. Whether you're a seasoned investor or new to mobile banking, our app offers a hassle-free solution for all your financial needs.",
      ],
    },
    {
      title: "Features",
      content: [
        "1. Secure Payments: The PayEASY App ensures the security of transactions through encryption and authentication mechanisms.",
        "2. Bill Management: Users can conveniently pay bills and manage recurring payments within the app.",
        "3. Fund Transfers: Easily transfer funds between accounts or to other users with just a few taps.",
        "4. Transaction History: Keep track of past transactions and monitor spending patterns through comprehensive transaction history.",
        "5. Notifications: Stay informed about account activity, upcoming bills, and payment reminders through push notifications.",
        "6. Customer Support: Access helpful customer support resources and contact assistance when needed.",
      ],
    },
    {
      title: "Benefits",
      content: [
        "1. Convenience: Perform various financial tasks anytime, anywhere, using your mobile device.",
        "2. Time-saving: Avoid queues and paperwork associated with traditional banking methods.",
        "3. Security: Enjoy peace of mind with advanced security features and fraud protection measures.",
        "4. Accessibility: The app is designed to be accessible and user-friendly for individuals of all technical backgrounds.",
        "5. Cost-effective: Reduce costs associated with manual payment processing and paper-based transactions.",
        "6. Innovation: Stay ahead with innovative features and updates designed to enhance the user experience.",
      ],
    },
    // Add more sections as needed
  ],
};

export default sampleData;
