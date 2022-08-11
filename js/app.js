const tableBody = document.getElementById("table-body");

let flights = [
    {
        time: "08:15",
        destination: "BARCELONA",
        flight: "ST 754",
        gate: "C 07",
        remark: "ON TIME"
    },
    {
        time: "09:30",
        destination: "NEW YORK",
        flight: "AC 122",
        gate: "A 03",
        remark: "DELAYED"
    },
    {
        time: "12:05",
        destination: "PARIS",
        flight: "BG 145",
        gate: "D 12",
        remark: "ON TIME"
    },
    {
        time: "13:00",
        destination: "ESTAMBUL",
        flight: "ED 702",
        gate: "C 15",
        remark: "CANCELLED"
    },
    {
        time: "14:10",
        destination: "DUBAI",
        flight: "PF 823",
        gate: "B 01",
        remark: "DELAYED"
    }
]

const destinations = ["BARCELONA", "NEW YORK", "PARIS", "ESTAMBUL", "DUBAI", "BANGKOK", "LONDON", "SINGAPORE", "BUDAPEST", "TOKYO", "SEOUL", "OSAKA", "MILAN", "ROMA", "HONG KONG", "BERLIN", "AMSTERDAM"]
const remarks = ["ON TIME", "DELAYED", "CANCELLED"]
let hour = 14;

function populateTable() {
    for (const flight of flights) {
        const tableRow = document.createElement("tr");
        for (const flightData in flight) {
            const tableCell = document.createElement("td");
            const word = Array.from(flight[flightData]);

            for (const [index, letter] of word.entries()) {
                const letterElement = document.createElement("div");

                setTimeout(() => {
                    letterElement.classList.add("flip");
                    letterElement.textContent = letter;
                    tableCell.append(letterElement);
                }, 100 * index);
            }
            tableRow.append(tableCell);
        }
        tableBody.append(tableRow);
    }
}

populateTable();

function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

function generateRandomNumber(maxNumber) {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (maxNumber) {
        const newNumbers = numbers.slice(0, maxNumber + 1);
        return newNumbers[Math.floor(Math.random() * newNumbers.length)];
    }
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function generateTime() {
    let displayHour = hour;

    if (hour < 24) {
        hour++;
    }
    if (hour >= 24) {
        hour = 1;
        displayHour = hour;
    }
    if (hour < 10) {
        hour++;
        displayHour = "0" + displayHour;
    }
    return displayHour + ":" + generateRandomNumber(6) + generateRandomNumber();
}


function shuffleUp() {
    flights.shift();
    flights.push({
        time: generateTime(),
        destination: destinations[Math.floor(Math.random() * destinations.length)],
        flight: generateRandomLetter() + generateRandomLetter() + "" + generateRandomNumber() + generateRandomNumber() + generateRandomNumber(),
        gate: generateRandomLetter() + "" + generateRandomNumber() + generateRandomNumber(),
        remark: remarks[Math.floor(Math.random() * remarks.length)]
    });
    tableBody.textContent = "";
    populateTable();
}

setInterval(shuffleUp, 5000);