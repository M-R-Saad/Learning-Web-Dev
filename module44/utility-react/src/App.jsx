import './App.css'
import Navbar from './components/Navbar/Navbar';
import { Suspense } from 'react';
import PricingOptions from './components/PricingOptions/PricingOptions';
import Footer from './components/Footer/Footer';
import ResultsChart from './components/ResultsChart/ResultsChart';
import axios from 'axios';
import MemberCharts from './components/MemberCharts/MemberCharts';

const pricingPromise = fetch('pricingData.json').then(res => res.json());

const memberPromise = axios.get('memberData.json');

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <Suspense fallback={
          <div className="flex justify-center items-center min-h-screen">
            <div className="text-center">
              <span className="loading loading-spinner loading-lg text-blue-500 mb-4"></span>
              <p className="text-gray-600 text-lg">Loading pricing plans...</p>
            </div>
          </div>
        }>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <ResultsChart />

        <Suspense fallback={
          <div className="flex justify-center items-center min-h-screen">
            <div className="text-center">
              <span className="loading loading-spinner loading-lg text-blue-500 mb-4"></span>
              <p className="text-gray-600 text-lg">Loading member data...</p>
            </div>
          </div>
        }>
          <MemberCharts memberPromise={memberPromise}></MemberCharts>
        </Suspense>
      </main>
   
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default App
