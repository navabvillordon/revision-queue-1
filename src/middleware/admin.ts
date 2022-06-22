import store from '@/store/index';
import router from '@/router';

export default function admin(next: any, route: any){
    if(!store.state.auth.loggedIn){
        return router.push({name: 'login'})
    }

    next();
}