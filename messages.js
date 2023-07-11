// Recuperar a lista de submissões do localStorage
const submissions = JSON.parse(localStorage.getItem("submissions"))


submissions.forEach( (submission) => {
    const cardTemplate = ` <div class="rectangle">
            <div class="box-content">
              <div>
                <h3>${submission.name}</h3>
              </div>
              <div>
                <h5>${submission.email}</h5>
              </div>
            </div>
            <hr>
            <p>${submission.message}</p>
          </div>`;

    const messagesContainer = document.querySelector(".messages")
    messagesContainer.insertAdjacentHTML("afterbegin",cardTemplate)
})

const clearMessages = () => {
    localStorage.clear()
    const messagesContainer = document.querySelector(".messages")
    messagesContainer.innerHTML = ""
}