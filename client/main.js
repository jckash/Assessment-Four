const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const newDream = document.getElementById("#add-dream");
const updateDream = document.getElementById("#update-form");
const deleteDream = document.getElementById("#delete-form")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)



const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

createNewDream = (dreamArr) => {
    displaySection.innerHTML = ``;
    dreamArr.map((dreams) => {
      const holdingDiv = document.createElement("div");
      holdingDiv.innerHTML = `
              <ul>
              <li>Id: ${dreams.dreamId}</li>
                  <li>Song: ${dreams.dream}</li>
                  <button onclick="deleteDream(${dream.dreamId})"> Delete </button>
              </ul>
          `;
      displaySection.appendChild(holdingDiv);
    });
  };


const addFormHandler = (e) => {
    e.preventDefault();
    const body = {
        dream : dream.value
    };
    axios.post("http://localhost:4000/api/dream/", body)
    .then((res) => createNewDream(res.data))
    .catch((err) => console.error(err));
    dream.value = "";
};

const updateHandler = (e) => {
    e.preventDefault();
    axios
      .put(
        `"http://localhost:4000/api/dream/"${dreamId.value}?newDream=${updatedream.value}`
      )
      .then((res) => createNewDream(res.data))
      .catch((err) => console.error(err));
  };

  const deleteHandler = (id) => {
    axios
      .delete(`"http://localhost:4000/api/dream/"${id}`)
      .then((res) => createNewDream(res.data))
      .catch((err) => console.error(err));
  };
  

  addForm.addEventListener("submit", addFormHandler);
  updateForm.addEventListener("submit", updateHandler);
  deleteForm.addEventListener("click", deleteHandler);