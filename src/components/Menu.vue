<template>
     <v-container>
        <v-card color="blue" >
            <v-card-title>
                <div class="text-h3">Our Menu</div>
            </v-card-title>
        </v-card>
    </v-container>
    <v-container>
    <v-card class="mx-auto" elevation="24">
            <v-container>
            <v-row>
                <v-col cols="12" md="4" v-for="item in menuItems":key=item>
                    <v-card>
                        <v-card color="#160b2b">
                            <v-card-item>
                                <v-card-title>{{ item.name }}</v-card-title>

                                <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" :src="item.image" cover ></v-img>

                            <v-card-text>
                           {{ item.price }}
                            </v-card-text>

                         <v-btn color="black" variant="tonal" @click="addToOrder(item)">
                           Order
                        </v-btn>
                        </v-card>

                    </v-card>
                </v-col>
            </v-row>
            </v-container>
    </v-card>
    </v-container>

    <v-container>
        <v-card color="blue" >
            <v-card-title>
                <div class="text-h6">Current order: {{totalOrderAmount}}</div>
            </v-card-title>
        </v-card>
    </v-container>
    <v-container>
        <v-card class="mx-auto" elevation="24">
            <v-container>
                <v-row>
                    <v-col cols="12" md="4" v-for="item in orderItems" :key=item>
                        <v-card color="yellow">
                            <v-card-item>
                            <v-card-title>{{ item.name }}</v-card-title>

                            <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" :src="item.image" cover ></v-img>

                            <v-card-text>{{ item.price }}</v-card-text>
                        </v-card>
                        </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-container>
            
</template>

<script setup>
const menuItems = [
    {
        name: "Chips",
        price: 200,
        description: "Best chips in town",
        size: "Large",
        offers: "None",
        image: "/crispy-french-fries-with-ketchup-mayonnaise.jpg"
    },
    {
        name: "Chicken Alfredo",
        price: 50,
        description: "The only excusite Chicken Alfredo",
        size: "None",
        offers: "None",
        image: "/freshness-healthy-eating-homemade-vegetarian-pasta-generated-by-artificial-intelligence.jpg"
    },
    {
        name:"Burger",
        price:250,
        description:"Flavoury chicken burger",
        size:"medium",
        offers: "Buy 2 get 1 FREE!",
        image:"/burger-served-with-french-fries.jpg"
    },
    {
        name:"Grilled fish fillet",
        price:300,
        description:"Savoury grilled Fish fillet with a side of home made tartar sauce",
        size:"large",
        offers:"None",
        image: "/bass-fish-dish-assortment.jpg"
    },
    {
        name:"Hawaian pizza",
        price:350,
        Description:"pizza savoured with pineapple",
        size:"medium",
        image:"/hawaiian-pizza-with-pineappleham-cheese-black-slate-background (1).jpg"
    },
    {
        name:"Beef loaded fries"
    }
]

//manage the current state of the order
var orderItems=[]
var totalOrderAmount=0

function calculateTotalAmount(price){
    totalOrderAmount += price
}
function addToOrder(item){
    orderItems.push(item)
    calculateTotalAmount(item.price)

}

</script>
