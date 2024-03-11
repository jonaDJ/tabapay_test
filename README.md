# Tabapay assessment README
This project demonstrates the implementation of a dynamic tree menu with additional features such as item click tracking, display of clicked item details, and layout enhancements.

## Run the Project
To run this project locally, follow these steps:

1. Clone the repository:
   ```
     git clone <repository-url>
2. Navigate into the cloned directory:
   ```
     cd tabapay_test
3. Install dependencies for both frontend and backend:
   ```
     npm run setup
4. Start the project:
   ```
     npm start
This will start both frontend and backend servers concurrently. You can now access the project locally.


## Part 1: Dynamic Tree Menu
This image illustrates the initial view of the dynamic tree menu. The menu displays hierarchical data with expandable and collapsible nodes.

![Part 1](https://github.com/jonaDJ/tabapay_test/blob/main/png/part1%20png/localhost_3000_(iPhone%20SE)%20(1).png)

## Part 2: Item Click Tracking
When a tree item is clicked, a modal dialog box appears to indicate which item was clicked. This feature improves user interaction by providing feedback on their actions. 

Please note that this feature was removed in Part 3 because it seemed unnecessary.
![Part 2](https://github.com/jonaDJ/tabapay_test/blob/main/png/part2%20png/localhost_3000_(iPhone%20SE).png)

## Part 3: Display Clicked Item Details
The right area displays details of the clicked tree item. This provides contextual information about the selected item, improving user experience.
![Part 3](https://github.com/jonaDJ/tabapay_test/blob/main/png/part3%20png/localhost_3000_(Surface%20Pro%207).png)

## Part 4: Header and Footer
The layout of the website has been designed with a header and footer to improve the organization and visual appeal of the site. The header is located at the top of the page and includes a logo on the left-hand side. Moreover, there is a menu hamburger that changes to a close button when clicked, and it also opens up a side navigation bar. These features help to enhance brand identity and recognition, making it easier for users to navigate the site with ease.
![Part 4](https://github.com/jonaDJ/tabapay_test/blob/main/png/part4%20png/localhost_3000_(desktop).png)

## Part 5: Organizing Data in Body/Page
The strategy for visualizing/organizing the data would change depending on its context. We should also consider the amount of data and how efficiently it should be loaded without blocking user interaction. 
Progressive rendering or lazy loading should be employed. Depending on whether the API supports it, we sometimes employ a pagination technique to load the data related to the first 'x' categories. 

For now, I have just assumed the data can be rendered as an infinite scroll with categories to the left and content to the right. 
I have implemented this in the home/landing page, i.e., the immediate page you see after loading "localhost:8000"

![Part 5](https://github.com/jonaDJ/tabapay_test/blob/main/png/part5%20png/localhost_3000_.png)
### Example Organization:
- **Category 1**
  - Lots of Text
- **Category 2**
  - Lots of Text
- **Category 3**
  - Lots of Text
- ...
- **Category n**
  - Lots of Text

## Part 6: Full Stack Implementation
Integrating the front end (UI) with the back end (ExpressJS) is necessary to create a functioning prototype. This involves implementing the functionality described in Parts 1-5 and integrating it with backend services for data management and retrieval.
