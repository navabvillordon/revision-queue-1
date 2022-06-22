<template>
<v-app id="inspire">
    <v-main class="login-page" :style="{backgroundImage:`url(${$store.state.app_url}/adonteam.jpg)`}">
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-form @submit.prevent="onLogin()">
                        <v-card class="elevation-12">
                            <v-toolbar dark color="primary">
                                <v-toolbar-title>Login</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field prepend-icon="mdi-account" v-model="username" name="Username" label="Username" type="text">
                                    </v-text-field>
                                    <v-text-field v-model="accesstoken" id="access-token" prepend-icon="mdi-lock" name="Access Token" label="Access Token" type="text">
                                    </v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" type="submit">Login</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-form>

                </v-flex>
            </v-layout>
        </v-container>
        <v-snackbar v-model="snackbar" :timeout="timeout"
            top
        >
            {{ text }}

            <template v-slot:action="{ attrs }">
                <v-btn 
                color="blue" 
                text v-bind="attrs" 
                @click="snackbar = false"
                
                >
                </v-btn>
            </template>
        </v-snackbar>
    </v-main>
</v-app>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from 'vue-property-decorator';
import {get,post} from '@/helpers/api'
import axios from 'axios';
import router from '@/router';
import Auth from '@/auth/auth';
import store from '@/store/index'
@Component
export default class Form extends Vue {
    drawer = false;
    username = '';
    accesstoken = '';
    snackbar = false;
    text = ''
    timeout = 2000;

    onLogin() {
        
        localStorage.removeItem('auth._user');
        localStorage.removeItem('auth._token');

        localStorage.setItem('auth._token', JSON.stringify(this.accesstoken))

        axios.defaults.headers.common['Authorization'] = `Bearer ${Auth.token()}`;
        axios.defaults.headers.common['Accept'] = 'application/json';
        get('users?username=' + this.username)
            .then((response) => {
                console.log(response);
                store.state.auth.loggedIn = true;
                store.state.auth.user = response.data;
                localStorage.setItem('auth._user', JSON.stringify(response.data))
                this.snackbar = true
                this.text = 'Redirecting to dashboard, please wait ...'
                
                setTimeout(()=>{
                    router.push('dashboard')
                },2000)
            })
            .catch((err) => {
                // console.log(err)
                // this.text = err.response.data.message
                if(err.response.status == 401){
                    this.text = 'Unauthorized'
                    this.snackbar = true
                    localStorage.removeItem('auth._token');
                }

                if(err.response.status == 403){
                    this.text = 'All fields are required!'
                    this.snackbar = true
                    localStorage.removeItem('auth._token');
                }
                
        })

    }

}
</script>

<style scoped>
main.v-main.login-page {
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}
</style>
