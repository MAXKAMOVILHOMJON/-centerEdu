let path = new URLSearchParams(location.search)
let id = path.get("teacherId") 
let studen = document.getElementById("studen")
let son = document.getElementById("som")
let information = document.getElementById("information")



async function getdadt( ){

  try{
      let res = await axios.get(`https://6923dd633ad095fb8471ce98.mockapi.io/Teachers/${id}`) ;
      console.log(res.data);
      information.innerHTML += `
      <div data-slot="card-content" class="[&amp;:last-child]:pb-6 p-6">
                        <div class="flex flex-col items-center text-center"><span data-slot="avatar"
                              class="relative flex size-10 shrink-0 overflow-hidden rounded-full h-32 w-32 mb-4 ring-4 ring-blue-100 dark:ring-blue-900"><img
                              data-slot="avatar-image" class="aspect-square size-full" alt="Ricardo Boyer-Roob"
                              src=${res.data.avatar}></span>
                           <h2 class="text-gray-900 dark:text-white mb-2">${res.data.name}</h2><span
                              data-slot="badge"
                              class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 gap-1 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90 mb-4">${res.data.specialty}</span>
                           <div class="w-full space-y-4 mb-6">
                              <div class="flex items-center justify-between text-sm"><span
                                  class="text-gray-600 dark:text-gray-400">Age</span><span
                                  class="text-gray-900 dark:text-white">${res.data.age} years</span></div>
                              <div class="flex items-center justify-between text-sm"><span
                                  class="text-gray-600 dark:text-gray-400">Experience</span><span
                                  class="text-gray-900 dark:text-white">${res.data.Experience} years</span></div>
                              <div class="flex items-center justify-between text-sm"><span
                                  class="text-gray-600 dark:text-gray-400">Gender</span><span
                                  class="text-gray-900 dark:text-white capitalize">${res.data.Gender}</span></div>
                              <div class="flex items-center justify-between text-sm"><span
                                  class="text-gray-600 dark:text-gray-400">Rating</span>
                              <div class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"
                                    aria-hidden="true">
                                    <path
                                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                    </path>
                                 </svg><span class="text-gray-900 dark:text-white">${res.data.Rating}</span></div>
                              </div>
                              <div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate"
                              data-max="100" data-slot="progress"
                                class="bg-primary/20 relative w-full overflow-hidden rounded-full h-2">
                              <div data-state="indeterminate" data-max="100" data-slot="progress-indicator"
                                  class="bg-primary h-full w-full flex-1 transition-all"
                                 style="transform: translateX(-20%);"></div>
                              </div>
                           </div><button data-slot="button"
                              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 w-full gap-2"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round" class="lucide lucide-pencil h-4 w-4" aria-hidden="true">
                              <path
                                 d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z">
                              </path>
                              <path d="m15 5 4 4"></path>
                              </svg>Edit Profile</button>
                        </div>
                        </div>
      `

      let ress = await axios.get(`https://6923dd633ad095fb8471ce98.mockapi.io/Teachers/${id}/Students`) ;
      studen.innerHTML =` `
      son.innerHTML += ress.data.length
       ress.data.map((el) => {
        
         studen.innerHTML += `
         <div
                                  class="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                                 <span data-slot="avatar"
                                    class="relative flex size-10 shrink-0 overflow-hidden rounded-full"><img
                                    data-slot="avatar-image" class="aspect-square size-full" alt="Angel Hudson"
                                    src=${el.avatar}></span>
                                 <div class="flex-1">
                                    <p class="text-gray-900 dark:text-white">${el.name}</p>
                                    <p class="text-sm text-gray-600 dark:text-gray-400">${el.group} • ${el.age} years old</p>
                                 </div>
                                 <div class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                      class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"
                                    aria-hidden="true">
                                    <path
                                       d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                    </path>
                                    </svg><span class="text-gray-900 dark:text-white">${el.Rating}</span></div>
                              </div>
         `
      })
      
}catch(err){
      console.log(err);
      
}
}



getdadt()