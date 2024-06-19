let arraysize = 40;
let array = [arraysize];
let sortedarray = [arraysize];

generateArray();

function generateArray() {
  for (let i = 0; i < arraysize; i++) {
    array[i] = generateValue(0, 100);
    if (array[i] == array[i - 1]) {
      array[i] = generateValue(0, 100);
    }
  }
  console.log(array);
}

function generateValue() {
  let value = Math.random() * (100 - 0) + 0;
  let random = value.toFixed(0);
  let num = parseInt(random);
  return num;
}

function newArray() {
  generateArray();
  chart.data.datasets[0].data = array;
  chart.update();
}
function sortArray() {
  bubblesort();
  chart.data.datasets[0].data = sortedarray;
  chart.update();
}

// bubble sort
function bubblesort() {
  sortedarray = Array.from(array);
  for (var i = 0; i < arraysize; i++) {
    for (var j = 0; j < arraysize; j++) {
      if (sortedarray[j] > sortedarray[j + 1]) {
        let temp = sortedarray[j];
        sortedarray[j] = sortedarray[j + 1];
        sortedarray[j + 1] = temp;
      }
    }
  }
  console.log(sortedarray);
  //   return sortedarray;
}

let myChart = document.getElementById("myChart").getContext("2d");

var chart = new Chart(myChart, {
  type: "bar",
  data: {
    labels: [
      "Element 1",
      "Element 2",
      "Element 3",
      "Element 4",
      "Element 5",
      "Element 6",
      "Element 7",
      "Element 8",
      "Element 9",
      "Element 10",
      "Element 11",
      "Element 12",
      "Element 13",
      "Element 14",
      "Element 15",
      "Element 16",
      "Element 17",
      "Element 18",
      "Element 19",
      "Element 20",
      "Element 21",
      "Element 22",
      "Element 23",
      "Element 24",
      "Element 25",
      "Element 26",
      "Element 27",
      "Element 28",
      "Element 29",
      "Element 30",
      "Element 31",
      "Element 32",
      "Element 33",
      "Element 34",
      "Element 35",
      "Element 36",
      "Element 37",
      "Element 38",
      "Element 39",
      "Element 40",
    ],
    datasets: [
      {
        label: "Array",
        data: array,
        fill: false,
        borderColor: "#009688",
        backgroundcolor: "#FFF",
        borderWidth: 5,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: "black",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
      },
    },
  },
});
