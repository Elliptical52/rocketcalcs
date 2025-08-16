const G = 6.67 * (10 ** -11)

function calculateDeltaV() {
    const isp = parseFloat(document.getElementById("dv-isp").value) || 0;
    const wetmass = parseFloat(document.getElementById("dv-wetmass").value) || 0;
    const drymass = parseFloat(document.getElementById("dv-drymass").value) || 0;
    document.getElementById("dv-result").textContent = String(Math.round(9.81 * isp * Math.log(wetmass / drymass))) + " meters / second";
}

function calculateIsp() {
    const thrust = parseFloat(document.getElementById("isp-thrust").value) || 0;
    const mfr = parseFloat(document.getElementById("isp-mfr").value) || 0;
    document.getElementById("isp-result").textContent = String((thrust / (9.81 * mfr)).toFixed(1)) + " seconds";
}

function calculateOrbitalSpeed() {
    const mass = parseFloat(document.getElementById("os-mass").value) || 0;
    const radius = parseFloat(document.getElementById("os-radius").value) || 0;
    document.getElementById("os-result").textContent = String(Math.sqrt((G * mass) / radius).toFixed(2)) + " meters / second";
}

function calculateOrbitalRadius() {
    const mass = parseFloat(document.getElementById("or-mass").value) || 0;
    const speed = parseFloat(document.getElementById("or-speed").value) || 0;
    document.getElementById("or-result").textContent = String(((G * mass) / (speed ** 2)).toFixed(2)) + " meters";
}

function calculateThrustToWeight() {
    const thrust = parseFloat(document.getElementById("twr-thrust").value) || 0;
    const mass = parseFloat(document.getElementById("twr-mass").value) || 0;
    const gravity = parseFloat(document.getElementById("twr-gravity").value) || 0;
    document.getElementById("twr-result").textContent = (thrust / (mass * gravity)).toFixed(2);
}

function calculateMetricValues() {
    const value = parseFloat(document.getElementById("met-value").value) || 0;
    document.getElementById("met-d10000").textContent = value / 10000
    document.getElementById("met-d1000").textContent = value / 1000
    document.getElementById("met-d100").textContent = value / 100
    document.getElementById("met-d10").textContent = value / 10
    document.getElementById("met-t10").textContent = value * 10
    document.getElementById("met-t100").textContent = value * 100
    document.getElementById("met-t1000").textContent = value * 1000
    document.getElementById("met-t10000").textContent = value * 10000
}

function convertScientificNotation() {
    const coefficient = parseFloat(document.getElementById("sn-coefficient").value) || 0;
    const exponent = parseInt(document.getElementById("sn-exponent").value) || 0;

    const result = coefficient * Math.pow(10, exponent);

    // Display full number without scientific notation
    document.getElementById("sn-result").textContent = result.toLocaleString('fullwide', { useGrouping: false });
}
