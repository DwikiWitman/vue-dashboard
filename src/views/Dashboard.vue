<script setup lang="ts">
import { ref } from 'vue'
import LassoChart from '../components/LassoChart.vue'
import BarChart from '../components/BarChart.vue'

interface User {
  name: string
  email: string
  title: string
  title2: string
  status: string
  role: string
}

const testUser: User = {
  name: 'John Doe',
  email: 'john@example.com',
  title: 'Software Engineer',
  title2: 'Web dev',
  status: 'Active',
  role: 'Owner',
}

const users = ref<User[]>([...Array(10).keys()].map(() => testUser))

interface Task {
  listingId: string
  listingDescription: string
  taskNameId: string
  taskNameDescription: string
  priority: string
  time: string
  priorityProgress: string
}

const myTask: Task = {
  listingId: "ID: 15",
  listingDescription: "The R Apartment",
  taskNameId: "ID: 4330",
  taskNameDescription: "Minibar stock report",
  priority: "Medium",
  time: "19 Feb - 09:00AM",
  priorityProgress: "75 %"
}

const myTasks = ref<Task[]>([...Array(3).keys()].map(() => myTask))

interface Member {
  memberName: string
  memberRole: string
  hours: string
  tasks: string
  status: string
}

const myMember: Member = {
  memberName: "Bessie Cooper",
  memberRole: "110h : 150h",
  hours: "110h : 150h",
  tasks: "258",
  status: "50 %"
}

const myMembers = ref<Task[]>([...Array(3).keys()].map(() => myMember))
</script>

<template>
  <div>

    <div class="mt-4">
      <div class="flex flex-wrap -mx-6">
        <div class="w-full px-3 pl-6 mt-6 sm:w-1/2 xl:w-1/4 sm:mt-0">
          <div
            class="flex items-center px-5 py-3 bg-white rounded-md shadow-sm"
          >
            <div class="mx-2 w-full">
              <div class="flex items-center justify-between">
                <h4 class="text-gray-500 font-semibold ">
                  Total upsells
                </h4>
                <div class="text-xs font-bold text-green-500">
                  <i class="bi bi-arrow-up ml-2"></i>
                  + 16.24 %
                </div>
              </div>
              <h4 class="text-2xl pt-2 font-semibold text-gray-700">
                8,282
              </h4>
              <div class="flex items-center justify-between">
                <div class="text-xs pt-2 font-bold underline text-gray-500">
                  <a href="#">View all upsells</a> 
                </div>
                <button class="text-sm font-semibold text-gray-700 px-3 py-2 hover:bg-gray-50 bg-gray-100">
                  $652
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full px-3 mt-6 sm:w-1/2 xl:w-1/4 sm:mt-0">
          <div
            class="flex items-center px-5 py-3 bg-white rounded-md shadow-sm"
          >
            <div class="mx-2 w-full">
              <div class="flex items-center justify-between">
                <h4 class="text-gray-500 font-semibold ">
                  Total orders
                </h4>
                <div class="text-xs font-bold text-green-500">
                  <i class="bi bi-arrow-up ml-2"></i>
                  + 12.24 %
                </div>
              </div>
              <h4 class="text-2xl pt-2 font-semibold text-gray-700">
                17
              </h4>
              <div class="flex items-center justify-between">
                <div class="text-xs pt-2 font-bold underline text-gray-500">
                  <a href="#">View all orders</a> 
                </div>
                <button class="text-sm font-semibold text-gray-700 px-3 py-2 hover:bg-gray-50 bg-gray-100">
                  $4029
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full px-3 mt-6 sm:w-1/2 xl:w-1/4 sm:mt-0">
          <div
            class="flex items-center px-5 py-3 bg-white rounded-md shadow-sm"
          >
            <div class="mx-2 w-full">
              <div class="flex items-center justify-between">
                <h4 class="text-gray-500 font-semibold ">
                  Total active properties
                </h4>
              </div>
              <h4 class="text-2xl pt-2 font-semibold text-gray-700">
                3
              </h4>
              <div class="flex items-center justify-between">
                <div class="text-xs pt-2 font-bold underline text-gray-500">
                  <a href="#">View all listings</a> 
                </div>
                <button class="text-sm font-semibold text-gray-700 px-3 py-2 hover:bg-gray-50 bg-gray-100">
                  <i class="bi bi-house-door"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full px-3 mt-6 sm:w-1/2 xl:w-1/4 sm:mt-0">
          <div
            class="flex items-center px-5 py-3 bg-white rounded-md shadow-sm"
          >
            <div class="mx-2 w-full">
              <div class="flex items-center justify-between">
                <h4 class="text-gray-500 font-semibold ">
                  Total customers
                </h4>
                <div class="text-xs font-bold text-green-500">
                  <i class="bi bi-arrow-up ml-2"></i>
                  + 11.24 %
                </div>
              </div>
              <h4 class="text-2xl pt-2 font-semibold text-gray-700">
                15
              </h4>
              <div class="flex items-center justify-between">
                <div class="text-xs pt-2 font-bold underline text-gray-500">
                  <a href="#">View all orders</a> 
                </div>
                <button class="text-sm font-semibold text-gray-700 px-3 py-2 hover:bg-gray-50 bg-gray-100">
                  <i class="bi bi-people"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>

    <div class="mt-8" />

    <div class="flex flex-wrap gap-3 justify-between">
      <div class="w-full bg-white xl:w-3/5 rounded">
        <div class="flex items-center justify-between pt-6 pb-3 font-semibold text-gray-500 pl-6">
          Session by Countries
          <div style="width: 150px;" class="flex items-center justify-between pr-6">
            <i class="bi bi-plus-circle"></i>
            <i class="bi bi-dash-circle"></i>
            <i class="bi bi-search"></i>
            <i class="bi bi-house-door"></i>
            <i class="bi bi-three-dots-vertical"></i>
          </div>
        </div>
        <LassoChart class="px-6 pb-6" />
      </div>

      <div class="w-full bg-white xl:w-2/6 rounded">
        <div class="flex items-center justify-between pt-6 pb-3 pl-6 font-semibold text-gray-500">
          Current Statistics
            <i class="bi bi-three-dots-vertical pr-3"></i>
        </div>
        <div class="w-full flex items-center justify-center pt-3">
          <BarChart class="px-6 pb-6" />
        </div>
        <div class="flex items-center justify-between pt-6 pb-3 pl-6 pr-6">
          <div class="flex items-center">
            <span class="w-3 h-3 bg-blue-500 rounded-full"></span>
            <span class="text-xs text-gray-500">&nbsp Income</span>
            <div class="text-xs font-bold text-blue-500">
              <i class="bi bi-arrow-up ml-2"></i>
              + 43.29 %
            </div>
          </div>
          <div class="text-xs">
            <span>$161,466.24</span>
          </div>
        </div>
        <div class="flex items-center justify-between pb-3 pl-6 pr-6">
          <div class="flex items-center">
            <span class="w-3 h-3 bg-green-500 rounded-full"></span>
            <span class="text-xs text-gray-500">&nbsp Income</span>
            <div class="text-xs font-bold text-green-500">
              <i class="bi bi-arrow-up ml-2"></i>
              + 36.16 %
            </div>
          </div>
          <div class="text-xs">
            <span>$56,411.33</span>
          </div>
        </div>
        <div class="flex items-center justify-between pb-3 pl-6 pr-6">
          <div class="flex items-center">
            <span class="w-3 h-3 bg-red-500 rounded-full"></span>
            <span class="text-xs text-gray-500">&nbsp Income</span>
            <div class="text-xs font-bold text-red-500">
              <i class="bi bi-arrow-up ml-2"></i>
              + 40.22 %
            </div>
          </div>
          <div class="text-xs">
            <span>$81,981.22</span>
          </div>
        </div>
        <div class="flex items-center justify-between pb-3 pl-6 pr-6">
          <div class="flex items-center">
            <span class="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span class="text-xs text-gray-500">&nbsp Income</span>
            <div class="text-xs font-bold text-yellow-500">
              <i class="bi bi-arrow-up ml-2"></i>
              + 25.53 %
            </div>
          </div>
          <div class="text-xs">
            <span>$12,432.51</span>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8" />

    <div class="grid grid-cols-1 xl:grid-cols-2 gap-12">
      <!-- Left Division -->
      <div class="w-full rounded">
        <div class="flex flex-col mt-8">
          <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div
              class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
            >
              <div class="bg-white flex w-full justify-between px-6 py-4">
                <h3 class="font-semibold text-gray-500">
                  My Tasks
                </h3>
                <i class="bi bi-three-dots-vertical"></i>
              </div>
              <table class="min-w-full">
                <thead>
                  <tr>
                    <th
                      class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                    >
                      Select
                    </th>
                    <th
                      class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                    >
                      Listing
                    </th>
                    <th
                      class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                    >
                      Task Name
                    </th>
                    <th
                      class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                    >
                      Priority
                    </th>
                    <th
                      class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                    >
                      Data/Time Report
                    </th>
                    <th
                      class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                    >
                      Priority
                    </th>
                    <th
                      class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                    >
                      Assignee
                    </th>
                  </tr>
                </thead>

                <tbody class="bg-white">
                  <tr v-for="(m, index) in myTasks" :key="index">
                    <td
                      class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                    >
                      <div class="flex items-center">
                        <input type="checkbox" id="option1" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                      </div>
                    </td>

                    <td
                      class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                    >
                      <div class="">
                        <div class="text-sm font-medium leading-5 text-gray-900">
                          {{ m.listingId }} 
                        </div>
                        <div class="text-sm leading-5 text-gray-500">
                          {{ m.listingDescription }}
                        </div>
                      </div>
                    </td>

                    <td
                      class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                    >
                      <div class="text-sm leading-5 text-gray-900">
                        {{ m.taskNameId }}
                      </div>
                      <div class="text-sm leading-5 text-gray-500">
                        {{ m.taskNameDescription }}
                      </div>
                    </td>

                    <td
                      class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                    >
                      <span
                        class="inline-flex px-2 text-xs font-semibold leading-5 text-white bg-orange-300"
                      >{{ m.priority }}</span>
                    </td>

                    <td
                      class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                    >
                      {{ m.time }}
                    </td>

                    <td
                      class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                    >
                      <span
                        class="inline-flex px-2 text-xs font-semibold leading-5 text-white bg-orange-300 rounded-full"
                      >{{ m.priorityProgress }}</span>
                    </td>

                    <td
                      class="py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
                    >
                    <div style="width: 130px;" class="flex items-center justify-between px-3">
                      <i class="bi bi-plus-circle"></i>
                      <i class="bi bi-dash-circle"></i>
                      <i class="bi bi-search"></i>
                      <i class="bi bi-house-door"></i>
                      <i class="bi bi-three-dots-vertical"></i>
                    </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Division -->
      <div class="w-full rounded">
        <div class="flex flex-col mt-8">
          <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div
              class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
            >
              <div class="bg-white flex w-full justify-between px-6 py-4">
                <h3 class="font-semibold text-gray-500">
                  Team Members
                </h3>
                <i class="bi bi-three-dots-vertical"></i>
              </div>
              <table class="min-w-full">
                <thead>
                  <tr>
                    <th
                      class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                    >
                      Member
                    </th>
                    <th
                      class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                    >
                      Hours
                    </th>
                    <th
                      class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                    >
                      Tasks
                    </th>
                    <th
                      class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                    >
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody class="bg-white">
                  <tr v-for="(u, index) in myMembers" :key="index">
                    <td
                      class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                    >
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-10 h-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          >
                        </div>

                        <div class="ml-4">
                          <div class="text-sm font-medium leading-5 text-gray-900">
                            {{ u.memberName }}
                          </div>
                          <div class="text-sm leading-5 text-gray-500">
                            {{ u.memberRole }}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td
                      class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                    >
                      <div class="text-sm leading-5 text-gray-900">
                        {{ u.hours }}
                      </div>
                    </td>

                    <td
                      class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                    >
                      {{ u.tasks }}
                    </td>

                    <td
                      class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                    >
                      <span
                        class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                      >{{ u.status }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
