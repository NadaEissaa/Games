import { details } from './details.js';
import { Ui } from './ui.js';

export class Games {
    constructor() {
        this.getGames("mmorpg");

        document.querySelectorAll('.menu a').forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                document.querySelector(".menu .active").classList.remove("active");
                e.target.classList.add("active");
                const category = e.target.dataset.category;
                this.getGames(category);
            });
        });
        this.ui = new Ui();
    }

    async getGames(category) {
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'caa1bf3991mshd26016654a1c004p12d9f5jsn635acdf00c92',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            this.ui.displayGames(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            loading.classList.add("d-none");
        }
    }

    startEvent() {
        document.querySelectorAll(".gameCard").forEach((item) => {
            item.addEventListener("click", () => {
                const id = item.dataset.id;
                this.showDetails(id);
            });
        });
    }

    showDetails(idGame) {
        const details = new details(idGame);
        document.querySelector(".games").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
    }
}

new Games();
