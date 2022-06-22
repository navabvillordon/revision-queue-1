<template>
    <div>
        <UserComponent></UserComponent>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import UserComponent from '@/components/Admin/Users/UserComponent.vue'
    @Component({
        components:{
            UserComponent
        }
    })
    export default class Users extends Vue {
        
    }
</script>

<style scoped>

</style>