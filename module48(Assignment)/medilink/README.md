# 🏥 MediLink - Doctor Appointment Booking Platform

A modern, responsive web application for booking doctor appointments with an intuitive user interface and seamless user experience.

![React](https://img.shields.io/badge/React-19.1.1-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.14-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.14-38B2AC?logo=tailwind-css)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5.1.29-5A0EF8?logo=daisyui)

## 🌟 Features

### 🔍 **Doctor Discovery**
- Browse through a comprehensive list of qualified doctors
- View detailed doctor profiles with specializations and qualifications
- Smart pagination with "Show More" functionality (6 doctors per load)
- Search and filter doctors by specialty

### 📅 **Appointment Management**
- **Book Appointments**: Easy one-click appointment booking
- **My Bookings**: View all your scheduled appointments
- **Cancel Appointments**: Cancel bookings with confirmation
- **Real-time Availability**: Check doctor availability for today
- **Context-based State Management**: Seamless booking state across pages

### 📊 **Interactive Dashboard**
- **Booking Statistics**: Visual charts showing appointment data using Recharts
- **Doctor Analytics**: Bar charts with custom triangle shapes and random colors
- **Responsive Charts**: Adaptable charts for different screen sizes

### 🎨 **Modern UI/UX**
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **DaisyUI Components**: Beautiful, accessible UI components
- **Loading States**: Elegant loading spinners with Suspense
- **Toast Notifications**: User feedback with react-toastify
- **Error Handling**: Custom error pages and boundaries

### 🧠 **Advanced Features**
- **React Router v7**: Modern routing with loaders and error boundaries
- **Context API**: Global state management for booking operations
- **Local Storage**: Persistent booking data
- **SEO Optimization**: Dynamic page titles with react-helmet
- **Accessibility**: ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 19.1.1** - Latest React with modern features
- **Vite 7.1.14** - Lightning-fast build tool with Rolldown

### **Styling & UI**
- **TailwindCSS 4.1.14** - Utility-first CSS framework
- **DaisyUI 5.1.29** - Beautiful component library
- **React Icons 5.5.0** - Comprehensive icon library

### **Routing & Navigation**
- **React Router 7.9.3** - Modern routing with data loaders
- **React Router DOM** - Browser routing capabilities

### **Data Visualization**
- **Recharts 3.2.1** - Composable charting library
- **React CountUp 6.5.3** - Animated number counting

### **User Experience**
- **React Toastify 11.0.5** - Toast notifications
- **React Helmet 6.1.0** - Dynamic document head management
- **Suspense & Loading** - Smooth loading states

### **Development Tools**
- **ESLint 9.36.0** - Code linting and quality
- **TypeScript Support** - Type checking capabilities
- **Vite HMR** - Hot module replacement for fast development

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v18 or higher)
- npm or yarn package manager

### **Installation**

1. **Clone the repository**
```bash
git clone https://github.com/M-R-Saad/Learning-Web-Dev.git
cd "module48(Assignment)/medilink"
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

### **Build for Production**
```bash
npm run build
```

### **Preview Production Build**
```bash
npm run preview
```

## 📁 Project Structure

```
medilink/
├── public/
│   └── doctors.json          # Doctor data
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Banner/          # Hero section
│   │   ├── Doctor/          # Individual doctor card
│   │   ├── Doctors/         # Doctor list with pagination
│   │   ├── Header/          # Navigation bar
│   │   ├── Loading/         # Loading components
│   │   └── Statistics/      # Dashboard charts
│   ├── pages/               # Route components
│   │   ├── Home/            # Landing page
│   │   ├── DoctorsDetails/  # Doctor profile page
│   │   ├── MyBookings/      # User bookings page
│   │   ├── Blogs/           # Blog section
│   │   └── ErrorPage/       # Error handling
│   ├── Context/             # React Context for state
│   ├── Routes/              # Routing configuration
│   ├── utilities/           # Helper functions
│   └── main.jsx             # Application entry point
├── package.json
└── README.md
```

## 🎯 Key Components

### **Booking System**
- **Context API** for global booking state
- **Local Storage** for data persistence
- **Real-time synchronization** across components

### **Data Loading**
- **React Router Loaders** for efficient data fetching
- **Suspense boundaries** with loading states
- **Error boundaries** for robust error handling

### **Responsive Design**
- **Mobile-first** approach
- **TailwindCSS** utility classes
- **DaisyUI** component system

## 🌐 Live Demo

Visit the live application: [MediLink Demo](#) *(Add your deployment URL)*

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📝 Features in Detail

### **Doctor Appointment Flow**
1. Browse doctors on the home page
2. Click on a doctor to view detailed profile
3. Check availability and consultation fees
4. Book appointment with one click
5. View booking confirmation
6. Manage bookings in "My Bookings" section

### **State Management**
- **BookedContext**: Global booking state
- **Local Storage**: Persistent data
- **React Router**: URL-based state

### **Performance Optimizations**
- **Code splitting** with React.lazy
- **Suspense** for loading states
- **Efficient re-renders** with proper state management

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

**M R Saad**
- GitHub: [@M-R-Saad](https://github.com/M-R-Saad)

---

*Built with ❤️ using React, TailwindCSS, and modern web technologies*
