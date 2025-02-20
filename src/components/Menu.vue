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
                            <v-img height="200px" src="https://img.freepik.com/free-photo/grilled-chicken-thighs-pita-bread-served-with-fresh-vegetables_140725-251.jpg?t=st=1739955325~exp=1739958925~hmac=27e0265fec34e398c1013b99912d01b1f1ddb9c22e9296fef71b6b55ca85da04&w=740" cover ></v-img>

                            <v-card-text>
                           {{ item.price }}
                            </v-card-text>
                        </v-card>
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
        image: "https://unsplash.com/photos/a-basket-of-french-fries-sitting-on-top-of-a-wooden-table-ChXHveqrb28?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
    },
    {
        name: "Sausage",
        price: 50,
        description: "Best sausages in town",
        size: "None",
        offers: "None",
        image: "https://unsplash.com/photos/sausage-on-black-round-pan-cSxpCQrRlo8"
    },
    {
        name:"Burger",
        price:250,
        description:"Flavoury chicken burger",
        size:"medium",
        offers: "Buy 2 get 1 FREE!",
        image:"https://img.freepik.com/free-photo/close-up-three-mini-burgers-served-with-french-fries-paper-box_141793-2304.jpg?uid=R186032334&ga=GA1.1.1452505744.1738665279&semt=ais_hybrid"
    }
]
</script>
