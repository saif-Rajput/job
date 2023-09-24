// let maynimg = document.getElementById('img-photo')
// let fname = document.getElementById('f-name')
// let lname = document.getElementById('l-name')
// let emil = document.getElementById('e-mil')
// let gendr = document.getElementById('g-endr')

// async function saif(){   
// const url = 'https://arbeitnow.com/api/job-board-api';
// let ramdata = await fetch(url).then(v => v.json())
// console.log(ramdata)
// maynimg.src = ramdata.results[0].picture.large
// fname.innerText = ` ${ramdata.results[0].name.first}`
// lname.innerText = ramdata.results[0].name.last
// gendr.innerText = ramdata.results[0].gender
// emil.innerText = ramdata.results[0].email
// };
// saif()
let mayncontainer = document.getElementsByClassName('mayncontainer')
let cardcontainer = document.getElementById('cardcontainers')

const url = 'https://www.arbeitnow.com/api/job-board-api';
// const url = 'https://arbeitnow.com/api/job-board-api';
const response = fetch(url)
response.then((v) => {
    return v.json()
}).then((jobs) => {
    // console.log(jobs)
    ihtml = "";
    for (item in jobs.data) {

        console.log(jobs.data[0])
        ihtml += `

                
                

                <div class="card">
                            <div class="card-header">
                            <span>Company Name: </span>${jobs.data[item].company_name}
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">${jobs.data[item].job_types}</h5>
                                <h5 class="card-title"><span>Remote:</span>${jobs.data[item].remote}</h5>
                                <p class="card-text"><span>Tags:</span>${jobs.data[item].tags}</p>
                                <div class="accordion accordion-flush" id="accordionFlushExample">
                                    <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed desbtn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Description
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            ${jobs.data[item].description}
                                        </div>
                                    </div>
                                    </div>	
                                </div>
                                <a href="${jobs.data[item].url}" class="btn btn-primary">Apply Now</a>

                            </div>
                </div>
                



                `
    }
    cardcontainer.innerHTML = ihtml
});




/* <div class="card-body">
                    <p class="card-text">Company_name : ${jobs.data[item].company_name}</p>
                    <p class="Job_types">Job_types : ${jobs.data[item].job_types}</p>
                    <p class="Location">Location : ${jobs.data[item].location}</p>
                    <p class="remote">remote : ${jobs.data[item].remote}</p>
                    <p class="tags">tags : ${jobs.data[item].tags}</p>
                    <a href="${jobs.data[item].url}" class="btn btn-primary">Go somewhere</a> 
                </div> */




                // <div class="card" style="width: 18rem;">
                //     <div class="card-body">
                //         <h5 class="card-title">${jobs.data[item].company_name}</h5>
                //         <h6 class="card-subtitle mb-2 text-body-secondary">${jobs.data[item].job_types}</h6>
                //         <h6 class="card-subtitle mb-2 text-body-secondary"><span>Remote:</span>${jobs.data[item].remote}</h6>
                //         <p class="card-text"><span>Tags:</span>${jobs.data[item].tags}</p>
                //         <a href="${jobs.data[item].url}" class="btn btn-primary"">Apply Now</a>
                        
                //     </div>
                // </div> 



// logs [{ name: 'Joker'}, { name: 'Batman' }]


