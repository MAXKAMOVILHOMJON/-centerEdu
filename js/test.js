let path = new URLSearchParams(location.search)
let id = path.get("StudeId");
let sutedname = document.getElementById("sutedname");
let cardsuted =document.getElementById("cardsuted");
let sutedurl = document.getElementById("sutedurl")

async function getdadt( ){

  try{
      let res = await axios.get(`https://6923dd633ad095fb8471ce98.mockapi.io/Students/${id}`) ;
      console.log(res.data);
      sutedname.innerHTML += res.data.name
     cardsuted.innerHTML += `
     <div data-slot="card-content" class="[&amp;:last-child]:pb-6 p-6">
                                                    <div class="flex flex-col items-center text-center"><span
                                                            data-slot="avatar"
                                                            class="relative flex size-10 shrink-0 overflow-hidden rounded-full h-32 w-32 mb-4 ring-4 ring-purple-100 dark:ring-purple-900"><img
                                                                data-slot="avatar-image" class="aspect-square size-full"
                                                                alt="Tammy Feest"
                                                                src=${res.data.avatar}></span>
                                                        <h2 class="text-gray-900 dark:text-white mb-2">${res.data.name}</h2>
                                                        <span data-slot="badge"
                                                            class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground mb-4 border-blue-500 text-blue-600 dark:text-blue-400">${res.data.group}</span>
                                                        <div class="w-full space-y-4 mb-6">
                                                            <div class="flex items-center justify-between text-sm"><span
                                                                    class="text-gray-600 dark:text-gray-400">Age</span><span
                                                                    class="text-gray-900 dark:text-white">${res.data.age}
                                                                    years</span></div>
                                                            <div class="flex items-center justify-between text-sm"><span
                                                                    class="text-gray-600 dark:text-gray-400">Gender</span><span
                                                                    class="text-gray-900 dark:text-white capitalize">${res.data.Gender}</span>
                                                            </div>
                                                            <div class="flex items-center justify-between text-sm"><span
                                                                    class="text-gray-600 dark:text-gray-400">Rating</span>
                                                                <div class="flex items-center gap-1"><svg
                                                                        xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 24 24" fill="none"
                                                                        stroke="currentColor" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round"
                                                                        class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"
                                                                        aria-hidden="true">
                                                                        <path
                                                                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                                                        </path>
                                                                    </svg><span
                                                                        class="text-gray-900 dark:text-white">${res.data.Rating}</span>
                                                                </div>
                                                            </div>
                                                            <div aria-valuemax="100" aria-valuemin="0"
                                                                role="progressbar" data-state="indeterminate"
                                                                data-max="100" data-slot="progress"
                                                                class="bg-Blue-800 relative w-full overflow-hidden rounded-full h-2">
                                                                <div data-state="in determinate" data-max="100"
                                                                    data-slot="progress-indicator"
                                                                    class="bg-Blue-900 h-full w-full flex-1 transition-all"
                                                                    style="transform: translateX(100%);"></div>
                                                            </div>
                                                            <div class="flex items-center justify-between text-sm"><span
                                                                    class="text-gray-600 dark:text-gray-400">Coins</span>
                                                                <div class="flex items-center gap-1"><svg
                                                                        xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 24 24" fill="none"
                                                                        stroke="currentColor" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round"
                                                                        class="lucide lucide-coins h-4 w-4 text-yellow-500"
                                                                        aria-hidden="true">
                                                                        <circle cx="8" cy="8" r="6"></circle>
                                                                        <path d="M18.09 10.37A6 6 0 1 1 10.34 18">
                                                                        </path>
                                                                        <path d="M7 6h1v4"></path>
                                                                        <path d="m16.71 13.88.7.71-2.82 2.82"></path>
                                                                    </svg><span
                                                                        class="text-gray-900 dark:text-white">${res.data.Coins}</span>
                                                                </div>
                                                            </div>
                                                            <div aria-valuemax="100" aria-valuemin="0"
                                                                role="progressbar" data-state="indeterminate"
                                                                data-max="100" data-slot="progress"
                                                                class="bg-primary/20 relative w-full overflow-hidden rounded-full h-2">
                                                                <div data-state="indeterminate" data-max="100"
                                                                    data-slot="progress-indicator"
                                                                    class="bg-primary h-full w-full flex-1 transition-all"
                                                                    style="transform: translateX(-29.1%);"></div>
                                                            </div>
                                                        </div><button data-slot="button"
                                                            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3 w-full gap-2"><svg
                                                                xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none"
                                                                stroke="currentColor" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round"
                                                                class="lucide lucide-pencil h-4 w-4" aria-hidden="true">
                                                                <path
                                                                    d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z">
                                                                </path>
                                                                <path d="m15 5 4 4"></path>
                                                            </svg>Edit Profile</button>
                                                    </div>
                                                </div>
    `
    sutedurl.innerHTML += `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                <div
                                                                    class="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                                                                    <div class="flex items-center gap-3 mb-2">
                                                                        <div
                                                                            class="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                width="24" height="24"
                                                                                viewBox="0 0 24 24" fill="none"
                                                                                stroke="currentColor" stroke-width="2"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                                class="lucide lucide-phone h-5 w-5 text-blue-600 dark:text-blue-400"
                                                                                aria-hidden="true">
                                                                                <path
                                                                                    d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
                                                                                </path>
                                                                            </svg></div>
                                                                        <div>
                                                                            <p
                                                                                class="text-sm text-gray-600 dark:text-gray-400">
                                                                                Phone</p>
                                                                            <p class="text-gray-900 dark:text-white">
                                                                                ${res.data.Phone}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    class="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                                                                    <div class="flex items-center gap-3 mb-2">
                                                                        <div
                                                                            class="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                width="24" height="24"
                                                                                viewBox="0 0 24 24" fill="none"
                                                                                stroke="currentColor" stroke-width="2"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                                class="lucide lucide-mail h-5 w-5 text-green-600 dark:text-green-400"
                                                                                aria-hidden="true">
                                                                                <path
                                                                                    d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7">
                                                                                </path>
                                                                                <rect x="2" y="4" width="20" height="16"
                                                                                    rx="2"></rect>
                                                                            </svg></div>
                                                                        <div>
                                                                            <p
                                                                                class="text-sm text-gray-600 dark:text-gray-400">
                                                                                Email</p>
                                                                            <p
                                                                                class="text-gray-900 dark:text-white truncate">
                                                                                ${res.data.Email}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    class="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                                                                    <div class="flex items-center gap-3 mb-2">
                                                                        <div
                                                                            class="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                width="24" height="24"
                                                                                viewBox="0 0 24 24" fill="none"
                                                                                stroke="currentColor" stroke-width="2"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                                class="lucide lucide-send h-5 w-5 text-blue-400"
                                                                                aria-hidden="true">
                                                                                <path
                                                                                    d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z">
                                                                                </path>
                                                                                <path d="m21.854 2.147-10.94 10.939">
                                                                                </path>
                                                                            </svg></div>
                                                                        <div>
                                                                            <p
                                                                                class="text-sm text-gray-600 dark:text-gray-400">
                                                                                Telegram</p>
                                                                            <p class="text-gray-900 dark:text-white">
                                                                                ${res.data.Telegram}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    class="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                                                                    <div class="flex items-center gap-3 mb-2">
                                                                        <div
                                                                            class="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                width="24" height="24"
                                                                                viewBox="0 0 24 24" fill="none"
                                                                                stroke="currentColor" stroke-width="2"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                                class="lucide lucide-linkedin h-5 w-5 text-blue-600 dark:text-blue-400"
                                                                                aria-hidden="true">
                                                                                <path
                                                                                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                                                                </path>
                                                                                <rect width="4" height="12" x="2" y="9">
                                                                                </rect>
                                                                                <circle cx="4" cy="4" r="2"></circle>
                                                                            </svg></div>
                                                                        <div>
                                                                            <p
                                                                                class="text-sm text-gray-600 dark:text-gray-400">
                                                                                LinkedIn</p>
                                                                            <p
                                                                                class="text-gray-900 dark:text-white truncate">
                                                                                ${res.data.LinkedIn}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
    `
      let ress = await axios.get(`https://6923dd633ad095fb8471ce98.mockapi.io/Teachers/${id}/Students`) ;
      studen.innerHTML =` `
       ress.data.map((el) => {
        
        
      })
      
}catch(err){
      console.log(err);
      
}
}



getdadt()