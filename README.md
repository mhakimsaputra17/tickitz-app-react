<div align="center">
  <img src="./public/tickets.svg" alt="Tickitz Logo" width="170" />
  <h1>🎬 Tickitz - Modern Movie Ticket Booking</h1>
  <p><em>Stop waiting in line. Book tickets conveniently, watch movies quietly.</em></p>
  
  ![JavaScript](https://img.shields.io/badge/JavaScript-99.3%25-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
  ![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat-square&logo=react&logoColor=white)
  ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4.0.13-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=flat-square&logo=vite&logoColor=white)
  
  <a href="https://tickitz-app-react.vercel.app">View Demo</a> ·
  <a href="https://github.com/mhakimsaputra17/tickitz-app-react/issues">Report Bug</a> ·
  <a href="https://github.com/mhakimsaputra17/tickitz-app-react/issues">Request Feature</a>
</div>

## ✨ Preview

<div align="center">
  <img src="https://github.com/user-attachments/assets/329a0335-9d73-4cb9-9fc1-5ab9d0236c6c" alt="Tickitz Preview" width="80%" />
</div>

## 📖 About The Project

Tickitz is a modern, user-friendly movie ticket booking platform designed for a seamless experience. Built with React 19 and styled with Tailwind CSS 4, this application showcases modern web development practices and a responsive design that works flawlessly across devices.

The application fetches real movie data from The Movie Database (TMDB) API, giving users up-to-date information on current and upcoming films. With an intuitive interface powered by React Router 7 and Vite's lightning-fast build system, Tickitz aims to revolutionize the online movie ticket booking experience.

## 🚀 Features

- **🎭 Current Movie Listings** - Browse through popular movies currently showing
- **🔮 Upcoming Movies** - Explore movies coming soon to theaters
- **🏷️ Genre Filtering** - Filter movies by genres for easy discovery
- **🎟️ Seat Selection** - Interactive seat selection interface
- **📱 Responsive Design** - Seamlessly adapts to all screen sizes
- **🎨 Tailwind Styling** - Modern, clean UI with custom theming
- **🔐 Authentication** - User registration and login functionality
- **💳 Payment Integration** - Secure payment processing (simulated)
- **👤 User Profiles** - Personalized user experience and history tracking

## 🛠️ Built With

- **Frontend Framework**
  - [React 19](https://react.dev/) - Latest React with improved performance
- **Styling**
  - [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- **Routing**
  - [React Router 7](https://reactrouter.com/) - Declarative routing for React
- **Development & Build**

  - [Vite 6](https://vitejs.dev/) - Next generation frontend tooling

- **API Integration**
  - [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api) - For movie data

## 💻 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository

   ```sh
   git clone https://github.com/mhakimsaputra17/tickitz-app-react.git
   ```

2. Navigate to the project folder

   ```sh
   cd tickitz-app-react
   ```

3. Install dependencies

   ```sh
   npm install
   # or
   yarn
   ```

4. Create a `.env` file based on `.env.example`

   ```sh
   cp .env.example .env
   ```

5. Add your TMDB API key in the `.env` file

   ```
   VITE_API_KEY=your_tmdb_api_key_here
   ```

6. Start the development server

   ```sh
   npm run dev
   # or
   yarn dev
   ```

7. Open your browser and visit `http://localhost:5173`

### Building for Production

```sh
npm run build
# or
yarn build
```

## 📋 Project Structure

```
tickitz-app-react/
├── public/                  # Static assets
│   └── tickets.svg          # Logo and favicon
├── src/
│   ├── assets/              # Images, icons, and other static files
│   │   ├── icons/           # UI icons
│   │   └── images/          # Images used throughout the app
│   ├── components/          # Reusable UI components
│   │   └── common/          # Shared components (buttons, inputs, etc.)
│   ├── configs/             # Configuration files
│   ├── hooks/               # Custom React hooks
│   ├── pages/               # Page components
│   │   ├── Home/            # Home page
│   │   ├── admin/           # Admin dashboard
│   │   ├── auth/            # Authentication pages
│   │   ├── movies/          # Movie listings and details
│   │   ├── order/           # Booking and payment flow
│   │   └── profile/         # User profile management
│   ├── routes/              # Routing configuration
│   ├── App.jsx              # Main application component
│   └── main.jsx             # Application entry point
├── .env.example             # Example environment variables
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML entry point
├── package.json             # Project dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
└── vite.config.js           # Vite configuration
```

## 🎯 Key Components

### UI Components

- **Navbar** - Navigation component with responsive mobile menu
- **MovieCard** - Display movie information with hover effects
- **HeroSection** - Engaging introduction with featured movies
- **Footer** - Site navigation and social links

### Functional Components

- **AuthForms** - Login and registration components
- **MovieDetails** - Comprehensive film information display
- **SeatSelector** - Interactive seat booking interface
- **PaymentGateway** - Secure payment processing component
- **UserDashboard** - User profile and booking history

## 🔮 Future Enhancements

- [ ] Implement real-time seat availability with WebSockets
- [ ] Add movie recommendations based on user preferences
- [ ] Integrate social login options (Google, Facebook)
- [ ] Add email notifications for bookings and promotions
- [ ] Implement dark/light theme toggle
- [ ] Add multilingual support
- [ ] Enable Progressive Web App (PWA) features

## 🔧 Development

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run lint` - Lint the codebase
- `npm run preview` - Preview the production build locally

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_API_KEY=your_tmdb_api_key_here
```

## 📝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is available for personal and educational use.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org) for their comprehensive API
- [React](https://react.dev/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the lightning-fast frontend tooling

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/mhakimsaputra17">mhakimsaputra17</a></p>
  <p>Last updated: 2025-03-17</p>
</div>
