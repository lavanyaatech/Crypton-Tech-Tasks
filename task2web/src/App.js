import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";



const App = () => {
  return (
    <div class="container mt-5">
    <h2 class="mb-4">My Courses</h2>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Course Name</th>
                <th>Start Date</th>
                <th>Lesson Completed</th>
                <th>Duration</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><span class="">📘</span> Basic Algorithm <br></br>(25 Lessons)</td>
                <td>27 Jan, 2023</td>
                <td>10/25 (48%)</td>
                <td>14h 38m 56s</td>
            </tr>
            <tr>
                <td><span class="">💻</span> Web Development <br></br>(45 Lessons)</td>
                <td>23 Feb, 2023</td>
                <td>40/45 (97%)</td>
                <td>36h 30m 00s</td>
            </tr>
            <tr>
                <td><span class="">📊</span> Basic Data Science <br></br> (37 Lessons)</td>
                <td>14 Jan, 2023</td>
                <td>9/37 (40%)</td>
                <td>37h 00m 00s</td>
            </tr>
            <tr>
                <td><span class="">🎨</span> UI/UX Design <br></br> (32 Lessons)</td>
                <td>19 Feb, 2023</td>
                <td>26/32 (84%)</td>
                <td>16h 40m 50s</td>
            </tr>
            <tr>
                <td><span class="">📑</span> Project Management <br></br> (19 Lessons)</td>
                <td>27 Jan, 2023</td>
                <td>14/19 (89%)</td>
                <td>13h 20m 00s</td>
            </tr>
        </tbody>
    </table>
</div>

);
};


export default App;

