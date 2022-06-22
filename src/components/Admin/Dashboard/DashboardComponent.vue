<template>
<v-app id="inspire">
    <v-app-bar app>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Application</v-toolbar-title>

        <v-spacer></v-spacer>
        
            <v-btn @click="logOut">
                <span>Logout</span>

                <v-icon>mdi-logout</v-icon>
            </v-btn>

        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        
    </v-app-bar>
    
    <v-main>
        <v-container class="mt-15">
            <v-row>
                <v-col class="profile-col" v-for="n in 24" :key="n" cols="4">
                    <v-card height="200">

                    </v-card>
                    <v-badge bordered color="error" content="6" class="task-counter" overlap></v-badge>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</v-app>
</template>

<script lang="ts">
import store from "@/store"
import router from "@/router";
export default {

methods:{
    logOut(){
        localStorage.removeItem('auth._token');
        localStorage.removeItem('auth._user');
        (async() =>{
            await store.dispatch('logout');
            router.push({name: 'login' });
            console.log('access')
        })();
        }
    }
}

</script>

<style>
.profile-col {
    position: relative !important;
}

.task-counter {
    position: absolute !important;
    top: 13px;
    left: 14px;
    color: red !important;
}
.dev-name{
  color: #000;
}
</style>
