
// Import our custom CSS
import '../scss/style.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import Chart from 'chart.js/auto';




const head = document.querySelector("header")

head.innerHTML = `<div
class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-star"
>
<a
  href="/"
  class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
>
  <svg
    class="bi me-2"
    width="40"
    height="32"
    role="img"
    aria-label="Bootstrap"
  >
    <use xlink:href="#bootstrap" />
  </svg>
</a>

<ul
  class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center align-items-center mb-md-0 gap-1"
>
  <img
    src="https://pascualbravo.edu.co/wp-content/uploads/2023/06/cropped-Imagotipo-horizontal_acreditados.png"
    alt=""
  />
  <li><a href="../../index.html" class="nav-link px-2 link-secondary">Home</a></li>
  <li>
    <a href="./src/pages/results.html" class="nav-link px-2 link-body-emphasis">Resultados</a>
  </li>
</ul>

<div class="dropdown text-end">
  <a
    href="#"
    class="d-block link-body-emphasis text-decoration-none dropdown-toggle"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <img
      src="https://github.com/mdo.png"
      alt="mdo"
      width="52"
      height="52"
      class="rounded-circle"
    />
  </a>
  <ul class="dropdown-menu text-small">
    <li><a class="dropdown-item" href="#">Role:: </a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><a class="dropdown-item" href="#">Profile</a></li>
    <li><hr class="dropdown-divider" /></li>
  </ul>
</div>
</div>
`

const footer = document.querySelector("footer")

footer.innerHTML = ` <footer>
<div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 m-4 border-top">
    <p class="col-md-4 mb-0 text-primary">&copy; 2024 Company, Inc</p>

    <a href="/"
      class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg class="bi me-2" width="40" height="32">
        <use xlink:href="#bootstrap" />
      </svg>
    </a>

    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
      <li class="nav-item"><a href="./src/pages/results.html" class="nav-link px-2 text-body-secondary">Features</a></li>
    </ul>
  </footer>
</div>
</footer>`


const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4,

    borderWidth: 1,
  }],
  
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true
        }
    }
  }
}


const config = {
  type: 'doughnut',
  data: data,
  responsive: true
};

const config2 = {
  type: 'doughnut',
  data: data,
};

const config3 = {
  type: 'doughnut',
  data: data,
};

const config4 = {
  type: 'doughnut',
  data: data,
  responsive: true
};

const config5 = {
  type: 'doughnut',
  data: data,
};

const config6 = {
  type: 'doughnut',
  data: data,
};

const myChart = new Chart(document.getElementById('myChart'), config);
const myChart2 = new Chart(document.getElementById('chart2'), config2);
const myChart3 = new Chart(document.getElementById('chart3'), config3);


const myChart4 = new Chart(document.getElementById('chart4'), config);
const myChart5 = new Chart(document.getElementById('chart5'), config2);
const myChart6 = new Chart(document.getElementById('chart6'), config3);

