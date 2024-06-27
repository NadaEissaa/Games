import { Ui } from './ui.js';

export class details {
    constructor(id) {
        this.Ui = new Ui();

        document.getElementById("closeBtn").addEventListener("click", () => {
            document.querySelector(".lighBoxContainer").classList.add("d-none");
            document.querySelector(".lightBox").classList.add("d-none");
        });

        this.getDetails(id);
    }

    async getDetails(idGames) {
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
            const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`, options);
            const data = await response.json();
            this.Ui.displayDetails(data);
        } catch (error) {
            console.error('Error fetching game details:', error);
        } finally {
            loading.classList.add("d-none");
        }
    }
}
