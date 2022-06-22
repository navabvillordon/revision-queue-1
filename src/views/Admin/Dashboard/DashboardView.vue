<template>
    <div>
        <DashboardComponent></DashboardComponent>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import DashboardComponent from '@/components/Admin/Dashboard/DashboardComponent.vue';

    @Component({
        components:{
            DashboardComponent
        }
    })
    export default class Dashboard extends Vue {
        
    }
</script>

<style scoped>

</style>