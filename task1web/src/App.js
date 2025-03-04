import React from 'react';
import './App.css';


function App() {
  return (
    <div class="container">
        <div class="stats-container">
            <div class="stat-card">
                <div class="d-flex align-items-center">
                    <div class="stat-info">
                        <h5>Revenue</h5>
                       <span class="stat-value">$2,047</span>
                    </div>
                </div>
                <span class="decrease">↓ 10%</span>
            </div>

           
            <div class="stat-card">
                <div class="d-flex align-items-center">

                    <div class="stat-info">
                        <h5>Orders</h5>
                        <span class="stat-value">356</span>
                    </div>
                </div>
                <span class="increase">↑ 20%</span>
            </div>

            
            <div class="stat-card">
                <div class="d-flex align-items-center">

                    <div class="stat-info">
                        <h5>Dine in</h5>
                        <span class="stat-value">220</span>
                    </div>
                </div>
                <span class="increase">↑ 10%</span>
            </div>

            
            <div class="stat-card">
                <div class="d-flex align-items-center">
                    <div class="stat-info">
                        <h5>Take away</h5>
                        <span class="stat-value">135</span>
                    </div>
                </div>
                <span class="decrease">↓ 5%</span>
            </div>
        </div>
    </div>
  );
}

export default App;
