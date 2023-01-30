import type { Dish } from "@/types";
import { defineStore } from "pinia";

type StateShape = {
    list: Dish[];
};

export const useDishStore = defineStore("DishStore", {
    state: (): StateShape => ({
        list: [
            {
              id: '7d9f3f17-964a-4e82-98e5-ecbba4d709a1',
              name: 'Ghost Pepper Poppers',
              status: 'Want to Try',
            },
            {
              id: '5c986b74-fa02-4a22-98f2-b1ff3559e85e',
              name: 'A Little More Chowder Now',
              status: 'Recommended',
            },
            {
              id: 'c113411d-1589-414f-a283-daf7eedb631e',
              name: 'Full Laptop Battery',
              status: 'Do Not Recommend',
            },
        ]
    }),
    getters: {
        numberOfDishes(state: StateShape): number {
            return state.list.length;
        }
    },
    actions: {
        addDish(dish: Dish): void {
            this.list.push(dish);
        },
        removeDish(dish: Dish): void {
            this.list = this.list.filter((d) => d.id !== dish.id);
        },
    },
});