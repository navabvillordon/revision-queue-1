<template>
    <div>
        <FormComponent></FormComponent>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FormComponent from '@/components/Login/FormComponent.vue'
    @Component({
        components:{
            FormComponent,
        }
    })

    export default class LoginView extends Vue {
      

    }
</script>

<style lang="scss" scoped>

</style>