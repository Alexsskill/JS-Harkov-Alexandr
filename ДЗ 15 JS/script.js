document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');

    async function fetchCities() {
        try {
            const response = await fetch('city.json');
            if (!response.ok) {
                throw new Error('Ошибка при загрузке данных');
            }
            return await response.json();
        } catch (error) {
            output.textContent = `Ошибка: ${error.message}`;
        }
    }

    function filterCities(cities, min, max) {
        return cities.filter(city => city.population >= min && city.population <= max);
    }

    function displayCities(cities) {
        if (cities.length === 0) {
            output.textContent = 'Города не найдены';
            return;
        }
        const list = cities.map(city => `${city.name} (${city.population.toLocaleString()} чел.)`).join('\n');
        output.textContent = list;
    }

    document.getElementById('btn-less-50k').addEventListener('click', async () => {
        const cities = await fetchCities();
        const filteredCities = filterCities(cities, 0, 49999);
        displayCities(filteredCities);
    });

    document.getElementById('btn-50k-100k').addEventListener('click', async () => {
        const cities = await fetchCities();
        const filteredCities = filterCities(cities, 50000, 99999);
        displayCities(filteredCities);
    });

    document.getElementById('btn-100k-250k').addEventListener('click', async () => {
        const cities = await fetchCities();
        const filteredCities = filterCities(cities, 100000, 249999);
        displayCities(filteredCities);
    });

    document.getElementById('btn-more-250k').addEventListener('click', async () => {
        const cities = await fetchCities();
        const filteredCities = filterCities(cities, 250000, Infinity);
        displayCities(filteredCities);
    });
});