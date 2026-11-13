CSCI 1101
Exam #2 – Project- DRAFT
Due Date: Friday, November 13, 2026, at midnight

    For this assignment, you will propose, design, and develop a professional web app for a
company, business, brand, or product of your choice. Your app should communicate
information effectively, provide good user experience, and demonstrate your
understanding of the fundamental concepts of app development.

Your task: Choose a company, business, brand, service, or product that will serve as
the subject of your website. For example: a restaurant, gym, fashion store, software
products, travel agency, library/bookstore, personal business or startup,
project/homework manager, portfolio, etc.

Basic Requirements:
 Use HTML, CSS and JavaScript.
 Use node.js as the backend server
 Use the recommended file structure to set up your project using an MVC pattern
    Drink-Water/
        public/                 # Static assets (CSS, images, client-side JS)
            css/
            images/
            js/
        src/                    # Source code directory
            config/             # Database connections, environment settings
            controllers/        # Request handler logic
            models/             # Data schemas or database queries
            routes/             # Express route definitions
            services/           # Business logic layer
            app.js              # Express app setup, middleware, and route mounting
            server.js           # Entry point (listens on port 3000)
        views/                  # EJS or template engine files
            partials/
            home.ejs
            products.ejs
    package.json
    package-lock.json

 Your website must contain at minimum 3 distinct pages. You may include
additional pages if they support your website's purpose. For example, the
homepage, about us, products, services, blog, contact us, gallery, and help
pages are some suggestions. This must be decided based on the needs of your
potential client.

 Web pages must use partials

 All pages must be linked together. Ensure all links are functional.

 Clearly separate the front-end from static and dynamic content

 Add a controller to receive HTTP requests and return responses

 Add middleware to
    1. process incoming requests and
    2. enable security.

 Add a "services" layer to implement business rules

 Use LLMs (such as ChatGPT, ClaudeAI, or Google Gemini) to enhance the look
of your site. 

-----------------------------------------------------------------------------------
Water Co. Drinkable Water (The Proposal)

Developer: Benjamin Marin Jr

Motivation

The motivation for Water Co Drinkable Water web application is to simplify and improve the
distribution, ordering, and delivery management of bottled water for customers. Water Co carries a
variety of different type of water and it will manage recurring delivery subscriptions or one time orders.
For administrators for the website are able to have more access to the site where they can monitor
inventory stock, customer orders, and maintain the user records.

The following are the applications core business models

1) User registration and account management: Customers can create an account and register their
contact and delivery details and are able to log in to their account.

2) Product Catalog and custom ordering: customers must be able to browse available bottle water
products, select pack sizes and submit a checkout form to place single orders.

3) Subscription service management: Customers must be able to set up, modify, or cancel
recurring water delivery schedules (could be weekly or monthly type of deliveries.

4) Order Tracking and delivery status: customers must be able to view their order history and track
the current delivery status of their purchases.

5) Admin inventory and account management: store managers/ administrators must be able to
access a secure management dashboard to view all registered users and manage inventory stock
levels.

The following objects demonstrate how the app can use object-oriented data management to support its
core functionality.

• User: Represents a registered customer or administrator in the system
Attributes: userID, fullName, email, password, deliveryAddress, role (for customer or admin)

• Product: Represents a bottle water product offered by the company.
Attributes: productId, title, category(Spring, Mineral, Purified, Distilled or Alkaline),
volumeSize, price, stockQuantitiy

• Order: Records a customers one time purchase transaction and chekcout details
Attributes: orderId, userId, productItems(list), totalAmount, orderDate, paymentStatus.

• Subscription: manages a recurring delivery plan linked to a specific user.
Attributes: subscriptionId, userId, productId, quantity, deliveryFrequency(weekly or monthly),
status(active or paused)

• Delivery: Represents the shipping and dispatch fulfillment status for a placed order or
subscription shipment.
Attributes: deliveryId, orderId, shippingAddress, deliveryDate, carrierStatus(Processing,
Dispatched, Delivered)
