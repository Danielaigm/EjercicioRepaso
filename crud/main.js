const pets = [
  {
    name: "Zeus",
    age: "3 meses",
    breed: "Pelitos",
    vaccines: true,
    image:
      "https://i0.wp.com/www.encantadordeperros.es/wp-content/uploads/2018/11/p1-1.jpg",
  },
  {
    name: "Max",
    age: "8 meses",
    breed: "Golden",
    vaccines: false,
    image:
      "https://www.bunko.pet/__export/1618360738292/sites/debate/img/2021/04/13/golden-retriever-pelaaje_crop1618360421296.jpeg_788386100.jpeg",
  },
];

const mainContainer = document.getElementById("main__container");

const btnNew = document.getElementById("btnNew");

const form = document.getElementById("form");

const $name = document.getElementById("name");
const $age = document.getElementById("age");
const $breed = document.getElementById("breed");
const $image = document.getElementById("image");
const $vaccines = document.getElementById("vaccines");

const renderCards = () => {
  mainContainer.innerHTML = ``;
  pets.forEach((pet) => {
    mainContainer.innerHTML += `
        <article class="card">
            <figure>
                <img src="${pet.image}" alt="Perro" class="card__image">
            </figure>
            <div class="card__body">
                <p class="card__title">Nombre: <span class="card__name">${
                  pet.name
                }</span></p>
                <p class="card__title">Edad: <span class="card__name">${
                  pet.age
                }</span></p>
                <p class="card__title">Raza: <span class="card__name">${
                  pet.breed
                }</span></p>
                <p class="card__title">Vacunas: <span class="card__status ${
                  pet.vaccines ? "success" : "danger"
                }">${pet.vaccines ? "Al día" : "Pendiente"}</span></p>
            </div>
        </article>
        `;
  });
};

renderCards();

//toggle todos los botones que abren y cierran ok :)

//Events
const handleNew = () => {
  form.classList.toggle("hidden");
};

btnNew.addEventListener("click", handleNew);

const handleSubmit = (event) => {
  const validations = () => {
    if ($vaccines.value == "1") {
      $vaccines.value = true;
    }
  };
  validations();
  console.log($vaccines.value);

  event.preventDefault();

  const pet = {
    name: $name.value,
    age: $age.value,
    breed: $breed.value,
    vaccines: $vaccines.value,
    image: $image.value,
  };

  pets.push(pet);
  renderCards();

  form.reset();
  form.classList.add("hidden");
};
form.addEventListener("submit", (event) => handleSubmit(event));
