import { details } from './details.js';

export class Ui {
    displayGames(data) {
        let cartoona = ``;
        for (let i = 0; i < data.length; i++) {
            cartoona += `<div class="col-lg-3">
                <div class="gameCard  mt-5 gy-3 rounded-4" data-id="${data[i].id} ">
                    <img src="${data[i].thumbnail}" class="rounded-3">
                    <div class="game-name d-flex justify-content-between mt-2">
                        <p class="text-info">${data[i].title}</p>
                        <button type="button" class="btn btn-info text-white btnStyle">free</button>
                    </div>
                    <div class="text-secondary text-center game-desc">
                        <p>${data[i].short_description.split(" ", 8).join(" ")}</p>
                    </div>
                    <div class="game-detail d-flex justify-content-between mt-1">
                        <p class="text-white text-bg-secondary rounded-3 px-2 fontSize">${data[i].genre}</p>
                        <p class="text-white text-bg-secondary rounded-3 px-2 fontSize">${data[i].platform}</p>
                    </div>
                </div>
            </div>`;
        }
        document.getElementById("gameData").innerHTML = cartoona;

        // Add event listeners to game cards
        document.querySelectorAll('.gameCard').forEach(card => {
            card.addEventListener('click', (event) => {
                const gameId = event.currentTarget.getAttribute('data-id');
                new details(gameId);
            });
        });
    }

    displayDetails(data) {
        document.querySelector(".lighBoxContainer").classList.remove("d-none");
        document.querySelector(".lightBox").classList.remove("d-none");

        document.getElementById("gameThumbnail").src = data.thumbnail;
        document.getElementById("gameTitle").innerText = `Title: ${data.title}`;
        document.getElementById("gameCategory").innerText = `Category: ${data.genre}`;
        document.getElementById("gamePlatform").innerText = `Platform: ${data.platform}`;
        document.getElementById("gameStatus").innerText = `Status: ${data.status}`;
        document.getElementById("gameDescription").innerText = data.description;
        document.getElementById("gameLink").href = data.game_url;
    }
}
