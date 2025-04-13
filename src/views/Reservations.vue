<script setup lang="ts">
import { useTableData } from '../composables/useTableData'
import { ref } from 'vue'

const {
  paginatedTableData,
} = useTableData()

const isOpenDetail = ref(false);
const isOpenChat = ref(false);
const guestIndex = ref(0);
const aiEnabled = ref(true)

function closeModalDetail() {
  isOpenDetail.value = false;
}
function closeModalChat() {
  isOpenChat.value = false;
}
</script>

<template>
  <div>

    <div class="mt-8">
      <div class="mt-6">
        <div class="w-full flex">
          <h2 class="text-lg font-semibold leading-tight text-gray-500 underline decoration-yellow-400 mr-5">
            Ongoing
          </h2>

          <h2 class="text-lg font-semibold leading-tight text-gray-500 mr-5">
            Previous
          </h2>

          <h2 class="text-lg font-semibold leading-tight text-gray-500">
            Cancelled
          </h2>
        </div>

        <div class="pt-8 px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
          <div
            class="inline-block min-w-full overflow-hidden rounded-lg shadow"
          >
            <div class="bg-white flex w-full justify-between px-6 py-4">
              <h3 class="font-semibold text-gray-500 pt-2">
                Reservations
              </h3>
              <div class="flex justify-end">
                <div class="relative mx-4 lg:mx-0">
                  <input
                    class="w-32 pl-10 pr-4 text-indigo-600 border-gray-200 rounded-md sm:w-64 focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                    type="text"
                    placeholder="Search"
                  >
                  <span class="absolute inset-y-0 right-0 flex items-center pr-6">
                    <svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <button class="ml-6 text-sm font-semibold text-gray-700 px-3 py-2 border border-yellow-400 rounded">
                  Export CSV
                </button>
              </div>
            </div>
            
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Guest Name
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Staying at - From/To date-time
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Status
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Stripe Payment
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Total Orders
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Chat with us
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(u, index) in paginatedTableData" :key="index">
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="">
                        <p class="text-gray-900 whitespace-nowrap">
                          {{ u.guestName }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                      class="px-6 py-4 bg-white border-b border-gray-200 whitespace-nowrap"
                    >
                    <div class="text-sm leading-5 text-gray-900">
                      {{ u.stayingAt }}
                    </div>
                    <div class="text-sm leading-5 text-gray-500">
                      {{ u.stayingAtDesc }}
                    </div>
                  </td>
                  <td
                    class="px-2 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <span
                      :class="`relative inline-block px-3 py-1 font-semibold text-${u.statusColor}-100 leading-tight`"
                    >
                      <span
                        aria-hidden
                        :class="`absolute inset-0 bg-${u.statusColor}-100 opacity-50 rounded-full`"
                      />
                      <span class="relative">{{ u.status }}</span>
                    </span>
                  </td>
                  <td
                      class="px-6 py-4 bg-white border-b border-gray-200 whitespace-nowrap"
                    >
                    <div class="text-sm leading-5 text-gray-900">
                      <button class="text-sm font-semibold text-gray-700 px-3 py-2 border border-black rounded-full">
                        <i class="bi bi-cart pr-1"></i>
                        {{ u.stripePayment }}
                      </button>
                    </div>
                  </td>
                  <td
                      class="px-6 py-4 bg-white border-b border-gray-200 whitespace-nowrap"
                    >
                    <div class="text-sm leading-5 text-gray-900">
                      <button class="text-sm font-semibold text-gray-700 px-3 py-2 border border-black rounded-full">
                        <i class="bi bi-cart pr-1"></i>
                        {{ u.totalOrders }}
                      </button>
                    </div>
                  </td>
                  <td
                      class="px-6 py-4 bg-white border-b border-gray-200 whitespace-nowrap"
                    >
                    <div class="text-sm leading-5 text-gray-900">
                      <button @click="isOpenChat = true; guestIndex = index;" class="text-sm font-semibold text-gray-700 px-3 py-2 border border-black rounded-full">
                        <i class="bi bi-chat-square pr-1"></i>
                        {{ u.chat }}
                      </button>
                    </div>
                  </td>
                  <td
                      class="px-6 py-4 bg-white border-b border-gray-200 whitespace-nowrap"
                    >
                    <button @click="isOpenDetail = true; guestIndex = index;" class="text-sm leading-5 text-gray-900">
                      Detail
                    </button>
                    
                    <!-- Detail -->
                    <div v-if="isOpenDetail" className='fixed inset-y-0 right-0 w-[400px] border bg-white z-[9999]'>
                      <div class="p-4 flex items-center">
                        <button @click="closeModalDetail" class="text-gray-500 hover:text-gray-700 text-lg">&times;</button>
                        <h2 class="text-md font-semibold text-grey-500 pl-3">Detail Reservation</h2>
                      </div>
                      <div class="mx-6 pb-3 border-b">
                        <div class="flex text-xl font-semibold ">
                          <div>{{ paginatedTableData[guestIndex].guestName }} </div>
                          <div class="text-xs text-gray-500 pt-1 pl-3">+ 3 Guest</div>
                        </div>
                        <div class="text-xs">
                          {{ paginatedTableData[guestIndex].stayingAtDesc }}
                        </div>
                        <div class="text-xs">
                          {{ paginatedTableData[guestIndex].stayingAt }}
                        </div>
                      </div>

                      <div class="mx-6 py-3 border-b flex flex-wrap justify-between">
                        <div class="rounded">
                          <div class="flex items-center font-semibold text-xs">
                            Status
                          </div>
                        </div>

                        <div class="rounded">
                          <div class="flex items-center font-semibold text-xs">
                            <span
                              :class="`relative inline-block px-3 font-semibold text-${paginatedTableData[guestIndex].statusColor}-100 leading-tight`"
                            >
                              <span
                                aria-hidden
                                :class="`absolute inset-0 bg-${paginatedTableData[guestIndex].statusColor}-100 opacity-50 rounded-full`"
                              />
                              <span class="relative">{{ paginatedTableData[guestIndex].status }}</span>
                            </span>
                          </div>
                        </div>

                        <div class="rounded">
                          <div class="flex items-center font-semibold text-xs text-gray-500 underline">
                            Change Status
                          </div>
                        </div>
                      </div>
                      <div class="mx-6 py-3 border-b flex flex-wrap justify-between">
                        <div class="rounded">
                          <div class="flex items-center font-semibold text-xs">
                            Reservation ID
                          </div>
                        </div>

                        <div class="rounded">
                          <div class="flex items-center font-semibold text-xs">
                            {{ paginatedTableData[guestIndex].reservationId }}
                          </div>
                        </div>
                      </div>
                      <div class="mx-6 py-3 border-b flex flex-wrap justify-between">
                        <div class="rounded">
                          <div class="flex items-center font-semibold text-xs">
                            Email
                          </div>
                        </div>

                        <div class="rounded">
                          <div class="flex items-center font-semibold text-xs">
                            {{ paginatedTableData[guestIndex].email }}
                          </div>
                        </div>
                      </div>
                      <div class="mx-6 py-3 border-b flex flex-wrap justify-between">
                        <div class="rounded">
                          <div class="flex items-center font-semibold text-xs">
                            Verify Type
                          </div>
                        </div>

                        <div class="rounded">
                          <div class="flex items-center font-semibold text-xs">
                            {{ paginatedTableData[guestIndex].verifyType }}
                          </div>
                        </div>
                      </div>
                      <div class="mx-6 py-3 border-b flex flex-wrap justify-between">
                        <div class="rounded">
                          <div class="flex items-center font-semibold text-xs">
                            Age Group
                          </div>
                        </div>

                        <div class="rounded">
                          <div class="flex items-center font-semibold text-xs">
                            {{ paginatedTableData[guestIndex].ageGroup }}
                          </div>
                        </div>
                      </div>
                      <div class="mx-6 py-3 border-b flex flex-wrap justify-between">
                        <div class="rounded">
                          <div class="flex items-center font-semibold text-xs">
                            Country of Origin
                          </div>
                        </div>

                        <div class="rounded">
                          <div class="flex items-center font-semibold text-xs">
                            {{ paginatedTableData[guestIndex].countryOfOrigin }}
                          </div>
                        </div>
                      </div>
                      <div class="mx-6 py-3 border-b flex flex-wrap justify-between">
                        <div class="rounded">
                          <div class="flex items-center font-semibold text-xs">
                            Nationality
                          </div>
                        </div>

                        <div class="rounded">
                          <div class="flex items-center font-semibold text-xs">
                            {{ paginatedTableData[guestIndex].nationality }}
                          </div>
                        </div>
                      </div>
                      <div class="mx-6 py-3 border-b flex flex-wrap justify-between">
                        <div class="rounded">
                          <div class="flex items-center font-semibold text-xs">
                            Birth Date
                          </div>
                        </div>

                        <div class="rounded">
                          <div class="flex items-center font-semibold text-xs">
                            {{ paginatedTableData[guestIndex].birthDate }}
                          </div>
                        </div>
                      </div>
                      <div class="mx-6 py-3 border-b flex flex-wrap justify-between">
                        <div class="rounded">
                          <div class="flex items-center font-semibold text-xs">
                            Reason for Travel
                          </div>
                        </div>

                        <div class="rounded">
                          <div class="flex items-center font-semibold text-xs">
                            {{ paginatedTableData[guestIndex].reasonTravel }}
                          </div>
                        </div>
                      </div>
                      <div class="mx-6 py-3 border-b flex flex-wrap justify-between">
                        <div class="rounded">
                          <div class="flex items-center font-semibold text-xs">
                            Type of Id
                          </div>
                        </div>

                        <div class="rounded">
                          <div class="flex items-center font-semibold text-xs">
                            {{ paginatedTableData[guestIndex].typeId }}
                          </div>
                        </div>
                      </div>
                      <div class="mx-6 py-3 border-b flex flex-wrap justify-between">
                        <div class="rounded">
                          <div class="flex items-center font-semibold text-xs">
                            Id Number
                          </div>
                        </div>

                        <div class="rounded">
                          <div class="flex items-center font-semibold text-xs">
                            {{ paginatedTableData[guestIndex].idNumber }}
                          </div>
                        </div>
                      </div>
                      <div class="mx-6 py-3 border-b flex flex-wrap justify-between">
                        <div class="rounded">
                          <div class="flex items-center font-semibold text-xs">
                            Mode of Transport
                          </div>
                        </div>

                        <div class="rounded">
                          <div class="flex items-center font-semibold text-xs">
                            {{ paginatedTableData[guestIndex].modeTransport }}
                          </div>
                        </div>
                      </div>
                      <div class="mx-6 py-3 border-b flex flex-wrap justify-between">
                        <div class="rounded">
                          <div class="flex items-center font-semibold text-xs">
                            Estimated Check In
                          </div>
                        </div>

                        <div class="rounded">
                          <div class="flex items-center font-semibold text-xs">
                            {{ paginatedTableData[guestIndex].estCheckIn }}
                          </div>
                        </div>
                      </div>
                      
                      <div class="mx-6 py-3 border-b flex flex-wrap justify-between">
                        <button class="text-sm font-semibold text-black-700 px-3 py-2 bg-yellow-400 w-[290px]">
                          View Guest Guide
                        </button>

                        <button class="text-sm font-semibold text-gray-700 px-3 py-2 hover:bg-gray-50 bg-gray-100">
                          <i class="bi bi-clipboard"></i>
                        </button>
                      </div>
                      

                      
                      

                    </div>

                    <!-- Detail -->
                    <div v-if="isOpenChat" className='fixed inset-y-0 right-0 w-[400px] border bg-white z-[9999]'>
                      <div class="max-w-md mx-auto p-4 bg-white">
                        <!-- Header -->
                        <div class="flex items-center justify-between mb-4">
                          <div class="flex items-center">
                            <button @click="closeModalChat" class="text-gray-500 hover:text-gray-700 text-lg">&times;</button>
                            <h2 class="text-md font-semibold text-grey-500 pl-2">Chat with Us</h2>
                          </div>
                          <div class="flex items-center space-x-2">
                            <label class="inline-flex items-center cursor-pointer">
                              <input type="checkbox" value="" class="sr-only peer">
                              <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-300 dark:peer-checked:bg-yellow-600"></div>
                            </label>
                            <span>Enable Elev8 AI</span>
                            <button
                              class="w-5 h-5 rounded-full bg-green-500 border-2 border-white"
                              :class="{ 'bg-green-500': aiEnabled, 'bg-gray-300': !aiEnabled }"
                              @click="aiEnabled = !aiEnabled"
                            ></button>
                          </div>
                        </div>

                        <!-- Guest Info -->
                        <div class="bg-gray-100 p-3 rounded-md mb-4">
                          <div class="font-semibold">Komang Juliantara…</div>
                          <div class="text-sm text-gray-600">Mar 16 - 20 (4 days)</div>
                          <div class="text-sm text-gray-600">The R Loft Bali - Cosy Room incl Breakfast,…</div>
                        </div>

                        <!-- Messages -->
                        <div class="space-y-3 mb-12 pb-12">
                          <div class="ml-12 text-sm text-white bg-yellow-500 rounded-md p-3 max-w-[75%] self-end">
                            Good afternoon Juliantara!,<br />
                            Front office here, is there<br />anything we can do <br /> to help you?
                          </div>

                          <div class="text-sm text-gray-800 bg-gray-100 rounded-md p-3 max-w-[75%]">
                            Yes, where’s the key?
                          </div>

                          <div class="ml-12 text-sm text-white bg-yellow-500 rounded-md p-3 max-w-[75%] self-end">
                            Good afternoon! If you’re looking <br /> for the property key, please head over <br /> to the front desk, and we’ll be happy <br /> to assist you.
                          </div>
                        </div>

                        <!-- Message Input -->
                        <div class="pt-12 flex items-center space-x-2">
                          <input
                            type="text"
                            placeholder="Type a message..."
                            class="flex-1 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                          />
                        </div>
                        <br />
                        <div class="flex items-center justify-end space-x-2">
                          <button class="px-4 py-2 bg-gray-200 rounded-md text-sm">Send</button>
                        </div>
                      </div>

                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div
              class="flex items-center px-5 py-5 bg-white border-t xs:flex-row justify-between"
            >
              <span class="text-xs text-gray-900 xs:text-sm">Showing 1 to 4 of 50 Entries</span>

              <div class="inline-flex mt-2 xs:mt-0">
                <button
                  class="px-4 py-2 text-sm font-semibold text-gray-800 rounded-l hover:bg-gray-400"
                >
                  <
                </button>
                <button
                  class="px-4 py-2 text-sm font-semibold text-gray-800 bg-yellow-500 rounded-l hover:bg-gray-400"
                >
                  1
                </button>
                <button
                  class="px-4 py-2 text-sm font-semibold text-gray-800 rounded-l hover:bg-gray-400"
                >
                  2
                </button>
                <button
                  class="px-4 py-2 text-sm font-semibold text-gray-800 rounded-l hover:bg-gray-400"
                >
                  3
                </button>
                <button
                  class="px-4 py-2 text-sm font-semibold text-gray-800 rounded-l hover:bg-gray-400"
                >
                  ...
                </button>
                <button
                  class="px-4 py-2 text-sm font-semibold text-gray-800 rounded-l hover:bg-gray-400"
                >
                  10
                </button>
                <button
                  class="px-4 py-2 text-sm font-semibold text-gray-800 rounded-r hover:bg-gray-400"
                >
                  >
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
