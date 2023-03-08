const collisionEmojis = ['💥', '💣', '🤯', '💫', '🚀'];
const squares = document.querySelectorAll(".square");
const tryAgainBtn = document.querySelector("#try-again");

let collisionIndex = getRandomInt(0, squares.length);

squares.forEach((square, index) = > {
    square.addEventListener("click", () = > {
        if (square.classList.contains("collision")) {
            squares.forEach((square) = > {
                square.removeEventListener("click", handleClick);
            });
            tryAgainBtn.style.display = "block";
            square.textContent = collisionEmojis[Math.floor(Math.random() * collisionEmojis.length)];
        } else {
            square.textContent = "🙂";
            square.classList.add("clicked");
            if (document.querySelectorAll(".clicked").length === squares.length - 1) {
                const remainingSquare = Array.from(squares).find((square) = > !square.classList.contains("clicked"));
                remainingSquare.textContent = "👍";
                squares.forEach((square) = > {
                    square.removeEventListener("click", handleClick);
                });
                tryAgainBtn.style.display = "block";
            }
        }
    });
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function handleClick() {
    if (this.classList.contains("collision")) {
        squares.forEach((square) = > {
            square.removeEventListener("click", handleClick);
        });
        tryAgainBtn.style.display = "block";
        this.textContent = collisionEmojis[Math.floor(Math.random() * collisionEmojis.length)];
    } else {
        this.textContent = "🙂";
        this.classList.add("clicked");
        if (document.querySelectorAll(".clicked").length === squares.length - 1) {
            const remainingSquare = Array.from(squares).find((square) = > !square.classList.contains("clicked"));
            remainingSquare.textContent = "👍";
            squares.forEach((square) = > {
                square.removeEventListener("click", handleClick);
            });
            tryAgainBtn.style.display = "block";
        }
    }
}

tryAgainBtn.addEventListener("click", () = > {
    squares.forEach((square) = > {
        square.addEventListener("click", handleClick);
        square.classList.remove("clicked", "collision");
        square.textContent = "🙂";
        tryAgainBtn.style.display = "none";
    });
    collisionIndex = getRandomInt(0, squares.length);
    squares[collisionIndex].classList.add("collision");
});
tryAgainBtn.addEventListener("click", () = > {
    squares.forEach((square) = > {
        square.addEventListener("click", handleClick);
        square.classList.remove("clicked", "collision");
        square.textContent = "";
        tryAgainBtn.style.display = "none";
    });
    collisionIndex = getRandomInt(0, squares.length);
    squares[collisionIndex].classList.add("collision");
});
